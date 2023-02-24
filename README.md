# AccelByte Web SDK

## Note

***The Web SDK and associated Web Widgets are currently undergoing Alpha testing. If you would like to participate in the Alpha test, we encourage you to reach out to your assigned DPM resource before making use of these solutions.***

[AccelByte Web SDK](https://demo.accelbyte.io/web-sdk-playground/) is a JavaScript library enabling the building of web applications using AccelByte API services. The library is
platform-agnostic and can be consumed in a browser or in a server environment.

### Type-safety
Built with TypeScript and strict by design, the SDK goes above and beyond and enforces runtime type-checking validations. This allows trusting the AccelByte service type definitions.

Below is the list of the AccelByte service APIs the library supports:

1. [IAM](https://docs.accelbyte.io/api-endpoints.html#access)
2. [Monetization](https://docs.accelbyte.io/api-endpoints.html#monetization)
3. [Basic](https://docs.accelbyte.io/api-endpoints.html#basic)
4. [Build Info](https://docs.accelbyte.io/api-endpoints.html#distribution)
5. [GDPR](https://docs.accelbyte.io/api-endpoints.html#access)
6. [Event](https://docs.accelbyte.io/api-endpoints.html#access)
7. [Legal](https://docs.accelbyte.io/api-endpoints.html#access)

# Getting started

## Installation

To install the library execute the following command.

```shell
yarn add @accelbyte/sdk
```

## Prerequisites

* **ES Modules** - The SDK currently supports ES Modules format only, please [set type property in Package.json to module](https://nodejs.org/api/packages.html#type)
* **Yarn** - We like `yarn`. While `npm` may work, it is not supported and may be unstable.
* **TypeScript** - The SDK has full TypeScript support, and it should be preferred over vanilla JavaScript.

## Usage

To instantiate the Web SDK, a prerequisite is having an `IAM Client ID`. The example below creates an instance of the SDK
that have access to all APIs.

```typescript
import { Accelbyte } from '@accelbyte/sdk';

const sdk = await Accelbyte.SDK({
  options: {
    baseURL: "<Publisher Base URL, e.g. https://demo.accelbyte.io>",
    clientId: "<Publisher Client ID>, e.g. 32_char_guid",
    redirectURI: "<Publisher Redirect URL, e.g. https://demo.accelbyte.io>",
    namespace: "<Publisher namespace>, e.g. 'accelbyte'"
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

Sample usage of the AccelByte services using the Web SDK:

```typescript
console.log('Accelbyte SDK', sdk, '\n')

// Login to IAM
const token = await sdk.IAM.UserAuthorization().loginWithAuthorizationCode({code, codeVerifier})

// And retrieve the user object
const user = await sdk.IAM.User().getCurrentUser()

// Retrieve store items
const items = await sdk.Platform.Item().fetchItemsByCriteria({ queryParams: { appType: 'GAME' } })
console.log('Items:', items, items?.response?.data, '\n')

// Retrieve store currencies
const currencies = await sdk.Platform.Currency().getCurrencyMap()
console.log('Currencies:', currencies, '\n')

// Retrieve legal policies
const policies = await sdk.Legal.Policies().fetchAllPoliciesByCountry({countryCode: 'Bulgaria'})
console.log('Policies:', policies, '\n')
```

# AccelByte Web SDK Widgets
In addition to the Accelbyte Web SDK, the library provides an extension called [SDK Widgets](https://www.npmjs.com/package/@accelbyte/widgets) allowing the creation of SDK UI components. AccelByte Web SDK Widgets is a UI library consisting of a set of JavaScript React components that can be embedded inside a browser. These components have the same appearance and business functionality as the AccelByte Player Portal.

## NPM installation

To npm install the SDK Widgets execute

```shell
yarn add @accelbyte/widgets
```

## Testing

```shell
yarn --cwd packages/sdk test
```

## Web SDK Playground

In addition, there is a [Playground web application](https://demo.accelbyte.io/web-sdk-playground/) allowing to live test the Web SDK. 
