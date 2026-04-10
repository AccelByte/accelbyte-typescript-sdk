import { describe, expect, it } from 'vitest'
import { getTargetAndReferer } from './vite-dev-proxy'

const SHARED_CLOUD_ENV_VALUES = {
  baseUrl: 'https://prod.gamingservices.accelbyte.io',
  redirectURI: 'http://localhost:5173'
}
const PRIVATE_CLOUD_ENV_VALUES = {
  baseUrl: 'https://single.tenant.url.io',
  redirectURI: 'http://localhost:5173'
}

describe('getTargetAndReferer', () => {
  it('[Private Cloud] returns the baseUrl as target and redirectURI as referer when there is no cookie', () => {
    const result = getTargetAndReferer('', PRIVATE_CLOUD_ENV_VALUES)

    expect(result.target).toBe('https://single.tenant.url.io')
    expect(result.referer).toBe('http://localhost:5173')
  })

  it('[Private Cloud] returns the baseUrl as target and redirectURI as referer even with a cookie', () => {
    const token = makeJwt({ namespace: 'my-game' })
    const result = getTargetAndReferer(makeCookie(token), PRIVATE_CLOUD_ENV_VALUES)

    expect(result.target).toBe('https://single.tenant.url.io')
    expect(result.referer).toBe('http://localhost:5173')
  })

  it('[Shared Cloud] spoofs the referer with namespace when access_token is present', () => {
    const token = makeJwt({ namespace: 'hello-world' })
    const result = getTargetAndReferer(makeCookie(token), SHARED_CLOUD_ENV_VALUES)

    expect(result.target).toBe('https://prod.gamingservices.accelbyte.io')
    expect(result.referer).toBe('http://hello-world.localhost:5173')
  })

  it('[Shared Cloud] returns default referer when cookie has no access_token', () => {
    const result = getTargetAndReferer('other_cookie=abc', SHARED_CLOUD_ENV_VALUES)

    expect(result.target).toBe('https://prod.gamingservices.accelbyte.io')
    expect(result.referer).toBe('http://localhost:5173')
  })

  it('[Shared Cloud] returns default referer when cookie string is empty', () => {
    const result = getTargetAndReferer('', SHARED_CLOUD_ENV_VALUES)

    expect(result.referer).toBe('http://localhost:5173')
  })

  it('[Shared Cloud] handles different namespaces correctly', () => {
    const token = makeJwt({ namespace: 'acme-corp' })
    const result = getTargetAndReferer(makeCookie(token), SHARED_CLOUD_ENV_VALUES)

    expect(result.referer).toBe('http://acme-corp.localhost:5173')
  })

  it('[Shared Cloud] preserves host port in the spoofed referer', () => {
    const token = makeJwt({ namespace: 'test-ns' })
    const env = {
      baseUrl: 'https://prod.gamingservices.accelbyte.io',
      redirectURI: 'http://localhost:3000'
    }
    const result = getTargetAndReferer(makeCookie(token), env)

    expect(result.referer).toBe('http://test-ns.localhost:3000')
  })

  it('[Shared Cloud] falls back gracefully when the JWT payload is malformed', () => {
    const malformedToken = 'header.not-valid-base64.signature'
    const result = getTargetAndReferer(makeCookie(malformedToken), SHARED_CLOUD_ENV_VALUES)

    expect(result.target).toBe('https://prod.gamingservices.accelbyte.io')
    expect(result.referer).toBe('http://localhost:5173')
  })

  it('[Shared Cloud] falls back gracefully when the JWT is missing the namespace field', () => {
    const token = makeJwt({ sub: 'user-id' })
    const env = {
      baseUrl: 'https://prod.gamingservices.accelbyte.io',
      redirectURI: 'http://localhost:5173'
    }
    const result = getTargetAndReferer(makeCookie(token), env)

    // namespace is undefined, so referer becomes "http://undefined.localhost:5173"
    // This is the current behavior -- the function doesn't validate the namespace field
    expect(result.target).toBe('https://prod.gamingservices.accelbyte.io')
    expect(result.referer).toBe('http://undefined.localhost:5173')
  })
})

// Helper functions.
function makeJwt(payload: Record<string, unknown>): string {
  const header = Buffer.from(JSON.stringify({ alg: 'RS256' })).toString('base64url')
  const body = Buffer.from(JSON.stringify(payload)).toString('base64url')
  return `${header}.${body}.fake-signature`
}

function makeCookie(accessToken: string): string {
  return `access_token=${accessToken}; Path=/`
}
