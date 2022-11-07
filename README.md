# AccelByte Web SDK

AccelByte Web SDK is a JavaScript library enabling building web application using AccelByte API services. The library is platform-agnostic and can be consumed in a browser or in a server environment.

AccelByte SDK is build with TypeScript and integrates runtime type-checking validations.

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
To npm install the lib, place the below code in your package.json dependencies.

```json
{
   "accelbyte-web-sdk": "git+https://github.com/AccelByte/accelbyte-web-sdk.git#<version>"
}
```

To instantiate the Web SDK, a prerequisite is having a `IAM Client ID`. The example below creates an instance of the SDK that have access to all APIs

```typescript
const sdk = await Accelbyte.SDK(
    {
        baseURL: "<Publisher Base URL, e.g. https://demo.accelbyte.io>",
        clientId: "<Publisher Client ID>",
        redirectURI: "<Publisher Redirect URL, e.g. https://demo.accelbyte.io>",
        accessToken: "<Publisher Bearer Token>", // bearer token
        namespace: "<Publisher namespace>"
    }
)
```

Sample usage of the library against IAM service:
```typescript
// Login to IAM
sdk.iam.userAuthorization().loginWithAuthorizationCode({ code, codeVerifier })

// Retrieve the user object 
sdk.iam.userApi().getCurrentUser()
```