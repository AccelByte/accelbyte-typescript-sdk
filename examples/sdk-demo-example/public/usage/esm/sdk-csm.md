## GET /csm/v1/messages

```
import { AccelByte } from '@accelbyte/sdk'
import { MessagesApi } from '@accelbyte/sdk-csm'

const sdk = AccelByte.SDK({
  coreConfig: {
    baseURL: '__AGS_DOMAIN__',
    clientId: '__IAM_CLIENT_ID__',
    namespace: '__NAMESPACE__',
    redirectURI: '__IAM_CLIENT_REDIRECT_URI__'
  }
})

MessagesApi(sdk)
  .getMessages()

// return Promise<AppMessageDeclarationArray>
```

## POST /csm/v1/admin/namespaces/{namespace}/apps

```
import { AccelByte } from '@accelbyte/sdk'
import { AppAdminApi } from '@accelbyte/sdk-csm'

const sdk = AccelByte.SDK({
  coreConfig: {
    baseURL: '__AGS_DOMAIN__',
    clientId: '__IAM_CLIENT_ID__',
    namespace: '__NAMESPACE__',
    redirectURI: '__IAM_CLIENT_REDIRECT_URI__'
  }
})

AppAdminApi(sdk, { axiosConfig: { request: { headers: { Authorization: 'Bearer {access_token}' } } } })
  .createApp(data: {
             GetAppListV1Request,
             queryParams?: {
             limit?: number,
             offset?: number
    })

// return Promise<GetAppListV1Response>
```

## POST /csm/v2/admin/namespaces/{namespace}/apps

```
import { AccelByte } from '@accelbyte/sdk'
import { AppV2AdminApi } from '@accelbyte/sdk-csm'

const sdk = AccelByte.SDK({
  coreConfig: {
    baseURL: '__AGS_DOMAIN__',
    clientId: '__IAM_CLIENT_ID__',
    namespace: '__NAMESPACE__',
    redirectURI: '__IAM_CLIENT_REDIRECT_URI__'
  }
})

AppV2AdminApi(sdk, { axiosConfig: { request: { headers: { Authorization: 'Bearer {access_token}' } } } })
  .createApp_v2(data: {
             GetAppListV2Request,
             queryParams?: {
             limit?: number,
             offset?: number
    })

// return Promise<GetAppListV2Response>
```

## DELETE /csm/v1/admin/namespaces/{namespace}/apps/{app}

```
import { AccelByte } from '@accelbyte/sdk'
import { AppAdminApi } from '@accelbyte/sdk-csm'

const sdk = AccelByte.SDK({
  coreConfig: {
    baseURL: '__AGS_DOMAIN__',
    clientId: '__IAM_CLIENT_ID__',
    namespace: '__NAMESPACE__',
    redirectURI: '__IAM_CLIENT_REDIRECT_URI__'
  }
})

AppAdminApi(sdk, { axiosConfig: { request: { headers: { Authorization: 'Bearer {access_token}' } } } })
  .deleteApp_ByApp(app:string,  queryParams?: {
             forced?: string | null
    })

// return Promise
```

## GET /csm/v1/admin/namespaces/{namespace}/apps/{app}

```
import { AccelByte } from '@accelbyte/sdk'
import { AppAdminApi } from '@accelbyte/sdk-csm'

const sdk = AccelByte.SDK({
  coreConfig: {
    baseURL: '__AGS_DOMAIN__',
    clientId: '__IAM_CLIENT_ID__',
    namespace: '__NAMESPACE__',
    redirectURI: '__IAM_CLIENT_REDIRECT_URI__'
  }
})

AppAdminApi(sdk, { axiosConfig: { request: { headers: { Authorization: 'Bearer {access_token}' } } } })
  .getApp_ByApp(app:string)

// return Promise<GetAppV1Response>
```

## PATCH /csm/v1/admin/namespaces/{namespace}/apps/{app}

```
import { AccelByte } from '@accelbyte/sdk'
import { AppAdminApi } from '@accelbyte/sdk-csm'

const sdk = AccelByte.SDK({
  coreConfig: {
    baseURL: '__AGS_DOMAIN__',
    clientId: '__IAM_CLIENT_ID__',
    namespace: '__NAMESPACE__',
    redirectURI: '__IAM_CLIENT_REDIRECT_URI__'
  }
})

AppAdminApi(sdk, { axiosConfig: { request: { headers: { Authorization: 'Bearer {access_token}' } } } })
  .patchApp_ByApp(app:string, data: {
             UpdateAppV1Request
    })

// return Promise<UpdateAppV1Response>
```

## PUT /csm/v1/admin/namespaces/{namespace}/apps/{app}

```
import { AccelByte } from '@accelbyte/sdk'
import { AppAdminApi } from '@accelbyte/sdk-csm'

const sdk = AccelByte.SDK({
  coreConfig: {
    baseURL: '__AGS_DOMAIN__',
    clientId: '__IAM_CLIENT_ID__',
    namespace: '__NAMESPACE__',
    redirectURI: '__IAM_CLIENT_REDIRECT_URI__'
  }
})

AppAdminApi(sdk, { axiosConfig: { request: { headers: { Authorization: 'Bearer {access_token}' } } } })
  .updateApp_ByApp(app:string, data: {
             CreateAppV1Request
    })

// return Promise<CreateAppV1Response>
```

## DELETE /csm/v2/admin/namespaces/{namespace}/apps/{app}

```
import { AccelByte } from '@accelbyte/sdk'
import { AppV2AdminApi } from '@accelbyte/sdk-csm'

const sdk = AccelByte.SDK({
  coreConfig: {
    baseURL: '__AGS_DOMAIN__',
    clientId: '__IAM_CLIENT_ID__',
    namespace: '__NAMESPACE__',
    redirectURI: '__IAM_CLIENT_REDIRECT_URI__'
  }
})

AppV2AdminApi(sdk, { axiosConfig: { request: { headers: { Authorization: 'Bearer {access_token}' } } } })
  .deleteApp_ByApp_v2(app:string,  queryParams?: {
             forced?: string | null
    })

// return Promise
```

## GET /csm/v2/admin/namespaces/{namespace}/apps/{app}

```
import { AccelByte } from '@accelbyte/sdk'
import { AppV2AdminApi } from '@accelbyte/sdk-csm'

const sdk = AccelByte.SDK({
  coreConfig: {
    baseURL: '__AGS_DOMAIN__',
    clientId: '__IAM_CLIENT_ID__',
    namespace: '__NAMESPACE__',
    redirectURI: '__IAM_CLIENT_REDIRECT_URI__'
  }
})

AppV2AdminApi(sdk, { axiosConfig: { request: { headers: { Authorization: 'Bearer {access_token}' } } } })
  .getApp_ByApp_v2(app:string)

// return Promise<AppItem>
```

## PATCH /csm/v2/admin/namespaces/{namespace}/apps/{app}

```
import { AccelByte } from '@accelbyte/sdk'
import { AppV2AdminApi } from '@accelbyte/sdk-csm'

const sdk = AccelByte.SDK({
  coreConfig: {
    baseURL: '__AGS_DOMAIN__',
    clientId: '__IAM_CLIENT_ID__',
    namespace: '__NAMESPACE__',
    redirectURI: '__IAM_CLIENT_REDIRECT_URI__'
  }
})

AppV2AdminApi(sdk, { axiosConfig: { request: { headers: { Authorization: 'Bearer {access_token}' } } } })
  .patchApp_ByApp_v2(app:string, data: {
             UpdateAppV2Request
    })

// return Promise<AppItem>
```

## POST /csm/v2/admin/namespaces/{namespace}/apps/{app}

```
import { AccelByte } from '@accelbyte/sdk'
import { AppV2AdminApi } from '@accelbyte/sdk-csm'

const sdk = AccelByte.SDK({
  coreConfig: {
    baseURL: '__AGS_DOMAIN__',
    clientId: '__IAM_CLIENT_ID__',
    namespace: '__NAMESPACE__',
    redirectURI: '__IAM_CLIENT_REDIRECT_URI__'
  }
})

AppV2AdminApi(sdk, { axiosConfig: { request: { headers: { Authorization: 'Bearer {access_token}' } } } })
  .createApp_ByApp_v2(app:string, data: {
             CreateAppV2Request
    })

// return Promise<AppItem>
```

## POST /csm/v1/admin/namespaces/{namespace}/deployments

```
import { AccelByte } from '@accelbyte/sdk'
import { DeploymentAdminApi } from '@accelbyte/sdk-csm'

const sdk = AccelByte.SDK({
  coreConfig: {
    baseURL: '__AGS_DOMAIN__',
    clientId: '__IAM_CLIENT_ID__',
    namespace: '__NAMESPACE__',
    redirectURI: '__IAM_CLIENT_REDIRECT_URI__'
  }
})

DeploymentAdminApi(sdk, { axiosConfig: { request: { headers: { Authorization: 'Bearer {access_token}' } } } })
  .createDeployment(data: {
             GetDeploymentListV1Request,
             queryParams?: {
             limit?: number,
             offset?: number
    })

// return Promise<GetDeploymentListV1Response>
```

## POST /csm/v2/admin/namespaces/{namespace}/deployments

```
import { AccelByte } from '@accelbyte/sdk'
import { DeploymentV2AdminApi } from '@accelbyte/sdk-csm'

const sdk = AccelByte.SDK({
  coreConfig: {
    baseURL: '__AGS_DOMAIN__',
    clientId: '__IAM_CLIENT_ID__',
    namespace: '__NAMESPACE__',
    redirectURI: '__IAM_CLIENT_REDIRECT_URI__'
  }
})

DeploymentV2AdminApi(sdk, { axiosConfig: { request: { headers: { Authorization: 'Bearer {access_token}' } } } })
  .createDeployment_v2(data: {
             GetDeploymentListV2Request,
             queryParams?: {
             limit?: number,
             offset?: number
    })

// return Promise<GetDeploymentListV2Response>
```

## PUT /csm/v1/admin/namespaces/{namespace}/apps/{app}/stop

```
import { AccelByte } from '@accelbyte/sdk'
import { AppAdminApi } from '@accelbyte/sdk-csm'

const sdk = AccelByte.SDK({
  coreConfig: {
    baseURL: '__AGS_DOMAIN__',
    clientId: '__IAM_CLIENT_ID__',
    namespace: '__NAMESPACE__',
    redirectURI: '__IAM_CLIENT_REDIRECT_URI__'
  }
})

AppAdminApi(sdk, { axiosConfig: { request: { headers: { Authorization: 'Bearer {access_token}' } } } })
  .updateStop_ByApp(app:string, data: {
             StopAppV1Request
    })

// return Promise<StopAppV1Response>
```

## PUT /csm/v2/admin/namespaces/{namespace}/apps/{app}/stop

```
import { AccelByte } from '@accelbyte/sdk'
import { AppV2AdminApi } from '@accelbyte/sdk-csm'

const sdk = AccelByte.SDK({
  coreConfig: {
    baseURL: '__AGS_DOMAIN__',
    clientId: '__IAM_CLIENT_ID__',
    namespace: '__NAMESPACE__',
    redirectURI: '__IAM_CLIENT_REDIRECT_URI__'
  }
})

AppV2AdminApi(sdk, { axiosConfig: { request: { headers: { Authorization: 'Bearer {access_token}' } } } })
  .updateStop_ByApp_v2(app:string)

// return Promise
```

## PUT /csm/v1/admin/namespaces/{namespace}/apps/{app}/start

```
import { AccelByte } from '@accelbyte/sdk'
import { AppAdminApi } from '@accelbyte/sdk-csm'

const sdk = AccelByte.SDK({
  coreConfig: {
    baseURL: '__AGS_DOMAIN__',
    clientId: '__IAM_CLIENT_ID__',
    namespace: '__NAMESPACE__',
    redirectURI: '__IAM_CLIENT_REDIRECT_URI__'
  }
})

AppAdminApi(sdk, { axiosConfig: { request: { headers: { Authorization: 'Bearer {access_token}' } } } })
  .updateStart_ByApp(app:string, data: {
             StartAppV1Request
    })

// return Promise<StartAppV1Response>
```

## PUT /csm/v2/admin/namespaces/{namespace}/apps/{app}/start

```
import { AccelByte } from '@accelbyte/sdk'
import { AppV2AdminApi } from '@accelbyte/sdk-csm'

const sdk = AccelByte.SDK({
  coreConfig: {
    baseURL: '__AGS_DOMAIN__',
    clientId: '__IAM_CLIENT_ID__',
    namespace: '__NAMESPACE__',
    redirectURI: '__IAM_CLIENT_REDIRECT_URI__'
  }
})

AppV2AdminApi(sdk, { axiosConfig: { request: { headers: { Authorization: 'Bearer {access_token}' } } } })
  .updateStart_ByApp_v2(app:string)

// return Promise
```

## GET /csm/v2/admin/namespaces/{namespace}/resources/limits

```
import { AccelByte } from '@accelbyte/sdk'
import { ResourcesLimitsAdminApi } from '@accelbyte/sdk-csm'

const sdk = AccelByte.SDK({
  coreConfig: {
    baseURL: '__AGS_DOMAIN__',
    clientId: '__IAM_CLIENT_ID__',
    namespace: '__NAMESPACE__',
    redirectURI: '__IAM_CLIENT_REDIRECT_URI__'
  }
})

ResourcesLimitsAdminApi(sdk, { axiosConfig: { request: { headers: { Authorization: 'Bearer {access_token}' } } } })
  .getResourcesLimits_v2()

// return Promise<CsmAppLimitsResponse>
```

## DELETE /csm/v1/admin/namespaces/{namespace}/apps/{app}/images

```
import { AccelByte } from '@accelbyte/sdk'
import { ImageAdminApi } from '@accelbyte/sdk-csm'

const sdk = AccelByte.SDK({
  coreConfig: {
    baseURL: '__AGS_DOMAIN__',
    clientId: '__IAM_CLIENT_ID__',
    namespace: '__NAMESPACE__',
    redirectURI: '__IAM_CLIENT_REDIRECT_URI__'
  }
})

ImageAdminApi(sdk, { axiosConfig: { request: { headers: { Authorization: 'Bearer {access_token}' } } } })
  .deleteImage_ByApp(app:string, data: {
             DeleteAppImagesV1Request
    })

// return Promise
```

## GET /csm/v1/admin/namespaces/{namespace}/apps/{app}/images

```
import { AccelByte } from '@accelbyte/sdk'
import { ImageAdminApi } from '@accelbyte/sdk-csm'

const sdk = AccelByte.SDK({
  coreConfig: {
    baseURL: '__AGS_DOMAIN__',
    clientId: '__IAM_CLIENT_ID__',
    namespace: '__NAMESPACE__',
    redirectURI: '__IAM_CLIENT_REDIRECT_URI__'
  }
})

ImageAdminApi(sdk, { axiosConfig: { request: { headers: { Authorization: 'Bearer {access_token}' } } } })
  .getImages_ByApp(app:string,  queryParams?: {
             cached?: string | null,
             limit?: number,
             offset?: number
    })

// return Promise<GetAppImageListV1Response>
```

## DELETE /csm/v2/admin/namespaces/{namespace}/apps/{app}/images

```
import { AccelByte } from '@accelbyte/sdk'
import { ImageV2AdminApi } from '@accelbyte/sdk-csm'

const sdk = AccelByte.SDK({
  coreConfig: {
    baseURL: '__AGS_DOMAIN__',
    clientId: '__IAM_CLIENT_ID__',
    namespace: '__NAMESPACE__',
    redirectURI: '__IAM_CLIENT_REDIRECT_URI__'
  }
})

ImageV2AdminApi(sdk, { axiosConfig: { request: { headers: { Authorization: 'Bearer {access_token}' } } } })
  .deleteImage_ByApp_v2(app:string, data: {
             DeleteAppImagesV1Request
    })

// return Promise
```

## GET /csm/v2/admin/namespaces/{namespace}/apps/{app}/images

```
import { AccelByte } from '@accelbyte/sdk'
import { ImageV2AdminApi } from '@accelbyte/sdk-csm'

const sdk = AccelByte.SDK({
  coreConfig: {
    baseURL: '__AGS_DOMAIN__',
    clientId: '__IAM_CLIENT_ID__',
    namespace: '__NAMESPACE__',
    redirectURI: '__IAM_CLIENT_REDIRECT_URI__'
  }
})

ImageV2AdminApi(sdk, { axiosConfig: { request: { headers: { Authorization: 'Bearer {access_token}' } } } })
  .getImages_ByApp_v2(app:string,  queryParams?: {
             cached?: string | null
    })

// return Promise<GetAppImageListV2Response>
```

## GET /csm/v1/admin/namespaces/{namespace}/apps/{app}/release

```
import { AccelByte } from '@accelbyte/sdk'
import { AppAdminApi } from '@accelbyte/sdk-csm'

const sdk = AccelByte.SDK({
  coreConfig: {
    baseURL: '__AGS_DOMAIN__',
    clientId: '__IAM_CLIENT_ID__',
    namespace: '__NAMESPACE__',
    redirectURI: '__IAM_CLIENT_REDIRECT_URI__'
  }
})

AppAdminApi(sdk, { axiosConfig: { request: { headers: { Authorization: 'Bearer {access_token}' } } } })
  .getRelease_ByApp(app:string)

// return Promise<GetAppReleaseV1Response>
```

## GET /csm/v1/admin/namespaces/{namespace}/apps/{app}/secrets

```
import { AccelByte } from '@accelbyte/sdk'
import { ConfigurationAdminApi } from '@accelbyte/sdk-csm'

const sdk = AccelByte.SDK({
  coreConfig: {
    baseURL: '__AGS_DOMAIN__',
    clientId: '__IAM_CLIENT_ID__',
    namespace: '__NAMESPACE__',
    redirectURI: '__IAM_CLIENT_REDIRECT_URI__'
  }
})

ConfigurationAdminApi(sdk, { axiosConfig: { request: { headers: { Authorization: 'Bearer {access_token}' } } } })
  .getSecrets_ByApp(app:string,  queryParams?: {
             limit?: number,
             offset?: number
    })

// return Promise<GetListOfConfigurationsV1Response>
```

## POST /csm/v1/admin/namespaces/{namespace}/apps/{app}/secrets

```
import { AccelByte } from '@accelbyte/sdk'
import { ConfigurationAdminApi } from '@accelbyte/sdk-csm'

const sdk = AccelByte.SDK({
  coreConfig: {
    baseURL: '__AGS_DOMAIN__',
    clientId: '__IAM_CLIENT_ID__',
    namespace: '__NAMESPACE__',
    redirectURI: '__IAM_CLIENT_REDIRECT_URI__'
  }
})

ConfigurationAdminApi(sdk, { axiosConfig: { request: { headers: { Authorization: 'Bearer {access_token}' } } } })
  .createSecret_ByApp(app:string, data: {
             SaveConfigurationV1Request
    })

// return Promise<SaveConfigurationV1Response>
```

## GET /csm/v2/admin/namespaces/{namespace}/apps/{app}/secrets

```
import { AccelByte } from '@accelbyte/sdk'
import { ConfigurationV2AdminApi } from '@accelbyte/sdk-csm'

const sdk = AccelByte.SDK({
  coreConfig: {
    baseURL: '__AGS_DOMAIN__',
    clientId: '__IAM_CLIENT_ID__',
    namespace: '__NAMESPACE__',
    redirectURI: '__IAM_CLIENT_REDIRECT_URI__'
  }
})

ConfigurationV2AdminApi(sdk, { axiosConfig: { request: { headers: { Authorization: 'Bearer {access_token}' } } } })
  .getSecrets_ByApp_v2(app:string,  queryParams?: {
             limit?: number,
             offset?: number
    })

// return Promise<GetListOfConfigurationsV2Response>
```

## POST /csm/v2/admin/namespaces/{namespace}/apps/{app}/secrets

```
import { AccelByte } from '@accelbyte/sdk'
import { ConfigurationV2AdminApi } from '@accelbyte/sdk-csm'

const sdk = AccelByte.SDK({
  coreConfig: {
    baseURL: '__AGS_DOMAIN__',
    clientId: '__IAM_CLIENT_ID__',
    namespace: '__NAMESPACE__',
    redirectURI: '__IAM_CLIENT_REDIRECT_URI__'
  }
})

ConfigurationV2AdminApi(sdk, { axiosConfig: { request: { headers: { Authorization: 'Bearer {access_token}' } } } })
  .createSecret_ByApp_v2(app:string, data: {
             SaveSecretConfigurationV2Request
    })

// return Promise<SaveConfigurationV2Response>
```

## GET /csm/v1/admin/namespaces/{namespace}/apps/{app}/variables

```
import { AccelByte } from '@accelbyte/sdk'
import { ConfigurationAdminApi } from '@accelbyte/sdk-csm'

const sdk = AccelByte.SDK({
  coreConfig: {
    baseURL: '__AGS_DOMAIN__',
    clientId: '__IAM_CLIENT_ID__',
    namespace: '__NAMESPACE__',
    redirectURI: '__IAM_CLIENT_REDIRECT_URI__'
  }
})

ConfigurationAdminApi(sdk, { axiosConfig: { request: { headers: { Authorization: 'Bearer {access_token}' } } } })
  .getVariables_ByApp(app:string,  queryParams?: {
             limit?: number,
             offset?: number
    })

// return Promise<GetListOfConfigurationsV1Response>
```

## POST /csm/v1/admin/namespaces/{namespace}/apps/{app}/variables

```
import { AccelByte } from '@accelbyte/sdk'
import { ConfigurationAdminApi } from '@accelbyte/sdk-csm'

const sdk = AccelByte.SDK({
  coreConfig: {
    baseURL: '__AGS_DOMAIN__',
    clientId: '__IAM_CLIENT_ID__',
    namespace: '__NAMESPACE__',
    redirectURI: '__IAM_CLIENT_REDIRECT_URI__'
  }
})

ConfigurationAdminApi(sdk, { axiosConfig: { request: { headers: { Authorization: 'Bearer {access_token}' } } } })
  .createVariable_ByApp(app:string, data: {
             SaveConfigurationV1Request
    })

// return Promise<SaveConfigurationV1Response>
```

## PATCH /csm/v2/admin/namespaces/{namespace}/apps/{app}/resources

```
import { AccelByte } from '@accelbyte/sdk'
import { AppV2AdminApi } from '@accelbyte/sdk-csm'

const sdk = AccelByte.SDK({
  coreConfig: {
    baseURL: '__AGS_DOMAIN__',
    clientId: '__IAM_CLIENT_ID__',
    namespace: '__NAMESPACE__',
    redirectURI: '__IAM_CLIENT_REDIRECT_URI__'
  }
})

AppV2AdminApi(sdk, { axiosConfig: { request: { headers: { Authorization: 'Bearer {access_token}' } } } })
  .patchResource_ByApp_v2(app:string, data: {
             UpdateAppResourceRequest
    })

// return Promise<AppItem>
```

## GET /csm/v2/admin/namespaces/{namespace}/apps/{app}/variables

```
import { AccelByte } from '@accelbyte/sdk'
import { ConfigurationV2AdminApi } from '@accelbyte/sdk-csm'

const sdk = AccelByte.SDK({
  coreConfig: {
    baseURL: '__AGS_DOMAIN__',
    clientId: '__IAM_CLIENT_ID__',
    namespace: '__NAMESPACE__',
    redirectURI: '__IAM_CLIENT_REDIRECT_URI__'
  }
})

ConfigurationV2AdminApi(sdk, { axiosConfig: { request: { headers: { Authorization: 'Bearer {access_token}' } } } })
  .getVariables_ByApp_v2(app:string,  queryParams?: {
             limit?: number,
             offset?: number
    })

// return Promise<GetListOfConfigurationsV2Response>
```

## POST /csm/v2/admin/namespaces/{namespace}/apps/{app}/variables

```
import { AccelByte } from '@accelbyte/sdk'
import { ConfigurationV2AdminApi } from '@accelbyte/sdk-csm'

const sdk = AccelByte.SDK({
  coreConfig: {
    baseURL: '__AGS_DOMAIN__',
    clientId: '__IAM_CLIENT_ID__',
    namespace: '__NAMESPACE__',
    redirectURI: '__IAM_CLIENT_REDIRECT_URI__'
  }
})

ConfigurationV2AdminApi(sdk, { axiosConfig: { request: { headers: { Authorization: 'Bearer {access_token}' } } } })
  .createVariable_ByApp_v2(app:string, data: {
             SaveConfigurationV2Request
    })

// return Promise<SaveConfigurationV2Response>
```

## POST /csm/v1/admin/namespaces/{namespace}/apps/{app}/deployments

```
import { AccelByte } from '@accelbyte/sdk'
import { DeploymentAdminApi } from '@accelbyte/sdk-csm'

const sdk = AccelByte.SDK({
  coreConfig: {
    baseURL: '__AGS_DOMAIN__',
    clientId: '__IAM_CLIENT_ID__',
    namespace: '__NAMESPACE__',
    redirectURI: '__IAM_CLIENT_REDIRECT_URI__'
  }
})

DeploymentAdminApi(sdk, { axiosConfig: { request: { headers: { Authorization: 'Bearer {access_token}' } } } })
  .createDeployment_ByApp(app:string, data: {
             CreateDeploymentV1Request
    })

// return Promise<CreateDeploymentV1Response>
```

## POST /csm/v2/admin/namespaces/{namespace}/apps/{app}/deployments

```
import { AccelByte } from '@accelbyte/sdk'
import { DeploymentV2AdminApi } from '@accelbyte/sdk-csm'

const sdk = AccelByte.SDK({
  coreConfig: {
    baseURL: '__AGS_DOMAIN__',
    clientId: '__IAM_CLIENT_ID__',
    namespace: '__NAMESPACE__',
    redirectURI: '__IAM_CLIENT_REDIRECT_URI__'
  }
})

DeploymentV2AdminApi(sdk, { axiosConfig: { request: { headers: { Authorization: 'Bearer {access_token}' } } } })
  .createDeployment_ByApp_v2(app:string, data: {
             CreateDeploymentV2Request
    })

// return Promise<CreateDeploymentV2Response>
```

## GET /csm/v2/admin/namespaces/{namespace}/apps/{app}/subscriptions

```
import { AccelByte } from '@accelbyte/sdk'
import { NotificationSubscriptionAdminApi } from '@accelbyte/sdk-csm'

const sdk = AccelByte.SDK({
  coreConfig: {
    baseURL: '__AGS_DOMAIN__',
    clientId: '__IAM_CLIENT_ID__',
    namespace: '__NAMESPACE__',
    redirectURI: '__IAM_CLIENT_REDIRECT_URI__'
  }
})

NotificationSubscriptionAdminApi(sdk, { axiosConfig: { request: { headers: { Authorization: 'Bearer {access_token}' } } } })
  .getSubscriptions_ByApp_v2(app:string,  queryParams: {
             notificationType: string | null
    })

// return Promise<GetNotificationSubscriberListResponse>
```

## POST /csm/v2/admin/namespaces/{namespace}/apps/{app}/subscriptions

```
import { AccelByte } from '@accelbyte/sdk'
import { NotificationSubscriptionAdminApi } from '@accelbyte/sdk-csm'

const sdk = AccelByte.SDK({
  coreConfig: {
    baseURL: '__AGS_DOMAIN__',
    clientId: '__IAM_CLIENT_ID__',
    namespace: '__NAMESPACE__',
    redirectURI: '__IAM_CLIENT_REDIRECT_URI__'
  }
})

NotificationSubscriptionAdminApi(sdk, { axiosConfig: { request: { headers: { Authorization: 'Bearer {access_token}' } } } })
  .createSubscription_ByApp_v2(app:string, data: {
             SubscribeNotificationRequest
    })

// return Promise<SubscribeNotificationResponse>
```

## PUT /csm/v2/admin/namespaces/{namespace}/apps/{app}/subscriptions

```
import { AccelByte } from '@accelbyte/sdk'
import { NotificationSubscriptionAdminApi } from '@accelbyte/sdk-csm'

const sdk = AccelByte.SDK({
  coreConfig: {
    baseURL: '__AGS_DOMAIN__',
    clientId: '__IAM_CLIENT_ID__',
    namespace: '__NAMESPACE__',
    redirectURI: '__IAM_CLIENT_REDIRECT_URI__'
  }
})

NotificationSubscriptionAdminApi(sdk, { axiosConfig: { request: { headers: { Authorization: 'Bearer {access_token}' } } } })
  .updateSubscription_ByApp_v2(app:string, data: {
             BulkSubscribeRequest
    })

// return Promise<GetNotificationSubscriberListResponse>
```

## POST /csm/v2/admin/namespaces/{namespace}/apps/{app}/resources/form

```
import { AccelByte } from '@accelbyte/sdk'
import { AppV2AdminApi } from '@accelbyte/sdk-csm'

const sdk = AccelByte.SDK({
  coreConfig: {
    baseURL: '__AGS_DOMAIN__',
    clientId: '__IAM_CLIENT_ID__',
    namespace: '__NAMESPACE__',
    redirectURI: '__IAM_CLIENT_REDIRECT_URI__'
  }
})

AppV2AdminApi(sdk, { axiosConfig: { request: { headers: { Authorization: 'Bearer {access_token}' } } } })
  .createResourceForm_ByApp_v2(app:string, data: {
             IncreaseLimitFormRequest
    })

// return Promise
```

## DELETE /csm/v1/admin/namespaces/{namespace}/deployments/{deploymentId}

```
import { AccelByte } from '@accelbyte/sdk'
import { DeploymentAdminApi } from '@accelbyte/sdk-csm'

const sdk = AccelByte.SDK({
  coreConfig: {
    baseURL: '__AGS_DOMAIN__',
    clientId: '__IAM_CLIENT_ID__',
    namespace: '__NAMESPACE__',
    redirectURI: '__IAM_CLIENT_REDIRECT_URI__'
  }
})

DeploymentAdminApi(sdk, { axiosConfig: { request: { headers: { Authorization: 'Bearer {access_token}' } } } })
  .deleteDeployment_ByDeploymentId(deploymentId:string)

// return Promise
```

## GET /csm/v1/admin/namespaces/{namespace}/deployments/{deploymentId}

```
import { AccelByte } from '@accelbyte/sdk'
import { DeploymentAdminApi } from '@accelbyte/sdk-csm'

const sdk = AccelByte.SDK({
  coreConfig: {
    baseURL: '__AGS_DOMAIN__',
    clientId: '__IAM_CLIENT_ID__',
    namespace: '__NAMESPACE__',
    redirectURI: '__IAM_CLIENT_REDIRECT_URI__'
  }
})

DeploymentAdminApi(sdk, { axiosConfig: { request: { headers: { Authorization: 'Bearer {access_token}' } } } })
  .getDeployment_ByDeploymentId(deploymentId:string)

// return Promise<GetDeploymentV1Response>
```

## DELETE /csm/v2/admin/namespaces/{namespace}/deployments/{deploymentId}

```
import { AccelByte } from '@accelbyte/sdk'
import { DeploymentV2AdminApi } from '@accelbyte/sdk-csm'

const sdk = AccelByte.SDK({
  coreConfig: {
    baseURL: '__AGS_DOMAIN__',
    clientId: '__IAM_CLIENT_ID__',
    namespace: '__NAMESPACE__',
    redirectURI: '__IAM_CLIENT_REDIRECT_URI__'
  }
})

DeploymentV2AdminApi(sdk, { axiosConfig: { request: { headers: { Authorization: 'Bearer {access_token}' } } } })
  .deleteDeployment_ByDeploymentId_v2(deploymentId:string)

// return Promise
```

## GET /csm/v2/admin/namespaces/{namespace}/deployments/{deploymentId}

```
import { AccelByte } from '@accelbyte/sdk'
import { DeploymentV2AdminApi } from '@accelbyte/sdk-csm'

const sdk = AccelByte.SDK({
  coreConfig: {
    baseURL: '__AGS_DOMAIN__',
    clientId: '__IAM_CLIENT_ID__',
    namespace: '__NAMESPACE__',
    redirectURI: '__IAM_CLIENT_REDIRECT_URI__'
  }
})

DeploymentV2AdminApi(sdk, { axiosConfig: { request: { headers: { Authorization: 'Bearer {access_token}' } } } })
  .getDeployment_ByDeploymentId_v2(deploymentId:string)

// return Promise<GetDeploymentListV2DataItem>
```

## DELETE /csm/v2/admin/namespaces/{namespace}/apps/{app}/subscriptions/me

```
import { AccelByte } from '@accelbyte/sdk'
import { NotificationSubscriptionAdminApi } from '@accelbyte/sdk-csm'

const sdk = AccelByte.SDK({
  coreConfig: {
    baseURL: '__AGS_DOMAIN__',
    clientId: '__IAM_CLIENT_ID__',
    namespace: '__NAMESPACE__',
    redirectURI: '__IAM_CLIENT_REDIRECT_URI__'
  }
})

NotificationSubscriptionAdminApi(sdk, { axiosConfig: { request: { headers: { Authorization: 'Bearer {access_token}' } } } })
  .deleteSubscriptionMe_ByApp_v2(app:string)

// return Promise
```

## GET /csm/v2/admin/namespaces/{namespace}/apps/{app}/subscriptions/me

```
import { AccelByte } from '@accelbyte/sdk'
import { NotificationSubscriptionAdminApi } from '@accelbyte/sdk-csm'

const sdk = AccelByte.SDK({
  coreConfig: {
    baseURL: '__AGS_DOMAIN__',
    clientId: '__IAM_CLIENT_ID__',
    namespace: '__NAMESPACE__',
    redirectURI: '__IAM_CLIENT_REDIRECT_URI__'
  }
})

NotificationSubscriptionAdminApi(sdk, { axiosConfig: { request: { headers: { Authorization: 'Bearer {access_token}' } } } })
  .getSubscriptionsMe_ByApp_v2(app:string)

// return Promise<GetNotificationSubscriberStatusResponse>
```

## POST /csm/v2/admin/namespaces/{namespace}/apps/{app}/subscriptions/me

```
import { AccelByte } from '@accelbyte/sdk'
import { NotificationSubscriptionAdminApi } from '@accelbyte/sdk-csm'

const sdk = AccelByte.SDK({
  coreConfig: {
    baseURL: '__AGS_DOMAIN__',
    clientId: '__IAM_CLIENT_ID__',
    namespace: '__NAMESPACE__',
    redirectURI: '__IAM_CLIENT_REDIRECT_URI__'
  }
})

NotificationSubscriptionAdminApi(sdk, { axiosConfig: { request: { headers: { Authorization: 'Bearer {access_token}' } } } })
  .createSubscriptionMe_ByApp_v2(app:string, data: {
             SelfSubscribeNotificationRequest
    })

// return Promise
```

## DELETE /csm/v1/admin/namespaces/{namespace}/apps/{app}/secrets/{configId}

```
import { AccelByte } from '@accelbyte/sdk'
import { ConfigurationAdminApi } from '@accelbyte/sdk-csm'

const sdk = AccelByte.SDK({
  coreConfig: {
    baseURL: '__AGS_DOMAIN__',
    clientId: '__IAM_CLIENT_ID__',
    namespace: '__NAMESPACE__',
    redirectURI: '__IAM_CLIENT_REDIRECT_URI__'
  }
})

ConfigurationAdminApi(sdk, { axiosConfig: { request: { headers: { Authorization: 'Bearer {access_token}' } } } })
  .deleteSecret_ByApp_ByConfigId(app:string, configId:string)

// return Promise
```

## PUT /csm/v1/admin/namespaces/{namespace}/apps/{app}/secrets/{configId}

```
import { AccelByte } from '@accelbyte/sdk'
import { ConfigurationAdminApi } from '@accelbyte/sdk-csm'

const sdk = AccelByte.SDK({
  coreConfig: {
    baseURL: '__AGS_DOMAIN__',
    clientId: '__IAM_CLIENT_ID__',
    namespace: '__NAMESPACE__',
    redirectURI: '__IAM_CLIENT_REDIRECT_URI__'
  }
})

ConfigurationAdminApi(sdk, { axiosConfig: { request: { headers: { Authorization: 'Bearer {access_token}' } } } })
  .updateSecret_ByApp_ByConfigId(app:string, configId:string, data: {
             UpdateConfigurationV1Request
    })

// return Promise<UpdateConfigurationV1Response>
```

## DELETE /csm/v2/admin/namespaces/{namespace}/apps/{app}/secrets/{configId}

```
import { AccelByte } from '@accelbyte/sdk'
import { ConfigurationV2AdminApi } from '@accelbyte/sdk-csm'

const sdk = AccelByte.SDK({
  coreConfig: {
    baseURL: '__AGS_DOMAIN__',
    clientId: '__IAM_CLIENT_ID__',
    namespace: '__NAMESPACE__',
    redirectURI: '__IAM_CLIENT_REDIRECT_URI__'
  }
})

ConfigurationV2AdminApi(sdk, { axiosConfig: { request: { headers: { Authorization: 'Bearer {access_token}' } } } })
  .deleteSecret_ByApp_ByConfigId_v2(app:string, configId:string)

// return Promise
```

## PUT /csm/v2/admin/namespaces/{namespace}/apps/{app}/secrets/{configId}

```
import { AccelByte } from '@accelbyte/sdk'
import { ConfigurationV2AdminApi } from '@accelbyte/sdk-csm'

const sdk = AccelByte.SDK({
  coreConfig: {
    baseURL: '__AGS_DOMAIN__',
    clientId: '__IAM_CLIENT_ID__',
    namespace: '__NAMESPACE__',
    redirectURI: '__IAM_CLIENT_REDIRECT_URI__'
  }
})

ConfigurationV2AdminApi(sdk, { axiosConfig: { request: { headers: { Authorization: 'Bearer {access_token}' } } } })
  .updateSecret_ByApp_ByConfigId_v2(app:string, configId:string, data: {
             UpdateSecretConfigurationV2Request
    })

// return Promise<UpdateConfigurationV2Response>
```

## DELETE /csm/v1/admin/namespaces/{namespace}/apps/{app}/variables/{configId}

```
import { AccelByte } from '@accelbyte/sdk'
import { ConfigurationAdminApi } from '@accelbyte/sdk-csm'

const sdk = AccelByte.SDK({
  coreConfig: {
    baseURL: '__AGS_DOMAIN__',
    clientId: '__IAM_CLIENT_ID__',
    namespace: '__NAMESPACE__',
    redirectURI: '__IAM_CLIENT_REDIRECT_URI__'
  }
})

ConfigurationAdminApi(sdk, { axiosConfig: { request: { headers: { Authorization: 'Bearer {access_token}' } } } })
  .deleteVariable_ByApp_ByConfigId(app:string, configId:string)

// return Promise
```

## PUT /csm/v1/admin/namespaces/{namespace}/apps/{app}/variables/{configId}

```
import { AccelByte } from '@accelbyte/sdk'
import { ConfigurationAdminApi } from '@accelbyte/sdk-csm'

const sdk = AccelByte.SDK({
  coreConfig: {
    baseURL: '__AGS_DOMAIN__',
    clientId: '__IAM_CLIENT_ID__',
    namespace: '__NAMESPACE__',
    redirectURI: '__IAM_CLIENT_REDIRECT_URI__'
  }
})

ConfigurationAdminApi(sdk, { axiosConfig: { request: { headers: { Authorization: 'Bearer {access_token}' } } } })
  .updateVariable_ByApp_ByConfigId(app:string, configId:string, data: {
             UpdateConfigurationV1Request
    })

// return Promise<UpdateConfigurationV1Response>
```

## DELETE /csm/v2/admin/namespaces/{namespace}/apps/{app}/variables/{configId}

```
import { AccelByte } from '@accelbyte/sdk'
import { ConfigurationV2AdminApi } from '@accelbyte/sdk-csm'

const sdk = AccelByte.SDK({
  coreConfig: {
    baseURL: '__AGS_DOMAIN__',
    clientId: '__IAM_CLIENT_ID__',
    namespace: '__NAMESPACE__',
    redirectURI: '__IAM_CLIENT_REDIRECT_URI__'
  }
})

ConfigurationV2AdminApi(sdk, { axiosConfig: { request: { headers: { Authorization: 'Bearer {access_token}' } } } })
  .deleteVariable_ByApp_ByConfigId_v2(app:string, configId:string)

// return Promise
```

## PUT /csm/v2/admin/namespaces/{namespace}/apps/{app}/variables/{configId}

```
import { AccelByte } from '@accelbyte/sdk'
import { ConfigurationV2AdminApi } from '@accelbyte/sdk-csm'

const sdk = AccelByte.SDK({
  coreConfig: {
    baseURL: '__AGS_DOMAIN__',
    clientId: '__IAM_CLIENT_ID__',
    namespace: '__NAMESPACE__',
    redirectURI: '__IAM_CLIENT_REDIRECT_URI__'
  }
})

ConfigurationV2AdminApi(sdk, { axiosConfig: { request: { headers: { Authorization: 'Bearer {access_token}' } } } })
  .updateVariable_ByApp_ByConfigId_v2(app:string, configId:string, data: {
             UpdateConfigurationV2Request
    })

// return Promise<UpdateConfigurationV2Response>
```

## DELETE /csm/v2/admin/namespaces/{namespace}/apps/{app}/subscriptions/users/{userId}

```
import { AccelByte } from '@accelbyte/sdk'
import { NotificationSubscriptionAdminApi } from '@accelbyte/sdk-csm'

const sdk = AccelByte.SDK({
  coreConfig: {
    baseURL: '__AGS_DOMAIN__',
    clientId: '__IAM_CLIENT_ID__',
    namespace: '__NAMESPACE__',
    redirectURI: '__IAM_CLIENT_REDIRECT_URI__'
  }
})

NotificationSubscriptionAdminApi(sdk, { axiosConfig: { request: { headers: { Authorization: 'Bearer {access_token}' } } } })
  .deleteSubscriptionUser_ByApp_ByUserId_v2(app:string, userId:string)

// return Promise
```

## DELETE /csm/v2/admin/namespaces/{namespace}/apps/{app}/subscriptions/{subscriptionId}

```
import { AccelByte } from '@accelbyte/sdk'
import { NotificationSubscriptionAdminApi } from '@accelbyte/sdk-csm'

const sdk = AccelByte.SDK({
  coreConfig: {
    baseURL: '__AGS_DOMAIN__',
    clientId: '__IAM_CLIENT_ID__',
    namespace: '__NAMESPACE__',
    redirectURI: '__IAM_CLIENT_REDIRECT_URI__'
  }
})

NotificationSubscriptionAdminApi(sdk, { axiosConfig: { request: { headers: { Authorization: 'Bearer {access_token}' } } } })
  .deleteSubscription_ByApp_BySubscriptionId_v2(app:string, subscriptionId:string)

// return Promise
```