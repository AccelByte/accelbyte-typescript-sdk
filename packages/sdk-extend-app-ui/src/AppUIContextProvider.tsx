import { AccelByte, AccelByteSDK, createAuthInterceptor, type Interceptor } from '@accelbyte/sdk'
import { IamOAuthClient, IamUserAuthorizationClient, RolesAdminApi, RoleV4Response } from '@accelbyte/sdk-iam'
import { useUsersAdminApi_GetUsersMe_v3 } from '@accelbyte/sdk-iam/react-query'
import { getRoleIdsByNamespace, PermissionGuard, type AdminUser, type CrudRolePermission } from '@accelbyte/validator'
import { useQuery } from '@tanstack/react-query'
import { useMemo, useState, type ReactNode } from 'react'
import { AppUIContext, type AppUIContextValue } from './context'
import type { SdkConfigOptions } from './types'

export interface AppUIContextProviderProps {
  sdkConfig: SdkConfigOptions
  isCurrentUserHasPermission?: (permission: CrudRolePermission) => boolean
  children: ReactNode
}

function ProdProvider({ sdkConfig, isCurrentUserHasPermission, children }: AppUIContextProviderProps) {
  if (typeof isCurrentUserHasPermission === 'undefined') {
    return <div>Error: isCurrentUserHasPermission is not passed from the Admin Portal</div>
  }

  const contextValue: AppUIContextValue = {
    sdk: useMemo(() => AccelByte.SDK({ coreConfig: sdkConfig }), [sdkConfig]),
    isLoading: false,
    isCurrentUserHasPermission
  }

  return <AppUIContext.Provider value={contextValue}>{children}</AppUIContext.Provider>
}

// What this does:
//
// 1. Exchanges auth code.
// 2. Gets current user and gets list of roles.
// 3. Creates a permission guard for development purposes.
function DevProvider({ sdkConfig, children }: AppUIContextProviderProps) {
  const { code, error, state } = Object.fromEntries(new URL(window.location.href).searchParams)
  const [devBaseURL] = useState(() => {
    if (typeof window === 'undefined') return ''
    return `${window.location.origin}/proxy`
  })

  const rolesQueryKey = `key__extend-app-ui-roles-${sdkConfig.baseURL}`
  const rolesQueryExpiryKey = `key__extend-app-ui-roles-expire-${sdkConfig.baseURL}`

  const { sdk, authSdk } = useMemo(() => {
    const interceptors: Interceptor[] = []

    interceptors.push(
      createAuthInterceptor({
        clientId: sdkConfig.clientId,
        async onSessionExpired() {
          if (!code && !state) {
            const iamClient = new IamUserAuthorizationClient(authSdk)

            const refreshed = await iamClient.refreshToken()
            if (refreshed) return

            redirectToLoginPage({ authSdk, rolesQueryExpiryKey, rolesQueryKey })
          }
        }
      })
    )

    const sdk = AccelByte.SDK({
      coreConfig: {
        ...sdkConfig,
        baseURL: `${devBaseURL}${new URL(sdkConfig.baseURL).pathname}`
      },
      axiosConfig: { interceptors }
    })
    const authSdk = AccelByte.SDK({
      coreConfig: { ...sdkConfig, baseURL: devBaseURL },
      axiosConfig: { interceptors }
    })
    return { sdk, authSdk }
  }, [sdkConfig, code, state, rolesQueryKey, rolesQueryExpiryKey])

  // Exchange code. We bypass the `useEffect` by using `useQuery` like this, preventing double fetch in strict mode.
  const exchangeCodeResult = useQuery({
    queryKey: ['exchange-auth-code', sdkConfig.baseURL, code, state],
    queryFn: async () => {
      try {
        await new IamUserAuthorizationClient(authSdk).exchangeAuthorizationCode({ code, error, state })

        const newURL = new URL(window.location.href)
        newURL.searchParams.delete('code')
        newURL.searchParams.delete('state')
        window.history.replaceState({}, '', newURL)

        return { error: null }
      } catch (err) {
        return { error: err }
      }
    },
    enabled: !!code && !!state
  })

  const currentNamespace = sdkConfig.namespace
  const { data: userData, isLoading: isUserLoading } = useUsersAdminApi_GetUsersMe_v3(
    authSdk,
    {},
    {
      enabled: !code && !state
    }
  )

  const { data: allRoles, isLoading: isRolesLoading } = useQuery<RoleV4Response[]>({
    queryKey: [rolesQueryKey],
    queryFn: async () => {
      const allData: RoleV4Response[] = []

      try {
        const rolesFromStorage = sessionStorage.getItem(rolesQueryKey)
        const rolesFromStorageExpiry = Number(sessionStorage.getItem(rolesQueryExpiryKey) ?? '-1')
        const hasExpired = new Date().valueOf() > rolesFromStorageExpiry

        if (rolesFromStorage && !hasExpired) {
          const json: unknown[] = JSON.parse(rolesFromStorage)
          const parsed: RoleV4Response[] = json.map(roleResponse => RoleV4Response.parse(roleResponse))

          allData.push(...parsed)
          return allData
        }

        const api = RolesAdminApi(authSdk)
        const LIMIT = 100
        let offset = 0

        while (true) {
          try {
            const resp = await api.getRoles_v4({ limit: LIMIT, offset })
            allData.push(...resp.data.data)
            if (!resp.data.paging.next) break
            offset += LIMIT
          } catch {
            break
          }
        }
      } catch (err) {
        console.error(err)
      }

      sessionStorage.setItem(rolesQueryKey, JSON.stringify(allData))
      sessionStorage.setItem(rolesQueryExpiryKey, `${new Date().valueOf() + 900_000}`) // 15 minutes

      return allData
    },
    enabled: !!userData
  })

  const permissionGuard = useMemo(() => {
    if (!userData || !allRoles) return null

    const relevantRoleIds = getRoleIdsByNamespace(userData?.namespaceRoles || [], currentNamespace)
    const allPermissions: AdminUser['permissions'] = allRoles
      .filter(role => relevantRoleIds.includes(role.roleId))
      .flatMap(role =>
        (role.permissions ?? []).map(permission => ({
          ...permission,
          schedAction: undefined,
          schedCron: undefined,
          schedRange: undefined
        }))
      )

    const adminUser: AdminUser = {
      ...userData,
      dateOfBirth: userData.dateOfBirth ?? '',
      oldEmailAddress: userData.oldEmailAddress ?? '',
      newEmailAddress: userData.newEmailAddress ?? '',
      phoneNumber: userData.phoneNumber ?? '',
      platformId: userData.platformId ?? '',
      platformUserId: userData.platformUserId ?? '',
      userName: userData.userName ?? '',
      permissions: allPermissions
    }

    return new PermissionGuard({ user: adminUser, currentNamespace })
  }, [userData, allRoles, currentNamespace])

  const contextValue: AppUIContextValue = {
    sdk,
    isLoading: isUserLoading || isRolesLoading,
    isCurrentUserHasPermission: permission => permissionGuard?.hasPermission(permission) ?? false
  }

  if (exchangeCodeResult.data && exchangeCodeResult.data.error) {
    const message = exchangeCodeResult.data.error instanceof Error ? exchangeCodeResult.data.error.message : 'Authentication failed'
    return (
      <div style={{ padding: '20px', color: '#dc2626', fontFamily: 'sans-serif' }}>
        <h3 style={{ margin: '0 0 8px 0' }}>Authentication Error</h3>
        <p style={{ margin: '0 0 16px 0' }}>{message}</p>
        <button
          onClick={() => window.location.reload()}
          style={{
            padding: '8px 16px',
            cursor: 'pointer',
            border: '1px solid #dc2626',
            borderRadius: '4px',
            background: 'transparent',
            color: '#dc2626'
          }}>
          Retry Login
        </button>
      </div>
    )
  }

  if (isUserLoading || isRolesLoading || !permissionGuard) {
    return (
      <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh', flexDirection: 'column', gap: 16 }}>
        <style>{`
          @keyframes spin {
            from { transform: rotate(0deg); }
            to   { transform: rotate(360deg); }
          }
        `}</style>
        <LoadingIcon />

        <div>Preparing your development setup...</div>
      </div>
    )
  }

  return (
    <AppUIContext.Provider value={contextValue}>
      {children}

      <button
        onClick={async () => {
          try {
            await new IamOAuthClient(authSdk).logout()
            redirectToLoginPage({ authSdk, rolesQueryExpiryKey, rolesQueryKey })
          } catch {
            // No-op.
          }
        }}
        aria-label="Logout (dev-only feature)"
        title="Logout (dev-only feature)"
        style={{
          padding: 16,
          position: 'fixed',
          right: 6,
          bottom: 6,
          borderRadius: '50%',
          cursor: 'pointer',
          background: '#eaeaea'
        }}>
        <LogoutIcon />
      </button>
    </AppUIContext.Provider>
  )
}

/**
 * The context for Admin UI. What it does:
 *
 * - In development mode: creates SDK instance, handles authentication, and abstracting the permission check.
 * - In production mode: creates SDK instance and forwards the permission check passed from AGS Admin Portal.
 *
 * When the App UI is built [with vite], the `DevProvider` will be omitted from the final build result.
 */
export function AppUIContextProvider({ isCurrentUserHasPermission, ...props }: AppUIContextProviderProps) {
  return process.env.NODE_ENV === 'production' ? (
    <ProdProvider {...props} isCurrentUserHasPermission={isCurrentUserHasPermission} />
  ) : (
    <DevProvider {...props} />
  )
}

async function redirectToLoginPage({
  authSdk,
  rolesQueryExpiryKey,
  rolesQueryKey
}: {
  authSdk: AccelByteSDK
  rolesQueryExpiryKey: string
  rolesQueryKey: string
}) {
  sessionStorage.removeItem(rolesQueryKey)
  sessionStorage.removeItem(rolesQueryExpiryKey)

  const iamClient = new IamUserAuthorizationClient(authSdk)
  window.location.replace(iamClient.createLoginURL())
}

function LogoutIcon() {
  return (
    <svg viewBox="64 64 896 896" focusable="false" data-icon="logout" width="1em" height="1em" fill="currentColor" aria-hidden="true">
      <path d="M868 732h-70.3c-4.8 0-9.3 2.1-12.3 5.8-7 8.5-14.5 16.7-22.4 24.5a353.84 353.84 0 01-112.7 75.9A352.8 352.8 0 01512.4 866c-47.9 0-94.3-9.4-137.9-27.8a353.84 353.84 0 01-112.7-75.9 353.28 353.28 0 01-76-112.5C167.3 606.2 158 559.9 158 512s9.4-94.2 27.8-137.8c17.8-42.1 43.4-80 76-112.5s70.5-58.1 112.7-75.9c43.6-18.4 90-27.8 137.9-27.8 47.9 0 94.3 9.3 137.9 27.8 42.2 17.8 80.1 43.4 112.7 75.9 7.9 7.9 15.3 16.1 22.4 24.5 3 3.7 7.6 5.8 12.3 5.8H868c6.3 0 10.2-7 6.7-12.3C798 160.5 663.8 81.6 511.3 82 271.7 82.6 79.6 277.1 82 516.4 84.4 751.9 276.2 942 512.4 942c152.1 0 285.7-78.8 362.3-197.7 3.4-5.3-.4-12.3-6.7-12.3zm88.9-226.3L815 393.7c-5.3-4.2-13-.4-13 6.3v76H488c-4.4 0-8 3.6-8 8v56c0 4.4 3.6 8 8 8h314v76c0 6.7 7.8 10.5 13 6.3l141.9-112a8 8 0 000-12.6z"></path>
    </svg>
  )
}

function LoadingIcon() {
  return (
    <svg
      viewBox="0 0 1024 1024"
      focusable="false"
      data-icon="loading"
      width="1em"
      height="1em"
      fill="currentColor"
      aria-hidden="true"
      style={{ animation: 'spin 1s linear infinite', fontSize: 36 }}>
      <path d="M988 548c-19.9 0-36-16.1-36-36 0-59.4-11.6-117-34.6-171.3a440.45 440.45 0 00-94.3-139.9 437.71 437.71 0 00-139.9-94.3C629 83.6 571.4 72 512 72c-19.9 0-36-16.1-36-36s16.1-36 36-36c69.1 0 136.2 13.5 199.3 40.3C772.3 66 827 103 874 150c47 47 83.9 101.8 109.7 162.7 26.7 63.1 40.2 130.2 40.2 199.3.1 19.9-16 36-35.9 36z"></path>
    </svg>
  )
}
