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