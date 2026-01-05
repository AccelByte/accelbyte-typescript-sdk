# @accelbyte/sdk-event

## 6.2.4

### Patch Changes

- 6835a55: fix(sdk): regenerate sdk from codegen to prevent always overriding interceptor even when interceptors are not being passed

## 6.2.3

### Patch Changes

- Updated dependencies [bbaf676]
  - @accelbyte/validator@0.2.30

## 6.2.2

### Patch Changes

- d38fb2d: chore: sync

## 6.2.1

### Patch Changes

- 4a6110f: fix: update vulnerable dependencies
- Updated dependencies [4a6110f]
  - @accelbyte/validator@0.2.29

## 6.2.0

### Minor Changes

- ad310c6: feat: update peer dependencies to support react query v5

### Patch Changes

- Updated dependencies [04a6c28]
  - @accelbyte/validator@0.2.28

## 6.1.0

### Minor Changes

- 6622b29: feat: CWA-4047 global umd bundle

### Patch Changes

- a3ab4f0: fix: update vulnerable dependencies
- Updated dependencies [a3ab4f0]
- Updated dependencies [95453bf]
- Updated dependencies [6a01c4d]
  - @accelbyte/validator@0.2.27

## 6.0.4

### Patch Changes

- Updated dependencies [dd58643]
  - @accelbyte/validator@0.2.26
  - @accelbyte/sdk@4.0.4

## 6.0.3

### Patch Changes

- 2d222aa: fix: update vulnerable dependencies
- Updated dependencies [2d222aa]
  - @accelbyte/validator@0.2.25
  - @accelbyte/sdk@4.0.3

## 6.0.2

### Patch Changes

- Updated dependencies [b9aedec]
  - @accelbyte/validator@0.2.24
  - @accelbyte/sdk@4.0.2

## 6.0.1

### Patch Changes

- da4e505: fix(packages): fix failed publish because of invalid tag
- Updated dependencies [da4e505]
  - @accelbyte/sdk@4.0.1
  - @accelbyte/validator@0.2.23

## 6.0.0

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

- Updated dependencies [cfb0dba]
  - @accelbyte/sdk@4.0.0
  - @accelbyte/validator@0.2.22

## 2.1.3

### Patch Changes

- Updated dependencies [8bba3b81b]
- Updated dependencies [d84f877e9]
  - @accelbyte/validator@0.2.16
  - @accelbyte/sdk@2.0.6

## 2.1.1

### Patch Changes

- Updated dependencies [e1c22f0f9]
  - @accelbyte/validator@0.2.15
  - @accelbyte/sdk@2.0.4

## 2.1.0

### Patch Changes

- 4f5b32ea9: fix: change get countries from basic into iam
