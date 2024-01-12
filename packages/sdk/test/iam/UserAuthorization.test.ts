/*
 * Copyright (c) 2022-2024 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { afterAll, afterEach, beforeAll, expect, test } from 'vitest'
import { rest } from 'msw'
import { setupServer } from 'msw/node'

import tokenExchange from '../fixtures/authorization/token-exchange.json'
import { TEST_BASE_URL, TEST_CLIENT_ID, TEST_REDIRECT_URI, TEST_SDK } from '../test-utils'
import { MFADataResponse, IamUserAuthorizationClient } from '@accelbyte/sdk-iam'

// TODO: Move the IAM Test Part to SDK-IAM
const server = setupServer(
  rest.post(`${TEST_BASE_URL}/iam/v3/oauth/token`, async (req, res, ctx) => {
    const text = await req.text()
    const params = new URLSearchParams(text)
    const code = params.get('code')

    if (code === 'test-code-mfa') {
      // Response 401 for 2FA.
      const response: MFADataResponse = {
        mfa_token: 'test-mfa-token',
        factors: ['email'],
        default_factor: 'email'
      }

      return res(ctx.status(401), ctx.json(response))
    }

    if (!code) {
      // If `code` is not defined, then it means it tries to refresh the token.
      // We are supposed to read the cookie here, but I am not sure why the cookie doesn't stick
      // to the test DOM.
      const json = { ...tokenExchange, access_token: 'test-access-token-refreshed' }
      return res(ctx.json(json))
    }

    if (code === 'test-code-refresh') {
      const json = {
        ...tokenExchange,
        access_token: 'test-access-token-refresh',
        refresh_token: 'test-refresh-token-refresh'
      }
      return res(ctx.json(json))
    }

    return res(ctx.json(tokenExchange))
  })
)

// Establish API mocking before all tests.
beforeAll(() => server.listen())

// Reset any request handlers that we may add during the tests,
// so they don't affect other tests.
afterEach(() => {
  localStorage.clear()
  TEST_SDK.refreshTokens(undefined, undefined)
  document.cookie = ''
  server.resetHandlers()
})

// Clean up after the tests are finished.
afterAll(() => server.close())

const IAM = new IamUserAuthorizationClient(TEST_SDK)

test('Create login URL', async () => {
  let loginUrl = IAM.createLoginURL('/')
  let searchParams = new URL(loginUrl).searchParams

  expect(searchParams.get('response_type')).toBe('code')
  expect(searchParams.get('client_id')).toBe(TEST_CLIENT_ID)
  expect(searchParams.get('redirect_uri')).toBe(TEST_REDIRECT_URI)
  expect(searchParams.get('state')).not.toBeNull()
  expect(searchParams.get('code_challenge')).not.toBeNull()
  expect(searchParams.get('code_challenge_method')).toBe('S256')
  expect(searchParams.get('createHeadless')).toBe('false')
  expect(searchParams.get('target_auth_page')).toBeNull()

  // With target auth page.
  loginUrl = IAM.createLoginURL('/', '/auth/invitation/hello')
  searchParams = new URL(loginUrl).searchParams

  expect(searchParams.get('response_type')).toBe('code')
  expect(searchParams.get('client_id')).toBe(TEST_CLIENT_ID)
  expect(searchParams.get('redirect_uri')).toBe(TEST_REDIRECT_URI)
  expect(searchParams.get('state')).not.toBeNull()
  expect(searchParams.get('code_challenge')).not.toBeNull()
  expect(searchParams.get('code_challenge_method')).toBe('S256')
  expect(searchParams.get('createHeadless')).toBe('false')
  expect(searchParams.get('target_auth_page')).toBe('/auth/invitation/hello')
})

test('Create forgot password URL', async () => {
  const loginUrl = IAM.createForgotPasswordURL()
  const searchParams = new URL(loginUrl).searchParams

  expect(searchParams.get('response_type')).toBe('code')
  expect(searchParams.get('client_id')).toBe(TEST_CLIENT_ID)
  expect(searchParams.get('redirect_uri')).toBe(TEST_REDIRECT_URI)
  expect(searchParams.get('state')).not.toBeNull()
  expect(searchParams.get('code_challenge')).not.toBeNull()
  expect(searchParams.get('code_challenge_method')).toBe('S256')
  expect(searchParams.get('createHeadless')).toBe('false')
  expect(searchParams.get('target_auth_page')).toBe('forgot-password')
})

test('Exchange token', async () => {
  // Generate login URL, which saves the state into the local storage.
  const loginUrl = IAM.createLoginURL('/')
  const searchParams = new URL(loginUrl).searchParams

  expect(searchParams.get('state')).not.toBeNull()
  const loginState = searchParams.get('state')!

  // Exchange code, using the state we save in the local storage.
  const result = await IAM.exchangeAuthorizationCode({
    code: 'test-code',
    error: undefined,
    state: loginState
  })

  expect(result?.response?.data.access_token).toBe('test-access-token')
  expect(result?.response?.data.refresh_token).toBe('test-refresh-token')
})

test('Exchange token, with email 2FA', async () => {
  // Generate login URL, which saves the state into the local storage.
  const loginUrl = IAM.createLoginURL('/')
  const searchParams = new URL(loginUrl).searchParams

  expect(searchParams.get('state')).not.toBeNull()
  const loginState = searchParams.get('state')!

  // Exchange code, using the state we save in the local storage.
  // What we're testing here is that, we want to make sure if the API is able to process
  // if the API asks for 2FA.
  const result = await IAM.exchangeAuthorizationCode({
    code: 'test-code-mfa',
    error: undefined,
    state: loginState
  })

  expect(result?.response).toBeNull()
  expect(result?.returnPath).toBe('/')
  expect(result?.mfaData).toEqual({
    mfaToken: 'test-mfa-token',
    factors: ['email'],
    defaultFactor: 'email'
  })
})

test('Refresh token', async () => {
  // Generate login URL, which saves the state into the local storage.
  const loginUrl = IAM.createLoginURL('/')
  const searchParams = new URL(loginUrl).searchParams

  expect(searchParams.get('state')).not.toBeNull()
  const loginState = searchParams.get('state')!

  // Exchange code, using the state we save in the local storage.
  await IAM.exchangeAuthorizationCode({
    code: 'test-code-refresh',
    error: undefined,
    state: loginState
  })

  // Now try refresh the code.
  const result = await IAM.refreshToken()

  if (typeof result === 'boolean') throw new Error(`response cannot be boolean`)

  expect(result?.access_token).toBe('test-access-token-refreshed')
  expect(result?.refresh_token).toBe('test-refresh-token')
})
