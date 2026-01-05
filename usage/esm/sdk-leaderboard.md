## GET /leaderboard/v1/public/namespaces/{namespace}/leaderboards

```
import { AccelByte } from '@accelbyte/sdk'
import { LeaderboardConfigurationApi } from '@accelbyte/sdk-leaderboard'

const sdk = AccelByte.SDK({
  coreConfig: {
    baseURL: '__AGS_DOMAIN__',
    clientId: '__IAM_CLIENT_ID__',
    namespace: '__NAMESPACE__',
    redirectURI: '__IAM_CLIENT_REDIRECT_URI__'
  }
})

LeaderboardConfigurationApi(sdk, { axiosConfig: { request: { headers: { Authorization: 'Bearer {access_token}' } } } })
  .getLeaderboards( queryParams?: {
             isArchived?: boolean | null,
             isDeleted?: boolean | null,
             limit?: number,
             offset?: number
    })

// return Promise<GetAllLeaderboardConfigsPublicResp>
```

## POST /leaderboard/v1/public/namespaces/{namespace}/leaderboards

```
import { AccelByte } from '@accelbyte/sdk'
import { LeaderboardConfigurationApi } from '@accelbyte/sdk-leaderboard'

const sdk = AccelByte.SDK({
  coreConfig: {
    baseURL: '__AGS_DOMAIN__',
    clientId: '__IAM_CLIENT_ID__',
    namespace: '__NAMESPACE__',
    redirectURI: '__IAM_CLIENT_REDIRECT_URI__'
  }
})

LeaderboardConfigurationApi(sdk, { axiosConfig: { request: { headers: { Authorization: 'Bearer {access_token}' } } } })
  .createLeaderboard(data: {
             LeaderboardConfigReq
    })

// return Promise<LeaderboardConfigReq>
```

## GET /leaderboard/v2/public/namespaces/{namespace}/leaderboards

```
import { AccelByte } from '@accelbyte/sdk'
import { LeaderboardConfigurationApi } from '@accelbyte/sdk-leaderboard'

const sdk = AccelByte.SDK({
  coreConfig: {
    baseURL: '__AGS_DOMAIN__',
    clientId: '__IAM_CLIENT_ID__',
    namespace: '__NAMESPACE__',
    redirectURI: '__IAM_CLIENT_REDIRECT_URI__'
  }
})

LeaderboardConfigurationApi(sdk)
  .getLeaderboards_v2( queryParams?: {
             limit?: number,
             offset?: number
    })

// return Promise<GetAllLeaderboardConfigsPublicResp>
```

## GET /leaderboard/v3/public/namespaces/{namespace}/leaderboards

```
import { AccelByte } from '@accelbyte/sdk'
import { LeaderboardConfigurationV3Api } from '@accelbyte/sdk-leaderboard'

const sdk = AccelByte.SDK({
  coreConfig: {
    baseURL: '__AGS_DOMAIN__',
    clientId: '__IAM_CLIENT_ID__',
    namespace: '__NAMESPACE__',
    redirectURI: '__IAM_CLIENT_REDIRECT_URI__'
  }
})

LeaderboardConfigurationV3Api(sdk, { axiosConfig: { request: { headers: { Authorization: 'Bearer {access_token}' } } } })
  .getLeaderboards_v3( queryParams?: {
             isDeleted?: boolean | null,
             limit?: number,
             offset?: number
    })

// return Promise<GetAllLeaderboardConfigsPublicRespV3>
```

## GET /leaderboard/v3/public/namespaces/{namespace}/leaderboards/{leaderboardCode}

```
import { AccelByte } from '@accelbyte/sdk'
import { LeaderboardConfigurationV3Api } from '@accelbyte/sdk-leaderboard'

const sdk = AccelByte.SDK({
  coreConfig: {
    baseURL: '__AGS_DOMAIN__',
    clientId: '__IAM_CLIENT_ID__',
    namespace: '__NAMESPACE__',
    redirectURI: '__IAM_CLIENT_REDIRECT_URI__'
  }
})

LeaderboardConfigurationV3Api(sdk, { axiosConfig: { request: { headers: { Authorization: 'Bearer {access_token}' } } } })
  .getLeaderboard_ByLeaderboardCode_v3(leaderboardCode:string)

// return Promise<GetLeaderboardConfigPublicRespV3>
```

## GET /leaderboard/v1/public/namespaces/{namespace}/leaderboards/{leaderboardCode}/week

```
import { AccelByte } from '@accelbyte/sdk'
import { LeaderboardDataApi } from '@accelbyte/sdk-leaderboard'

const sdk = AccelByte.SDK({
  coreConfig: {
    baseURL: '__AGS_DOMAIN__',
    clientId: '__IAM_CLIENT_ID__',
    namespace: '__NAMESPACE__',
    redirectURI: '__IAM_CLIENT_REDIRECT_URI__'
  }
})

LeaderboardDataApi(sdk)
  .getWeek_ByLeaderboardCode(leaderboardCode:string,  queryParams?: {
             limit?: number,
             offset?: number,
             previousVersion?: number
    })

// return Promise<GetLeaderboardRankingResp>
```

## GET /leaderboard/v1/public/namespaces/{namespace}/leaderboards/{leaderboardCode}/month

```
import { AccelByte } from '@accelbyte/sdk'
import { LeaderboardDataApi } from '@accelbyte/sdk-leaderboard'

const sdk = AccelByte.SDK({
  coreConfig: {
    baseURL: '__AGS_DOMAIN__',
    clientId: '__IAM_CLIENT_ID__',
    namespace: '__NAMESPACE__',
    redirectURI: '__IAM_CLIENT_REDIRECT_URI__'
  }
})

LeaderboardDataApi(sdk)
  .getMonth_ByLeaderboardCode(leaderboardCode:string,  queryParams?: {
             limit?: number,
             offset?: number,
             previousVersion?: number
    })

// return Promise<GetLeaderboardRankingResp>
```

## GET /leaderboard/v1/public/namespaces/{namespace}/leaderboards/{leaderboardCode}/today

```
import { AccelByte } from '@accelbyte/sdk'
import { LeaderboardDataApi } from '@accelbyte/sdk-leaderboard'

const sdk = AccelByte.SDK({
  coreConfig: {
    baseURL: '__AGS_DOMAIN__',
    clientId: '__IAM_CLIENT_ID__',
    namespace: '__NAMESPACE__',
    redirectURI: '__IAM_CLIENT_REDIRECT_URI__'
  }
})

LeaderboardDataApi(sdk)
  .getToday_ByLeaderboardCode(leaderboardCode:string,  queryParams?: {
             limit?: number,
             offset?: number,
             previousVersion?: number
    })

// return Promise<GetLeaderboardRankingResp>
```

## GET /leaderboard/v1/public/namespaces/{namespace}/leaderboards/{leaderboardCode}/season

```
import { AccelByte } from '@accelbyte/sdk'
import { LeaderboardDataApi } from '@accelbyte/sdk-leaderboard'

const sdk = AccelByte.SDK({
  coreConfig: {
    baseURL: '__AGS_DOMAIN__',
    clientId: '__IAM_CLIENT_ID__',
    namespace: '__NAMESPACE__',
    redirectURI: '__IAM_CLIENT_REDIRECT_URI__'
  }
})

LeaderboardDataApi(sdk)
  .getSeason_ByLeaderboardCode(leaderboardCode:string,  queryParams?: {
             limit?: number,
             offset?: number,
             previousVersion?: number
    })

// return Promise<GetLeaderboardRankingResp>
```

## GET /leaderboard/v1/public/namespaces/{namespace}/leaderboards/{leaderboardCode}/alltime

```
import { AccelByte } from '@accelbyte/sdk'
import { LeaderboardDataApi } from '@accelbyte/sdk-leaderboard'

const sdk = AccelByte.SDK({
  coreConfig: {
    baseURL: '__AGS_DOMAIN__',
    clientId: '__IAM_CLIENT_ID__',
    namespace: '__NAMESPACE__',
    redirectURI: '__IAM_CLIENT_REDIRECT_URI__'
  }
})

LeaderboardDataApi(sdk)
  .getAlltime_ByLeaderboardCode(leaderboardCode:string,  queryParams?: {
             limit?: number,
             offset?: number
    })

// return Promise<GetLeaderboardRankingResp>
```

## GET /leaderboard/v2/public/namespaces/{namespace}/leaderboards/{leaderboardCode}/alltime

```
import { AccelByte } from '@accelbyte/sdk'
import { LeaderboardDataApi } from '@accelbyte/sdk-leaderboard'

const sdk = AccelByte.SDK({
  coreConfig: {
    baseURL: '__AGS_DOMAIN__',
    clientId: '__IAM_CLIENT_ID__',
    namespace: '__NAMESPACE__',
    redirectURI: '__IAM_CLIENT_REDIRECT_URI__'
  }
})

LeaderboardDataApi(sdk)
  .getAlltime_ByLeaderboardCode_v2(leaderboardCode:string,  queryParams?: {
             limit?: number,
             offset?: number
    })

// return Promise<GetPublicLeaderboardRankingResponse>
```

## GET /leaderboard/v3/public/namespaces/{namespace}/leaderboards/{leaderboardCode}/alltime

```
import { AccelByte } from '@accelbyte/sdk'
import { LeaderboardDataV3Api } from '@accelbyte/sdk-leaderboard'

const sdk = AccelByte.SDK({
  coreConfig: {
    baseURL: '__AGS_DOMAIN__',
    clientId: '__IAM_CLIENT_ID__',
    namespace: '__NAMESPACE__',
    redirectURI: '__IAM_CLIENT_REDIRECT_URI__'
  }
})

LeaderboardDataV3Api(sdk)
  .getAlltime_ByLeaderboardCode_v3(leaderboardCode:string,  queryParams?: {
             limit?: number,
             offset?: number
    })

// return Promise<GetLeaderboardRankingResp>
```

## GET /leaderboard/v1/public/namespaces/{namespace}/leaderboards/{leaderboardCode}/archived

```
import { AccelByte } from '@accelbyte/sdk'
import { LeaderboardDataApi } from '@accelbyte/sdk-leaderboard'

const sdk = AccelByte.SDK({
  coreConfig: {
    baseURL: '__AGS_DOMAIN__',
    clientId: '__IAM_CLIENT_ID__',
    namespace: '__NAMESPACE__',
    redirectURI: '__IAM_CLIENT_REDIRECT_URI__'
  }
})

LeaderboardDataApi(sdk, { axiosConfig: { request: { headers: { Authorization: 'Bearer {access_token}' } } } })
  .getArchived_ByLeaderboardCode(leaderboardCode:string,  queryParams: {
             leaderboardCodes: string | null,
             slug?: string | null
    })

// return Promise<ArchiveLeaderboardSignedUrlResponseArray>
```

## POST /leaderboard/v3/public/namespaces/{namespace}/leaderboards/{leaderboardCode}/users/bulk

```
import { AccelByte } from '@accelbyte/sdk'
import { LeaderboardDataV3Api } from '@accelbyte/sdk-leaderboard'

const sdk = AccelByte.SDK({
  coreConfig: {
    baseURL: '__AGS_DOMAIN__',
    clientId: '__IAM_CLIENT_ID__',
    namespace: '__NAMESPACE__',
    redirectURI: '__IAM_CLIENT_REDIRECT_URI__'
  }
})

LeaderboardDataV3Api(sdk, { axiosConfig: { request: { headers: { Authorization: 'Bearer {access_token}' } } } })
  .createUserBulk_ByLeaderboardCode_v3(leaderboardCode:string, data: {
             BulkUserIDsRequest
    })

// return Promise<BulkUserRankingResponseV3>
```

## DELETE /leaderboard/v1/public/namespaces/{namespace}/leaderboards/{leaderboardCode}/users/{userId}

```
import { AccelByte } from '@accelbyte/sdk'
import { LeaderboardDataApi } from '@accelbyte/sdk-leaderboard'

const sdk = AccelByte.SDK({
  coreConfig: {
    baseURL: '__AGS_DOMAIN__',
    clientId: '__IAM_CLIENT_ID__',
    namespace: '__NAMESPACE__',
    redirectURI: '__IAM_CLIENT_REDIRECT_URI__'
  }
})

LeaderboardDataApi(sdk, { axiosConfig: { request: { headers: { Authorization: 'Bearer {access_token}' } } } })
  .deleteUser_ByLeaderboardCode_ByUserId(leaderboardCode:string, userId:string)

// return Promise
```

## GET /leaderboard/v1/public/namespaces/{namespace}/leaderboards/{leaderboardCode}/users/{userId}

```
import { AccelByte } from '@accelbyte/sdk'
import { LeaderboardDataApi } from '@accelbyte/sdk-leaderboard'

const sdk = AccelByte.SDK({
  coreConfig: {
    baseURL: '__AGS_DOMAIN__',
    clientId: '__IAM_CLIENT_ID__',
    namespace: '__NAMESPACE__',
    redirectURI: '__IAM_CLIENT_REDIRECT_URI__'
  }
})

LeaderboardDataApi(sdk, { axiosConfig: { request: { headers: { Authorization: 'Bearer {access_token}' } } } })
  .getUser_ByLeaderboardCode_ByUserId(leaderboardCode:string, userId:string,  queryParams?: {
             previousVersion?: number
    })

// return Promise<UserRankingResponse>
```

## GET /leaderboard/v3/public/namespaces/{namespace}/leaderboards/{leaderboardCode}/users/{userId}

```
import { AccelByte } from '@accelbyte/sdk'
import { LeaderboardDataV3Api } from '@accelbyte/sdk-leaderboard'

const sdk = AccelByte.SDK({
  coreConfig: {
    baseURL: '__AGS_DOMAIN__',
    clientId: '__IAM_CLIENT_ID__',
    namespace: '__NAMESPACE__',
    redirectURI: '__IAM_CLIENT_REDIRECT_URI__'
  }
})

LeaderboardDataV3Api(sdk, { axiosConfig: { request: { headers: { Authorization: 'Bearer {access_token}' } } } })
  .getUser_ByLeaderboardCode_ByUserId_v3(leaderboardCode:string, userId:string)

// return Promise<UserRankingResponseV3>
```

## GET /leaderboard/v3/public/namespaces/{namespace}/leaderboards/{leaderboardCode}/cycles/{cycleId}

```
import { AccelByte } from '@accelbyte/sdk'
import { LeaderboardDataV3Api } from '@accelbyte/sdk-leaderboard'

const sdk = AccelByte.SDK({
  coreConfig: {
    baseURL: '__AGS_DOMAIN__',
    clientId: '__IAM_CLIENT_ID__',
    namespace: '__NAMESPACE__',
    redirectURI: '__IAM_CLIENT_REDIRECT_URI__'
  }
})

LeaderboardDataV3Api(sdk)
  .getCycle_ByLeaderboardCode_ByCycleId_v3(leaderboardCode:string, cycleId:string,  queryParams?: {
             limit?: number,
             offset?: number
    })

// return Promise<GetLeaderboardRankingResp>
```

## GET /leaderboard/v1/admin/namespaces/{namespace}/leaderboards

```
import { AccelByte } from '@accelbyte/sdk'
import { LeaderboardConfigurationAdminApi } from '@accelbyte/sdk-leaderboard'

const sdk = AccelByte.SDK({
  coreConfig: {
    baseURL: '__AGS_DOMAIN__',
    clientId: '__IAM_CLIENT_ID__',
    namespace: '__NAMESPACE__',
    redirectURI: '__IAM_CLIENT_REDIRECT_URI__'
  }
})

LeaderboardConfigurationAdminApi(sdk, { axiosConfig: { request: { headers: { Authorization: 'Bearer {access_token}' } } } })
  .getLeaderboards( queryParams?: {
             isArchived?: boolean | null,
             isDeleted?: boolean | null,
             limit?: number,
             offset?: number
    })

// return Promise<GetAllLeaderboardConfigsResp>
```

## POST /leaderboard/v1/admin/namespaces/{namespace}/leaderboards

```
import { AccelByte } from '@accelbyte/sdk'
import { LeaderboardConfigurationAdminApi } from '@accelbyte/sdk-leaderboard'

const sdk = AccelByte.SDK({
  coreConfig: {
    baseURL: '__AGS_DOMAIN__',
    clientId: '__IAM_CLIENT_ID__',
    namespace: '__NAMESPACE__',
    redirectURI: '__IAM_CLIENT_REDIRECT_URI__'
  }
})

LeaderboardConfigurationAdminApi(sdk, { axiosConfig: { request: { headers: { Authorization: 'Bearer {access_token}' } } } })
  .createLeaderboard(data: {
             LeaderboardConfigReq
    })

// return Promise<LeaderboardConfigReq>
```

## GET /leaderboard/v3/admin/namespaces/{namespace}/leaderboards

```
import { AccelByte } from '@accelbyte/sdk'
import { LeaderboardConfigurationV3AdminApi } from '@accelbyte/sdk-leaderboard'

const sdk = AccelByte.SDK({
  coreConfig: {
    baseURL: '__AGS_DOMAIN__',
    clientId: '__IAM_CLIENT_ID__',
    namespace: '__NAMESPACE__',
    redirectURI: '__IAM_CLIENT_REDIRECT_URI__'
  }
})

LeaderboardConfigurationV3AdminApi(sdk, { axiosConfig: { request: { headers: { Authorization: 'Bearer {access_token}' } } } })
  .getLeaderboards_v3( queryParams?: {
             isDeleted?: boolean | null,
             limit?: number,
             offset?: number
    })

// return Promise<GetAllLeaderboardConfigsRespV3>
```

## POST /leaderboard/v3/admin/namespaces/{namespace}/leaderboards

```
import { AccelByte } from '@accelbyte/sdk'
import { LeaderboardConfigurationV3AdminApi } from '@accelbyte/sdk-leaderboard'

const sdk = AccelByte.SDK({
  coreConfig: {
    baseURL: '__AGS_DOMAIN__',
    clientId: '__IAM_CLIENT_ID__',
    namespace: '__NAMESPACE__',
    redirectURI: '__IAM_CLIENT_REDIRECT_URI__'
  }
})

LeaderboardConfigurationV3AdminApi(sdk, { axiosConfig: { request: { headers: { Authorization: 'Bearer {access_token}' } } } })
  .createLeaderboard_v3(data: {
             LeaderboardConfigReqV3
    })

// return Promise<GetLeaderboardConfigRespV3>
```

## DELETE /leaderboard/v1/admin/namespaces/{namespace}/users/{userId}

```
import { AccelByte } from '@accelbyte/sdk'
import { LeaderboardDataAdminApi } from '@accelbyte/sdk-leaderboard'

const sdk = AccelByte.SDK({
  coreConfig: {
    baseURL: '__AGS_DOMAIN__',
    clientId: '__IAM_CLIENT_ID__',
    namespace: '__NAMESPACE__',
    redirectURI: '__IAM_CLIENT_REDIRECT_URI__'
  }
})

LeaderboardDataAdminApi(sdk, { axiosConfig: { request: { headers: { Authorization: 'Bearer {access_token}' } } } })
  .deleteUser_ByUserId(userId:string,  queryParams: {
             leaderboardCode: string[]
    })

// return Promise
```

## DELETE /leaderboard/v3/admin/namespaces/{namespace}/users/{userId}

```
import { AccelByte } from '@accelbyte/sdk'
import { LeaderboardDataV3AdminApi } from '@accelbyte/sdk-leaderboard'

const sdk = AccelByte.SDK({
  coreConfig: {
    baseURL: '__AGS_DOMAIN__',
    clientId: '__IAM_CLIENT_ID__',
    namespace: '__NAMESPACE__',
    redirectURI: '__IAM_CLIENT_REDIRECT_URI__'
  }
})

LeaderboardDataV3AdminApi(sdk, { axiosConfig: { request: { headers: { Authorization: 'Bearer {access_token}' } } } })
  .deleteUser_ByUserId_v3(userId:string,  queryParams: {
             leaderboardCode: string[]
    })

// return Promise
```

## POST /leaderboard/v1/admin/namespaces/{namespace}/leaderboards/delete

```
import { AccelByte } from '@accelbyte/sdk'
import { LeaderboardConfigurationAdminApi } from '@accelbyte/sdk-leaderboard'

const sdk = AccelByte.SDK({
  coreConfig: {
    baseURL: '__AGS_DOMAIN__',
    clientId: '__IAM_CLIENT_ID__',
    namespace: '__NAMESPACE__',
    redirectURI: '__IAM_CLIENT_REDIRECT_URI__'
  }
})

LeaderboardConfigurationAdminApi(sdk, { axiosConfig: { request: { headers: { Authorization: 'Bearer {access_token}' } } } })
  .createLeaderboardDelete(data: {
             DeleteBulkLeaderboardsReq
    })

// return Promise<DeleteBulkLeaderboardsResp>
```

## POST /leaderboard/v3/admin/namespaces/{namespace}/leaderboards/delete

```
import { AccelByte } from '@accelbyte/sdk'
import { LeaderboardConfigurationV3AdminApi } from '@accelbyte/sdk-leaderboard'

const sdk = AccelByte.SDK({
  coreConfig: {
    baseURL: '__AGS_DOMAIN__',
    clientId: '__IAM_CLIENT_ID__',
    namespace: '__NAMESPACE__',
    redirectURI: '__IAM_CLIENT_REDIRECT_URI__'
  }
})

LeaderboardConfigurationV3AdminApi(sdk, { axiosConfig: { request: { headers: { Authorization: 'Bearer {access_token}' } } } })
  .createLeaderboardDelete_v3(data: {
             DeleteBulkLeaderboardsReq
    })

// return Promise<DeleteBulkLeaderboardsResp>
```

## GET /leaderboard/v1/admin/namespaces/{namespace}/leaderboards/archived

```
import { AccelByte } from '@accelbyte/sdk'
import { LeaderboardDataAdminApi } from '@accelbyte/sdk-leaderboard'

const sdk = AccelByte.SDK({
  coreConfig: {
    baseURL: '__AGS_DOMAIN__',
    clientId: '__IAM_CLIENT_ID__',
    namespace: '__NAMESPACE__',
    redirectURI: '__IAM_CLIENT_REDIRECT_URI__'
  }
})

LeaderboardDataAdminApi(sdk, { axiosConfig: { request: { headers: { Authorization: 'Bearer {access_token}' } } } })
  .getLeaderboardsArchived( queryParams: {
             leaderboardCodes: string | null,
             slug?: string | null
    })

// return Promise<ArchiveLeaderboardSignedUrlResponseArray>
```

## POST /leaderboard/v1/admin/namespaces/{namespace}/leaderboards/archived

```
import { AccelByte } from '@accelbyte/sdk'
import { LeaderboardDataAdminApi } from '@accelbyte/sdk-leaderboard'

const sdk = AccelByte.SDK({
  coreConfig: {
    baseURL: '__AGS_DOMAIN__',
    clientId: '__IAM_CLIENT_ID__',
    namespace: '__NAMESPACE__',
    redirectURI: '__IAM_CLIENT_REDIRECT_URI__'
  }
})

LeaderboardDataAdminApi(sdk, { axiosConfig: { request: { headers: { Authorization: 'Bearer {access_token}' } } } })
  .createLeaderboardArchived(data: {
             ArchiveLeaderboardReq
    })

// return Promise
```

## PUT /leaderboard/v2/admin/namespaces/{namespace}/users/{userId}/visibility

```
import { AccelByte } from '@accelbyte/sdk'
import { UserVisibilityAdminApi } from '@accelbyte/sdk-leaderboard'

const sdk = AccelByte.SDK({
  coreConfig: {
    baseURL: '__AGS_DOMAIN__',
    clientId: '__IAM_CLIENT_ID__',
    namespace: '__NAMESPACE__',
    redirectURI: '__IAM_CLIENT_REDIRECT_URI__'
  }
})

UserVisibilityAdminApi(sdk, { axiosConfig: { request: { headers: { Authorization: 'Bearer {access_token}' } } } })
  .updateVisibility_ByUserId_v2(userId:string, data: {
             SetUserVisibilityRequest
    })

// return Promise<GetUserVisibilityResponse>
```

## PUT /leaderboard/v3/admin/namespaces/{namespace}/users/{userId}/visibility

```
import { AccelByte } from '@accelbyte/sdk'
import { UserVisibilityV3AdminApi } from '@accelbyte/sdk-leaderboard'

const sdk = AccelByte.SDK({
  coreConfig: {
    baseURL: '__AGS_DOMAIN__',
    clientId: '__IAM_CLIENT_ID__',
    namespace: '__NAMESPACE__',
    redirectURI: '__IAM_CLIENT_REDIRECT_URI__'
  }
})

UserVisibilityV3AdminApi(sdk, { axiosConfig: { request: { headers: { Authorization: 'Bearer {access_token}' } } } })
  .updateVisibility_ByUserId_v3(userId:string, data: {
             SetUserVisibilityRequest
    })

// return Promise<GetUserVisibilityResponse>
```

## GET /leaderboard/v1/admin/namespaces/{namespace}/users/{userId}/leaderboards

```
import { AccelByte } from '@accelbyte/sdk'
import { UserDataAdminApi } from '@accelbyte/sdk-leaderboard'

const sdk = AccelByte.SDK({
  coreConfig: {
    baseURL: '__AGS_DOMAIN__',
    clientId: '__IAM_CLIENT_ID__',
    namespace: '__NAMESPACE__',
    redirectURI: '__IAM_CLIENT_REDIRECT_URI__'
  }
})

UserDataAdminApi(sdk, { axiosConfig: { request: { headers: { Authorization: 'Bearer {access_token}' } } } })
  .getLeaderboards_ByUserId(userId:string,  queryParams?: {
             limit?: number,
             offset?: number,
             previousVersion?: number
    })

// return Promise<GetAllUserLeaderboardsResp>
```

## GET /leaderboard/v3/admin/namespaces/{namespace}/users/{userId}/leaderboards

```
import { AccelByte } from '@accelbyte/sdk'
import { UserDataV3AdminApi } from '@accelbyte/sdk-leaderboard'

const sdk = AccelByte.SDK({
  coreConfig: {
    baseURL: '__AGS_DOMAIN__',
    clientId: '__IAM_CLIENT_ID__',
    namespace: '__NAMESPACE__',
    redirectURI: '__IAM_CLIENT_REDIRECT_URI__'
  }
})

UserDataV3AdminApi(sdk, { axiosConfig: { request: { headers: { Authorization: 'Bearer {access_token}' } } } })
  .getLeaderboards_ByUserId_v3(userId:string,  queryParams?: {
             limit?: number,
             offset?: number
    })

// return Promise<GetAllUserLeaderboardsRespV3>
```

## DELETE /leaderboard/v1/admin/namespaces/{namespace}/leaderboards/{leaderboardCode}

```
import { AccelByte } from '@accelbyte/sdk'
import { LeaderboardConfigurationAdminApi } from '@accelbyte/sdk-leaderboard'

const sdk = AccelByte.SDK({
  coreConfig: {
    baseURL: '__AGS_DOMAIN__',
    clientId: '__IAM_CLIENT_ID__',
    namespace: '__NAMESPACE__',
    redirectURI: '__IAM_CLIENT_REDIRECT_URI__'
  }
})

LeaderboardConfigurationAdminApi(sdk, { axiosConfig: { request: { headers: { Authorization: 'Bearer {access_token}' } } } })
  .deleteLeaderboard_ByLeaderboardCode(leaderboardCode:string)

// return Promise
```

## GET /leaderboard/v1/admin/namespaces/{namespace}/leaderboards/{leaderboardCode}

```
import { AccelByte } from '@accelbyte/sdk'
import { LeaderboardConfigurationAdminApi } from '@accelbyte/sdk-leaderboard'

const sdk = AccelByte.SDK({
  coreConfig: {
    baseURL: '__AGS_DOMAIN__',
    clientId: '__IAM_CLIENT_ID__',
    namespace: '__NAMESPACE__',
    redirectURI: '__IAM_CLIENT_REDIRECT_URI__'
  }
})

LeaderboardConfigurationAdminApi(sdk, { axiosConfig: { request: { headers: { Authorization: 'Bearer {access_token}' } } } })
  .getLeaderboard_ByLeaderboardCode(leaderboardCode:string)

// return Promise<GetLeaderboardConfigResp>
```

## PUT /leaderboard/v1/admin/namespaces/{namespace}/leaderboards/{leaderboardCode}

```
import { AccelByte } from '@accelbyte/sdk'
import { LeaderboardConfigurationAdminApi } from '@accelbyte/sdk-leaderboard'

const sdk = AccelByte.SDK({
  coreConfig: {
    baseURL: '__AGS_DOMAIN__',
    clientId: '__IAM_CLIENT_ID__',
    namespace: '__NAMESPACE__',
    redirectURI: '__IAM_CLIENT_REDIRECT_URI__'
  }
})

LeaderboardConfigurationAdminApi(sdk, { axiosConfig: { request: { headers: { Authorization: 'Bearer {access_token}' } } } })
  .updateLeaderboard_ByLeaderboardCode(leaderboardCode:string, data: {
             UpdateLeaderboardConfigReq
    })

// return Promise<GetLeaderboardConfigResp>
```

## DELETE /leaderboard/v3/admin/namespaces/{namespace}/leaderboards/{leaderboardCode}

```
import { AccelByte } from '@accelbyte/sdk'
import { LeaderboardConfigurationV3AdminApi } from '@accelbyte/sdk-leaderboard'

const sdk = AccelByte.SDK({
  coreConfig: {
    baseURL: '__AGS_DOMAIN__',
    clientId: '__IAM_CLIENT_ID__',
    namespace: '__NAMESPACE__',
    redirectURI: '__IAM_CLIENT_REDIRECT_URI__'
  }
})

LeaderboardConfigurationV3AdminApi(sdk, { axiosConfig: { request: { headers: { Authorization: 'Bearer {access_token}' } } } })
  .deleteLeaderboard_ByLeaderboardCode_v3(leaderboardCode:string)

// return Promise
```

## GET /leaderboard/v3/admin/namespaces/{namespace}/leaderboards/{leaderboardCode}

```
import { AccelByte } from '@accelbyte/sdk'
import { LeaderboardConfigurationV3AdminApi } from '@accelbyte/sdk-leaderboard'

const sdk = AccelByte.SDK({
  coreConfig: {
    baseURL: '__AGS_DOMAIN__',
    clientId: '__IAM_CLIENT_ID__',
    namespace: '__NAMESPACE__',
    redirectURI: '__IAM_CLIENT_REDIRECT_URI__'
  }
})

LeaderboardConfigurationV3AdminApi(sdk, { axiosConfig: { request: { headers: { Authorization: 'Bearer {access_token}' } } } })
  .getLeaderboard_ByLeaderboardCode_v3(leaderboardCode:string)

// return Promise<GetLeaderboardConfigRespV3>
```

## PUT /leaderboard/v3/admin/namespaces/{namespace}/leaderboards/{leaderboardCode}

```
import { AccelByte } from '@accelbyte/sdk'
import { LeaderboardConfigurationV3AdminApi } from '@accelbyte/sdk-leaderboard'

const sdk = AccelByte.SDK({
  coreConfig: {
    baseURL: '__AGS_DOMAIN__',
    clientId: '__IAM_CLIENT_ID__',
    namespace: '__NAMESPACE__',
    redirectURI: '__IAM_CLIENT_REDIRECT_URI__'
  }
})

LeaderboardConfigurationV3AdminApi(sdk, { axiosConfig: { request: { headers: { Authorization: 'Bearer {access_token}' } } } })
  .updateLeaderboard_ByLeaderboardCode_v3(leaderboardCode:string, data: {
             UpdateLeaderboardConfigReqV3
    })

// return Promise<GetLeaderboardConfigRespV3>
```

## DELETE /leaderboard/v1/admin/namespaces/{namespace}/leaderboards/{leaderboardCode}/hard

```
import { AccelByte } from '@accelbyte/sdk'
import { LeaderboardConfigurationAdminApi } from '@accelbyte/sdk-leaderboard'

const sdk = AccelByte.SDK({
  coreConfig: {
    baseURL: '__AGS_DOMAIN__',
    clientId: '__IAM_CLIENT_ID__',
    namespace: '__NAMESPACE__',
    redirectURI: '__IAM_CLIENT_REDIRECT_URI__'
  }
})

LeaderboardConfigurationAdminApi(sdk, { axiosConfig: { request: { headers: { Authorization: 'Bearer {access_token}' } } } })
  .deleteHard_ByLeaderboardCode(leaderboardCode:string)

// return Promise
```

## GET /leaderboard/v1/admin/namespaces/{namespace}/leaderboards/{leaderboardCode}/week

```
import { AccelByte } from '@accelbyte/sdk'
import { LeaderboardDataAdminApi } from '@accelbyte/sdk-leaderboard'

const sdk = AccelByte.SDK({
  coreConfig: {
    baseURL: '__AGS_DOMAIN__',
    clientId: '__IAM_CLIENT_ID__',
    namespace: '__NAMESPACE__',
    redirectURI: '__IAM_CLIENT_REDIRECT_URI__'
  }
})

LeaderboardDataAdminApi(sdk, { axiosConfig: { request: { headers: { Authorization: 'Bearer {access_token}' } } } })
  .getWeek_ByLeaderboardCode(leaderboardCode:string,  queryParams?: {
             limit?: number,
             offset?: number,
             previousVersion?: number
    })

// return Promise<GetLeaderboardRankingResp>
```

## DELETE /leaderboard/v3/admin/namespaces/{namespace}/leaderboards/{leaderboardCode}/hard

```
import { AccelByte } from '@accelbyte/sdk'
import { LeaderboardConfigurationV3AdminApi } from '@accelbyte/sdk-leaderboard'

const sdk = AccelByte.SDK({
  coreConfig: {
    baseURL: '__AGS_DOMAIN__',
    clientId: '__IAM_CLIENT_ID__',
    namespace: '__NAMESPACE__',
    redirectURI: '__IAM_CLIENT_REDIRECT_URI__'
  }
})

LeaderboardConfigurationV3AdminApi(sdk, { axiosConfig: { request: { headers: { Authorization: 'Bearer {access_token}' } } } })
  .deleteHard_ByLeaderboardCode_v3(leaderboardCode:string)

// return Promise
```

## GET /leaderboard/v1/admin/namespaces/{namespace}/leaderboards/{leaderboardCode}/month

```
import { AccelByte } from '@accelbyte/sdk'
import { LeaderboardDataAdminApi } from '@accelbyte/sdk-leaderboard'

const sdk = AccelByte.SDK({
  coreConfig: {
    baseURL: '__AGS_DOMAIN__',
    clientId: '__IAM_CLIENT_ID__',
    namespace: '__NAMESPACE__',
    redirectURI: '__IAM_CLIENT_REDIRECT_URI__'
  }
})

LeaderboardDataAdminApi(sdk, { axiosConfig: { request: { headers: { Authorization: 'Bearer {access_token}' } } } })
  .getMonth_ByLeaderboardCode(leaderboardCode:string,  queryParams?: {
             limit?: number,
             offset?: number,
             previousVersion?: number
    })

// return Promise<GetLeaderboardRankingResp>
```

## DELETE /leaderboard/v1/admin/namespaces/{namespace}/leaderboards/{leaderboardCode}/reset

```
import { AccelByte } from '@accelbyte/sdk'
import { LeaderboardDataAdminApi } from '@accelbyte/sdk-leaderboard'

const sdk = AccelByte.SDK({
  coreConfig: {
    baseURL: '__AGS_DOMAIN__',
    clientId: '__IAM_CLIENT_ID__',
    namespace: '__NAMESPACE__',
    redirectURI: '__IAM_CLIENT_REDIRECT_URI__'
  }
})

LeaderboardDataAdminApi(sdk, { axiosConfig: { request: { headers: { Authorization: 'Bearer {access_token}' } } } })
  .deleteReset_ByLeaderboardCode(leaderboardCode:string)

// return Promise
```

## GET /leaderboard/v1/admin/namespaces/{namespace}/leaderboards/{leaderboardCode}/today

```
import { AccelByte } from '@accelbyte/sdk'
import { LeaderboardDataAdminApi } from '@accelbyte/sdk-leaderboard'

const sdk = AccelByte.SDK({
  coreConfig: {
    baseURL: '__AGS_DOMAIN__',
    clientId: '__IAM_CLIENT_ID__',
    namespace: '__NAMESPACE__',
    redirectURI: '__IAM_CLIENT_REDIRECT_URI__'
  }
})

LeaderboardDataAdminApi(sdk, { axiosConfig: { request: { headers: { Authorization: 'Bearer {access_token}' } } } })
  .getToday_ByLeaderboardCode(leaderboardCode:string,  queryParams?: {
             limit?: number,
             offset?: number,
             previousVersion?: number
    })

// return Promise<GetLeaderboardRankingResp>
```

## DELETE /leaderboard/v3/admin/namespaces/{namespace}/leaderboards/{leaderboardCode}/reset

```
import { AccelByte } from '@accelbyte/sdk'
import { LeaderboardDataV3AdminApi } from '@accelbyte/sdk-leaderboard'

const sdk = AccelByte.SDK({
  coreConfig: {
    baseURL: '__AGS_DOMAIN__',
    clientId: '__IAM_CLIENT_ID__',
    namespace: '__NAMESPACE__',
    redirectURI: '__IAM_CLIENT_REDIRECT_URI__'
  }
})

LeaderboardDataV3AdminApi(sdk, { axiosConfig: { request: { headers: { Authorization: 'Bearer {access_token}' } } } })
  .deleteReset_ByLeaderboardCode_v3(leaderboardCode:string)

// return Promise
```

## GET /leaderboard/v1/admin/namespaces/{namespace}/leaderboards/{leaderboardCode}/season

```
import { AccelByte } from '@accelbyte/sdk'
import { LeaderboardDataAdminApi } from '@accelbyte/sdk-leaderboard'

const sdk = AccelByte.SDK({
  coreConfig: {
    baseURL: '__AGS_DOMAIN__',
    clientId: '__IAM_CLIENT_ID__',
    namespace: '__NAMESPACE__',
    redirectURI: '__IAM_CLIENT_REDIRECT_URI__'
  }
})

LeaderboardDataAdminApi(sdk, { axiosConfig: { request: { headers: { Authorization: 'Bearer {access_token}' } } } })
  .getSeason_ByLeaderboardCode(leaderboardCode:string,  queryParams?: {
             limit?: number,
             offset?: number,
             previousVersion?: number
    })

// return Promise<GetLeaderboardRankingResp>
```

## GET /leaderboard/v1/admin/namespaces/{namespace}/leaderboards/{leaderboardCode}/alltime

```
import { AccelByte } from '@accelbyte/sdk'
import { LeaderboardDataAdminApi } from '@accelbyte/sdk-leaderboard'

const sdk = AccelByte.SDK({
  coreConfig: {
    baseURL: '__AGS_DOMAIN__',
    clientId: '__IAM_CLIENT_ID__',
    namespace: '__NAMESPACE__',
    redirectURI: '__IAM_CLIENT_REDIRECT_URI__'
  }
})

LeaderboardDataAdminApi(sdk, { axiosConfig: { request: { headers: { Authorization: 'Bearer {access_token}' } } } })
  .getAlltime_ByLeaderboardCode(leaderboardCode:string,  queryParams?: {
             limit?: number,
             offset?: number
    })

// return Promise<GetLeaderboardRankingResp>
```

## GET /leaderboard/v3/admin/namespaces/{namespace}/leaderboards/{leaderboardCode}/alltime

```
import { AccelByte } from '@accelbyte/sdk'
import { LeaderboardDataV3AdminApi } from '@accelbyte/sdk-leaderboard'

const sdk = AccelByte.SDK({
  coreConfig: {
    baseURL: '__AGS_DOMAIN__',
    clientId: '__IAM_CLIENT_ID__',
    namespace: '__NAMESPACE__',
    redirectURI: '__IAM_CLIENT_REDIRECT_URI__'
  }
})

LeaderboardDataV3AdminApi(sdk, { axiosConfig: { request: { headers: { Authorization: 'Bearer {access_token}' } } } })
  .getAlltime_ByLeaderboardCode_v3(leaderboardCode:string,  queryParams?: {
             limit?: number,
             offset?: number
    })

// return Promise<GetLeaderboardRankingResp>
```

## DELETE /leaderboard/v1/admin/namespaces/{namespace}/users/{userId}/anonymization/leaderboards

```
import { AccelByte } from '@accelbyte/sdk'
import { AnonymizationAdminApi } from '@accelbyte/sdk-leaderboard'

const sdk = AccelByte.SDK({
  coreConfig: {
    baseURL: '__AGS_DOMAIN__',
    clientId: '__IAM_CLIENT_ID__',
    namespace: '__NAMESPACE__',
    redirectURI: '__IAM_CLIENT_REDIRECT_URI__'
  }
})

AnonymizationAdminApi(sdk, { axiosConfig: { request: { headers: { Authorization: 'Bearer {access_token}' } } } })
  .deleteAnonymizationLeaderboard_ByUserId(userId:string)

// return Promise
```

## GET /leaderboard/v2/admin/namespaces/{namespace}/leaderboards/{leaderboardCode}/users/hidden

```
import { AccelByte } from '@accelbyte/sdk'
import { UserVisibilityAdminApi } from '@accelbyte/sdk-leaderboard'

const sdk = AccelByte.SDK({
  coreConfig: {
    baseURL: '__AGS_DOMAIN__',
    clientId: '__IAM_CLIENT_ID__',
    namespace: '__NAMESPACE__',
    redirectURI: '__IAM_CLIENT_REDIRECT_URI__'
  }
})

UserVisibilityAdminApi(sdk, { axiosConfig: { request: { headers: { Authorization: 'Bearer {access_token}' } } } })
  .getUsersHidden_ByLeaderboardCode_v2(leaderboardCode:string,  queryParams?: {
             limit?: number,
             offset?: number
    })

// return Promise<GetHiddenUserResponse>
```

## GET /leaderboard/v3/admin/namespaces/{namespace}/leaderboards/{leaderboardCode}/users/hidden

```
import { AccelByte } from '@accelbyte/sdk'
import { UserVisibilityV3AdminApi } from '@accelbyte/sdk-leaderboard'

const sdk = AccelByte.SDK({
  coreConfig: {
    baseURL: '__AGS_DOMAIN__',
    clientId: '__IAM_CLIENT_ID__',
    namespace: '__NAMESPACE__',
    redirectURI: '__IAM_CLIENT_REDIRECT_URI__'
  }
})

UserVisibilityV3AdminApi(sdk, { axiosConfig: { request: { headers: { Authorization: 'Bearer {access_token}' } } } })
  .getUsersHidden_ByLeaderboardCode_v3(leaderboardCode:string,  queryParams?: {
             limit?: number,
             offset?: number
    })

// return Promise<GetHiddenUserResponse>
```

## DELETE /leaderboard/v1/admin/namespaces/{namespace}/leaderboards/{leaderboardCode}/users/{userId}

```
import { AccelByte } from '@accelbyte/sdk'
import { LeaderboardDataAdminApi } from '@accelbyte/sdk-leaderboard'

const sdk = AccelByte.SDK({
  coreConfig: {
    baseURL: '__AGS_DOMAIN__',
    clientId: '__IAM_CLIENT_ID__',
    namespace: '__NAMESPACE__',
    redirectURI: '__IAM_CLIENT_REDIRECT_URI__'
  }
})

LeaderboardDataAdminApi(sdk, { axiosConfig: { request: { headers: { Authorization: 'Bearer {access_token}' } } } })
  .deleteUser_ByLeaderboardCode_ByUserId(leaderboardCode:string, userId:string)

// return Promise
```

## GET /leaderboard/v1/admin/namespaces/{namespace}/leaderboards/{leaderboardCode}/users/{userId}

```
import { AccelByte } from '@accelbyte/sdk'
import { LeaderboardDataAdminApi } from '@accelbyte/sdk-leaderboard'

const sdk = AccelByte.SDK({
  coreConfig: {
    baseURL: '__AGS_DOMAIN__',
    clientId: '__IAM_CLIENT_ID__',
    namespace: '__NAMESPACE__',
    redirectURI: '__IAM_CLIENT_REDIRECT_URI__'
  }
})

LeaderboardDataAdminApi(sdk, { axiosConfig: { request: { headers: { Authorization: 'Bearer {access_token}' } } } })
  .getUser_ByLeaderboardCode_ByUserId(leaderboardCode:string, userId:string,  queryParams?: {
             previousVersion?: number
    })

// return Promise<UserRankingResponse>
```

## PUT /leaderboard/v1/admin/namespaces/{namespace}/leaderboards/{leaderboardCode}/users/{userId}

```
import { AccelByte } from '@accelbyte/sdk'
import { LeaderboardDataAdminApi } from '@accelbyte/sdk-leaderboard'

const sdk = AccelByte.SDK({
  coreConfig: {
    baseURL: '__AGS_DOMAIN__',
    clientId: '__IAM_CLIENT_ID__',
    namespace: '__NAMESPACE__',
    redirectURI: '__IAM_CLIENT_REDIRECT_URI__'
  }
})

LeaderboardDataAdminApi(sdk, { axiosConfig: { request: { headers: { Authorization: 'Bearer {access_token}' } } } })
  .updateUser_ByLeaderboardCode_ByUserId(leaderboardCode:string, userId:string, data: {
             UpdateUserPointAdminV1Request
    })

// return Promise<UpdateUserPointAdminV1Response>
```

## DELETE /leaderboard/v3/admin/namespaces/{namespace}/leaderboards/{leaderboardCode}/users/{userId}

```
import { AccelByte } from '@accelbyte/sdk'
import { LeaderboardDataV3AdminApi } from '@accelbyte/sdk-leaderboard'

const sdk = AccelByte.SDK({
  coreConfig: {
    baseURL: '__AGS_DOMAIN__',
    clientId: '__IAM_CLIENT_ID__',
    namespace: '__NAMESPACE__',
    redirectURI: '__IAM_CLIENT_REDIRECT_URI__'
  }
})

LeaderboardDataV3AdminApi(sdk, { axiosConfig: { request: { headers: { Authorization: 'Bearer {access_token}' } } } })
  .deleteUser_ByLeaderboardCode_ByUserId_v3(leaderboardCode:string, userId:string)

// return Promise
```

## GET /leaderboard/v3/admin/namespaces/{namespace}/leaderboards/{leaderboardCode}/users/{userId}

```
import { AccelByte } from '@accelbyte/sdk'
import { LeaderboardDataV3AdminApi } from '@accelbyte/sdk-leaderboard'

const sdk = AccelByte.SDK({
  coreConfig: {
    baseURL: '__AGS_DOMAIN__',
    clientId: '__IAM_CLIENT_ID__',
    namespace: '__NAMESPACE__',
    redirectURI: '__IAM_CLIENT_REDIRECT_URI__'
  }
})

LeaderboardDataV3AdminApi(sdk, { axiosConfig: { request: { headers: { Authorization: 'Bearer {access_token}' } } } })
  .getUser_ByLeaderboardCode_ByUserId_v3(leaderboardCode:string, userId:string)

// return Promise<UserRankingResponseV3>
```

## GET /leaderboard/v3/admin/namespaces/{namespace}/leaderboards/{leaderboardCode}/cycles/{cycleId}

```
import { AccelByte } from '@accelbyte/sdk'
import { LeaderboardDataV3AdminApi } from '@accelbyte/sdk-leaderboard'

const sdk = AccelByte.SDK({
  coreConfig: {
    baseURL: '__AGS_DOMAIN__',
    clientId: '__IAM_CLIENT_ID__',
    namespace: '__NAMESPACE__',
    redirectURI: '__IAM_CLIENT_REDIRECT_URI__'
  }
})

LeaderboardDataV3AdminApi(sdk, { axiosConfig: { request: { headers: { Authorization: 'Bearer {access_token}' } } } })
  .getCycle_ByLeaderboardCode_ByCycleId_v3(leaderboardCode:string, cycleId:string,  queryParams?: {
             limit?: number,
             offset?: number
    })

// return Promise<GetLeaderboardRankingResp>
```

## DELETE /leaderboard/v3/admin/namespaces/{namespace}/leaderboards/{leaderboardCode}/cycles/{cycleId}/reset

```
import { AccelByte } from '@accelbyte/sdk'
import { LeaderboardDataV3AdminApi } from '@accelbyte/sdk-leaderboard'

const sdk = AccelByte.SDK({
  coreConfig: {
    baseURL: '__AGS_DOMAIN__',
    clientId: '__IAM_CLIENT_ID__',
    namespace: '__NAMESPACE__',
    redirectURI: '__IAM_CLIENT_REDIRECT_URI__'
  }
})

LeaderboardDataV3AdminApi(sdk, { axiosConfig: { request: { headers: { Authorization: 'Bearer {access_token}' } } } })
  .deleteReset_ByLeaderboardCode_ByCycleId_v3(leaderboardCode:string, cycleId:string)

// return Promise
```

## GET /leaderboard/v2/admin/namespaces/{namespace}/leaderboards/{leaderboardCode}/users/{userId}/visibility

```
import { AccelByte } from '@accelbyte/sdk'
import { UserVisibilityAdminApi } from '@accelbyte/sdk-leaderboard'

const sdk = AccelByte.SDK({
  coreConfig: {
    baseURL: '__AGS_DOMAIN__',
    clientId: '__IAM_CLIENT_ID__',
    namespace: '__NAMESPACE__',
    redirectURI: '__IAM_CLIENT_REDIRECT_URI__'
  }
})

UserVisibilityAdminApi(sdk, { axiosConfig: { request: { headers: { Authorization: 'Bearer {access_token}' } } } })
  .getVisibility_ByLeaderboardCode_ByUserId_v2(leaderboardCode:string, userId:string)

// return Promise<GetUserVisibilityResponse>
```

## PUT /leaderboard/v2/admin/namespaces/{namespace}/leaderboards/{leaderboardCode}/users/{userId}/visibility

```
import { AccelByte } from '@accelbyte/sdk'
import { UserVisibilityAdminApi } from '@accelbyte/sdk-leaderboard'

const sdk = AccelByte.SDK({
  coreConfig: {
    baseURL: '__AGS_DOMAIN__',
    clientId: '__IAM_CLIENT_ID__',
    namespace: '__NAMESPACE__',
    redirectURI: '__IAM_CLIENT_REDIRECT_URI__'
  }
})

UserVisibilityAdminApi(sdk, { axiosConfig: { request: { headers: { Authorization: 'Bearer {access_token}' } } } })
  .updateVisibility_ByLeaderboardCode_ByUserId_v2(leaderboardCode:string, userId:string, data: {
             SetUserVisibilityRequest
    })

// return Promise<GetUserVisibilityResponse>
```

## GET /leaderboard/v3/admin/namespaces/{namespace}/leaderboards/{leaderboardCode}/users/{userId}/visibility

```
import { AccelByte } from '@accelbyte/sdk'
import { UserVisibilityV3AdminApi } from '@accelbyte/sdk-leaderboard'

const sdk = AccelByte.SDK({
  coreConfig: {
    baseURL: '__AGS_DOMAIN__',
    clientId: '__IAM_CLIENT_ID__',
    namespace: '__NAMESPACE__',
    redirectURI: '__IAM_CLIENT_REDIRECT_URI__'
  }
})

UserVisibilityV3AdminApi(sdk, { axiosConfig: { request: { headers: { Authorization: 'Bearer {access_token}' } } } })
  .getVisibility_ByLeaderboardCode_ByUserId_v3(leaderboardCode:string, userId:string)

// return Promise<GetUserVisibilityResponse>
```

## PUT /leaderboard/v3/admin/namespaces/{namespace}/leaderboards/{leaderboardCode}/users/{userId}/visibility

```
import { AccelByte } from '@accelbyte/sdk'
import { UserVisibilityV3AdminApi } from '@accelbyte/sdk-leaderboard'

const sdk = AccelByte.SDK({
  coreConfig: {
    baseURL: '__AGS_DOMAIN__',
    clientId: '__IAM_CLIENT_ID__',
    namespace: '__NAMESPACE__',
    redirectURI: '__IAM_CLIENT_REDIRECT_URI__'
  }
})

UserVisibilityV3AdminApi(sdk, { axiosConfig: { request: { headers: { Authorization: 'Bearer {access_token}' } } } })
  .updateVisibility_ByLeaderboardCode_ByUserId_v3(leaderboardCode:string, userId:string, data: {
             SetUserVisibilityRequest
    })

// return Promise<GetUserVisibilityResponse>
```

## DELETE /leaderboard/v3/admin/namespaces/{namespace}/leaderboards/{leaderboardCode}/cycles/{cycleId}/users/{userId}

```
import { AccelByte } from '@accelbyte/sdk'
import { LeaderboardDataV3AdminApi } from '@accelbyte/sdk-leaderboard'

const sdk = AccelByte.SDK({
  coreConfig: {
    baseURL: '__AGS_DOMAIN__',
    clientId: '__IAM_CLIENT_ID__',
    namespace: '__NAMESPACE__',
    redirectURI: '__IAM_CLIENT_REDIRECT_URI__'
  }
})

LeaderboardDataV3AdminApi(sdk, { axiosConfig: { request: { headers: { Authorization: 'Bearer {access_token}' } } } })
  .deleteUser_ByLeaderboardCode_ByCycleId_ByUserId_v3(leaderboardCode:string, cycleId:string, userId:string)

// return Promise
```