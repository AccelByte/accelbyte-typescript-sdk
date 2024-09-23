# @accelbyte/validator

## 0.2.23

### Patch Changes

- 2f84f3f: fix(packages): fix failed publish because of invalid tag

## 0.2.22

### Patch Changes

- cfb0dba: AGS TypeScript SDK

  - SDK Initialization: The SDK now requires two separate fields: `coreConfig` and `axiosConfig` for initialization, instead of a single options object. This change was made to clearly separate concerns between core SDK configurations and Axios-specific configurations, improving clarity and flexibility.
  - Return Response: API function calls now return `{ data, headers, status }` instead of just `data`.
  - Event Listeners: Event listeners (e.g., `onSessionExpired`) have been replaced by Axios interceptors.
  - Interceptors: Moving event listeners to interceptors improves customization, allowing consumers to handle events and errors through the Axios interceptor rather than relying on SDK-specific events.
  - Token Repository: Allow tokens to be attached in SDK and rename `refreshTokens` method to `setToken` for Extend compatibilty.
  - API Classes and Methods: Fix redundant API Classes name and inaccurate methods name.
  - Generated React Query: Optionally access AGS using react-query for better server-state management.

## 0.2.21

### Patch Changes

- chore: add explicit error messages to thrown errors

## 0.2.20

### Patch Changes

- fix: allow @accelbyte/validator to be able to validate URLs with hash

## 0.2.16

### Patch Changes

- 8bba3b81b: feat: CW-3368 bad word validation for userName and displayName;
- d84f877e9: fix: fixing regex pattern on bad word validation to match only special char;

## 0.2.15

### Patch Changes

- e1c22f0f9: fix wrong validation on it's will return error when not required and empty and add default value on letterCaseon validateDisplayName to any