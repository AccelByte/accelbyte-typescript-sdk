## GET /achievement/v1/public/namespaces/{namespace}/tags

```
<script src="https://unpkg.com/@accelbyte/sdk/dist/global/index.global.js"></script>
<script src="https://unpkg.com/@accelbyte/sdk-achievement/dist/global/index.global.js"></script>
  
<script>

const sdk = AccelByteSDK.AccelByte.SDK({
  coreConfig: {
    baseURL: '__AGS_DOMAIN__',
    clientId: '__IAM_CLIENT_ID__',
    namespace: '__NAMESPACE__',
    redirectURI: '__IAM_CLIENT_REDIRECT_URI__'
  }
})

AccelByteSDK_Achievement.TagsApi(sdk, { axiosConfig: { request: { headers: { Authorization: 'Bearer {access_token}' } } } })
  .getTags( queryParams?: {
             limit?: number,
             name?: string | null,
             offset?: number,
             sortBy?: 'createdAt' | 'createdAt:asc' | 'createdAt:desc' | 'name' | 'name:asc' | 'name:desc'
    })

// return Promise<PaginatedTagResponse>

</script>
```

## GET /achievement/v1/public/namespaces/{namespace}/achievements

```
<script src="https://unpkg.com/@accelbyte/sdk/dist/global/index.global.js"></script>
<script src="https://unpkg.com/@accelbyte/sdk-achievement/dist/global/index.global.js"></script>
  
<script>

const sdk = AccelByteSDK.AccelByte.SDK({
  coreConfig: {
    baseURL: '__AGS_DOMAIN__',
    clientId: '__IAM_CLIENT_ID__',
    namespace: '__NAMESPACE__',
    redirectURI: '__IAM_CLIENT_REDIRECT_URI__'
  }
})

AccelByteSDK_Achievement.AchievementsApi(sdk, { axiosConfig: { request: { headers: { Authorization: 'Bearer {access_token}' } } } })
  .getAchievements( queryParams: {
             language: string | null,
             global?: boolean | null,
             limit?: number,
             offset?: number,
             sortBy?: 'listOrder' | 'listOrder:asc' | 'listOrder:desc' | 'createdAt' | 'createdAt:asc' | 'createdAt:desc' | 'updatedAt' | 'updatedAt:asc' | 'updatedAt:desc',
             tags?: string[]
    })

// return Promise<PublicAchievementsResponse>

</script>
```

## GET /achievement/v1/public/namespaces/{namespace}/global/achievements

```
<script src="https://unpkg.com/@accelbyte/sdk/dist/global/index.global.js"></script>
<script src="https://unpkg.com/@accelbyte/sdk-achievement/dist/global/index.global.js"></script>
  
<script>

const sdk = AccelByteSDK.AccelByte.SDK({
  coreConfig: {
    baseURL: '__AGS_DOMAIN__',
    clientId: '__IAM_CLIENT_ID__',
    namespace: '__NAMESPACE__',
    redirectURI: '__IAM_CLIENT_REDIRECT_URI__'
  }
})

AccelByteSDK_Achievement.GlobalAchievementsApi(sdk, { axiosConfig: { request: { headers: { Authorization: 'Bearer {access_token}' } } } })
  .getGlobalAchievements( queryParams?: {
             achievementCodes?: string | null,
             limit?: number,
             offset?: number,
             sortBy?: 'achievedAt' | 'achievedAt:asc' | 'achievedAt:desc' | 'createdAt' | 'createdAt:asc' | 'createdAt:desc',
             status?: string | null,
             tags?: string[]
    })

// return Promise<PaginatedGlobalAchievementResponse>

</script>
```

## GET /achievement/v1/public/namespaces/{namespace}/users/{userId}/achievements

```
<script src="https://unpkg.com/@accelbyte/sdk/dist/global/index.global.js"></script>
<script src="https://unpkg.com/@accelbyte/sdk-achievement/dist/global/index.global.js"></script>
  
<script>

const sdk = AccelByteSDK.AccelByte.SDK({
  coreConfig: {
    baseURL: '__AGS_DOMAIN__',
    clientId: '__IAM_CLIENT_ID__',
    namespace: '__NAMESPACE__',
    redirectURI: '__IAM_CLIENT_REDIRECT_URI__'
  }
})

AccelByteSDK_Achievement.UserAchievementsApi(sdk, { axiosConfig: { request: { headers: { Authorization: 'Bearer {access_token}' } } } })
  .getAchievements_ByUserId(userId:string,  queryParams?: {
             limit?: number,
             offset?: number,
             preferUnlocked?: boolean | null,
             sortBy?: 'achievedAt' | 'achievedAt:asc' | 'achievedAt:desc' | 'createdAt' | 'createdAt:asc' | 'createdAt:desc',
             tags?: string[]
    })

// return Promise<PaginatedUserAchievementResponse>

</script>
```

## GET /achievement/v1/public/namespaces/{namespace}/achievements/{achievementCode}

```
<script src="https://unpkg.com/@accelbyte/sdk/dist/global/index.global.js"></script>
<script src="https://unpkg.com/@accelbyte/sdk-achievement/dist/global/index.global.js"></script>
  
<script>

const sdk = AccelByteSDK.AccelByte.SDK({
  coreConfig: {
    baseURL: '__AGS_DOMAIN__',
    clientId: '__IAM_CLIENT_ID__',
    namespace: '__NAMESPACE__',
    redirectURI: '__IAM_CLIENT_REDIRECT_URI__'
  }
})

AccelByteSDK_Achievement.AchievementsApi(sdk, { axiosConfig: { request: { headers: { Authorization: 'Bearer {access_token}' } } } })
  .getAchievement_ByAchievementCode(achievementCode:string,  queryParams: {
             language: string | null
    })

// return Promise<PublicAchievementResponse>

</script>
```

## GET /achievement/v1/public/namespaces/{namespace}/users/{userId}/global/achievements

```
<script src="https://unpkg.com/@accelbyte/sdk/dist/global/index.global.js"></script>
<script src="https://unpkg.com/@accelbyte/sdk-achievement/dist/global/index.global.js"></script>
  
<script>

const sdk = AccelByteSDK.AccelByte.SDK({
  coreConfig: {
    baseURL: '__AGS_DOMAIN__',
    clientId: '__IAM_CLIENT_ID__',
    namespace: '__NAMESPACE__',
    redirectURI: '__IAM_CLIENT_REDIRECT_URI__'
  }
})

AccelByteSDK_Achievement.GlobalAchievementsApi(sdk, { axiosConfig: { request: { headers: { Authorization: 'Bearer {access_token}' } } } })
  .getGlobalAchievements_ByUserId(userId:string,  queryParams?: {
             achievementCodes?: string | null,
             limit?: number,
             offset?: number,
             sortBy?: 'contributedValue' | 'contributedValue:asc' | 'contributedValue:desc',
             tags?: string[]
    })

// return Promise<PaginatedUserContributionResponse>

</script>
```

## GET /achievement/v1/public/namespaces/{namespace}/global/achievements/{achievementCode}/contributors

```
<script src="https://unpkg.com/@accelbyte/sdk/dist/global/index.global.js"></script>
<script src="https://unpkg.com/@accelbyte/sdk-achievement/dist/global/index.global.js"></script>
  
<script>

const sdk = AccelByteSDK.AccelByte.SDK({
  coreConfig: {
    baseURL: '__AGS_DOMAIN__',
    clientId: '__IAM_CLIENT_ID__',
    namespace: '__NAMESPACE__',
    redirectURI: '__IAM_CLIENT_REDIRECT_URI__'
  }
})

AccelByteSDK_Achievement.GlobalAchievementsApi(sdk, { axiosConfig: { request: { headers: { Authorization: 'Bearer {access_token}' } } } })
  .getContributorsGlobal_ByAchievementCode(achievementCode:string,  queryParams?: {
             limit?: number,
             offset?: number,
             sortBy?: 'contributedValue' | 'contributedValue:asc' | 'contributedValue:desc'
    })

// return Promise<PaginatedContributorResponse>

</script>
```

## PUT /achievement/v1/public/namespaces/{namespace}/users/{userId}/achievements/{achievementCode}/unlock

```
<script src="https://unpkg.com/@accelbyte/sdk/dist/global/index.global.js"></script>
<script src="https://unpkg.com/@accelbyte/sdk-achievement/dist/global/index.global.js"></script>
  
<script>

const sdk = AccelByteSDK.AccelByte.SDK({
  coreConfig: {
    baseURL: '__AGS_DOMAIN__',
    clientId: '__IAM_CLIENT_ID__',
    namespace: '__NAMESPACE__',
    redirectURI: '__IAM_CLIENT_REDIRECT_URI__'
  }
})

AccelByteSDK_Achievement.UserAchievementsApi(sdk, { axiosConfig: { request: { headers: { Authorization: 'Bearer {access_token}' } } } })
  .updateUnlock_ByUserId_ByAchievementCode(userId:string, achievementCode:string)

// return Promise

</script>
```

## POST /achievement/v1/public/namespaces/{namespace}/users/{userId}/global/achievements/{achievementCode}/claim

```
<script src="https://unpkg.com/@accelbyte/sdk/dist/global/index.global.js"></script>
<script src="https://unpkg.com/@accelbyte/sdk-achievement/dist/global/index.global.js"></script>
  
<script>

const sdk = AccelByteSDK.AccelByte.SDK({
  coreConfig: {
    baseURL: '__AGS_DOMAIN__',
    clientId: '__IAM_CLIENT_ID__',
    namespace: '__NAMESPACE__',
    redirectURI: '__IAM_CLIENT_REDIRECT_URI__'
  }
})

AccelByteSDK_Achievement.GlobalAchievementsApi(sdk, { axiosConfig: { request: { headers: { Authorization: 'Bearer {access_token}' } } } })
  .updateClaimGlobal_ByUserId_ByAchievementCode(userId:string, achievementCode:string)

// return Promise

</script>
```

## GET /achievement/v1/admin/namespaces/{namespace}/tags

```
<script src="https://unpkg.com/@accelbyte/sdk/dist/global/index.global.js"></script>
<script src="https://unpkg.com/@accelbyte/sdk-achievement/dist/global/index.global.js"></script>
  
<script>

const sdk = AccelByteSDK.AccelByte.SDK({
  coreConfig: {
    baseURL: '__AGS_DOMAIN__',
    clientId: '__IAM_CLIENT_ID__',
    namespace: '__NAMESPACE__',
    redirectURI: '__IAM_CLIENT_REDIRECT_URI__'
  }
})

AccelByteSDK_Achievement.TagsAdminApi(sdk, { axiosConfig: { request: { headers: { Authorization: 'Bearer {access_token}' } } } })
  .getTags( queryParams?: {
             limit?: number,
             name?: string | null,
             offset?: number,
             sortBy?: 'createdAt' | 'createdAt:asc' | 'createdAt:desc' | 'name' | 'name:asc' | 'name:desc'
    })

// return Promise<PaginatedTagResponse>

</script>
```

## GET /achievement/v1/admin/namespaces/{namespace}/achievements

```
<script src="https://unpkg.com/@accelbyte/sdk/dist/global/index.global.js"></script>
<script src="https://unpkg.com/@accelbyte/sdk-achievement/dist/global/index.global.js"></script>
  
<script>

const sdk = AccelByteSDK.AccelByte.SDK({
  coreConfig: {
    baseURL: '__AGS_DOMAIN__',
    clientId: '__IAM_CLIENT_ID__',
    namespace: '__NAMESPACE__',
    redirectURI: '__IAM_CLIENT_REDIRECT_URI__'
  }
})

AccelByteSDK_Achievement.AchievementsAdminApi(sdk, { axiosConfig: { request: { headers: { Authorization: 'Bearer {access_token}' } } } })
  .getAchievements( queryParams?: {
             global?: boolean | null,
             limit?: number,
             offset?: number,
             sortBy?: 'listOrder' | 'listOrder:asc' | 'listOrder:desc' | 'createdAt' | 'createdAt:asc' | 'createdAt:desc' | 'updatedAt' | 'updatedAt:asc' | 'updatedAt:desc',
             tags?: string[]
    })

// return Promise<PaginatedAchievementResponse>

</script>
```

## POST /achievement/v1/admin/namespaces/{namespace}/achievements

```
<script src="https://unpkg.com/@accelbyte/sdk/dist/global/index.global.js"></script>
<script src="https://unpkg.com/@accelbyte/sdk-achievement/dist/global/index.global.js"></script>
  
<script>

const sdk = AccelByteSDK.AccelByte.SDK({
  coreConfig: {
    baseURL: '__AGS_DOMAIN__',
    clientId: '__IAM_CLIENT_ID__',
    namespace: '__NAMESPACE__',
    redirectURI: '__IAM_CLIENT_REDIRECT_URI__'
  }
})

AccelByteSDK_Achievement.AchievementsAdminApi(sdk, { axiosConfig: { request: { headers: { Authorization: 'Bearer {access_token}' } } } })
  .createAchievement(data: {
             AchievementRequest
    })

// return Promise<AchievementResponse>

</script>
```

## POST /achievement/v1/admin/namespaces/{namespace}/platforms/psn/bulk

```
<script src="https://unpkg.com/@accelbyte/sdk/dist/global/index.global.js"></script>
<script src="https://unpkg.com/@accelbyte/sdk-achievement/dist/global/index.global.js"></script>
  
<script>

const sdk = AccelByteSDK.AccelByte.SDK({
  coreConfig: {
    baseURL: '__AGS_DOMAIN__',
    clientId: '__IAM_CLIENT_ID__',
    namespace: '__NAMESPACE__',
    redirectURI: '__IAM_CLIENT_REDIRECT_URI__'
  }
})

AccelByteSDK_Achievement.PlatformAchievementAdminApi(sdk, { axiosConfig: { request: { headers: { Authorization: 'Bearer {access_token}' } } } })
  .createPlatformPsnBulk(data: {
             BulkCreatePsnEvents
    })

// return Promise<BulkCreatePsnEventResponse>

</script>
```

## GET /achievement/v1/admin/namespaces/{namespace}/achievements/export

```
<script src="https://unpkg.com/@accelbyte/sdk/dist/global/index.global.js"></script>
<script src="https://unpkg.com/@accelbyte/sdk-achievement/dist/global/index.global.js"></script>
  
<script>

const sdk = AccelByteSDK.AccelByte.SDK({
  coreConfig: {
    baseURL: '__AGS_DOMAIN__',
    clientId: '__IAM_CLIENT_ID__',
    namespace: '__NAMESPACE__',
    redirectURI: '__IAM_CLIENT_REDIRECT_URI__'
  }
})

AccelByteSDK_Achievement.AchievementsAdminApi(sdk, { axiosConfig: { request: { headers: { Authorization: 'Bearer {access_token}' } } } })
  .getAchievementsExport( queryParams?: {
             tags?: string[]
    })

// return Promise

</script>
```

## POST /achievement/v1/admin/namespaces/{namespace}/achievements/import

```
<script src="https://unpkg.com/@accelbyte/sdk/dist/global/index.global.js"></script>
<script src="https://unpkg.com/@accelbyte/sdk-achievement/dist/global/index.global.js"></script>
  
<script>

const sdk = AccelByteSDK.AccelByte.SDK({
  coreConfig: {
    baseURL: '__AGS_DOMAIN__',
    clientId: '__IAM_CLIENT_ID__',
    namespace: '__NAMESPACE__',
    redirectURI: '__IAM_CLIENT_REDIRECT_URI__'
  }
})

AccelByteSDK_Achievement.AchievementsAdminApi(sdk, { axiosConfig: { request: { headers: { Authorization: 'Bearer {access_token}' } } } })
  .updateAchievementImport(data: {
             file?: File,
             strategy?: string | null
    })

// return Promise<ImportConfigResponse>

</script>
```

## GET /achievement/v1/admin/namespaces/{namespace}/global/achievements

```
<script src="https://unpkg.com/@accelbyte/sdk/dist/global/index.global.js"></script>
<script src="https://unpkg.com/@accelbyte/sdk-achievement/dist/global/index.global.js"></script>
  
<script>

const sdk = AccelByteSDK.AccelByte.SDK({
  coreConfig: {
    baseURL: '__AGS_DOMAIN__',
    clientId: '__IAM_CLIENT_ID__',
    namespace: '__NAMESPACE__',
    redirectURI: '__IAM_CLIENT_REDIRECT_URI__'
  }
})

AccelByteSDK_Achievement.GlobalAchievementsAdminApi(sdk, { axiosConfig: { request: { headers: { Authorization: 'Bearer {access_token}' } } } })
  .getGlobalAchievements( queryParams?: {
             achievementCodes?: string | null,
             limit?: number,
             offset?: number,
             sortBy?: 'achievedAt' | 'achievedAt:asc' | 'achievedAt:desc' | 'createdAt' | 'createdAt:asc' | 'createdAt:desc',
             status?: string | null,
             tags?: string[]
    })

// return Promise<PaginatedGlobalAchievementResponse>

</script>
```

## GET /achievement/v1/admin/namespaces/{namespace}/users/{userId}/achievements

```
<script src="https://unpkg.com/@accelbyte/sdk/dist/global/index.global.js"></script>
<script src="https://unpkg.com/@accelbyte/sdk-achievement/dist/global/index.global.js"></script>
  
<script>

const sdk = AccelByteSDK.AccelByte.SDK({
  coreConfig: {
    baseURL: '__AGS_DOMAIN__',
    clientId: '__IAM_CLIENT_ID__',
    namespace: '__NAMESPACE__',
    redirectURI: '__IAM_CLIENT_REDIRECT_URI__'
  }
})

AccelByteSDK_Achievement.UserAchievementsAdminApi(sdk, { axiosConfig: { request: { headers: { Authorization: 'Bearer {access_token}' } } } })
  .getAchievements_ByUserId(userId:string,  queryParams?: {
             limit?: number,
             offset?: number,
             preferUnlocked?: boolean | null,
             sortBy?: 'achievedAt' | 'achievedAt:asc' | 'achievedAt:desc' | 'createdAt' | 'createdAt:asc' | 'createdAt:desc',
             tags?: string[]
    })

// return Promise<PaginatedUserAchievementResponse>

</script>
```

## DELETE /achievement/v1/admin/namespaces/{namespace}/achievements/{achievementCode}

```
<script src="https://unpkg.com/@accelbyte/sdk/dist/global/index.global.js"></script>
<script src="https://unpkg.com/@accelbyte/sdk-achievement/dist/global/index.global.js"></script>
  
<script>

const sdk = AccelByteSDK.AccelByte.SDK({
  coreConfig: {
    baseURL: '__AGS_DOMAIN__',
    clientId: '__IAM_CLIENT_ID__',
    namespace: '__NAMESPACE__',
    redirectURI: '__IAM_CLIENT_REDIRECT_URI__'
  }
})

AccelByteSDK_Achievement.AchievementsAdminApi(sdk, { axiosConfig: { request: { headers: { Authorization: 'Bearer {access_token}' } } } })
  .deleteAchievement_ByAchievementCode(achievementCode:string)

// return Promise

</script>
```

## GET /achievement/v1/admin/namespaces/{namespace}/achievements/{achievementCode}

```
<script src="https://unpkg.com/@accelbyte/sdk/dist/global/index.global.js"></script>
<script src="https://unpkg.com/@accelbyte/sdk-achievement/dist/global/index.global.js"></script>
  
<script>

const sdk = AccelByteSDK.AccelByte.SDK({
  coreConfig: {
    baseURL: '__AGS_DOMAIN__',
    clientId: '__IAM_CLIENT_ID__',
    namespace: '__NAMESPACE__',
    redirectURI: '__IAM_CLIENT_REDIRECT_URI__'
  }
})

AccelByteSDK_Achievement.AchievementsAdminApi(sdk, { axiosConfig: { request: { headers: { Authorization: 'Bearer {access_token}' } } } })
  .getAchievement_ByAchievementCode(achievementCode:string)

// return Promise<AchievementResponse>

</script>
```

## PATCH /achievement/v1/admin/namespaces/{namespace}/achievements/{achievementCode}

```
<script src="https://unpkg.com/@accelbyte/sdk/dist/global/index.global.js"></script>
<script src="https://unpkg.com/@accelbyte/sdk-achievement/dist/global/index.global.js"></script>
  
<script>

const sdk = AccelByteSDK.AccelByte.SDK({
  coreConfig: {
    baseURL: '__AGS_DOMAIN__',
    clientId: '__IAM_CLIENT_ID__',
    namespace: '__NAMESPACE__',
    redirectURI: '__IAM_CLIENT_REDIRECT_URI__'
  }
})

AccelByteSDK_Achievement.AchievementsAdminApi(sdk, { axiosConfig: { request: { headers: { Authorization: 'Bearer {access_token}' } } } })
  .patchAchievement_ByAchievementCode(achievementCode:string, data: {
             AchievementOrderUpdateRequest
    })

// return Promise

</script>
```

## PUT /achievement/v1/admin/namespaces/{namespace}/achievements/{achievementCode}

```
<script src="https://unpkg.com/@accelbyte/sdk/dist/global/index.global.js"></script>
<script src="https://unpkg.com/@accelbyte/sdk-achievement/dist/global/index.global.js"></script>
  
<script>

const sdk = AccelByteSDK.AccelByte.SDK({
  coreConfig: {
    baseURL: '__AGS_DOMAIN__',
    clientId: '__IAM_CLIENT_ID__',
    namespace: '__NAMESPACE__',
    redirectURI: '__IAM_CLIENT_REDIRECT_URI__'
  }
})

AccelByteSDK_Achievement.AchievementsAdminApi(sdk, { axiosConfig: { request: { headers: { Authorization: 'Bearer {access_token}' } } } })
  .updateAchievement_ByAchievementCode(achievementCode:string, data: {
             AchievementUpdateRequest
    })

// return Promise<AchievementResponse>

</script>
```

## GET /achievement/v1/admin/namespaces/{namespace}/users/{userId}/global/achievements

```
<script src="https://unpkg.com/@accelbyte/sdk/dist/global/index.global.js"></script>
<script src="https://unpkg.com/@accelbyte/sdk-achievement/dist/global/index.global.js"></script>
  
<script>

const sdk = AccelByteSDK.AccelByte.SDK({
  coreConfig: {
    baseURL: '__AGS_DOMAIN__',
    clientId: '__IAM_CLIENT_ID__',
    namespace: '__NAMESPACE__',
    redirectURI: '__IAM_CLIENT_REDIRECT_URI__'
  }
})

AccelByteSDK_Achievement.GlobalAchievementsAdminApi(sdk, { axiosConfig: { request: { headers: { Authorization: 'Bearer {access_token}' } } } })
  .getGlobalAchievements_ByUserId(userId:string,  queryParams?: {
             achievementCodes?: string | null,
             limit?: number,
             offset?: number,
             sortBy?: 'contributedValue' | 'contributedValue:asc' | 'contributedValue:desc',
             tags?: string[]
    })

// return Promise<PaginatedUserContributionResponse>

</script>
```

## DELETE /achievement/v1/admin/namespaces/{namespace}/users/{userId}/anonymization/achievements

```
<script src="https://unpkg.com/@accelbyte/sdk/dist/global/index.global.js"></script>
<script src="https://unpkg.com/@accelbyte/sdk-achievement/dist/global/index.global.js"></script>
  
<script>

const sdk = AccelByteSDK.AccelByte.SDK({
  coreConfig: {
    baseURL: '__AGS_DOMAIN__',
    clientId: '__IAM_CLIENT_ID__',
    namespace: '__NAMESPACE__',
    redirectURI: '__IAM_CLIENT_REDIRECT_URI__'
  }
})

AccelByteSDK_Achievement.AnonymizationAdminApi(sdk, { axiosConfig: { request: { headers: { Authorization: 'Bearer {access_token}' } } } })
  .deleteAnonymizationAchievement_ByUserId(userId:string)

// return Promise

</script>
```

## DELETE /achievement/v1/admin/namespaces/{namespace}/global/achievements/{achievementCode}/reset

```
<script src="https://unpkg.com/@accelbyte/sdk/dist/global/index.global.js"></script>
<script src="https://unpkg.com/@accelbyte/sdk-achievement/dist/global/index.global.js"></script>
  
<script>

const sdk = AccelByteSDK.AccelByte.SDK({
  coreConfig: {
    baseURL: '__AGS_DOMAIN__',
    clientId: '__IAM_CLIENT_ID__',
    namespace: '__NAMESPACE__',
    redirectURI: '__IAM_CLIENT_REDIRECT_URI__'
  }
})

AccelByteSDK_Achievement.GlobalAchievementsAdminApi(sdk, { axiosConfig: { request: { headers: { Authorization: 'Bearer {access_token}' } } } })
  .deleteResetGlobal_ByAchievementCode(achievementCode:string)

// return Promise

</script>
```

## GET /achievement/v1/admin/namespaces/{namespace}/global/achievements/{achievementCode}/contributors

```
<script src="https://unpkg.com/@accelbyte/sdk/dist/global/index.global.js"></script>
<script src="https://unpkg.com/@accelbyte/sdk-achievement/dist/global/index.global.js"></script>
  
<script>

const sdk = AccelByteSDK.AccelByte.SDK({
  coreConfig: {
    baseURL: '__AGS_DOMAIN__',
    clientId: '__IAM_CLIENT_ID__',
    namespace: '__NAMESPACE__',
    redirectURI: '__IAM_CLIENT_REDIRECT_URI__'
  }
})

AccelByteSDK_Achievement.GlobalAchievementsAdminApi(sdk, { axiosConfig: { request: { headers: { Authorization: 'Bearer {access_token}' } } } })
  .getContributorsGlobal_ByAchievementCode(achievementCode:string,  queryParams?: {
             limit?: number,
             offset?: number,
             sortBy?: 'contributedValue' | 'contributedValue:asc' | 'contributedValue:desc'
    })

// return Promise<PaginatedContributorResponse>

</script>
```

## DELETE /achievement/v1/admin/namespaces/{namespace}/users/{userId}/achievements/{achievementCode}/reset

```
<script src="https://unpkg.com/@accelbyte/sdk/dist/global/index.global.js"></script>
<script src="https://unpkg.com/@accelbyte/sdk-achievement/dist/global/index.global.js"></script>
  
<script>

const sdk = AccelByteSDK.AccelByte.SDK({
  coreConfig: {
    baseURL: '__AGS_DOMAIN__',
    clientId: '__IAM_CLIENT_ID__',
    namespace: '__NAMESPACE__',
    redirectURI: '__IAM_CLIENT_REDIRECT_URI__'
  }
})

AccelByteSDK_Achievement.UserAchievementsAdminApi(sdk, { axiosConfig: { request: { headers: { Authorization: 'Bearer {access_token}' } } } })
  .deleteReset_ByUserId_ByAchievementCode(userId:string, achievementCode:string)

// return Promise

</script>
```

## PUT /achievement/v1/admin/namespaces/{namespace}/users/{userId}/achievements/{achievementCode}/unlock

```
<script src="https://unpkg.com/@accelbyte/sdk/dist/global/index.global.js"></script>
<script src="https://unpkg.com/@accelbyte/sdk-achievement/dist/global/index.global.js"></script>
  
<script>

const sdk = AccelByteSDK.AccelByte.SDK({
  coreConfig: {
    baseURL: '__AGS_DOMAIN__',
    clientId: '__IAM_CLIENT_ID__',
    namespace: '__NAMESPACE__',
    redirectURI: '__IAM_CLIENT_REDIRECT_URI__'
  }
})

AccelByteSDK_Achievement.UserAchievementsAdminApi(sdk, { axiosConfig: { request: { headers: { Authorization: 'Bearer {access_token}' } } } })
  .updateUnlock_ByUserId_ByAchievementCode(userId:string, achievementCode:string)

// return Promise

</script>
```