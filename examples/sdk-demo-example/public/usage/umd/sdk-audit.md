## GET /audit/v1/public/users/me/account/histories

```
<script src="https://unpkg.com/@accelbyte/sdk/dist/global/index.global.js"></script>
<script src="https://unpkg.com/@accelbyte/sdk-audit/dist/global/index.global.js"></script>
  
<script>

const sdk = AccelByteSDK.AccelByte.SDK({
  coreConfig: {
    baseURL: '__AGS_DOMAIN__',
    clientId: '__IAM_CLIENT_ID__',
    namespace: '__NAMESPACE__',
    redirectURI: '__IAM_CLIENT_REDIRECT_URI__'
  }
})

AccelByteSDK_Audit.AccountHistoryApi(sdk, { axiosConfig: { request: { headers: { Authorization: 'Bearer {access_token}' } } } })
  .getUsersMeAccountHistories( queryParams?: {
             endDate?: number,
             limit?: number,
             offset?: number,
             property?: string | null,
             startDate?: number
    })

// return Promise<PaginatedAccountHistoryResponse>

</script>
```

## GET /audit/v1/admin/logs

```
<script src="https://unpkg.com/@accelbyte/sdk/dist/global/index.global.js"></script>
<script src="https://unpkg.com/@accelbyte/sdk-audit/dist/global/index.global.js"></script>
  
<script>

const sdk = AccelByteSDK.AccelByte.SDK({
  coreConfig: {
    baseURL: '__AGS_DOMAIN__',
    clientId: '__IAM_CLIENT_ID__',
    namespace: '__NAMESPACE__',
    redirectURI: '__IAM_CLIENT_REDIRECT_URI__'
  }
})

AccelByteSDK_Audit.AuditLogsAdminApi(sdk, { axiosConfig: { request: { headers: { Authorization: 'Bearer {access_token}' } } } })
  .getLogs( queryParams?: {
             action?: string | null,
             actor?: string | null,
             actorType?: 'CLIENT' | 'USER',
             category?: string | null,
             endDate?: number,
             limit?: number,
             namespace?: string | null,
             objectId?: string | null,
             objectType?: string | null,
             offset?: number,
             order?: -1 | 1,
             startDate?: number
    })

// return Promise<PaginatedAuditLogsResponse>

</script>
```

## GET /audit/v1/admin/config/categories

```
<script src="https://unpkg.com/@accelbyte/sdk/dist/global/index.global.js"></script>
<script src="https://unpkg.com/@accelbyte/sdk-audit/dist/global/index.global.js"></script>
  
<script>

const sdk = AccelByteSDK.AccelByte.SDK({
  coreConfig: {
    baseURL: '__AGS_DOMAIN__',
    clientId: '__IAM_CLIENT_ID__',
    namespace: '__NAMESPACE__',
    redirectURI: '__IAM_CLIENT_REDIRECT_URI__'
  }
})

AccelByteSDK_Audit.AuditLogsAdminApi(sdk, { axiosConfig: { request: { headers: { Authorization: 'Bearer {access_token}' } } } })
  .getConfigCategories( queryParams?: {
             endDate?: number,
             namespace?: string | null,
             startDate?: number
    })

// return Promise<CategoryResponse>

</script>
```

## GET /audit/v1/admin/config/time-range

```
<script src="https://unpkg.com/@accelbyte/sdk/dist/global/index.global.js"></script>
<script src="https://unpkg.com/@accelbyte/sdk-audit/dist/global/index.global.js"></script>
  
<script>

const sdk = AccelByteSDK.AccelByte.SDK({
  coreConfig: {
    baseURL: '__AGS_DOMAIN__',
    clientId: '__IAM_CLIENT_ID__',
    namespace: '__NAMESPACE__',
    redirectURI: '__IAM_CLIENT_REDIRECT_URI__'
  }
})

AccelByteSDK_Audit.AuditLogsAdminApi(sdk, { axiosConfig: { request: { headers: { Authorization: 'Bearer {access_token}' } } } })
  .getConfigTimeRange()

// return Promise<TimeRangeConfigResponse>

</script>
```

## GET /audit/v1/admin/users/me/account/histories

```
<script src="https://unpkg.com/@accelbyte/sdk/dist/global/index.global.js"></script>
<script src="https://unpkg.com/@accelbyte/sdk-audit/dist/global/index.global.js"></script>
  
<script>

const sdk = AccelByteSDK.AccelByte.SDK({
  coreConfig: {
    baseURL: '__AGS_DOMAIN__',
    clientId: '__IAM_CLIENT_ID__',
    namespace: '__NAMESPACE__',
    redirectURI: '__IAM_CLIENT_REDIRECT_URI__'
  }
})

AccelByteSDK_Audit.AccountHistoryAdminApi(sdk, { axiosConfig: { request: { headers: { Authorization: 'Bearer {access_token}' } } } })
  .getUsersMeAccountHistories( queryParams?: {
             endDate?: number,
             limit?: number,
             offset?: number,
             property?: string | null,
             startDate?: number
    })

// return Promise<PaginatedAccountHistoryResponse>

</script>
```

## GET /audit/v1/admin/namespace/{namespace}/logs/{logId}

```
<script src="https://unpkg.com/@accelbyte/sdk/dist/global/index.global.js"></script>
<script src="https://unpkg.com/@accelbyte/sdk-audit/dist/global/index.global.js"></script>
  
<script>

const sdk = AccelByteSDK.AccelByte.SDK({
  coreConfig: {
    baseURL: '__AGS_DOMAIN__',
    clientId: '__IAM_CLIENT_ID__',
    namespace: '__NAMESPACE__',
    redirectURI: '__IAM_CLIENT_REDIRECT_URI__'
  }
})

AccelByteSDK_Audit.AuditLogsAdminApi(sdk, { axiosConfig: { request: { headers: { Authorization: 'Bearer {access_token}' } } } })
  .getLog_ByLogId(logId:string)

// return Promise<AuditLogInfo>

</script>
```

## DELETE /audit/v1/admin/namespace/{namespace}/users/{userId}/account/histories

```
<script src="https://unpkg.com/@accelbyte/sdk/dist/global/index.global.js"></script>
<script src="https://unpkg.com/@accelbyte/sdk-audit/dist/global/index.global.js"></script>
  
<script>

const sdk = AccelByteSDK.AccelByte.SDK({
  coreConfig: {
    baseURL: '__AGS_DOMAIN__',
    clientId: '__IAM_CLIENT_ID__',
    namespace: '__NAMESPACE__',
    redirectURI: '__IAM_CLIENT_REDIRECT_URI__'
  }
})

AccelByteSDK_Audit.AccountHistoryAdminApi(sdk, { axiosConfig: { request: { headers: { Authorization: 'Bearer {access_token}' } } } })
  .deleteAccountHistory_ByUserId(userId:string)

// return Promise

</script>
```

## GET /audit/v1/admin/namespace/{namespace}/users/{userId}/account/histories

```
<script src="https://unpkg.com/@accelbyte/sdk/dist/global/index.global.js"></script>
<script src="https://unpkg.com/@accelbyte/sdk-audit/dist/global/index.global.js"></script>
  
<script>

const sdk = AccelByteSDK.AccelByte.SDK({
  coreConfig: {
    baseURL: '__AGS_DOMAIN__',
    clientId: '__IAM_CLIENT_ID__',
    namespace: '__NAMESPACE__',
    redirectURI: '__IAM_CLIENT_REDIRECT_URI__'
  }
})

AccelByteSDK_Audit.AccountHistoryAdminApi(sdk, { axiosConfig: { request: { headers: { Authorization: 'Bearer {access_token}' } } } })
  .getAccountHistories_ByUserId(userId:string,  queryParams?: {
             endDate?: number,
             limit?: number,
             offset?: number,
             order?: string | null,
             property?: string | null,
             propertyType?: string | null,
             startDate?: number
    })

// return Promise<PaginatedAccountHistoryResponse>

</script>
```