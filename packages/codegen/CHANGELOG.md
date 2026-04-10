# @accelbyte/codegen

## 4.2.0

### Minor Changes

- 6d6b1de: feat(codegen): add abcodegen.config.ts and fix various type, lint, and format issue
- 6d6b1de: feat(codegen): allow splitting service name when there are multiple items in swaggers.json

### Patch Changes

- 6d6b1de: fix(codegen): create parent dir before writing version.json to prevent ENOENT
- 6d6b1de: fix(codegen): generate Record<string, any> for map[string]interface{} and map[string]any response/body types
- 6d6b1de: fix(codegen): resolve method conflict properly when both has the same last word

## 4.1.6

### Patch Changes

- a953bff: fix(codegen): fix codegen always forcing interceptor to be overridden even though no interceptors are passed

## 4.1.5

### Patch Changes

- d38fb2d: chore: sync

## 4.1.4

### Patch Changes

- d84e76b: fix(codegen): use sdk name in snippet

## 4.1.3

### Patch Changes

- 4a6110f: fix: update vulnerable dependencies

## 4.1.2

### Patch Changes

- 399f178: chore: CWA-4079 change the import of typescript SDK as individual APIs

## 4.1.1

### Patch Changes

- 92a9f2f: chore(codegen): CWA-4078 adding snippet for Typescript SDK UMD format

## 4.1.0

### Minor Changes

- 9d5c2e8: feat: add websocket support

## 4.0.2

### Patch Changes

- dcbd075: fix: change git url for snippet
- f841b16: fix(codegen):
  - use **DOMAIN** for baseURL
  - make output optional when generate only code snippets
  - add snippetOutput option

## 4.0.1

### Patch Changes

- da4e505: fix(packages): fix failed publish because of invalid tag

## 4.0.0

### Major Changes

- cfb0dba: AGS TypeScript SDK

  - SDK Initialization: The SDK now requires two separate fields: `coreConfig` and `axiosConfig` for initialization, instead of a single options object. This change was made to clearly separate concerns between core SDK configurations and Axios-specific configurations, improving clarity and flexibility.
  - Return Response: API function calls now return `{ data, headers, status }` instead of just `data`.
  - Event Listeners: Event listeners (e.g., `onSessionExpired`) have been replaced by Axios interceptors.
  - Interceptors: Moving event listeners to interceptors improves customization, allowing consumers to handle events and errors through the Axios interceptor rather than relying on SDK-specific events.
  - Token Repository: Allow tokens to be attached in SDK and rename `refreshTokens` method to `setToken` for Extend compatibilty.
  - API Classes and Methods: Fix redundant API Classes name and inaccurate methods name.
  - Generated React Query: Optionally access AGS using react-query for better server-state management.

### Patch Changes

- 72ed555: feat(codegen): allow generate snippets only
- 8de49a1: fix(codegen): fix codegen outputting invalid comments if comments contain end-of-multiline-comment

## 3.0.0

### Major Changes

- Removed "cache" argument generation

## 2.3.1

### Patch Changes

- [Codegen] Fix `x-security` extension not being properly parsed

## 2.3.0

### Minor Changes

- [Codegen] Add `Authorization` header for Web SDK and Shell snippets if operation contains `x-security` array or path includes `/admin/`

## 2.2.1

### Patch Changes

- [Codegen] Codegen now also generate deprecated endpoints but it's marked as `@deprecated` using JSDoc

## 2.2.0

### Minor Changes

- [Codegen] Codegen now also generate admin endpoints alongside public endpoints

## 2.0.0

### Major Changes

- [Codegen] Rework the codegen
