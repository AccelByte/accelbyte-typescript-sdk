## GET /challenge/v1/public/namespaces/{namespace}/challenges

```
import { AccelByte } from '@accelbyte/sdk'
import { ChallengeListApi } from '@accelbyte/sdk-challenge'

const sdk = AccelByte.SDK({
  coreConfig: {
    baseURL: '__AGS_DOMAIN__',
    clientId: '__IAM_CLIENT_ID__',
    namespace: '__NAMESPACE__',
    redirectURI: '__IAM_CLIENT_REDIRECT_URI__'
  }
})

ChallengeListApi(sdk, { axiosConfig: { request: { headers: { Authorization: 'Bearer {access_token}' } } } })
  .getChallenges( queryParams?: {
             limit?: number,
             offset?: number,
             sortBy?: 'createdAt' | 'createdAt:asc' | 'createdAt:desc' | 'updatedAt' | 'updatedAt:asc' | 'updatedAt:desc',
             status?: 'INIT' | 'RETIRED' | 'TIED'
    })

// return Promise<ListChallengeResponse>
```

## GET /challenge/v1/public/namespaces/{namespace}/users/me/rewards

```
import { AccelByte } from '@accelbyte/sdk'
import { PlayerRewardApi } from '@accelbyte/sdk-challenge'

const sdk = AccelByte.SDK({
  coreConfig: {
    baseURL: '__AGS_DOMAIN__',
    clientId: '__IAM_CLIENT_ID__',
    namespace: '__NAMESPACE__',
    redirectURI: '__IAM_CLIENT_REDIRECT_URI__'
  }
})

PlayerRewardApi(sdk, { axiosConfig: { request: { headers: { Authorization: 'Bearer {access_token}' } } } })
  .getUsersMeRewards( queryParams?: {
             challengeCode?: string | null,
             goalProgressionId?: string | null,
             limit?: number,
             offset?: number,
             sortBy?: 'createdAt' | 'createdAt:asc' | 'createdAt:desc' | 'updatedAt' | 'updatedAt:asc' | 'updatedAt:desc',
             status?: 'CLAIMED' | 'UNCLAIMED'
    })

// return Promise<ListUserRewardsResponse>
```

## POST /challenge/v1/public/namespaces/{namespace}/users/me/rewards/claim

```
import { AccelByte } from '@accelbyte/sdk'
import { PlayerRewardApi } from '@accelbyte/sdk-challenge'

const sdk = AccelByte.SDK({
  coreConfig: {
    baseURL: '__AGS_DOMAIN__',
    clientId: '__IAM_CLIENT_ID__',
    namespace: '__NAMESPACE__',
    redirectURI: '__IAM_CLIENT_REDIRECT_URI__'
  }
})

PlayerRewardApi(sdk, { axiosConfig: { request: { headers: { Authorization: 'Bearer {access_token}' } } } })
  .updateUserMeRewardClaim(data: {
             ClaimUserRewardsReq
    })

// return Promise<UserRewardArray>
```

## POST /challenge/v1/public/namespaces/{namespace}/users/me/progress/evaluate

```
import { AccelByte } from '@accelbyte/sdk'
import { ChallengeProgressionApi } from '@accelbyte/sdk-challenge'

const sdk = AccelByte.SDK({
  coreConfig: {
    baseURL: '__AGS_DOMAIN__',
    clientId: '__IAM_CLIENT_ID__',
    namespace: '__NAMESPACE__',
    redirectURI: '__IAM_CLIENT_REDIRECT_URI__'
  }
})

ChallengeProgressionApi(sdk, { axiosConfig: { request: { headers: { Authorization: 'Bearer {access_token}' } } } })
  .updateUserMeProgresEvaluate()

// return Promise
```

## GET /challenge/v1/public/namespaces/{namespace}/challenges/{challengeCode}/goals

```
import { AccelByte } from '@accelbyte/sdk'
import { ChallengeListApi } from '@accelbyte/sdk-challenge'

const sdk = AccelByte.SDK({
  coreConfig: {
    baseURL: '__AGS_DOMAIN__',
    clientId: '__IAM_CLIENT_ID__',
    namespace: '__NAMESPACE__',
    redirectURI: '__IAM_CLIENT_REDIRECT_URI__'
  }
})

ChallengeListApi(sdk, { axiosConfig: { request: { headers: { Authorization: 'Bearer {access_token}' } } } })
  .getGoals_ByChallengeCode(challengeCode:string,  queryParams?: {
             limit?: number,
             offset?: number,
             tags?: string[]
    })

// return Promise<GetGoalsResponse>
```

## GET /challenge/v1/public/namespaces/{namespace}/users/me/progress/{challengeCode}

```
import { AccelByte } from '@accelbyte/sdk'
import { ChallengeProgressionApi } from '@accelbyte/sdk-challenge'

const sdk = AccelByte.SDK({
  coreConfig: {
    baseURL: '__AGS_DOMAIN__',
    clientId: '__IAM_CLIENT_ID__',
    namespace: '__NAMESPACE__',
    redirectURI: '__IAM_CLIENT_REDIRECT_URI__'
  }
})

ChallengeProgressionApi(sdk, { axiosConfig: { request: { headers: { Authorization: 'Bearer {access_token}' } } } })
  .getUserMeProgres_ByChallengeCode(challengeCode:string,  queryParams?: {
             dateTime?: string | null,
             goalCode?: string | null,
             limit?: number,
             offset?: number,
             tags?: string[]
    })

// return Promise<UserProgressionResponse>
```

## GET /challenge/v1/public/namespaces/{namespace}/challenges/{challengeCode}/schedules

```
import { AccelByte } from '@accelbyte/sdk'
import { SchedulesApi } from '@accelbyte/sdk-challenge'

const sdk = AccelByte.SDK({
  coreConfig: {
    baseURL: '__AGS_DOMAIN__',
    clientId: '__IAM_CLIENT_ID__',
    namespace: '__NAMESPACE__',
    redirectURI: '__IAM_CLIENT_REDIRECT_URI__'
  }
})

SchedulesApi(sdk)
  .getSchedules_ByChallengeCode(challengeCode:string,  queryParams?: {
             dateTime?: string | null,
             limit?: number,
             offset?: number
    })

// return Promise<ListSchedulesResponse>
```

## GET /challenge/v1/public/namespaces/{namespace}/users/me/progress/{challengeCode}/index/{index}

```
import { AccelByte } from '@accelbyte/sdk'
import { ChallengeProgressionApi } from '@accelbyte/sdk-challenge'

const sdk = AccelByte.SDK({
  coreConfig: {
    baseURL: '__AGS_DOMAIN__',
    clientId: '__IAM_CLIENT_ID__',
    namespace: '__NAMESPACE__',
    redirectURI: '__IAM_CLIENT_REDIRECT_URI__'
  }
})

ChallengeProgressionApi(sdk, { axiosConfig: { request: { headers: { Authorization: 'Bearer {access_token}' } } } })
  .getIndexMeUser_ByChallengeCode_ByIndex(challengeCode:string, index:number,  queryParams?: {
             goalCode?: string | null,
             limit?: number,
             offset?: number,
             tags?: string[]
    })

// return Promise<UserProgressionResponse>
```

## GET /challenge/v1/public/namespaces/{namespace}/challenges/{challengeCode}/goals/{code}/schedules

```
import { AccelByte } from '@accelbyte/sdk'
import { SchedulesApi } from '@accelbyte/sdk-challenge'

const sdk = AccelByte.SDK({
  coreConfig: {
    baseURL: '__AGS_DOMAIN__',
    clientId: '__IAM_CLIENT_ID__',
    namespace: '__NAMESPACE__',
    redirectURI: '__IAM_CLIENT_REDIRECT_URI__'
  }
})

SchedulesApi(sdk)
  .getSchedules_ByChallengeCode_ByCode(challengeCode:string, code:string,  queryParams?: {
             limit?: number,
             offset?: number
    })

// return Promise<ListScheduleByGoalResponse>
```

## POST /challenge/v1/public/namespaces/{namespace}/users/me/challenges/{challengeCode}/rewards/claim

```
import { AccelByte } from '@accelbyte/sdk'
import { PlayerRewardApi } from '@accelbyte/sdk-challenge'

const sdk = AccelByte.SDK({
  coreConfig: {
    baseURL: '__AGS_DOMAIN__',
    clientId: '__IAM_CLIENT_ID__',
    namespace: '__NAMESPACE__',
    redirectURI: '__IAM_CLIENT_REDIRECT_URI__'
  }
})

PlayerRewardApi(sdk, { axiosConfig: { request: { headers: { Authorization: 'Bearer {access_token}' } } } })
  .updateRewardClaimMeUser_ByChallengeCode(challengeCode:string, data: {
             ClaimUserRewardsByGoalCodeRequest
    })

// return Promise<UserRewardArray>
```

## GET /challenge/v1/admin/namespaces/{namespace}/challenges

```
import { AccelByte } from '@accelbyte/sdk'
import { ChallengeConfigurationAdminApi } from '@accelbyte/sdk-challenge'

const sdk = AccelByte.SDK({
  coreConfig: {
    baseURL: '__AGS_DOMAIN__',
    clientId: '__IAM_CLIENT_ID__',
    namespace: '__NAMESPACE__',
    redirectURI: '__IAM_CLIENT_REDIRECT_URI__'
  }
})

ChallengeConfigurationAdminApi(sdk, { axiosConfig: { request: { headers: { Authorization: 'Bearer {access_token}' } } } })
  .getChallenges( queryParams?: {
             limit?: number,
             offset?: number,
             sortBy?: 'createdAt' | 'createdAt:asc' | 'createdAt:desc' | 'updatedAt' | 'updatedAt:asc' | 'updatedAt:desc',
             status?: 'INIT' | 'RETIRED' | 'TIED'
    })

// return Promise<ListChallengeResponse>
```

## POST /challenge/v1/admin/namespaces/{namespace}/challenges

```
import { AccelByte } from '@accelbyte/sdk'
import { ChallengeConfigurationAdminApi } from '@accelbyte/sdk-challenge'

const sdk = AccelByte.SDK({
  coreConfig: {
    baseURL: '__AGS_DOMAIN__',
    clientId: '__IAM_CLIENT_ID__',
    namespace: '__NAMESPACE__',
    redirectURI: '__IAM_CLIENT_REDIRECT_URI__'
  }
})

ChallengeConfigurationAdminApi(sdk, { axiosConfig: { request: { headers: { Authorization: 'Bearer {access_token}' } } } })
  .createChallenge(data: {
             CreateChallengeRequest
    })

// return Promise<ChallengeResponse>
```

## POST /challenge/v1/admin/namespaces/{namespace}/progress/evaluate

```
import { AccelByte } from '@accelbyte/sdk'
import { ChallengeProgressionAdminApi } from '@accelbyte/sdk-challenge'

const sdk = AccelByte.SDK({
  coreConfig: {
    baseURL: '__AGS_DOMAIN__',
    clientId: '__IAM_CLIENT_ID__',
    namespace: '__NAMESPACE__',
    redirectURI: '__IAM_CLIENT_REDIRECT_URI__'
  }
})

ChallengeProgressionAdminApi(sdk, { axiosConfig: { request: { headers: { Authorization: 'Bearer {access_token}' } } } })
  .updateProgresEvaluate(data: {
             EvaluatePlayerProgressionRequest
    })

// return Promise
```

## DELETE /challenge/v1/admin/namespaces/{namespace}/plugins/assignment

```
import { AccelByte } from '@accelbyte/sdk'
import { PluginsAdminApi } from '@accelbyte/sdk-challenge'

const sdk = AccelByte.SDK({
  coreConfig: {
    baseURL: '__AGS_DOMAIN__',
    clientId: '__IAM_CLIENT_ID__',
    namespace: '__NAMESPACE__',
    redirectURI: '__IAM_CLIENT_REDIRECT_URI__'
  }
})

PluginsAdminApi(sdk, { axiosConfig: { request: { headers: { Authorization: 'Bearer {access_token}' } } } })
  .deletePluginAssignment()

// return Promise
```

## GET /challenge/v1/admin/namespaces/{namespace}/plugins/assignment

```
import { AccelByte } from '@accelbyte/sdk'
import { PluginsAdminApi } from '@accelbyte/sdk-challenge'

const sdk = AccelByte.SDK({
  coreConfig: {
    baseURL: '__AGS_DOMAIN__',
    clientId: '__IAM_CLIENT_ID__',
    namespace: '__NAMESPACE__',
    redirectURI: '__IAM_CLIENT_REDIRECT_URI__'
  }
})

PluginsAdminApi(sdk, { axiosConfig: { request: { headers: { Authorization: 'Bearer {access_token}' } } } })
  .getPluginsAssignment()

// return Promise<PluginAssignmentResponse>
```

## POST /challenge/v1/admin/namespaces/{namespace}/plugins/assignment

```
import { AccelByte } from '@accelbyte/sdk'
import { PluginsAdminApi } from '@accelbyte/sdk-challenge'

const sdk = AccelByte.SDK({
  coreConfig: {
    baseURL: '__AGS_DOMAIN__',
    clientId: '__IAM_CLIENT_ID__',
    namespace: '__NAMESPACE__',
    redirectURI: '__IAM_CLIENT_REDIRECT_URI__'
  }
})

PluginsAdminApi(sdk, { axiosConfig: { request: { headers: { Authorization: 'Bearer {access_token}' } } } })
  .createPluginAssignment(data: {
             PluginAssignmentRequest
    })

// return Promise<PluginAssignmentResponse>
```

## PUT /challenge/v1/admin/namespaces/{namespace}/plugins/assignment

```
import { AccelByte } from '@accelbyte/sdk'
import { PluginsAdminApi } from '@accelbyte/sdk-challenge'

const sdk = AccelByte.SDK({
  coreConfig: {
    baseURL: '__AGS_DOMAIN__',
    clientId: '__IAM_CLIENT_ID__',
    namespace: '__NAMESPACE__',
    redirectURI: '__IAM_CLIENT_REDIRECT_URI__'
  }
})

PluginsAdminApi(sdk, { axiosConfig: { request: { headers: { Authorization: 'Bearer {access_token}' } } } })
  .updatePluginAssignment(data: {
             PluginAssignmentRequest
    })

// return Promise<PluginAssignmentResponse>
```

## POST /challenge/v1/admin/namespaces/{namespace}/users/rewards/claim

```
import { AccelByte } from '@accelbyte/sdk'
import { PlayerRewardAdminApi } from '@accelbyte/sdk-challenge'

const sdk = AccelByte.SDK({
  coreConfig: {
    baseURL: '__AGS_DOMAIN__',
    clientId: '__IAM_CLIENT_ID__',
    namespace: '__NAMESPACE__',
    redirectURI: '__IAM_CLIENT_REDIRECT_URI__'
  }
})

PlayerRewardAdminApi(sdk, { axiosConfig: { request: { headers: { Authorization: 'Bearer {access_token}' } } } })
  .updateUserRewardClaim(data: {
             ClaimUsersRewardsRequest[]
    })

// return Promise<ClaimUsersRewardsResponseArray>
```

## GET /challenge/v1/admin/namespaces/{namespace}/users/{userId}/rewards

```
import { AccelByte } from '@accelbyte/sdk'
import { PlayerRewardAdminApi } from '@accelbyte/sdk-challenge'

const sdk = AccelByte.SDK({
  coreConfig: {
    baseURL: '__AGS_DOMAIN__',
    clientId: '__IAM_CLIENT_ID__',
    namespace: '__NAMESPACE__',
    redirectURI: '__IAM_CLIENT_REDIRECT_URI__'
  }
})

PlayerRewardAdminApi(sdk, { axiosConfig: { request: { headers: { Authorization: 'Bearer {access_token}' } } } })
  .getRewards_ByUserId(userId:string,  queryParams?: {
             challengeCode?: string | null,
             goalProgressionId?: string | null,
             limit?: number,
             offset?: number,
             sortBy?: 'createdAt' | 'createdAt:asc' | 'createdAt:desc' | 'updatedAt' | 'updatedAt:asc' | 'updatedAt:desc',
             status?: 'CLAIMED' | 'UNCLAIMED'
    })

// return Promise<ListUserRewardsResponse>
```

## GET /challenge/v1/admin/namespaces/{namespace}/challenges/users/{userId}

```
import { AccelByte } from '@accelbyte/sdk'
import { ChallengeConfigurationAdminApi } from '@accelbyte/sdk-challenge'

const sdk = AccelByte.SDK({
  coreConfig: {
    baseURL: '__AGS_DOMAIN__',
    clientId: '__IAM_CLIENT_ID__',
    namespace: '__NAMESPACE__',
    redirectURI: '__IAM_CLIENT_REDIRECT_URI__'
  }
})

ChallengeConfigurationAdminApi(sdk, { axiosConfig: { request: { headers: { Authorization: 'Bearer {access_token}' } } } })
  .getChallengeUser_ByUserId(userId:string,  queryParams?: {
             limit?: number,
             offset?: number
    })

// return Promise<ListChallengeResponse>
```

## DELETE /challenge/v1/admin/namespaces/{namespace}/challenges/{challengeCode}

```
import { AccelByte } from '@accelbyte/sdk'
import { ChallengeConfigurationAdminApi } from '@accelbyte/sdk-challenge'

const sdk = AccelByte.SDK({
  coreConfig: {
    baseURL: '__AGS_DOMAIN__',
    clientId: '__IAM_CLIENT_ID__',
    namespace: '__NAMESPACE__',
    redirectURI: '__IAM_CLIENT_REDIRECT_URI__'
  }
})

ChallengeConfigurationAdminApi(sdk, { axiosConfig: { request: { headers: { Authorization: 'Bearer {access_token}' } } } })
  .deleteChallenge_ByChallengeCode(challengeCode:string)

// return Promise
```

## GET /challenge/v1/admin/namespaces/{namespace}/challenges/{challengeCode}

```
import { AccelByte } from '@accelbyte/sdk'
import { ChallengeConfigurationAdminApi } from '@accelbyte/sdk-challenge'

const sdk = AccelByte.SDK({
  coreConfig: {
    baseURL: '__AGS_DOMAIN__',
    clientId: '__IAM_CLIENT_ID__',
    namespace: '__NAMESPACE__',
    redirectURI: '__IAM_CLIENT_REDIRECT_URI__'
  }
})

ChallengeConfigurationAdminApi(sdk, { axiosConfig: { request: { headers: { Authorization: 'Bearer {access_token}' } } } })
  .getChallenge_ByChallengeCode(challengeCode:string)

// return Promise<ChallengeResponse>
```

## PUT /challenge/v1/admin/namespaces/{namespace}/challenges/{challengeCode}

```
import { AccelByte } from '@accelbyte/sdk'
import { ChallengeConfigurationAdminApi } from '@accelbyte/sdk-challenge'

const sdk = AccelByte.SDK({
  coreConfig: {
    baseURL: '__AGS_DOMAIN__',
    clientId: '__IAM_CLIENT_ID__',
    namespace: '__NAMESPACE__',
    redirectURI: '__IAM_CLIENT_REDIRECT_URI__'
  }
})

ChallengeConfigurationAdminApi(sdk, { axiosConfig: { request: { headers: { Authorization: 'Bearer {access_token}' } } } })
  .updateChallenge_ByChallengeCode(challengeCode:string, data: {
             UpdateChallengeRequest
    })

// return Promise<ChallengeResponse>
```

## POST /challenge/v1/admin/namespaces/{namespace}/users/{userId}/rewards/claim

```
import { AccelByte } from '@accelbyte/sdk'
import { PlayerRewardAdminApi } from '@accelbyte/sdk-challenge'

const sdk = AccelByte.SDK({
  coreConfig: {
    baseURL: '__AGS_DOMAIN__',
    clientId: '__IAM_CLIENT_ID__',
    namespace: '__NAMESPACE__',
    redirectURI: '__IAM_CLIENT_REDIRECT_URI__'
  }
})

PlayerRewardAdminApi(sdk, { axiosConfig: { request: { headers: { Authorization: 'Bearer {access_token}' } } } })
  .updateRewardClaim_ByUserId(userId:string, data: {
             ClaimUserRewardsReq
    })

// return Promise<UserRewardArray>
```

## DELETE /challenge/v1/admin/namespaces/{namespace}/challenges/{challengeCode}/tied

```
import { AccelByte } from '@accelbyte/sdk'
import { ChallengeConfigurationAdminApi } from '@accelbyte/sdk-challenge'

const sdk = AccelByte.SDK({
  coreConfig: {
    baseURL: '__AGS_DOMAIN__',
    clientId: '__IAM_CLIENT_ID__',
    namespace: '__NAMESPACE__',
    redirectURI: '__IAM_CLIENT_REDIRECT_URI__'
  }
})

ChallengeConfigurationAdminApi(sdk, { axiosConfig: { request: { headers: { Authorization: 'Bearer {access_token}' } } } })
  .deleteTied_ByChallengeCode(challengeCode:string)

// return Promise
```

## GET /challenge/v1/admin/namespaces/{namespace}/challenges/{challengeCode}/goals

```
import { AccelByte } from '@accelbyte/sdk'
import { GoalConfigurationAdminApi } from '@accelbyte/sdk-challenge'

const sdk = AccelByte.SDK({
  coreConfig: {
    baseURL: '__AGS_DOMAIN__',
    clientId: '__IAM_CLIENT_ID__',
    namespace: '__NAMESPACE__',
    redirectURI: '__IAM_CLIENT_REDIRECT_URI__'
  }
})

GoalConfigurationAdminApi(sdk, { axiosConfig: { request: { headers: { Authorization: 'Bearer {access_token}' } } } })
  .getGoals_ByChallengeCode(challengeCode:string,  queryParams?: {
             limit?: number,
             offset?: number,
             sortBy?: 'createdAt' | 'createdAt:asc' | 'createdAt:desc' | 'updatedAt' | 'updatedAt:asc' | 'updatedAt:desc'
    })

// return Promise<GetGoalsResponse>
```

## POST /challenge/v1/admin/namespaces/{namespace}/challenges/{challengeCode}/goals

```
import { AccelByte } from '@accelbyte/sdk'
import { GoalConfigurationAdminApi } from '@accelbyte/sdk-challenge'

const sdk = AccelByte.SDK({
  coreConfig: {
    baseURL: '__AGS_DOMAIN__',
    clientId: '__IAM_CLIENT_ID__',
    namespace: '__NAMESPACE__',
    redirectURI: '__IAM_CLIENT_REDIRECT_URI__'
  }
})

GoalConfigurationAdminApi(sdk, { axiosConfig: { request: { headers: { Authorization: 'Bearer {access_token}' } } } })
  .createGoal_ByChallengeCode(challengeCode:string, data: {
             CreateGoalRequest
    })

// return Promise<GoalResponse>
```

## GET /challenge/v1/admin/namespaces/{namespace}/challenges/{challengeCode}/periods

```
import { AccelByte } from '@accelbyte/sdk'
import { ChallengeConfigurationAdminApi } from '@accelbyte/sdk-challenge'

const sdk = AccelByte.SDK({
  coreConfig: {
    baseURL: '__AGS_DOMAIN__',
    clientId: '__IAM_CLIENT_ID__',
    namespace: '__NAMESPACE__',
    redirectURI: '__IAM_CLIENT_REDIRECT_URI__'
  }
})

ChallengeConfigurationAdminApi(sdk, { axiosConfig: { request: { headers: { Authorization: 'Bearer {access_token}' } } } })
  .getPeriods_ByChallengeCode(challengeCode:string,  queryParams?: {
             limit?: number,
             offset?: number
    })

// return Promise<ListPeriodsResponse>
```

## POST /challenge/v1/admin/namespaces/{namespace}/challenges/{challengeCode}/randomize

```
import { AccelByte } from '@accelbyte/sdk'
import { ChallengeConfigurationAdminApi } from '@accelbyte/sdk-challenge'

const sdk = AccelByte.SDK({
  coreConfig: {
    baseURL: '__AGS_DOMAIN__',
    clientId: '__IAM_CLIENT_ID__',
    namespace: '__NAMESPACE__',
    redirectURI: '__IAM_CLIENT_REDIRECT_URI__'
  }
})

ChallengeConfigurationAdminApi(sdk, { axiosConfig: { request: { headers: { Authorization: 'Bearer {access_token}' } } } })
  .updateRandomize_ByChallengeCode(challengeCode:string)

// return Promise<ScheduleArray>
```

## GET /challenge/v1/admin/namespaces/{namespace}/challenges/{challengeCode}/schedules

```
import { AccelByte } from '@accelbyte/sdk'
import { SchedulesAdminApi } from '@accelbyte/sdk-challenge'

const sdk = AccelByte.SDK({
  coreConfig: {
    baseURL: '__AGS_DOMAIN__',
    clientId: '__IAM_CLIENT_ID__',
    namespace: '__NAMESPACE__',
    redirectURI: '__IAM_CLIENT_REDIRECT_URI__'
  }
})

SchedulesAdminApi(sdk, { axiosConfig: { request: { headers: { Authorization: 'Bearer {access_token}' } } } })
  .getSchedules_ByChallengeCode(challengeCode:string,  queryParams?: {
             dateTime?: string | null,
             limit?: number,
             offset?: number,
             userId?: string | null
    })

// return Promise<ListSchedulesResponse>
```

## DELETE /challenge/v1/admin/namespaces/{namespace}/challenges/{challengeCode}/goals/{code}

```
import { AccelByte } from '@accelbyte/sdk'
import { GoalConfigurationAdminApi } from '@accelbyte/sdk-challenge'

const sdk = AccelByte.SDK({
  coreConfig: {
    baseURL: '__AGS_DOMAIN__',
    clientId: '__IAM_CLIENT_ID__',
    namespace: '__NAMESPACE__',
    redirectURI: '__IAM_CLIENT_REDIRECT_URI__'
  }
})

GoalConfigurationAdminApi(sdk, { axiosConfig: { request: { headers: { Authorization: 'Bearer {access_token}' } } } })
  .deleteGoal_ByChallengeCode_ByCode(challengeCode:string, code:string)

// return Promise
```

## GET /challenge/v1/admin/namespaces/{namespace}/challenges/{challengeCode}/goals/{code}

```
import { AccelByte } from '@accelbyte/sdk'
import { GoalConfigurationAdminApi } from '@accelbyte/sdk-challenge'

const sdk = AccelByte.SDK({
  coreConfig: {
    baseURL: '__AGS_DOMAIN__',
    clientId: '__IAM_CLIENT_ID__',
    namespace: '__NAMESPACE__',
    redirectURI: '__IAM_CLIENT_REDIRECT_URI__'
  }
})

GoalConfigurationAdminApi(sdk, { axiosConfig: { request: { headers: { Authorization: 'Bearer {access_token}' } } } })
  .getGoal_ByChallengeCode_ByCode(challengeCode:string, code:string)

// return Promise<GoalResponse>
```

## PUT /challenge/v1/admin/namespaces/{namespace}/challenges/{challengeCode}/goals/{code}

```
import { AccelByte } from '@accelbyte/sdk'
import { GoalConfigurationAdminApi } from '@accelbyte/sdk-challenge'

const sdk = AccelByte.SDK({
  coreConfig: {
    baseURL: '__AGS_DOMAIN__',
    clientId: '__IAM_CLIENT_ID__',
    namespace: '__NAMESPACE__',
    redirectURI: '__IAM_CLIENT_REDIRECT_URI__'
  }
})

GoalConfigurationAdminApi(sdk, { axiosConfig: { request: { headers: { Authorization: 'Bearer {access_token}' } } } })
  .updateGoal_ByChallengeCode_ByCode(challengeCode:string, code:string, data: {
             UpdateGoalRequest
    })

// return Promise<GoalResponse>
```

## GET /challenge/v1/admin/namespaces/{namespace}/users/{userId}/progress/{challengeCode}

```
import { AccelByte } from '@accelbyte/sdk'
import { ChallengeProgressionAdminApi } from '@accelbyte/sdk-challenge'

const sdk = AccelByte.SDK({
  coreConfig: {
    baseURL: '__AGS_DOMAIN__',
    clientId: '__IAM_CLIENT_ID__',
    namespace: '__NAMESPACE__',
    redirectURI: '__IAM_CLIENT_REDIRECT_URI__'
  }
})

ChallengeProgressionAdminApi(sdk, { axiosConfig: { request: { headers: { Authorization: 'Bearer {access_token}' } } } })
  .getProgres_ByUserId_ByChallengeCode(userId:string, challengeCode:string,  queryParams?: {
             dateTime?: string | null,
             goalCode?: string | null,
             limit?: number,
             offset?: number,
             tags?: string[]
    })

// return Promise<UserProgressionResponse>
```

## PUT /challenge/v1/admin/namespaces/{namespace}/challenges/{challengeCode}/tied/schedule

```
import { AccelByte } from '@accelbyte/sdk'
import { ChallengeConfigurationAdminApi } from '@accelbyte/sdk-challenge'

const sdk = AccelByte.SDK({
  coreConfig: {
    baseURL: '__AGS_DOMAIN__',
    clientId: '__IAM_CLIENT_ID__',
    namespace: '__NAMESPACE__',
    redirectURI: '__IAM_CLIENT_REDIRECT_URI__'
  }
})

ChallengeConfigurationAdminApi(sdk, { axiosConfig: { request: { headers: { Authorization: 'Bearer {access_token}' } } } })
  .updateTiedSchedule_ByChallengeCode(challengeCode:string, data: {
             UpdateChallengeScheduleRequest
    })

// return Promise<ChallengeResponse>
```

## GET /challenge/v1/admin/namespaces/{namespace}/challenges/{challengeCode}/goals/{code}/schedules

```
import { AccelByte } from '@accelbyte/sdk'
import { SchedulesAdminApi } from '@accelbyte/sdk-challenge'

const sdk = AccelByte.SDK({
  coreConfig: {
    baseURL: '__AGS_DOMAIN__',
    clientId: '__IAM_CLIENT_ID__',
    namespace: '__NAMESPACE__',
    redirectURI: '__IAM_CLIENT_REDIRECT_URI__'
  }
})

SchedulesAdminApi(sdk, { axiosConfig: { request: { headers: { Authorization: 'Bearer {access_token}' } } } })
  .getSchedules_ByChallengeCode_ByCode(challengeCode:string, code:string,  queryParams?: {
             limit?: number,
             offset?: number,
             userId?: string | null
    })

// return Promise<ListScheduleByGoalResponse>
```

## POST /challenge/v1/admin/namespaces/{namespace}/users/{userId}/challenges/{challengeCode}/rewards/claim

```
import { AccelByte } from '@accelbyte/sdk'
import { PlayerRewardAdminApi } from '@accelbyte/sdk-challenge'

const sdk = AccelByte.SDK({
  coreConfig: {
    baseURL: '__AGS_DOMAIN__',
    clientId: '__IAM_CLIENT_ID__',
    namespace: '__NAMESPACE__',
    redirectURI: '__IAM_CLIENT_REDIRECT_URI__'
  }
})

PlayerRewardAdminApi(sdk, { axiosConfig: { request: { headers: { Authorization: 'Bearer {access_token}' } } } })
  .updateRewardClaim_ByUserId_ByChallengeCode(userId:string, challengeCode:string, data: {
             ClaimUserRewardsByGoalCodeRequest
    })

// return Promise<UserRewardArray>
```