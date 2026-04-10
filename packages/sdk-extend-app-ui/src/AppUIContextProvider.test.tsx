/*
 * Copyright (c) 2022-2026 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */

import '@testing-library/jest-dom'

import { ListRoleV4Response, UserResponseV3 } from '@accelbyte/sdk-iam'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { render, screen, waitFor } from '@testing-library/react'
import { DefaultBodyType, http, HttpResponse, HttpResponseResolver, JsonBodyType, PathParams } from 'msw'
import { setupServer } from 'msw/node'
import { type ReactNode } from 'react'
import { afterAll, afterEach, beforeAll, beforeEach, describe, expect, test, vi } from 'vitest'
import { AppUIContextProvider } from './AppUIContextProvider'
import { useAppUIContext } from './context'
import type { CrudRolePermission, SdkConfigOptions } from './types'
import { CrudType } from './types'

const BASE_URL = 'https://test.accelbyte.io'
const NAMESPACE = 'test-namespace'

const sdkConfig: SdkConfigOptions = {
  baseURL: BASE_URL,
  clientId: 'test-client-id',
  redirectURI: 'https://localhost:3000',
  namespace: NAMESPACE
}

const userFixture: UserResponseV3 = {
  authType: 'EMAILPASSWD',
  bans: [],
  country: 'US',
  createdAt: '2024-01-01T00:00:00Z',
  dateOfBirth: '1990-01-01',
  displayName: 'Test User',
  emailAddress: 'test@example.com',
  emailVerified: true,
  enabled: true,
  lastDateOfBirthChangedTime: '2024-01-01T00:00:00Z',
  lastEnabledChangedTime: '2024-01-01T00:00:00Z',
  namespace: NAMESPACE,
  namespaceRoles: [
    { roleId: 'role-1', namespace: NAMESPACE },
    { roleId: 'role-2', namespace: 'other-namespace' }
  ],
  oldEmailAddress: '',
  permissions: [],
  phoneVerified: false,
  userId: 'user-123',
  roles: ['role-1'],
  deletionStatus: false
}

const rolesFixture: ListRoleV4Response = {
  data: [
    {
      roleId: 'role-1',
      roleName: 'Admin',
      adminRole: true,
      isWildcard: false,
      permissions: [
        { resource: `ADMIN:NAMESPACE:${NAMESPACE}:STORE`, action: 2 },
        { resource: `ADMIN:NAMESPACE:${NAMESPACE}:CATEGORY`, action: 15 }
      ]
    },
    {
      roleId: 'role-2',
      roleName: 'Other',
      adminRole: false,
      isWildcard: false,
      permissions: [{ resource: `ADMIN:NAMESPACE:other-namespace:STORE`, action: 15 }]
    }
  ],
  paging: { first: '', last: '', next: '', previous: '' }
}

const handlers = {
  userMe: http.get(`${BASE_URL}/iam/v3/admin/users/me`, () => HttpResponse.json(userFixture)),
  roles: http.get(`${BASE_URL}/iam/v4/admin/roles`, () => HttpResponse.json(rolesFixture))
}

const server = setupServer()

beforeAll(() => server.listen())
afterEach(() => server.resetHandlers())
afterAll(() => server.close())

function TestWrapper({ children }: { children: ReactNode }) {
  const queryClient = new QueryClient({ defaultOptions: { queries: { retry: false } } })
  return <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
}

// We use stub here because we "forward" anything that's passed through the `module.mount`.
const stubPermissionChecker = (_permission: CrudRolePermission) => true

function TestConsumer() {
  const ctx = useAppUIContext()
  return (
    <div data-testid="consumer">
      <span data-testid="loading">{String(ctx.isLoading)}</span>
      <span data-testid="perm">
        {String(ctx.isCurrentUserHasPermission({ resource: `ADMIN:NAMESPACE:${NAMESPACE}:STORE`, action: CrudType.READ }))}
      </span>
    </div>
  )
}

describe('AppUIContextProvider', () => {
  beforeEach(() => {
    vi.clearAllMocks()
  })

  describe('production mode', () => {
    beforeEach(() => {
      vi.stubEnv('NODE_ENV', 'production')
    })

    afterEach(() => {
      vi.unstubAllEnvs()
    })

    test('should renders error when the permission check function is not passed from Admin Portal', () => {
      render(
        <TestWrapper>
          <AppUIContextProvider sdkConfig={sdkConfig}>
            <div data-testid="child">Hello</div>
          </AppUIContextProvider>
        </TestWrapper>
      )

      expect(screen.getByText(/Error: isCurrentUserHasPermission is not passed from the Admin Portal/)).toBeInTheDocument()
    })

    test('renders children immediately without triggering login', () => {
      render(
        <TestWrapper>
          <AppUIContextProvider sdkConfig={sdkConfig} isCurrentUserHasPermission={stubPermissionChecker}>
            <div data-testid="child">Hello</div>
          </AppUIContextProvider>
        </TestWrapper>
      )

      expect(screen.getByTestId('child').textContent).toBe('Hello')
    })

    test('exposes context via useAppUIContext hook', () => {
      render(
        <TestWrapper>
          <AppUIContextProvider sdkConfig={sdkConfig} isCurrentUserHasPermission={stubPermissionChecker}>
            <TestConsumer />
          </AppUIContextProvider>
        </TestWrapper>
      )

      expect(screen.getByTestId('loading').textContent).toBe('false')
      expect(screen.getByTestId('perm').textContent).toBe('true')
    })

    test('uses host-provided isCurrentUserHasPermission', () => {
      const customChecker = vi.fn().mockReturnValue(false)

      render(
        <TestWrapper>
          <AppUIContextProvider sdkConfig={sdkConfig} isCurrentUserHasPermission={customChecker}>
            <TestConsumer />
          </AppUIContextProvider>
        </TestWrapper>
      )

      expect(screen.getByTestId('perm').textContent).toBe('false')
      expect(customChecker).toHaveBeenCalledWith({ resource: `ADMIN:NAMESPACE:${NAMESPACE}:STORE`, action: CrudType.READ })
    })
  })

  describe('development mode', () => {
    // For development mode, we are using a different base url, so we have to re-define this.
    const BASE_URL = `${window.location.origin}/proxy`
    const handlers = {
      userMe: http.get(`${BASE_URL}/iam/v3/admin/users/me`, () => HttpResponse.json(userFixture)),
      roles: http.get(`${BASE_URL}/iam/v4/admin/roles`, () => HttpResponse.json(rolesFixture))
    }

    test('fetches user and resolves roles, filtering to current namespace', async () => {
      const roleHandlersWithALotOfRoles: HttpResponseResolver<PathParams, DefaultBodyType, JsonBodyType> = ctx => {
        const { offset = '0', limit } = Object.fromEntries(new URL(ctx.request.url).searchParams)
        const isLast = offset === '200'

        // The role containing ADMIN:NAMESPACE:{namespace}:STORE is put at the end of the list here to test if the fetcher
        // fetches all roles or not.
        return HttpResponse.json({
          data: Array.from({ length: 300 }, (_, idx) => ({
            adminRole: true,
            isWildcard: false,
            permissions: isLast
              ? [
                  { resource: `ADMIN:NAMESPACE:${NAMESPACE}:STORE`, action: 2 },
                  { resource: `ADMIN:NAMESPACE:${NAMESPACE}:CATEGORY`, action: 15 }
                ]
              : [],
            roleId: `role-${idx}`,
            roleName: `role-${idx}`
          })),
          paging: { first: '', last: '', next: isLast ? '' : `${Number(offset) + Number(limit)}`, previous: '' }
        } satisfies typeof rolesFixture)
      }

      server.use(handlers.userMe, http.get(`${BASE_URL}/iam/v4/admin/roles`, roleHandlersWithALotOfRoles))

      render(
        <TestWrapper>
          <AppUIContextProvider sdkConfig={sdkConfig}>
            <TestConsumer />
          </AppUIContextProvider>
        </TestWrapper>
      )

      await waitFor(() => expect(screen.getByTestId('perm').textContent).toBe('true'))
    })

    test('redirects to IAM authorize URL when there is no active session', async () => {
      const replaceMock = vi.fn()
      vi.stubGlobal('location', { origin: new URL(BASE_URL).origin, href: BASE_URL, replace: replaceMock })

      server.use(
        http.get(`${BASE_URL}/iam/v3/admin/users/me`, () => HttpResponse.json({ errorCode: 20001 }, { status: 401 })),
        http.post(`${BASE_URL}/iam/v3/oauth/token`, () => HttpResponse.json({ errorCode: 20001 }, { status: 401 }))
      )

      render(
        <TestWrapper>
          <AppUIContextProvider sdkConfig={sdkConfig}>
            <div data-testid="child">Hello</div>
          </AppUIContextProvider>
        </TestWrapper>
      )

      await waitFor(() => {
        expect(replaceMock).toHaveBeenCalledWith(expect.stringContaining(`${BASE_URL}/iam/v3/oauth/authorize`))
      })

      vi.unstubAllGlobals()
    })

    test('role-2 from other-namespace does not "leak" as an Admin role', async () => {
      server.use(handlers.userMe, handlers.roles)

      function OtherNsPermConsumer() {
        const ctx = useAppUIContext()
        return !ctx.isLoading ? (
          <span data-testid="other-ns-perm">
            {String(ctx.isCurrentUserHasPermission({ resource: `ADMIN:NAMESPACE:other-namespace:STORE`, action: CrudType.CREATE }))}
          </span>
        ) : null
      }

      render(
        <TestWrapper>
          <AppUIContextProvider sdkConfig={sdkConfig}>
            <OtherNsPermConsumer />
          </AppUIContextProvider>
        </TestWrapper>
      )

      await waitFor(() => expect(screen.getByTestId('other-ns-perm').textContent).toBe('false'))
    })
  })
})
