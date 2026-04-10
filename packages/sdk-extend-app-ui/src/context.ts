import type { AccelByteSDK } from '@accelbyte/sdk'
import type { CrudRolePermission } from '@accelbyte/validator'
import { createContext, useContext } from 'react'

export interface AppUIContextValue {
  sdk: AccelByteSDK
  isLoading: boolean
  isCurrentUserHasPermission: (permission: CrudRolePermission) => boolean
}

export const AppUIContext = createContext<AppUIContextValue | null>(null)

export function useAppUIContext(): AppUIContextValue {
  const ctx = useContext(AppUIContext)
  if (!ctx) {
    throw new Error('useAppUIContext must be used within an <AppUIContextProvider>')
  }
  return ctx
}
