## GET /seasonpass/public/namespaces/{namespace}/seasons/current

```
import { AccelByte } from '@accelbyte/sdk'
import { SeasonApi } from '@accelbyte/sdk-seasonpass'

const sdk = AccelByte.SDK({
  coreConfig: {
    baseURL: '__AGS_DOMAIN__',
    clientId: '__IAM_CLIENT_ID__',
    namespace: '__NAMESPACE__',
    redirectURI: '__IAM_CLIENT_REDIRECT_URI__'
  }
})

SeasonApi(sdk)
  .getSeasonsCurrent( queryParams?: {
             language?: string | null
    })

// return Promise<LocalizedSeasonInfo>
```

## GET /seasonpass/public/namespaces/{namespace}/users/{userId}/seasons/current/data

```
import { AccelByte } from '@accelbyte/sdk'
import { SeasonApi } from '@accelbyte/sdk-seasonpass'

const sdk = AccelByte.SDK({
  coreConfig: {
    baseURL: '__AGS_DOMAIN__',
    clientId: '__IAM_CLIENT_ID__',
    namespace: '__NAMESPACE__',
    redirectURI: '__IAM_CLIENT_REDIRECT_URI__'
  }
})

SeasonApi(sdk, { axiosConfig: { request: { headers: { Authorization: 'Bearer {access_token}' } } } })
  .getSeasonsCurrentData_ByUserId(userId:string)

// return Promise<ClaimableUserSeasonInfo>
```

## GET /seasonpass/public/namespaces/{namespace}/users/{userId}/seasons/{seasonId}/data

```
import { AccelByte } from '@accelbyte/sdk'
import { SeasonApi } from '@accelbyte/sdk-seasonpass'

const sdk = AccelByte.SDK({
  coreConfig: {
    baseURL: '__AGS_DOMAIN__',
    clientId: '__IAM_CLIENT_ID__',
    namespace: '__NAMESPACE__',
    redirectURI: '__IAM_CLIENT_REDIRECT_URI__'
  }
})

SeasonApi(sdk, { axiosConfig: { request: { headers: { Authorization: 'Bearer {access_token}' } } } })
  .getData_ByUserId_BySeasonId(userId:string, seasonId:string)

// return Promise<ClaimableUserSeasonInfo>
```

## POST /seasonpass/public/namespaces/{namespace}/users/{userId}/seasons/current/rewards

```
import { AccelByte } from '@accelbyte/sdk'
import { RewardApi } from '@accelbyte/sdk-seasonpass'

const sdk = AccelByte.SDK({
  coreConfig: {
    baseURL: '__AGS_DOMAIN__',
    clientId: '__IAM_CLIENT_ID__',
    namespace: '__NAMESPACE__',
    redirectURI: '__IAM_CLIENT_REDIRECT_URI__'
  }
})

RewardApi(sdk, { axiosConfig: { request: { headers: { Authorization: 'Bearer {access_token}' } } } })
  .createSeasonCurrentReward_ByUserId(userId:string, data: {
             UserRewardClaim
    })

// return Promise<ClaimableRewards>
```

## POST /seasonpass/public/namespaces/{namespace}/users/{userId}/seasons/current/rewards/bulk

```
import { AccelByte } from '@accelbyte/sdk'
import { RewardApi } from '@accelbyte/sdk-seasonpass'

const sdk = AccelByte.SDK({
  coreConfig: {
    baseURL: '__AGS_DOMAIN__',
    clientId: '__IAM_CLIENT_ID__',
    namespace: '__NAMESPACE__',
    redirectURI: '__IAM_CLIENT_REDIRECT_URI__'
  }
})

RewardApi(sdk, { axiosConfig: { request: { headers: { Authorization: 'Bearer {access_token}' } } } })
  .createSeasonCurrentRewardBulk_ByUserId(userId:string)

// return Promise<ClaimableRewards>
```

## GET /seasonpass/admin/namespace/{namespace}/export

```
import { AccelByte } from '@accelbyte/sdk'
import { ExportAdminApi } from '@accelbyte/sdk-seasonpass'

const sdk = AccelByte.SDK({
  coreConfig: {
    baseURL: '__AGS_DOMAIN__',
    clientId: '__IAM_CLIENT_ID__',
    namespace: '__NAMESPACE__',
    redirectURI: '__IAM_CLIENT_REDIRECT_URI__'
  }
})

ExportAdminApi(sdk, { axiosConfig: { request: { headers: { Authorization: 'Bearer {access_token}' } } } })
  .getExport()

// return Promise
```

## GET /seasonpass/admin/namespaces/{namespace}/seasons

```
import { AccelByte } from '@accelbyte/sdk'
import { SeasonAdminApi } from '@accelbyte/sdk-seasonpass'

const sdk = AccelByte.SDK({
  coreConfig: {
    baseURL: '__AGS_DOMAIN__',
    clientId: '__IAM_CLIENT_ID__',
    namespace: '__NAMESPACE__',
    redirectURI: '__IAM_CLIENT_REDIRECT_URI__'
  }
})

SeasonAdminApi(sdk, { axiosConfig: { request: { headers: { Authorization: 'Bearer {access_token}' } } } })
  .getSeasons( queryParams?: {
             limit?: number,
             offset?: number,
             status?: string[]
    })

// return Promise<ListSeasonInfoPagingSlicedResult>
```

## POST /seasonpass/admin/namespaces/{namespace}/seasons

```
import { AccelByte } from '@accelbyte/sdk'
import { SeasonAdminApi } from '@accelbyte/sdk-seasonpass'

const sdk = AccelByte.SDK({
  coreConfig: {
    baseURL: '__AGS_DOMAIN__',
    clientId: '__IAM_CLIENT_ID__',
    namespace: '__NAMESPACE__',
    redirectURI: '__IAM_CLIENT_REDIRECT_URI__'
  }
})

SeasonAdminApi(sdk, { axiosConfig: { request: { headers: { Authorization: 'Bearer {access_token}' } } } })
  .createSeason(data: {
             SeasonCreate
    })

// return Promise<SeasonInfo>
```

## GET /seasonpass/admin/namespaces/{namespace}/seasons/current

```
import { AccelByte } from '@accelbyte/sdk'
import { SeasonAdminApi } from '@accelbyte/sdk-seasonpass'

const sdk = AccelByte.SDK({
  coreConfig: {
    baseURL: '__AGS_DOMAIN__',
    clientId: '__IAM_CLIENT_ID__',
    namespace: '__NAMESPACE__',
    redirectURI: '__IAM_CLIENT_REDIRECT_URI__'
  }
})

SeasonAdminApi(sdk, { axiosConfig: { request: { headers: { Authorization: 'Bearer {access_token}' } } } })
  .getSeasonsCurrent()

// return Promise<SeasonSummary>
```

## DELETE /seasonpass/admin/namespaces/{namespace}/seasons/{seasonId}

```
import { AccelByte } from '@accelbyte/sdk'
import { SeasonAdminApi } from '@accelbyte/sdk-seasonpass'

const sdk = AccelByte.SDK({
  coreConfig: {
    baseURL: '__AGS_DOMAIN__',
    clientId: '__IAM_CLIENT_ID__',
    namespace: '__NAMESPACE__',
    redirectURI: '__IAM_CLIENT_REDIRECT_URI__'
  }
})

SeasonAdminApi(sdk, { axiosConfig: { request: { headers: { Authorization: 'Bearer {access_token}' } } } })
  .deleteSeason_BySeasonId(seasonId:string)

// return Promise
```

## GET /seasonpass/admin/namespaces/{namespace}/seasons/{seasonId}

```
import { AccelByte } from '@accelbyte/sdk'
import { SeasonAdminApi } from '@accelbyte/sdk-seasonpass'

const sdk = AccelByte.SDK({
  coreConfig: {
    baseURL: '__AGS_DOMAIN__',
    clientId: '__IAM_CLIENT_ID__',
    namespace: '__NAMESPACE__',
    redirectURI: '__IAM_CLIENT_REDIRECT_URI__'
  }
})

SeasonAdminApi(sdk, { axiosConfig: { request: { headers: { Authorization: 'Bearer {access_token}' } } } })
  .getSeason_BySeasonId(seasonId:string)

// return Promise<SeasonInfo>
```

## PATCH /seasonpass/admin/namespaces/{namespace}/seasons/{seasonId}

```
import { AccelByte } from '@accelbyte/sdk'
import { SeasonAdminApi } from '@accelbyte/sdk-seasonpass'

const sdk = AccelByte.SDK({
  coreConfig: {
    baseURL: '__AGS_DOMAIN__',
    clientId: '__IAM_CLIENT_ID__',
    namespace: '__NAMESPACE__',
    redirectURI: '__IAM_CLIENT_REDIRECT_URI__'
  }
})

SeasonAdminApi(sdk, { axiosConfig: { request: { headers: { Authorization: 'Bearer {access_token}' } } } })
  .patchSeason_BySeasonId(seasonId:string, data: {
             SeasonUpdate
    })

// return Promise<SeasonInfo>
```

## GET /seasonpass/admin/namespaces/{namespace}/users/{userId}/seasons

```
import { AccelByte } from '@accelbyte/sdk'
import { SeasonAdminApi } from '@accelbyte/sdk-seasonpass'

const sdk = AccelByte.SDK({
  coreConfig: {
    baseURL: '__AGS_DOMAIN__',
    clientId: '__IAM_CLIENT_ID__',
    namespace: '__NAMESPACE__',
    redirectURI: '__IAM_CLIENT_REDIRECT_URI__'
  }
})

SeasonAdminApi(sdk, { axiosConfig: { request: { headers: { Authorization: 'Bearer {access_token}' } } } })
  .getSeasons_ByUserId(userId:string,  queryParams?: {
             limit?: number,
             offset?: number
    })

// return Promise<ListUserSeasonInfoPagingSlicedResult>
```

## GET /seasonpass/admin/namespaces/{namespace}/seasons/{seasonId}/full

```
import { AccelByte } from '@accelbyte/sdk'
import { SeasonAdminApi } from '@accelbyte/sdk-seasonpass'

const sdk = AccelByte.SDK({
  coreConfig: {
    baseURL: '__AGS_DOMAIN__',
    clientId: '__IAM_CLIENT_ID__',
    namespace: '__NAMESPACE__',
    redirectURI: '__IAM_CLIENT_REDIRECT_URI__'
  }
})

SeasonAdminApi(sdk, { axiosConfig: { request: { headers: { Authorization: 'Bearer {access_token}' } } } })
  .getFull_BySeasonId(seasonId:string)

// return Promise<FullSeasonInfo>
```

## POST /seasonpass/admin/namespaces/{namespace}/seasons/{seasonId}/clone

```
import { AccelByte } from '@accelbyte/sdk'
import { SeasonAdminApi } from '@accelbyte/sdk-seasonpass'

const sdk = AccelByte.SDK({
  coreConfig: {
    baseURL: '__AGS_DOMAIN__',
    clientId: '__IAM_CLIENT_ID__',
    namespace: '__NAMESPACE__',
    redirectURI: '__IAM_CLIENT_REDIRECT_URI__'
  }
})

SeasonAdminApi(sdk, { axiosConfig: { request: { headers: { Authorization: 'Bearer {access_token}' } } } })
  .createClone_BySeasonId(seasonId:string, data: {
             SeasonCloneRequest
    })

// return Promise<SeasonInfo>
```

## GET /seasonpass/admin/namespaces/{namespace}/seasons/{seasonId}/tiers

```
import { AccelByte } from '@accelbyte/sdk'
import { TierAdminApi } from '@accelbyte/sdk-seasonpass'

const sdk = AccelByte.SDK({
  coreConfig: {
    baseURL: '__AGS_DOMAIN__',
    clientId: '__IAM_CLIENT_ID__',
    namespace: '__NAMESPACE__',
    redirectURI: '__IAM_CLIENT_REDIRECT_URI__'
  }
})

TierAdminApi(sdk, { axiosConfig: { request: { headers: { Authorization: 'Bearer {access_token}' } } } })
  .getTiers_BySeasonId(seasonId:string,  queryParams?: {
             limit?: number,
             offset?: number
    })

// return Promise<TierPagingSlicedResult>
```

## POST /seasonpass/admin/namespaces/{namespace}/seasons/{seasonId}/tiers

```
import { AccelByte } from '@accelbyte/sdk'
import { TierAdminApi } from '@accelbyte/sdk-seasonpass'

const sdk = AccelByte.SDK({
  coreConfig: {
    baseURL: '__AGS_DOMAIN__',
    clientId: '__IAM_CLIENT_ID__',
    namespace: '__NAMESPACE__',
    redirectURI: '__IAM_CLIENT_REDIRECT_URI__'
  }
})

TierAdminApi(sdk, { axiosConfig: { request: { headers: { Authorization: 'Bearer {access_token}' } } } })
  .createTier_BySeasonId(seasonId:string, data: {
             TierCreate
    })

// return Promise<TierArray>
```

## GET /seasonpass/admin/namespaces/{namespace}/seasons/{seasonId}/passes

```
import { AccelByte } from '@accelbyte/sdk'
import { PassAdminApi } from '@accelbyte/sdk-seasonpass'

const sdk = AccelByte.SDK({
  coreConfig: {
    baseURL: '__AGS_DOMAIN__',
    clientId: '__IAM_CLIENT_ID__',
    namespace: '__NAMESPACE__',
    redirectURI: '__IAM_CLIENT_REDIRECT_URI__'
  }
})

PassAdminApi(sdk, { axiosConfig: { request: { headers: { Authorization: 'Bearer {access_token}' } } } })
  .getPasses_BySeasonId(seasonId:string)

// return Promise<PassInfoArray>
```

## POST /seasonpass/admin/namespaces/{namespace}/seasons/{seasonId}/passes

```
import { AccelByte } from '@accelbyte/sdk'
import { PassAdminApi } from '@accelbyte/sdk-seasonpass'

const sdk = AccelByte.SDK({
  coreConfig: {
    baseURL: '__AGS_DOMAIN__',
    clientId: '__IAM_CLIENT_ID__',
    namespace: '__NAMESPACE__',
    redirectURI: '__IAM_CLIENT_REDIRECT_URI__'
  }
})

PassAdminApi(sdk, { axiosConfig: { request: { headers: { Authorization: 'Bearer {access_token}' } } } })
  .createPasse_BySeasonId(seasonId:string, data: {
             PassCreate
    })

// return Promise<PassInfo>
```

## PUT /seasonpass/admin/namespaces/{namespace}/seasons/{seasonId}/retire

```
import { AccelByte } from '@accelbyte/sdk'
import { SeasonAdminApi } from '@accelbyte/sdk-seasonpass'

const sdk = AccelByte.SDK({
  coreConfig: {
    baseURL: '__AGS_DOMAIN__',
    clientId: '__IAM_CLIENT_ID__',
    namespace: '__NAMESPACE__',
    redirectURI: '__IAM_CLIENT_REDIRECT_URI__'
  }
})

SeasonAdminApi(sdk, { axiosConfig: { request: { headers: { Authorization: 'Bearer {access_token}' } } } })
  .updateRetire_BySeasonId(seasonId:string,  queryParams?: {
             force?: boolean | null
    })

// return Promise<SeasonInfo>
```

## PUT /seasonpass/admin/namespaces/{namespace}/seasons/{seasonId}/publish

```
import { AccelByte } from '@accelbyte/sdk'
import { SeasonAdminApi } from '@accelbyte/sdk-seasonpass'

const sdk = AccelByte.SDK({
  coreConfig: {
    baseURL: '__AGS_DOMAIN__',
    clientId: '__IAM_CLIENT_ID__',
    namespace: '__NAMESPACE__',
    redirectURI: '__IAM_CLIENT_REDIRECT_URI__'
  }
})

SeasonAdminApi(sdk, { axiosConfig: { request: { headers: { Authorization: 'Bearer {access_token}' } } } })
  .updatePublish_BySeasonId(seasonId:string)

// return Promise<SeasonInfo>
```

## GET /seasonpass/admin/namespaces/{namespace}/seasons/{seasonId}/rewards

```
import { AccelByte } from '@accelbyte/sdk'
import { RewardAdminApi } from '@accelbyte/sdk-seasonpass'

const sdk = AccelByte.SDK({
  coreConfig: {
    baseURL: '__AGS_DOMAIN__',
    clientId: '__IAM_CLIENT_ID__',
    namespace: '__NAMESPACE__',
    redirectURI: '__IAM_CLIENT_REDIRECT_URI__'
  }
})

RewardAdminApi(sdk, { axiosConfig: { request: { headers: { Authorization: 'Bearer {access_token}' } } } })
  .getRewards_BySeasonId(seasonId:string,  queryParams?: {
             q?: string | null
    })

// return Promise<RewardInfoArray>
```

## POST /seasonpass/admin/namespaces/{namespace}/seasons/{seasonId}/rewards

```
import { AccelByte } from '@accelbyte/sdk'
import { RewardAdminApi } from '@accelbyte/sdk-seasonpass'

const sdk = AccelByte.SDK({
  coreConfig: {
    baseURL: '__AGS_DOMAIN__',
    clientId: '__IAM_CLIENT_ID__',
    namespace: '__NAMESPACE__',
    redirectURI: '__IAM_CLIENT_REDIRECT_URI__'
  }
})

RewardAdminApi(sdk, { axiosConfig: { request: { headers: { Authorization: 'Bearer {access_token}' } } } })
  .createReward_BySeasonId(seasonId:string, data: {
             RewardCreate
    })

// return Promise<RewardInfo>
```

## PUT /seasonpass/admin/namespaces/{namespace}/seasons/{seasonId}/unpublish

```
import { AccelByte } from '@accelbyte/sdk'
import { SeasonAdminApi } from '@accelbyte/sdk-seasonpass'

const sdk = AccelByte.SDK({
  coreConfig: {
    baseURL: '__AGS_DOMAIN__',
    clientId: '__IAM_CLIENT_ID__',
    namespace: '__NAMESPACE__',
    redirectURI: '__IAM_CLIENT_REDIRECT_URI__'
  }
})

SeasonAdminApi(sdk, { axiosConfig: { request: { headers: { Authorization: 'Bearer {access_token}' } } } })
  .updateUnpublish_BySeasonId(seasonId:string,  queryParams?: {
             force?: boolean | null
    })

// return Promise<SeasonInfo>
```

## DELETE /seasonpass/admin/namespaces/{namespace}/seasons/{seasonId}/tiers/{id}

```
import { AccelByte } from '@accelbyte/sdk'
import { TierAdminApi } from '@accelbyte/sdk-seasonpass'

const sdk = AccelByte.SDK({
  coreConfig: {
    baseURL: '__AGS_DOMAIN__',
    clientId: '__IAM_CLIENT_ID__',
    namespace: '__NAMESPACE__',
    redirectURI: '__IAM_CLIENT_REDIRECT_URI__'
  }
})

TierAdminApi(sdk, { axiosConfig: { request: { headers: { Authorization: 'Bearer {access_token}' } } } })
  .deleteTier_BySeasonId_ById(seasonId:string, id:string)

// return Promise
```

## PUT /seasonpass/admin/namespaces/{namespace}/seasons/{seasonId}/tiers/{id}

```
import { AccelByte } from '@accelbyte/sdk'
import { TierAdminApi } from '@accelbyte/sdk-seasonpass'

const sdk = AccelByte.SDK({
  coreConfig: {
    baseURL: '__AGS_DOMAIN__',
    clientId: '__IAM_CLIENT_ID__',
    namespace: '__NAMESPACE__',
    redirectURI: '__IAM_CLIENT_REDIRECT_URI__'
  }
})

TierAdminApi(sdk, { axiosConfig: { request: { headers: { Authorization: 'Bearer {access_token}' } } } })
  .updateTier_BySeasonId_ById(seasonId:string, id:string, data: {
             TierInput
    })

// return Promise<Tier>
```

## DELETE /seasonpass/admin/namespaces/{namespace}/seasons/{seasonId}/passes/{code}

```
import { AccelByte } from '@accelbyte/sdk'
import { PassAdminApi } from '@accelbyte/sdk-seasonpass'

const sdk = AccelByte.SDK({
  coreConfig: {
    baseURL: '__AGS_DOMAIN__',
    clientId: '__IAM_CLIENT_ID__',
    namespace: '__NAMESPACE__',
    redirectURI: '__IAM_CLIENT_REDIRECT_URI__'
  }
})

PassAdminApi(sdk, { axiosConfig: { request: { headers: { Authorization: 'Bearer {access_token}' } } } })
  .deletePasse_BySeasonId_ByCode(seasonId:string, code:string)

// return Promise
```

## GET /seasonpass/admin/namespaces/{namespace}/seasons/{seasonId}/passes/{code}

```
import { AccelByte } from '@accelbyte/sdk'
import { PassAdminApi } from '@accelbyte/sdk-seasonpass'

const sdk = AccelByte.SDK({
  coreConfig: {
    baseURL: '__AGS_DOMAIN__',
    clientId: '__IAM_CLIENT_ID__',
    namespace: '__NAMESPACE__',
    redirectURI: '__IAM_CLIENT_REDIRECT_URI__'
  }
})

PassAdminApi(sdk, { axiosConfig: { request: { headers: { Authorization: 'Bearer {access_token}' } } } })
  .getPasse_BySeasonId_ByCode(seasonId:string, code:string)

// return Promise<PassInfo>
```

## PATCH /seasonpass/admin/namespaces/{namespace}/seasons/{seasonId}/passes/{code}

```
import { AccelByte } from '@accelbyte/sdk'
import { PassAdminApi } from '@accelbyte/sdk-seasonpass'

const sdk = AccelByte.SDK({
  coreConfig: {
    baseURL: '__AGS_DOMAIN__',
    clientId: '__IAM_CLIENT_ID__',
    namespace: '__NAMESPACE__',
    redirectURI: '__IAM_CLIENT_REDIRECT_URI__'
  }
})

PassAdminApi(sdk, { axiosConfig: { request: { headers: { Authorization: 'Bearer {access_token}' } } } })
  .patchPasse_BySeasonId_ByCode(seasonId:string, code:string, data: {
             PassUpdate
    })

// return Promise<PassInfo>
```

## DELETE /seasonpass/admin/namespaces/{namespace}/seasons/{seasonId}/rewards/{code}

```
import { AccelByte } from '@accelbyte/sdk'
import { RewardAdminApi } from '@accelbyte/sdk-seasonpass'

const sdk = AccelByte.SDK({
  coreConfig: {
    baseURL: '__AGS_DOMAIN__',
    clientId: '__IAM_CLIENT_ID__',
    namespace: '__NAMESPACE__',
    redirectURI: '__IAM_CLIENT_REDIRECT_URI__'
  }
})

RewardAdminApi(sdk, { axiosConfig: { request: { headers: { Authorization: 'Bearer {access_token}' } } } })
  .deleteReward_BySeasonId_ByCode(seasonId:string, code:string)

// return Promise
```

## GET /seasonpass/admin/namespaces/{namespace}/seasons/{seasonId}/rewards/{code}

```
import { AccelByte } from '@accelbyte/sdk'
import { RewardAdminApi } from '@accelbyte/sdk-seasonpass'

const sdk = AccelByte.SDK({
  coreConfig: {
    baseURL: '__AGS_DOMAIN__',
    clientId: '__IAM_CLIENT_ID__',
    namespace: '__NAMESPACE__',
    redirectURI: '__IAM_CLIENT_REDIRECT_URI__'
  }
})

RewardAdminApi(sdk, { axiosConfig: { request: { headers: { Authorization: 'Bearer {access_token}' } } } })
  .getReward_BySeasonId_ByCode(seasonId:string, code:string)

// return Promise<RewardInfo>
```

## PATCH /seasonpass/admin/namespaces/{namespace}/seasons/{seasonId}/rewards/{code}

```
import { AccelByte } from '@accelbyte/sdk'
import { RewardAdminApi } from '@accelbyte/sdk-seasonpass'

const sdk = AccelByte.SDK({
  coreConfig: {
    baseURL: '__AGS_DOMAIN__',
    clientId: '__IAM_CLIENT_ID__',
    namespace: '__NAMESPACE__',
    redirectURI: '__IAM_CLIENT_REDIRECT_URI__'
  }
})

RewardAdminApi(sdk, { axiosConfig: { request: { headers: { Authorization: 'Bearer {access_token}' } } } })
  .patchReward_BySeasonId_ByCode(seasonId:string, code:string, data: {
             RewardUpdate
    })

// return Promise<RewardInfo>
```

## POST /seasonpass/admin/namespaces/{namespace}/users/{userId}/seasons/current/exp

```
import { AccelByte } from '@accelbyte/sdk'
import { TierAdminApi } from '@accelbyte/sdk-seasonpass'

const sdk = AccelByte.SDK({
  coreConfig: {
    baseURL: '__AGS_DOMAIN__',
    clientId: '__IAM_CLIENT_ID__',
    namespace: '__NAMESPACE__',
    redirectURI: '__IAM_CLIENT_REDIRECT_URI__'
  }
})

TierAdminApi(sdk, { axiosConfig: { request: { headers: { Authorization: 'Bearer {access_token}' } } } })
  .createSeasonCurrentExp_ByUserId(userId:string, data: {
             UserExpGrant
    })

// return Promise<UserSeasonSummary>
```

## GET /seasonpass/admin/namespaces/{namespace}/users/{userId}/seasons/exp/history

```
import { AccelByte } from '@accelbyte/sdk'
import { SeasonAdminApi } from '@accelbyte/sdk-seasonpass'

const sdk = AccelByte.SDK({
  coreConfig: {
    baseURL: '__AGS_DOMAIN__',
    clientId: '__IAM_CLIENT_ID__',
    namespace: '__NAMESPACE__',
    redirectURI: '__IAM_CLIENT_REDIRECT_URI__'
  }
})

SeasonAdminApi(sdk, { axiosConfig: { request: { headers: { Authorization: 'Bearer {access_token}' } } } })
  .getSeasonsExpHistory_ByUserId(userId:string,  queryParams?: {
             from?: string | null,
             limit?: number,
             offset?: number,
             seasonId?: string | null,
             source?: 'PAID_FOR' | 'SWEAT',
             tags?: string[],
             to?: string | null
    })

// return Promise<ExpGrantHistoryPagingSlicedResult>
```

## DELETE /seasonpass/admin/namespaces/{namespace}/users/{userId}/seasons/current/reset

```
import { AccelByte } from '@accelbyte/sdk'
import { SeasonAdminApi } from '@accelbyte/sdk-seasonpass'

const sdk = AccelByte.SDK({
  coreConfig: {
    baseURL: '__AGS_DOMAIN__',
    clientId: '__IAM_CLIENT_ID__',
    namespace: '__NAMESPACE__',
    redirectURI: '__IAM_CLIENT_REDIRECT_URI__'
  }
})

SeasonAdminApi(sdk, { axiosConfig: { request: { headers: { Authorization: 'Bearer {access_token}' } } } })
  .deleteSeasonCurrentReset_ByUserId(userId:string)

// return Promise
```

## POST /seasonpass/admin/namespaces/{namespace}/users/{userId}/seasons/current/tiers

```
import { AccelByte } from '@accelbyte/sdk'
import { TierAdminApi } from '@accelbyte/sdk-seasonpass'

const sdk = AccelByte.SDK({
  coreConfig: {
    baseURL: '__AGS_DOMAIN__',
    clientId: '__IAM_CLIENT_ID__',
    namespace: '__NAMESPACE__',
    redirectURI: '__IAM_CLIENT_REDIRECT_URI__'
  }
})

TierAdminApi(sdk, { axiosConfig: { request: { headers: { Authorization: 'Bearer {access_token}' } } } })
  .createSeasonCurrentTier_ByUserId(userId:string, data: {
             UserTierGrant
    })

// return Promise<UserSeasonSummary>
```

## PUT /seasonpass/admin/namespaces/{namespace}/seasons/{seasonId}/tiers/{id}/reorder

```
import { AccelByte } from '@accelbyte/sdk'
import { TierAdminApi } from '@accelbyte/sdk-seasonpass'

const sdk = AccelByte.SDK({
  coreConfig: {
    baseURL: '__AGS_DOMAIN__',
    clientId: '__IAM_CLIENT_ID__',
    namespace: '__NAMESPACE__',
    redirectURI: '__IAM_CLIENT_REDIRECT_URI__'
  }
})

TierAdminApi(sdk, { axiosConfig: { request: { headers: { Authorization: 'Bearer {access_token}' } } } })
  .updateReorder_BySeasonId_ById(seasonId:string, id:string, data: {
             TierReorder
    })

// return Promise<Tier>
```

## POST /seasonpass/admin/namespaces/{namespace}/users/{userId}/seasons/current/passes

```
import { AccelByte } from '@accelbyte/sdk'
import { PassAdminApi } from '@accelbyte/sdk-seasonpass'

const sdk = AccelByte.SDK({
  coreConfig: {
    baseURL: '__AGS_DOMAIN__',
    clientId: '__IAM_CLIENT_ID__',
    namespace: '__NAMESPACE__',
    redirectURI: '__IAM_CLIENT_REDIRECT_URI__'
  }
})

PassAdminApi(sdk, { axiosConfig: { request: { headers: { Authorization: 'Bearer {access_token}' } } } })
  .createSeasonCurrentPasse_ByUserId(userId:string, data: {
             UserPassGrant
    })

// return Promise<UserSeasonSummary>
```

## POST /seasonpass/admin/namespaces/{namespace}/seasons/current/users/bulk/progression

```
import { AccelByte } from '@accelbyte/sdk'
import { SeasonAdminApi } from '@accelbyte/sdk-seasonpass'

const sdk = AccelByte.SDK({
  coreConfig: {
    baseURL: '__AGS_DOMAIN__',
    clientId: '__IAM_CLIENT_ID__',
    namespace: '__NAMESPACE__',
    redirectURI: '__IAM_CLIENT_REDIRECT_URI__'
  }
})

SeasonAdminApi(sdk, { axiosConfig: { request: { headers: { Authorization: 'Bearer {access_token}' } } } })
  .createSeasonCurrentUserBulkProgression(data: {
             BulkUserProgressionRequest
    })

// return Promise<UserSeasonSummaryArray>
```

## GET /seasonpass/admin/namespaces/{namespace}/users/{userId}/seasons/{seasonId}/data

```
import { AccelByte } from '@accelbyte/sdk'
import { SeasonAdminApi } from '@accelbyte/sdk-seasonpass'

const sdk = AccelByte.SDK({
  coreConfig: {
    baseURL: '__AGS_DOMAIN__',
    clientId: '__IAM_CLIENT_ID__',
    namespace: '__NAMESPACE__',
    redirectURI: '__IAM_CLIENT_REDIRECT_URI__'
  }
})

SeasonAdminApi(sdk, { axiosConfig: { request: { headers: { Authorization: 'Bearer {access_token}' } } } })
  .getData_ByUserId_BySeasonId(userId:string, seasonId:string)

// return Promise<ClaimableUserSeasonInfo>
```

## GET /seasonpass/admin/namespaces/{namespace}/users/{userId}/seasons/exp/history/tags

```
import { AccelByte } from '@accelbyte/sdk'
import { SeasonAdminApi } from '@accelbyte/sdk-seasonpass'

const sdk = AccelByte.SDK({
  coreConfig: {
    baseURL: '__AGS_DOMAIN__',
    clientId: '__IAM_CLIENT_ID__',
    namespace: '__NAMESPACE__',
    redirectURI: '__IAM_CLIENT_REDIRECT_URI__'
  }
})

SeasonAdminApi(sdk, { axiosConfig: { request: { headers: { Authorization: 'Bearer {access_token}' } } } })
  .getSeasonsExpHistoryTags_ByUserId(userId:string,  queryParams?: {
             seasonId?: string | null
    })

// return Promise<ReasonTagsResult>
```

## GET /seasonpass/admin/namespaces/{namespace}/users/{userId}/seasons/current/progression

```
import { AccelByte } from '@accelbyte/sdk'
import { SeasonAdminApi } from '@accelbyte/sdk-seasonpass'

const sdk = AccelByte.SDK({
  coreConfig: {
    baseURL: '__AGS_DOMAIN__',
    clientId: '__IAM_CLIENT_ID__',
    namespace: '__NAMESPACE__',
    redirectURI: '__IAM_CLIENT_REDIRECT_URI__'
  }
})

SeasonAdminApi(sdk, { axiosConfig: { request: { headers: { Authorization: 'Bearer {access_token}' } } } })
  .getSeasonsCurrentProgression_ByUserId(userId:string)

// return Promise<UserSeasonSummary>
```

## POST /seasonpass/admin/namespaces/{namespace}/users/{userId}/seasons/current/purchasable

```
import { AccelByte } from '@accelbyte/sdk'
import { SeasonAdminApi } from '@accelbyte/sdk-seasonpass'

const sdk = AccelByte.SDK({
  coreConfig: {
    baseURL: '__AGS_DOMAIN__',
    clientId: '__IAM_CLIENT_ID__',
    namespace: '__NAMESPACE__',
    redirectURI: '__IAM_CLIENT_REDIRECT_URI__'
  }
})

SeasonAdminApi(sdk, { axiosConfig: { request: { headers: { Authorization: 'Bearer {access_token}' } } } })
  .createSeasonCurrentPurchasable_ByUserId(userId:string, data: {
             UserPurchasable
    })

// return Promise
```

## GET /seasonpass/admin/namespaces/{namespace}/users/{userId}/seasons/current/passes/ownership/any

```
import { AccelByte } from '@accelbyte/sdk'
import { SeasonAdminApi } from '@accelbyte/sdk-seasonpass'

const sdk = AccelByte.SDK({
  coreConfig: {
    baseURL: '__AGS_DOMAIN__',
    clientId: '__IAM_CLIENT_ID__',
    namespace: '__NAMESPACE__',
    redirectURI: '__IAM_CLIENT_REDIRECT_URI__'
  }
})

SeasonAdminApi(sdk, { axiosConfig: { request: { headers: { Authorization: 'Bearer {access_token}' } } } })
  .getSeasonsCurrentPassesOwnershipAny_ByUserId(userId:string,  queryParams?: {
             passCodes?: string[]
    })

// return Promise<Ownership>
```