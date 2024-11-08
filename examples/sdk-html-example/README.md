# AGS TypeScript SDK UMD Bundle Demo - WebSocket and Matchmaking

This guide demonstrates how to use AccelByte's UMD (Universal Module Definition) SDK packages to create a matchmaking ticket via WebSocket and REST API. It highlights AccelByte's **IAM**, **Lobby**, and **Matchmaking** services and is designed for easy testing in a local environment.

## Table of Contents
- [Prerequisites](#prerequisites)
- [Setup](#setup)
- [AccelByte SDK Modules](#accelbyte-sdk-modules)
- [Workflow](#workflow)

## Prerequisites
1. **Configuration Values**: Ensure `coreConfig` is set up with the correct values (`baseURL`, `clientId`, `namespace`, etc.). Refer to the [Configuration Breakdown](https://github.com/AccelByte/accelbyte-typescript-sdk?tab=readme-ov-file#configuration-breakdown) for details.

2. **Match Pool**: Ensure a match pool is configured. Instructions can be found [here](https://docs.accelbyte.io/gaming-services/services/play/matchmaking/configuring-match-pools/#configure-match-pools-in-the-admin-portal).

3. **Device ID Login**: Follow the setup guide to enable [Login with Device ID](https://docs.accelbyte.io/gaming-services/getting-started/implement-login-with-device-id/).

4. **Handling CORS**: Follow the setup to [Handling CORS](https://docs.accelbyte.io/gaming-services/knowledge-base/developer-faq/#handling-cors-cross-origin-resource-sharing-in-web-development)

## Setup

1. **Serve the Demo Locally**: To run the demo locally, navigate to the root of the `sdk-html-example` directory and run:
    ```bash
    npx serve
    ```
   Open `http://localhost:3000` (or the default port provided) in your browser.

## AccelByte SDK Modules

The demo uses these AccelByte SDK modules via UMD:
1. **@accelbyte/sdk-iam**
2. **@accelbyte/sdk-lobby**
3. **@accelbyte/sdk-matchmaking**

You can load UMD files via CDN sources like [unpkg](https://unpkg.com/) or [jsDelivr](https://www.jsdelivr.com).

## Workflow

### 1. Initialize SDK Configuration
Set up the AccelByte SDK with the necessary configuration values, including `baseURL`, `clientId`, `namespace`, and `redirectURI`. Here's how to initialize:

```javascript
const sdk = AccelByteSDK.AccelByte.SDK({
  coreConfig: {
    baseURL: 'https://game-namespace.prod.gamingservices.accelbyte.io',
    clientId: 'game-client-id',
    namespace: 'game-namespace',
    redirectURI: 'http://localhost:3000'
  }
});
```

### 2. Device Authentication

Authenticate using the IAM module with a randomly generated device ID. Save the `access_token` and `refresh_token` in the SDK instance for later use.

```javascript
AccelByteSDK_IAM.OAuth20V4Api(sdk, {
  axiosConfig: {
    request: {
      headers: {
        Authorization: `Basic ${btoa(`${sdk.assembly().coreConfig.clientId}:`)}`
      }
    }
  }
})
.postTokenOauth_ByPlatformId_v4('device', {
  device_id: crypto.randomUUID()
})
.then(tokenResponse => {
  const { access_token, refresh_token } = tokenResponse.data;
  sdk.setToken({ accessToken: access_token, refreshToken: refresh_token });
})
.catch(err => {
  console.error(err);
});
```

### 3. Establish WebSocket Connection
Open a WebSocket connection using the Lobby SDK, then set up listeners for different WebSocket events.

```javascript
const lobbyWs = AccelByteSDK_Lobby.Lobby.WebSocket(sdk);

lobbyWs.connect();

lobbyWs.onOpen(() => {
  console.log('WebSocket connection opened');
});

lobbyWs.onClose(err => {
  console.log('WebSocket connection closed');
  console.log(err);
});

lobbyWs.onError(err => {
  console.log('WebSocket error');
  console.log(err.message);
});
```

### 4. Create Match Ticket
Once the WebSocket connection is established, create a match ticket through the Matchmaking API upon receiving a `connectNotif` message. When a match is found (`messageNotif`), log the match details and show a success alert.

```javascript
lobbyWs.onMessage(message => {
  switch (message?.type) {
    case 'connectNotif': {
      AccelByteSDK_Matchmaking.MatchTicketsApi(sdk)
      .createMatchTicket({
        matchPool: 'matchpool-name',
        attributes: {}
      })
      .then(response => {
        console.info(response);
      })
      .catch(err => {
        console.error(err);
      });
      break;
    }
    case 'messageNotif': {
      if (message?.payload) {
        console.log(JSON.parse(atob(message.payload)));
      }
      alert('Successfully created a matchmaking ticket');
      break;
    }
    default: {
      console.info(message);
      break;
    }
  }
});
```

This guide should help you get started with running the demo locally and understanding the flow of creating a match ticket using the AccelByte SDK with WebSocket and REST API calls.