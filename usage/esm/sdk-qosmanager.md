## GET /qosm/public/qos

```
import { AccelByte } from '@accelbyte/sdk'
import { PublicApi } from '@accelbyte/sdk-qosmanager'

const sdk = AccelByte.SDK({
  coreConfig: {
    baseURL: '__AGS_DOMAIN__',
    clientId: '__IAM_CLIENT_ID__',
    namespace: '__NAMESPACE__',
    redirectURI: '__IAM_CLIENT_REDIRECT_URI__'
  }
})

PublicApi(sdk)
  .getQos()

// return Promise<ListServerResponse>
```

## POST /qosm/servers/heartbeat

```
import { AccelByte } from '@accelbyte/sdk'
import { ServerApi } from '@accelbyte/sdk-qosmanager'

const sdk = AccelByte.SDK({
  coreConfig: {
    baseURL: '__AGS_DOMAIN__',
    clientId: '__IAM_CLIENT_ID__',
    namespace: '__NAMESPACE__',
    redirectURI: '__IAM_CLIENT_REDIRECT_URI__'
  }
})

ServerApi(sdk)
  .createServerHeartbeat(data: {
             HeartbeatRequest
    })

// return Promise
```

## GET /qosm/public/namespaces/{namespace}/qos

```
import { AccelByte } from '@accelbyte/sdk'
import { PublicApi } from '@accelbyte/sdk-qosmanager'

const sdk = AccelByte.SDK({
  coreConfig: {
    baseURL: '__AGS_DOMAIN__',
    clientId: '__IAM_CLIENT_ID__',
    namespace: '__NAMESPACE__',
    redirectURI: '__IAM_CLIENT_REDIRECT_URI__'
  }
})

PublicApi(sdk)
  .getQos_ByNS( queryParams?: {
             status?: string | null
    })

// return Promise<ListServerResponse>
```

## DELETE /qosm/admin/servers/{region}

```
import { AccelByte } from '@accelbyte/sdk'
import { AdminAdminApi } from '@accelbyte/sdk-qosmanager'

const sdk = AccelByte.SDK({
  coreConfig: {
    baseURL: '__AGS_DOMAIN__',
    clientId: '__IAM_CLIENT_ID__',
    namespace: '__NAMESPACE__',
    redirectURI: '__IAM_CLIENT_REDIRECT_URI__'
  }
})

AdminAdminApi(sdk, { axiosConfig: { request: { headers: { Authorization: 'Bearer {access_token}' } } } })
  .deleteServer_ByRegion(region:string)

// return Promise
```

## POST /qosm/admin/servers/{region}/alias

```
import { AccelByte } from '@accelbyte/sdk'
import { AdminAdminApi } from '@accelbyte/sdk-qosmanager'

const sdk = AccelByte.SDK({
  coreConfig: {
    baseURL: '__AGS_DOMAIN__',
    clientId: '__IAM_CLIENT_ID__',
    namespace: '__NAMESPACE__',
    redirectURI: '__IAM_CLIENT_REDIRECT_URI__'
  }
})

AdminAdminApi(sdk, { axiosConfig: { request: { headers: { Authorization: 'Bearer {access_token}' } } } })
  .createAlia_ByRegion(region:string, data: {
             SetAliasRequest
    })

// return Promise
```

## PATCH /qosm/admin/namespaces/{namespace}/servers/{region}

```
import { AccelByte } from '@accelbyte/sdk'
import { AdminAdminApi } from '@accelbyte/sdk-qosmanager'

const sdk = AccelByte.SDK({
  coreConfig: {
    baseURL: '__AGS_DOMAIN__',
    clientId: '__IAM_CLIENT_ID__',
    namespace: '__NAMESPACE__',
    redirectURI: '__IAM_CLIENT_REDIRECT_URI__'
  }
})

AdminAdminApi(sdk, { axiosConfig: { request: { headers: { Authorization: 'Bearer {access_token}' } } } })
  .patchServer_ByRegion(region:string, data: {
             UpdateServerRequest
    })

// return Promise
```