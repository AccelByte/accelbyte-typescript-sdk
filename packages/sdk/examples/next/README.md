# SDK Usage Example: Next.js

This is a sample usage of SDK using [Next.js](https://nextjs.org).

## How to Run

This folder should be ready to run without any changes as it is pointing to the [AccelByte's demo environment](https://demo.accelbyte.io) by default.

```sh
# Install the dependencies.
yarn install

# Run the dev server.
yarn dev
```

After that, open http://localhost:3030. There will be few requests fired on the background, which then you could inspect the response by collapsing the `<details>` element.

There will be also a `<details>` element with the title `currentUser`, which will contain your user information. By default, if you aren't logged in, then you will get `401 Unauthorized` in the network response.

If you want to log in, you can click on the "Log in" button and it will redirect you to the Login website. After you submit with the valid credentials, you will be redirected back to http://localhost:3030 with some query parameters in it. These query parameters will be processed by this function `exchangeAuthorizationCode`, which will exchange the code passed in the query parameters to cookies.

## How to Point to Other Environments

If you want to use this example folder for other environments, do these steps:

1. Change the [proxy target](https://github.com/AccelByte/accelbyte-web-sdk/blob/main/packages/sdk/examples/next/next.config.js#L8). It is required because otherwise during local development, we will be blocked by [CORS](https://developer.mozilla.org/en-US/docs/Web/HTTP/CORS) for some client side requests.
2. Change the [base URL, client ID, namespace, and redirect URI](https://github.com/AccelByte/accelbyte-web-sdk/blob/main/packages/sdk/examples/next/pages/index.tsx#L17-L20) of the SDK options. You can get these from Admin Portal's IAM Clients page. As for the redirect URI, ensure that it is a subset of the redirect URIs listed in the IAM Client.

## Production builds

For production builds, please ensure that you have added conditionals to the `baseURL`. As mentioned in the section above, the default `baseURL` is the local development's origin with `/api` suffix to bypass CORS. However, we won't need it in production builds, because the default proxy server doesn't exist when we run in production mode.

As such, what we can do is to have something like this:

```ts
const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL
const SDK_CONFIG = {
  baseURL: process.env.NODE_ENV === 'production' ? BASE_URL : 'http://localhost:3030/api',
  clientId: '77f88506b6174c3ea4d925f5b4096ce8',
  namespace: 'accelbyte',
  redirectURI: process.env.NODE_ENV === 'production' ? BASE_URL : 'http://localhost:3030'
}
```

So, when we are building for production, it will use `NEXT_PUBLIC_BASE_URL` environment variable instead of the `localhost:3030` one.