### 2.0.0-beta.10 - 2023-07-12

- Fix codegen cannot properly parse `file` types

### 2.0.0-beta.9 - 2023-07-12

- Fix codegen cannot parse nested `properties`

### 2.0.0-beta.8 - 2023-07-12

- Add @apidevtools/swagger-parser to dependencies of codegen

### 2.0.0-beta.7 - 2023-06-30

- Fix Version Helper to handle package version prerelease from stable release

### 2.0.0-beta.6 - 2023-06-20

- Enable emitting public and admin SDKs in one go

### 2.0.0-beta.5 - 2023-06-15

- Sort parameters based on their occurrence order in the path as a param

### 2.0.0-beta.4 - 2023-06-07

- Allow auto bumping version for admin web sdk
- Set `predefinedMajorVersion` as 0 if it is not set in package.json to prevent bumping the version to NaN

### 2.0.0-beta.3 - 2023-05-31

- Fix codegen checks when combining VERSION_BUMP_TYPE and PRERELEASE_ID

### 2.0.0-beta.2 - 2023-05-30

- Improve codegen flow to cater cutoff, releases, and hotfixes

### 2.0.0-beta.1 - 2023-05-29

- Fix codegen failed to build with JSON imports

### 2.0.0-beta.0 - 2023-05-26

- Rework the versioning of codegen, remove CHANGELOG.md insertion

### 1.0.5 - 2023-05-20

- Fix codegen accidentally bumping the version by +1 when releasing stable versions
- Fix codegen for local build not prettifying JSON causing noises in PR

### 1.0.4 - 2023-05-15

- Fix template-method sorting pathParams

### 1.0.3 - 2023-05-15

- Fix codegen semver parsing

### 1.0.2 - 2023-05-10

- Properly handle error when there's non-2xx status code when downloading Swagger
- Update the way the codegen is bumping versions

### 1.0.1-beta.1 - 2023-05-09

- Add logic to parse default query param value whose type is array
- Re-enable snippets generation in the codegen for API explorer

### 1.0.1 - 2023-04-27

- Bump from script

### 1.0.1-experimental.1 - 2023-04-27

- Bump from script

### 1.0.1-experimental.0 - 2023-04-27

- Bump from script

### 1.0.0-beta.16 - 2023-04-26

- Fix array of integer not converted to array of number

### 1.0.0-beta.15 - 2023-04-20

- Generate Github websdk links

### 1.0.0-beta.14 - 2023-04-20

- Sanitize snippet Promise<unknown> to Promise

### 1.0.0-beta.13 - 2023-04-20

- adds sanitizer for wrong url encoded chars 

### 1.0.0-beta.12 - 2023-03-17

- Add model name to the Validate.responseType 3rd argument

### 1.0.0-beta.11 - 2023-03-15

- Fixed sdk snippet creation

### 1.0.0-beta.10 - 2023-03-05

- Adds support for generating api facade classes 

### 1.0.0-beta.7 - 2023-03-05

- Support nested array swagger model

### 1.0.0-beta.6 - 2023-03-05

- Improved natural method name generation

### 1.0.0-beta.5 - 2023-03-04

- Add natural method name generation

### 1.0.0-beta.4 - 2023-03-02

- Add --snippetOutput arg to build the snippet into a specific folder

### 1.0.0-beta.3 - 2023-02-28

- Improve Codegen to build human-readable methodss

### 1.0.0-beta.2 - 2023-02-27

- Adds code snippet generation utilities for the api-explorer app

### 1.0.0-alpha.12 - 2023-02-15

- Update codegen to emit `interface` instead of `type` when inferring Zod type

### 1.0.0-alpha.11 - 2023-02-14

- Implement more informative error when JSON patch is invalid

### 1.0.0-alpha.10 - 2023-02-09

- Split Readme into Patching and Readme file
- Updated formatting
- Added prettier command to be used after build

### 1.0.0-alpha.9 - 2023-01-30

- Fix duplicate generate class method but it has a different endpoint

### 1.0.0-alpha.8

- Fix requestBody definitions in Swagger v3 not generated

### 1.0.0-alpha.7

- Support swagger v3

### 1.0.0-alpha.6

- Skip generate endpoint with no tags
- treat int as number in parameter type
- support nullish response description

### 1.0.0-alpha.5

- Update dependency versions

### 1.0.0-alpha.4

- Fix templating for enums and query params

### 1.0.0-alpha.3

- Fix template-method wrong variable placement

### 1.0.0-alpha.2

- CWA-327 Update CLI usage documentation

### 1.0.0-alpha.1

- CWA-327 Build codegen into CLI (`accelbyte-codegen`)

### 2022-11-30

- OS-8126 OS-8128 - [Dev][PP] Add account linking with one time code page

### 2022-11-23

- CW-1697 - Prettify config files

### 2022-09-7

- CW-1449 - [WebSDK] WebSDK accepts cache argument at initialization

### 2022-09-19

- CW-1034 - [Basic] dateOfBirth patten in basic service
- CW-1035 - [Basic] Language pattern in basic service

### 2022-09-19

- CW-1225 - [WebSDK] Add Cache in WebSDK

### 2022-09-16

- CW-1007 - CW-1008 CW-1009 - remove patches containing language patterns, WalletInfo definition, and OrderInfo definition

### 2022-08-04

- OS-7129 - [Dev][Player Portal] Add a redirection page for user verification through link

### 2022-07-29

- CW-753 - [Editor][PP][Launcher] Migrate Editor, PP and Launcher to the latest Config-Service endpoints

### 2022-07-27

- Update the typings for `config.data` for Odin Config Web SDK

### 2022-07-26

- CW-636 - [WebSDK] Web SDK is updated with new config-service endpoints

### 2022-07-14

- CW-300 - [Technical] Audit and Remove unused NPM dependencies
