# AccelByte Web SDK

[AccelByte Web SDK](https://development.accelbyte.io/web-sdk-playground/) is a JavaScript library enabling the building of web applications using AccelByte API services. The library is
platform-agnostic and can be consumed in a browser or in a server environment.

### Type-safety
Built with TypeScript and strict by design, the SDK goes above and beyond and enforces runtime type-checking validations. This allows trusting the AccelByte service type definitions.

# Getting started

## Installation

To install the library execute the following command.

```shell
yarn add @accelbyte/sdk
yarn add @accelbyte/sdk-iam
yarn add @accelbyte/sdk-basic // etc
```

## Prerequisites

* **ES Modules** - The SDK currently supports ES Modules format only, to enable ESM in Node, please [set type property in Package.json to module](https://nodejs.org/api/packages.html#type) or follow [these steps](https://nodejs.org/api/esm.html#enabling)
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

Web SDK sample usage of the AccelByte services:

```typescript
import { Accelbyte } from "@accelbyte/sdk"
import { Iam, IamUserAuthorizationClient } from "@accelbyte/sdk-iam"
import { Platform } from "@accelbyte/sdk-platform"
import { Basic } from "@accelbyte/sdk-basic"
import { Legal } from "@accelbyte/sdk-legal"

// Login to IAM
const token = await new IamUserAuthorizationClient(sdk).loginWithAuthorizationCode({code, codeVerifier})

// Retrieve the user object
const currentUser = await Iam.UsersApi(sdk).getUsersMe()

// Retrieve the user profile
const userProfile = await Basic.UserProfileApi(sdk).getUsersMeProfiles()

// Retrieve store items
const items = await Platform.ItemApi(sdk).getItemsByCriteria({ queryParams: { appType: 'GAME' } })

// Retrieve legal policies
const policies = await Legal.Policies().getPolicyCountry_ByCountryCode('US')
```

## AccelByte APIs

Web SDK supports the following AccelByte service APIs:

1. [Access - IAM](https://docs.accelbyte.io/api-explorer/?api=IAM)
2. [GDPR](https://docs.accelbyte.io/api-explorer/?api=GDPR)
3. [Access- Event log](https://docs.accelbyte.io/api-explorer/?api=Event%20Log)
4. [Access - Legal](https://docs.accelbyte.io/api-explorer/?api=Legal)
5. [Distribution - Build Info](https://docs.accelbyte.io/api-explorer/?api=Buildinfo)
6. [Monetization](https://docs.accelbyte.io/api-explorer/?api=Platform%20Store)
7. [Basic](https://docs.accelbyte.io/api-explorer/?api=Basic)

# AccelByte Web Widgets
In addition to the Accelbyte Web SDK, the library provides an extension called [Web Widgets](https://www.npmjs.com/package/@accelbyte/widgets-v2) allowing the creation of SDK UI components. AccelByte Web Widgets is a UI library consisting of a set of JavaScript React components that can be embedded inside a browser. These components have the same appearance and business functionality as the AccelByte Player Portal.

## Note

***The Web Widgets are currently undergoing Alpha testing. If you would like to participate in the Alpha test, we encourage you to reach out to your assigned DPM resource before making use of these solutions.***

## Installation

To npm install the Web Widgets execute

```shell
yarn add @accelbyte/widgets-v2
```

Example projects can be found in the [examples folder](./packages/examples), with the ones related to AccelByte Web Widgets having the prefix `widgets-`.

## Testing

```shell
yarn --cwd packages/sdk test
```

## Web SDK Playground

In addition, there is a [Playground web application](https://development.accelbyte.io/web-sdk-playground/) allowing to live test the Web SDK.

## Contributing

Want to contribute to this project? thank you for your interest! we value your input and appreciate your desire to enhance the AccelByte Web SDK. However please note that the direct contributions via Github are currently not accepted. Instead, we encourage you to submit your ideas and suggestion as a feature request through [AccelByte Customer Support Portal](https://accelbyte.atlassian.net/servicedesk/customer/portal/6) or through your assigned TP. This process helps us manage contributions effectively and ensures that every idea is carefully reviewed and considered by Our team.