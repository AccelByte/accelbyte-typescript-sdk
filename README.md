# AccelByte Web SDK

AccelByte Web SDK is a JavaScript library enabling building web application using AccelByte API services. The library is
platform-agnostic and can be consumed in a browser or in a server environment.

AccelByte SDK is build with TypeScript and uses runtime type-checking validations.

Below is the list of AccelByte service APIs the library supports:

1. **IAM** - https://docs.accelbyte.io/guides/access/iam-client.html
2. **Platform**
3. **Basic**
4. **Build Info** - aka DL Patcher
5. **GDPR**
6. **Event**
7. **Legal**

# Getting started

## NPM installation

To npm install the library execute

```shell
    npm install @accelbyte/sdk
```

## Usage:

To instantiate the Web SDK, a prerequisite is having a `IAM Client ID`. The example below creates an instance of the SDK
that have access to all APIs

```typescript
const sdk = await Accelbyte.SDK({
  options: {
    baseURL: "<Publisher Base URL, e.g. https://demo.accelbyte.io>",
    clientId: "<Publisher Client ID>",
    redirectURI: "<Publisher Redirect URL, e.g. https://demo.accelbyte.io>",
    namespace: "<Publisher namespace>"
  },

  config: {
    withCredentials: true // default true. If true it will send the Cookie automatically
  },

  onEvents: {
    // a callback function invoked on session expiry
    onSessionExpired: () => {},
    // a callback function invoked on session retrieval
    onGetUserSession: (accessToken: string, refreshToken: string) => {},
    // a callback function invoked on UserEligibilityChange
    onUserEligibilityChange: () => {},
    // a callback function fired on error
    onError: (error: SDKError) => {}
  }
})
```

Sample consumption of the AccelByte IAM service using the library:

```typescript
// Login to IAM
sdk.IAM.UserAuthorization().loginWithAuthorizationCode({code, codeVerifier})

// Retrieve the user object 
sdk.IAM.UserApi().getCurrentUser()
```


## Testing

```shell
yarn --cwd packages/sdk test
```