# `@accelbyte/sdk-extend-app-ui`

SDK for building **Extend App UI** applications — micro-frontends that are embedded inside the AGS Admin Portal. It provides:

- A React context that handles authentication and permission checking.
- A Vite dev plugin that proxies requests to the AGS backend.
- TypeScript types for the module contract between the host (Admin Portal) and your app.

## Constraints

These are the current constraints:

- Vite is currently the only official way to build Extend App UI as other bundlers are not supported yet.
- React is currently the only official way to build Extend App UI.
- Although the micro-frontend approach is using Module Federation, Admin Portal **does not** share dependencies with the App UI when loading the modules. This ensures loose coupling between the Admin Portal and the App UI, removing any strict dependencies versioning that would otherwise break one another.
- The micro-frontend _has to be_ a Single Page Application (SPA).

## Installation

```bash
npm install @accelbyte/sdk-extend-app-ui
```

Peer dependencies:

```bash
npm install @accelbyte/sdk @accelbyte/sdk-iam react @tanstack/react-query vite
```

| Peer dependency         | Supported versions                  |
| ----------------------- | ----------------------------------- |
| `@accelbyte/sdk`        | `^4.0.4`                            |
| `@accelbyte/sdk-iam`    | `^6.3.2`                            |
| `react`                 | `^17.0.0` or `^18.0.0` or `^19.0.0` |
| `@tanstack/react-query` | `^4.36.1` or `^5.0.0`               |
| `vite`                  | `^7`                                |

## Core concepts

### Development vs production mode

`AppUIContextProvider` detects the environment via `NODE_ENV` and switches behavior:

| Aspect      | Development                                                          | Production                                                   |
| ----------- | -------------------------------------------------------------------- | ------------------------------------------------------------ |
| Auth        | Exchanges OAuth2 authorization code, refreshes tokens automatically  | Skipped — Admin Portal manages auth                          |
| Permissions | Fetches current user + all roles from IAM, sets a permission checker | Uses `isCurrentUserHasPermission` passed by the Admin Portal |

## Usage

### 1. Implement the module contract

The Admin Portal loads your app as a module and calls `mount`. Export an object conforming to `AppUIModule`. We recommend using `@tanstack/react-query` as the library for fetching resources.

```tsx
import { AppUIContextProvider, type AppUIModule } from '@accelbyte/sdk-extend-app-ui'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import { App } from './my-app'

const client = new QueryClient()

const module: AppUIModule = {
  mount(container, context) {
    const root = createRoot(container)

    root.render(
      <StrictMode>
        <QueryClientProvider client={client}>
          <AppUIContextProvider sdkConfig={context.sdkConfig} isCurrentUserHasPermission={context.isCurrentUserHasPermission}>
            {/* Pass context.basePath to your router's basename if your app uses client-side routing */}
            <BrowserRouter basename={context.basePath}>
              <App />
            </BrowserRouter>
          </AppUIContextProvider>
        </QueryClientProvider>
      </StrictMode>
    )

    return () => root.unmount()
  }
}

export default module
```

### 2. Access the context in child components

```tsx
import { CrudType, useAppUIContext } from '@accelbyte/sdk-extend-app-ui'

function MyComponent() {
  const { sdk, isLoading, isCurrentUserHasPermission } = useAppUIContext()

  if (isLoading) return <Spinner />

  const canWrite = isCurrentUserHasPermission({ resource: 'ADMIN:NAMESPACE:{namespace}:CONTENT', action: CrudType.CREATE })

  return canWrite ? <Editor sdk={sdk} /> : <ReadOnlyView sdk={sdk} />
}
```

### 3. Vite dev proxy

During development, API calls need to be proxied to the AGS backend (to avoid CORS issues). Add `devProxyPlugin` to your `vite.config.ts`:

> `baseUrl` and `redirectURI` must match the values registered in your IAM OAuth client.

```ts
import { devProxyPlugin } from '@accelbyte/sdk-extend-app-ui/plugins'
import { defineConfig } from 'vite'

export default defineConfig({
  plugins: [
    devProxyPlugin({
      baseUrl: 'https://your-ags-instance.accelbyte.io',
      redirectURI: 'http://localhost:5173'
    })
  ]
})
```

All requests to `/proxy/*` are forwarded to the AGS backend. Point your SDK's `baseURL` to `/proxy` in development:

```ts
const sdkConfig = {
  baseURL: import.meta.env.DEV ? '/proxy' : 'https://your-ags-instance.accelbyte.io'
  // ...
}
```

The plugin also handles Shared Cloud subdomain routing: it reads the `access_token` cookie, extracts the namespace, and sets the correct `Referer` header automatically.

## API reference

### `AppUIContextProvider`

```ts
interface AppUIContextProviderProps {
  sdkConfig: SdkConfigOptions
  /**
   * Provided by the host in production. Omit in development —
   * the provider will fall back to its own PermissionGuard.
   */
  isCurrentUserHasPermission?: (permission: CrudRolePermission) => boolean
  children: ReactNode
}
```

### `useAppUIContext`

```ts
interface AppUIContextValue {
  /** Initialized AccelByteSDK instance. Use this to call AGS APIs. */
  sdk: AccelByteSDK
  /** True while user data or roles are loading. */
  isLoading: boolean
  /** Returns true if the current user has the given permission. */
  isCurrentUserHasPermission: (permission: CrudRolePermission) => boolean
}
```

### `devProxyPlugin`

```ts
function devProxyPlugin(options: {
  /** AGS backend base URL. Must match the baseURL registered in your IAM OAuth client. */
  baseUrl: string
  /** OAuth2 redirect URI. Must match the redirect URI registered in your IAM OAuth client. */
  redirectURI: string
}): Plugin
```

### Types

| Type                  | Description                                                                                     |
| --------------------- | ----------------------------------------------------------------------------------------------- |
| `SdkConfigOptions`    | Core config passed to `AccelByte.SDK()`                                                         |
| `HostContext`         | Object passed from the host to `mount()`: `sdkConfig`, `basePath`, `isCurrentUserHasPermission` |
| `AppUIModule` | Contract your app module must implement: `mount(container, context): () => void`                |
| `CrudRolePermission`  | Permission descriptor used with `isCurrentUserHasPermission`                                    |
| `CrudType`            | Enum for CRUD actions with string values: `CREATE`, `READ`, `UPDATE`, `DELETE`                  |
