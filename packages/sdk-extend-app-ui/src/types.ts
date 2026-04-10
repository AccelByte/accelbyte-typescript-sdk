import type { SdkConstructorParam } from '@accelbyte/sdk'
import type { CrudRolePermission } from '@accelbyte/validator'

export type SdkConfigOptions = SdkConstructorParam['coreConfig']

export { CrudType, type CrudRolePermission } from '@accelbyte/validator'

export interface HostContext {
  /** The main SDK config used to fetch services in AGS. */
  sdkConfig: SdkConfigOptions
  /**
   * The base path of the application.
   * Pass this to the `basename` prop of the Router if you are using react-router, or just set it as "/".
   */
  basePath: string
  /**
   * Checks if the current user has permission.
   * In production the host (Admin Portal) provides this function.
   * When omitted (local development), AppUIContextProvider falls back to
   * a dev-only implementation that uses PermissionGuard internally.
   */
  isCurrentUserHasPermission?: (permission: CrudRolePermission) => boolean
}

export interface AppUIModule {
  /**
   * Mount function. When this is called, it returns unmount function. This can be used
   * to clean up event handlers or any other side effects.
   */
  mount(container: HTMLElement, context: HostContext): () => void
}
