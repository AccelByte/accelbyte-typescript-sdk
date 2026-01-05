## GET /leaderboard/v1/public/namespaces/{namespace}/leaderboards

```
<script src="https://unpkg.com/@accelbyte/sdk/dist/global/index.global.js"></script>
<script src="https://unpkg.com/@accelbyte/sdk-leaderboard/dist/global/index.global.js"></script>
  
<script>

const sdk = AccelByteSDK.AccelByte.SDK({
  coreConfig: {
    baseURL: '__AGS_DOMAIN__',
    clientId: '__IAM_CLIENT_ID__',
    namespace: '__NAMESPACE__',
    redirectURI: '__IAM_CLIENT_REDIRECT_URI__'
  }
})

AccelByteSDK_Leaderboard.LeaderboardConfigurationApi(sdk, { axiosConfig: { request: { headers: { Authorization: 'Bearer {access_token}' } } } })
  .getLeaderboards( queryParams?: {
             isArchived?: boolean | null,
             isDeleted?: boolean | null,
             limit?: number,
             offset?: number
    })

// return Promise<GetAllLeaderboardConfigsPublicResp>

</script>
```

## POST /leaderboard/v1/public/namespaces/{namespace}/leaderboards

```
<script src="https://unpkg.com/@accelbyte/sdk/dist/global/index.global.js"></script>
<script src="https://unpkg.com/@accelbyte/sdk-leaderboard/dist/global/index.global.js"></script>
  
<script>

const sdk = AccelByteSDK.AccelByte.SDK({
  coreConfig: {
    baseURL: '__AGS_DOMAIN__',
    clientId: '__IAM_CLIENT_ID__',
    namespace: '__NAMESPACE__',
    redirectURI: '__IAM_CLIENT_REDIRECT_URI__'
  }
})

AccelByteSDK_Leaderboard.LeaderboardConfigurationApi(sdk, { axiosConfig: { request: { headers: { Authorization: 'Bearer {access_token}' } } } })
  .createLeaderboard(data: {
             LeaderboardConfigReq
    })

// return Promise<LeaderboardConfigReq>

</script>
```

## GET /leaderboard/v2/public/namespaces/{namespace}/leaderboards

```
<script src="https://unpkg.com/@accelbyte/sdk/dist/global/index.global.js"></script>
<script src="https://unpkg.com/@accelbyte/sdk-leaderboard/dist/global/index.global.js"></script>
  
<script>

const sdk = AccelByteSDK.AccelByte.SDK({
  coreConfig: {
    baseURL: '__AGS_DOMAIN__',
    clientId: '__IAM_CLIENT_ID__',
    namespace: '__NAMESPACE__',
    redirectURI: '__IAM_CLIENT_REDIRECT_URI__'
  }
})

AccelByteSDK_Leaderboard.LeaderboardConfigurationApi(sdk)
  .getLeaderboards_v2( queryParams?: {
             limit?: number,
             offset?: number
    })

// return Promise<GetAllLeaderboardConfigsPublicResp>

</script>
```

## GET /leaderboard/v3/public/namespaces/{namespace}/leaderboards

```
<script src="https://unpkg.com/@accelbyte/sdk/dist/global/index.global.js"></script>
<script src="https://unpkg.com/@accelbyte/sdk-leaderboard/dist/global/index.global.js"></script>
  
<script>

const sdk = AccelByteSDK.AccelByte.SDK({
  coreConfig: {
    baseURL: '__AGS_DOMAIN__',
    clientId: '__IAM_CLIENT_ID__',
    namespace: '__NAMESPACE__',
    redirectURI: '__IAM_CLIENT_REDIRECT_URI__'
  }
})

AccelByteSDK_Leaderboard.LeaderboardConfigurationV3Api(sdk, { axiosConfig: { request: { headers: { Authorization: 'Bearer {access_token}' } } } })
  .getLeaderboards_v3( queryParams?: {
             isDeleted?: boolean | null,
             limit?: number,
             offset?: number
    })

// return Promise<GetAllLeaderboardConfigsPublicRespV3>

</script>
```

## GET /leaderboard/v3/public/namespaces/{namespace}/leaderboards/{leaderboardCode}

```
<script src="https://unpkg.com/@accelbyte/sdk/dist/global/index.global.js"></script>
<script src="https://unpkg.com/@accelbyte/sdk-leaderboard/dist/global/index.global.js"></script>
  
<script>

const sdk = AccelByteSDK.AccelByte.SDK({
  coreConfig: {
    baseURL: '__AGS_DOMAIN__',
    clientId: '__IAM_CLIENT_ID__',
    namespace: '__NAMESPACE__',
    redirectURI: '__IAM_CLIENT_REDIRECT_URI__'
  }
})

AccelByteSDK_Leaderboard.LeaderboardConfigurationV3Api(sdk, { axiosConfig: { request: { headers: { Authorization: 'Bearer {access_token}' } } } })
  .getLeaderboard_ByLeaderboardCode_v3(leaderboardCode:string)

// return Promise<GetLeaderboardConfigPublicRespV3>

</script>
```

## GET /leaderboard/v1/public/namespaces/{namespace}/leaderboards/{leaderboardCode}/week

```
<script src="https://unpkg.com/@accelbyte/sdk/dist/global/index.global.js"></script>
<script src="https://unpkg.com/@accelbyte/sdk-leaderboard/dist/global/index.global.js"></script>
  
<script>

const sdk = AccelByteSDK.AccelByte.SDK({
  coreConfig: {
    baseURL: '__AGS_DOMAIN__',
    clientId: '__IAM_CLIENT_ID__',
    namespace: '__NAMESPACE__',
    redirectURI: '__IAM_CLIENT_REDIRECT_URI__'
  }
})

AccelByteSDK_Leaderboard.LeaderboardDataApi(sdk)
  .getWeek_ByLeaderboardCode(leaderboardCode:string,  queryParams?: {
             limit?: number,
             offset?: number,
             previousVersion?: number
    })

// return Promise<GetLeaderboardRankingResp>

</script>
```

## GET /leaderboard/v1/public/namespaces/{namespace}/leaderboards/{leaderboardCode}/month

```
<script src="https://unpkg.com/@accelbyte/sdk/dist/global/index.global.js"></script>
<script src="https://unpkg.com/@accelbyte/sdk-leaderboard/dist/global/index.global.js"></script>
  
<script>

const sdk = AccelByteSDK.AccelByte.SDK({
  coreConfig: {
    baseURL: '__AGS_DOMAIN__',
    clientId: '__IAM_CLIENT_ID__',
    namespace: '__NAMESPACE__',
    redirectURI: '__IAM_CLIENT_REDIRECT_URI__'
  }
})

AccelByteSDK_Leaderboard.LeaderboardDataApi(sdk)
  .getMonth_ByLeaderboardCode(leaderboardCode:string,  queryParams?: {
             limit?: number,
             offset?: number,
             previousVersion?: number
    })

// return Promise<GetLeaderboardRankingResp>

</script>
```

## GET /leaderboard/v1/public/namespaces/{namespace}/leaderboards/{leaderboardCode}/today

```
<script src="https://unpkg.com/@accelbyte/sdk/dist/global/index.global.js"></script>
<script src="https://unpkg.com/@accelbyte/sdk-leaderboard/dist/global/index.global.js"></script>
  
<script>

const sdk = AccelByteSDK.AccelByte.SDK({
  coreConfig: {
    baseURL: '__AGS_DOMAIN__',
    clientId: '__IAM_CLIENT_ID__',
    namespace: '__NAMESPACE__',
    redirectURI: '__IAM_CLIENT_REDIRECT_URI__'
  }
})

AccelByteSDK_Leaderboard.LeaderboardDataApi(sdk)
  .getToday_ByLeaderboardCode(leaderboardCode:string,  queryParams?: {
             limit?: number,
             offset?: number,
             previousVersion?: number
    })

// return Promise<GetLeaderboardRankingResp>

</script>
```

## GET /leaderboard/v1/public/namespaces/{namespace}/leaderboards/{leaderboardCode}/season

```
<script src="https://unpkg.com/@accelbyte/sdk/dist/global/index.global.js"></script>
<script src="https://unpkg.com/@accelbyte/sdk-leaderboard/dist/global/index.global.js"></script>
  
<script>

const sdk = AccelByteSDK.AccelByte.SDK({
  coreConfig: {
    baseURL: '__AGS_DOMAIN__',
    clientId: '__IAM_CLIENT_ID__',
    namespace: '__NAMESPACE__',
    redirectURI: '__IAM_CLIENT_REDIRECT_URI__'
  }
})

AccelByteSDK_Leaderboard.LeaderboardDataApi(sdk)
  .getSeason_ByLeaderboardCode(leaderboardCode:string,  queryParams?: {
             limit?: number,
             offset?: number,
             previousVersion?: number
    })

// return Promise<GetLeaderboardRankingResp>

</script>
```

## GET /leaderboard/v1/public/namespaces/{namespace}/leaderboards/{leaderboardCode}/alltime

```
<script src="https://unpkg.com/@accelbyte/sdk/dist/global/index.global.js"></script>
<script src="https://unpkg.com/@accelbyte/sdk-leaderboard/dist/global/index.global.js"></script>
  
<script>

const sdk = AccelByteSDK.AccelByte.SDK({
  coreConfig: {
    baseURL: '__AGS_DOMAIN__',
    clientId: '__IAM_CLIENT_ID__',
    namespace: '__NAMESPACE__',
    redirectURI: '__IAM_CLIENT_REDIRECT_URI__'
  }
})

AccelByteSDK_Leaderboard.LeaderboardDataApi(sdk)
  .getAlltime_ByLeaderboardCode(leaderboardCode:string,  queryParams?: {
             limit?: number,
             offset?: number
    })

// return Promise<GetLeaderboardRankingResp>

</script>
```

## GET /leaderboard/v2/public/namespaces/{namespace}/leaderboards/{leaderboardCode}/alltime

```
<script src="https://unpkg.com/@accelbyte/sdk/dist/global/index.global.js"></script>
<script src="https://unpkg.com/@accelbyte/sdk-leaderboard/dist/global/index.global.js"></script>
  
<script>

const sdk = AccelByteSDK.AccelByte.SDK({
  coreConfig: {
    baseURL: '__AGS_DOMAIN__',
    clientId: '__IAM_CLIENT_ID__',
    namespace: '__NAMESPACE__',
    redirectURI: '__IAM_CLIENT_REDIRECT_URI__'
  }
})

AccelByteSDK_Leaderboard.LeaderboardDataApi(sdk)
  .getAlltime_ByLeaderboardCode_v2(leaderboardCode:string,  queryParams?: {
             limit?: number,
             offset?: number
    })

// return Promise<GetPublicLeaderboardRankingResponse>

</script>
```

## GET /leaderboard/v3/public/namespaces/{namespace}/leaderboards/{leaderboardCode}/alltime

```
<script src="https://unpkg.com/@accelbyte/sdk/dist/global/index.global.js"></script>
<script src="https://unpkg.com/@accelbyte/sdk-leaderboard/dist/global/index.global.js"></script>
  
<script>

const sdk = AccelByteSDK.AccelByte.SDK({
  coreConfig: {
    baseURL: '__AGS_DOMAIN__',
    clientId: '__IAM_CLIENT_ID__',
    namespace: '__NAMESPACE__',
    redirectURI: '__IAM_CLIENT_REDIRECT_URI__'
  }
})

AccelByteSDK_Leaderboard.LeaderboardDataV3Api(sdk)
  .getAlltime_ByLeaderboardCode_v3(leaderboardCode:string,  queryParams?: {
             limit?: number,
             offset?: number
    })

// return Promise<GetLeaderboardRankingResp>

</script>
```

## GET /leaderboard/v1/public/namespaces/{namespace}/leaderboards/{leaderboardCode}/archived

```
<script src="https://unpkg.com/@accelbyte/sdk/dist/global/index.global.js"></script>
<script src="https://unpkg.com/@accelbyte/sdk-leaderboard/dist/global/index.global.js"></script>
  
<script>

const sdk = AccelByteSDK.AccelByte.SDK({
  coreConfig: {
    baseURL: '__AGS_DOMAIN__',
    clientId: '__IAM_CLIENT_ID__',
    namespace: '__NAMESPACE__',
    redirectURI: '__IAM_CLIENT_REDIRECT_URI__'
  }
})

AccelByteSDK_Leaderboard.LeaderboardDataApi(sdk, { axiosConfig: { request: { headers: { Authorization: 'Bearer {access_token}' } } } })
  .getArchived_ByLeaderboardCode(leaderboardCode:string,  queryParams: {
             leaderboardCodes: string | null,
             slug?: string | null
    })

// return Promise<ArchiveLeaderboardSignedUrlResponseArray>

</script>
```

## POST /leaderboard/v3/public/namespaces/{namespace}/leaderboards/{leaderboardCode}/users/bulk

```
<script src="https://unpkg.com/@accelbyte/sdk/dist/global/index.global.js"></script>
<script src="https://unpkg.com/@accelbyte/sdk-leaderboard/dist/global/index.global.js"></script>
  
<script>

const sdk = AccelByteSDK.AccelByte.SDK({
  coreConfig: {
    baseURL: '__AGS_DOMAIN__',
    clientId: '__IAM_CLIENT_ID__',
    namespace: '__NAMESPACE__',
    redirectURI: '__IAM_CLIENT_REDIRECT_URI__'
  }
})

AccelByteSDK_Leaderboard.LeaderboardDataV3Api(sdk, { axiosConfig: { request: { headers: { Authorization: 'Bearer {access_token}' } } } })
  .createUserBulk_ByLeaderboardCode_v3(leaderboardCode:string, data: {
             BulkUserIDsRequest
    })

// return Promise<BulkUserRankingResponseV3>

</script>
```

## DELETE /leaderboard/v1/public/namespaces/{namespace}/leaderboards/{leaderboardCode}/users/{userId}

```
<script src="https://unpkg.com/@accelbyte/sdk/dist/global/index.global.js"></script>
<script src="https://unpkg.com/@accelbyte/sdk-leaderboard/dist/global/index.global.js"></script>
  
<script>

const sdk = AccelByteSDK.AccelByte.SDK({
  coreConfig: {
    baseURL: '__AGS_DOMAIN__',
    clientId: '__IAM_CLIENT_ID__',
    namespace: '__NAMESPACE__',
    redirectURI: '__IAM_CLIENT_REDIRECT_URI__'
  }
})

AccelByteSDK_Leaderboard.LeaderboardDataApi(sdk, { axiosConfig: { request: { headers: { Authorization: 'Bearer {access_token}' } } } })
  .deleteUser_ByLeaderboardCode_ByUserId(leaderboardCode:string, userId:string)

// return Promise

</script>
```

## GET /leaderboard/v1/public/namespaces/{namespace}/leaderboards/{leaderboardCode}/users/{userId}

```
<script src="https://unpkg.com/@accelbyte/sdk/dist/global/index.global.js"></script>
<script src="https://unpkg.com/@accelbyte/sdk-leaderboard/dist/global/index.global.js"></script>
  
<script>

const sdk = AccelByteSDK.AccelByte.SDK({
  coreConfig: {
    baseURL: '__AGS_DOMAIN__',
    clientId: '__IAM_CLIENT_ID__',
    namespace: '__NAMESPACE__',
    redirectURI: '__IAM_CLIENT_REDIRECT_URI__'
  }
})

AccelByteSDK_Leaderboard.LeaderboardDataApi(sdk, { axiosConfig: { request: { headers: { Authorization: 'Bearer {access_token}' } } } })
  .getUser_ByLeaderboardCode_ByUserId(leaderboardCode:string, userId:string,  queryParams?: {
             previousVersion?: number
    })

// return Promise<UserRankingResponse>

</script>
```

## GET /leaderboard/v3/public/namespaces/{namespace}/leaderboards/{leaderboardCode}/users/{userId}

```
<script src="https://unpkg.com/@accelbyte/sdk/dist/global/index.global.js"></script>
<script src="https://unpkg.com/@accelbyte/sdk-leaderboard/dist/global/index.global.js"></script>
  
<script>

const sdk = AccelByteSDK.AccelByte.SDK({
  coreConfig: {
    baseURL: '__AGS_DOMAIN__',
    clientId: '__IAM_CLIENT_ID__',
    namespace: '__NAMESPACE__',
    redirectURI: '__IAM_CLIENT_REDIRECT_URI__'
  }
})

AccelByteSDK_Leaderboard.LeaderboardDataV3Api(sdk, { axiosConfig: { request: { headers: { Authorization: 'Bearer {access_token}' } } } })
  .getUser_ByLeaderboardCode_ByUserId_v3(leaderboardCode:string, userId:string)

// return Promise<UserRankingResponseV3>

</script>
```

## GET /leaderboard/v3/public/namespaces/{namespace}/leaderboards/{leaderboardCode}/cycles/{cycleId}

```
<script src="https://unpkg.com/@accelbyte/sdk/dist/global/index.global.js"></script>
<script src="https://unpkg.com/@accelbyte/sdk-leaderboard/dist/global/index.global.js"></script>
  
<script>

const sdk = AccelByteSDK.AccelByte.SDK({
  coreConfig: {
    baseURL: '__AGS_DOMAIN__',
    clientId: '__IAM_CLIENT_ID__',
    namespace: '__NAMESPACE__',
    redirectURI: '__IAM_CLIENT_REDIRECT_URI__'
  }
})

AccelByteSDK_Leaderboard.LeaderboardDataV3Api(sdk)
  .getCycle_ByLeaderboardCode_ByCycleId_v3(leaderboardCode:string, cycleId:string,  queryParams?: {
             limit?: number,
             offset?: number
    })

// return Promise<GetLeaderboardRankingResp>

</script>
```

## GET /leaderboard/v1/admin/namespaces/{namespace}/leaderboards

```
<script src="https://unpkg.com/@accelbyte/sdk/dist/global/index.global.js"></script>
<script src="https://unpkg.com/@accelbyte/sdk-leaderboard/dist/global/index.global.js"></script>
  
<script>

const sdk = AccelByteSDK.AccelByte.SDK({
  coreConfig: {
    baseURL: '__AGS_DOMAIN__',
    clientId: '__IAM_CLIENT_ID__',
    namespace: '__NAMESPACE__',
    redirectURI: '__IAM_CLIENT_REDIRECT_URI__'
  }
})

AccelByteSDK_Leaderboard.LeaderboardConfigurationAdminApi(sdk, { axiosConfig: { request: { headers: { Authorization: 'Bearer {access_token}' } } } })
  .getLeaderboards( queryParams?: {
             isArchived?: boolean | null,
             isDeleted?: boolean | null,
             limit?: number,
             offset?: number
    })

// return Promise<GetAllLeaderboardConfigsResp>

</script>
```

## POST /leaderboard/v1/admin/namespaces/{namespace}/leaderboards

```
<script src="https://unpkg.com/@accelbyte/sdk/dist/global/index.global.js"></script>
<script src="https://unpkg.com/@accelbyte/sdk-leaderboard/dist/global/index.global.js"></script>
  
<script>

const sdk = AccelByteSDK.AccelByte.SDK({
  coreConfig: {
    baseURL: '__AGS_DOMAIN__',
    clientId: '__IAM_CLIENT_ID__',
    namespace: '__NAMESPACE__',
    redirectURI: '__IAM_CLIENT_REDIRECT_URI__'
  }
})

AccelByteSDK_Leaderboard.LeaderboardConfigurationAdminApi(sdk, { axiosConfig: { request: { headers: { Authorization: 'Bearer {access_token}' } } } })
  .createLeaderboard(data: {
             LeaderboardConfigReq
    })

// return Promise<LeaderboardConfigReq>

</script>
```

## GET /leaderboard/v3/admin/namespaces/{namespace}/leaderboards

```
<script src="https://unpkg.com/@accelbyte/sdk/dist/global/index.global.js"></script>
<script src="https://unpkg.com/@accelbyte/sdk-leaderboard/dist/global/index.global.js"></script>
  
<script>

const sdk = AccelByteSDK.AccelByte.SDK({
  coreConfig: {
    baseURL: '__AGS_DOMAIN__',
    clientId: '__IAM_CLIENT_ID__',
    namespace: '__NAMESPACE__',
    redirectURI: '__IAM_CLIENT_REDIRECT_URI__'
  }
})

AccelByteSDK_Leaderboard.LeaderboardConfigurationV3AdminApi(sdk, { axiosConfig: { request: { headers: { Authorization: 'Bearer {access_token}' } } } })
  .getLeaderboards_v3( queryParams?: {
             isDeleted?: boolean | null,
             limit?: number,
             offset?: number
    })

// return Promise<GetAllLeaderboardConfigsRespV3>

</script>
```

## POST /leaderboard/v3/admin/namespaces/{namespace}/leaderboards

```
<script src="https://unpkg.com/@accelbyte/sdk/dist/global/index.global.js"></script>
<script src="https://unpkg.com/@accelbyte/sdk-leaderboard/dist/global/index.global.js"></script>
  
<script>

const sdk = AccelByteSDK.AccelByte.SDK({
  coreConfig: {
    baseURL: '__AGS_DOMAIN__',
    clientId: '__IAM_CLIENT_ID__',
    namespace: '__NAMESPACE__',
    redirectURI: '__IAM_CLIENT_REDIRECT_URI__'
  }
})

AccelByteSDK_Leaderboard.LeaderboardConfigurationV3AdminApi(sdk, { axiosConfig: { request: { headers: { Authorization: 'Bearer {access_token}' } } } })
  .createLeaderboard_v3(data: {
             LeaderboardConfigReqV3
    })

// return Promise<GetLeaderboardConfigRespV3>

</script>
```

## DELETE /leaderboard/v1/admin/namespaces/{namespace}/users/{userId}

```
<script src="https://unpkg.com/@accelbyte/sdk/dist/global/index.global.js"></script>
<script src="https://unpkg.com/@accelbyte/sdk-leaderboard/dist/global/index.global.js"></script>
  
<script>

const sdk = AccelByteSDK.AccelByte.SDK({
  coreConfig: {
    baseURL: '__AGS_DOMAIN__',
    clientId: '__IAM_CLIENT_ID__',
    namespace: '__NAMESPACE__',
    redirectURI: '__IAM_CLIENT_REDIRECT_URI__'
  }
})

AccelByteSDK_Leaderboard.LeaderboardDataAdminApi(sdk, { axiosConfig: { request: { headers: { Authorization: 'Bearer {access_token}' } } } })
  .deleteUser_ByUserId(userId:string,  queryParams: {
             leaderboardCode: string[]
    })

// return Promise

</script>
```

## DELETE /leaderboard/v3/admin/namespaces/{namespace}/users/{userId}

```
<script src="https://unpkg.com/@accelbyte/sdk/dist/global/index.global.js"></script>
<script src="https://unpkg.com/@accelbyte/sdk-leaderboard/dist/global/index.global.js"></script>
  
<script>

const sdk = AccelByteSDK.AccelByte.SDK({
  coreConfig: {
    baseURL: '__AGS_DOMAIN__',
    clientId: '__IAM_CLIENT_ID__',
    namespace: '__NAMESPACE__',
    redirectURI: '__IAM_CLIENT_REDIRECT_URI__'
  }
})

AccelByteSDK_Leaderboard.LeaderboardDataV3AdminApi(sdk, { axiosConfig: { request: { headers: { Authorization: 'Bearer {access_token}' } } } })
  .deleteUser_ByUserId_v3(userId:string,  queryParams: {
             leaderboardCode: string[]
    })

// return Promise

</script>
```

## POST /leaderboard/v1/admin/namespaces/{namespace}/leaderboards/delete

```
<script src="https://unpkg.com/@accelbyte/sdk/dist/global/index.global.js"></script>
<script src="https://unpkg.com/@accelbyte/sdk-leaderboard/dist/global/index.global.js"></script>
  
<script>

const sdk = AccelByteSDK.AccelByte.SDK({
  coreConfig: {
    baseURL: '__AGS_DOMAIN__',
    clientId: '__IAM_CLIENT_ID__',
    namespace: '__NAMESPACE__',
    redirectURI: '__IAM_CLIENT_REDIRECT_URI__'
  }
})

AccelByteSDK_Leaderboard.LeaderboardConfigurationAdminApi(sdk, { axiosConfig: { request: { headers: { Authorization: 'Bearer {access_token}' } } } })
  .createLeaderboardDelete(data: {
             DeleteBulkLeaderboardsReq
    })

// return Promise<DeleteBulkLeaderboardsResp>

</script>
```

## POST /leaderboard/v3/admin/namespaces/{namespace}/leaderboards/delete

```
<script src="https://unpkg.com/@accelbyte/sdk/dist/global/index.global.js"></script>
<script src="https://unpkg.com/@accelbyte/sdk-leaderboard/dist/global/index.global.js"></script>
  
<script>

const sdk = AccelByteSDK.AccelByte.SDK({
  coreConfig: {
    baseURL: '__AGS_DOMAIN__',
    clientId: '__IAM_CLIENT_ID__',
    namespace: '__NAMESPACE__',
    redirectURI: '__IAM_CLIENT_REDIRECT_URI__'
  }
})

AccelByteSDK_Leaderboard.LeaderboardConfigurationV3AdminApi(sdk, { axiosConfig: { request: { headers: { Authorization: 'Bearer {access_token}' } } } })
  .createLeaderboardDelete_v3(data: {
             DeleteBulkLeaderboardsReq
    })

// return Promise<DeleteBulkLeaderboardsResp>

</script>
```

## GET /leaderboard/v1/admin/namespaces/{namespace}/leaderboards/archived

```
<script src="https://unpkg.com/@accelbyte/sdk/dist/global/index.global.js"></script>
<script src="https://unpkg.com/@accelbyte/sdk-leaderboard/dist/global/index.global.js"></script>
  
<script>

const sdk = AccelByteSDK.AccelByte.SDK({
  coreConfig: {
    baseURL: '__AGS_DOMAIN__',
    clientId: '__IAM_CLIENT_ID__',
    namespace: '__NAMESPACE__',
    redirectURI: '__IAM_CLIENT_REDIRECT_URI__'
  }
})

AccelByteSDK_Leaderboard.LeaderboardDataAdminApi(sdk, { axiosConfig: { request: { headers: { Authorization: 'Bearer {access_token}' } } } })
  .getLeaderboardsArchived( queryParams: {
             leaderboardCodes: string | null,
             slug?: string | null
    })

// return Promise<ArchiveLeaderboardSignedUrlResponseArray>

</script>
```

## POST /leaderboard/v1/admin/namespaces/{namespace}/leaderboards/archived

```
<script src="https://unpkg.com/@accelbyte/sdk/dist/global/index.global.js"></script>
<script src="https://unpkg.com/@accelbyte/sdk-leaderboard/dist/global/index.global.js"></script>
  
<script>

const sdk = AccelByteSDK.AccelByte.SDK({
  coreConfig: {
    baseURL: '__AGS_DOMAIN__',
    clientId: '__IAM_CLIENT_ID__',
    namespace: '__NAMESPACE__',
    redirectURI: '__IAM_CLIENT_REDIRECT_URI__'
  }
})

AccelByteSDK_Leaderboard.LeaderboardDataAdminApi(sdk, { axiosConfig: { request: { headers: { Authorization: 'Bearer {access_token}' } } } })
  .createLeaderboardArchived(data: {
             ArchiveLeaderboardReq
    })

// return Promise

</script>
```

## PUT /leaderboard/v2/admin/namespaces/{namespace}/users/{userId}/visibility

```
<script src="https://unpkg.com/@accelbyte/sdk/dist/global/index.global.js"></script>
<script src="https://unpkg.com/@accelbyte/sdk-leaderboard/dist/global/index.global.js"></script>
  
<script>

const sdk = AccelByteSDK.AccelByte.SDK({
  coreConfig: {
    baseURL: '__AGS_DOMAIN__',
    clientId: '__IAM_CLIENT_ID__',
    namespace: '__NAMESPACE__',
    redirectURI: '__IAM_CLIENT_REDIRECT_URI__'
  }
})

AccelByteSDK_Leaderboard.UserVisibilityAdminApi(sdk, { axiosConfig: { request: { headers: { Authorization: 'Bearer {access_token}' } } } })
  .updateVisibility_ByUserId_v2(userId:string, data: {
             SetUserVisibilityRequest
    })

// return Promise<GetUserVisibilityResponse>

</script>
```

## PUT /leaderboard/v3/admin/namespaces/{namespace}/users/{userId}/visibility

```
<script src="https://unpkg.com/@accelbyte/sdk/dist/global/index.global.js"></script>
<script src="https://unpkg.com/@accelbyte/sdk-leaderboard/dist/global/index.global.js"></script>
  
<script>

const sdk = AccelByteSDK.AccelByte.SDK({
  coreConfig: {
    baseURL: '__AGS_DOMAIN__',
    clientId: '__IAM_CLIENT_ID__',
    namespace: '__NAMESPACE__',
    redirectURI: '__IAM_CLIENT_REDIRECT_URI__'
  }
})

AccelByteSDK_Leaderboard.UserVisibilityV3AdminApi(sdk, { axiosConfig: { request: { headers: { Authorization: 'Bearer {access_token}' } } } })
  .updateVisibility_ByUserId_v3(userId:string, data: {
             SetUserVisibilityRequest
    })

// return Promise<GetUserVisibilityResponse>

</script>
```

## GET /leaderboard/v1/admin/namespaces/{namespace}/users/{userId}/leaderboards

```
<script src="https://unpkg.com/@accelbyte/sdk/dist/global/index.global.js"></script>
<script src="https://unpkg.com/@accelbyte/sdk-leaderboard/dist/global/index.global.js"></script>
  
<script>

const sdk = AccelByteSDK.AccelByte.SDK({
  coreConfig: {
    baseURL: '__AGS_DOMAIN__',
    clientId: '__IAM_CLIENT_ID__',
    namespace: '__NAMESPACE__',
    redirectURI: '__IAM_CLIENT_REDIRECT_URI__'
  }
})

AccelByteSDK_Leaderboard.UserDataAdminApi(sdk, { axiosConfig: { request: { headers: { Authorization: 'Bearer {access_token}' } } } })
  .getLeaderboards_ByUserId(userId:string,  queryParams?: {
             limit?: number,
             offset?: number,
             previousVersion?: number
    })

// return Promise<GetAllUserLeaderboardsResp>

</script>
```

## GET /leaderboard/v3/admin/namespaces/{namespace}/users/{userId}/leaderboards

```
<script src="https://unpkg.com/@accelbyte/sdk/dist/global/index.global.js"></script>
<script src="https://unpkg.com/@accelbyte/sdk-leaderboard/dist/global/index.global.js"></script>
  
<script>

const sdk = AccelByteSDK.AccelByte.SDK({
  coreConfig: {
    baseURL: '__AGS_DOMAIN__',
    clientId: '__IAM_CLIENT_ID__',
    namespace: '__NAMESPACE__',
    redirectURI: '__IAM_CLIENT_REDIRECT_URI__'
  }
})

AccelByteSDK_Leaderboard.UserDataV3AdminApi(sdk, { axiosConfig: { request: { headers: { Authorization: 'Bearer {access_token}' } } } })
  .getLeaderboards_ByUserId_v3(userId:string,  queryParams?: {
             limit?: number,
             offset?: number
    })

// return Promise<GetAllUserLeaderboardsRespV3>

</script>
```

## DELETE /leaderboard/v1/admin/namespaces/{namespace}/leaderboards/{leaderboardCode}

```
<script src="https://unpkg.com/@accelbyte/sdk/dist/global/index.global.js"></script>
<script src="https://unpkg.com/@accelbyte/sdk-leaderboard/dist/global/index.global.js"></script>
  
<script>

const sdk = AccelByteSDK.AccelByte.SDK({
  coreConfig: {
    baseURL: '__AGS_DOMAIN__',
    clientId: '__IAM_CLIENT_ID__',
    namespace: '__NAMESPACE__',
    redirectURI: '__IAM_CLIENT_REDIRECT_URI__'
  }
})

AccelByteSDK_Leaderboard.LeaderboardConfigurationAdminApi(sdk, { axiosConfig: { request: { headers: { Authorization: 'Bearer {access_token}' } } } })
  .deleteLeaderboard_ByLeaderboardCode(leaderboardCode:string)

// return Promise

</script>
```

## GET /leaderboard/v1/admin/namespaces/{namespace}/leaderboards/{leaderboardCode}

```
<script src="https://unpkg.com/@accelbyte/sdk/dist/global/index.global.js"></script>
<script src="https://unpkg.com/@accelbyte/sdk-leaderboard/dist/global/index.global.js"></script>
  
<script>

const sdk = AccelByteSDK.AccelByte.SDK({
  coreConfig: {
    baseURL: '__AGS_DOMAIN__',
    clientId: '__IAM_CLIENT_ID__',
    namespace: '__NAMESPACE__',
    redirectURI: '__IAM_CLIENT_REDIRECT_URI__'
  }
})

AccelByteSDK_Leaderboard.LeaderboardConfigurationAdminApi(sdk, { axiosConfig: { request: { headers: { Authorization: 'Bearer {access_token}' } } } })
  .getLeaderboard_ByLeaderboardCode(leaderboardCode:string)

// return Promise<GetLeaderboardConfigResp>

</script>
```

## PUT /leaderboard/v1/admin/namespaces/{namespace}/leaderboards/{leaderboardCode}

```
<script src="https://unpkg.com/@accelbyte/sdk/dist/global/index.global.js"></script>
<script src="https://unpkg.com/@accelbyte/sdk-leaderboard/dist/global/index.global.js"></script>
  
<script>

const sdk = AccelByteSDK.AccelByte.SDK({
  coreConfig: {
    baseURL: '__AGS_DOMAIN__',
    clientId: '__IAM_CLIENT_ID__',
    namespace: '__NAMESPACE__',
    redirectURI: '__IAM_CLIENT_REDIRECT_URI__'
  }
})

AccelByteSDK_Leaderboard.LeaderboardConfigurationAdminApi(sdk, { axiosConfig: { request: { headers: { Authorization: 'Bearer {access_token}' } } } })
  .updateLeaderboard_ByLeaderboardCode(leaderboardCode:string, data: {
             UpdateLeaderboardConfigReq
    })

// return Promise<GetLeaderboardConfigResp>

</script>
```

## DELETE /leaderboard/v3/admin/namespaces/{namespace}/leaderboards/{leaderboardCode}

```
<script src="https://unpkg.com/@accelbyte/sdk/dist/global/index.global.js"></script>
<script src="https://unpkg.com/@accelbyte/sdk-leaderboard/dist/global/index.global.js"></script>
  
<script>

const sdk = AccelByteSDK.AccelByte.SDK({
  coreConfig: {
    baseURL: '__AGS_DOMAIN__',
    clientId: '__IAM_CLIENT_ID__',
    namespace: '__NAMESPACE__',
    redirectURI: '__IAM_CLIENT_REDIRECT_URI__'
  }
})

AccelByteSDK_Leaderboard.LeaderboardConfigurationV3AdminApi(sdk, { axiosConfig: { request: { headers: { Authorization: 'Bearer {access_token}' } } } })
  .deleteLeaderboard_ByLeaderboardCode_v3(leaderboardCode:string)

// return Promise

</script>
```

## GET /leaderboard/v3/admin/namespaces/{namespace}/leaderboards/{leaderboardCode}

```
<script src="https://unpkg.com/@accelbyte/sdk/dist/global/index.global.js"></script>
<script src="https://unpkg.com/@accelbyte/sdk-leaderboard/dist/global/index.global.js"></script>
  
<script>

const sdk = AccelByteSDK.AccelByte.SDK({
  coreConfig: {
    baseURL: '__AGS_DOMAIN__',
    clientId: '__IAM_CLIENT_ID__',
    namespace: '__NAMESPACE__',
    redirectURI: '__IAM_CLIENT_REDIRECT_URI__'
  }
})

AccelByteSDK_Leaderboard.LeaderboardConfigurationV3AdminApi(sdk, { axiosConfig: { request: { headers: { Authorization: 'Bearer {access_token}' } } } })
  .getLeaderboard_ByLeaderboardCode_v3(leaderboardCode:string)

// return Promise<GetLeaderboardConfigRespV3>

</script>
```

## PUT /leaderboard/v3/admin/namespaces/{namespace}/leaderboards/{leaderboardCode}

```
<script src="https://unpkg.com/@accelbyte/sdk/dist/global/index.global.js"></script>
<script src="https://unpkg.com/@accelbyte/sdk-leaderboard/dist/global/index.global.js"></script>
  
<script>

const sdk = AccelByteSDK.AccelByte.SDK({
  coreConfig: {
    baseURL: '__AGS_DOMAIN__',
    clientId: '__IAM_CLIENT_ID__',
    namespace: '__NAMESPACE__',
    redirectURI: '__IAM_CLIENT_REDIRECT_URI__'
  }
})

AccelByteSDK_Leaderboard.LeaderboardConfigurationV3AdminApi(sdk, { axiosConfig: { request: { headers: { Authorization: 'Bearer {access_token}' } } } })
  .updateLeaderboard_ByLeaderboardCode_v3(leaderboardCode:string, data: {
             UpdateLeaderboardConfigReqV3
    })

// return Promise<GetLeaderboardConfigRespV3>

</script>
```

## DELETE /leaderboard/v1/admin/namespaces/{namespace}/leaderboards/{leaderboardCode}/hard

```
<script src="https://unpkg.com/@accelbyte/sdk/dist/global/index.global.js"></script>
<script src="https://unpkg.com/@accelbyte/sdk-leaderboard/dist/global/index.global.js"></script>
  
<script>

const sdk = AccelByteSDK.AccelByte.SDK({
  coreConfig: {
    baseURL: '__AGS_DOMAIN__',
    clientId: '__IAM_CLIENT_ID__',
    namespace: '__NAMESPACE__',
    redirectURI: '__IAM_CLIENT_REDIRECT_URI__'
  }
})

AccelByteSDK_Leaderboard.LeaderboardConfigurationAdminApi(sdk, { axiosConfig: { request: { headers: { Authorization: 'Bearer {access_token}' } } } })
  .deleteHard_ByLeaderboardCode(leaderboardCode:string)

// return Promise

</script>
```

## GET /leaderboard/v1/admin/namespaces/{namespace}/leaderboards/{leaderboardCode}/week

```
<script src="https://unpkg.com/@accelbyte/sdk/dist/global/index.global.js"></script>
<script src="https://unpkg.com/@accelbyte/sdk-leaderboard/dist/global/index.global.js"></script>
  
<script>

const sdk = AccelByteSDK.AccelByte.SDK({
  coreConfig: {
    baseURL: '__AGS_DOMAIN__',
    clientId: '__IAM_CLIENT_ID__',
    namespace: '__NAMESPACE__',
    redirectURI: '__IAM_CLIENT_REDIRECT_URI__'
  }
})

AccelByteSDK_Leaderboard.LeaderboardDataAdminApi(sdk, { axiosConfig: { request: { headers: { Authorization: 'Bearer {access_token}' } } } })
  .getWeek_ByLeaderboardCode(leaderboardCode:string,  queryParams?: {
             limit?: number,
             offset?: number,
             previousVersion?: number
    })

// return Promise<GetLeaderboardRankingResp>

</script>
```

## DELETE /leaderboard/v3/admin/namespaces/{namespace}/leaderboards/{leaderboardCode}/hard

```
<script src="https://unpkg.com/@accelbyte/sdk/dist/global/index.global.js"></script>
<script src="https://unpkg.com/@accelbyte/sdk-leaderboard/dist/global/index.global.js"></script>
  
<script>

const sdk = AccelByteSDK.AccelByte.SDK({
  coreConfig: {
    baseURL: '__AGS_DOMAIN__',
    clientId: '__IAM_CLIENT_ID__',
    namespace: '__NAMESPACE__',
    redirectURI: '__IAM_CLIENT_REDIRECT_URI__'
  }
})

AccelByteSDK_Leaderboard.LeaderboardConfigurationV3AdminApi(sdk, { axiosConfig: { request: { headers: { Authorization: 'Bearer {access_token}' } } } })
  .deleteHard_ByLeaderboardCode_v3(leaderboardCode:string)

// return Promise

</script>
```

## GET /leaderboard/v1/admin/namespaces/{namespace}/leaderboards/{leaderboardCode}/month

```
<script src="https://unpkg.com/@accelbyte/sdk/dist/global/index.global.js"></script>
<script src="https://unpkg.com/@accelbyte/sdk-leaderboard/dist/global/index.global.js"></script>
  
<script>

const sdk = AccelByteSDK.AccelByte.SDK({
  coreConfig: {
    baseURL: '__AGS_DOMAIN__',
    clientId: '__IAM_CLIENT_ID__',
    namespace: '__NAMESPACE__',
    redirectURI: '__IAM_CLIENT_REDIRECT_URI__'
  }
})

AccelByteSDK_Leaderboard.LeaderboardDataAdminApi(sdk, { axiosConfig: { request: { headers: { Authorization: 'Bearer {access_token}' } } } })
  .getMonth_ByLeaderboardCode(leaderboardCode:string,  queryParams?: {
             limit?: number,
             offset?: number,
             previousVersion?: number
    })

// return Promise<GetLeaderboardRankingResp>

</script>
```

## DELETE /leaderboard/v1/admin/namespaces/{namespace}/leaderboards/{leaderboardCode}/reset

```
<script src="https://unpkg.com/@accelbyte/sdk/dist/global/index.global.js"></script>
<script src="https://unpkg.com/@accelbyte/sdk-leaderboard/dist/global/index.global.js"></script>
  
<script>

const sdk = AccelByteSDK.AccelByte.SDK({
  coreConfig: {
    baseURL: '__AGS_DOMAIN__',
    clientId: '__IAM_CLIENT_ID__',
    namespace: '__NAMESPACE__',
    redirectURI: '__IAM_CLIENT_REDIRECT_URI__'
  }
})

AccelByteSDK_Leaderboard.LeaderboardDataAdminApi(sdk, { axiosConfig: { request: { headers: { Authorization: 'Bearer {access_token}' } } } })
  .deleteReset_ByLeaderboardCode(leaderboardCode:string)

// return Promise

</script>
```

## GET /leaderboard/v1/admin/namespaces/{namespace}/leaderboards/{leaderboardCode}/today

```
<script src="https://unpkg.com/@accelbyte/sdk/dist/global/index.global.js"></script>
<script src="https://unpkg.com/@accelbyte/sdk-leaderboard/dist/global/index.global.js"></script>
  
<script>

const sdk = AccelByteSDK.AccelByte.SDK({
  coreConfig: {
    baseURL: '__AGS_DOMAIN__',
    clientId: '__IAM_CLIENT_ID__',
    namespace: '__NAMESPACE__',
    redirectURI: '__IAM_CLIENT_REDIRECT_URI__'
  }
})

AccelByteSDK_Leaderboard.LeaderboardDataAdminApi(sdk, { axiosConfig: { request: { headers: { Authorization: 'Bearer {access_token}' } } } })
  .getToday_ByLeaderboardCode(leaderboardCode:string,  queryParams?: {
             limit?: number,
             offset?: number,
             previousVersion?: number
    })

// return Promise<GetLeaderboardRankingResp>

</script>
```

## DELETE /leaderboard/v3/admin/namespaces/{namespace}/leaderboards/{leaderboardCode}/reset

```
<script src="https://unpkg.com/@accelbyte/sdk/dist/global/index.global.js"></script>
<script src="https://unpkg.com/@accelbyte/sdk-leaderboard/dist/global/index.global.js"></script>
  
<script>

const sdk = AccelByteSDK.AccelByte.SDK({
  coreConfig: {
    baseURL: '__AGS_DOMAIN__',
    clientId: '__IAM_CLIENT_ID__',
    namespace: '__NAMESPACE__',
    redirectURI: '__IAM_CLIENT_REDIRECT_URI__'
  }
})

AccelByteSDK_Leaderboard.LeaderboardDataV3AdminApi(sdk, { axiosConfig: { request: { headers: { Authorization: 'Bearer {access_token}' } } } })
  .deleteReset_ByLeaderboardCode_v3(leaderboardCode:string)

// return Promise

</script>
```

## GET /leaderboard/v1/admin/namespaces/{namespace}/leaderboards/{leaderboardCode}/season

```
<script src="https://unpkg.com/@accelbyte/sdk/dist/global/index.global.js"></script>
<script src="https://unpkg.com/@accelbyte/sdk-leaderboard/dist/global/index.global.js"></script>
  
<script>

const sdk = AccelByteSDK.AccelByte.SDK({
  coreConfig: {
    baseURL: '__AGS_DOMAIN__',
    clientId: '__IAM_CLIENT_ID__',
    namespace: '__NAMESPACE__',
    redirectURI: '__IAM_CLIENT_REDIRECT_URI__'
  }
})

AccelByteSDK_Leaderboard.LeaderboardDataAdminApi(sdk, { axiosConfig: { request: { headers: { Authorization: 'Bearer {access_token}' } } } })
  .getSeason_ByLeaderboardCode(leaderboardCode:string,  queryParams?: {
             limit?: number,
             offset?: number,
             previousVersion?: number
    })

// return Promise<GetLeaderboardRankingResp>

</script>
```

## GET /leaderboard/v1/admin/namespaces/{namespace}/leaderboards/{leaderboardCode}/alltime

```
<script src="https://unpkg.com/@accelbyte/sdk/dist/global/index.global.js"></script>
<script src="https://unpkg.com/@accelbyte/sdk-leaderboard/dist/global/index.global.js"></script>
  
<script>

const sdk = AccelByteSDK.AccelByte.SDK({
  coreConfig: {
    baseURL: '__AGS_DOMAIN__',
    clientId: '__IAM_CLIENT_ID__',
    namespace: '__NAMESPACE__',
    redirectURI: '__IAM_CLIENT_REDIRECT_URI__'
  }
})

AccelByteSDK_Leaderboard.LeaderboardDataAdminApi(sdk, { axiosConfig: { request: { headers: { Authorization: 'Bearer {access_token}' } } } })
  .getAlltime_ByLeaderboardCode(leaderboardCode:string,  queryParams?: {
             limit?: number,
             offset?: number
    })

// return Promise<GetLeaderboardRankingResp>

</script>
```

## GET /leaderboard/v3/admin/namespaces/{namespace}/leaderboards/{leaderboardCode}/alltime

```
<script src="https://unpkg.com/@accelbyte/sdk/dist/global/index.global.js"></script>
<script src="https://unpkg.com/@accelbyte/sdk-leaderboard/dist/global/index.global.js"></script>
  
<script>

const sdk = AccelByteSDK.AccelByte.SDK({
  coreConfig: {
    baseURL: '__AGS_DOMAIN__',
    clientId: '__IAM_CLIENT_ID__',
    namespace: '__NAMESPACE__',
    redirectURI: '__IAM_CLIENT_REDIRECT_URI__'
  }
})

AccelByteSDK_Leaderboard.LeaderboardDataV3AdminApi(sdk, { axiosConfig: { request: { headers: { Authorization: 'Bearer {access_token}' } } } })
  .getAlltime_ByLeaderboardCode_v3(leaderboardCode:string,  queryParams?: {
             limit?: number,
             offset?: number
    })

// return Promise<GetLeaderboardRankingResp>

</script>
```

## DELETE /leaderboard/v1/admin/namespaces/{namespace}/users/{userId}/anonymization/leaderboards

```
<script src="https://unpkg.com/@accelbyte/sdk/dist/global/index.global.js"></script>
<script src="https://unpkg.com/@accelbyte/sdk-leaderboard/dist/global/index.global.js"></script>
  
<script>

const sdk = AccelByteSDK.AccelByte.SDK({
  coreConfig: {
    baseURL: '__AGS_DOMAIN__',
    clientId: '__IAM_CLIENT_ID__',
    namespace: '__NAMESPACE__',
    redirectURI: '__IAM_CLIENT_REDIRECT_URI__'
  }
})

AccelByteSDK_Leaderboard.AnonymizationAdminApi(sdk, { axiosConfig: { request: { headers: { Authorization: 'Bearer {access_token}' } } } })
  .deleteAnonymizationLeaderboard_ByUserId(userId:string)

// return Promise

</script>
```

## GET /leaderboard/v2/admin/namespaces/{namespace}/leaderboards/{leaderboardCode}/users/hidden

```
<script src="https://unpkg.com/@accelbyte/sdk/dist/global/index.global.js"></script>
<script src="https://unpkg.com/@accelbyte/sdk-leaderboard/dist/global/index.global.js"></script>
  
<script>

const sdk = AccelByteSDK.AccelByte.SDK({
  coreConfig: {
    baseURL: '__AGS_DOMAIN__',
    clientId: '__IAM_CLIENT_ID__',
    namespace: '__NAMESPACE__',
    redirectURI: '__IAM_CLIENT_REDIRECT_URI__'
  }
})

AccelByteSDK_Leaderboard.UserVisibilityAdminApi(sdk, { axiosConfig: { request: { headers: { Authorization: 'Bearer {access_token}' } } } })
  .getUsersHidden_ByLeaderboardCode_v2(leaderboardCode:string,  queryParams?: {
             limit?: number,
             offset?: number
    })

// return Promise<GetHiddenUserResponse>

</script>
```

## GET /leaderboard/v3/admin/namespaces/{namespace}/leaderboards/{leaderboardCode}/users/hidden

```
<script src="https://unpkg.com/@accelbyte/sdk/dist/global/index.global.js"></script>
<script src="https://unpkg.com/@accelbyte/sdk-leaderboard/dist/global/index.global.js"></script>
  
<script>

const sdk = AccelByteSDK.AccelByte.SDK({
  coreConfig: {
    baseURL: '__AGS_DOMAIN__',
    clientId: '__IAM_CLIENT_ID__',
    namespace: '__NAMESPACE__',
    redirectURI: '__IAM_CLIENT_REDIRECT_URI__'
  }
})

AccelByteSDK_Leaderboard.UserVisibilityV3AdminApi(sdk, { axiosConfig: { request: { headers: { Authorization: 'Bearer {access_token}' } } } })
  .getUsersHidden_ByLeaderboardCode_v3(leaderboardCode:string,  queryParams?: {
             limit?: number,
             offset?: number
    })

// return Promise<GetHiddenUserResponse>

</script>
```

## DELETE /leaderboard/v1/admin/namespaces/{namespace}/leaderboards/{leaderboardCode}/users/{userId}

```
<script src="https://unpkg.com/@accelbyte/sdk/dist/global/index.global.js"></script>
<script src="https://unpkg.com/@accelbyte/sdk-leaderboard/dist/global/index.global.js"></script>
  
<script>

const sdk = AccelByteSDK.AccelByte.SDK({
  coreConfig: {
    baseURL: '__AGS_DOMAIN__',
    clientId: '__IAM_CLIENT_ID__',
    namespace: '__NAMESPACE__',
    redirectURI: '__IAM_CLIENT_REDIRECT_URI__'
  }
})

AccelByteSDK_Leaderboard.LeaderboardDataAdminApi(sdk, { axiosConfig: { request: { headers: { Authorization: 'Bearer {access_token}' } } } })
  .deleteUser_ByLeaderboardCode_ByUserId(leaderboardCode:string, userId:string)

// return Promise

</script>
```

## GET /leaderboard/v1/admin/namespaces/{namespace}/leaderboards/{leaderboardCode}/users/{userId}

```
<script src="https://unpkg.com/@accelbyte/sdk/dist/global/index.global.js"></script>
<script src="https://unpkg.com/@accelbyte/sdk-leaderboard/dist/global/index.global.js"></script>
  
<script>

const sdk = AccelByteSDK.AccelByte.SDK({
  coreConfig: {
    baseURL: '__AGS_DOMAIN__',
    clientId: '__IAM_CLIENT_ID__',
    namespace: '__NAMESPACE__',
    redirectURI: '__IAM_CLIENT_REDIRECT_URI__'
  }
})

AccelByteSDK_Leaderboard.LeaderboardDataAdminApi(sdk, { axiosConfig: { request: { headers: { Authorization: 'Bearer {access_token}' } } } })
  .getUser_ByLeaderboardCode_ByUserId(leaderboardCode:string, userId:string,  queryParams?: {
             previousVersion?: number
    })

// return Promise<UserRankingResponse>

</script>
```

## PUT /leaderboard/v1/admin/namespaces/{namespace}/leaderboards/{leaderboardCode}/users/{userId}

```
<script src="https://unpkg.com/@accelbyte/sdk/dist/global/index.global.js"></script>
<script src="https://unpkg.com/@accelbyte/sdk-leaderboard/dist/global/index.global.js"></script>
  
<script>

const sdk = AccelByteSDK.AccelByte.SDK({
  coreConfig: {
    baseURL: '__AGS_DOMAIN__',
    clientId: '__IAM_CLIENT_ID__',
    namespace: '__NAMESPACE__',
    redirectURI: '__IAM_CLIENT_REDIRECT_URI__'
  }
})

AccelByteSDK_Leaderboard.LeaderboardDataAdminApi(sdk, { axiosConfig: { request: { headers: { Authorization: 'Bearer {access_token}' } } } })
  .updateUser_ByLeaderboardCode_ByUserId(leaderboardCode:string, userId:string, data: {
             UpdateUserPointAdminV1Request
    })

// return Promise<UpdateUserPointAdminV1Response>

</script>
```

## DELETE /leaderboard/v3/admin/namespaces/{namespace}/leaderboards/{leaderboardCode}/users/{userId}

```
<script src="https://unpkg.com/@accelbyte/sdk/dist/global/index.global.js"></script>
<script src="https://unpkg.com/@accelbyte/sdk-leaderboard/dist/global/index.global.js"></script>
  
<script>

const sdk = AccelByteSDK.AccelByte.SDK({
  coreConfig: {
    baseURL: '__AGS_DOMAIN__',
    clientId: '__IAM_CLIENT_ID__',
    namespace: '__NAMESPACE__',
    redirectURI: '__IAM_CLIENT_REDIRECT_URI__'
  }
})

AccelByteSDK_Leaderboard.LeaderboardDataV3AdminApi(sdk, { axiosConfig: { request: { headers: { Authorization: 'Bearer {access_token}' } } } })
  .deleteUser_ByLeaderboardCode_ByUserId_v3(leaderboardCode:string, userId:string)

// return Promise

</script>
```

## GET /leaderboard/v3/admin/namespaces/{namespace}/leaderboards/{leaderboardCode}/users/{userId}

```
<script src="https://unpkg.com/@accelbyte/sdk/dist/global/index.global.js"></script>
<script src="https://unpkg.com/@accelbyte/sdk-leaderboard/dist/global/index.global.js"></script>
  
<script>

const sdk = AccelByteSDK.AccelByte.SDK({
  coreConfig: {
    baseURL: '__AGS_DOMAIN__',
    clientId: '__IAM_CLIENT_ID__',
    namespace: '__NAMESPACE__',
    redirectURI: '__IAM_CLIENT_REDIRECT_URI__'
  }
})

AccelByteSDK_Leaderboard.LeaderboardDataV3AdminApi(sdk, { axiosConfig: { request: { headers: { Authorization: 'Bearer {access_token}' } } } })
  .getUser_ByLeaderboardCode_ByUserId_v3(leaderboardCode:string, userId:string)

// return Promise<UserRankingResponseV3>

</script>
```

## GET /leaderboard/v3/admin/namespaces/{namespace}/leaderboards/{leaderboardCode}/cycles/{cycleId}

```
<script src="https://unpkg.com/@accelbyte/sdk/dist/global/index.global.js"></script>
<script src="https://unpkg.com/@accelbyte/sdk-leaderboard/dist/global/index.global.js"></script>
  
<script>

const sdk = AccelByteSDK.AccelByte.SDK({
  coreConfig: {
    baseURL: '__AGS_DOMAIN__',
    clientId: '__IAM_CLIENT_ID__',
    namespace: '__NAMESPACE__',
    redirectURI: '__IAM_CLIENT_REDIRECT_URI__'
  }
})

AccelByteSDK_Leaderboard.LeaderboardDataV3AdminApi(sdk, { axiosConfig: { request: { headers: { Authorization: 'Bearer {access_token}' } } } })
  .getCycle_ByLeaderboardCode_ByCycleId_v3(leaderboardCode:string, cycleId:string,  queryParams?: {
             limit?: number,
             offset?: number
    })

// return Promise<GetLeaderboardRankingResp>

</script>
```

## DELETE /leaderboard/v3/admin/namespaces/{namespace}/leaderboards/{leaderboardCode}/cycles/{cycleId}/reset

```
<script src="https://unpkg.com/@accelbyte/sdk/dist/global/index.global.js"></script>
<script src="https://unpkg.com/@accelbyte/sdk-leaderboard/dist/global/index.global.js"></script>
  
<script>

const sdk = AccelByteSDK.AccelByte.SDK({
  coreConfig: {
    baseURL: '__AGS_DOMAIN__',
    clientId: '__IAM_CLIENT_ID__',
    namespace: '__NAMESPACE__',
    redirectURI: '__IAM_CLIENT_REDIRECT_URI__'
  }
})

AccelByteSDK_Leaderboard.LeaderboardDataV3AdminApi(sdk, { axiosConfig: { request: { headers: { Authorization: 'Bearer {access_token}' } } } })
  .deleteReset_ByLeaderboardCode_ByCycleId_v3(leaderboardCode:string, cycleId:string)

// return Promise

</script>
```

## GET /leaderboard/v2/admin/namespaces/{namespace}/leaderboards/{leaderboardCode}/users/{userId}/visibility

```
<script src="https://unpkg.com/@accelbyte/sdk/dist/global/index.global.js"></script>
<script src="https://unpkg.com/@accelbyte/sdk-leaderboard/dist/global/index.global.js"></script>
  
<script>

const sdk = AccelByteSDK.AccelByte.SDK({
  coreConfig: {
    baseURL: '__AGS_DOMAIN__',
    clientId: '__IAM_CLIENT_ID__',
    namespace: '__NAMESPACE__',
    redirectURI: '__IAM_CLIENT_REDIRECT_URI__'
  }
})

AccelByteSDK_Leaderboard.UserVisibilityAdminApi(sdk, { axiosConfig: { request: { headers: { Authorization: 'Bearer {access_token}' } } } })
  .getVisibility_ByLeaderboardCode_ByUserId_v2(leaderboardCode:string, userId:string)

// return Promise<GetUserVisibilityResponse>

</script>
```

## PUT /leaderboard/v2/admin/namespaces/{namespace}/leaderboards/{leaderboardCode}/users/{userId}/visibility

```
<script src="https://unpkg.com/@accelbyte/sdk/dist/global/index.global.js"></script>
<script src="https://unpkg.com/@accelbyte/sdk-leaderboard/dist/global/index.global.js"></script>
  
<script>

const sdk = AccelByteSDK.AccelByte.SDK({
  coreConfig: {
    baseURL: '__AGS_DOMAIN__',
    clientId: '__IAM_CLIENT_ID__',
    namespace: '__NAMESPACE__',
    redirectURI: '__IAM_CLIENT_REDIRECT_URI__'
  }
})

AccelByteSDK_Leaderboard.UserVisibilityAdminApi(sdk, { axiosConfig: { request: { headers: { Authorization: 'Bearer {access_token}' } } } })
  .updateVisibility_ByLeaderboardCode_ByUserId_v2(leaderboardCode:string, userId:string, data: {
             SetUserVisibilityRequest
    })

// return Promise<GetUserVisibilityResponse>

</script>
```

## GET /leaderboard/v3/admin/namespaces/{namespace}/leaderboards/{leaderboardCode}/users/{userId}/visibility

```
<script src="https://unpkg.com/@accelbyte/sdk/dist/global/index.global.js"></script>
<script src="https://unpkg.com/@accelbyte/sdk-leaderboard/dist/global/index.global.js"></script>
  
<script>

const sdk = AccelByteSDK.AccelByte.SDK({
  coreConfig: {
    baseURL: '__AGS_DOMAIN__',
    clientId: '__IAM_CLIENT_ID__',
    namespace: '__NAMESPACE__',
    redirectURI: '__IAM_CLIENT_REDIRECT_URI__'
  }
})

AccelByteSDK_Leaderboard.UserVisibilityV3AdminApi(sdk, { axiosConfig: { request: { headers: { Authorization: 'Bearer {access_token}' } } } })
  .getVisibility_ByLeaderboardCode_ByUserId_v3(leaderboardCode:string, userId:string)

// return Promise<GetUserVisibilityResponse>

</script>
```

## PUT /leaderboard/v3/admin/namespaces/{namespace}/leaderboards/{leaderboardCode}/users/{userId}/visibility

```
<script src="https://unpkg.com/@accelbyte/sdk/dist/global/index.global.js"></script>
<script src="https://unpkg.com/@accelbyte/sdk-leaderboard/dist/global/index.global.js"></script>
  
<script>

const sdk = AccelByteSDK.AccelByte.SDK({
  coreConfig: {
    baseURL: '__AGS_DOMAIN__',
    clientId: '__IAM_CLIENT_ID__',
    namespace: '__NAMESPACE__',
    redirectURI: '__IAM_CLIENT_REDIRECT_URI__'
  }
})

AccelByteSDK_Leaderboard.UserVisibilityV3AdminApi(sdk, { axiosConfig: { request: { headers: { Authorization: 'Bearer {access_token}' } } } })
  .updateVisibility_ByLeaderboardCode_ByUserId_v3(leaderboardCode:string, userId:string, data: {
             SetUserVisibilityRequest
    })

// return Promise<GetUserVisibilityResponse>

</script>
```

## DELETE /leaderboard/v3/admin/namespaces/{namespace}/leaderboards/{leaderboardCode}/cycles/{cycleId}/users/{userId}

```
<script src="https://unpkg.com/@accelbyte/sdk/dist/global/index.global.js"></script>
<script src="https://unpkg.com/@accelbyte/sdk-leaderboard/dist/global/index.global.js"></script>
  
<script>

const sdk = AccelByteSDK.AccelByte.SDK({
  coreConfig: {
    baseURL: '__AGS_DOMAIN__',
    clientId: '__IAM_CLIENT_ID__',
    namespace: '__NAMESPACE__',
    redirectURI: '__IAM_CLIENT_REDIRECT_URI__'
  }
})

AccelByteSDK_Leaderboard.LeaderboardDataV3AdminApi(sdk, { axiosConfig: { request: { headers: { Authorization: 'Bearer {access_token}' } } } })
  .deleteUser_ByLeaderboardCode_ByCycleId_ByUserId_v3(leaderboardCode:string, cycleId:string, userId:string)

// return Promise

</script>
```