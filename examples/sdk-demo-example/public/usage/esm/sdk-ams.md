## GET /ams/auth

```
import { AccelByte } from '@accelbyte/sdk'
import { AuthApi } from '@accelbyte/sdk-ams'

const sdk = AccelByte.SDK({
  coreConfig: {
    baseURL: '__AGS_DOMAIN__',
    clientId: '__IAM_CLIENT_ID__',
    namespace: '__NAMESPACE__',
    redirectURI: '__IAM_CLIENT_REDIRECT_URI__'
  }
})

AuthApi(sdk)
  .getAuth()

// return Promise
```

## GET /ams/version

```
import { AccelByte } from '@accelbyte/sdk'
import { FleetCommanderApi } from '@accelbyte/sdk-ams'

const sdk = AccelByte.SDK({
  coreConfig: {
    baseURL: '__AGS_DOMAIN__',
    clientId: '__IAM_CLIENT_ID__',
    namespace: '__NAMESPACE__',
    redirectURI: '__IAM_CLIENT_REDIRECT_URI__'
  }
})

FleetCommanderApi(sdk)
  .getVersion()

// return Promise
```

## GET /ams/v1/upload-url

```
import { AccelByte } from '@accelbyte/sdk'
import { AmsInfoApi } from '@accelbyte/sdk-ams'

const sdk = AccelByte.SDK({
  coreConfig: {
    baseURL: '__AGS_DOMAIN__',
    clientId: '__IAM_CLIENT_ID__',
    namespace: '__NAMESPACE__',
    redirectURI: '__IAM_CLIENT_REDIRECT_URI__'
  }
})

AmsInfoApi(sdk)
  .getUploadUrl()

// return Promise
```

## GET /ams/v1/namespaces/{namespace}/account

```
import { AccelByte } from '@accelbyte/sdk'
import { AccountApi } from '@accelbyte/sdk-ams'

const sdk = AccelByte.SDK({
  coreConfig: {
    baseURL: '__AGS_DOMAIN__',
    clientId: '__IAM_CLIENT_ID__',
    namespace: '__NAMESPACE__',
    redirectURI: '__IAM_CLIENT_REDIRECT_URI__'
  }
})

AccountApi(sdk)
  .getAccount()

// return Promise<AccountResponse>
```

## PUT /ams/v1/namespaces/{namespace}/servers/claim

```
import { AccelByte } from '@accelbyte/sdk'
import { FleetsApi } from '@accelbyte/sdk-ams'

const sdk = AccelByte.SDK({
  coreConfig: {
    baseURL: '__AGS_DOMAIN__',
    clientId: '__IAM_CLIENT_ID__',
    namespace: '__NAMESPACE__',
    redirectURI: '__IAM_CLIENT_REDIRECT_URI__'
  }
})

FleetsApi(sdk)
  .updateServerClaim(data: {
             FleetClaimByKeysReq
    })

// return Promise<FleetClaimResponse>
```

## PUT /ams/v1/namespaces/{namespace}/fleets/{fleetID}/claim

```
import { AccelByte } from '@accelbyte/sdk'
import { FleetsApi } from '@accelbyte/sdk-ams'

const sdk = AccelByte.SDK({
  coreConfig: {
    baseURL: '__AGS_DOMAIN__',
    clientId: '__IAM_CLIENT_ID__',
    namespace: '__NAMESPACE__',
    redirectURI: '__IAM_CLIENT_REDIRECT_URI__'
  }
})

FleetsApi(sdk)
  .updateClaim_ByFleetId(fleetID:string, data: {
             FleetClaimReq
    })

// return Promise<FleetClaimResponse>
```

## GET /ams/v1/namespaces/{namespace}/local/{watchdogID}/connect

```
import { AccelByte } from '@accelbyte/sdk'
import { WatchdogsApi } from '@accelbyte/sdk-ams'

const sdk = AccelByte.SDK({
  coreConfig: {
    baseURL: '__AGS_DOMAIN__',
    clientId: '__IAM_CLIENT_ID__',
    namespace: '__NAMESPACE__',
    redirectURI: '__IAM_CLIENT_REDIRECT_URI__'
  }
})

WatchdogsApi(sdk)
  .getConnect_ByWatchdogId(watchdogID:string)

// return Promise
```

## GET /ams/v1/namespaces/{namespace}/watchdogs/{watchdogID}/connect

```
import { AccelByte } from '@accelbyte/sdk'
import { WatchdogsApi } from '@accelbyte/sdk-ams'

const sdk = AccelByte.SDK({
  coreConfig: {
    baseURL: '__AGS_DOMAIN__',
    clientId: '__IAM_CLIENT_ID__',
    namespace: '__NAMESPACE__',
    redirectURI: '__IAM_CLIENT_REDIRECT_URI__'
  }
})

WatchdogsApi(sdk)
  .getConnect_ByWatchdogId_ByNS(watchdogID:string)

// return Promise
```

## GET /ams/v1/admin/namespaces/{namespace}/qos

```
import { AccelByte } from '@accelbyte/sdk'
import { AmsQoSAdminApi } from '@accelbyte/sdk-ams'

const sdk = AccelByte.SDK({
  coreConfig: {
    baseURL: '__AGS_DOMAIN__',
    clientId: '__IAM_CLIENT_ID__',
    namespace: '__NAMESPACE__',
    redirectURI: '__IAM_CLIENT_REDIRECT_URI__'
  }
})

AmsQoSAdminApi(sdk, { axiosConfig: { request: { headers: { Authorization: 'Bearer {access_token}' } } } })
  .getQos( queryParams?: {
             status?: string | null
    })

// return Promise<QoSEndpointResponse>
```

## GET /ams/v1/admin/namespaces/{namespace}/fleets

```
import { AccelByte } from '@accelbyte/sdk'
import { FleetsAdminApi } from '@accelbyte/sdk-ams'

const sdk = AccelByte.SDK({
  coreConfig: {
    baseURL: '__AGS_DOMAIN__',
    clientId: '__IAM_CLIENT_ID__',
    namespace: '__NAMESPACE__',
    redirectURI: '__IAM_CLIENT_REDIRECT_URI__'
  }
})

FleetsAdminApi(sdk, { axiosConfig: { request: { headers: { Authorization: 'Bearer {access_token}' } } } })
  .getFleets( queryParams?: {
             active?: boolean | null,
             count?: number,
             desc?: 'asc' | 'desc',
             name?: string | null,
             offset?: number,
             region?: string | null,
             sortBy?: 'active' | 'name'
    })

// return Promise<FleetListResponse>
```

## POST /ams/v1/admin/namespaces/{namespace}/fleets

```
import { AccelByte } from '@accelbyte/sdk'
import { FleetsAdminApi } from '@accelbyte/sdk-ams'

const sdk = AccelByte.SDK({
  coreConfig: {
    baseURL: '__AGS_DOMAIN__',
    clientId: '__IAM_CLIENT_ID__',
    namespace: '__NAMESPACE__',
    redirectURI: '__IAM_CLIENT_REDIRECT_URI__'
  }
})

FleetsAdminApi(sdk, { axiosConfig: { request: { headers: { Authorization: 'Bearer {access_token}' } } } })
  .createFleet(data: {
             FleetParameters
    })

// return Promise<FleetCreateResponse>
```

## GET /ams/v1/admin/namespaces/{namespace}/images

```
import { AccelByte } from '@accelbyte/sdk'
import { ImagesAdminApi } from '@accelbyte/sdk-ams'

const sdk = AccelByte.SDK({
  coreConfig: {
    baseURL: '__AGS_DOMAIN__',
    clientId: '__IAM_CLIENT_ID__',
    namespace: '__NAMESPACE__',
    redirectURI: '__IAM_CLIENT_REDIRECT_URI__'
  }
})

ImagesAdminApi(sdk, { axiosConfig: { request: { headers: { Authorization: 'Bearer {access_token}' } } } })
  .getImages( queryParams?: {
             count?: number,
             inUse?: string | null,
             isProtected?: boolean | null,
             name?: string | null,
             offset?: number,
             sortBy?: string | null,
             sortDirection?: string | null,
             status?: string | null,
             tag?: string | null
    })

// return Promise<ImageList>
```

## GET /ams/v1/admin/namespaces/{namespace}/account

```
import { AccelByte } from '@accelbyte/sdk'
import { AccountAdminApi } from '@accelbyte/sdk-ams'

const sdk = AccelByte.SDK({
  coreConfig: {
    baseURL: '__AGS_DOMAIN__',
    clientId: '__IAM_CLIENT_ID__',
    namespace: '__NAMESPACE__',
    redirectURI: '__IAM_CLIENT_REDIRECT_URI__'
  }
})

AccountAdminApi(sdk, { axiosConfig: { request: { headers: { Authorization: 'Bearer {access_token}' } } } })
  .getAccount()

// return Promise<AccountResponse>
```

## POST /ams/v1/admin/namespaces/{namespace}/account

```
import { AccelByte } from '@accelbyte/sdk'
import { AccountAdminApi } from '@accelbyte/sdk-ams'

const sdk = AccelByte.SDK({
  coreConfig: {
    baseURL: '__AGS_DOMAIN__',
    clientId: '__IAM_CLIENT_ID__',
    namespace: '__NAMESPACE__',
    redirectURI: '__IAM_CLIENT_REDIRECT_URI__'
  }
})

AccountAdminApi(sdk, { axiosConfig: { request: { headers: { Authorization: 'Bearer {access_token}' } } } })
  .createAccount(data: {
             AccountCreateRequest
    })

// return Promise<AccountCreateResponse>
```

## GET /ams/v1/admin/namespaces/{namespace}/regions

```
import { AccelByte } from '@accelbyte/sdk'
import { AmsInfoAdminApi } from '@accelbyte/sdk-ams'

const sdk = AccelByte.SDK({
  coreConfig: {
    baseURL: '__AGS_DOMAIN__',
    clientId: '__IAM_CLIENT_ID__',
    namespace: '__NAMESPACE__',
    redirectURI: '__IAM_CLIENT_REDIRECT_URI__'
  }
})

AmsInfoAdminApi(sdk, { axiosConfig: { request: { headers: { Authorization: 'Bearer {access_token}' } } } })
  .getRegions()

// return Promise<AmsRegionsResponse>
```

## DELETE /ams/v1/admin/namespaces/{namespace}/artifacts

```
import { AccelByte } from '@accelbyte/sdk'
import { ArtifactsAdminApi } from '@accelbyte/sdk-ams'

const sdk = AccelByte.SDK({
  coreConfig: {
    baseURL: '__AGS_DOMAIN__',
    clientId: '__IAM_CLIENT_ID__',
    namespace: '__NAMESPACE__',
    redirectURI: '__IAM_CLIENT_REDIRECT_URI__'
  }
})

ArtifactsAdminApi(sdk, { axiosConfig: { request: { headers: { Authorization: 'Bearer {access_token}' } } } })
  .deleteArtifact( queryParams?: {
             artifactType?: string | null,
             fleetId?: string | null,
             uploadedBefore?: string | null
    })

// return Promise
```

## GET /ams/v1/admin/namespaces/{namespace}/artifacts

```
import { AccelByte } from '@accelbyte/sdk'
import { ArtifactsAdminApi } from '@accelbyte/sdk-ams'

const sdk = AccelByte.SDK({
  coreConfig: {
    baseURL: '__AGS_DOMAIN__',
    clientId: '__IAM_CLIENT_ID__',
    namespace: '__NAMESPACE__',
    redirectURI: '__IAM_CLIENT_REDIRECT_URI__'
  }
})

ArtifactsAdminApi(sdk, { axiosConfig: { request: { headers: { Authorization: 'Bearer {access_token}' } } } })
  .getArtifacts( queryParams?: {
             artifactType?: string | null,
             count?: number,
             endDate?: string | null,
             fleetID?: string | null,
             imageID?: string | null,
             maxSize?: number,
             minSize?: number,
             offset?: number,
             region?: string | null,
             serverId?: string | null,
             sortBy?: string | null,
             sortDirection?: 'asc' | 'desc',
             startDate?: string | null,
             status?: string | null
    })

// return Promise<ArtifactListResponse>
```

## GET /ams/v1/admin/namespaces/{namespace}/account/link

```
import { AccelByte } from '@accelbyte/sdk'
import { AccountAdminApi } from '@accelbyte/sdk-ams'

const sdk = AccelByte.SDK({
  coreConfig: {
    baseURL: '__AGS_DOMAIN__',
    clientId: '__IAM_CLIENT_ID__',
    namespace: '__NAMESPACE__',
    redirectURI: '__IAM_CLIENT_REDIRECT_URI__'
  }
})

AccountAdminApi(sdk, { axiosConfig: { request: { headers: { Authorization: 'Bearer {access_token}' } } } })
  .getAccountLink()

// return Promise<AccountLinkTokenResponse>
```

## POST /ams/v1/admin/namespaces/{namespace}/account/link

```
import { AccelByte } from '@accelbyte/sdk'
import { AccountAdminApi } from '@accelbyte/sdk-ams'

const sdk = AccelByte.SDK({
  coreConfig: {
    baseURL: '__AGS_DOMAIN__',
    clientId: '__IAM_CLIENT_ID__',
    namespace: '__NAMESPACE__',
    redirectURI: '__IAM_CLIENT_REDIRECT_URI__'
  }
})

AccountAdminApi(sdk, { axiosConfig: { request: { headers: { Authorization: 'Bearer {access_token}' } } } })
  .createAccountLink(data: {
             AccountLinkRequest
    })

// return Promise<AccountLinkResponse>
```

## PATCH /ams/v1/admin/namespaces/{namespace}/qos/{region}

```
import { AccelByte } from '@accelbyte/sdk'
import { AmsQoSAdminApi } from '@accelbyte/sdk-ams'

const sdk = AccelByte.SDK({
  coreConfig: {
    baseURL: '__AGS_DOMAIN__',
    clientId: '__IAM_CLIENT_ID__',
    namespace: '__NAMESPACE__',
    redirectURI: '__IAM_CLIENT_REDIRECT_URI__'
  }
})

AmsQoSAdminApi(sdk, { axiosConfig: { request: { headers: { Authorization: 'Bearer {access_token}' } } } })
  .patchQo_ByRegion(region:string, data: {
             UpdateServerRequest
    })

// return Promise
```

## GET /ams/v1/admin/namespaces/{namespace}/images-storage

```
import { AccelByte } from '@accelbyte/sdk'
import { ImagesAdminApi } from '@accelbyte/sdk-ams'

const sdk = AccelByte.SDK({
  coreConfig: {
    baseURL: '__AGS_DOMAIN__',
    clientId: '__IAM_CLIENT_ID__',
    namespace: '__NAMESPACE__',
    redirectURI: '__IAM_CLIENT_REDIRECT_URI__'
  }
})

ImagesAdminApi(sdk, { axiosConfig: { request: { headers: { Authorization: 'Bearer {access_token}' } } } })
  .getImagesStorage()

// return Promise<ImageStorage>
```

## GET /ams/v1/admin/namespaces/{namespace}/artifacts/usage

```
import { AccelByte } from '@accelbyte/sdk'
import { ArtifactsAdminApi } from '@accelbyte/sdk-ams'

const sdk = AccelByte.SDK({
  coreConfig: {
    baseURL: '__AGS_DOMAIN__',
    clientId: '__IAM_CLIENT_ID__',
    namespace: '__NAMESPACE__',
    redirectURI: '__IAM_CLIENT_REDIRECT_URI__'
  }
})

ArtifactsAdminApi(sdk, { axiosConfig: { request: { headers: { Authorization: 'Bearer {access_token}' } } } })
  .getArtifactsUsage()

// return Promise<ArtifactUsageResponse>
```

## DELETE /ams/v1/admin/namespaces/{namespace}/fleets/{fleetID}

```
import { AccelByte } from '@accelbyte/sdk'
import { FleetsAdminApi } from '@accelbyte/sdk-ams'

const sdk = AccelByte.SDK({
  coreConfig: {
    baseURL: '__AGS_DOMAIN__',
    clientId: '__IAM_CLIENT_ID__',
    namespace: '__NAMESPACE__',
    redirectURI: '__IAM_CLIENT_REDIRECT_URI__'
  }
})

FleetsAdminApi(sdk, { axiosConfig: { request: { headers: { Authorization: 'Bearer {access_token}' } } } })
  .deleteFleet_ByFleetId(fleetID:string)

// return Promise
```

## GET /ams/v1/admin/namespaces/{namespace}/fleets/{fleetID}

```
import { AccelByte } from '@accelbyte/sdk'
import { FleetsAdminApi } from '@accelbyte/sdk-ams'

const sdk = AccelByte.SDK({
  coreConfig: {
    baseURL: '__AGS_DOMAIN__',
    clientId: '__IAM_CLIENT_ID__',
    namespace: '__NAMESPACE__',
    redirectURI: '__IAM_CLIENT_REDIRECT_URI__'
  }
})

FleetsAdminApi(sdk, { axiosConfig: { request: { headers: { Authorization: 'Bearer {access_token}' } } } })
  .getFleet_ByFleetId(fleetID:string)

// return Promise<FleetGetResponse>
```

## PUT /ams/v1/admin/namespaces/{namespace}/fleets/{fleetID}

```
import { AccelByte } from '@accelbyte/sdk'
import { FleetsAdminApi } from '@accelbyte/sdk-ams'

const sdk = AccelByte.SDK({
  coreConfig: {
    baseURL: '__AGS_DOMAIN__',
    clientId: '__IAM_CLIENT_ID__',
    namespace: '__NAMESPACE__',
    redirectURI: '__IAM_CLIENT_REDIRECT_URI__'
  }
})

FleetsAdminApi(sdk, { axiosConfig: { request: { headers: { Authorization: 'Bearer {access_token}' } } } })
  .updateFleet_ByFleetId(fleetID:string, data: {
             FleetParameters
    })

// return Promise
```

## DELETE /ams/v1/admin/namespaces/{namespace}/images/{imageID}

```
import { AccelByte } from '@accelbyte/sdk'
import { ImagesAdminApi } from '@accelbyte/sdk-ams'

const sdk = AccelByte.SDK({
  coreConfig: {
    baseURL: '__AGS_DOMAIN__',
    clientId: '__IAM_CLIENT_ID__',
    namespace: '__NAMESPACE__',
    redirectURI: '__IAM_CLIENT_REDIRECT_URI__'
  }
})

ImagesAdminApi(sdk, { axiosConfig: { request: { headers: { Authorization: 'Bearer {access_token}' } } } })
  .deleteImage_ByImageId(imageID:string)

// return Promise
```

## GET /ams/v1/admin/namespaces/{namespace}/images/{imageID}

```
import { AccelByte } from '@accelbyte/sdk'
import { ImagesAdminApi } from '@accelbyte/sdk-ams'

const sdk = AccelByte.SDK({
  coreConfig: {
    baseURL: '__AGS_DOMAIN__',
    clientId: '__IAM_CLIENT_ID__',
    namespace: '__NAMESPACE__',
    redirectURI: '__IAM_CLIENT_REDIRECT_URI__'
  }
})

ImagesAdminApi(sdk, { axiosConfig: { request: { headers: { Authorization: 'Bearer {access_token}' } } } })
  .getImage_ByImageId(imageID:string)

// return Promise<ImageDetails>
```

## PATCH /ams/v1/admin/namespaces/{namespace}/images/{imageID}

```
import { AccelByte } from '@accelbyte/sdk'
import { ImagesAdminApi } from '@accelbyte/sdk-ams'

const sdk = AccelByte.SDK({
  coreConfig: {
    baseURL: '__AGS_DOMAIN__',
    clientId: '__IAM_CLIENT_ID__',
    namespace: '__NAMESPACE__',
    redirectURI: '__IAM_CLIENT_REDIRECT_URI__'
  }
})

ImagesAdminApi(sdk, { axiosConfig: { request: { headers: { Authorization: 'Bearer {access_token}' } } } })
  .patchImage_ByImageId(imageID:string, data: {
             ImageUpdate
    })

// return Promise<ImageDetails>
```

## GET /ams/v1/admin/namespaces/{namespace}/servers/{serverID}

```
import { AccelByte } from '@accelbyte/sdk'
import { ServersAdminApi } from '@accelbyte/sdk-ams'

const sdk = AccelByte.SDK({
  coreConfig: {
    baseURL: '__AGS_DOMAIN__',
    clientId: '__IAM_CLIENT_ID__',
    namespace: '__NAMESPACE__',
    redirectURI: '__IAM_CLIENT_REDIRECT_URI__'
  }
})

ServersAdminApi(sdk, { axiosConfig: { request: { headers: { Authorization: 'Bearer {access_token}' } } } })
  .getServer_ByServerId(serverID:string)

// return Promise<FleetServerInfoResponse>
```

## GET /ams/v1/admin/namespaces/{namespace}/supported-instances

```
import { AccelByte } from '@accelbyte/sdk'
import { AmsInfoAdminApi } from '@accelbyte/sdk-ams'

const sdk = AccelByte.SDK({
  coreConfig: {
    baseURL: '__AGS_DOMAIN__',
    clientId: '__IAM_CLIENT_ID__',
    namespace: '__NAMESPACE__',
    redirectURI: '__IAM_CLIENT_REDIRECT_URI__'
  }
})

AmsInfoAdminApi(sdk, { axiosConfig: { request: { headers: { Authorization: 'Bearer {access_token}' } } } })
  .getSupportedInstances()

// return Promise<InstanceTypesForNamespaceResponse>
```

## DELETE /ams/v1/admin/namespaces/{namespace}/artifacts/{artifactID}

```
import { AccelByte } from '@accelbyte/sdk'
import { ArtifactsAdminApi } from '@accelbyte/sdk-ams'

const sdk = AccelByte.SDK({
  coreConfig: {
    baseURL: '__AGS_DOMAIN__',
    clientId: '__IAM_CLIENT_ID__',
    namespace: '__NAMESPACE__',
    redirectURI: '__IAM_CLIENT_REDIRECT_URI__'
  }
})

ArtifactsAdminApi(sdk, { axiosConfig: { request: { headers: { Authorization: 'Bearer {access_token}' } } } })
  .deleteArtifact_ByArtifactId(artifactID:string)

// return Promise
```

## GET /ams/v1/admin/namespaces/{namespace}/fleets/{fleetID}/servers

```
import { AccelByte } from '@accelbyte/sdk'
import { FleetsAdminApi } from '@accelbyte/sdk-ams'

const sdk = AccelByte.SDK({
  coreConfig: {
    baseURL: '__AGS_DOMAIN__',
    clientId: '__IAM_CLIENT_ID__',
    namespace: '__NAMESPACE__',
    redirectURI: '__IAM_CLIENT_REDIRECT_URI__'
  }
})

FleetsAdminApi(sdk, { axiosConfig: { request: { headers: { Authorization: 'Bearer {access_token}' } } } })
  .getServers_ByFleetId(fleetID:string,  queryParams?: {
             count?: number,
             offset?: number,
             region?: string | null,
             serverId?: string | null,
             sortBy?: string | null,
             sortDirection?: 'asc' | 'desc',
             status?: 'claimed' | 'claiming' | 'crash backoff' | 'creating' | 'draining' | 'ready' | 'unresponsive'
    })

// return Promise<FleetServersResponse>
```

## POST /ams/v1/admin/namespaces/{namespace}/images/{imageID}/restore

```
import { AccelByte } from '@accelbyte/sdk'
import { ImagesAdminApi } from '@accelbyte/sdk-ams'

const sdk = AccelByte.SDK({
  coreConfig: {
    baseURL: '__AGS_DOMAIN__',
    clientId: '__IAM_CLIENT_ID__',
    namespace: '__NAMESPACE__',
    redirectURI: '__IAM_CLIENT_REDIRECT_URI__'
  }
})

ImagesAdminApi(sdk, { axiosConfig: { request: { headers: { Authorization: 'Bearer {access_token}' } } } })
  .createRestore_ByImageId(imageID:string)

// return Promise
```

## GET /ams/v1/admin/namespaces/{namespace}/artifacts/{artifactID}/url

```
import { AccelByte } from '@accelbyte/sdk'
import { ArtifactsAdminApi } from '@accelbyte/sdk-ams'

const sdk = AccelByte.SDK({
  coreConfig: {
    baseURL: '__AGS_DOMAIN__',
    clientId: '__IAM_CLIENT_ID__',
    namespace: '__NAMESPACE__',
    redirectURI: '__IAM_CLIENT_REDIRECT_URI__'
  }
})

ArtifactsAdminApi(sdk, { axiosConfig: { request: { headers: { Authorization: 'Bearer {access_token}' } } } })
  .getUrl_ByArtifactId(artifactID:string)

// return Promise<ArtifactUrlResponse>
```

## GET /ams/v1/admin/namespaces/{namespace}/servers/{serverID}/history

```
import { AccelByte } from '@accelbyte/sdk'
import { ServersAdminApi } from '@accelbyte/sdk-ams'

const sdk = AccelByte.SDK({
  coreConfig: {
    baseURL: '__AGS_DOMAIN__',
    clientId: '__IAM_CLIENT_ID__',
    namespace: '__NAMESPACE__',
    redirectURI: '__IAM_CLIENT_REDIRECT_URI__'
  }
})

ServersAdminApi(sdk, { axiosConfig: { request: { headers: { Authorization: 'Bearer {access_token}' } } } })
  .getHistory_ByServerId(serverID:string)

// return Promise<FleetServerHistoryResponse>
```

## GET /ams/v1/admin/namespaces/{namespace}/fleets/{fleetID}/servers/history

```
import { AccelByte } from '@accelbyte/sdk'
import { ServersAdminApi } from '@accelbyte/sdk-ams'

const sdk = AccelByte.SDK({
  coreConfig: {
    baseURL: '__AGS_DOMAIN__',
    clientId: '__IAM_CLIENT_ID__',
    namespace: '__NAMESPACE__',
    redirectURI: '__IAM_CLIENT_REDIRECT_URI__'
  }
})

ServersAdminApi(sdk, { axiosConfig: { request: { headers: { Authorization: 'Bearer {access_token}' } } } })
  .getServersHistory_ByFleetId(fleetID:string,  queryParams?: {
             count?: number,
             offset?: number,
             reason?: string | null,
             region?: string | null,
             serverId?: string | null,
             sortDirection?: string | null,
             status?: string | null
    })

// return Promise<DsHistoryList>
```

## GET /ams/v1/admin/namespaces/{namespace}/development/server-configurations

```
import { AccelByte } from '@accelbyte/sdk'
import { DevelopmentAdminApi } from '@accelbyte/sdk-ams'

const sdk = AccelByte.SDK({
  coreConfig: {
    baseURL: '__AGS_DOMAIN__',
    clientId: '__IAM_CLIENT_ID__',
    namespace: '__NAMESPACE__',
    redirectURI: '__IAM_CLIENT_REDIRECT_URI__'
  }
})

DevelopmentAdminApi(sdk, { axiosConfig: { request: { headers: { Authorization: 'Bearer {access_token}' } } } })
  .getDevelopmentServerConfigurations( queryParams?: {
             count?: number,
             offset?: number
    })

// return Promise<DevelopmentServerConfigurationListResponse>
```

## POST /ams/v1/admin/namespaces/{namespace}/development/server-configurations

```
import { AccelByte } from '@accelbyte/sdk'
import { DevelopmentAdminApi } from '@accelbyte/sdk-ams'

const sdk = AccelByte.SDK({
  coreConfig: {
    baseURL: '__AGS_DOMAIN__',
    clientId: '__IAM_CLIENT_ID__',
    namespace: '__NAMESPACE__',
    redirectURI: '__IAM_CLIENT_REDIRECT_URI__'
  }
})

DevelopmentAdminApi(sdk, { axiosConfig: { request: { headers: { Authorization: 'Bearer {access_token}' } } } })
  .createDevelopmentServerConfiguration(data: {
             DevelopmentServerConfigurationCreateRequest
    })

// return Promise<DevelopmentServerConfigurationCreateResponse>
```

## GET /ams/v1/admin/namespaces/{namespace}/servers/{serverID}/connectioninfo

```
import { AccelByte } from '@accelbyte/sdk'
import { ServersAdminApi } from '@accelbyte/sdk-ams'

const sdk = AccelByte.SDK({
  coreConfig: {
    baseURL: '__AGS_DOMAIN__',
    clientId: '__IAM_CLIENT_ID__',
    namespace: '__NAMESPACE__',
    redirectURI: '__IAM_CLIENT_REDIRECT_URI__'
  }
})

ServersAdminApi(sdk, { axiosConfig: { request: { headers: { Authorization: 'Bearer {access_token}' } } } })
  .getConnectioninfo_ByServerId(serverID:string)

// return Promise<FleetServerConnectionInfoResponse>
```

## GET /ams/v1/admin/namespaces/{namespace}/fleets/{fleetID}/artifacts-sampling-rules

```
import { AccelByte } from '@accelbyte/sdk'
import { ArtifactsAdminApi } from '@accelbyte/sdk-ams'

const sdk = AccelByte.SDK({
  coreConfig: {
    baseURL: '__AGS_DOMAIN__',
    clientId: '__IAM_CLIENT_ID__',
    namespace: '__NAMESPACE__',
    redirectURI: '__IAM_CLIENT_REDIRECT_URI__'
  }
})

ArtifactsAdminApi(sdk, { axiosConfig: { request: { headers: { Authorization: 'Bearer {access_token}' } } } })
  .getArtifactsSamplingRules_ByFleetId(fleetID:string)

// return Promise<FleetArtifactsSampleRules>
```

## PUT /ams/v1/admin/namespaces/{namespace}/fleets/{fleetID}/artifacts-sampling-rules

```
import { AccelByte } from '@accelbyte/sdk'
import { ArtifactsAdminApi } from '@accelbyte/sdk-ams'

const sdk = AccelByte.SDK({
  coreConfig: {
    baseURL: '__AGS_DOMAIN__',
    clientId: '__IAM_CLIENT_ID__',
    namespace: '__NAMESPACE__',
    redirectURI: '__IAM_CLIENT_REDIRECT_URI__'
  }
})

ArtifactsAdminApi(sdk, { axiosConfig: { request: { headers: { Authorization: 'Bearer {access_token}' } } } })
  .updateArtifactsSamplingRule_ByFleetId(fleetID:string, data: {
             FleetArtifactsSampleRules
    })

// return Promise<FleetArtifactsSampleRules>
```

## DELETE /ams/v1/admin/namespaces/{namespace}/development/server-configurations/{developmentServerConfigID}

```
import { AccelByte } from '@accelbyte/sdk'
import { DevelopmentAdminApi } from '@accelbyte/sdk-ams'

const sdk = AccelByte.SDK({
  coreConfig: {
    baseURL: '__AGS_DOMAIN__',
    clientId: '__IAM_CLIENT_ID__',
    namespace: '__NAMESPACE__',
    redirectURI: '__IAM_CLIENT_REDIRECT_URI__'
  }
})

DevelopmentAdminApi(sdk, { axiosConfig: { request: { headers: { Authorization: 'Bearer {access_token}' } } } })
  .deleteDevelopmentServerConfiguration_ByDevelopmentServerConfigId(developmentServerConfigID:string)

// return Promise
```

## GET /ams/v1/admin/namespaces/{namespace}/development/server-configurations/{developmentServerConfigID}

```
import { AccelByte } from '@accelbyte/sdk'
import { DevelopmentAdminApi } from '@accelbyte/sdk-ams'

const sdk = AccelByte.SDK({
  coreConfig: {
    baseURL: '__AGS_DOMAIN__',
    clientId: '__IAM_CLIENT_ID__',
    namespace: '__NAMESPACE__',
    redirectURI: '__IAM_CLIENT_REDIRECT_URI__'
  }
})

DevelopmentAdminApi(sdk, { axiosConfig: { request: { headers: { Authorization: 'Bearer {access_token}' } } } })
  .getDevelopmentServerConfiguration_ByDevelopmentServerConfigId(developmentServerConfigID:string)

// return Promise<DevelopmentServerConfigurationGetResponse>
```