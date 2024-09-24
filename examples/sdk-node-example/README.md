# SDK Usage Example: Node.js

This is a sample usage of SDK using [Node.js](https://nodejs.org).

## How to Run

This folder should be ready to run without any changes as it is pointing to the [AccelByte's Shared Cloud environment](https://prod.gamingservices.accelbyte.io) by default.

```sh
# Install the dependencies.
yarn install

# Run the Admin endpoint example
yarn example:admin
# Run the Public endpoint example
# yarn run example:public
# Or run the legal example
# yarn run example:legal
```

After running either `yarn test` you should see the responses in your terminal.

## How to Point to Other Environments

If you want to use this example folder for other environments, do these steps:

1. Change the [base URL](https://github.com/AccelByte/accelbyte-typescript-sdk/blob/main/examples/sdk-node-example/.env.example#L5).
2. Change the [client ID and namespace](https://github.com/AccelByte/accelbyte-typescript-sdk/blob/main/examples/sdk-node-example/.env.example#L2) of the SDK options. You can get these from Admin Portal's IAM Clients page. As for the redirect URI, it shouldn't be used in this case since logging in can't be used in headless mode.

## Legal Flow

1. After user Login the PP/Launcher need to get user information that including unsigned legal
2. If there is unsigned legal the PP/Launcher need blocked by Accept Legal Prompt Page
3. After use Accept Legal the PP/Launcher need to refresh user token