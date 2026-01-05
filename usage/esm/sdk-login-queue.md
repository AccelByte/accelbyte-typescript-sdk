## DELETE /login-queue/v1/namespaces/{namespace}/ticket

```
import { AccelByte } from '@accelbyte/sdk'
import { TicketV1Api } from '@accelbyte/sdk-login-queue'

const sdk = AccelByte.SDK({
  coreConfig: {
    baseURL: '__AGS_DOMAIN__',
    clientId: '__IAM_CLIENT_ID__',
    namespace: '__NAMESPACE__',
    redirectURI: '__IAM_CLIENT_REDIRECT_URI__'
  }
})

TicketV1Api(sdk)
  .deleteTicket()

// return Promise
```

## GET /login-queue/v1/namespaces/{namespace}/ticket

```
import { AccelByte } from '@accelbyte/sdk'
import { TicketV1Api } from '@accelbyte/sdk-login-queue'

const sdk = AccelByte.SDK({
  coreConfig: {
    baseURL: '__AGS_DOMAIN__',
    clientId: '__IAM_CLIENT_ID__',
    namespace: '__NAMESPACE__',
    redirectURI: '__IAM_CLIENT_REDIRECT_URI__'
  }
})

TicketV1Api(sdk)
  .getTicket()

// return Promise<RefreshTicketResponse>
```

## GET /login-queue/v1/admin/namespaces/{namespace}/config

```
import { AccelByte } from '@accelbyte/sdk'
import { V1AdminApi } from '@accelbyte/sdk-login-queue'

const sdk = AccelByte.SDK({
  coreConfig: {
    baseURL: '__AGS_DOMAIN__',
    clientId: '__IAM_CLIENT_ID__',
    namespace: '__NAMESPACE__',
    redirectURI: '__IAM_CLIENT_REDIRECT_URI__'
  }
})

V1AdminApi(sdk, { axiosConfig: { request: { headers: { Authorization: 'Bearer {access_token}' } } } })
  .getConfig()

// return Promise<ConfigurationResponse>
```

## PUT /login-queue/v1/admin/namespaces/{namespace}/config

```
import { AccelByte } from '@accelbyte/sdk'
import { V1AdminApi } from '@accelbyte/sdk-login-queue'

const sdk = AccelByte.SDK({
  coreConfig: {
    baseURL: '__AGS_DOMAIN__',
    clientId: '__IAM_CLIENT_ID__',
    namespace: '__NAMESPACE__',
    redirectURI: '__IAM_CLIENT_REDIRECT_URI__'
  }
})

V1AdminApi(sdk, { axiosConfig: { request: { headers: { Authorization: 'Bearer {access_token}' } } } })
  .updateConfig(data: {
             ConfigurationRequest
    })

// return Promise<ConfigurationResponse>
```

## GET /login-queue/v1/admin/namespaces/{namespace}/status

```
import { AccelByte } from '@accelbyte/sdk'
import { V1AdminApi } from '@accelbyte/sdk-login-queue'

const sdk = AccelByte.SDK({
  coreConfig: {
    baseURL: '__AGS_DOMAIN__',
    clientId: '__IAM_CLIENT_ID__',
    namespace: '__NAMESPACE__',
    redirectURI: '__IAM_CLIENT_REDIRECT_URI__'
  }
})

V1AdminApi(sdk, { axiosConfig: { request: { headers: { Authorization: 'Bearer {access_token}' } } } })
  .getStatus()

// return Promise<QueueStatusResponse>
```