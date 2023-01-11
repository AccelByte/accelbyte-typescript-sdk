### 0.1.1-alpha.52 - 2022-12-28

- Register feature flag for Login Web placed under Player Portal section
- Add 3rd-party login config to hide/show it as the login option
### 0.1.1-alpha.51 - 2023-01-06

- Deprecate justice-js-common-utils

### 0.1.1-alpha.50 - 2023-01-04

- Fix build error

### 0.1.1-alpha.49 - 2023-01-03

- Update dependency versions

### 0.1.1-alpha.48 - 2022-12-27

- Fix user is unable to activate 2fa with email due to missing `content-type: application/x-www-form-urlencoded`

### 0.1.1-alpha.47 - 2022-12-22

- Fix wrong fields in package.json being deleted

### 0.1.1-alpha.46 - 2022-12-22

- Make dependencies exist in SDK when publishing

### 0.1.1-alpha.45 - 2022-12-19

- Update typings of IResponseError
- Update conditional exports to support both Node and Browser environments

### 0.1.1-alpha.44 - 2022-12-09

- Make CJS to always be built with browser: false and ESM with browser: true

### 0.1.1-alpha.43 - 2022-12-09

- Fix missing types in package.json

### 0.1.1-alpha.42 - 2022-12-08

- Remove peer dependencies
- [Editor] Global Styles are automatically applied to all areas of Player Portal V2, Launcher V2 and other apps

### 0.1.1-alpha.40 - 2022-12-01

- Fix build and publish process (2)

### 0.1.1-alpha.39 - 2022-12-01

- [Dev][PP] Add account linking with one time code page
- Fix build and publish process

### 0.1.1-alpha.38 - 2022-11-23

- Prettify config files
- [Dev][Legal app] Odin legal app not displaying list of game namespace legal document

### 0.1.1-alpha-37 - 2022-11-17

- Fix `currentUserCanOrder` function returning `false` when `user` is `null`

### 0.1.1-alpha-36 - 2022-11-16

- [DEV][STAGE][Login App][Registration] Published legal is not displayed on registration page if selected country doesn't have legal
- Add vitest and tests to some of the API classes and utilities

### 0.1.1-alpha-35 - 2022-11-15

- [Dev][PP][Launcher] App will crash when try to access upgrade headless account or Link to New Account registration form
- Remove duplicate "exchangeAuthorizationCode" and "getFormattedValidation" methods and add `IamHelper.getAuthorizationCodeParams()`

### 0.1.1-alpha-34 - 2022-11-10

- [WebSDK] Adjust cache overrides for certain API that need `cache: false`

### 0.1.1-alpha-33 - 2022-11-07

- [WebSDK] WebSDK accepts cache argument at initialization

### 0.1.1-alpha-32 - 2022-11-02

- Adding 2FA email method at password and security menu
- Adding 2FA email method at 2FA verification page

### 0.1.1-alpha-31 - 2022-10-30

- Removes isDesktopOption
- Renames AccelbyteSDK apis from camelCase to TitleCase
- Removes refreshToken from SDK Options

### 0.1.1-alpha-30 - 2022-10-13

- [Dev][PP][Launcher] Validate IAM inputs using regex returned from backend

### 0.1.1-alpha-29 - 2022-10-11

- [Dev][PP][Launcher] Update `justice-js-common-utils` to improve `generatePattern` logic in `InputValidationHelper`

### 0.1.1-alpha-28 - 2022-10-07

- [Dev][PP][Launcher] Update `justice-js-common-utils` to improve `generatePattern` logic in `InputValidationHelper`

### 0.1.1-alpha.27 - 2022-10-05

- Publish Web SDK

### 0.1.1-alpha.26 - 2022-10-05

- [Dev][PP][Launcher][My Profile] Change email address stay at the same page after input valid verification code & new email address
- [Dev][PP][Launcher] User must click accept button on legal pop up twice for closing it

### 0.1.1-alpha.25 - 2022-09-30

- [Dev][PP][Launcher] Update `justice-js-common-utils` to improve `generatePattern` logic in `InputValidationHelper`

### 0.1.1-alpha.24 - 2022-09-29

- fix list of linked account not changed after unlink account, set the cache false for getUserDistinctLinkedPlatform

### 0.1.1-alpha.23 - 2022-09-27

- Split WebSDK to Admin and Public, Introduce Cache in WebSDK
- [Dev][PP][My Account] Save Changes Button Shown as Reload Upon Finishing Register New Account Through Link New Account

### 0.1.1-alpha.22 - 2022-09-22

- [STG][PP][Upgrade Account] There is no error message while inputting existing email.

### 0.1.1-alpha.21 - 2022-09-19

- remove patches containing language patterns, WalletInfo definition, and OrderInfo definition
- [WebSDK] Add Cache in WebSDK
- [Editor][Improvement] Move the Social Links Configuration to General Settings

### 0.1.1-alpha.20 - 2022-09-16

- Ecommerce AppState Refactor
- Update Web SDK to the latest

### 0.1.1-alpha.19 - 2022-09-13

- [Dev][WebSDK] Address warnings when building od-web-sdk

### 0.1.1-alpha.18 - 2022-09-14

- [Dev][PP] User stuck on legal popup loading screen after successfully upgrade headless account

### 0.1.1-alpha.17 - 2022-09-07

- [Dev][PP][Launcher] Fix always get 409 on upgrading headless account

### 0.1.1-alpha.16 - 2022-09-07

- [Editor][Config Service] Ensure that all featureFlags are migrated to ppFeatureFlags/launcherFeatureFlags, and move experimental flags to discovery

### 0.1.1-alpha.15 - 2022-09-01

- [DEV][PP][Feedback] show owned information of the item contained in option box (add new entitlement api)

### 0.1.1-alpha.14 - 2022-08-25

- [PP][Account Linking] There is no success message when user successfully link their account

### 0.1.1-alpha.13 - 2022-08-24

- [PP][Stores][OPTIONBOX] Implement store list page
- [PP][Stores][OPTIONBOX] Implement detail optionbox page
- [PP][Stores][OPTIONBOX] Claim item inside option

### 0.1.1-alpha.12 - 2022-08-22

- [Dev][PP][Launcher] Add IAM validation for email in upgrade headless
- [Dev][PP][Launcher] Add IAM validation for email in change email and link 3rd party to a new account

### 0.1.1-alpha.11 - 2022-08-19

- Move account business logic to WebSdk

### 0.1.1-alpha.10 - 2022-08-15

- [Dev][PP][Launcher] Legal checklist missing on 3rd party new account registration page

### 0.1.1-alpha.9 - 2022-08-12

- [Dev][PP][Launcher] After purchase game, Buy Now button not changes into Play button or Go to Library button
- [WebSDK] Refactor IAM business logic to the Web SDK

### 0.1.1-alpha.8 - 2022-08-09

- Break getUnsignedPolicies function into multiple methods 

### 0.1.1-alpha.7 - 2022-08-05

- Simplify legal service business logic flow and move to Web SDK

### 0.1.1-alpha.6 - 2022-08-04

- [Dev][Player Portal] Add a redirection page for user verification through link
- Move out login flow logic out to Web SDK

### 0.1.1-alpha.5 - 2022-07-29

- [Editor][PP][Launcher] Migrate Editor, PP and Launcher to the latest Config-Service endpoints

### 0.1.1-alpha.4 - 2022-07-27

- Update the typings for `config.data` for Odin Config Web SDK
- [Editor] App Id use dropdown select

### 0.1.1-alpha.3 - 2022-07-26

- [WebSDK] Web SDK is updated with new config-service endpoints

### 0.1.1-alpha.2 - 2022-07-21

- Apply Alternative themes
- [Editor] Handle user access scenario

### 0.1.1-alpha.1 - 2022-07-14

- compare patches with latest swaggers
- [Technical] Audit and Remove unused NPM dependencies
- [Technical] Clean up unused sdk-web-test directory
