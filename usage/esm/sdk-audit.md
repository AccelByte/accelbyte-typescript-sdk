## GET /audit/v1/public/users/me/account/histories

```
import { AccelByte } from '@accelbyte/sdk'
import { AccountHistoryApi } from '@accelbyte/sdk-audit'

const sdk = AccelByte.SDK({
  coreConfig: {
    baseURL: '__AGS_DOMAIN__',
    clientId: '__IAM_CLIENT_ID__',
    namespace: '__NAMESPACE__',
    redirectURI: '__IAM_CLIENT_REDIRECT_URI__'
  }
})

AccountHistoryApi(sdk, { axiosConfig: { request: { headers: { Authorization: 'Bearer {access_token}' } } } })
  .getUsersMeAccountHistories( queryParams?: {
             endDate?: number,
             limit?: number,
             offset?: number,
             property?: string | null,
             startDate?: number
    })

// return Promise<PaginatedAccountHistoryResponse>
```

## GET /audit/v1/admin/logs

```
import { AccelByte } from '@accelbyte/sdk'
import { AuditLogsAdminApi } from '@accelbyte/sdk-audit'

const sdk = AccelByte.SDK({
  coreConfig: {
    baseURL: '__AGS_DOMAIN__',
    clientId: '__IAM_CLIENT_ID__',
    namespace: '__NAMESPACE__',
    redirectURI: '__IAM_CLIENT_REDIRECT_URI__'
  }
})

AuditLogsAdminApi(sdk, { axiosConfig: { request: { headers: { Authorization: 'Bearer {access_token}' } } } })
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
```

## GET /audit/v1/admin/config/categories

```
import { AccelByte } from '@accelbyte/sdk'
import { AuditLogsAdminApi } from '@accelbyte/sdk-audit'

const sdk = AccelByte.SDK({
  coreConfig: {
    baseURL: '__AGS_DOMAIN__',
    clientId: '__IAM_CLIENT_ID__',
    namespace: '__NAMESPACE__',
    redirectURI: '__IAM_CLIENT_REDIRECT_URI__'
  }
})

AuditLogsAdminApi(sdk, { axiosConfig: { request: { headers: { Authorization: 'Bearer {access_token}' } } } })
  .getConfigCategories( queryParams?: {
             endDate?: number,
             namespace?: string | null,
             startDate?: number
    })

// return Promise<CategoryResponse>
```

## GET /audit/v1/admin/config/time-range

```
import { AccelByte } from '@accelbyte/sdk'
import { AuditLogsAdminApi } from '@accelbyte/sdk-audit'

const sdk = AccelByte.SDK({
  coreConfig: {
    baseURL: '__AGS_DOMAIN__',
    clientId: '__IAM_CLIENT_ID__',
    namespace: '__NAMESPACE__',
    redirectURI: '__IAM_CLIENT_REDIRECT_URI__'
  }
})

AuditLogsAdminApi(sdk, { axiosConfig: { request: { headers: { Authorization: 'Bearer {access_token}' } } } })
  .getConfigTimeRange()

// return Promise<TimeRangeConfigResponse>
```

## GET /audit/v1/admin/users/me/account/histories

```
import { AccelByte } from '@accelbyte/sdk'
import { AccountHistoryAdminApi } from '@accelbyte/sdk-audit'

const sdk = AccelByte.SDK({
  coreConfig: {
    baseURL: '__AGS_DOMAIN__',
    clientId: '__IAM_CLIENT_ID__',
    namespace: '__NAMESPACE__',
    redirectURI: '__IAM_CLIENT_REDIRECT_URI__'
  }
})

AccountHistoryAdminApi(sdk, { axiosConfig: { request: { headers: { Authorization: 'Bearer {access_token}' } } } })
  .getUsersMeAccountHistories( queryParams?: {
             endDate?: number,
             limit?: number,
             offset?: number,
             property?: string | null,
             startDate?: number
    })

// return Promise<PaginatedAccountHistoryResponse>
```

## GET /audit/v1/admin/namespace/{namespace}/logs/{logId}

```
import { AccelByte } from '@accelbyte/sdk'
import { AuditLogsAdminApi } from '@accelbyte/sdk-audit'

const sdk = AccelByte.SDK({
  coreConfig: {
    baseURL: '__AGS_DOMAIN__',
    clientId: '__IAM_CLIENT_ID__',
    namespace: '__NAMESPACE__',
    redirectURI: '__IAM_CLIENT_REDIRECT_URI__'
  }
})

AuditLogsAdminApi(sdk, { axiosConfig: { request: { headers: { Authorization: 'Bearer {access_token}' } } } })
  .getLog_ByLogId(logId:string)

// return Promise<AuditLogInfo>
```

## DELETE /audit/v1/admin/namespace/{namespace}/users/{userId}/account/histories

```
import { AccelByte } from '@accelbyte/sdk'
import { AccountHistoryAdminApi } from '@accelbyte/sdk-audit'

const sdk = AccelByte.SDK({
  coreConfig: {
    baseURL: '__AGS_DOMAIN__',
    clientId: '__IAM_CLIENT_ID__',
    namespace: '__NAMESPACE__',
    redirectURI: '__IAM_CLIENT_REDIRECT_URI__'
  }
})

AccountHistoryAdminApi(sdk, { axiosConfig: { request: { headers: { Authorization: 'Bearer {access_token}' } } } })
  .deleteAccountHistory_ByUserId(userId:string)

// return Promise
```

## GET /audit/v1/admin/namespace/{namespace}/users/{userId}/account/histories

```
import { AccelByte } from '@accelbyte/sdk'
import { AccountHistoryAdminApi } from '@accelbyte/sdk-audit'

const sdk = AccelByte.SDK({
  coreConfig: {
    baseURL: '__AGS_DOMAIN__',
    clientId: '__IAM_CLIENT_ID__',
    namespace: '__NAMESPACE__',
    redirectURI: '__IAM_CLIENT_REDIRECT_URI__'
  }
})

AccountHistoryAdminApi(sdk, { axiosConfig: { request: { headers: { Authorization: 'Bearer {access_token}' } } } })
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
```