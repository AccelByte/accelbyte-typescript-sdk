# Web SDK Tests

This folder contains tests for the APIs that are worth to be tested and the utility functions.


## APIs tested

The only API class that we test is only the IAM one (specifically the `UserAuthorization` class). This is because the `UserAuthorization` class contains a custom logic further than just API calls.

Other API classes, on the other hand, consist mostly of only API calls. These are not worth to be tested since the underlying mechanism is generated from S wagger and we assume the parameters from Swagger is correct.

## Utilities tested

There are 4 utilities that are tested:

1. IAM Helper
2. Input Validation Helper
3. Legal Helper
4. URL Helper

## End-to-End Testing

This repository contains e2e tests for an example app directory that includes Vite, Next, and Node apps. The tests use Playwright to ensure that the AccelByte SDK is installed and working properly in each app. Before running the tests, make sure you have installed all dependencies for each app.

### Installation

To install the example app and all required packages, navigate to the example app directory and run the following command for each app:

```shell
cd accelbyte-web-sdk/packages/sdk/examples

npx playwright install

(cd vite && npm install)
(cd next && npm install)
(cd node && npm install)
```

These commands will install all dependencies specified in `package.json`, including Playwright and the AccelByte SDK.

### Running the tests

To run the e2e tests, navigate to the example app directory and use the following command:
```shell
npm run test:e2e
```

This will start each app and run the e2e tests against it. The tests will check if the AccelByte SDK is installed and working properly by making a request to the AccelByte API and verifying the response.

If the tests pass, you can be confident that the AccelByte SDK is installed and working correctly in each app.

### Troubleshooting

If you encounter any issues while installing or running the tests, try the following steps:

- Make sure you have installed all required dependencies by running `npm install` in each app directory.
- If the tests fail, read the error message carefully and try to identify the issue. You may need to modify the test code or the example app to fix the problem.

That's it! With these instructions, you should be able to run e2e tests using Playwright to ensure that the AccelByte SDK is installed and working properly in the example app directory.

