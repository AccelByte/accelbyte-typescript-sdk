## DELETE /gdpr/public/users/me/deletions

```
import { AccelByte } from '@accelbyte/sdk'
import { DataDeletionApi } from '@accelbyte/sdk-gdpr'

const sdk = AccelByte.SDK({
  coreConfig: {
    baseURL: '__AGS_DOMAIN__',
    clientId: '__IAM_CLIENT_ID__',
    namespace: '__NAMESPACE__',
    redirectURI: '__IAM_CLIENT_REDIRECT_URI__'
  }
})

DataDeletionApi(sdk, { axiosConfig: { request: { headers: { Authorization: 'Bearer {access_token}' } } } })
  .deleteUserMeDeletion()

// return Promise
```

## POST /gdpr/public/users/me/deletions

```
import { AccelByte } from '@accelbyte/sdk'
import { DataDeletionApi } from '@accelbyte/sdk-gdpr'

const sdk = AccelByte.SDK({
  coreConfig: {
    baseURL: '__AGS_DOMAIN__',
    clientId: '__IAM_CLIENT_ID__',
    namespace: '__NAMESPACE__',
    redirectURI: '__IAM_CLIENT_REDIRECT_URI__'
  }
})

DataDeletionApi(sdk, { axiosConfig: { request: { headers: { Authorization: 'Bearer {access_token}' } } } })
  .postUserMeDeletion(data: {
             platformId: string | null,
             platformToken: string | null
    })

// return Promise<RequestDeleteResponse>
```

## GET /gdpr/public/users/me/deletions/status

```
import { AccelByte } from '@accelbyte/sdk'
import { DataDeletionApi } from '@accelbyte/sdk-gdpr'

const sdk = AccelByte.SDK({
  coreConfig: {
    baseURL: '__AGS_DOMAIN__',
    clientId: '__IAM_CLIENT_ID__',
    namespace: '__NAMESPACE__',
    redirectURI: '__IAM_CLIENT_REDIRECT_URI__'
  }
})

DataDeletionApi(sdk, { axiosConfig: { request: { headers: { Authorization: 'Bearer {access_token}' } } } })
  .getUsersMeDeletionsStatus()

// return Promise<DeletionStatus>
```

## GET /gdpr/s2s/namespaces/{namespace}/requests/finished

```
import { AccelByte } from '@accelbyte/sdk'
import { DataRetrievalS2SApi } from '@accelbyte/sdk-gdpr'

const sdk = AccelByte.SDK({
  coreConfig: {
    baseURL: '__AGS_DOMAIN__',
    clientId: '__IAM_CLIENT_ID__',
    namespace: '__NAMESPACE__',
    redirectURI: '__IAM_CLIENT_REDIRECT_URI__'
  }
})

DataRetrievalS2SApi(sdk, { axiosConfig: { request: { headers: { Authorization: 'Bearer {access_token}' } } } })
  .getS2SRequestsFinished( queryParams: {
             end: string | null,
             start: string | null
    })

// return Promise<ListFinishedDataRequests>
```

## GET /gdpr/s2s/namespaces/{namespace}/deletions/finished

```
import { AccelByte } from '@accelbyte/sdk'
import { DataDeletionS2SApi } from '@accelbyte/sdk-gdpr'

const sdk = AccelByte.SDK({
  coreConfig: {
    baseURL: '__AGS_DOMAIN__',
    clientId: '__IAM_CLIENT_ID__',
    namespace: '__NAMESPACE__',
    redirectURI: '__IAM_CLIENT_REDIRECT_URI__'
  }
})

DataDeletionS2SApi(sdk, { axiosConfig: { request: { headers: { Authorization: 'Bearer {access_token}' } } } })
  .getS2SDeletionsFinished( queryParams: {
             end: string | null,
             start: string | null
    })

// return Promise<ListFinishedDataDeletion>
```

## GET /gdpr/s2s/namespaces/{namespace}/requests/{requestId}

```
import { AccelByte } from '@accelbyte/sdk'
import { DataRetrievalS2SApi } from '@accelbyte/sdk-gdpr'

const sdk = AccelByte.SDK({
  coreConfig: {
    baseURL: '__AGS_DOMAIN__',
    clientId: '__IAM_CLIENT_ID__',
    namespace: '__NAMESPACE__',
    redirectURI: '__IAM_CLIENT_REDIRECT_URI__'
  }
})

DataRetrievalS2SApi(sdk, { axiosConfig: { request: { headers: { Authorization: 'Bearer {access_token}' } } } })
  .getS2Request_ByRequestId(requestId:string)

// return Promise<S2SDataRequestSummary>
```

## POST /gdpr/s2s/namespaces/{namespace}/users/{userId}/requests

```
import { AccelByte } from '@accelbyte/sdk'
import { DataRetrievalS2SApi } from '@accelbyte/sdk-gdpr'

const sdk = AccelByte.SDK({
  coreConfig: {
    baseURL: '__AGS_DOMAIN__',
    clientId: '__IAM_CLIENT_ID__',
    namespace: '__NAMESPACE__',
    redirectURI: '__IAM_CLIENT_REDIRECT_URI__'
  }
})

DataRetrievalS2SApi(sdk, { axiosConfig: { request: { headers: { Authorization: 'Bearer {access_token}' } } } })
  .createRequestS2_ByUserId(userId:string)

// return Promise<S2SDataRetrievalResponse>
```

## POST /gdpr/s2s/namespaces/{namespace}/users/{userId}/deletions

```
import { AccelByte } from '@accelbyte/sdk'
import { DataDeletionS2SApi } from '@accelbyte/sdk-gdpr'

const sdk = AccelByte.SDK({
  coreConfig: {
    baseURL: '__AGS_DOMAIN__',
    clientId: '__IAM_CLIENT_ID__',
    namespace: '__NAMESPACE__',
    redirectURI: '__IAM_CLIENT_REDIRECT_URI__'
  }
})

DataDeletionS2SApi(sdk, { axiosConfig: { request: { headers: { Authorization: 'Bearer {access_token}' } } } })
  .createDeletionS2_ByUserId(userId:string)

// return Promise<S2SRequestDeleteResponse>
```

## GET /gdpr/public/namespaces/{namespace}/users/{userId}/requests

```
import { AccelByte } from '@accelbyte/sdk'
import { DataRetrievalApi } from '@accelbyte/sdk-gdpr'

const sdk = AccelByte.SDK({
  coreConfig: {
    baseURL: '__AGS_DOMAIN__',
    clientId: '__IAM_CLIENT_ID__',
    namespace: '__NAMESPACE__',
    redirectURI: '__IAM_CLIENT_REDIRECT_URI__'
  }
})

DataRetrievalApi(sdk, { axiosConfig: { request: { headers: { Authorization: 'Bearer {access_token}' } } } })
  .getRequests_ByUserId(userId:string,  queryParams?: {
             limit?: number,
             offset?: number
    })

// return Promise<UserPersonalDataResponse>
```

## POST /gdpr/public/namespaces/{namespace}/users/{userId}/requests

```
import { AccelByte } from '@accelbyte/sdk'
import { DataRetrievalApi } from '@accelbyte/sdk-gdpr'

const sdk = AccelByte.SDK({
  coreConfig: {
    baseURL: '__AGS_DOMAIN__',
    clientId: '__IAM_CLIENT_ID__',
    namespace: '__NAMESPACE__',
    redirectURI: '__IAM_CLIENT_REDIRECT_URI__'
  }
})

DataRetrievalApi(sdk, { axiosConfig: { request: { headers: { Authorization: 'Bearer {access_token}' } } } })
  .postRequest_ByUserId(userId:string, data: {
             password: string | null,
             languageTag?: string | null
    })

// return Promise<DataRetrievalResponse>
```

## DELETE /gdpr/public/namespaces/{namespace}/users/{userId}/deletions

```
import { AccelByte } from '@accelbyte/sdk'
import { DataDeletionApi } from '@accelbyte/sdk-gdpr'

const sdk = AccelByte.SDK({
  coreConfig: {
    baseURL: '__AGS_DOMAIN__',
    clientId: '__IAM_CLIENT_ID__',
    namespace: '__NAMESPACE__',
    redirectURI: '__IAM_CLIENT_REDIRECT_URI__'
  }
})

DataDeletionApi(sdk, { axiosConfig: { request: { headers: { Authorization: 'Bearer {access_token}' } } } })
  .deleteDeletion_ByUserId(userId:string)

// return Promise
```

## POST /gdpr/public/namespaces/{namespace}/users/{userId}/deletions

```
import { AccelByte } from '@accelbyte/sdk'
import { DataDeletionApi } from '@accelbyte/sdk-gdpr'

const sdk = AccelByte.SDK({
  coreConfig: {
    baseURL: '__AGS_DOMAIN__',
    clientId: '__IAM_CLIENT_ID__',
    namespace: '__NAMESPACE__',
    redirectURI: '__IAM_CLIENT_REDIRECT_URI__'
  }
})

DataDeletionApi(sdk, { axiosConfig: { request: { headers: { Authorization: 'Bearer {access_token}' } } } })
  .postDeletion_ByUserId(userId:string, data: {
             password: string | null,
             languageTag?: string | null
    })

// return Promise<RequestDeleteResponse>
```

## GET /gdpr/public/namespaces/{namespace}/users/{userId}/deletions/status

```
import { AccelByte } from '@accelbyte/sdk'
import { DataDeletionApi } from '@accelbyte/sdk-gdpr'

const sdk = AccelByte.SDK({
  coreConfig: {
    baseURL: '__AGS_DOMAIN__',
    clientId: '__IAM_CLIENT_ID__',
    namespace: '__NAMESPACE__',
    redirectURI: '__IAM_CLIENT_REDIRECT_URI__'
  }
})

DataDeletionApi(sdk, { axiosConfig: { request: { headers: { Authorization: 'Bearer {access_token}' } } } })
  .getDeletionsStatus_ByUserId(userId:string)

// return Promise<DeletionStatus>
```

## DELETE /gdpr/public/namespaces/{namespace}/users/{userId}/requests/{requestDate}

```
import { AccelByte } from '@accelbyte/sdk'
import { DataRetrievalApi } from '@accelbyte/sdk-gdpr'

const sdk = AccelByte.SDK({
  coreConfig: {
    baseURL: '__AGS_DOMAIN__',
    clientId: '__IAM_CLIENT_ID__',
    namespace: '__NAMESPACE__',
    redirectURI: '__IAM_CLIENT_REDIRECT_URI__'
  }
})

DataRetrievalApi(sdk, { axiosConfig: { request: { headers: { Authorization: 'Bearer {access_token}' } } } })
  .deleteRequest_ByUserId_ByRequestDate(userId:string, requestDate:string)

// return Promise
```

## POST /gdpr/s2s/namespaces/{namespace}/users/{userId}/requests/{requestDate}/generate

```
import { AccelByte } from '@accelbyte/sdk'
import { DataRetrievalS2SApi } from '@accelbyte/sdk-gdpr'

const sdk = AccelByte.SDK({
  coreConfig: {
    baseURL: '__AGS_DOMAIN__',
    clientId: '__IAM_CLIENT_ID__',
    namespace: '__NAMESPACE__',
    redirectURI: '__IAM_CLIENT_REDIRECT_URI__'
  }
})

DataRetrievalS2SApi(sdk, { axiosConfig: { request: { headers: { Authorization: 'Bearer {access_token}' } } } })
  .fetchGenerateS2_ByUserId_ByRequestDate(userId:string, requestDate:string)

// return Promise<S2SUserDataUrl>
```

## POST /gdpr/public/namespaces/{namespace}/users/{userId}/requests/{requestDate}/generate

```
import { AccelByte } from '@accelbyte/sdk'
import { DataRetrievalApi } from '@accelbyte/sdk-gdpr'

const sdk = AccelByte.SDK({
  coreConfig: {
    baseURL: '__AGS_DOMAIN__',
    clientId: '__IAM_CLIENT_ID__',
    namespace: '__NAMESPACE__',
    redirectURI: '__IAM_CLIENT_REDIRECT_URI__'
  }
})

DataRetrievalApi(sdk, { axiosConfig: { request: { headers: { Authorization: 'Bearer {access_token}' } } } })
  .postGenerate_ByUserId_ByRequestDate(userId:string, requestDate:string, data: {
             password: string | null
    })

// return Promise<UserDataUrl>
```

## GET /gdpr/admin/namespaces/{namespace}/requests

```
import { AccelByte } from '@accelbyte/sdk'
import { DataRetrievalAdminApi } from '@accelbyte/sdk-gdpr'

const sdk = AccelByte.SDK({
  coreConfig: {
    baseURL: '__AGS_DOMAIN__',
    clientId: '__IAM_CLIENT_ID__',
    namespace: '__NAMESPACE__',
    redirectURI: '__IAM_CLIENT_REDIRECT_URI__'
  }
})

DataRetrievalAdminApi(sdk, { axiosConfig: { request: { headers: { Authorization: 'Bearer {access_token}' } } } })
  .getRequests( queryParams?: {
             limit?: number,
             offset?: number,
             requestDate?: string | null
    })

// return Promise<ListPersonalDataResponse>
```

## GET /gdpr/admin/namespaces/{namespace}/deletions

```
import { AccelByte } from '@accelbyte/sdk'
import { DataDeletionAdminApi } from '@accelbyte/sdk-gdpr'

const sdk = AccelByte.SDK({
  coreConfig: {
    baseURL: '__AGS_DOMAIN__',
    clientId: '__IAM_CLIENT_ID__',
    namespace: '__NAMESPACE__',
    redirectURI: '__IAM_CLIENT_REDIRECT_URI__'
  }
})

DataDeletionAdminApi(sdk, { axiosConfig: { request: { headers: { Authorization: 'Bearer {access_token}' } } } })
  .getDeletions( queryParams?: {
             after?: string | null,
             before?: string | null,
             limit?: number,
             offset?: number,
             requestDate?: string | null
    })

// return Promise<ListDeletionDataResponse>
```

## DELETE /gdpr/admin/namespaces/{namespace}/emails/configurations

```
import { AccelByte } from '@accelbyte/sdk'
import { ConfigurationAdminApi } from '@accelbyte/sdk-gdpr'

const sdk = AccelByte.SDK({
  coreConfig: {
    baseURL: '__AGS_DOMAIN__',
    clientId: '__IAM_CLIENT_ID__',
    namespace: '__NAMESPACE__',
    redirectURI: '__IAM_CLIENT_REDIRECT_URI__'
  }
})

ConfigurationAdminApi(sdk, { axiosConfig: { request: { headers: { Authorization: 'Bearer {access_token}' } } } })
  .deleteEmailConfiguration( queryParams: {
             emails: string[]
    })

// return Promise
```

## GET /gdpr/admin/namespaces/{namespace}/emails/configurations

```
import { AccelByte } from '@accelbyte/sdk'
import { ConfigurationAdminApi } from '@accelbyte/sdk-gdpr'

const sdk = AccelByte.SDK({
  coreConfig: {
    baseURL: '__AGS_DOMAIN__',
    clientId: '__IAM_CLIENT_ID__',
    namespace: '__NAMESPACE__',
    redirectURI: '__IAM_CLIENT_REDIRECT_URI__'
  }
})

ConfigurationAdminApi(sdk, { axiosConfig: { request: { headers: { Authorization: 'Bearer {access_token}' } } } })
  .getEmailsConfigurations()

// return Promise
```

## POST /gdpr/admin/namespaces/{namespace}/emails/configurations

```
import { AccelByte } from '@accelbyte/sdk'
import { ConfigurationAdminApi } from '@accelbyte/sdk-gdpr'

const sdk = AccelByte.SDK({
  coreConfig: {
    baseURL: '__AGS_DOMAIN__',
    clientId: '__IAM_CLIENT_ID__',
    namespace: '__NAMESPACE__',
    redirectURI: '__IAM_CLIENT_REDIRECT_URI__'
  }
})

ConfigurationAdminApi(sdk, { axiosConfig: { request: { headers: { Authorization: 'Bearer {access_token}' } } } })
  .createEmailConfiguration(data: {
             string[]
    })

// return Promise
```

## PUT /gdpr/admin/namespaces/{namespace}/emails/configurations

```
import { AccelByte } from '@accelbyte/sdk'
import { ConfigurationAdminApi } from '@accelbyte/sdk-gdpr'

const sdk = AccelByte.SDK({
  coreConfig: {
    baseURL: '__AGS_DOMAIN__',
    clientId: '__IAM_CLIENT_ID__',
    namespace: '__NAMESPACE__',
    redirectURI: '__IAM_CLIENT_REDIRECT_URI__'
  }
})

ConfigurationAdminApi(sdk, { axiosConfig: { request: { headers: { Authorization: 'Bearer {access_token}' } } } })
  .updateEmailConfiguration(data: {
             string[]
    })

// return Promise
```

## GET /gdpr/admin/namespaces/{namespace}/services/configurations

```
import { AccelByte } from '@accelbyte/sdk'
import { ConfigurationAdminApi } from '@accelbyte/sdk-gdpr'

const sdk = AccelByte.SDK({
  coreConfig: {
    baseURL: '__AGS_DOMAIN__',
    clientId: '__IAM_CLIENT_ID__',
    namespace: '__NAMESPACE__',
    redirectURI: '__IAM_CLIENT_REDIRECT_URI__'
  }
})

ConfigurationAdminApi(sdk, { axiosConfig: { request: { headers: { Authorization: 'Bearer {access_token}' } } } })
  .getServicesConfigurations()

// return Promise<ServicesConfigurationResponse>
```

## PUT /gdpr/admin/namespaces/{namespace}/services/configurations

```
import { AccelByte } from '@accelbyte/sdk'
import { ConfigurationAdminApi } from '@accelbyte/sdk-gdpr'

const sdk = AccelByte.SDK({
  coreConfig: {
    baseURL: '__AGS_DOMAIN__',
    clientId: '__IAM_CLIENT_ID__',
    namespace: '__NAMESPACE__',
    redirectURI: '__IAM_CLIENT_REDIRECT_URI__'
  }
})

ConfigurationAdminApi(sdk, { axiosConfig: { request: { headers: { Authorization: 'Bearer {access_token}' } } } })
  .updateServiceConfiguration(data: {
             ServiceConfigurationUpdateRequest
    })

// return Promise<ServiceConfigurationUpdateRequest>
```

## GET /gdpr/admin/namespaces/{namespace}/users/{userId}/requests

```
import { AccelByte } from '@accelbyte/sdk'
import { DataRetrievalAdminApi } from '@accelbyte/sdk-gdpr'

const sdk = AccelByte.SDK({
  coreConfig: {
    baseURL: '__AGS_DOMAIN__',
    clientId: '__IAM_CLIENT_ID__',
    namespace: '__NAMESPACE__',
    redirectURI: '__IAM_CLIENT_REDIRECT_URI__'
  }
})

DataRetrievalAdminApi(sdk, { axiosConfig: { request: { headers: { Authorization: 'Bearer {access_token}' } } } })
  .getRequests_ByUserId(userId:string,  queryParams?: {
             limit?: number,
             offset?: number
    })

// return Promise<UserPersonalDataResponse>
```

## POST /gdpr/admin/namespaces/{namespace}/users/{userId}/requests

```
import { AccelByte } from '@accelbyte/sdk'
import { DataRetrievalAdminApi } from '@accelbyte/sdk-gdpr'

const sdk = AccelByte.SDK({
  coreConfig: {
    baseURL: '__AGS_DOMAIN__',
    clientId: '__IAM_CLIENT_ID__',
    namespace: '__NAMESPACE__',
    redirectURI: '__IAM_CLIENT_REDIRECT_URI__'
  }
})

DataRetrievalAdminApi(sdk, { axiosConfig: { request: { headers: { Authorization: 'Bearer {access_token}' } } } })
  .postRequest_ByUserId(userId:string, data: {
             password?: string | null
    })

// return Promise<DataRetrievalResponse>
```

## DELETE /gdpr/admin/namespaces/{namespace}/users/{userId}/deletions

```
import { AccelByte } from '@accelbyte/sdk'
import { DataDeletionAdminApi } from '@accelbyte/sdk-gdpr'

const sdk = AccelByte.SDK({
  coreConfig: {
    baseURL: '__AGS_DOMAIN__',
    clientId: '__IAM_CLIENT_ID__',
    namespace: '__NAMESPACE__',
    redirectURI: '__IAM_CLIENT_REDIRECT_URI__'
  }
})

DataDeletionAdminApi(sdk, { axiosConfig: { request: { headers: { Authorization: 'Bearer {access_token}' } } } })
  .deleteDeletion_ByUserId(userId:string)

// return Promise
```

## GET /gdpr/admin/namespaces/{namespace}/users/{userId}/deletions

```
import { AccelByte } from '@accelbyte/sdk'
import { DataDeletionAdminApi } from '@accelbyte/sdk-gdpr'

const sdk = AccelByte.SDK({
  coreConfig: {
    baseURL: '__AGS_DOMAIN__',
    clientId: '__IAM_CLIENT_ID__',
    namespace: '__NAMESPACE__',
    redirectURI: '__IAM_CLIENT_REDIRECT_URI__'
  }
})

DataDeletionAdminApi(sdk, { axiosConfig: { request: { headers: { Authorization: 'Bearer {access_token}' } } } })
  .getDeletions_ByUserId(userId:string)

// return Promise<DeletionData>
```

## POST /gdpr/admin/namespaces/{namespace}/users/{userId}/deletions

```
import { AccelByte } from '@accelbyte/sdk'
import { DataDeletionAdminApi } from '@accelbyte/sdk-gdpr'

const sdk = AccelByte.SDK({
  coreConfig: {
    baseURL: '__AGS_DOMAIN__',
    clientId: '__IAM_CLIENT_ID__',
    namespace: '__NAMESPACE__',
    redirectURI: '__IAM_CLIENT_REDIRECT_URI__'
  }
})

DataDeletionAdminApi(sdk, { axiosConfig: { request: { headers: { Authorization: 'Bearer {access_token}' } } } })
  .createDeletion_ByUserId(userId:string)

// return Promise<RequestDeleteResponse>
```

## GET /gdpr/admin/namespaces/{namespace}/platforms/closure/clients

```
import { AccelByte } from '@accelbyte/sdk'
import { PlatformAccountClosureClientAdminApi } from '@accelbyte/sdk-gdpr'

const sdk = AccelByte.SDK({
  coreConfig: {
    baseURL: '__AGS_DOMAIN__',
    clientId: '__IAM_CLIENT_ID__',
    namespace: '__NAMESPACE__',
    redirectURI: '__IAM_CLIENT_REDIRECT_URI__'
  }
})

PlatformAccountClosureClientAdminApi(sdk, { axiosConfig: { request: { headers: { Authorization: 'Bearer {access_token}' } } } })
  .getPlatformsClosureClients()

// return Promise<PlatformAccountClosureClientsResponse>
```

## DELETE /gdpr/admin/namespaces/{namespace}/services/configurations/reset

```
import { AccelByte } from '@accelbyte/sdk'
import { ConfigurationAdminApi } from '@accelbyte/sdk-gdpr'

const sdk = AccelByte.SDK({
  coreConfig: {
    baseURL: '__AGS_DOMAIN__',
    clientId: '__IAM_CLIENT_ID__',
    namespace: '__NAMESPACE__',
    redirectURI: '__IAM_CLIENT_REDIRECT_URI__'
  }
})

ConfigurationAdminApi(sdk, { axiosConfig: { request: { headers: { Authorization: 'Bearer {access_token}' } } } })
  .deleteServiceConfigurationReset()

// return Promise
```

## POST /gdpr/admin/namespaces/{namespace}/platforms/{platform}/closure/mock

```
import { AccelByte } from '@accelbyte/sdk'
import { PlatformAccountClosureClientAdminApi } from '@accelbyte/sdk-gdpr'

const sdk = AccelByte.SDK({
  coreConfig: {
    baseURL: '__AGS_DOMAIN__',
    clientId: '__IAM_CLIENT_ID__',
    namespace: '__NAMESPACE__',
    redirectURI: '__IAM_CLIENT_REDIRECT_URI__'
  }
})

PlatformAccountClosureClientAdminApi(sdk, { axiosConfig: { request: { headers: { Authorization: 'Bearer {access_token}' } } } })
  .updateClosureMock_ByPlatform(platform:string, data: {
             PlatformAccountClosureMockRequest
    })

// return Promise
```

## DELETE /gdpr/admin/namespaces/{namespace}/services/platforms/closure/config

```
import { AccelByte } from '@accelbyte/sdk'
import { ConfigurationAdminApi } from '@accelbyte/sdk-gdpr'

const sdk = AccelByte.SDK({
  coreConfig: {
    baseURL: '__AGS_DOMAIN__',
    clientId: '__IAM_CLIENT_ID__',
    namespace: '__NAMESPACE__',
    redirectURI: '__IAM_CLIENT_REDIRECT_URI__'
  }
})

ConfigurationAdminApi(sdk, { axiosConfig: { request: { headers: { Authorization: 'Bearer {access_token}' } } } })
  .deleteServicePlatformClosureConfig()

// return Promise
```

## GET /gdpr/admin/namespaces/{namespace}/services/platforms/closure/config

```
import { AccelByte } from '@accelbyte/sdk'
import { ConfigurationAdminApi } from '@accelbyte/sdk-gdpr'

const sdk = AccelByte.SDK({
  coreConfig: {
    baseURL: '__AGS_DOMAIN__',
    clientId: '__IAM_CLIENT_ID__',
    namespace: '__NAMESPACE__',
    redirectURI: '__IAM_CLIENT_REDIRECT_URI__'
  }
})

ConfigurationAdminApi(sdk, { axiosConfig: { request: { headers: { Authorization: 'Bearer {access_token}' } } } })
  .getServicesPlatformsClosureConfig()

// return Promise<ServicesConfigurationResponse>
```

## PUT /gdpr/admin/namespaces/{namespace}/services/platforms/closure/config

```
import { AccelByte } from '@accelbyte/sdk'
import { ConfigurationAdminApi } from '@accelbyte/sdk-gdpr'

const sdk = AccelByte.SDK({
  coreConfig: {
    baseURL: '__AGS_DOMAIN__',
    clientId: '__IAM_CLIENT_ID__',
    namespace: '__NAMESPACE__',
    redirectURI: '__IAM_CLIENT_REDIRECT_URI__'
  }
})

ConfigurationAdminApi(sdk, { axiosConfig: { request: { headers: { Authorization: 'Bearer {access_token}' } } } })
  .updateServicePlatformClosureConfig(data: {
             ServiceConfigurationUpdateRequest
    })

// return Promise<ServiceConfigurationUpdateRequest>
```

## GET /gdpr/admin/namespaces/{namespace}/users/platforms/closure/histories

```
import { AccelByte } from '@accelbyte/sdk'
import { PlatformAccountClosureHistoryAdminApi } from '@accelbyte/sdk-gdpr'

const sdk = AccelByte.SDK({
  coreConfig: {
    baseURL: '__AGS_DOMAIN__',
    clientId: '__IAM_CLIENT_ID__',
    namespace: '__NAMESPACE__',
    redirectURI: '__IAM_CLIENT_REDIRECT_URI__'
  }
})

PlatformAccountClosureHistoryAdminApi(sdk, { axiosConfig: { request: { headers: { Authorization: 'Bearer {access_token}' } } } })
  .getUsersPlatformsClosureHistories( queryParams?: {
             limit?: number,
             offset?: number,
             platform?: string | null,
             userId?: string | null
    })

// return Promise<UserPlatformAccountClosureHistoriesResponse>
```

## DELETE /gdpr/admin/namespaces/{namespace}/platforms/{platform}/closure/client

```
import { AccelByte } from '@accelbyte/sdk'
import { PlatformAccountClosureClientAdminApi } from '@accelbyte/sdk-gdpr'

const sdk = AccelByte.SDK({
  coreConfig: {
    baseURL: '__AGS_DOMAIN__',
    clientId: '__IAM_CLIENT_ID__',
    namespace: '__NAMESPACE__',
    redirectURI: '__IAM_CLIENT_REDIRECT_URI__'
  }
})

PlatformAccountClosureClientAdminApi(sdk, { axiosConfig: { request: { headers: { Authorization: 'Bearer {access_token}' } } } })
  .deleteClosureClient_ByPlatform(platform:string)

// return Promise
```

## GET /gdpr/admin/namespaces/{namespace}/platforms/{platform}/closure/client

```
import { AccelByte } from '@accelbyte/sdk'
import { PlatformAccountClosureClientAdminApi } from '@accelbyte/sdk-gdpr'

const sdk = AccelByte.SDK({
  coreConfig: {
    baseURL: '__AGS_DOMAIN__',
    clientId: '__IAM_CLIENT_ID__',
    namespace: '__NAMESPACE__',
    redirectURI: '__IAM_CLIENT_REDIRECT_URI__'
  }
})

PlatformAccountClosureClientAdminApi(sdk, { axiosConfig: { request: { headers: { Authorization: 'Bearer {access_token}' } } } })
  .getClosureClient_ByPlatform(platform:string)

// return Promise<PlatformAccountClosureClientResponse>
```

## POST /gdpr/admin/namespaces/{namespace}/platforms/{platform}/closure/client

```
import { AccelByte } from '@accelbyte/sdk'
import { PlatformAccountClosureClientAdminApi } from '@accelbyte/sdk-gdpr'

const sdk = AccelByte.SDK({
  coreConfig: {
    baseURL: '__AGS_DOMAIN__',
    clientId: '__IAM_CLIENT_ID__',
    namespace: '__NAMESPACE__',
    redirectURI: '__IAM_CLIENT_REDIRECT_URI__'
  }
})

PlatformAccountClosureClientAdminApi(sdk, { axiosConfig: { request: { headers: { Authorization: 'Bearer {access_token}' } } } })
  .updateClosureClient_ByPlatform(platform:string, data: {
             PlatformAccountClosureClientRequest
    })

// return Promise
```

## DELETE /gdpr/admin/namespaces/{namespace}/users/{userId}/requests/{requestDate}

```
import { AccelByte } from '@accelbyte/sdk'
import { DataRetrievalAdminApi } from '@accelbyte/sdk-gdpr'

const sdk = AccelByte.SDK({
  coreConfig: {
    baseURL: '__AGS_DOMAIN__',
    clientId: '__IAM_CLIENT_ID__',
    namespace: '__NAMESPACE__',
    redirectURI: '__IAM_CLIENT_REDIRECT_URI__'
  }
})

DataRetrievalAdminApi(sdk, { axiosConfig: { request: { headers: { Authorization: 'Bearer {access_token}' } } } })
  .deleteRequest_ByUserId_ByRequestDate(userId:string, requestDate:string)

// return Promise
```

## POST /gdpr/admin/namespaces/{namespace}/platforms/xbox/closure/cert/validation

```
import { AccelByte } from '@accelbyte/sdk'
import { PlatformAccountClosureClientAdminApi } from '@accelbyte/sdk-gdpr'

const sdk = AccelByte.SDK({
  coreConfig: {
    baseURL: '__AGS_DOMAIN__',
    clientId: '__IAM_CLIENT_ID__',
    namespace: '__NAMESPACE__',
    redirectURI: '__IAM_CLIENT_REDIRECT_URI__'
  }
})

PlatformAccountClosureClientAdminApi(sdk, { axiosConfig: { request: { headers: { Authorization: 'Bearer {access_token}' } } } })
  .fetchPlatformXboxClosureCertValidation(data: {
             XboxBpCertValidationRequest
    })

// return Promise<XboxBpCertValidationResponse>
```

## POST /gdpr/admin/namespaces/{namespace}/users/{userId}/requests/{requestDate}/generate

```
import { AccelByte } from '@accelbyte/sdk'
import { DataRetrievalAdminApi } from '@accelbyte/sdk-gdpr'

const sdk = AccelByte.SDK({
  coreConfig: {
    baseURL: '__AGS_DOMAIN__',
    clientId: '__IAM_CLIENT_ID__',
    namespace: '__NAMESPACE__',
    redirectURI: '__IAM_CLIENT_REDIRECT_URI__'
  }
})

DataRetrievalAdminApi(sdk, { axiosConfig: { request: { headers: { Authorization: 'Bearer {access_token}' } } } })
  .postGenerate_ByUserId_ByRequestDate(userId:string, requestDate:string, data: {
             password: string | null
    })

// return Promise<UserDataUrl>
```