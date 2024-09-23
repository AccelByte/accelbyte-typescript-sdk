# SDK Usage Example: Vite

This is a sample usage of SDK using [Vite](https://vitejs.dev/).

## Prerequisites

- [Yarn 2](https://yarnpkg.com/getting-started/install) or your preferred package manager
- Required environment variables:
  - (Development only) `AGS_BASE_URL`: AccelByte Cloud Base URL used by Proxy e.g. `https://prod.gamingservices.accelbyte.io`
  - `VITE_SDK_BASE_URL`: AccelByte Cloud Base URL used by SDK. For development environment you can use `http://localhost:3000/api` and production development you can set it with the same value from `AGS_BASE_URL` or use default value which is `https://prod.gamingservices.accelbyte.io`
  - `VITE_CLIENT_ID`: AccelByte Cloud IAM Client ID
  - `VITE_NAMESPACE`: AccelByte Namespace e.g. `accelbyte`. See [Create a game namespace](https://docs.accelbyte.io/gaming-services/tutorials/how-to/namespaces/create-a-game-namespace/)
  - `VITE_REDIRECT_URI`: AccelByte IAM Client's Redirect URI

## Getting Started

To start using the this demo, you need to instantiate it with some basic configuration. This setup requires an IAM Client ID (`VITE_CLIENT_ID`) and other core configurations. You can set this configuration by copying the `.env.template` to `.env` and set the configuration accordingly. 

```sh
# Install the dependencies.
yarn install

# Run the dev server.
yarn dev
```

After that, open http://localhost:3000. There will be few requests fired on the background, which then you could inspect the response by collapsing the `<details>` element.

There will be also a `<details>` element with the title `currentUser`, which will contain your user information. By default, if you aren't logged in, then you will get `401 Unauthorized` in the network response.

If you want to log in, you can click on the "Log in" button and it will redirect you to the Login website. After you submit with the valid credentials, you will be redirected back to http://localhost:3000 with some query parameters in it. These query parameters will be processed by this function `exchangeAuthorizationCode`, which will exchange the code passed in the query parameters to cookies.

## Authentication Flow

The authentication flow to the IAM service consists of these steps:

1. Log in through the login page
2. Get redirected back to the main site
3. Main site sends the authorization code to the IAM service 
4. IAM service receives the authorization code and sets the cookie to the browser if valid 

By default, using cookie is the recommended way. However, if you really need to use the `Authorization` header, you can store the `access_token` and `refresh_token` fields from the response returned from (4) then pass them to `sdk.refreshTokens`, which will inject the token to the `Authorization` header on every future requests.

Before accessing other features, you must authenticate by logging in with your device ID. This will send your device ID to the server and return an access token and refresh token, both stored in cookies and the response. The recommended method for authentication is using cookies; however, since this is a cross-origin demo, cookies cannot be used. Instead, you can authenticate using a Bearer token.

## Other Environments

If you want to use this example folder for other environments, do these steps:

1. Change the [proxy target](https://github.com/AccelByte/accelbyte-web-sdk/blob/main/packages/sdk/examples/vite/vite.config.ts#L16-L22). It is required because otherwise during local development, we will be blocked by [CORS](https://developer.mozilla.org/en-US/docs/Web/HTTP/CORS).
2. Change the [VITE_CLIENT_ID, VITE_NAMESPACE, and VITE_REDIRECT_URI](https://github.com/AccelByte/accelbyte-web-sdk/blob/main/packages/sdk/examples/vite/src/Sdk.ts#L11-L13) on the `.env`. You can get these from Admin Portal's IAM Clients page. As for the redirect URI, ensure that it is a subset of the redirect URIs listed in the IAM Client.

## Production Build

You can run `yarn build` to build application.

The default `baseURL` is set to the local development origin `http://localhost:3000/api` to bypass CORS issues. However, this won't be needed in production builds since the development proxy server isn't available in production mode.

For production, the `VITE_SDK_BASE_URL` environment variable will be used instead of the `http://localhost:3000` base URL.