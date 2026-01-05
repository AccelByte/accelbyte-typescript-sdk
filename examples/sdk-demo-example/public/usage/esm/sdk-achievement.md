## GET /achievement/v1/public/namespaces/{namespace}/tags

```
import { AccelByte } from '@accelbyte/sdk'
import { TagsApi } from '@accelbyte/sdk-achievement'

const sdk = AccelByte.SDK({
  coreConfig: {
    baseURL: '__AGS_DOMAIN__',
    clientId: '__IAM_CLIENT_ID__',
    namespace: '__NAMESPACE__',
    redirectURI: '__IAM_CLIENT_REDIRECT_URI__'
  }
})

TagsApi(sdk, { axiosConfig: { request: { headers: { Authorization: 'Bearer {access_token}' } } } })
  .getTags( queryParams?: {
             limit?: number,
             name?: string | null,
             offset?: number,
             sortBy?: 'createdAt' | 'createdAt:asc' | 'createdAt:desc' | 'name' | 'name:asc' | 'name:desc'
    })

// return Promise<PaginatedTagResponse>
```

## GET /achievement/v1/public/namespaces/{namespace}/achievements

```
import { AccelByte } from '@accelbyte/sdk'
import { AchievementsApi } from '@accelbyte/sdk-achievement'

const sdk = AccelByte.SDK({
  coreConfig: {
    baseURL: '__AGS_DOMAIN__',
    clientId: '__IAM_CLIENT_ID__',
    namespace: '__NAMESPACE__',
    redirectURI: '__IAM_CLIENT_REDIRECT_URI__'
  }
})

AchievementsApi(sdk, { axiosConfig: { request: { headers: { Authorization: 'Bearer {access_token}' } } } })
  .getAchievements( queryParams: {
             language: string | null,
             global?: boolean | null,
             limit?: number,
             offset?: number,
             sortBy?: 'listOrder' | 'listOrder:asc' | 'listOrder:desc' | 'createdAt' | 'createdAt:asc' | 'createdAt:desc' | 'updatedAt' | 'updatedAt:asc' | 'updatedAt:desc',
             tags?: string[]
    })

// return Promise<PublicAchievementsResponse>
```

## GET /achievement/v1/public/namespaces/{namespace}/global/achievements

```
import { AccelByte } from '@accelbyte/sdk'
import { GlobalAchievementsApi } from '@accelbyte/sdk-achievement'

const sdk = AccelByte.SDK({
  coreConfig: {
    baseURL: '__AGS_DOMAIN__',
    clientId: '__IAM_CLIENT_ID__',
    namespace: '__NAMESPACE__',
    redirectURI: '__IAM_CLIENT_REDIRECT_URI__'
  }
})

GlobalAchievementsApi(sdk, { axiosConfig: { request: { headers: { Authorization: 'Bearer {access_token}' } } } })
  .getGlobalAchievements( queryParams?: {
             achievementCodes?: string | null,
             limit?: number,
             offset?: number,
             sortBy?: 'achievedAt' | 'achievedAt:asc' | 'achievedAt:desc' | 'createdAt' | 'createdAt:asc' | 'createdAt:desc',
             status?: string | null,
             tags?: string[]
    })

// return Promise<PaginatedGlobalAchievementResponse>
```

## GET /achievement/v1/public/namespaces/{namespace}/users/{userId}/achievements

```
import { AccelByte } from '@accelbyte/sdk'
import { UserAchievementsApi } from '@accelbyte/sdk-achievement'

const sdk = AccelByte.SDK({
  coreConfig: {
    baseURL: '__AGS_DOMAIN__',
    clientId: '__IAM_CLIENT_ID__',
    namespace: '__NAMESPACE__',
    redirectURI: '__IAM_CLIENT_REDIRECT_URI__'
  }
})

UserAchievementsApi(sdk, { axiosConfig: { request: { headers: { Authorization: 'Bearer {access_token}' } } } })
  .getAchievements_ByUserId(userId:string,  queryParams?: {
             limit?: number,
             offset?: number,
             preferUnlocked?: boolean | null,
             sortBy?: 'achievedAt' | 'achievedAt:asc' | 'achievedAt:desc' | 'createdAt' | 'createdAt:asc' | 'createdAt:desc',
             tags?: string[]
    })

// return Promise<PaginatedUserAchievementResponse>
```

## GET /achievement/v1/public/namespaces/{namespace}/achievements/{achievementCode}

```
import { AccelByte } from '@accelbyte/sdk'
import { AchievementsApi } from '@accelbyte/sdk-achievement'

const sdk = AccelByte.SDK({
  coreConfig: {
    baseURL: '__AGS_DOMAIN__',
    clientId: '__IAM_CLIENT_ID__',
    namespace: '__NAMESPACE__',
    redirectURI: '__IAM_CLIENT_REDIRECT_URI__'
  }
})

AchievementsApi(sdk, { axiosConfig: { request: { headers: { Authorization: 'Bearer {access_token}' } } } })
  .getAchievement_ByAchievementCode(achievementCode:string,  queryParams: {
             language: string | null
    })

// return Promise<PublicAchievementResponse>
```

## GET /achievement/v1/public/namespaces/{namespace}/users/{userId}/global/achievements

```
import { AccelByte } from '@accelbyte/sdk'
import { GlobalAchievementsApi } from '@accelbyte/sdk-achievement'

const sdk = AccelByte.SDK({
  coreConfig: {
    baseURL: '__AGS_DOMAIN__',
    clientId: '__IAM_CLIENT_ID__',
    namespace: '__NAMESPACE__',
    redirectURI: '__IAM_CLIENT_REDIRECT_URI__'
  }
})

GlobalAchievementsApi(sdk, { axiosConfig: { request: { headers: { Authorization: 'Bearer {access_token}' } } } })
  .getGlobalAchievements_ByUserId(userId:string,  queryParams?: {
             achievementCodes?: string | null,
             limit?: number,
             offset?: number,
             sortBy?: 'contributedValue' | 'contributedValue:asc' | 'contributedValue:desc',
             tags?: string[]
    })

// return Promise<PaginatedUserContributionResponse>
```

## GET /achievement/v1/public/namespaces/{namespace}/global/achievements/{achievementCode}/contributors

```
import { AccelByte } from '@accelbyte/sdk'
import { GlobalAchievementsApi } from '@accelbyte/sdk-achievement'

const sdk = AccelByte.SDK({
  coreConfig: {
    baseURL: '__AGS_DOMAIN__',
    clientId: '__IAM_CLIENT_ID__',
    namespace: '__NAMESPACE__',
    redirectURI: '__IAM_CLIENT_REDIRECT_URI__'
  }
})

GlobalAchievementsApi(sdk, { axiosConfig: { request: { headers: { Authorization: 'Bearer {access_token}' } } } })
  .getContributorsGlobal_ByAchievementCode(achievementCode:string,  queryParams?: {
             limit?: number,
             offset?: number,
             sortBy?: 'contributedValue' | 'contributedValue:asc' | 'contributedValue:desc'
    })

// return Promise<PaginatedContributorResponse>
```

## PUT /achievement/v1/public/namespaces/{namespace}/users/{userId}/achievements/{achievementCode}/unlock

```
import { AccelByte } from '@accelbyte/sdk'
import { UserAchievementsApi } from '@accelbyte/sdk-achievement'

const sdk = AccelByte.SDK({
  coreConfig: {
    baseURL: '__AGS_DOMAIN__',
    clientId: '__IAM_CLIENT_ID__',
    namespace: '__NAMESPACE__',
    redirectURI: '__IAM_CLIENT_REDIRECT_URI__'
  }
})

UserAchievementsApi(sdk, { axiosConfig: { request: { headers: { Authorization: 'Bearer {access_token}' } } } })
  .updateUnlock_ByUserId_ByAchievementCode(userId:string, achievementCode:string)

// return Promise
```

## POST /achievement/v1/public/namespaces/{namespace}/users/{userId}/global/achievements/{achievementCode}/claim

```
import { AccelByte } from '@accelbyte/sdk'
import { GlobalAchievementsApi } from '@accelbyte/sdk-achievement'

const sdk = AccelByte.SDK({
  coreConfig: {
    baseURL: '__AGS_DOMAIN__',
    clientId: '__IAM_CLIENT_ID__',
    namespace: '__NAMESPACE__',
    redirectURI: '__IAM_CLIENT_REDIRECT_URI__'
  }
})

GlobalAchievementsApi(sdk, { axiosConfig: { request: { headers: { Authorization: 'Bearer {access_token}' } } } })
  .updateClaimGlobal_ByUserId_ByAchievementCode(userId:string, achievementCode:string)

// return Promise
```

## GET /achievement/v1/admin/namespaces/{namespace}/tags

```
import { AccelByte } from '@accelbyte/sdk'
import { TagsAdminApi } from '@accelbyte/sdk-achievement'

const sdk = AccelByte.SDK({
  coreConfig: {
    baseURL: '__AGS_DOMAIN__',
    clientId: '__IAM_CLIENT_ID__',
    namespace: '__NAMESPACE__',
    redirectURI: '__IAM_CLIENT_REDIRECT_URI__'
  }
})

TagsAdminApi(sdk, { axiosConfig: { request: { headers: { Authorization: 'Bearer {access_token}' } } } })
  .getTags( queryParams?: {
             limit?: number,
             name?: string | null,
             offset?: number,
             sortBy?: 'createdAt' | 'createdAt:asc' | 'createdAt:desc' | 'name' | 'name:asc' | 'name:desc'
    })

// return Promise<PaginatedTagResponse>
```

## GET /achievement/v1/admin/namespaces/{namespace}/achievements

```
import { AccelByte } from '@accelbyte/sdk'
import { AchievementsAdminApi } from '@accelbyte/sdk-achievement'

const sdk = AccelByte.SDK({
  coreConfig: {
    baseURL: '__AGS_DOMAIN__',
    clientId: '__IAM_CLIENT_ID__',
    namespace: '__NAMESPACE__',
    redirectURI: '__IAM_CLIENT_REDIRECT_URI__'
  }
})

AchievementsAdminApi(sdk, { axiosConfig: { request: { headers: { Authorization: 'Bearer {access_token}' } } } })
  .getAchievements( queryParams?: {
             global?: boolean | null,
             limit?: number,
             offset?: number,
             sortBy?: 'listOrder' | 'listOrder:asc' | 'listOrder:desc' | 'createdAt' | 'createdAt:asc' | 'createdAt:desc' | 'updatedAt' | 'updatedAt:asc' | 'updatedAt:desc',
             tags?: string[]
    })

// return Promise<PaginatedAchievementResponse>
```

## POST /achievement/v1/admin/namespaces/{namespace}/achievements

```
import { AccelByte } from '@accelbyte/sdk'
import { AchievementsAdminApi } from '@accelbyte/sdk-achievement'

const sdk = AccelByte.SDK({
  coreConfig: {
    baseURL: '__AGS_DOMAIN__',
    clientId: '__IAM_CLIENT_ID__',
    namespace: '__NAMESPACE__',
    redirectURI: '__IAM_CLIENT_REDIRECT_URI__'
  }
})

AchievementsAdminApi(sdk, { axiosConfig: { request: { headers: { Authorization: 'Bearer {access_token}' } } } })
  .createAchievement(data: {
             AchievementRequest
    })

// return Promise<AchievementResponse>
```

## POST /achievement/v1/admin/namespaces/{namespace}/platforms/psn/bulk

```
import { AccelByte } from '@accelbyte/sdk'
import { PlatformAchievementAdminApi } from '@accelbyte/sdk-achievement'

const sdk = AccelByte.SDK({
  coreConfig: {
    baseURL: '__AGS_DOMAIN__',
    clientId: '__IAM_CLIENT_ID__',
    namespace: '__NAMESPACE__',
    redirectURI: '__IAM_CLIENT_REDIRECT_URI__'
  }
})

PlatformAchievementAdminApi(sdk, { axiosConfig: { request: { headers: { Authorization: 'Bearer {access_token}' } } } })
  .createPlatformPsnBulk(data: {
             BulkCreatePsnEvents
    })

// return Promise<BulkCreatePsnEventResponse>
```

## GET /achievement/v1/admin/namespaces/{namespace}/achievements/export

```
import { AccelByte } from '@accelbyte/sdk'
import { AchievementsAdminApi } from '@accelbyte/sdk-achievement'

const sdk = AccelByte.SDK({
  coreConfig: {
    baseURL: '__AGS_DOMAIN__',
    clientId: '__IAM_CLIENT_ID__',
    namespace: '__NAMESPACE__',
    redirectURI: '__IAM_CLIENT_REDIRECT_URI__'
  }
})

AchievementsAdminApi(sdk, { axiosConfig: { request: { headers: { Authorization: 'Bearer {access_token}' } } } })
  .getAchievementsExport( queryParams?: {
             tags?: string[]
    })

// return Promise
```

## POST /achievement/v1/admin/namespaces/{namespace}/achievements/import

```
import { AccelByte } from '@accelbyte/sdk'
import { AchievementsAdminApi } from '@accelbyte/sdk-achievement'

const sdk = AccelByte.SDK({
  coreConfig: {
    baseURL: '__AGS_DOMAIN__',
    clientId: '__IAM_CLIENT_ID__',
    namespace: '__NAMESPACE__',
    redirectURI: '__IAM_CLIENT_REDIRECT_URI__'
  }
})

AchievementsAdminApi(sdk, { axiosConfig: { request: { headers: { Authorization: 'Bearer {access_token}' } } } })
  .updateAchievementImport(data: {
             file?: File,
             strategy?: string | null
    })

// return Promise<ImportConfigResponse>
```

## GET /achievement/v1/admin/namespaces/{namespace}/global/achievements

```
import { AccelByte } from '@accelbyte/sdk'
import { GlobalAchievementsAdminApi } from '@accelbyte/sdk-achievement'

const sdk = AccelByte.SDK({
  coreConfig: {
    baseURL: '__AGS_DOMAIN__',
    clientId: '__IAM_CLIENT_ID__',
    namespace: '__NAMESPACE__',
    redirectURI: '__IAM_CLIENT_REDIRECT_URI__'
  }
})

GlobalAchievementsAdminApi(sdk, { axiosConfig: { request: { headers: { Authorization: 'Bearer {access_token}' } } } })
  .getGlobalAchievements( queryParams?: {
             achievementCodes?: string | null,
             limit?: number,
             offset?: number,
             sortBy?: 'achievedAt' | 'achievedAt:asc' | 'achievedAt:desc' | 'createdAt' | 'createdAt:asc' | 'createdAt:desc',
             status?: string | null,
             tags?: string[]
    })

// return Promise<PaginatedGlobalAchievementResponse>
```

## GET /achievement/v1/admin/namespaces/{namespace}/users/{userId}/achievements

```
import { AccelByte } from '@accelbyte/sdk'
import { UserAchievementsAdminApi } from '@accelbyte/sdk-achievement'

const sdk = AccelByte.SDK({
  coreConfig: {
    baseURL: '__AGS_DOMAIN__',
    clientId: '__IAM_CLIENT_ID__',
    namespace: '__NAMESPACE__',
    redirectURI: '__IAM_CLIENT_REDIRECT_URI__'
  }
})

UserAchievementsAdminApi(sdk, { axiosConfig: { request: { headers: { Authorization: 'Bearer {access_token}' } } } })
  .getAchievements_ByUserId(userId:string,  queryParams?: {
             limit?: number,
             offset?: number,
             preferUnlocked?: boolean | null,
             sortBy?: 'achievedAt' | 'achievedAt:asc' | 'achievedAt:desc' | 'createdAt' | 'createdAt:asc' | 'createdAt:desc',
             tags?: string[]
    })

// return Promise<PaginatedUserAchievementResponse>
```

## DELETE /achievement/v1/admin/namespaces/{namespace}/achievements/{achievementCode}

```
import { AccelByte } from '@accelbyte/sdk'
import { AchievementsAdminApi } from '@accelbyte/sdk-achievement'

const sdk = AccelByte.SDK({
  coreConfig: {
    baseURL: '__AGS_DOMAIN__',
    clientId: '__IAM_CLIENT_ID__',
    namespace: '__NAMESPACE__',
    redirectURI: '__IAM_CLIENT_REDIRECT_URI__'
  }
})

AchievementsAdminApi(sdk, { axiosConfig: { request: { headers: { Authorization: 'Bearer {access_token}' } } } })
  .deleteAchievement_ByAchievementCode(achievementCode:string)

// return Promise
```

## GET /achievement/v1/admin/namespaces/{namespace}/achievements/{achievementCode}

```
import { AccelByte } from '@accelbyte/sdk'
import { AchievementsAdminApi } from '@accelbyte/sdk-achievement'

const sdk = AccelByte.SDK({
  coreConfig: {
    baseURL: '__AGS_DOMAIN__',
    clientId: '__IAM_CLIENT_ID__',
    namespace: '__NAMESPACE__',
    redirectURI: '__IAM_CLIENT_REDIRECT_URI__'
  }
})

AchievementsAdminApi(sdk, { axiosConfig: { request: { headers: { Authorization: 'Bearer {access_token}' } } } })
  .getAchievement_ByAchievementCode(achievementCode:string)

// return Promise<AchievementResponse>
```

## PATCH /achievement/v1/admin/namespaces/{namespace}/achievements/{achievementCode}

```
import { AccelByte } from '@accelbyte/sdk'
import { AchievementsAdminApi } from '@accelbyte/sdk-achievement'

const sdk = AccelByte.SDK({
  coreConfig: {
    baseURL: '__AGS_DOMAIN__',
    clientId: '__IAM_CLIENT_ID__',
    namespace: '__NAMESPACE__',
    redirectURI: '__IAM_CLIENT_REDIRECT_URI__'
  }
})

AchievementsAdminApi(sdk, { axiosConfig: { request: { headers: { Authorization: 'Bearer {access_token}' } } } })
  .patchAchievement_ByAchievementCode(achievementCode:string, data: {
             AchievementOrderUpdateRequest
    })

// return Promise
```

## PUT /achievement/v1/admin/namespaces/{namespace}/achievements/{achievementCode}

```
import { AccelByte } from '@accelbyte/sdk'
import { AchievementsAdminApi } from '@accelbyte/sdk-achievement'

const sdk = AccelByte.SDK({
  coreConfig: {
    baseURL: '__AGS_DOMAIN__',
    clientId: '__IAM_CLIENT_ID__',
    namespace: '__NAMESPACE__',
    redirectURI: '__IAM_CLIENT_REDIRECT_URI__'
  }
})

AchievementsAdminApi(sdk, { axiosConfig: { request: { headers: { Authorization: 'Bearer {access_token}' } } } })
  .updateAchievement_ByAchievementCode(achievementCode:string, data: {
             AchievementUpdateRequest
    })

// return Promise<AchievementResponse>
```

## GET /achievement/v1/admin/namespaces/{namespace}/users/{userId}/global/achievements

```
import { AccelByte } from '@accelbyte/sdk'
import { GlobalAchievementsAdminApi } from '@accelbyte/sdk-achievement'

const sdk = AccelByte.SDK({
  coreConfig: {
    baseURL: '__AGS_DOMAIN__',
    clientId: '__IAM_CLIENT_ID__',
    namespace: '__NAMESPACE__',
    redirectURI: '__IAM_CLIENT_REDIRECT_URI__'
  }
})

GlobalAchievementsAdminApi(sdk, { axiosConfig: { request: { headers: { Authorization: 'Bearer {access_token}' } } } })
  .getGlobalAchievements_ByUserId(userId:string,  queryParams?: {
             achievementCodes?: string | null,
             limit?: number,
             offset?: number,
             sortBy?: 'contributedValue' | 'contributedValue:asc' | 'contributedValue:desc',
             tags?: string[]
    })

// return Promise<PaginatedUserContributionResponse>
```

## DELETE /achievement/v1/admin/namespaces/{namespace}/users/{userId}/anonymization/achievements

```
import { AccelByte } from '@accelbyte/sdk'
import { AnonymizationAdminApi } from '@accelbyte/sdk-achievement'

const sdk = AccelByte.SDK({
  coreConfig: {
    baseURL: '__AGS_DOMAIN__',
    clientId: '__IAM_CLIENT_ID__',
    namespace: '__NAMESPACE__',
    redirectURI: '__IAM_CLIENT_REDIRECT_URI__'
  }
})

AnonymizationAdminApi(sdk, { axiosConfig: { request: { headers: { Authorization: 'Bearer {access_token}' } } } })
  .deleteAnonymizationAchievement_ByUserId(userId:string)

// return Promise
```

## DELETE /achievement/v1/admin/namespaces/{namespace}/global/achievements/{achievementCode}/reset

```
import { AccelByte } from '@accelbyte/sdk'
import { GlobalAchievementsAdminApi } from '@accelbyte/sdk-achievement'

const sdk = AccelByte.SDK({
  coreConfig: {
    baseURL: '__AGS_DOMAIN__',
    clientId: '__IAM_CLIENT_ID__',
    namespace: '__NAMESPACE__',
    redirectURI: '__IAM_CLIENT_REDIRECT_URI__'
  }
})

GlobalAchievementsAdminApi(sdk, { axiosConfig: { request: { headers: { Authorization: 'Bearer {access_token}' } } } })
  .deleteResetGlobal_ByAchievementCode(achievementCode:string)

// return Promise
```

## GET /achievement/v1/admin/namespaces/{namespace}/global/achievements/{achievementCode}/contributors

```
import { AccelByte } from '@accelbyte/sdk'
import { GlobalAchievementsAdminApi } from '@accelbyte/sdk-achievement'

const sdk = AccelByte.SDK({
  coreConfig: {
    baseURL: '__AGS_DOMAIN__',
    clientId: '__IAM_CLIENT_ID__',
    namespace: '__NAMESPACE__',
    redirectURI: '__IAM_CLIENT_REDIRECT_URI__'
  }
})

GlobalAchievementsAdminApi(sdk, { axiosConfig: { request: { headers: { Authorization: 'Bearer {access_token}' } } } })
  .getContributorsGlobal_ByAchievementCode(achievementCode:string,  queryParams?: {
             limit?: number,
             offset?: number,
             sortBy?: 'contributedValue' | 'contributedValue:asc' | 'contributedValue:desc'
    })

// return Promise<PaginatedContributorResponse>
```

## DELETE /achievement/v1/admin/namespaces/{namespace}/users/{userId}/achievements/{achievementCode}/reset

```
import { AccelByte } from '@accelbyte/sdk'
import { UserAchievementsAdminApi } from '@accelbyte/sdk-achievement'

const sdk = AccelByte.SDK({
  coreConfig: {
    baseURL: '__AGS_DOMAIN__',
    clientId: '__IAM_CLIENT_ID__',
    namespace: '__NAMESPACE__',
    redirectURI: '__IAM_CLIENT_REDIRECT_URI__'
  }
})

UserAchievementsAdminApi(sdk, { axiosConfig: { request: { headers: { Authorization: 'Bearer {access_token}' } } } })
  .deleteReset_ByUserId_ByAchievementCode(userId:string, achievementCode:string)

// return Promise
```

## PUT /achievement/v1/admin/namespaces/{namespace}/users/{userId}/achievements/{achievementCode}/unlock

```
import { AccelByte } from '@accelbyte/sdk'
import { UserAchievementsAdminApi } from '@accelbyte/sdk-achievement'

const sdk = AccelByte.SDK({
  coreConfig: {
    baseURL: '__AGS_DOMAIN__',
    clientId: '__IAM_CLIENT_ID__',
    namespace: '__NAMESPACE__',
    redirectURI: '__IAM_CLIENT_REDIRECT_URI__'
  }
})

UserAchievementsAdminApi(sdk, { axiosConfig: { request: { headers: { Authorization: 'Bearer {access_token}' } } } })
  .updateUnlock_ByUserId_ByAchievementCode(userId:string, achievementCode:string)

// return Promise
```