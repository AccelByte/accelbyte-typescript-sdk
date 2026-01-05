## GET /challenge/v1/public/namespaces/{namespace}/challenges

```
<script src="https://unpkg.com/@accelbyte/sdk/dist/global/index.global.js"></script>
<script src="https://unpkg.com/@accelbyte/sdk-challenge/dist/global/index.global.js"></script>
  
<script>

const sdk = AccelByteSDK.AccelByte.SDK({
  coreConfig: {
    baseURL: '__AGS_DOMAIN__',
    clientId: '__IAM_CLIENT_ID__',
    namespace: '__NAMESPACE__',
    redirectURI: '__IAM_CLIENT_REDIRECT_URI__'
  }
})

AccelByteSDK_Challenge.ChallengeListApi(sdk, { axiosConfig: { request: { headers: { Authorization: 'Bearer {access_token}' } } } })
  .getChallenges( queryParams?: {
             limit?: number,
             offset?: number,
             sortBy?: 'createdAt' | 'createdAt:asc' | 'createdAt:desc' | 'updatedAt' | 'updatedAt:asc' | 'updatedAt:desc',
             status?: 'INIT' | 'RETIRED' | 'TIED'
    })

// return Promise<ListChallengeResponse>

</script>
```

## GET /challenge/v1/public/namespaces/{namespace}/users/me/rewards

```
<script src="https://unpkg.com/@accelbyte/sdk/dist/global/index.global.js"></script>
<script src="https://unpkg.com/@accelbyte/sdk-challenge/dist/global/index.global.js"></script>
  
<script>

const sdk = AccelByteSDK.AccelByte.SDK({
  coreConfig: {
    baseURL: '__AGS_DOMAIN__',
    clientId: '__IAM_CLIENT_ID__',
    namespace: '__NAMESPACE__',
    redirectURI: '__IAM_CLIENT_REDIRECT_URI__'
  }
})

AccelByteSDK_Challenge.PlayerRewardApi(sdk, { axiosConfig: { request: { headers: { Authorization: 'Bearer {access_token}' } } } })
  .getUsersMeRewards( queryParams?: {
             challengeCode?: string | null,
             goalProgressionId?: string | null,
             limit?: number,
             offset?: number,
             sortBy?: 'createdAt' | 'createdAt:asc' | 'createdAt:desc' | 'updatedAt' | 'updatedAt:asc' | 'updatedAt:desc',
             status?: 'CLAIMED' | 'UNCLAIMED'
    })

// return Promise<ListUserRewardsResponse>

</script>
```

## POST /challenge/v1/public/namespaces/{namespace}/users/me/rewards/claim

```
<script src="https://unpkg.com/@accelbyte/sdk/dist/global/index.global.js"></script>
<script src="https://unpkg.com/@accelbyte/sdk-challenge/dist/global/index.global.js"></script>
  
<script>

const sdk = AccelByteSDK.AccelByte.SDK({
  coreConfig: {
    baseURL: '__AGS_DOMAIN__',
    clientId: '__IAM_CLIENT_ID__',
    namespace: '__NAMESPACE__',
    redirectURI: '__IAM_CLIENT_REDIRECT_URI__'
  }
})

AccelByteSDK_Challenge.PlayerRewardApi(sdk, { axiosConfig: { request: { headers: { Authorization: 'Bearer {access_token}' } } } })
  .updateUserMeRewardClaim(data: {
             ClaimUserRewardsReq
    })

// return Promise<UserRewardArray>

</script>
```

## POST /challenge/v1/public/namespaces/{namespace}/users/me/progress/evaluate

```
<script src="https://unpkg.com/@accelbyte/sdk/dist/global/index.global.js"></script>
<script src="https://unpkg.com/@accelbyte/sdk-challenge/dist/global/index.global.js"></script>
  
<script>

const sdk = AccelByteSDK.AccelByte.SDK({
  coreConfig: {
    baseURL: '__AGS_DOMAIN__',
    clientId: '__IAM_CLIENT_ID__',
    namespace: '__NAMESPACE__',
    redirectURI: '__IAM_CLIENT_REDIRECT_URI__'
  }
})

AccelByteSDK_Challenge.ChallengeProgressionApi(sdk, { axiosConfig: { request: { headers: { Authorization: 'Bearer {access_token}' } } } })
  .updateUserMeProgresEvaluate()

// return Promise

</script>
```

## GET /challenge/v1/public/namespaces/{namespace}/challenges/{challengeCode}/goals

```
<script src="https://unpkg.com/@accelbyte/sdk/dist/global/index.global.js"></script>
<script src="https://unpkg.com/@accelbyte/sdk-challenge/dist/global/index.global.js"></script>
  
<script>

const sdk = AccelByteSDK.AccelByte.SDK({
  coreConfig: {
    baseURL: '__AGS_DOMAIN__',
    clientId: '__IAM_CLIENT_ID__',
    namespace: '__NAMESPACE__',
    redirectURI: '__IAM_CLIENT_REDIRECT_URI__'
  }
})

AccelByteSDK_Challenge.ChallengeListApi(sdk, { axiosConfig: { request: { headers: { Authorization: 'Bearer {access_token}' } } } })
  .getGoals_ByChallengeCode(challengeCode:string,  queryParams?: {
             limit?: number,
             offset?: number,
             tags?: string[]
    })

// return Promise<GetGoalsResponse>

</script>
```

## GET /challenge/v1/public/namespaces/{namespace}/users/me/progress/{challengeCode}

```
<script src="https://unpkg.com/@accelbyte/sdk/dist/global/index.global.js"></script>
<script src="https://unpkg.com/@accelbyte/sdk-challenge/dist/global/index.global.js"></script>
  
<script>

const sdk = AccelByteSDK.AccelByte.SDK({
  coreConfig: {
    baseURL: '__AGS_DOMAIN__',
    clientId: '__IAM_CLIENT_ID__',
    namespace: '__NAMESPACE__',
    redirectURI: '__IAM_CLIENT_REDIRECT_URI__'
  }
})

AccelByteSDK_Challenge.ChallengeProgressionApi(sdk, { axiosConfig: { request: { headers: { Authorization: 'Bearer {access_token}' } } } })
  .getUserMeProgres_ByChallengeCode(challengeCode:string,  queryParams?: {
             dateTime?: string | null,
             goalCode?: string | null,
             limit?: number,
             offset?: number,
             tags?: string[]
    })

// return Promise<UserProgressionResponse>

</script>
```

## GET /challenge/v1/public/namespaces/{namespace}/challenges/{challengeCode}/schedules

```
<script src="https://unpkg.com/@accelbyte/sdk/dist/global/index.global.js"></script>
<script src="https://unpkg.com/@accelbyte/sdk-challenge/dist/global/index.global.js"></script>
  
<script>

const sdk = AccelByteSDK.AccelByte.SDK({
  coreConfig: {
    baseURL: '__AGS_DOMAIN__',
    clientId: '__IAM_CLIENT_ID__',
    namespace: '__NAMESPACE__',
    redirectURI: '__IAM_CLIENT_REDIRECT_URI__'
  }
})

AccelByteSDK_Challenge.SchedulesApi(sdk)
  .getSchedules_ByChallengeCode(challengeCode:string,  queryParams?: {
             dateTime?: string | null,
             limit?: number,
             offset?: number
    })

// return Promise<ListSchedulesResponse>

</script>
```

## GET /challenge/v1/public/namespaces/{namespace}/users/me/progress/{challengeCode}/index/{index}

```
<script src="https://unpkg.com/@accelbyte/sdk/dist/global/index.global.js"></script>
<script src="https://unpkg.com/@accelbyte/sdk-challenge/dist/global/index.global.js"></script>
  
<script>

const sdk = AccelByteSDK.AccelByte.SDK({
  coreConfig: {
    baseURL: '__AGS_DOMAIN__',
    clientId: '__IAM_CLIENT_ID__',
    namespace: '__NAMESPACE__',
    redirectURI: '__IAM_CLIENT_REDIRECT_URI__'
  }
})

AccelByteSDK_Challenge.ChallengeProgressionApi(sdk, { axiosConfig: { request: { headers: { Authorization: 'Bearer {access_token}' } } } })
  .getIndexMeUser_ByChallengeCode_ByIndex(challengeCode:string, index:number,  queryParams?: {
             goalCode?: string | null,
             limit?: number,
             offset?: number,
             tags?: string[]
    })

// return Promise<UserProgressionResponse>

</script>
```

## GET /challenge/v1/public/namespaces/{namespace}/challenges/{challengeCode}/goals/{code}/schedules

```
<script src="https://unpkg.com/@accelbyte/sdk/dist/global/index.global.js"></script>
<script src="https://unpkg.com/@accelbyte/sdk-challenge/dist/global/index.global.js"></script>
  
<script>

const sdk = AccelByteSDK.AccelByte.SDK({
  coreConfig: {
    baseURL: '__AGS_DOMAIN__',
    clientId: '__IAM_CLIENT_ID__',
    namespace: '__NAMESPACE__',
    redirectURI: '__IAM_CLIENT_REDIRECT_URI__'
  }
})

AccelByteSDK_Challenge.SchedulesApi(sdk)
  .getSchedules_ByChallengeCode_ByCode(challengeCode:string, code:string,  queryParams?: {
             limit?: number,
             offset?: number
    })

// return Promise<ListScheduleByGoalResponse>

</script>
```

## POST /challenge/v1/public/namespaces/{namespace}/users/me/challenges/{challengeCode}/rewards/claim

```
<script src="https://unpkg.com/@accelbyte/sdk/dist/global/index.global.js"></script>
<script src="https://unpkg.com/@accelbyte/sdk-challenge/dist/global/index.global.js"></script>
  
<script>

const sdk = AccelByteSDK.AccelByte.SDK({
  coreConfig: {
    baseURL: '__AGS_DOMAIN__',
    clientId: '__IAM_CLIENT_ID__',
    namespace: '__NAMESPACE__',
    redirectURI: '__IAM_CLIENT_REDIRECT_URI__'
  }
})

AccelByteSDK_Challenge.PlayerRewardApi(sdk, { axiosConfig: { request: { headers: { Authorization: 'Bearer {access_token}' } } } })
  .updateRewardClaimMeUser_ByChallengeCode(challengeCode:string, data: {
             ClaimUserRewardsByGoalCodeRequest
    })

// return Promise<UserRewardArray>

</script>
```

## GET /challenge/v1/admin/namespaces/{namespace}/challenges

```
<script src="https://unpkg.com/@accelbyte/sdk/dist/global/index.global.js"></script>
<script src="https://unpkg.com/@accelbyte/sdk-challenge/dist/global/index.global.js"></script>
  
<script>

const sdk = AccelByteSDK.AccelByte.SDK({
  coreConfig: {
    baseURL: '__AGS_DOMAIN__',
    clientId: '__IAM_CLIENT_ID__',
    namespace: '__NAMESPACE__',
    redirectURI: '__IAM_CLIENT_REDIRECT_URI__'
  }
})

AccelByteSDK_Challenge.ChallengeConfigurationAdminApi(sdk, { axiosConfig: { request: { headers: { Authorization: 'Bearer {access_token}' } } } })
  .getChallenges( queryParams?: {
             limit?: number,
             offset?: number,
             sortBy?: 'createdAt' | 'createdAt:asc' | 'createdAt:desc' | 'updatedAt' | 'updatedAt:asc' | 'updatedAt:desc',
             status?: 'INIT' | 'RETIRED' | 'TIED'
    })

// return Promise<ListChallengeResponse>

</script>
```

## POST /challenge/v1/admin/namespaces/{namespace}/challenges

```
<script src="https://unpkg.com/@accelbyte/sdk/dist/global/index.global.js"></script>
<script src="https://unpkg.com/@accelbyte/sdk-challenge/dist/global/index.global.js"></script>
  
<script>

const sdk = AccelByteSDK.AccelByte.SDK({
  coreConfig: {
    baseURL: '__AGS_DOMAIN__',
    clientId: '__IAM_CLIENT_ID__',
    namespace: '__NAMESPACE__',
    redirectURI: '__IAM_CLIENT_REDIRECT_URI__'
  }
})

AccelByteSDK_Challenge.ChallengeConfigurationAdminApi(sdk, { axiosConfig: { request: { headers: { Authorization: 'Bearer {access_token}' } } } })
  .createChallenge(data: {
             CreateChallengeRequest
    })

// return Promise<ChallengeResponse>

</script>
```

## POST /challenge/v1/admin/namespaces/{namespace}/progress/evaluate

```
<script src="https://unpkg.com/@accelbyte/sdk/dist/global/index.global.js"></script>
<script src="https://unpkg.com/@accelbyte/sdk-challenge/dist/global/index.global.js"></script>
  
<script>

const sdk = AccelByteSDK.AccelByte.SDK({
  coreConfig: {
    baseURL: '__AGS_DOMAIN__',
    clientId: '__IAM_CLIENT_ID__',
    namespace: '__NAMESPACE__',
    redirectURI: '__IAM_CLIENT_REDIRECT_URI__'
  }
})

AccelByteSDK_Challenge.ChallengeProgressionAdminApi(sdk, { axiosConfig: { request: { headers: { Authorization: 'Bearer {access_token}' } } } })
  .updateProgresEvaluate(data: {
             EvaluatePlayerProgressionRequest
    })

// return Promise

</script>
```

## DELETE /challenge/v1/admin/namespaces/{namespace}/plugins/assignment

```
<script src="https://unpkg.com/@accelbyte/sdk/dist/global/index.global.js"></script>
<script src="https://unpkg.com/@accelbyte/sdk-challenge/dist/global/index.global.js"></script>
  
<script>

const sdk = AccelByteSDK.AccelByte.SDK({
  coreConfig: {
    baseURL: '__AGS_DOMAIN__',
    clientId: '__IAM_CLIENT_ID__',
    namespace: '__NAMESPACE__',
    redirectURI: '__IAM_CLIENT_REDIRECT_URI__'
  }
})

AccelByteSDK_Challenge.PluginsAdminApi(sdk, { axiosConfig: { request: { headers: { Authorization: 'Bearer {access_token}' } } } })
  .deletePluginAssignment()

// return Promise

</script>
```

## GET /challenge/v1/admin/namespaces/{namespace}/plugins/assignment

```
<script src="https://unpkg.com/@accelbyte/sdk/dist/global/index.global.js"></script>
<script src="https://unpkg.com/@accelbyte/sdk-challenge/dist/global/index.global.js"></script>
  
<script>

const sdk = AccelByteSDK.AccelByte.SDK({
  coreConfig: {
    baseURL: '__AGS_DOMAIN__',
    clientId: '__IAM_CLIENT_ID__',
    namespace: '__NAMESPACE__',
    redirectURI: '__IAM_CLIENT_REDIRECT_URI__'
  }
})

AccelByteSDK_Challenge.PluginsAdminApi(sdk, { axiosConfig: { request: { headers: { Authorization: 'Bearer {access_token}' } } } })
  .getPluginsAssignment()

// return Promise<PluginAssignmentResponse>

</script>
```

## POST /challenge/v1/admin/namespaces/{namespace}/plugins/assignment

```
<script src="https://unpkg.com/@accelbyte/sdk/dist/global/index.global.js"></script>
<script src="https://unpkg.com/@accelbyte/sdk-challenge/dist/global/index.global.js"></script>
  
<script>

const sdk = AccelByteSDK.AccelByte.SDK({
  coreConfig: {
    baseURL: '__AGS_DOMAIN__',
    clientId: '__IAM_CLIENT_ID__',
    namespace: '__NAMESPACE__',
    redirectURI: '__IAM_CLIENT_REDIRECT_URI__'
  }
})

AccelByteSDK_Challenge.PluginsAdminApi(sdk, { axiosConfig: { request: { headers: { Authorization: 'Bearer {access_token}' } } } })
  .createPluginAssignment(data: {
             PluginAssignmentRequest
    })

// return Promise<PluginAssignmentResponse>

</script>
```

## PUT /challenge/v1/admin/namespaces/{namespace}/plugins/assignment

```
<script src="https://unpkg.com/@accelbyte/sdk/dist/global/index.global.js"></script>
<script src="https://unpkg.com/@accelbyte/sdk-challenge/dist/global/index.global.js"></script>
  
<script>

const sdk = AccelByteSDK.AccelByte.SDK({
  coreConfig: {
    baseURL: '__AGS_DOMAIN__',
    clientId: '__IAM_CLIENT_ID__',
    namespace: '__NAMESPACE__',
    redirectURI: '__IAM_CLIENT_REDIRECT_URI__'
  }
})

AccelByteSDK_Challenge.PluginsAdminApi(sdk, { axiosConfig: { request: { headers: { Authorization: 'Bearer {access_token}' } } } })
  .updatePluginAssignment(data: {
             PluginAssignmentRequest
    })

// return Promise<PluginAssignmentResponse>

</script>
```

## POST /challenge/v1/admin/namespaces/{namespace}/users/rewards/claim

```
<script src="https://unpkg.com/@accelbyte/sdk/dist/global/index.global.js"></script>
<script src="https://unpkg.com/@accelbyte/sdk-challenge/dist/global/index.global.js"></script>
  
<script>

const sdk = AccelByteSDK.AccelByte.SDK({
  coreConfig: {
    baseURL: '__AGS_DOMAIN__',
    clientId: '__IAM_CLIENT_ID__',
    namespace: '__NAMESPACE__',
    redirectURI: '__IAM_CLIENT_REDIRECT_URI__'
  }
})

AccelByteSDK_Challenge.PlayerRewardAdminApi(sdk, { axiosConfig: { request: { headers: { Authorization: 'Bearer {access_token}' } } } })
  .updateUserRewardClaim(data: {
             ClaimUsersRewardsRequest[]
    })

// return Promise<ClaimUsersRewardsResponseArray>

</script>
```

## GET /challenge/v1/admin/namespaces/{namespace}/users/{userId}/rewards

```
<script src="https://unpkg.com/@accelbyte/sdk/dist/global/index.global.js"></script>
<script src="https://unpkg.com/@accelbyte/sdk-challenge/dist/global/index.global.js"></script>
  
<script>

const sdk = AccelByteSDK.AccelByte.SDK({
  coreConfig: {
    baseURL: '__AGS_DOMAIN__',
    clientId: '__IAM_CLIENT_ID__',
    namespace: '__NAMESPACE__',
    redirectURI: '__IAM_CLIENT_REDIRECT_URI__'
  }
})

AccelByteSDK_Challenge.PlayerRewardAdminApi(sdk, { axiosConfig: { request: { headers: { Authorization: 'Bearer {access_token}' } } } })
  .getRewards_ByUserId(userId:string,  queryParams?: {
             challengeCode?: string | null,
             goalProgressionId?: string | null,
             limit?: number,
             offset?: number,
             sortBy?: 'createdAt' | 'createdAt:asc' | 'createdAt:desc' | 'updatedAt' | 'updatedAt:asc' | 'updatedAt:desc',
             status?: 'CLAIMED' | 'UNCLAIMED'
    })

// return Promise<ListUserRewardsResponse>

</script>
```

## GET /challenge/v1/admin/namespaces/{namespace}/challenges/users/{userId}

```
<script src="https://unpkg.com/@accelbyte/sdk/dist/global/index.global.js"></script>
<script src="https://unpkg.com/@accelbyte/sdk-challenge/dist/global/index.global.js"></script>
  
<script>

const sdk = AccelByteSDK.AccelByte.SDK({
  coreConfig: {
    baseURL: '__AGS_DOMAIN__',
    clientId: '__IAM_CLIENT_ID__',
    namespace: '__NAMESPACE__',
    redirectURI: '__IAM_CLIENT_REDIRECT_URI__'
  }
})

AccelByteSDK_Challenge.ChallengeConfigurationAdminApi(sdk, { axiosConfig: { request: { headers: { Authorization: 'Bearer {access_token}' } } } })
  .getChallengeUser_ByUserId(userId:string,  queryParams?: {
             limit?: number,
             offset?: number
    })

// return Promise<ListChallengeResponse>

</script>
```

## DELETE /challenge/v1/admin/namespaces/{namespace}/challenges/{challengeCode}

```
<script src="https://unpkg.com/@accelbyte/sdk/dist/global/index.global.js"></script>
<script src="https://unpkg.com/@accelbyte/sdk-challenge/dist/global/index.global.js"></script>
  
<script>

const sdk = AccelByteSDK.AccelByte.SDK({
  coreConfig: {
    baseURL: '__AGS_DOMAIN__',
    clientId: '__IAM_CLIENT_ID__',
    namespace: '__NAMESPACE__',
    redirectURI: '__IAM_CLIENT_REDIRECT_URI__'
  }
})

AccelByteSDK_Challenge.ChallengeConfigurationAdminApi(sdk, { axiosConfig: { request: { headers: { Authorization: 'Bearer {access_token}' } } } })
  .deleteChallenge_ByChallengeCode(challengeCode:string)

// return Promise

</script>
```

## GET /challenge/v1/admin/namespaces/{namespace}/challenges/{challengeCode}

```
<script src="https://unpkg.com/@accelbyte/sdk/dist/global/index.global.js"></script>
<script src="https://unpkg.com/@accelbyte/sdk-challenge/dist/global/index.global.js"></script>
  
<script>

const sdk = AccelByteSDK.AccelByte.SDK({
  coreConfig: {
    baseURL: '__AGS_DOMAIN__',
    clientId: '__IAM_CLIENT_ID__',
    namespace: '__NAMESPACE__',
    redirectURI: '__IAM_CLIENT_REDIRECT_URI__'
  }
})

AccelByteSDK_Challenge.ChallengeConfigurationAdminApi(sdk, { axiosConfig: { request: { headers: { Authorization: 'Bearer {access_token}' } } } })
  .getChallenge_ByChallengeCode(challengeCode:string)

// return Promise<ChallengeResponse>

</script>
```

## PUT /challenge/v1/admin/namespaces/{namespace}/challenges/{challengeCode}

```
<script src="https://unpkg.com/@accelbyte/sdk/dist/global/index.global.js"></script>
<script src="https://unpkg.com/@accelbyte/sdk-challenge/dist/global/index.global.js"></script>
  
<script>

const sdk = AccelByteSDK.AccelByte.SDK({
  coreConfig: {
    baseURL: '__AGS_DOMAIN__',
    clientId: '__IAM_CLIENT_ID__',
    namespace: '__NAMESPACE__',
    redirectURI: '__IAM_CLIENT_REDIRECT_URI__'
  }
})

AccelByteSDK_Challenge.ChallengeConfigurationAdminApi(sdk, { axiosConfig: { request: { headers: { Authorization: 'Bearer {access_token}' } } } })
  .updateChallenge_ByChallengeCode(challengeCode:string, data: {
             UpdateChallengeRequest
    })

// return Promise<ChallengeResponse>

</script>
```

## POST /challenge/v1/admin/namespaces/{namespace}/users/{userId}/rewards/claim

```
<script src="https://unpkg.com/@accelbyte/sdk/dist/global/index.global.js"></script>
<script src="https://unpkg.com/@accelbyte/sdk-challenge/dist/global/index.global.js"></script>
  
<script>

const sdk = AccelByteSDK.AccelByte.SDK({
  coreConfig: {
    baseURL: '__AGS_DOMAIN__',
    clientId: '__IAM_CLIENT_ID__',
    namespace: '__NAMESPACE__',
    redirectURI: '__IAM_CLIENT_REDIRECT_URI__'
  }
})

AccelByteSDK_Challenge.PlayerRewardAdminApi(sdk, { axiosConfig: { request: { headers: { Authorization: 'Bearer {access_token}' } } } })
  .updateRewardClaim_ByUserId(userId:string, data: {
             ClaimUserRewardsReq
    })

// return Promise<UserRewardArray>

</script>
```

## DELETE /challenge/v1/admin/namespaces/{namespace}/challenges/{challengeCode}/tied

```
<script src="https://unpkg.com/@accelbyte/sdk/dist/global/index.global.js"></script>
<script src="https://unpkg.com/@accelbyte/sdk-challenge/dist/global/index.global.js"></script>
  
<script>

const sdk = AccelByteSDK.AccelByte.SDK({
  coreConfig: {
    baseURL: '__AGS_DOMAIN__',
    clientId: '__IAM_CLIENT_ID__',
    namespace: '__NAMESPACE__',
    redirectURI: '__IAM_CLIENT_REDIRECT_URI__'
  }
})

AccelByteSDK_Challenge.ChallengeConfigurationAdminApi(sdk, { axiosConfig: { request: { headers: { Authorization: 'Bearer {access_token}' } } } })
  .deleteTied_ByChallengeCode(challengeCode:string)

// return Promise

</script>
```

## GET /challenge/v1/admin/namespaces/{namespace}/challenges/{challengeCode}/goals

```
<script src="https://unpkg.com/@accelbyte/sdk/dist/global/index.global.js"></script>
<script src="https://unpkg.com/@accelbyte/sdk-challenge/dist/global/index.global.js"></script>
  
<script>

const sdk = AccelByteSDK.AccelByte.SDK({
  coreConfig: {
    baseURL: '__AGS_DOMAIN__',
    clientId: '__IAM_CLIENT_ID__',
    namespace: '__NAMESPACE__',
    redirectURI: '__IAM_CLIENT_REDIRECT_URI__'
  }
})

AccelByteSDK_Challenge.GoalConfigurationAdminApi(sdk, { axiosConfig: { request: { headers: { Authorization: 'Bearer {access_token}' } } } })
  .getGoals_ByChallengeCode(challengeCode:string,  queryParams?: {
             limit?: number,
             offset?: number,
             sortBy?: 'createdAt' | 'createdAt:asc' | 'createdAt:desc' | 'updatedAt' | 'updatedAt:asc' | 'updatedAt:desc'
    })

// return Promise<GetGoalsResponse>

</script>
```

## POST /challenge/v1/admin/namespaces/{namespace}/challenges/{challengeCode}/goals

```
<script src="https://unpkg.com/@accelbyte/sdk/dist/global/index.global.js"></script>
<script src="https://unpkg.com/@accelbyte/sdk-challenge/dist/global/index.global.js"></script>
  
<script>

const sdk = AccelByteSDK.AccelByte.SDK({
  coreConfig: {
    baseURL: '__AGS_DOMAIN__',
    clientId: '__IAM_CLIENT_ID__',
    namespace: '__NAMESPACE__',
    redirectURI: '__IAM_CLIENT_REDIRECT_URI__'
  }
})

AccelByteSDK_Challenge.GoalConfigurationAdminApi(sdk, { axiosConfig: { request: { headers: { Authorization: 'Bearer {access_token}' } } } })
  .createGoal_ByChallengeCode(challengeCode:string, data: {
             CreateGoalRequest
    })

// return Promise<GoalResponse>

</script>
```

## GET /challenge/v1/admin/namespaces/{namespace}/challenges/{challengeCode}/periods

```
<script src="https://unpkg.com/@accelbyte/sdk/dist/global/index.global.js"></script>
<script src="https://unpkg.com/@accelbyte/sdk-challenge/dist/global/index.global.js"></script>
  
<script>

const sdk = AccelByteSDK.AccelByte.SDK({
  coreConfig: {
    baseURL: '__AGS_DOMAIN__',
    clientId: '__IAM_CLIENT_ID__',
    namespace: '__NAMESPACE__',
    redirectURI: '__IAM_CLIENT_REDIRECT_URI__'
  }
})

AccelByteSDK_Challenge.ChallengeConfigurationAdminApi(sdk, { axiosConfig: { request: { headers: { Authorization: 'Bearer {access_token}' } } } })
  .getPeriods_ByChallengeCode(challengeCode:string,  queryParams?: {
             limit?: number,
             offset?: number
    })

// return Promise<ListPeriodsResponse>

</script>
```

## POST /challenge/v1/admin/namespaces/{namespace}/challenges/{challengeCode}/randomize

```
<script src="https://unpkg.com/@accelbyte/sdk/dist/global/index.global.js"></script>
<script src="https://unpkg.com/@accelbyte/sdk-challenge/dist/global/index.global.js"></script>
  
<script>

const sdk = AccelByteSDK.AccelByte.SDK({
  coreConfig: {
    baseURL: '__AGS_DOMAIN__',
    clientId: '__IAM_CLIENT_ID__',
    namespace: '__NAMESPACE__',
    redirectURI: '__IAM_CLIENT_REDIRECT_URI__'
  }
})

AccelByteSDK_Challenge.ChallengeConfigurationAdminApi(sdk, { axiosConfig: { request: { headers: { Authorization: 'Bearer {access_token}' } } } })
  .updateRandomize_ByChallengeCode(challengeCode:string)

// return Promise<ScheduleArray>

</script>
```

## GET /challenge/v1/admin/namespaces/{namespace}/challenges/{challengeCode}/schedules

```
<script src="https://unpkg.com/@accelbyte/sdk/dist/global/index.global.js"></script>
<script src="https://unpkg.com/@accelbyte/sdk-challenge/dist/global/index.global.js"></script>
  
<script>

const sdk = AccelByteSDK.AccelByte.SDK({
  coreConfig: {
    baseURL: '__AGS_DOMAIN__',
    clientId: '__IAM_CLIENT_ID__',
    namespace: '__NAMESPACE__',
    redirectURI: '__IAM_CLIENT_REDIRECT_URI__'
  }
})

AccelByteSDK_Challenge.SchedulesAdminApi(sdk, { axiosConfig: { request: { headers: { Authorization: 'Bearer {access_token}' } } } })
  .getSchedules_ByChallengeCode(challengeCode:string,  queryParams?: {
             dateTime?: string | null,
             limit?: number,
             offset?: number,
             userId?: string | null
    })

// return Promise<ListSchedulesResponse>

</script>
```

## DELETE /challenge/v1/admin/namespaces/{namespace}/challenges/{challengeCode}/goals/{code}

```
<script src="https://unpkg.com/@accelbyte/sdk/dist/global/index.global.js"></script>
<script src="https://unpkg.com/@accelbyte/sdk-challenge/dist/global/index.global.js"></script>
  
<script>

const sdk = AccelByteSDK.AccelByte.SDK({
  coreConfig: {
    baseURL: '__AGS_DOMAIN__',
    clientId: '__IAM_CLIENT_ID__',
    namespace: '__NAMESPACE__',
    redirectURI: '__IAM_CLIENT_REDIRECT_URI__'
  }
})

AccelByteSDK_Challenge.GoalConfigurationAdminApi(sdk, { axiosConfig: { request: { headers: { Authorization: 'Bearer {access_token}' } } } })
  .deleteGoal_ByChallengeCode_ByCode(challengeCode:string, code:string)

// return Promise

</script>
```

## GET /challenge/v1/admin/namespaces/{namespace}/challenges/{challengeCode}/goals/{code}

```
<script src="https://unpkg.com/@accelbyte/sdk/dist/global/index.global.js"></script>
<script src="https://unpkg.com/@accelbyte/sdk-challenge/dist/global/index.global.js"></script>
  
<script>

const sdk = AccelByteSDK.AccelByte.SDK({
  coreConfig: {
    baseURL: '__AGS_DOMAIN__',
    clientId: '__IAM_CLIENT_ID__',
    namespace: '__NAMESPACE__',
    redirectURI: '__IAM_CLIENT_REDIRECT_URI__'
  }
})

AccelByteSDK_Challenge.GoalConfigurationAdminApi(sdk, { axiosConfig: { request: { headers: { Authorization: 'Bearer {access_token}' } } } })
  .getGoal_ByChallengeCode_ByCode(challengeCode:string, code:string)

// return Promise<GoalResponse>

</script>
```

## PUT /challenge/v1/admin/namespaces/{namespace}/challenges/{challengeCode}/goals/{code}

```
<script src="https://unpkg.com/@accelbyte/sdk/dist/global/index.global.js"></script>
<script src="https://unpkg.com/@accelbyte/sdk-challenge/dist/global/index.global.js"></script>
  
<script>

const sdk = AccelByteSDK.AccelByte.SDK({
  coreConfig: {
    baseURL: '__AGS_DOMAIN__',
    clientId: '__IAM_CLIENT_ID__',
    namespace: '__NAMESPACE__',
    redirectURI: '__IAM_CLIENT_REDIRECT_URI__'
  }
})

AccelByteSDK_Challenge.GoalConfigurationAdminApi(sdk, { axiosConfig: { request: { headers: { Authorization: 'Bearer {access_token}' } } } })
  .updateGoal_ByChallengeCode_ByCode(challengeCode:string, code:string, data: {
             UpdateGoalRequest
    })

// return Promise<GoalResponse>

</script>
```

## GET /challenge/v1/admin/namespaces/{namespace}/users/{userId}/progress/{challengeCode}

```
<script src="https://unpkg.com/@accelbyte/sdk/dist/global/index.global.js"></script>
<script src="https://unpkg.com/@accelbyte/sdk-challenge/dist/global/index.global.js"></script>
  
<script>

const sdk = AccelByteSDK.AccelByte.SDK({
  coreConfig: {
    baseURL: '__AGS_DOMAIN__',
    clientId: '__IAM_CLIENT_ID__',
    namespace: '__NAMESPACE__',
    redirectURI: '__IAM_CLIENT_REDIRECT_URI__'
  }
})

AccelByteSDK_Challenge.ChallengeProgressionAdminApi(sdk, { axiosConfig: { request: { headers: { Authorization: 'Bearer {access_token}' } } } })
  .getProgres_ByUserId_ByChallengeCode(userId:string, challengeCode:string,  queryParams?: {
             dateTime?: string | null,
             goalCode?: string | null,
             limit?: number,
             offset?: number,
             tags?: string[]
    })

// return Promise<UserProgressionResponse>

</script>
```

## PUT /challenge/v1/admin/namespaces/{namespace}/challenges/{challengeCode}/tied/schedule

```
<script src="https://unpkg.com/@accelbyte/sdk/dist/global/index.global.js"></script>
<script src="https://unpkg.com/@accelbyte/sdk-challenge/dist/global/index.global.js"></script>
  
<script>

const sdk = AccelByteSDK.AccelByte.SDK({
  coreConfig: {
    baseURL: '__AGS_DOMAIN__',
    clientId: '__IAM_CLIENT_ID__',
    namespace: '__NAMESPACE__',
    redirectURI: '__IAM_CLIENT_REDIRECT_URI__'
  }
})

AccelByteSDK_Challenge.ChallengeConfigurationAdminApi(sdk, { axiosConfig: { request: { headers: { Authorization: 'Bearer {access_token}' } } } })
  .updateTiedSchedule_ByChallengeCode(challengeCode:string, data: {
             UpdateChallengeScheduleRequest
    })

// return Promise<ChallengeResponse>

</script>
```

## GET /challenge/v1/admin/namespaces/{namespace}/challenges/{challengeCode}/goals/{code}/schedules

```
<script src="https://unpkg.com/@accelbyte/sdk/dist/global/index.global.js"></script>
<script src="https://unpkg.com/@accelbyte/sdk-challenge/dist/global/index.global.js"></script>
  
<script>

const sdk = AccelByteSDK.AccelByte.SDK({
  coreConfig: {
    baseURL: '__AGS_DOMAIN__',
    clientId: '__IAM_CLIENT_ID__',
    namespace: '__NAMESPACE__',
    redirectURI: '__IAM_CLIENT_REDIRECT_URI__'
  }
})

AccelByteSDK_Challenge.SchedulesAdminApi(sdk, { axiosConfig: { request: { headers: { Authorization: 'Bearer {access_token}' } } } })
  .getSchedules_ByChallengeCode_ByCode(challengeCode:string, code:string,  queryParams?: {
             limit?: number,
             offset?: number,
             userId?: string | null
    })

// return Promise<ListScheduleByGoalResponse>

</script>
```

## POST /challenge/v1/admin/namespaces/{namespace}/users/{userId}/challenges/{challengeCode}/rewards/claim

```
<script src="https://unpkg.com/@accelbyte/sdk/dist/global/index.global.js"></script>
<script src="https://unpkg.com/@accelbyte/sdk-challenge/dist/global/index.global.js"></script>
  
<script>

const sdk = AccelByteSDK.AccelByte.SDK({
  coreConfig: {
    baseURL: '__AGS_DOMAIN__',
    clientId: '__IAM_CLIENT_ID__',
    namespace: '__NAMESPACE__',
    redirectURI: '__IAM_CLIENT_REDIRECT_URI__'
  }
})

AccelByteSDK_Challenge.PlayerRewardAdminApi(sdk, { axiosConfig: { request: { headers: { Authorization: 'Bearer {access_token}' } } } })
  .updateRewardClaim_ByUserId_ByChallengeCode(userId:string, challengeCode:string, data: {
             ClaimUserRewardsByGoalCodeRequest
    })

// return Promise<UserRewardArray>

</script>
```