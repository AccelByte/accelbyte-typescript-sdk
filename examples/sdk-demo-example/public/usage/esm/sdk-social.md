## GET /social/public/namespaces/{namespace}/profiles

```
import { Accelbyte } from '@accelbyte/sdk'
import { Social } from '@accelbyte/sdk-social'

const sdk = Accelbyte.SDK({
    baseURL: 'https://demo.accelbyte.io',
    clientId: '__IAM_CLIENT_ID__',
    namespace: '__NAMESPACE__',
    redirectURI: '__IAM_CLIENT_REDIRECT_URI__'
})

Social.GameProfileApi(sdk)
     .getProfiles( queryParams: {
             userIds: string[]
    })

// return Promise<UserGameProfilesArray>
```

## POST /social/v1/public/namespaces/{namespace}/stats

```
import { Accelbyte } from '@accelbyte/sdk'
import { Social } from '@accelbyte/sdk-social'

const sdk = Accelbyte.SDK({
    baseURL: 'https://demo.accelbyte.io',
    clientId: '__IAM_CLIENT_ID__',
    namespace: '__NAMESPACE__',
    redirectURI: '__IAM_CLIENT_REDIRECT_URI__'
})

Social.StatConfigurationApi(sdk)
     .createStat(data: {
             StatCreate
    })

// return Promise<StatInfo>
```

## GET /social/v1/public/namespaces/{namespace}/statCycles

```
import { Accelbyte } from '@accelbyte/sdk'
import { Social } from '@accelbyte/sdk-social'

const sdk = Accelbyte.SDK({
    baseURL: 'https://demo.accelbyte.io',
    clientId: '__IAM_CLIENT_ID__',
    namespace: '__NAMESPACE__',
    redirectURI: '__IAM_CLIENT_REDIRECT_URI__'
})

Social.StatCycleConfigurationApi(sdk)
     .getStatCycles( queryParams?: {
             cycleType?: 'ANNUALLY' | 'DAILY' | 'MONTHLY' | 'SEASONAL' | 'WEEKLY',
             limit?: number,
             name?: string | null,
             offset?: number,
             sortBy?: string | null,
             status?: 'ACTIVE' | 'INIT' | 'STOPPED'
    })

// return Promise<StatCyclePagingSlicedResult>
```

## GET /social/v1/public/namespaces/{namespace}/statitems/bulk

```
import { Accelbyte } from '@accelbyte/sdk'
import { Social } from '@accelbyte/sdk-social'

const sdk = Accelbyte.SDK({
    baseURL: 'https://demo.accelbyte.io',
    clientId: '__IAM_CLIENT_ID__',
    namespace: '__NAMESPACE__',
    redirectURI: '__IAM_CLIENT_REDIRECT_URI__'
})

Social.UserStatisticApi(sdk)
     .getStatitemsBulk( queryParams: {
             statCode: string | null,
             userIds: string | null
    })

// return Promise<UserStatItemInfoArray>
```

## GET /social/v1/public/namespaces/{namespace}/globalstatitems

```
import { Accelbyte } from '@accelbyte/sdk'
import { Social } from '@accelbyte/sdk-social'

const sdk = Accelbyte.SDK({
    baseURL: 'https://demo.accelbyte.io',
    clientId: '__IAM_CLIENT_ID__',
    namespace: '__NAMESPACE__',
    redirectURI: '__IAM_CLIENT_REDIRECT_URI__'
})

Social.GlobalStatisticApi(sdk)
     .getGlobalstatitems( queryParams?: {
             limit?: number,
             offset?: number,
             statCodes?: string | null
    })

// return Promise<GlobalStatItemPagingSlicedResult>
```

## POST /social/v1/public/namespaces/{namespace}/statCycles/bulk

```
import { Accelbyte } from '@accelbyte/sdk'
import { Social } from '@accelbyte/sdk-social'

const sdk = Accelbyte.SDK({
    baseURL: 'https://demo.accelbyte.io',
    clientId: '__IAM_CLIENT_ID__',
    namespace: '__NAMESPACE__',
    redirectURI: '__IAM_CLIENT_REDIRECT_URI__'
})

Social.StatCycleConfigurationApi(sdk)
     .createStatCycleBulk(data: {
             BulkStatCycleRequest
    })

// return Promise<BulkStatCycleResult>
```

## GET /social/v1/public/namespaces/{namespace}/users/me/statitems

```
import { Accelbyte } from '@accelbyte/sdk'
import { Social } from '@accelbyte/sdk-social'

const sdk = Accelbyte.SDK({
    baseURL: 'https://demo.accelbyte.io',
    clientId: '__IAM_CLIENT_ID__',
    namespace: '__NAMESPACE__',
    redirectURI: '__IAM_CLIENT_REDIRECT_URI__'
})

Social.UserStatisticApi(sdk)
     .getUsersMeStatitems( queryParams?: {
             limit?: number,
             offset?: number,
             sortBy?: string | null,
             statCodes?: string[],
             tags?: string[]
    })

// return Promise<UserStatItemPagingSlicedResult>
```

## GET /social/public/namespaces/{namespace}/users/{userId}/profiles

```
import { Accelbyte } from '@accelbyte/sdk'
import { Social } from '@accelbyte/sdk-social'

const sdk = Accelbyte.SDK({
    baseURL: 'https://demo.accelbyte.io',
    clientId: '__IAM_CLIENT_ID__',
    namespace: '__NAMESPACE__',
    redirectURI: '__IAM_CLIENT_REDIRECT_URI__'
})

Social.GameProfileApi(sdk)
     .getProfiles_ByUserId(userId:string)

// return Promise<GameProfileHeaderArray>
```

## POST /social/public/namespaces/{namespace}/users/{userId}/profiles

```
import { Accelbyte } from '@accelbyte/sdk'
import { Social } from '@accelbyte/sdk-social'

const sdk = Accelbyte.SDK({
    baseURL: 'https://demo.accelbyte.io',
    clientId: '__IAM_CLIENT_ID__',
    namespace: '__NAMESPACE__',
    redirectURI: '__IAM_CLIENT_REDIRECT_URI__'
})

Social.GameProfileApi(sdk)
     .createProfile_ByUserId(userId:string, data: {
             GameProfileRequest
    })

// return Promise
```

## GET /social/v1/public/namespaces/{namespace}/statCycles/{cycleId}

```
import { Accelbyte } from '@accelbyte/sdk'
import { Social } from '@accelbyte/sdk-social'

const sdk = Accelbyte.SDK({
    baseURL: 'https://demo.accelbyte.io',
    clientId: '__IAM_CLIENT_ID__',
    namespace: '__NAMESPACE__',
    redirectURI: '__IAM_CLIENT_REDIRECT_URI__'
})

Social.StatCycleConfigurationApi(sdk)
     .getStatCycle_ByCycleId(cycleId:string)

// return Promise<StatCycleInfo>
```

## PATCH /social/v1/public/namespaces/{namespace}/statitems/value/bulk

```
import { Accelbyte } from '@accelbyte/sdk'
import { Social } from '@accelbyte/sdk-social'

const sdk = Accelbyte.SDK({
    baseURL: 'https://demo.accelbyte.io',
    clientId: '__IAM_CLIENT_ID__',
    namespace: '__NAMESPACE__',
    redirectURI: '__IAM_CLIENT_REDIRECT_URI__'
})

Social.UserStatisticApi(sdk)
     .patchStatitemValueBulk(data: {
             BulkUserStatItemInc[]
    })

// return Promise<BulkStatOperationResultArray>
```

## PUT /social/v1/public/namespaces/{namespace}/statitems/value/bulk

```
import { Accelbyte } from '@accelbyte/sdk'
import { Social } from '@accelbyte/sdk-social'

const sdk = Accelbyte.SDK({
    baseURL: 'https://demo.accelbyte.io',
    clientId: '__IAM_CLIENT_ID__',
    namespace: '__NAMESPACE__',
    redirectURI: '__IAM_CLIENT_REDIRECT_URI__'
})

Social.UserStatisticApi(sdk)
     .updateStatitemValueBulk(data: {
             BulkUserStatItemInc[]
    })

// return Promise<BulkStatOperationResultArray>
```

## PUT /social/v2/public/namespaces/{namespace}/statitems/value/bulk

```
import { Accelbyte } from '@accelbyte/sdk'
import { Social } from '@accelbyte/sdk-social'

const sdk = Accelbyte.SDK({
    baseURL: 'https://demo.accelbyte.io',
    clientId: '__IAM_CLIENT_ID__',
    namespace: '__NAMESPACE__',
    redirectURI: '__IAM_CLIENT_REDIRECT_URI__'
})

Social.UserStatisticApi(sdk)
     .updateStatitemValueBulk_ByNS(data: {
             BulkUserStatItemUpdate[]
    })

// return Promise<BulkStatOperationResultArray>
```

## GET /social/v1/public/namespaces/{namespace}/users/{userId}/statitems

```
import { Accelbyte } from '@accelbyte/sdk'
import { Social } from '@accelbyte/sdk-social'

const sdk = Accelbyte.SDK({
    baseURL: 'https://demo.accelbyte.io',
    clientId: '__IAM_CLIENT_ID__',
    namespace: '__NAMESPACE__',
    redirectURI: '__IAM_CLIENT_REDIRECT_URI__'
})

Social.UserStatisticApi(sdk)
     .getStatitems_ByUserId(userId:string,  queryParams?: {
             limit?: number,
             offset?: number,
             sortBy?: string | null,
             statCodes?: string | null,
             tags?: string | null
    })

// return Promise<UserStatItemPagingSlicedResult>
```

## GET /social/v1/public/namespaces/{namespace}/globalstatitems/{statCode}

```
import { Accelbyte } from '@accelbyte/sdk'
import { Social } from '@accelbyte/sdk-social'

const sdk = Accelbyte.SDK({
    baseURL: 'https://demo.accelbyte.io',
    clientId: '__IAM_CLIENT_ID__',
    namespace: '__NAMESPACE__',
    redirectURI: '__IAM_CLIENT_REDIRECT_URI__'
})

Social.GlobalStatisticApi(sdk)
     .getGlobalstatitem_ByStatCode(statCode:string)

// return Promise<GlobalStatItemInfo>
```

## PUT /social/v1/public/namespaces/{namespace}/statitems/value/reset/bulk

```
import { Accelbyte } from '@accelbyte/sdk'
import { Social } from '@accelbyte/sdk-social'

const sdk = Accelbyte.SDK({
    baseURL: 'https://demo.accelbyte.io',
    clientId: '__IAM_CLIENT_ID__',
    namespace: '__NAMESPACE__',
    redirectURI: '__IAM_CLIENT_REDIRECT_URI__'
})

Social.UserStatisticApi(sdk)
     .updateStatitemValueResetBulk(data: {
             BulkUserStatItemReset[]
    })

// return Promise<BulkStatOperationResultArray>
```

## POST /social/v1/public/namespaces/{namespace}/users/{userId}/statitems/bulk

```
import { Accelbyte } from '@accelbyte/sdk'
import { Social } from '@accelbyte/sdk-social'

const sdk = Accelbyte.SDK({
    baseURL: 'https://demo.accelbyte.io',
    clientId: '__IAM_CLIENT_ID__',
    namespace: '__NAMESPACE__',
    redirectURI: '__IAM_CLIENT_REDIRECT_URI__'
})

Social.UserStatisticApi(sdk)
     .createStatitemBulk_ByUserId(userId:string, data: {
             BulkStatItemCreate[]
    })

// return Promise<BulkStatOperationResultArray>
```

## GET /social/v1/public/namespaces/{namespace}/users/me/statitems/value/bulk

```
import { Accelbyte } from '@accelbyte/sdk'
import { Social } from '@accelbyte/sdk-social'

const sdk = Accelbyte.SDK({
    baseURL: 'https://demo.accelbyte.io',
    clientId: '__IAM_CLIENT_ID__',
    namespace: '__NAMESPACE__',
    redirectURI: '__IAM_CLIENT_REDIRECT_URI__'
})

Social.UserStatisticApi(sdk)
     .getUsersMeStatitemsValueBulk( queryParams?: {
             additionalKey?: string | null,
             statCodes?: string[],
             tags?: string[]
    })

// return Promise<ADtoObjectForUserStatItemValueArray>
```

## DELETE /social/public/namespaces/{namespace}/users/{userId}/profiles/{profileId}

```
import { Accelbyte } from '@accelbyte/sdk'
import { Social } from '@accelbyte/sdk-social'

const sdk = Accelbyte.SDK({
    baseURL: 'https://demo.accelbyte.io',
    clientId: '__IAM_CLIENT_ID__',
    namespace: '__NAMESPACE__',
    redirectURI: '__IAM_CLIENT_REDIRECT_URI__'
})

Social.GameProfileApi(sdk)
     .deleteProfile_ByUserId_ByProfileId(userId:string, profileId:string)

// return Promise
```

## GET /social/public/namespaces/{namespace}/users/{userId}/profiles/{profileId}

```
import { Accelbyte } from '@accelbyte/sdk'
import { Social } from '@accelbyte/sdk-social'

const sdk = Accelbyte.SDK({
    baseURL: 'https://demo.accelbyte.io',
    clientId: '__IAM_CLIENT_ID__',
    namespace: '__NAMESPACE__',
    redirectURI: '__IAM_CLIENT_REDIRECT_URI__'
})

Social.GameProfileApi(sdk)
     .getProfile_ByUserId_ByProfileId(userId:string, profileId:string)

// return Promise<GameProfileInfo>
```

## PUT /social/public/namespaces/{namespace}/users/{userId}/profiles/{profileId}

```
import { Accelbyte } from '@accelbyte/sdk'
import { Social } from '@accelbyte/sdk-social'

const sdk = Accelbyte.SDK({
    baseURL: 'https://demo.accelbyte.io',
    clientId: '__IAM_CLIENT_ID__',
    namespace: '__NAMESPACE__',
    redirectURI: '__IAM_CLIENT_REDIRECT_URI__'
})

Social.GameProfileApi(sdk)
     .updateProfile_ByUserId_ByProfileId(userId:string, profileId:string, data: {
             GameProfileRequest
    })

// return Promise<GameProfileInfo>
```

## GET /social/v1/public/namespaces/{namespace}/users/{userId}/statitems/value/bulk

```
import { Accelbyte } from '@accelbyte/sdk'
import { Social } from '@accelbyte/sdk-social'

const sdk = Accelbyte.SDK({
    baseURL: 'https://demo.accelbyte.io',
    clientId: '__IAM_CLIENT_ID__',
    namespace: '__NAMESPACE__',
    redirectURI: '__IAM_CLIENT_REDIRECT_URI__'
})

Social.UserStatisticApi(sdk)
     .getStatitemsValueBulk_ByUserId(userId:string,  queryParams?: {
             additionalKey?: string | null,
             statCodes?: string[],
             tags?: string[]
    })

// return Promise<ADtoObjectForUserStatItemValueArray>
```

## PATCH /social/v1/public/namespaces/{namespace}/users/{userId}/statitems/value/bulk

```
import { Accelbyte } from '@accelbyte/sdk'
import { Social } from '@accelbyte/sdk-social'

const sdk = Accelbyte.SDK({
    baseURL: 'https://demo.accelbyte.io',
    clientId: '__IAM_CLIENT_ID__',
    namespace: '__NAMESPACE__',
    redirectURI: '__IAM_CLIENT_REDIRECT_URI__'
})

Social.UserStatisticApi(sdk)
     .patchStatitemValueBulk_ByUserId(userId:string, data: {
             BulkStatItemInc[]
    })

// return Promise<BulkStatOperationResultArray>
```

## PUT /social/v1/public/namespaces/{namespace}/users/{userId}/statitems/value/bulk

```
import { Accelbyte } from '@accelbyte/sdk'
import { Social } from '@accelbyte/sdk-social'

const sdk = Accelbyte.SDK({
    baseURL: 'https://demo.accelbyte.io',
    clientId: '__IAM_CLIENT_ID__',
    namespace: '__NAMESPACE__',
    redirectURI: '__IAM_CLIENT_REDIRECT_URI__'
})

Social.UserStatisticApi(sdk)
     .updateStatitemValueBulk_ByUserId(userId:string, data: {
             BulkStatItemInc[]
    })

// return Promise<BulkStatOperationResultArray>
```

## GET /social/v2/public/namespaces/{namespace}/users/{userId}/statitems/value/bulk

```
import { Accelbyte } from '@accelbyte/sdk'
import { Social } from '@accelbyte/sdk-social'

const sdk = Accelbyte.SDK({
    baseURL: 'https://demo.accelbyte.io',
    clientId: '__IAM_CLIENT_ID__',
    namespace: '__NAMESPACE__',
    redirectURI: '__IAM_CLIENT_REDIRECT_URI__'
})

Social.UserStatisticApi(sdk)
     .getStatitemsValueBulk_ByUserId_ByNS(userId:string,  queryParams?: {
             additionalKey?: string | null,
             statCodes?: string[],
             tags?: string[]
    })

// return Promise<ADtoObjectForUserStatItemValueArray>
```

## PUT /social/v2/public/namespaces/{namespace}/users/{userId}/statitems/value/bulk

```
import { Accelbyte } from '@accelbyte/sdk'
import { Social } from '@accelbyte/sdk-social'

const sdk = Accelbyte.SDK({
    baseURL: 'https://demo.accelbyte.io',
    clientId: '__IAM_CLIENT_ID__',
    namespace: '__NAMESPACE__',
    redirectURI: '__IAM_CLIENT_REDIRECT_URI__'
})

Social.UserStatisticApi(sdk)
     .updateStatitemValueBulk_ByUserId_ByNS(userId:string, data: {
             BulkStatItemUpdate[],
             queryParams?: {
             additionalKey?: string | null
    })

// return Promise<BulkStatOperationResultArray>
```

## PUT /social/v1/public/namespaces/{namespace}/users/{userId}/statitems/value/reset/bulk

```
import { Accelbyte } from '@accelbyte/sdk'
import { Social } from '@accelbyte/sdk-social'

const sdk = Accelbyte.SDK({
    baseURL: 'https://demo.accelbyte.io',
    clientId: '__IAM_CLIENT_ID__',
    namespace: '__NAMESPACE__',
    redirectURI: '__IAM_CLIENT_REDIRECT_URI__'
})

Social.UserStatisticApi(sdk)
     .updateStatitemValueResetBulk_ByUserId(userId:string, data: {
             BulkStatItemReset[]
    })

// return Promise<BulkStatOperationResultArray>
```

## DELETE /social/v1/public/namespaces/{namespace}/users/{userId}/stats/{statCode}/statitems

```
import { Accelbyte } from '@accelbyte/sdk'
import { Social } from '@accelbyte/sdk-social'

const sdk = Accelbyte.SDK({
    baseURL: 'https://demo.accelbyte.io',
    clientId: '__IAM_CLIENT_ID__',
    namespace: '__NAMESPACE__',
    redirectURI: '__IAM_CLIENT_REDIRECT_URI__'
})

Social.UserStatisticApi(sdk)
     .deleteStatitem_ByUserId_ByStatCode(userId:string, statCode:string)

// return Promise
```

## POST /social/v1/public/namespaces/{namespace}/users/{userId}/stats/{statCode}/statitems

```
import { Accelbyte } from '@accelbyte/sdk'
import { Social } from '@accelbyte/sdk-social'

const sdk = Accelbyte.SDK({
    baseURL: 'https://demo.accelbyte.io',
    clientId: '__IAM_CLIENT_ID__',
    namespace: '__NAMESPACE__',
    redirectURI: '__IAM_CLIENT_REDIRECT_URI__'
})

Social.UserStatisticApi(sdk)
     .createStatitem_ByUserId_ByStatCode(userId:string, statCode:string)

// return Promise
```

## GET /social/v1/public/namespaces/{namespace}/users/me/statCycles/{cycleId}/statCycleitems

```
import { Accelbyte } from '@accelbyte/sdk'
import { Social } from '@accelbyte/sdk-social'

const sdk = Accelbyte.SDK({
    baseURL: 'https://demo.accelbyte.io',
    clientId: '__IAM_CLIENT_ID__',
    namespace: '__NAMESPACE__',
    redirectURI: '__IAM_CLIENT_REDIRECT_URI__'
})

Social.UserStatisticCycleApi(sdk)
     .getStatCycleitemsMeUsers_ByCycleId(cycleId:string,  queryParams?: {
             limit?: number,
             offset?: number,
             sortBy?: string | null,
             statCodes?: string[]
    })

// return Promise<UserStatCycleItemPagingSlicedResult>
```

## PATCH /social/v1/public/namespaces/{namespace}/users/{userId}/stats/{statCode}/statitems/value

```
import { Accelbyte } from '@accelbyte/sdk'
import { Social } from '@accelbyte/sdk-social'

const sdk = Accelbyte.SDK({
    baseURL: 'https://demo.accelbyte.io',
    clientId: '__IAM_CLIENT_ID__',
    namespace: '__NAMESPACE__',
    redirectURI: '__IAM_CLIENT_REDIRECT_URI__'
})

Social.UserStatisticApi(sdk)
     .patchStatitemValue_ByUserId_ByStatCode(userId:string, statCode:string, data: {
             StatItemInc
    })

// return Promise<StatItemIncResult>
```

## PUT /social/v1/public/namespaces/{namespace}/users/{userId}/stats/{statCode}/statitems/value

```
import { Accelbyte } from '@accelbyte/sdk'
import { Social } from '@accelbyte/sdk-social'

const sdk = Accelbyte.SDK({
    baseURL: 'https://demo.accelbyte.io',
    clientId: '__IAM_CLIENT_ID__',
    namespace: '__NAMESPACE__',
    redirectURI: '__IAM_CLIENT_REDIRECT_URI__'
})

Social.UserStatisticApi(sdk)
     .updateStatitemValue_ByUserId_ByStatCode(userId:string, statCode:string, data: {
             StatItemInc
    })

// return Promise<StatItemIncResult>
```

## PUT /social/v2/public/namespaces/{namespace}/users/{userId}/stats/{statCode}/statitems/value

```
import { Accelbyte } from '@accelbyte/sdk'
import { Social } from '@accelbyte/sdk-social'

const sdk = Accelbyte.SDK({
    baseURL: 'https://demo.accelbyte.io',
    clientId: '__IAM_CLIENT_ID__',
    namespace: '__NAMESPACE__',
    redirectURI: '__IAM_CLIENT_REDIRECT_URI__'
})

Social.UserStatisticApi(sdk)
     .updateStatitemValue_ByUserId_ByStatCode_ByNS(userId:string, statCode:string, data: {
             StatItemUpdate,
             queryParams?: {
             additionalKey?: string | null
    })

// return Promise<StatItemIncResult>
```

## GET /social/v1/public/namespaces/{namespace}/users/{userId}/statCycles/{cycleId}/statCycleitems

```
import { Accelbyte } from '@accelbyte/sdk'
import { Social } from '@accelbyte/sdk-social'

const sdk = Accelbyte.SDK({
    baseURL: 'https://demo.accelbyte.io',
    clientId: '__IAM_CLIENT_ID__',
    namespace: '__NAMESPACE__',
    redirectURI: '__IAM_CLIENT_REDIRECT_URI__'
})

Social.UserStatisticCycleApi(sdk)
     .getStatCycleitems_ByUserId_ByCycleId(userId:string, cycleId:string,  queryParams?: {
             limit?: number,
             offset?: number,
             sortBy?: string | null,
             statCodes?: string | null
    })

// return Promise<UserStatCycleItemPagingSlicedResult>
```

## PUT /social/v1/public/namespaces/{namespace}/users/{userId}/stats/{statCode}/statitems/value/reset

```
import { Accelbyte } from '@accelbyte/sdk'
import { Social } from '@accelbyte/sdk-social'

const sdk = Accelbyte.SDK({
    baseURL: 'https://demo.accelbyte.io',
    clientId: '__IAM_CLIENT_ID__',
    namespace: '__NAMESPACE__',
    redirectURI: '__IAM_CLIENT_REDIRECT_URI__'
})

Social.UserStatisticApi(sdk)
     .updateStatitemValueReset_ByUserId_ByStatCode(userId:string, statCode:string)

// return Promise<StatItemIncResult>
```

## GET /social/public/namespaces/{namespace}/users/{userId}/profiles/{profileId}/attributes/{attributeName}

```
import { Accelbyte } from '@accelbyte/sdk'
import { Social } from '@accelbyte/sdk-social'

const sdk = Accelbyte.SDK({
    baseURL: 'https://demo.accelbyte.io',
    clientId: '__IAM_CLIENT_ID__',
    namespace: '__NAMESPACE__',
    redirectURI: '__IAM_CLIENT_REDIRECT_URI__'
})

Social.GameProfileApi(sdk)
     .getAttribute_ByUserId_ByProfileId_ByAttributeName(userId:string, profileId:string, attributeName:string)

// return Promise<Attribute>
```

## PUT /social/public/namespaces/{namespace}/users/{userId}/profiles/{profileId}/attributes/{attributeName}

```
import { Accelbyte } from '@accelbyte/sdk'
import { Social } from '@accelbyte/sdk-social'

const sdk = Accelbyte.SDK({
    baseURL: 'https://demo.accelbyte.io',
    clientId: '__IAM_CLIENT_ID__',
    namespace: '__NAMESPACE__',
    redirectURI: '__IAM_CLIENT_REDIRECT_URI__'
})

Social.GameProfileApi(sdk)
     .updateAttribute_ByUserId_ByProfileId_ByAttributeName(userId:string, profileId:string, attributeName:string, data: {
             Attribute
    })

// return Promise<GameProfileInfo>
```







































































