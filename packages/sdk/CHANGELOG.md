# @accelbyte/sdk

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
