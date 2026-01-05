## GET /reporting/v1/public/namespaces/{namespace}/reasons

```
import { AccelByte } from '@accelbyte/sdk'
import { PublicReasonsApi } from '@accelbyte/sdk-reporting'

const sdk = AccelByte.SDK({
  coreConfig: {
    baseURL: '__AGS_DOMAIN__',
    clientId: '__IAM_CLIENT_ID__',
    namespace: '__NAMESPACE__',
    redirectURI: '__IAM_CLIENT_REDIRECT_URI__'
  }
})

PublicReasonsApi(sdk)
  .getReasons( queryParams?: {
             group?: string | null,
             limit?: number,
             offset?: number,
             title?: string | null
    })

// return Promise<PublicReasonListResponse>
```

## POST /reporting/v1/public/namespaces/{namespace}/reports

```
import { AccelByte } from '@accelbyte/sdk'
import { PublicReportsApi } from '@accelbyte/sdk-reporting'

const sdk = AccelByte.SDK({
  coreConfig: {
    baseURL: '__AGS_DOMAIN__',
    clientId: '__IAM_CLIENT_ID__',
    namespace: '__NAMESPACE__',
    redirectURI: '__IAM_CLIENT_REDIRECT_URI__'
  }
})

PublicReportsApi(sdk)
  .createReport(data: {
             SubmitReportRequest
    })

// return Promise<SubmitReportResponse>
```

## GET /reporting/v1/public/namespaces/{namespace}/reasonGroups

```
import { AccelByte } from '@accelbyte/sdk'
import { PublicReasonsApi } from '@accelbyte/sdk-reporting'

const sdk = AccelByte.SDK({
  coreConfig: {
    baseURL: '__AGS_DOMAIN__',
    clientId: '__IAM_CLIENT_ID__',
    namespace: '__NAMESPACE__',
    redirectURI: '__IAM_CLIENT_REDIRECT_URI__'
  }
})

PublicReasonsApi(sdk)
  .getReasonGroups( queryParams?: {
             limit?: number,
             offset?: number
    })

// return Promise<ReasonGroupListResponse>
```

## GET /reporting/v1/admin/extensionActions

```
import { AccelByte } from '@accelbyte/sdk'
import { ExtensionCategoriesAndAutoModerationActionsAdminApi } from '@accelbyte/sdk-reporting'

const sdk = AccelByte.SDK({
  coreConfig: {
    baseURL: '__AGS_DOMAIN__',
    clientId: '__IAM_CLIENT_ID__',
    namespace: '__NAMESPACE__',
    redirectURI: '__IAM_CLIENT_REDIRECT_URI__'
  }
})

ExtensionCategoriesAndAutoModerationActionsAdminApi(sdk, { axiosConfig: { request: { headers: { Authorization: 'Bearer {access_token}' } } } })
  .getExtensionActions()

// return Promise<ActionListApiResponse>
```

## POST /reporting/v1/admin/extensionActions

```
import { AccelByte } from '@accelbyte/sdk'
import { ExtensionCategoriesAndAutoModerationActionsAdminApi } from '@accelbyte/sdk-reporting'

const sdk = AccelByte.SDK({
  coreConfig: {
    baseURL: '__AGS_DOMAIN__',
    clientId: '__IAM_CLIENT_ID__',
    namespace: '__NAMESPACE__',
    redirectURI: '__IAM_CLIENT_REDIRECT_URI__'
  }
})

ExtensionCategoriesAndAutoModerationActionsAdminApi(sdk, { axiosConfig: { request: { headers: { Authorization: 'Bearer {access_token}' } } } })
  .createExtensionAction(data: {
             ActionApiRequest
    })

// return Promise<ActionApiResponse>
```

## GET /reporting/v1/admin/extensionCategories

```
import { AccelByte } from '@accelbyte/sdk'
import { ExtensionCategoriesAndAutoModerationActionsAdminApi } from '@accelbyte/sdk-reporting'

const sdk = AccelByte.SDK({
  coreConfig: {
    baseURL: '__AGS_DOMAIN__',
    clientId: '__IAM_CLIENT_ID__',
    namespace: '__NAMESPACE__',
    redirectURI: '__IAM_CLIENT_REDIRECT_URI__'
  }
})

ExtensionCategoriesAndAutoModerationActionsAdminApi(sdk, { axiosConfig: { request: { headers: { Authorization: 'Bearer {access_token}' } } } })
  .getExtensionCategories( queryParams?: {
             order?: 'asc' | 'ascending' | 'desc' | 'descending',
             sortBy?: 'extensionCategory' | 'extensionCategoryName'
    })

// return Promise<ExtensionCategoryListApiResponse>
```

## POST /reporting/v1/admin/extensionCategories

```
import { AccelByte } from '@accelbyte/sdk'
import { ExtensionCategoriesAndAutoModerationActionsAdminApi } from '@accelbyte/sdk-reporting'

const sdk = AccelByte.SDK({
  coreConfig: {
    baseURL: '__AGS_DOMAIN__',
    clientId: '__IAM_CLIENT_ID__',
    namespace: '__NAMESPACE__',
    redirectURI: '__IAM_CLIENT_REDIRECT_URI__'
  }
})

ExtensionCategoriesAndAutoModerationActionsAdminApi(sdk, { axiosConfig: { request: { headers: { Authorization: 'Bearer {access_token}' } } } })
  .createExtensionCategory(data: {
             ExtensionCategoryApiRequest
    })

// return Promise<ExtensionCategoryApiResponse>
```

## POST /reporting/v1/admin/namespaces/{namespace}/rule

```
import { AccelByte } from '@accelbyte/sdk'
import { ModerationRuleAdminApi } from '@accelbyte/sdk-reporting'

const sdk = AccelByte.SDK({
  coreConfig: {
    baseURL: '__AGS_DOMAIN__',
    clientId: '__IAM_CLIENT_ID__',
    namespace: '__NAMESPACE__',
    redirectURI: '__IAM_CLIENT_REDIRECT_URI__'
  }
})

ModerationRuleAdminApi(sdk, { axiosConfig: { request: { headers: { Authorization: 'Bearer {access_token}' } } } })
  .createRule(data: {
             ModerationRuleRequest
    })

// return Promise
```

## GET /reporting/v1/admin/namespaces/{namespace}/rules

```
import { AccelByte } from '@accelbyte/sdk'
import { ModerationRuleAdminApi } from '@accelbyte/sdk-reporting'

const sdk = AccelByte.SDK({
  coreConfig: {
    baseURL: '__AGS_DOMAIN__',
    clientId: '__IAM_CLIENT_ID__',
    namespace: '__NAMESPACE__',
    redirectURI: '__IAM_CLIENT_REDIRECT_URI__'
  }
})

ModerationRuleAdminApi(sdk, { axiosConfig: { request: { headers: { Authorization: 'Bearer {access_token}' } } } })
  .getRules( queryParams?: {
             category?: string | null,
             extensionCategory?: string | null,
             limit?: number,
             offset?: number
    })

// return Promise<ModerationRulesList>
```

## GET /reporting/v1/admin/namespaces/{namespace}/reasons

```
import { AccelByte } from '@accelbyte/sdk'
import { ReasonsAdminApi } from '@accelbyte/sdk-reporting'

const sdk = AccelByte.SDK({
  coreConfig: {
    baseURL: '__AGS_DOMAIN__',
    clientId: '__IAM_CLIENT_ID__',
    namespace: '__NAMESPACE__',
    redirectURI: '__IAM_CLIENT_REDIRECT_URI__'
  }
})

ReasonsAdminApi(sdk, { axiosConfig: { request: { headers: { Authorization: 'Bearer {access_token}' } } } })
  .getReasons( queryParams?: {
             group?: string | null,
             limit?: number,
             offset?: number,
             title?: string | null
    })

// return Promise<AdminReasonListResponse>
```

## POST /reporting/v1/admin/namespaces/{namespace}/reasons

```
import { AccelByte } from '@accelbyte/sdk'
import { ReasonsAdminApi } from '@accelbyte/sdk-reporting'

const sdk = AccelByte.SDK({
  coreConfig: {
    baseURL: '__AGS_DOMAIN__',
    clientId: '__IAM_CLIENT_ID__',
    namespace: '__NAMESPACE__',
    redirectURI: '__IAM_CLIENT_REDIRECT_URI__'
  }
})

ReasonsAdminApi(sdk, { axiosConfig: { request: { headers: { Authorization: 'Bearer {access_token}' } } } })
  .createReason(data: {
             CreateReasonRequest
    })

// return Promise<AdminReasonResponse>
```

## GET /reporting/v1/admin/namespaces/{namespace}/reports

```
import { AccelByte } from '@accelbyte/sdk'
import { ReportsAdminApi } from '@accelbyte/sdk-reporting'

const sdk = AccelByte.SDK({
  coreConfig: {
    baseURL: '__AGS_DOMAIN__',
    clientId: '__IAM_CLIENT_ID__',
    namespace: '__NAMESPACE__',
    redirectURI: '__IAM_CLIENT_REDIRECT_URI__'
  }
})

ReportsAdminApi(sdk, { axiosConfig: { request: { headers: { Authorization: 'Bearer {access_token}' } } } })
  .getReports( queryParams?: {
             category?: string | null,
             limit?: number,
             offset?: number,
             reportedUserId?: string | null,
             sortBy?: string | null
    })

// return Promise<ReportListResponse>
```

## POST /reporting/v1/admin/namespaces/{namespace}/reports

```
import { AccelByte } from '@accelbyte/sdk'
import { ReportsAdminApi } from '@accelbyte/sdk-reporting'

const sdk = AccelByte.SDK({
  coreConfig: {
    baseURL: '__AGS_DOMAIN__',
    clientId: '__IAM_CLIENT_ID__',
    namespace: '__NAMESPACE__',
    redirectURI: '__IAM_CLIENT_REDIRECT_URI__'
  }
})

ReportsAdminApi(sdk, { axiosConfig: { request: { headers: { Authorization: 'Bearer {access_token}' } } } })
  .createReport(data: {
             SubmitReportRequest
    })

// return Promise<SubmitReportResponse>
```

## GET /reporting/v1/admin/namespaces/{namespace}/tickets

```
import { AccelByte } from '@accelbyte/sdk'
import { TicketsAdminApi } from '@accelbyte/sdk-reporting'

const sdk = AccelByte.SDK({
  coreConfig: {
    baseURL: '__AGS_DOMAIN__',
    clientId: '__IAM_CLIENT_ID__',
    namespace: '__NAMESPACE__',
    redirectURI: '__IAM_CLIENT_REDIRECT_URI__'
  }
})

TicketsAdminApi(sdk, { axiosConfig: { request: { headers: { Authorization: 'Bearer {access_token}' } } } })
  .getTickets( queryParams?: {
             category?: string | null,
             extensionCategory?: string | null,
             limit?: number,
             offset?: number,
             order?: string | null,
             reportedUserId?: string | null,
             sortBy?: string | null,
             status?: string | null
    })

// return Promise<TicketListResponse>
```

## GET /reporting/v1/admin/namespaces/{namespace}/reasons/all

```
import { AccelByte } from '@accelbyte/sdk'
import { ReasonsAdminApi } from '@accelbyte/sdk-reporting'

const sdk = AccelByte.SDK({
  coreConfig: {
    baseURL: '__AGS_DOMAIN__',
    clientId: '__IAM_CLIENT_ID__',
    namespace: '__NAMESPACE__',
    redirectURI: '__IAM_CLIENT_REDIRECT_URI__'
  }
})

ReasonsAdminApi(sdk, { axiosConfig: { request: { headers: { Authorization: 'Bearer {access_token}' } } } })
  .getReasonsAll()

// return Promise<AdminAllReasonsResponse>
```

## GET /reporting/v1/admin/namespaces/{namespace}/reasonGroups

```
import { AccelByte } from '@accelbyte/sdk'
import { ReasonsAdminApi } from '@accelbyte/sdk-reporting'

const sdk = AccelByte.SDK({
  coreConfig: {
    baseURL: '__AGS_DOMAIN__',
    clientId: '__IAM_CLIENT_ID__',
    namespace: '__NAMESPACE__',
    redirectURI: '__IAM_CLIENT_REDIRECT_URI__'
  }
})

ReasonsAdminApi(sdk, { axiosConfig: { request: { headers: { Authorization: 'Bearer {access_token}' } } } })
  .getReasonGroups( queryParams?: {
             limit?: number,
             offset?: number
    })

// return Promise<ReasonGroupListResponse>
```

## POST /reporting/v1/admin/namespaces/{namespace}/reasonGroups

```
import { AccelByte } from '@accelbyte/sdk'
import { ReasonsAdminApi } from '@accelbyte/sdk-reporting'

const sdk = AccelByte.SDK({
  coreConfig: {
    baseURL: '__AGS_DOMAIN__',
    clientId: '__IAM_CLIENT_ID__',
    namespace: '__NAMESPACE__',
    redirectURI: '__IAM_CLIENT_REDIRECT_URI__'
  }
})

ReasonsAdminApi(sdk, { axiosConfig: { request: { headers: { Authorization: 'Bearer {access_token}' } } } })
  .createReasonGroup(data: {
             CreateReasonGroupRequest
    })

// return Promise<ReasonGroupResponse>
```

## DELETE /reporting/v1/admin/namespaces/{namespace}/rule/{ruleId}

```
import { AccelByte } from '@accelbyte/sdk'
import { ModerationRuleAdminApi } from '@accelbyte/sdk-reporting'

const sdk = AccelByte.SDK({
  coreConfig: {
    baseURL: '__AGS_DOMAIN__',
    clientId: '__IAM_CLIENT_ID__',
    namespace: '__NAMESPACE__',
    redirectURI: '__IAM_CLIENT_REDIRECT_URI__'
  }
})

ModerationRuleAdminApi(sdk, { axiosConfig: { request: { headers: { Authorization: 'Bearer {access_token}' } } } })
  .deleteRule_ByRuleId(ruleId:string)

// return Promise
```

## PUT /reporting/v1/admin/namespaces/{namespace}/rule/{ruleId}

```
import { AccelByte } from '@accelbyte/sdk'
import { ModerationRuleAdminApi } from '@accelbyte/sdk-reporting'

const sdk = AccelByte.SDK({
  coreConfig: {
    baseURL: '__AGS_DOMAIN__',
    clientId: '__IAM_CLIENT_ID__',
    namespace: '__NAMESPACE__',
    redirectURI: '__IAM_CLIENT_REDIRECT_URI__'
  }
})

ModerationRuleAdminApi(sdk, { axiosConfig: { request: { headers: { Authorization: 'Bearer {access_token}' } } } })
  .updateRule_ByRuleId(ruleId:string, data: {
             ModerationRuleRequest
    })

// return Promise<ModerationRuleResponse>
```

## GET /reporting/v1/admin/namespaces/{namespace}/configurations

```
import { AccelByte } from '@accelbyte/sdk'
import { ConfigurationsAdminApi } from '@accelbyte/sdk-reporting'

const sdk = AccelByte.SDK({
  coreConfig: {
    baseURL: '__AGS_DOMAIN__',
    clientId: '__IAM_CLIENT_ID__',
    namespace: '__NAMESPACE__',
    redirectURI: '__IAM_CLIENT_REDIRECT_URI__'
  }
})

ConfigurationsAdminApi(sdk, { axiosConfig: { request: { headers: { Authorization: 'Bearer {access_token}' } } } })
  .getConfigurations( queryParams?: {
             category?: 'all' | 'extension'
    })

// return Promise<ConfigResponse>
```

## POST /reporting/v1/admin/namespaces/{namespace}/configurations

```
import { AccelByte } from '@accelbyte/sdk'
import { ConfigurationsAdminApi } from '@accelbyte/sdk-reporting'

const sdk = AccelByte.SDK({
  coreConfig: {
    baseURL: '__AGS_DOMAIN__',
    clientId: '__IAM_CLIENT_ID__',
    namespace: '__NAMESPACE__',
    redirectURI: '__IAM_CLIENT_REDIRECT_URI__'
  }
})

ConfigurationsAdminApi(sdk, { axiosConfig: { request: { headers: { Authorization: 'Bearer {access_token}' } } } })
  .createConfiguration(data: {
             ReportingLimit
    })

// return Promise<ConfigResponse>
```

## GET /reporting/v1/admin/namespaces/{namespace}/reasons/unused

```
import { AccelByte } from '@accelbyte/sdk'
import { ReasonsAdminApi } from '@accelbyte/sdk-reporting'

const sdk = AccelByte.SDK({
  coreConfig: {
    baseURL: '__AGS_DOMAIN__',
    clientId: '__IAM_CLIENT_ID__',
    namespace: '__NAMESPACE__',
    redirectURI: '__IAM_CLIENT_REDIRECT_URI__'
  }
})

ReasonsAdminApi(sdk, { axiosConfig: { request: { headers: { Authorization: 'Bearer {access_token}' } } } })
  .getReasonsUnused( queryParams: {
             category: string | null,
             extensionCategory?: string | null
    })

// return Promise<UnusedReasonListResponse>
```

## GET /reporting/v1/admin/namespaces/{namespace}/rules/{ruleId}

```
import { AccelByte } from '@accelbyte/sdk'
import { ModerationRuleAdminApi } from '@accelbyte/sdk-reporting'

const sdk = AccelByte.SDK({
  coreConfig: {
    baseURL: '__AGS_DOMAIN__',
    clientId: '__IAM_CLIENT_ID__',
    namespace: '__NAMESPACE__',
    redirectURI: '__IAM_CLIENT_REDIRECT_URI__'
  }
})

ModerationRuleAdminApi(sdk, { axiosConfig: { request: { headers: { Authorization: 'Bearer {access_token}' } } } })
  .getRule_ByRuleId(ruleId:string)

// return Promise<ModerationRuleResponse>
```

## GET /reporting/v1/admin/namespaces/{namespace}/tickets/statistic

```
import { AccelByte } from '@accelbyte/sdk'
import { TicketsAdminApi } from '@accelbyte/sdk-reporting'

const sdk = AccelByte.SDK({
  coreConfig: {
    baseURL: '__AGS_DOMAIN__',
    clientId: '__IAM_CLIENT_ID__',
    namespace: '__NAMESPACE__',
    redirectURI: '__IAM_CLIENT_REDIRECT_URI__'
  }
})

TicketsAdminApi(sdk, { axiosConfig: { request: { headers: { Authorization: 'Bearer {access_token}' } } } })
  .getTicketsStatistic( queryParams: {
             category: string | null,
             extensionCategory?: string | null
    })

// return Promise<TicketStatisticResponse>
```

## DELETE /reporting/v1/admin/namespaces/{namespace}/reasons/{reasonId}

```
import { AccelByte } from '@accelbyte/sdk'
import { ReasonsAdminApi } from '@accelbyte/sdk-reporting'

const sdk = AccelByte.SDK({
  coreConfig: {
    baseURL: '__AGS_DOMAIN__',
    clientId: '__IAM_CLIENT_ID__',
    namespace: '__NAMESPACE__',
    redirectURI: '__IAM_CLIENT_REDIRECT_URI__'
  }
})

ReasonsAdminApi(sdk, { axiosConfig: { request: { headers: { Authorization: 'Bearer {access_token}' } } } })
  .deleteReason_ByReasonId(reasonId:string)

// return Promise
```

## GET /reporting/v1/admin/namespaces/{namespace}/reasons/{reasonId}

```
import { AccelByte } from '@accelbyte/sdk'
import { ReasonsAdminApi } from '@accelbyte/sdk-reporting'

const sdk = AccelByte.SDK({
  coreConfig: {
    baseURL: '__AGS_DOMAIN__',
    clientId: '__IAM_CLIENT_ID__',
    namespace: '__NAMESPACE__',
    redirectURI: '__IAM_CLIENT_REDIRECT_URI__'
  }
})

ReasonsAdminApi(sdk, { axiosConfig: { request: { headers: { Authorization: 'Bearer {access_token}' } } } })
  .getReason_ByReasonId(reasonId:string)

// return Promise<AdminReasonResponse>
```

## PATCH /reporting/v1/admin/namespaces/{namespace}/reasons/{reasonId}

```
import { AccelByte } from '@accelbyte/sdk'
import { ReasonsAdminApi } from '@accelbyte/sdk-reporting'

const sdk = AccelByte.SDK({
  coreConfig: {
    baseURL: '__AGS_DOMAIN__',
    clientId: '__IAM_CLIENT_ID__',
    namespace: '__NAMESPACE__',
    redirectURI: '__IAM_CLIENT_REDIRECT_URI__'
  }
})

ReasonsAdminApi(sdk, { axiosConfig: { request: { headers: { Authorization: 'Bearer {access_token}' } } } })
  .patchReason_ByReasonId(reasonId:string, data: {
             CreateReasonRequest
    })

// return Promise<AdminReasonResponse>
```

## DELETE /reporting/v1/admin/namespaces/{namespace}/tickets/{ticketId}

```
import { AccelByte } from '@accelbyte/sdk'
import { TicketsAdminApi } from '@accelbyte/sdk-reporting'

const sdk = AccelByte.SDK({
  coreConfig: {
    baseURL: '__AGS_DOMAIN__',
    clientId: '__IAM_CLIENT_ID__',
    namespace: '__NAMESPACE__',
    redirectURI: '__IAM_CLIENT_REDIRECT_URI__'
  }
})

TicketsAdminApi(sdk, { axiosConfig: { request: { headers: { Authorization: 'Bearer {access_token}' } } } })
  .deleteTicket_ByTicketId(ticketId:string)

// return Promise
```

## GET /reporting/v1/admin/namespaces/{namespace}/tickets/{ticketId}

```
import { AccelByte } from '@accelbyte/sdk'
import { TicketsAdminApi } from '@accelbyte/sdk-reporting'

const sdk = AccelByte.SDK({
  coreConfig: {
    baseURL: '__AGS_DOMAIN__',
    clientId: '__IAM_CLIENT_ID__',
    namespace: '__NAMESPACE__',
    redirectURI: '__IAM_CLIENT_REDIRECT_URI__'
  }
})

TicketsAdminApi(sdk, { axiosConfig: { request: { headers: { Authorization: 'Bearer {access_token}' } } } })
  .getTicket_ByTicketId(ticketId:string)

// return Promise<TicketResponse>
```

## PUT /reporting/v1/admin/namespaces/{namespace}/rule/{ruleId}/status

```
import { AccelByte } from '@accelbyte/sdk'
import { ModerationRuleAdminApi } from '@accelbyte/sdk-reporting'

const sdk = AccelByte.SDK({
  coreConfig: {
    baseURL: '__AGS_DOMAIN__',
    clientId: '__IAM_CLIENT_ID__',
    namespace: '__NAMESPACE__',
    redirectURI: '__IAM_CLIENT_REDIRECT_URI__'
  }
})

ModerationRuleAdminApi(sdk, { axiosConfig: { request: { headers: { Authorization: 'Bearer {access_token}' } } } })
  .updateStatus_ByRuleId(ruleId:string, data: {
             ModerationRuleActiveRequest
    })

// return Promise
```

## DELETE /reporting/v1/admin/namespaces/{namespace}/reasonGroups/{groupId}

```
import { AccelByte } from '@accelbyte/sdk'
import { ReasonsAdminApi } from '@accelbyte/sdk-reporting'

const sdk = AccelByte.SDK({
  coreConfig: {
    baseURL: '__AGS_DOMAIN__',
    clientId: '__IAM_CLIENT_ID__',
    namespace: '__NAMESPACE__',
    redirectURI: '__IAM_CLIENT_REDIRECT_URI__'
  }
})

ReasonsAdminApi(sdk, { axiosConfig: { request: { headers: { Authorization: 'Bearer {access_token}' } } } })
  .deleteReasonGroup_ByGroupId(groupId:string)

// return Promise
```

## GET /reporting/v1/admin/namespaces/{namespace}/reasonGroups/{groupId}

```
import { AccelByte } from '@accelbyte/sdk'
import { ReasonsAdminApi } from '@accelbyte/sdk-reporting'

const sdk = AccelByte.SDK({
  coreConfig: {
    baseURL: '__AGS_DOMAIN__',
    clientId: '__IAM_CLIENT_ID__',
    namespace: '__NAMESPACE__',
    redirectURI: '__IAM_CLIENT_REDIRECT_URI__'
  }
})

ReasonsAdminApi(sdk, { axiosConfig: { request: { headers: { Authorization: 'Bearer {access_token}' } } } })
  .getReasonGroup_ByGroupId(groupId:string)

// return Promise<ReasonGroupResponse>
```

## PATCH /reporting/v1/admin/namespaces/{namespace}/reasonGroups/{groupId}

```
import { AccelByte } from '@accelbyte/sdk'
import { ReasonsAdminApi } from '@accelbyte/sdk-reporting'

const sdk = AccelByte.SDK({
  coreConfig: {
    baseURL: '__AGS_DOMAIN__',
    clientId: '__IAM_CLIENT_ID__',
    namespace: '__NAMESPACE__',
    redirectURI: '__IAM_CLIENT_REDIRECT_URI__'
  }
})

ReasonsAdminApi(sdk, { axiosConfig: { request: { headers: { Authorization: 'Bearer {access_token}' } } } })
  .patchReasonGroup_ByGroupId(groupId:string, data: {
             UpdateReasonGroupRequest
    })

// return Promise<ReasonGroupResponse>
```

## GET /reporting/v1/admin/namespaces/{namespace}/tickets/{ticketId}/reports

```
import { AccelByte } from '@accelbyte/sdk'
import { TicketsAdminApi } from '@accelbyte/sdk-reporting'

const sdk = AccelByte.SDK({
  coreConfig: {
    baseURL: '__AGS_DOMAIN__',
    clientId: '__IAM_CLIENT_ID__',
    namespace: '__NAMESPACE__',
    redirectURI: '__IAM_CLIENT_REDIRECT_URI__'
  }
})

TicketsAdminApi(sdk, { axiosConfig: { request: { headers: { Authorization: 'Bearer {access_token}' } } } })
  .getReports_ByTicketId(ticketId:string,  queryParams?: {
             limit?: number,
             offset?: number
    })

// return Promise<ReportListResponse>
```

## POST /reporting/v1/admin/namespaces/{namespace}/tickets/{ticketId}/resolutions

```
import { AccelByte } from '@accelbyte/sdk'
import { TicketsAdminApi } from '@accelbyte/sdk-reporting'

const sdk = AccelByte.SDK({
  coreConfig: {
    baseURL: '__AGS_DOMAIN__',
    clientId: '__IAM_CLIENT_ID__',
    namespace: '__NAMESPACE__',
    redirectURI: '__IAM_CLIENT_REDIRECT_URI__'
  }
})

TicketsAdminApi(sdk, { axiosConfig: { request: { headers: { Authorization: 'Bearer {access_token}' } } } })
  .updateResolution_ByTicketId(ticketId:string, data: {
             UpdateTicketResolutionsRequest
    })

// return Promise<TicketResponse>
```