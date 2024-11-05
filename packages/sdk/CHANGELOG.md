# @accelbyte/sdk

## 4.0.2

### Patch Changes

- Updated dependencies [b9aedec]
  - @accelbyte/validator@0.2.24

## 4.0.1

### Patch Changes

- da4e505: fix(packages): fix failed publish because of invalid tag
- Updated dependencies [da4e505]
  - @accelbyte/validator@0.2.23

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

- Updated dependencies [cfb0dba]
  - @accelbyte/validator@0.2.22

## 3.0.7

### Major Changes

- dcda8313c feat(sdk): bump sdk to support useSchemaValidation
- 8b2ab2a50 chore(validator): add explicit error messages to thrown errors
- b8a9a9fe8 fix(validator): allow @accelbyte/validator to be able to validate URLs with hash
- 4e4b00795 Cleanup dead files and unused isValidationEnabled argument
- 466cfbf1a feat(WebSDK): Simplifies sdk Validate fetch call
- ad0209304 fix(WebSDK) - no-jira fix build by removing dead "cache" args
- b3e840f3e Fix Build due to "cache:false"
- 7161c5eea feat(WebSDK): Remove "cache" argument from WebSDK

## 2.4.2

### Patch Changes

- CW-3992 fix validate responseType to exclude 204 response status
- 2668bd876 fix(sdk): web sdk add 204 empty payload support in web sdk validator
- 519c32ab4 feat(sdk,login): add alert when request return 429 status code and fix reload button
- e73dc0969 Merged in skip-zod-validation-web-sdk

## 2.3.1

### Patch Changes

- Add `onTooManyRequest` into `onEvents` to handle event when the request fail if the backend returns 429 response (too many request)

## 2.3.0

### Minor Changes

- CW-3798 Add descriptive log when the other service is down.

## 2.0.6

### Patch Changes

- Updated dependencies [8bba3b81b]
- Updated dependencies [d84f877e9]
  - @accelbyte/validator@0.2.16

## 2.0.5

### Patch Changes

- [WebSDK] Change "crypto" Dependency From WebSDK

## 2.0.4

### Patch Changes

- Updated dependencies [e1c22f0f9]
  - @accelbyte/validator@0.2.15
