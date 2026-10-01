import { beforeEach, describe, expect, it, vi } from 'vitest'
import { AccelByte } from '@accelbyte/sdk'
import { AxiosError, type AxiosAdapter, type AxiosResponse, type InternalAxiosRequestConfig } from 'axios'
import { SignInError, signIn } from '../src/ags'

beforeEach(() => {
  vi.stubGlobal('localStorage', window.localStorage)
  localStorage.clear()
})

const token = {
  access_token: 'test-player-access-token',
  expires_in: 3600,
  token_type: 'Bearer',
  namespace: 'signalrun',
  user_id: 'player-id',
  refresh_token: 'test-refresh-token',
  scope: 'social',
  roles: [],
  permissions: []
}

function setup(failure?: { status: number; data: unknown }) {
  const requests: InternalAxiosRequestConfig[] = []
  const adapter: AxiosAdapter = async request => {
    requests.push(request)
    const response: AxiosResponse<unknown> = {
      config: request,
      headers: {},
      status: failure?.status ?? 200,
      statusText: 'test',
      data: failure?.data ?? token
    }
    if (failure) throw new AxiosError('Request failed', 'ERR_BAD_REQUEST', request, undefined, response)
    return response
  }
  const sdk = AccelByte.SDK({
    coreConfig: {
      baseURL: 'https://game.example.test',
      namespace: 'signalrun',
      clientId: 'public-client',
      redirectURI: 'http://localhost:4317'
    },
    axiosConfig: { request: { adapter } }
  })
  return { sdk, requests }
}

describe('custom sign-in with the password grant', () => {
  it('posts the credentials with the public client id, no secret, and keeps only the access token in memory', async () => {
    const { sdk, requests } = setup()
    await signIn(sdk, 'nullish@example.test', 'correct horse')
    expect(requests).toHaveLength(1)
    expect(requests[0]?.url).toBe('/iam/v3/oauth/token')
    expect(requests[0]?.headers.get('Authorization')).toBe(`Basic ${btoa('public-client:')}`)
    const body = new URLSearchParams(String(requests[0]?.data))
    expect(body.get('grant_type')).toBe('password')
    expect(body.get('username')).toBe('nullish@example.test')
    expect(body.get('password')).toBe('correct horse')
    expect(body.has('client_secret')).toBe(false)
    expect(sdk.getToken().accessToken).toBe('test-player-access-token')
    expect(sdk.getToken().refreshToken).toBeUndefined()
    expect(Object.values(localStorage)).not.toContain('test-player-access-token')
  })

  it.each([
    { status: 400, data: { error: 'wrong password' } },
    { status: 401, data: { error: 'invalid username or password' } }
  ])('reports rejected credentials ($status) without accepting a token', async failure => {
    const { sdk } = setup(failure)
    const attempt = signIn(sdk, 'nullish@example.test', 'nope')
    await expect(attempt).rejects.toBeInstanceOf(SignInError)
    await expect(attempt).rejects.toMatchObject({ reason: 'credentials' })
    expect(sdk.getToken().accessToken).toBeUndefined()
  })

  it.each([
    { status: 401, data: { error: 'invalid_client', error_description: 'unknown client' } },
    { status: 400, data: { error: 'invalid_grant', error_description: 'invalid token or code verifier' } }
  ])('does not blame the password for $data.error', async failure => {
    const { sdk } = setup(failure)
    await expect(signIn(sdk, 'nullish@example.test', 'correct horse')).rejects.toMatchObject({
      reason: 'rejected',
      code: failure.data.error
    })
  })

  it('refuses a two-factor challenge instead of storing its token', async () => {
    const { sdk } = setup({ status: 403, data: { mfa_token: 'pending-mfa', factors: ['authenticator'] } })
    await expect(signIn(sdk, 'nullish@example.test', 'correct horse')).rejects.toMatchObject({ reason: 'mfa' })
    expect(localStorage.length).toBe(0)
  })

  it('propagates other failures for the shared error messages', async () => {
    const { sdk } = setup({ status: 429, data: { errorCode: 20007 } })
    await expect(signIn(sdk, 'nullish@example.test', 'correct horse')).rejects.toBeInstanceOf(AxiosError)
  })
})
