## GET /buildinfo/public/namespaces/{namespace}/versionHistory

```
import { AccelByte } from '@accelbyte/sdk'
import { DownloaderApi } from '@accelbyte/sdk-buildinfo'

const sdk = AccelByte.SDK({
  coreConfig: {
    baseURL: '__AGS_DOMAIN__',
    clientId: '__IAM_CLIENT_ID__',
    namespace: '__NAMESPACE__',
    redirectURI: '__IAM_CLIENT_REDIRECT_URI__'
  }
})

DownloaderApi(sdk, { axiosConfig: { request: { headers: { Authorization: 'Bearer {access_token}' } } } })
  .getVersionHistory( queryParams: {
             appId: string | null,
             comparedBuildId: string | null
    })

// return Promise<VersionChain>
```

## GET /buildinfo/public/namespaces/{namespace}/bulkCheckLatest

```
import { AccelByte } from '@accelbyte/sdk'
import { DownloaderApi } from '@accelbyte/sdk-buildinfo'

const sdk = AccelByte.SDK({
  coreConfig: {
    baseURL: '__AGS_DOMAIN__',
    clientId: '__IAM_CLIENT_ID__',
    namespace: '__NAMESPACE__',
    redirectURI: '__IAM_CLIENT_REDIRECT_URI__'
  }
})

DownloaderApi(sdk, { axiosConfig: { request: { headers: { Authorization: 'Bearer {access_token}' } } } })
  .getBulkCheckLatest( queryParams: {
             appIds: string[]
    })

// return Promise<BuildAvailabilityArray>
```

## GET /buildinfo/public/namespaces/{namespace}/dlc/{buildId}/link

```
import { AccelByte } from '@accelbyte/sdk'
import { DlcApi } from '@accelbyte/sdk-buildinfo'

const sdk = AccelByte.SDK({
  coreConfig: {
    baseURL: '__AGS_DOMAIN__',
    clientId: '__IAM_CLIENT_ID__',
    namespace: '__NAMESPACE__',
    redirectURI: '__IAM_CLIENT_REDIRECT_URI__'
  }
})

DlcApi(sdk, { axiosConfig: { request: { headers: { Authorization: 'Bearer {access_token}' } } } })
  .getLink_ByBuildId(buildId:string)

// return Promise<RetrieveDependencyLinkResponse>
```

## GET /buildinfo/public/namespaces/{namespace}/drmlicense/encrypt

```
import { AccelByte } from '@accelbyte/sdk'
import { DrmApi } from '@accelbyte/sdk-buildinfo'

const sdk = AccelByte.SDK({
  coreConfig: {
    baseURL: '__AGS_DOMAIN__',
    clientId: '__IAM_CLIENT_ID__',
    namespace: '__NAMESPACE__',
    redirectURI: '__IAM_CLIENT_REDIRECT_URI__'
  }
})

DrmApi(sdk, { axiosConfig: { request: { headers: { Authorization: 'Bearer {access_token}' } } } })
  .getDrmlicenseEncrypt( queryParams: {
             appId: string | null,
             machineId: string | null
    })

// return Promise<EncryptedIdentity>
```

## GET /buildinfo/public/namespaces/{namespace}/updategame/{appId}

```
import { AccelByte } from '@accelbyte/sdk'
import { DownloaderApi } from '@accelbyte/sdk-buildinfo'

const sdk = AccelByte.SDK({
  coreConfig: {
    baseURL: '__AGS_DOMAIN__',
    clientId: '__IAM_CLIENT_ID__',
    namespace: '__NAMESPACE__',
    redirectURI: '__IAM_CLIENT_REDIRECT_URI__'
  }
})

DownloaderApi(sdk, { axiosConfig: { request: { headers: { Authorization: 'Bearer {access_token}' } } } })
  .getUpdategame_ByAppId(appId:string)

// return Promise<BuildManifest>
```

## GET /buildinfo/public/namespaces/{namespace}/availablebuilds/{appId}

```
import { AccelByte } from '@accelbyte/sdk'
import { DownloaderApi } from '@accelbyte/sdk-buildinfo'

const sdk = AccelByte.SDK({
  coreConfig: {
    baseURL: '__AGS_DOMAIN__',
    clientId: '__IAM_CLIENT_ID__',
    namespace: '__NAMESPACE__',
    redirectURI: '__IAM_CLIENT_REDIRECT_URI__'
  }
})

DownloaderApi(sdk, { axiosConfig: { request: { headers: { Authorization: 'Bearer {access_token}' } } } })
  .getAvailablebuild_ByAppId(appId:string)

// return Promise<BasicBuildManifestArray>
```

## GET /buildinfo/public/namespaces/{namespace}/dlc/{buildId}/compatibility

```
import { AccelByte } from '@accelbyte/sdk'
import { DlcApi } from '@accelbyte/sdk-buildinfo'

const sdk = AccelByte.SDK({
  coreConfig: {
    baseURL: '__AGS_DOMAIN__',
    clientId: '__IAM_CLIENT_ID__',
    namespace: '__NAMESPACE__',
    redirectURI: '__IAM_CLIENT_REDIRECT_URI__'
  }
})

DlcApi(sdk, { axiosConfig: { request: { headers: { Authorization: 'Bearer {access_token}' } } } })
  .getCompatibility_ByBuildId(buildId:string)

// return Promise<RetrieveDependencyCompatibilityResponse>
```

## GET /buildinfo/public/namespaces/{namespace}/updategame/builds/{buildId}

```
import { AccelByte } from '@accelbyte/sdk'
import { DownloaderApi } from '@accelbyte/sdk-buildinfo'

const sdk = AccelByte.SDK({
  coreConfig: {
    baseURL: '__AGS_DOMAIN__',
    clientId: '__IAM_CLIENT_ID__',
    namespace: '__NAMESPACE__',
    redirectURI: '__IAM_CLIENT_REDIRECT_URI__'
  }
})

DownloaderApi(sdk, { axiosConfig: { request: { headers: { Authorization: 'Bearer {access_token}' } } } })
  .getUpdategameBuild_ByBuildId(buildId:string)

// return Promise<BuildManifest>
```

## POST /buildinfo/public/namespaces/{namespace}/builds/{buildId}/blocks/urls

```
import { AccelByte } from '@accelbyte/sdk'
import { DownloaderApi } from '@accelbyte/sdk-buildinfo'

const sdk = AccelByte.SDK({
  coreConfig: {
    baseURL: '__AGS_DOMAIN__',
    clientId: '__IAM_CLIENT_ID__',
    namespace: '__NAMESPACE__',
    redirectURI: '__IAM_CLIENT_REDIRECT_URI__'
  }
})

DownloaderApi(sdk, { axiosConfig: { request: { headers: { Authorization: 'Bearer {access_token}' } } } })
  .createBlockUrl_ByBuildId(buildId:string, data: {
             BlockDownloadUrlsRequest
    })

// return Promise<BlockDownloadUrls>
```

## GET /buildinfo/public/namespaces/{namespace}/drmlicense/retrievePublicKey

```
import { AccelByte } from '@accelbyte/sdk'
import { DrmApi } from '@accelbyte/sdk-buildinfo'

const sdk = AccelByte.SDK({
  coreConfig: {
    baseURL: '__AGS_DOMAIN__',
    clientId: '__IAM_CLIENT_ID__',
    namespace: '__NAMESPACE__',
    redirectURI: '__IAM_CLIENT_REDIRECT_URI__'
  }
})

DrmApi(sdk, { axiosConfig: { request: { headers: { Authorization: 'Bearer {access_token}' } } } })
  .getDrmlicenseRetrievePublicKey()

// return Promise<PublicKeyPresignedUrl>
```

## GET /buildinfo/public/namespaces/{namespace}/updategame/{appId}/{version}

```
import { AccelByte } from '@accelbyte/sdk'
import { DownloaderApi } from '@accelbyte/sdk-buildinfo'

const sdk = AccelByte.SDK({
  coreConfig: {
    baseURL: '__AGS_DOMAIN__',
    clientId: '__IAM_CLIENT_ID__',
    namespace: '__NAMESPACE__',
    redirectURI: '__IAM_CLIENT_REDIRECT_URI__'
  }
})

DownloaderApi(sdk, { axiosConfig: { request: { headers: { Authorization: 'Bearer {access_token}' } } } })
  .getUpdategame_ByAppId_ByVersion(appId:string, version:string)

// return Promise<BuildManifest>
```

## GET /buildinfo/public/namespaces/{namespace}/v2/updategame/builds/{buildId}

```
import { AccelByte } from '@accelbyte/sdk'
import { DownloaderApi } from '@accelbyte/sdk-buildinfo'

const sdk = AccelByte.SDK({
  coreConfig: {
    baseURL: '__AGS_DOMAIN__',
    clientId: '__IAM_CLIENT_ID__',
    namespace: '__NAMESPACE__',
    redirectURI: '__IAM_CLIENT_REDIRECT_URI__'
  }
})

DownloaderApi(sdk, { axiosConfig: { request: { headers: { Authorization: 'Bearer {access_token}' } } } })
  .getUpdategameBuild_ByBuildId_v2(buildId:string)

// return Promise<BuildManifest>
```

## GET /buildinfo/public/namespaces/{namespace}/dlcs/latest/byGameAppId/{appId}

```
import { AccelByte } from '@accelbyte/sdk'
import { DlcApi } from '@accelbyte/sdk-buildinfo'

const sdk = AccelByte.SDK({
  coreConfig: {
    baseURL: '__AGS_DOMAIN__',
    clientId: '__IAM_CLIENT_ID__',
    namespace: '__NAMESPACE__',
    redirectURI: '__IAM_CLIENT_REDIRECT_URI__'
  }
})

DlcApi(sdk, { axiosConfig: { request: { headers: { Authorization: 'Bearer {access_token}' } } } })
  .getDlcLatestByGameAppId_ByAppId(appId:string)

// return Promise<RetrieveLatestDlcResponseArray>
```

## GET /buildinfo/public/namespaces/{namespace}/apps/latest/byDLCAppId/{dlcAppId}

```
import { AccelByte } from '@accelbyte/sdk'
import { DlcApi } from '@accelbyte/sdk-buildinfo'

const sdk = AccelByte.SDK({
  coreConfig: {
    baseURL: '__AGS_DOMAIN__',
    clientId: '__IAM_CLIENT_ID__',
    namespace: '__NAMESPACE__',
    redirectURI: '__IAM_CLIENT_REDIRECT_URI__'
  }
})

DlcApi(sdk, { axiosConfig: { request: { headers: { Authorization: 'Bearer {access_token}' } } } })
  .getAppLatestByDlcAppId_ByDlcAppId(dlcAppId:string)

// return Promise<RetrieveBaseGameResponseArray>
```

## GET /buildinfo/public/namespaces/{namespace}/v2/updategame/{appId}/{platformId}

```
import { AccelByte } from '@accelbyte/sdk'
import { DownloaderApi } from '@accelbyte/sdk-buildinfo'

const sdk = AccelByte.SDK({
  coreConfig: {
    baseURL: '__AGS_DOMAIN__',
    clientId: '__IAM_CLIENT_ID__',
    namespace: '__NAMESPACE__',
    redirectURI: '__IAM_CLIENT_REDIRECT_URI__'
  }
})

DownloaderApi(sdk, { axiosConfig: { request: { headers: { Authorization: 'Bearer {access_token}' } } } })
  .getUpdategame_ByAppId_ByPlatformId_v2(appId:string, platformId:string)

// return Promise<BuildManifest>
```

## GET /buildinfo/public/namespaces/{namespace}/diff/{sourceBuildId}/{destinationBuildId}

```
import { AccelByte } from '@accelbyte/sdk'
import { DownloaderApi } from '@accelbyte/sdk-buildinfo'

const sdk = AccelByte.SDK({
  coreConfig: {
    baseURL: '__AGS_DOMAIN__',
    clientId: '__IAM_CLIENT_ID__',
    namespace: '__NAMESPACE__',
    redirectURI: '__IAM_CLIENT_REDIRECT_URI__'
  }
})

DownloaderApi(sdk, { axiosConfig: { request: { headers: { Authorization: 'Bearer {access_token}' } } } })
  .getDiff_BySourceBuildId_ByDestinationBuildId(sourceBuildId:string, destinationBuildId:string)

// return Promise<DiffStatusReport>
```

## GET /buildinfo/public/namespaces/{namespace}/v2/updategame/{appId}/{version}/{platformId}

```
import { AccelByte } from '@accelbyte/sdk'
import { DownloaderApi } from '@accelbyte/sdk-buildinfo'

const sdk = AccelByte.SDK({
  coreConfig: {
    baseURL: '__AGS_DOMAIN__',
    clientId: '__IAM_CLIENT_ID__',
    namespace: '__NAMESPACE__',
    redirectURI: '__IAM_CLIENT_REDIRECT_URI__'
  }
})

DownloaderApi(sdk, { axiosConfig: { request: { headers: { Authorization: 'Bearer {access_token}' } } } })
  .getVersion_ByAppId_ByVersion_ByPlatformId_v2(appId:string, version:string, platformId:string)

// return Promise<BuildManifest>
```

## GET /buildinfo/public/namespaces/{namespace}/diff/cache/source/{sourceBuildId}/dest/{destinationBuildId}

```
import { AccelByte } from '@accelbyte/sdk'
import { CachingApi } from '@accelbyte/sdk-buildinfo'

const sdk = AccelByte.SDK({
  coreConfig: {
    baseURL: '__AGS_DOMAIN__',
    clientId: '__IAM_CLIENT_ID__',
    namespace: '__NAMESPACE__',
    redirectURI: '__IAM_CLIENT_REDIRECT_URI__'
  }
})

CachingApi(sdk, { axiosConfig: { request: { headers: { Authorization: 'Bearer {access_token}' } } } })
  .getDestCacheDiff_BySourceBuildId_ByDestinationBuildId(sourceBuildId:string, destinationBuildId:string)

// return Promise<RetrieveDiffCacheResponse>
```

## PUT /buildinfo/admin/namespaces/{namespace}/dlc/link

```
import { AccelByte } from '@accelbyte/sdk'
import { DlcAdminApi } from '@accelbyte/sdk-buildinfo'

const sdk = AccelByte.SDK({
  coreConfig: {
    baseURL: '__AGS_DOMAIN__',
    clientId: '__IAM_CLIENT_ID__',
    namespace: '__NAMESPACE__',
    redirectURI: '__IAM_CLIENT_REDIRECT_URI__'
  }
})

DlcAdminApi(sdk, { axiosConfig: { request: { headers: { Authorization: 'Bearer {access_token}' } } } })
  .updateDlcLink(data: {
             CreateDependencyLinkRequest
    })

// return Promise
```

## POST /buildinfo/admin/namespaces/{namespace}/diff/send

```
import { AccelByte } from '@accelbyte/sdk'
import { UploaderV3AdminApi } from '@accelbyte/sdk-buildinfo'

const sdk = AccelByte.SDK({
  coreConfig: {
    baseURL: '__AGS_DOMAIN__',
    clientId: '__IAM_CLIENT_ID__',
    namespace: '__NAMESPACE__',
    redirectURI: '__IAM_CLIENT_REDIRECT_URI__'
  }
})

UploaderV3AdminApi(sdk, { axiosConfig: { request: { headers: { Authorization: 'Bearer {access_token}' } } } })
  .createDiffSend(data: {
             DiffPatchRequest
    })

// return Promise
```

## POST /buildinfo/admin/namespaces/{namespace}/diff/cache

```
import { AccelByte } from '@accelbyte/sdk'
import { CachingAdminApi } from '@accelbyte/sdk-buildinfo'

const sdk = AccelByte.SDK({
  coreConfig: {
    baseURL: '__AGS_DOMAIN__',
    clientId: '__IAM_CLIENT_ID__',
    namespace: '__NAMESPACE__',
    redirectURI: '__IAM_CLIENT_REDIRECT_URI__'
  }
})

CachingAdminApi(sdk, { axiosConfig: { request: { headers: { Authorization: 'Bearer {access_token}' } } } })
  .createDiffCache(data: {
             CreateDiffCacheRequest
    })

// return Promise
```

## PUT /buildinfo/admin/namespaces/{namespace}/diff/cache

```
import { AccelByte } from '@accelbyte/sdk'
import { CachingAdminApi } from '@accelbyte/sdk-buildinfo'

const sdk = AccelByte.SDK({
  coreConfig: {
    baseURL: '__AGS_DOMAIN__',
    clientId: '__IAM_CLIENT_ID__',
    namespace: '__NAMESPACE__',
    redirectURI: '__IAM_CLIENT_REDIRECT_URI__'
  }
})

CachingAdminApi(sdk, { axiosConfig: { request: { headers: { Authorization: 'Bearer {access_token}' } } } })
  .updateDiffCache(data: {
             CommitDiffCacheRequest
    })

// return Promise
```

## POST /buildinfo/admin/namespaces/{namespace}/patch/send

```
import { AccelByte } from '@accelbyte/sdk'
import { UploaderV3AdminApi } from '@accelbyte/sdk-buildinfo'

const sdk = AccelByte.SDK({
  coreConfig: {
    baseURL: '__AGS_DOMAIN__',
    clientId: '__IAM_CLIENT_ID__',
    namespace: '__NAMESPACE__',
    redirectURI: '__IAM_CLIENT_REDIRECT_URI__'
  }
})

UploaderV3AdminApi(sdk, { axiosConfig: { request: { headers: { Authorization: 'Bearer {access_token}' } } } })
  .createPatchSend(data: {
             DiffPatchRequest
    })

// return Promise
```

## DELETE /buildinfo/admin/namespaces/{namespace}/gdpr/remove

```
import { AccelByte } from '@accelbyte/sdk'
import { GdprAdminApi } from '@accelbyte/sdk-buildinfo'

const sdk = AccelByte.SDK({
  coreConfig: {
    baseURL: '__AGS_DOMAIN__',
    clientId: '__IAM_CLIENT_ID__',
    namespace: '__NAMESPACE__',
    redirectURI: '__IAM_CLIENT_REDIRECT_URI__'
  }
})

GdprAdminApi(sdk, { axiosConfig: { request: { headers: { Authorization: 'Bearer {access_token}' } } } })
  .deleteGdprRemove( queryParams: {
             userId: string | null
    })

// return Promise<BuildInfoPii>
```

## GET /buildinfo/admin/namespaces/{namespace}/ping/differ

```
import { AccelByte } from '@accelbyte/sdk'
import { UtilityAdminApi } from '@accelbyte/sdk-buildinfo'

const sdk = AccelByte.SDK({
  coreConfig: {
    baseURL: '__AGS_DOMAIN__',
    clientId: '__IAM_CLIENT_ID__',
    namespace: '__NAMESPACE__',
    redirectURI: '__IAM_CLIENT_REDIRECT_URI__'
  }
})

UtilityAdminApi(sdk, { axiosConfig: { request: { headers: { Authorization: 'Bearer {access_token}' } } } })
  .getPingDiffer()

// return Promise<PingResultResponse>
```

## GET /buildinfo/admin/namespaces/{namespace}/gdpr/retrieve

```
import { AccelByte } from '@accelbyte/sdk'
import { GdprAdminApi } from '@accelbyte/sdk-buildinfo'

const sdk = AccelByte.SDK({
  coreConfig: {
    baseURL: '__AGS_DOMAIN__',
    clientId: '__IAM_CLIENT_ID__',
    namespace: '__NAMESPACE__',
    redirectURI: '__IAM_CLIENT_REDIRECT_URI__'
  }
})

GdprAdminApi(sdk, { axiosConfig: { request: { headers: { Authorization: 'Bearer {access_token}' } } } })
  .getGdprRetrieve( queryParams: {
             userId: string | null
    })

// return Promise<BuildInfoPii>
```

## GET /buildinfo/admin/namespaces/{namespace}/builds/byAppId

```
import { AccelByte } from '@accelbyte/sdk'
import { UploaderV1AdminApi } from '@accelbyte/sdk-buildinfo'

const sdk = AccelByte.SDK({
  coreConfig: {
    baseURL: '__AGS_DOMAIN__',
    clientId: '__IAM_CLIENT_ID__',
    namespace: '__NAMESPACE__',
    redirectURI: '__IAM_CLIENT_REDIRECT_URI__'
  }
})

UploaderV1AdminApi(sdk, { axiosConfig: { request: { headers: { Authorization: 'Bearer {access_token}' } } } })
  .getBuildsByAppId( queryParams: {
             appId: string | null
    })

// return Promise<BuildIdVersionArray>
```

## GET /buildinfo/admin/namespaces/{namespace}/configurations

```
import { AccelByte } from '@accelbyte/sdk'
import { UtilityAdminApi } from '@accelbyte/sdk-buildinfo'

const sdk = AccelByte.SDK({
  coreConfig: {
    baseURL: '__AGS_DOMAIN__',
    clientId: '__IAM_CLIENT_ID__',
    namespace: '__NAMESPACE__',
    redirectURI: '__IAM_CLIENT_REDIRECT_URI__'
  }
})

UtilityAdminApi(sdk, { axiosConfig: { request: { headers: { Authorization: 'Bearer {access_token}' } } } })
  .getConfigurations()

// return Promise<ConfigurationInfo>
```

## PATCH /buildinfo/admin/namespaces/{namespace}/configurations

```
import { AccelByte } from '@accelbyte/sdk'
import { UtilityAdminApi } from '@accelbyte/sdk-buildinfo'

const sdk = AccelByte.SDK({
  coreConfig: {
    baseURL: '__AGS_DOMAIN__',
    clientId: '__IAM_CLIENT_ID__',
    namespace: '__NAMESPACE__',
    redirectURI: '__IAM_CLIENT_REDIRECT_URI__'
  }
})

UtilityAdminApi(sdk, { axiosConfig: { request: { headers: { Authorization: 'Bearer {access_token}' } } } })
  .patchConfiguration(data: {
             ConfigurationUpdate
    })

// return Promise<ConfigurationInfo>
```

## POST /buildinfo/admin/namespaces/{namespace}/diff/calculate

```
import { AccelByte } from '@accelbyte/sdk'
import { CachingAdminApi } from '@accelbyte/sdk-buildinfo'

const sdk = AccelByte.SDK({
  coreConfig: {
    baseURL: '__AGS_DOMAIN__',
    clientId: '__IAM_CLIENT_ID__',
    namespace: '__NAMESPACE__',
    redirectURI: '__IAM_CLIENT_REDIRECT_URI__'
  }
})

CachingAdminApi(sdk, { axiosConfig: { request: { headers: { Authorization: 'Bearer {access_token}' } } } })
  .createDiffCalculate(data: {
             CalculateDiffCacheRequest
    })

// return Promise
```

## POST /buildinfo/admin/namespaces/{namespace}/blocks/multipart

```
import { AccelByte } from '@accelbyte/sdk'
import { MultipartUploaderAdminApi } from '@accelbyte/sdk-buildinfo'

const sdk = AccelByte.SDK({
  coreConfig: {
    baseURL: '__AGS_DOMAIN__',
    clientId: '__IAM_CLIENT_ID__',
    namespace: '__NAMESPACE__',
    redirectURI: '__IAM_CLIENT_REDIRECT_URI__'
  }
})

MultipartUploaderAdminApi(sdk, { axiosConfig: { request: { headers: { Authorization: 'Bearer {access_token}' } } } })
  .createBlockMultipart(data: {
             StartMultipartUploadRequest
    })

// return Promise<MultipartUploadSummary>
```

## DELETE /buildinfo/admin/namespaces/{namespace}/builds/{buildId}

```
import { AccelByte } from '@accelbyte/sdk'
import { UploaderV1AdminApi } from '@accelbyte/sdk-buildinfo'

const sdk = AccelByte.SDK({
  coreConfig: {
    baseURL: '__AGS_DOMAIN__',
    clientId: '__IAM_CLIENT_ID__',
    namespace: '__NAMESPACE__',
    redirectURI: '__IAM_CLIENT_REDIRECT_URI__'
  }
})

UploaderV1AdminApi(sdk, { axiosConfig: { request: { headers: { Authorization: 'Bearer {access_token}' } } } })
  .deleteBuild_ByBuildId(buildId:string)

// return Promise
```

## GET /buildinfo/admin/namespaces/{namespace}/builds/{buildId}

```
import { AccelByte } from '@accelbyte/sdk'
import { UploaderV1AdminApi } from '@accelbyte/sdk-buildinfo'

const sdk = AccelByte.SDK({
  coreConfig: {
    baseURL: '__AGS_DOMAIN__',
    clientId: '__IAM_CLIENT_ID__',
    namespace: '__NAMESPACE__',
    redirectURI: '__IAM_CLIENT_REDIRECT_URI__'
  }
})

UploaderV1AdminApi(sdk, { axiosConfig: { request: { headers: { Authorization: 'Bearer {access_token}' } } } })
  .getBuild_ByBuildId(buildId:string)

// return Promise<BuildManifest>
```

## POST /buildinfo/admin/namespaces/{namespace}/listenDiffStatus

```
import { AccelByte } from '@accelbyte/sdk'
import { UploaderV3AdminApi } from '@accelbyte/sdk-buildinfo'

const sdk = AccelByte.SDK({
  coreConfig: {
    baseURL: '__AGS_DOMAIN__',
    clientId: '__IAM_CLIENT_ID__',
    namespace: '__NAMESPACE__',
    redirectURI: '__IAM_CLIENT_REDIRECT_URI__'
  }
})

UploaderV3AdminApi(sdk, { axiosConfig: { request: { headers: { Authorization: 'Bearer {access_token}' } } } })
  .createListenDiffStatu(data: {
             DiffPatchRequest
    })

// return Promise<FileDiffingStatus>
```

## POST /buildinfo/admin/namespaces/{namespace}/startchunkupload

```
import { AccelByte } from '@accelbyte/sdk'
import { UploaderV1AdminApi } from '@accelbyte/sdk-buildinfo'

const sdk = AccelByte.SDK({
  coreConfig: {
    baseURL: '__AGS_DOMAIN__',
    clientId: '__IAM_CLIENT_ID__',
    namespace: '__NAMESPACE__',
    redirectURI: '__IAM_CLIENT_REDIRECT_URI__'
  }
})

UploaderV1AdminApi(sdk, { axiosConfig: { request: { headers: { Authorization: 'Bearer {access_token}' } } } })
  .createStartchunkupload(data: {
             BinaryUpload
    })

// return Promise<UploadSummary>
```

## POST /buildinfo/admin/namespaces/{namespace}/listenPatchStatus

```
import { AccelByte } from '@accelbyte/sdk'
import { UploaderV3AdminApi } from '@accelbyte/sdk-buildinfo'

const sdk = AccelByte.SDK({
  coreConfig: {
    baseURL: '__AGS_DOMAIN__',
    clientId: '__IAM_CLIENT_ID__',
    namespace: '__NAMESPACE__',
    redirectURI: '__IAM_CLIENT_REDIRECT_URI__'
  }
})

UploaderV3AdminApi(sdk, { axiosConfig: { request: { headers: { Authorization: 'Bearer {access_token}' } } } })
  .createListenPatchStatu(data: {
             DiffPatchRequest
    })

// return Promise<FileDiffingStatus>
```

## GET /buildinfo/admin/namespaces/{namespace}/v2/builds/byAppId

```
import { AccelByte } from '@accelbyte/sdk'
import { UploaderV2AdminApi } from '@accelbyte/sdk-buildinfo'

const sdk = AccelByte.SDK({
  coreConfig: {
    baseURL: '__AGS_DOMAIN__',
    clientId: '__IAM_CLIENT_ID__',
    namespace: '__NAMESPACE__',
    redirectURI: '__IAM_CLIENT_REDIRECT_URI__'
  }
})

UploaderV2AdminApi(sdk, { axiosConfig: { request: { headers: { Authorization: 'Bearer {access_token}' } } } })
  .getBuildsByAppId_v2( queryParams: {
             appId: string | null,
             platformId: string | null
    })

// return Promise<BuildIdVersionArray>
```

## POST /buildinfo/admin/namespaces/{namespace}/v3/prezsyncupload

```
import { AccelByte } from '@accelbyte/sdk'
import { UploaderV3AdminApi } from '@accelbyte/sdk-buildinfo'

const sdk = AccelByte.SDK({
  coreConfig: {
    baseURL: '__AGS_DOMAIN__',
    clientId: '__IAM_CLIENT_ID__',
    namespace: '__NAMESPACE__',
    redirectURI: '__IAM_CLIENT_REDIRECT_URI__'
  }
})

UploaderV3AdminApi(sdk, { axiosConfig: { request: { headers: { Authorization: 'Bearer {access_token}' } } } })
  .createPrezsyncupload_v3(data: {
             PreCheckUploadRequest
    })

// return Promise<DifferentialUploadSummary>
```

## GET /buildinfo/admin/namespaces/{namespace}/validateSDKConfig

```
import { AccelByte } from '@accelbyte/sdk'
import { UtilityAdminApi } from '@accelbyte/sdk-buildinfo'

const sdk = AccelByte.SDK({
  coreConfig: {
    baseURL: '__AGS_DOMAIN__',
    clientId: '__IAM_CLIENT_ID__',
    namespace: '__NAMESPACE__',
    redirectURI: '__IAM_CLIENT_REDIRECT_URI__'
  }
})

UtilityAdminApi(sdk, { axiosConfig: { request: { headers: { Authorization: 'Bearer {access_token}' } } } })
  .getValidateSdkConfig( queryParams: {
             clientId: string | null,
             redirectUri: string | null
    })

// return Promise<ClientPayload>
```

## GET /buildinfo/admin/namespaces/{namespace}/builds/byNamespace

```
import { AccelByte } from '@accelbyte/sdk'
import { UploaderV1AdminApi } from '@accelbyte/sdk-buildinfo'

const sdk = AccelByte.SDK({
  coreConfig: {
    baseURL: '__AGS_DOMAIN__',
    clientId: '__IAM_CLIENT_ID__',
    namespace: '__NAMESPACE__',
    redirectURI: '__IAM_CLIENT_REDIRECT_URI__'
  }
})

UploaderV1AdminApi(sdk, { axiosConfig: { request: { headers: { Authorization: 'Bearer {access_token}' } } } })
  .getBuildsByNamespace()

// return Promise<BasicBuildManifestArray>
```

## GET /buildinfo/admin/namespaces/{namespace}/dlc/{buildId}/link

```
import { AccelByte } from '@accelbyte/sdk'
import { DlcAdminApi } from '@accelbyte/sdk-buildinfo'

const sdk = AccelByte.SDK({
  coreConfig: {
    baseURL: '__AGS_DOMAIN__',
    clientId: '__IAM_CLIENT_ID__',
    namespace: '__NAMESPACE__',
    redirectURI: '__IAM_CLIENT_REDIRECT_URI__'
  }
})

DlcAdminApi(sdk, { axiosConfig: { request: { headers: { Authorization: 'Bearer {access_token}' } } } })
  .getLink_ByBuildId(buildId:string)

// return Promise<RetrieveDependencyLinkResponse>
```

## GET /buildinfo/admin/namespaces/{namespace}/v2/dlc/byGameAppId

```
import { AccelByte } from '@accelbyte/sdk'
import { UploaderV2AdminApi } from '@accelbyte/sdk-buildinfo'

const sdk = AccelByte.SDK({
  coreConfig: {
    baseURL: '__AGS_DOMAIN__',
    clientId: '__IAM_CLIENT_ID__',
    namespace: '__NAMESPACE__',
    redirectURI: '__IAM_CLIENT_REDIRECT_URI__'
  }
})

UploaderV2AdminApi(sdk, { axiosConfig: { request: { headers: { Authorization: 'Bearer {access_token}' } } } })
  .getDlcByGameAppId_v2( queryParams: {
             appId: string | null,
             platformId: string | null
    })

// return Promise<BuildIdVersionArray>
```

## POST /buildinfo/admin/namespaces/{namespace}/commitbuildmanifest

```
import { AccelByte } from '@accelbyte/sdk'
import { UploaderV1AdminApi } from '@accelbyte/sdk-buildinfo'

const sdk = AccelByte.SDK({
  coreConfig: {
    baseURL: '__AGS_DOMAIN__',
    clientId: '__IAM_CLIENT_ID__',
    namespace: '__NAMESPACE__',
    redirectURI: '__IAM_CLIENT_REDIRECT_URI__'
  }
})

UploaderV1AdminApi(sdk, { axiosConfig: { request: { headers: { Authorization: 'Bearer {access_token}' } } } })
  .createCommitbuildmanifest(data: {
             BuildManifest
    })

// return Promise
```

## POST /buildinfo/admin/namespaces/{namespace}/diff/calculate/bulk

```
import { AccelByte } from '@accelbyte/sdk'
import { CachingAdminApi } from '@accelbyte/sdk-buildinfo'

const sdk = AccelByte.SDK({
  coreConfig: {
    baseURL: '__AGS_DOMAIN__',
    clientId: '__IAM_CLIENT_ID__',
    namespace: '__NAMESPACE__',
    redirectURI: '__IAM_CLIENT_REDIRECT_URI__'
  }
})

CachingAdminApi(sdk, { axiosConfig: { request: { headers: { Authorization: 'Bearer {access_token}' } } } })
  .createDiffCalculateBulk(data: {
             BulkCalculateDiffCacheRequest
    })

// return Promise
```

## DELETE /buildinfo/admin/namespaces/{namespace}/v2/builds/{buildId}

```
import { AccelByte } from '@accelbyte/sdk'
import { UploaderV2AdminApi } from '@accelbyte/sdk-buildinfo'

const sdk = AccelByte.SDK({
  coreConfig: {
    baseURL: '__AGS_DOMAIN__',
    clientId: '__IAM_CLIENT_ID__',
    namespace: '__NAMESPACE__',
    redirectURI: '__IAM_CLIENT_REDIRECT_URI__'
  }
})

UploaderV2AdminApi(sdk, { axiosConfig: { request: { headers: { Authorization: 'Bearer {access_token}' } } } })
  .deleteBuild_ByBuildId_v2(buildId:string)

// return Promise
```

## GET /buildinfo/admin/namespaces/{namespace}/v2/builds/{buildId}

```
import { AccelByte } from '@accelbyte/sdk'
import { UploaderV2AdminApi } from '@accelbyte/sdk-buildinfo'

const sdk = AccelByte.SDK({
  coreConfig: {
    baseURL: '__AGS_DOMAIN__',
    clientId: '__IAM_CLIENT_ID__',
    namespace: '__NAMESPACE__',
    redirectURI: '__IAM_CLIENT_REDIRECT_URI__'
  }
})

UploaderV2AdminApi(sdk, { axiosConfig: { request: { headers: { Authorization: 'Bearer {access_token}' } } } })
  .getBuild_ByBuildId_v2(buildId:string)

// return Promise<BuildManifest>
```

## PATCH /buildinfo/admin/namespaces/{namespace}/v2/builds/{buildId}

```
import { AccelByte } from '@accelbyte/sdk'
import { UploaderV2AdminApi } from '@accelbyte/sdk-buildinfo'

const sdk = AccelByte.SDK({
  coreConfig: {
    baseURL: '__AGS_DOMAIN__',
    clientId: '__IAM_CLIENT_ID__',
    namespace: '__NAMESPACE__',
    redirectURI: '__IAM_CLIENT_REDIRECT_URI__'
  }
})

UploaderV2AdminApi(sdk, { axiosConfig: { request: { headers: { Authorization: 'Bearer {access_token}' } } } })
  .patchBuild_ByBuildId_v2(buildId:string, data: {
             UpdateBuildMetadataRequest
    })

// return Promise
```

## POST /buildinfo/admin/namespaces/{namespace}/v2/startbuildupload

```
import { AccelByte } from '@accelbyte/sdk'
import { UploaderV2AdminApi } from '@accelbyte/sdk-buildinfo'

const sdk = AccelByte.SDK({
  coreConfig: {
    baseURL: '__AGS_DOMAIN__',
    clientId: '__IAM_CLIENT_ID__',
    namespace: '__NAMESPACE__',
    redirectURI: '__IAM_CLIENT_REDIRECT_URI__'
  }
})

UploaderV2AdminApi(sdk, { axiosConfig: { request: { headers: { Authorization: 'Bearer {access_token}' } } } })
  .createStartbuildupload_v2(data: {
             UploadBuildManifest
    })

// return Promise<BuildManifest>
```

## POST /buildinfo/admin/namespaces/{namespace}/v3/startbuildupload

```
import { AccelByte } from '@accelbyte/sdk'
import { UploaderV3AdminApi } from '@accelbyte/sdk-buildinfo'

const sdk = AccelByte.SDK({
  coreConfig: {
    baseURL: '__AGS_DOMAIN__',
    clientId: '__IAM_CLIENT_ID__',
    namespace: '__NAMESPACE__',
    redirectURI: '__IAM_CLIENT_REDIRECT_URI__'
  }
})

UploaderV3AdminApi(sdk, { axiosConfig: { request: { headers: { Authorization: 'Bearer {access_token}' } } } })
  .createStartbuildupload_v3(data: {
             UploadBuildManifest
    })

// return Promise<DifferentialBuildManifest>
```

## POST /buildinfo/v2/admin/namespaces/{namespace}/blocks/multipart

```
import { AccelByte } from '@accelbyte/sdk'
import { MultipartUploaderAdminApi } from '@accelbyte/sdk-buildinfo'

const sdk = AccelByte.SDK({
  coreConfig: {
    baseURL: '__AGS_DOMAIN__',
    clientId: '__IAM_CLIENT_ID__',
    namespace: '__NAMESPACE__',
    redirectURI: '__IAM_CLIENT_REDIRECT_URI__'
  }
})

MultipartUploaderAdminApi(sdk, { axiosConfig: { request: { headers: { Authorization: 'Bearer {access_token}' } } } })
  .createBlockMultipart_v2(data: {
             StartMultipartUploadRequest
    })

// return Promise<MultipartUploadSummary>
```

## GET /buildinfo/admin/namespaces/{namespace}/cleanerConfigurations

```
import { AccelByte } from '@accelbyte/sdk'
import { UtilityAdminApi } from '@accelbyte/sdk-buildinfo'

const sdk = AccelByte.SDK({
  coreConfig: {
    baseURL: '__AGS_DOMAIN__',
    clientId: '__IAM_CLIENT_ID__',
    namespace: '__NAMESPACE__',
    redirectURI: '__IAM_CLIENT_REDIRECT_URI__'
  }
})

UtilityAdminApi(sdk, { axiosConfig: { request: { headers: { Authorization: 'Bearer {access_token}' } } } })
  .getCleanerConfigurations()

// return Promise<CleanerConfigObject>
```

## GET /buildinfo/admin/namespaces/{namespace}/v2/difftrigger/status

```
import { AccelByte } from '@accelbyte/sdk'
import { UploaderV2AdminApi } from '@accelbyte/sdk-buildinfo'

const sdk = AccelByte.SDK({
  coreConfig: {
    baseURL: '__AGS_DOMAIN__',
    clientId: '__IAM_CLIENT_ID__',
    namespace: '__NAMESPACE__',
    redirectURI: '__IAM_CLIENT_REDIRECT_URI__'
  }
})

UploaderV2AdminApi(sdk, { axiosConfig: { request: { headers: { Authorization: 'Bearer {access_token}' } } } })
  .getDifftriggerStatus_v2()

// return Promise
```

## GET /buildinfo/admin/namespaces/{namespace}/buildsdeletion/byAppId

```
import { AccelByte } from '@accelbyte/sdk'
import { UploaderV1AdminApi } from '@accelbyte/sdk-buildinfo'

const sdk = AccelByte.SDK({
  coreConfig: {
    baseURL: '__AGS_DOMAIN__',
    clientId: '__IAM_CLIENT_ID__',
    namespace: '__NAMESPACE__',
    redirectURI: '__IAM_CLIENT_REDIRECT_URI__'
  }
})

UploaderV1AdminApi(sdk, { axiosConfig: { request: { headers: { Authorization: 'Bearer {access_token}' } } } })
  .getBuildsdeletionByAppId( queryParams: {
             appId: string | null,
             deletionStatus?: number,
             platformId?: string | null
    })

// return Promise<BuildDeletionDataArray>
```

## POST /buildinfo/admin/namespaces/{namespace}/v2/commitbuildmanifest

```
import { AccelByte } from '@accelbyte/sdk'
import { UploaderV2AdminApi } from '@accelbyte/sdk-buildinfo'

const sdk = AccelByte.SDK({
  coreConfig: {
    baseURL: '__AGS_DOMAIN__',
    clientId: '__IAM_CLIENT_ID__',
    namespace: '__NAMESPACE__',
    redirectURI: '__IAM_CLIENT_REDIRECT_URI__'
  }
})

UploaderV2AdminApi(sdk, { axiosConfig: { request: { headers: { Authorization: 'Bearer {access_token}' } } } })
  .createCommitbuildmanifest_v2(data: {
             BuildManifest
    })

// return Promise
```

## POST /buildinfo/admin/namespaces/{namespace}/v2/startdlcbuildupload

```
import { AccelByte } from '@accelbyte/sdk'
import { UploaderV2AdminApi } from '@accelbyte/sdk-buildinfo'

const sdk = AccelByte.SDK({
  coreConfig: {
    baseURL: '__AGS_DOMAIN__',
    clientId: '__IAM_CLIENT_ID__',
    namespace: '__NAMESPACE__',
    redirectURI: '__IAM_CLIENT_REDIRECT_URI__'
  }
})

UploaderV2AdminApi(sdk, { axiosConfig: { request: { headers: { Authorization: 'Bearer {access_token}' } } } })
  .createStartdlcbuildupload_v2(data: {
             UploadBuildManifest
    })

// return Promise<BuildManifest>
```

## DELETE /buildinfo/admin/namespaces/{namespace}/blocks/multipart/{hash}

```
import { AccelByte } from '@accelbyte/sdk'
import { MultipartUploaderAdminApi } from '@accelbyte/sdk-buildinfo'

const sdk = AccelByte.SDK({
  coreConfig: {
    baseURL: '__AGS_DOMAIN__',
    clientId: '__IAM_CLIENT_ID__',
    namespace: '__NAMESPACE__',
    redirectURI: '__IAM_CLIENT_REDIRECT_URI__'
  }
})

MultipartUploaderAdminApi(sdk, { axiosConfig: { request: { headers: { Authorization: 'Bearer {access_token}' } } } })
  .deleteBlockMultipart_ByHash(hash:string)

// return Promise<BlockManifest>
```

## PATCH /buildinfo/admin/namespaces/{namespace}/blocks/multipart/{hash}

```
import { AccelByte } from '@accelbyte/sdk'
import { MultipartUploaderAdminApi } from '@accelbyte/sdk-buildinfo'

const sdk = AccelByte.SDK({
  coreConfig: {
    baseURL: '__AGS_DOMAIN__',
    clientId: '__IAM_CLIENT_ID__',
    namespace: '__NAMESPACE__',
    redirectURI: '__IAM_CLIENT_REDIRECT_URI__'
  }
})

MultipartUploaderAdminApi(sdk, { axiosConfig: { request: { headers: { Authorization: 'Bearer {access_token}' } } } })
  .patchBlockMultipart_ByHash(hash:string, data: {
             CommitMultipartUploadRequest
    })

// return Promise<BlockManifest>
```

## PUT /buildinfo/admin/namespaces/{namespace}/setcurrentbuild/{buildId}

```
import { AccelByte } from '@accelbyte/sdk'
import { UploaderV1AdminApi } from '@accelbyte/sdk-buildinfo'

const sdk = AccelByte.SDK({
  coreConfig: {
    baseURL: '__AGS_DOMAIN__',
    clientId: '__IAM_CLIENT_ID__',
    namespace: '__NAMESPACE__',
    redirectURI: '__IAM_CLIENT_REDIRECT_URI__'
  }
})

UploaderV1AdminApi(sdk, { axiosConfig: { request: { headers: { Authorization: 'Bearer {access_token}' } } } })
  .updateSetcurrentbuild_ByBuildId(buildId:string,  queryParams?: {
             sendNotification?: boolean | null
    })

// return Promise
```

## POST /buildinfo/admin/namespaces/{namespace}/v2/commitdlcbuildmanifest

```
import { AccelByte } from '@accelbyte/sdk'
import { UploaderV2AdminApi } from '@accelbyte/sdk-buildinfo'

const sdk = AccelByte.SDK({
  coreConfig: {
    baseURL: '__AGS_DOMAIN__',
    clientId: '__IAM_CLIENT_ID__',
    namespace: '__NAMESPACE__',
    redirectURI: '__IAM_CLIENT_REDIRECT_URI__'
  }
})

UploaderV2AdminApi(sdk, { axiosConfig: { request: { headers: { Authorization: 'Bearer {access_token}' } } } })
  .createCommitdlcbuildmanifest_v2(data: {
             BuildManifest
    })

// return Promise
```

## GET /buildinfo/admin/namespaces/{namespace}/retrievechunkbyhash/{hash}

```
import { AccelByte } from '@accelbyte/sdk'
import { UploaderV1AdminApi } from '@accelbyte/sdk-buildinfo'

const sdk = AccelByte.SDK({
  coreConfig: {
    baseURL: '__AGS_DOMAIN__',
    clientId: '__IAM_CLIENT_ID__',
    namespace: '__NAMESPACE__',
    redirectURI: '__IAM_CLIENT_REDIRECT_URI__'
  }
})

UploaderV1AdminApi(sdk, { axiosConfig: { request: { headers: { Authorization: 'Bearer {access_token}' } } } })
  .getRetrievechunkbyhash_ByHash(hash:string)

// return Promise<BlockData>
```

## DELETE /buildinfo/v2/admin/namespaces/{namespace}/blocks/multipart/{hash}

```
import { AccelByte } from '@accelbyte/sdk'
import { MultipartUploaderAdminApi } from '@accelbyte/sdk-buildinfo'

const sdk = AccelByte.SDK({
  coreConfig: {
    baseURL: '__AGS_DOMAIN__',
    clientId: '__IAM_CLIENT_ID__',
    namespace: '__NAMESPACE__',
    redirectURI: '__IAM_CLIENT_REDIRECT_URI__'
  }
})

MultipartUploaderAdminApi(sdk, { axiosConfig: { request: { headers: { Authorization: 'Bearer {access_token}' } } } })
  .deleteBlockMultipart_ByHash_v2(hash:string)

// return Promise<BlockManifest>
```

## PATCH /buildinfo/v2/admin/namespaces/{namespace}/blocks/multipart/{hash}

```
import { AccelByte } from '@accelbyte/sdk'
import { MultipartUploaderAdminApi } from '@accelbyte/sdk-buildinfo'

const sdk = AccelByte.SDK({
  coreConfig: {
    baseURL: '__AGS_DOMAIN__',
    clientId: '__IAM_CLIENT_ID__',
    namespace: '__NAMESPACE__',
    redirectURI: '__IAM_CLIENT_REDIRECT_URI__'
  }
})

MultipartUploaderAdminApi(sdk, { axiosConfig: { request: { headers: { Authorization: 'Bearer {access_token}' } } } })
  .patchBlockMultipart_ByHash_v2(hash:string)

// return Promise<BlockManifest>
```

## POST /buildinfo/admin/namespaces/{namespace}/builds/{buildId}/blocks/urls

```
import { AccelByte } from '@accelbyte/sdk'
import { DownloaderAdminApi } from '@accelbyte/sdk-buildinfo'

const sdk = AccelByte.SDK({
  coreConfig: {
    baseURL: '__AGS_DOMAIN__',
    clientId: '__IAM_CLIENT_ID__',
    namespace: '__NAMESPACE__',
    redirectURI: '__IAM_CLIENT_REDIRECT_URI__'
  }
})

DownloaderAdminApi(sdk, { axiosConfig: { request: { headers: { Authorization: 'Bearer {access_token}' } } } })
  .createBlockUrl_ByBuildId(buildId:string, data: {
             BlockDownloadUrlsRequest
    })

// return Promise<BlockDownloadUrls>
```

## PUT /buildinfo/admin/namespaces/{namespace}/builddeletion/{buildId}/retry

```
import { AccelByte } from '@accelbyte/sdk'
import { UploaderV1AdminApi } from '@accelbyte/sdk-buildinfo'

const sdk = AccelByte.SDK({
  coreConfig: {
    baseURL: '__AGS_DOMAIN__',
    clientId: '__IAM_CLIENT_ID__',
    namespace: '__NAMESPACE__',
    redirectURI: '__IAM_CLIENT_REDIRECT_URI__'
  }
})

UploaderV1AdminApi(sdk, { axiosConfig: { request: { headers: { Authorization: 'Bearer {access_token}' } } } })
  .updateRetry_ByBuildId(buildId:string)

// return Promise
```

## PATCH /buildinfo/admin/namespaces/{namespace}/v2/difftrigger/status/{value}

```
import { AccelByte } from '@accelbyte/sdk'
import { UploaderV2AdminApi } from '@accelbyte/sdk-buildinfo'

const sdk = AccelByte.SDK({
  coreConfig: {
    baseURL: '__AGS_DOMAIN__',
    clientId: '__IAM_CLIENT_ID__',
    namespace: '__NAMESPACE__',
    redirectURI: '__IAM_CLIENT_REDIRECT_URI__'
  }
})

UploaderV2AdminApi(sdk, { axiosConfig: { request: { headers: { Authorization: 'Bearer {access_token}' } } } })
  .patchDifftriggerStatu_ByValue_v2(value:string)

// return Promise
```

## DELETE /buildinfo/admin/namespaces/{namespace}/builddeletion/{buildId}/cancel

```
import { AccelByte } from '@accelbyte/sdk'
import { UploaderV1AdminApi } from '@accelbyte/sdk-buildinfo'

const sdk = AccelByte.SDK({
  coreConfig: {
    baseURL: '__AGS_DOMAIN__',
    clientId: '__IAM_CLIENT_ID__',
    namespace: '__NAMESPACE__',
    redirectURI: '__IAM_CLIENT_REDIRECT_URI__'
  }
})

UploaderV1AdminApi(sdk, { axiosConfig: { request: { headers: { Authorization: 'Bearer {access_token}' } } } })
  .deleteCancel_ByBuildId(buildId:string)

// return Promise
```

## POST /buildinfo/admin/namespaces/{namespace}/v2/startfileupload/{uploaderId}

```
import { AccelByte } from '@accelbyte/sdk'
import { UploaderV2AdminApi } from '@accelbyte/sdk-buildinfo'

const sdk = AccelByte.SDK({
  coreConfig: {
    baseURL: '__AGS_DOMAIN__',
    clientId: '__IAM_CLIENT_ID__',
    namespace: '__NAMESPACE__',
    redirectURI: '__IAM_CLIENT_REDIRECT_URI__'
  }
})

UploaderV2AdminApi(sdk, { axiosConfig: { request: { headers: { Authorization: 'Bearer {access_token}' } } } })
  .createStartfileupload_ByUploaderId_v2(uploaderId:string, data: {
             BinaryUpload
    })

// return Promise<UploadSummary>
```

## GET /buildinfo/admin/namespaces/{namespace}/v3/current/{appId}/{platformId}

```
import { AccelByte } from '@accelbyte/sdk'
import { UploaderV3AdminApi } from '@accelbyte/sdk-buildinfo'

const sdk = AccelByte.SDK({
  coreConfig: {
    baseURL: '__AGS_DOMAIN__',
    clientId: '__IAM_CLIENT_ID__',
    namespace: '__NAMESPACE__',
    redirectURI: '__IAM_CLIENT_REDIRECT_URI__'
  }
})

UploaderV3AdminApi(sdk, { axiosConfig: { request: { headers: { Authorization: 'Bearer {access_token}' } } } })
  .getCurrent_ByAppId_ByPlatformId_v3(appId:string, platformId:string)

// return Promise<BuildManifest>
```

## POST /buildinfo/admin/namespaces/{namespace}/v3/startfileupload/{uploaderId}

```
import { AccelByte } from '@accelbyte/sdk'
import { UploaderV3AdminApi } from '@accelbyte/sdk-buildinfo'

const sdk = AccelByte.SDK({
  coreConfig: {
    baseURL: '__AGS_DOMAIN__',
    clientId: '__IAM_CLIENT_ID__',
    namespace: '__NAMESPACE__',
    redirectURI: '__IAM_CLIENT_REDIRECT_URI__'
  }
})

UploaderV3AdminApi(sdk, { axiosConfig: { request: { headers: { Authorization: 'Bearer {access_token}' } } } })
  .createStartfileupload_ByUploaderId_v3(uploaderId:string, data: {
             BinaryUpload
    })

// return Promise<UploadSummary>
```

## POST /buildinfo/v2/admin/namespaces/{namespace}/blocks/multipart/{hash}/part

```
import { AccelByte } from '@accelbyte/sdk'
import { MultipartUploaderAdminApi } from '@accelbyte/sdk-buildinfo'

const sdk = AccelByte.SDK({
  coreConfig: {
    baseURL: '__AGS_DOMAIN__',
    clientId: '__IAM_CLIENT_ID__',
    namespace: '__NAMESPACE__',
    redirectURI: '__IAM_CLIENT_REDIRECT_URI__'
  }
})

MultipartUploaderAdminApi(sdk, { axiosConfig: { request: { headers: { Authorization: 'Bearer {access_token}' } } } })
  .createPartBlock_ByHash_v2(hash:string, data: {
             MultipartUploadedPart
    })

// return Promise<MultipartUploadSummary>
```

## PATCH /buildinfo/admin/namespaces/{namespace}/releasenote/upload/commit/{hash}

```
import { AccelByte } from '@accelbyte/sdk'
import { ReleaseNoteAdminApi } from '@accelbyte/sdk-buildinfo'

const sdk = AccelByte.SDK({
  coreConfig: {
    baseURL: '__AGS_DOMAIN__',
    clientId: '__IAM_CLIENT_ID__',
    namespace: '__NAMESPACE__',
    redirectURI: '__IAM_CLIENT_REDIRECT_URI__'
  }
})

ReleaseNoteAdminApi(sdk, { axiosConfig: { request: { headers: { Authorization: 'Bearer {access_token}' } } } })
  .patchReleasenoteUploadCommit_ByHash(hash:string)

// return Promise<BlockManifest>
```

## PUT /buildinfo/admin/namespaces/{namespace}/setcurrentbuild/{appId}/{version}

```
import { AccelByte } from '@accelbyte/sdk'
import { UploaderV1AdminApi } from '@accelbyte/sdk-buildinfo'

const sdk = AccelByte.SDK({
  coreConfig: {
    baseURL: '__AGS_DOMAIN__',
    clientId: '__IAM_CLIENT_ID__',
    namespace: '__NAMESPACE__',
    redirectURI: '__IAM_CLIENT_REDIRECT_URI__'
  }
})

UploaderV1AdminApi(sdk, { axiosConfig: { request: { headers: { Authorization: 'Bearer {access_token}' } } } })
  .updateSetcurrentbuild_ByAppId_ByVersion(appId:string, version:string)

// return Promise
```

## POST /buildinfo/admin/namespaces/{namespace}/startbuildupload/{appId}/{version}

```
import { AccelByte } from '@accelbyte/sdk'
import { UploaderV1AdminApi } from '@accelbyte/sdk-buildinfo'

const sdk = AccelByte.SDK({
  coreConfig: {
    baseURL: '__AGS_DOMAIN__',
    clientId: '__IAM_CLIENT_ID__',
    namespace: '__NAMESPACE__',
    redirectURI: '__IAM_CLIENT_REDIRECT_URI__'
  }
})

UploaderV1AdminApi(sdk, { axiosConfig: { request: { headers: { Authorization: 'Bearer {access_token}' } } } })
  .createStartbuildupload_ByAppId_ByVersion(appId:string, version:string)

// return Promise<BuildIdManifest>
```

## POST /buildinfo/admin/namespaces/{namespace}/v2/startzsyncfileupload/{fileHash}

```
import { AccelByte } from '@accelbyte/sdk'
import { UploaderV2AdminApi } from '@accelbyte/sdk-buildinfo'

const sdk = AccelByte.SDK({
  coreConfig: {
    baseURL: '__AGS_DOMAIN__',
    clientId: '__IAM_CLIENT_ID__',
    namespace: '__NAMESPACE__',
    redirectURI: '__IAM_CLIENT_REDIRECT_URI__'
  }
})

UploaderV2AdminApi(sdk, { axiosConfig: { request: { headers: { Authorization: 'Bearer {access_token}' } } } })
  .createStartzsyncfileupload_ByFileHash_v2(fileHash:string, data: {
             BinaryUpload
    })

// return Promise<UploadSummary>
```

## POST /buildinfo/admin/namespaces/{namespace}/v3/startzsyncfileupload/{fileHash}

```
import { AccelByte } from '@accelbyte/sdk'
import { UploaderV3AdminApi } from '@accelbyte/sdk-buildinfo'

const sdk = AccelByte.SDK({
  coreConfig: {
    baseURL: '__AGS_DOMAIN__',
    clientId: '__IAM_CLIENT_ID__',
    namespace: '__NAMESPACE__',
    redirectURI: '__IAM_CLIENT_REDIRECT_URI__'
  }
})

UploaderV3AdminApi(sdk, { axiosConfig: { request: { headers: { Authorization: 'Bearer {access_token}' } } } })
  .createStartzsyncfileupload_ByFileHash_v3(fileHash:string, data: {
             ZsyncDiffRequest
    })

// return Promise<UploadSummary>
```

## GET /buildinfo/admin/namespaces/{namespace}/v3/uploadmode/{appId}/{platformId}

```
import { AccelByte } from '@accelbyte/sdk'
import { UploaderV3AdminApi } from '@accelbyte/sdk-buildinfo'

const sdk = AccelByte.SDK({
  coreConfig: {
    baseURL: '__AGS_DOMAIN__',
    clientId: '__IAM_CLIENT_ID__',
    namespace: '__NAMESPACE__',
    redirectURI: '__IAM_CLIENT_REDIRECT_URI__'
  }
})

UploaderV3AdminApi(sdk, { axiosConfig: { request: { headers: { Authorization: 'Bearer {access_token}' } } } })
  .getUploadmode_ByAppId_ByPlatformId_v3(appId:string, platformId:string)

// return Promise<UploadModeCheck>
```

## POST /buildinfo/admin/namespaces/{namespace}/v2/startbuildupload/{sourceBuildId}

```
import { AccelByte } from '@accelbyte/sdk'
import { UploaderV2AdminApi } from '@accelbyte/sdk-buildinfo'

const sdk = AccelByte.SDK({
  coreConfig: {
    baseURL: '__AGS_DOMAIN__',
    clientId: '__IAM_CLIENT_ID__',
    namespace: '__NAMESPACE__',
    redirectURI: '__IAM_CLIENT_REDIRECT_URI__'
  }
})

UploaderV2AdminApi(sdk, { axiosConfig: { request: { headers: { Authorization: 'Bearer {access_token}' } } } })
  .createStartbuildupload_BySourceBuildId_v2(sourceBuildId:string, data: {
             UploadBuildManifest
    })

// return Promise<BuildManifest>
```

## POST /buildinfo/admin/namespaces/{namespace}/v3/startbuildupload/{sourceBuildId}

```
import { AccelByte } from '@accelbyte/sdk'
import { UploaderV3AdminApi } from '@accelbyte/sdk-buildinfo'

const sdk = AccelByte.SDK({
  coreConfig: {
    baseURL: '__AGS_DOMAIN__',
    clientId: '__IAM_CLIENT_ID__',
    namespace: '__NAMESPACE__',
    redirectURI: '__IAM_CLIENT_REDIRECT_URI__'
  }
})

UploaderV3AdminApi(sdk, { axiosConfig: { request: { headers: { Authorization: 'Bearer {access_token}' } } } })
  .createStartbuildupload_BySourceBuildId_v3(sourceBuildId:string, data: {
             UploadBuildManifest
    })

// return Promise<DifferentialBuildManifest>
```

## PATCH /buildinfo/admin/namespaces/{namespace}/v2/commitfileupload/{buildId}/{hash}

```
import { AccelByte } from '@accelbyte/sdk'
import { UploaderV2AdminApi } from '@accelbyte/sdk-buildinfo'

const sdk = AccelByte.SDK({
  coreConfig: {
    baseURL: '__AGS_DOMAIN__',
    clientId: '__IAM_CLIENT_ID__',
    namespace: '__NAMESPACE__',
    redirectURI: '__IAM_CLIENT_REDIRECT_URI__'
  }
})

UploaderV2AdminApi(sdk, { axiosConfig: { request: { headers: { Authorization: 'Bearer {access_token}' } } } })
  .patchCommitfileupload_ByBuildId_ByHash_v2(buildId:string, hash:string)

// return Promise<BlockManifest>
```

## PATCH /buildinfo/admin/namespaces/{namespace}/v3/commitfileupload/{buildId}/{hash}

```
import { AccelByte } from '@accelbyte/sdk'
import { UploaderV3AdminApi } from '@accelbyte/sdk-buildinfo'

const sdk = AccelByte.SDK({
  coreConfig: {
    baseURL: '__AGS_DOMAIN__',
    clientId: '__IAM_CLIENT_ID__',
    namespace: '__NAMESPACE__',
    redirectURI: '__IAM_CLIENT_REDIRECT_URI__'
  }
})

UploaderV3AdminApi(sdk, { axiosConfig: { request: { headers: { Authorization: 'Bearer {access_token}' } } } })
  .patchCommitfileupload_ByBuildId_ByHash_v3(buildId:string, hash:string)

// return Promise<BlockManifest>
```

## POST /buildinfo/admin/namespaces/{namespace}/releasenote/upload/start/{uploaderId}

```
import { AccelByte } from '@accelbyte/sdk'
import { ReleaseNoteAdminApi } from '@accelbyte/sdk-buildinfo'

const sdk = AccelByte.SDK({
  coreConfig: {
    baseURL: '__AGS_DOMAIN__',
    clientId: '__IAM_CLIENT_ID__',
    namespace: '__NAMESPACE__',
    redirectURI: '__IAM_CLIENT_REDIRECT_URI__'
  }
})

ReleaseNoteAdminApi(sdk, { axiosConfig: { request: { headers: { Authorization: 'Bearer {access_token}' } } } })
  .createReleasenoteUploadStart_ByUploaderId(uploaderId:string, data: {
             BinaryUpload
    })

// return Promise<BlockManifest>
```

## POST /buildinfo/admin/namespaces/{namespace}/releasenote/manifest/save/{uploadMode}

```
import { AccelByte } from '@accelbyte/sdk'
import { ReleaseNoteAdminApi } from '@accelbyte/sdk-buildinfo'

const sdk = AccelByte.SDK({
  coreConfig: {
    baseURL: '__AGS_DOMAIN__',
    clientId: '__IAM_CLIENT_ID__',
    namespace: '__NAMESPACE__',
    redirectURI: '__IAM_CLIENT_REDIRECT_URI__'
  }
})

ReleaseNoteAdminApi(sdk, { axiosConfig: { request: { headers: { Authorization: 'Bearer {access_token}' } } } })
  .createReleasenoteManifestSave_ByUploadMode(uploadMode:string, data: {
             ReleaseNoteManifest
    })

// return Promise
```

## POST /buildinfo/admin/namespaces/{namespace}/v2/startdlcbuildupload/{sourceBuildId}

```
import { AccelByte } from '@accelbyte/sdk'
import { UploaderV2AdminApi } from '@accelbyte/sdk-buildinfo'

const sdk = AccelByte.SDK({
  coreConfig: {
    baseURL: '__AGS_DOMAIN__',
    clientId: '__IAM_CLIENT_ID__',
    namespace: '__NAMESPACE__',
    redirectURI: '__IAM_CLIENT_REDIRECT_URI__'
  }
})

UploaderV2AdminApi(sdk, { axiosConfig: { request: { headers: { Authorization: 'Bearer {access_token}' } } } })
  .createStartdlcbuildupload_BySourceBuildId_v2(sourceBuildId:string, data: {
             UploadBuildManifest
    })

// return Promise<BuildManifest>
```

## POST /buildinfo/admin/namespaces/{namespace}/v3/commitbuildmanifest/{sourceBuildId}

```
import { AccelByte } from '@accelbyte/sdk'
import { UploaderV3AdminApi } from '@accelbyte/sdk-buildinfo'

const sdk = AccelByte.SDK({
  coreConfig: {
    baseURL: '__AGS_DOMAIN__',
    clientId: '__IAM_CLIENT_ID__',
    namespace: '__NAMESPACE__',
    redirectURI: '__IAM_CLIENT_REDIRECT_URI__'
  }
})

UploaderV3AdminApi(sdk, { axiosConfig: { request: { headers: { Authorization: 'Bearer {access_token}' } } } })
  .createCommitbuildmanifest_BySourceBuildId_v3(sourceBuildId:string, data: {
             BuildManifest
    })

// return Promise
```

## PATCH /buildinfo/admin/namespaces/{namespace}/v3/commitmissingbytesfileupload/{hash}

```
import { AccelByte } from '@accelbyte/sdk'
import { UploaderV3AdminApi } from '@accelbyte/sdk-buildinfo'

const sdk = AccelByte.SDK({
  coreConfig: {
    baseURL: '__AGS_DOMAIN__',
    clientId: '__IAM_CLIENT_ID__',
    namespace: '__NAMESPACE__',
    redirectURI: '__IAM_CLIENT_REDIRECT_URI__'
  }
})

UploaderV3AdminApi(sdk, { axiosConfig: { request: { headers: { Authorization: 'Bearer {access_token}' } } } })
  .patchCommitmissingbytesfileupload_ByHash_v3(hash:string, data: {
             DiffPatchRequest
    })

// return Promise<BlockManifest>
```

## POST /buildinfo/admin/namespaces/{namespace}/commitchunkupload/{hash}/{uuid}/{offset}

```
import { AccelByte } from '@accelbyte/sdk'
import { UploaderV1AdminApi } from '@accelbyte/sdk-buildinfo'

const sdk = AccelByte.SDK({
  coreConfig: {
    baseURL: '__AGS_DOMAIN__',
    clientId: '__IAM_CLIENT_ID__',
    namespace: '__NAMESPACE__',
    redirectURI: '__IAM_CLIENT_REDIRECT_URI__'
  }
})

UploaderV1AdminApi(sdk, { axiosConfig: { request: { headers: { Authorization: 'Bearer {access_token}' } } } })
  .createUuid_ByHash_ByUuid_ByOffset(hash:string, uuid:string, offset:number)

// return Promise<BlockManifest>
```

## PATCH /buildinfo/admin/namespaces/{namespace}/v2/commitzsyncfileupload/{buildId}/{hash}

```
import { AccelByte } from '@accelbyte/sdk'
import { UploaderV2AdminApi } from '@accelbyte/sdk-buildinfo'

const sdk = AccelByte.SDK({
  coreConfig: {
    baseURL: '__AGS_DOMAIN__',
    clientId: '__IAM_CLIENT_ID__',
    namespace: '__NAMESPACE__',
    redirectURI: '__IAM_CLIENT_REDIRECT_URI__'
  }
})

UploaderV2AdminApi(sdk, { axiosConfig: { request: { headers: { Authorization: 'Bearer {access_token}' } } } })
  .patchCommitzsyncfileupload_ByBuildId_ByHash_v2(buildId:string, hash:string)

// return Promise<BlockManifest>
```

## PATCH /buildinfo/admin/namespaces/{namespace}/v3/commitzsyncfileupload/{buildId}/{hash}

```
import { AccelByte } from '@accelbyte/sdk'
import { UploaderV3AdminApi } from '@accelbyte/sdk-buildinfo'

const sdk = AccelByte.SDK({
  coreConfig: {
    baseURL: '__AGS_DOMAIN__',
    clientId: '__IAM_CLIENT_ID__',
    namespace: '__NAMESPACE__',
    redirectURI: '__IAM_CLIENT_REDIRECT_URI__'
  }
})

UploaderV3AdminApi(sdk, { axiosConfig: { request: { headers: { Authorization: 'Bearer {access_token}' } } } })
  .patchCommitzsyncfileupload_ByBuildId_ByHash_v3(buildId:string, hash:string, data: {
             DiffPatchRequest
    })

// return Promise<BlockManifest>
```

## GET /buildinfo/admin/namespaces/{namespace}/releasenote/manifest/get/{appId}/{platformId}

```
import { AccelByte } from '@accelbyte/sdk'
import { ReleaseNoteAdminApi } from '@accelbyte/sdk-buildinfo'

const sdk = AccelByte.SDK({
  coreConfig: {
    baseURL: '__AGS_DOMAIN__',
    clientId: '__IAM_CLIENT_ID__',
    namespace: '__NAMESPACE__',
    redirectURI: '__IAM_CLIENT_REDIRECT_URI__'
  }
})

ReleaseNoteAdminApi(sdk, { axiosConfig: { request: { headers: { Authorization: 'Bearer {access_token}' } } } })
  .getReleasenoteManifestGet_ByAppId_ByPlatformId(appId:string, platformId:string,  queryParams?: {
             version?: string | null
    })

// return Promise<ReleaseNoteDto>
```

## PUT /buildinfo/admin/namespaces/{namespace}/v2/setcurrentbuild/{appId}/{version}/{platformId}

```
import { AccelByte } from '@accelbyte/sdk'
import { UploaderV2AdminApi } from '@accelbyte/sdk-buildinfo'

const sdk = AccelByte.SDK({
  coreConfig: {
    baseURL: '__AGS_DOMAIN__',
    clientId: '__IAM_CLIENT_ID__',
    namespace: '__NAMESPACE__',
    redirectURI: '__IAM_CLIENT_REDIRECT_URI__'
  }
})

UploaderV2AdminApi(sdk, { axiosConfig: { request: { headers: { Authorization: 'Bearer {access_token}' } } } })
  .updateVersion_ByAppId_ByVersion_ByPlatformId_v2(appId:string, version:string, platformId:string)

// return Promise
```

## PUT /buildinfo/admin/namespaces/{namespace}/v3/setcurrentbuild/{appId}/{version}/{platformId}

```
import { AccelByte } from '@accelbyte/sdk'
import { UploaderV3AdminApi } from '@accelbyte/sdk-buildinfo'

const sdk = AccelByte.SDK({
  coreConfig: {
    baseURL: '__AGS_DOMAIN__',
    clientId: '__IAM_CLIENT_ID__',
    namespace: '__NAMESPACE__',
    redirectURI: '__IAM_CLIENT_REDIRECT_URI__'
  }
})

UploaderV3AdminApi(sdk, { axiosConfig: { request: { headers: { Authorization: 'Bearer {access_token}' } } } })
  .updateVersion_ByAppId_ByVersion_ByPlatformId_v3(appId:string, version:string, platformId:string)

// return Promise
```

## POST /buildinfo/admin/namespaces/{namespace}/v2/diff/start/{sourceBuildId}/{destinationBuildId}

```
import { AccelByte } from '@accelbyte/sdk'
import { UploaderV2AdminApi } from '@accelbyte/sdk-buildinfo'

const sdk = AccelByte.SDK({
  coreConfig: {
    baseURL: '__AGS_DOMAIN__',
    clientId: '__IAM_CLIENT_ID__',
    namespace: '__NAMESPACE__',
    redirectURI: '__IAM_CLIENT_REDIRECT_URI__'
  }
})

UploaderV2AdminApi(sdk, { axiosConfig: { request: { headers: { Authorization: 'Bearer {access_token}' } } } })
  .createDiffStart_BySourceBuildId_ByDestinationBuildId_v2(sourceBuildId:string, destinationBuildId:string)

// return Promise<UploadSummary>
```

## PATCH /buildinfo/admin/namespaces/{namespace}/v2/diff/commit/{sourceBuildId}/{destinationBuildId}

```
import { AccelByte } from '@accelbyte/sdk'
import { UploaderV2AdminApi } from '@accelbyte/sdk-buildinfo'

const sdk = AccelByte.SDK({
  coreConfig: {
    baseURL: '__AGS_DOMAIN__',
    clientId: '__IAM_CLIENT_ID__',
    namespace: '__NAMESPACE__',
    redirectURI: '__IAM_CLIENT_REDIRECT_URI__'
  }
})

UploaderV2AdminApi(sdk, { axiosConfig: { request: { headers: { Authorization: 'Bearer {access_token}' } } } })
  .patchDiffCommit_BySourceBuildId_ByDestinationBuildId_v2(sourceBuildId:string, destinationBuildId:string)

// return Promise
```

## POST /buildinfo/admin/namespaces/{namespace}/commitchunkupload/{hash}/{uuid}/{offset}/{blockSize}

```
import { AccelByte } from '@accelbyte/sdk'
import { UploaderV1AdminApi } from '@accelbyte/sdk-buildinfo'

const sdk = AccelByte.SDK({
  coreConfig: {
    baseURL: '__AGS_DOMAIN__',
    clientId: '__IAM_CLIENT_ID__',
    namespace: '__NAMESPACE__',
    redirectURI: '__IAM_CLIENT_REDIRECT_URI__'
  }
})

UploaderV1AdminApi(sdk, { axiosConfig: { request: { headers: { Authorization: 'Bearer {access_token}' } } } })
  .createOffset_ByHash_ByUuid_ByOffset_ByBlockSize(hash:string, uuid:string, offset:number, blockSize:number)

// return Promise<BlockManifest>
```

## PATCH /buildinfo/admin/namespaces/{namespace}/v2/commitzsyncfileupload/{buildId}/{hash}/{blockSize}

```
import { AccelByte } from '@accelbyte/sdk'
import { UploaderV2AdminApi } from '@accelbyte/sdk-buildinfo'

const sdk = AccelByte.SDK({
  coreConfig: {
    baseURL: '__AGS_DOMAIN__',
    clientId: '__IAM_CLIENT_ID__',
    namespace: '__NAMESPACE__',
    redirectURI: '__IAM_CLIENT_REDIRECT_URI__'
  }
})

UploaderV2AdminApi(sdk, { axiosConfig: { request: { headers: { Authorization: 'Bearer {access_token}' } } } })
  .patchHash_ByBuildId_ByHash_ByBlockSize_v2(buildId:string, hash:string, blockSize:number)

// return Promise<BlockManifest>
```

## PATCH /buildinfo/admin/namespaces/{namespace}/v3/commitzsyncfileupload/{buildId}/{hash}/{blockSize}

```
import { AccelByte } from '@accelbyte/sdk'
import { UploaderV3AdminApi } from '@accelbyte/sdk-buildinfo'

const sdk = AccelByte.SDK({
  coreConfig: {
    baseURL: '__AGS_DOMAIN__',
    clientId: '__IAM_CLIENT_ID__',
    namespace: '__NAMESPACE__',
    redirectURI: '__IAM_CLIENT_REDIRECT_URI__'
  }
})

UploaderV3AdminApi(sdk, { axiosConfig: { request: { headers: { Authorization: 'Bearer {access_token}' } } } })
  .patchHash_ByBuildId_ByHash_ByBlockSize_v3(buildId:string, hash:string, blockSize:number, data: {
             DiffPatchRequest
    })

// return Promise<BlockManifest>
```

## POST /buildinfo/admin/namespaces/{namespace}/v2/diff/signedurl/{sourceBuildId}/{destinationBuildId}

```
import { AccelByte } from '@accelbyte/sdk'
import { UploaderV2AdminApi } from '@accelbyte/sdk-buildinfo'

const sdk = AccelByte.SDK({
  coreConfig: {
    baseURL: '__AGS_DOMAIN__',
    clientId: '__IAM_CLIENT_ID__',
    namespace: '__NAMESPACE__',
    redirectURI: '__IAM_CLIENT_REDIRECT_URI__'
  }
})

UploaderV2AdminApi(sdk, { axiosConfig: { request: { headers: { Authorization: 'Bearer {access_token}' } } } })
  .createDiffSignedurl_BySourceBuildId_ByDestinationBuildId_v2(sourceBuildId:string, destinationBuildId:string)

// return Promise<UploadSummary>
```

## GET /buildinfo/admin/namespaces/{namespace}/v3/diff/status/{sourceBuildId}/{destinationBuildId}/{destinationFilePath}

```
import { AccelByte } from '@accelbyte/sdk'
import { UploaderV3AdminApi } from '@accelbyte/sdk-buildinfo'

const sdk = AccelByte.SDK({
  coreConfig: {
    baseURL: '__AGS_DOMAIN__',
    clientId: '__IAM_CLIENT_ID__',
    namespace: '__NAMESPACE__',
    redirectURI: '__IAM_CLIENT_REDIRECT_URI__'
  }
})

UploaderV3AdminApi(sdk, { axiosConfig: { request: { headers: { Authorization: 'Bearer {access_token}' } } } })
  .getDestinationBuildIdDiff_BySourceBuildId_ByDestinationBuildId_ByDestinationFilePath_v3(sourceBuildId:string, destinationBuildId:string, destinationFilePath:string)

// return Promise<FileDiffingStatus>
```