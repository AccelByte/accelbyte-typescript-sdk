# Authentication

## Login flow

Our login flow is an oAuth compliant one. The flow looks like this

1. A login button is clicked by the user

1. Redirect the user into a login page set up by the IAM service

1. User logs in by inputting email and password combination

1. When the login success, redirect the user back into the designated redirect URI set up in the IAM

1. On the redirect back from the login page, the user have several properties like `code`, `error`, and `state` in their search paramter in the URL bar

1. The code is exchanged into an access token

This SDK has two methods that can be used for this one login flow

### Generating the URL to the login page

Generating the login URL can be done with `createLoginURL` method from `userAuthorization`. The method takes one parameter, `returnPath` that can tell us where to get back to after login.

```ts
// sdk here is the SDK instance that has been initiated
const userAuthorization = sdk.iam.userAuthorization()
const loginURL = userAuthorization.createLoginURL(returnPath)
```
A return path is needed because after login, we will be redirected to the designated redirect URI and not to the previous page before the redirection to the login page. The return path is used as an information for the app to determine where to redirect the user to. So this statement below could be added before the above statement

```ts
const returnPath = location.href
```

After the login URL is acquired, then we can redirect the user

```ts
window.location.assign(loginURL)
```

### Code exchange

Code exchange can be done with the method `exchangeAuthorizationCode` from `userAuthorization`. The function takes three parameters, `code`, `state`, and `error` that can be taken from the location search

```ts
const searchParams = new URLSearchParams(location.search)
const code = searchParams.get("code")
const error = searchParams.get("error")
const state = searchParams.get("state")
```

The `code`, `state`, and `error` can then be used by the `exchangeAuthorizationCode` method. The error part can be omitted as an argument if it needs to be handled separately.

```ts
const userAuthorization = sdk.iam.userAuthorization()
const exchangeResult = await userAuthorization.exchangeAuthorizationCode({
    code,
    error,
    state,
})
if (!exchangeResult) {
    return;
}
const { mfaData, returnPath } = exchangeResult
```

The exchange method can return with either `null` or an object with two properties, `mfaData` and `returnPath`. The `mfaData` property has the 2FA-related data while the `returnPath` property is the return path that is specified during the code generation.