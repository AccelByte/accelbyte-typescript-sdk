# @accelbyte/sdk-iam

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

## 5.0.2

### Patch Changes

- fix(sdk-iam): custom abstraction config should be merged from apiArgs

## 5.0.1

### Major Changes

- 6ccbd5efc fix(WebSDK): Refresh all sdks adding "\_DEPRECATED" suffix for deprecated methods

## 4.0.0

### Major Changes

- 8b2ab2a50 chore(validator): add explicit error messages to thrown errors
- b8a9a9fe8 fix(validator): allow @accelbyte/validator to be able to validate URLs with hash
- 38b090f1a feat(WebSDK) - Adds localStorage ZodEnabled flag allowing to skip zod validation
- dbd8ef74d fix(WebSDK): Remove SdkCache and codegenerate all @accelbyte/sdk-\* packages
- 8e8b4769f feat(WebSDK) - Codegen is updated to merge Admin Into public WebSDK

## 3.1.1

### Patch Changes

- 35dff2a73: chore(sdk-iam): bump version after accidental publish
- c7a84b7e8: fix(sdk-iam): add device id param for login with code or password

## 2.2.3

### Patch Changes

- 8bba3b81b: feat: CW-3368 bad word validation for userName and displayName;
- Updated dependencies [8bba3b81b]
- Updated dependencies [d84f877e9]
  - @accelbyte/validator@0.2.16
  - @accelbyte/sdk@2.0.6

## 2.2.1

### Patch Changes

- Updated dependencies [e1c22f0f9]
  - @accelbyte/validator@0.2.15
  - @accelbyte/sdk@2.0.4

## 2.2.0

### Patch Changes

- 4f5b32ea9: fix: change get countries from basic into iam
