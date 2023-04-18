# SDK Usage Example: Node.js

This is a sample usage of SDK using [Node.js](https://nodejs.org).

## How to Run

This folder should be ready to run without any changes as it is pointing to the [AccelByte's demo environment](https://demo.accelbyte.io) by default.

```sh
# Install the dependencies.
yarn install

# Run the example
yarn example
```

After running either `yarn test` you should see the responses in your terminal.

## How to Point to Other Environments

If you want to use this example folder for other environments, do these steps:

1. Change the [base URL](https://github.com/AccelByte/accelbyte-web-sdk/blob/main/packages/sdk/examples/node/index.js#L14).
2. Change the [client ID and namespace](https://github.com/AccelByte/accelbyte-web-sdk/blob/main/packages/sdk/examples/node/index.js#L15-L16) of the SDK options. You can get these from Admin Portal's IAM Clients page. As for the redirect URI, it shouldn't be used in this case since logging in can't be used in headless mode.

You can do the similar approach for `index.mjs`.