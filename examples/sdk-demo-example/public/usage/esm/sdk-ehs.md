## GET /ehs/v1/namespaces/{namespace}/apps/{app}/token

```
import { AccelByte } from '@accelbyte/sdk'
import { AccessApi } from '@accelbyte/sdk-ehs'

const sdk = AccelByte.SDK({
  coreConfig: {
    baseURL: '__AGS_DOMAIN__',
    clientId: '__IAM_CLIENT_ID__',
    namespace: '__NAMESPACE__',
    redirectURI: '__IAM_CLIENT_REDIRECT_URI__'
  }
})

AccessApi(sdk)
  .getToken_ByApp(app:string)

// return Promise<GetUploadTokenV1Response>
```

## GET /ehs/v1/admin/namespaces/{namespace}/reflection

```
import { AccelByte } from '@accelbyte/sdk'
import { UtilityAdminApi } from '@accelbyte/sdk-ehs'

const sdk = AccelByte.SDK({
  coreConfig: {
    baseURL: '__AGS_DOMAIN__',
    clientId: '__IAM_CLIENT_ID__',
    namespace: '__NAMESPACE__',
    redirectURI: '__IAM_CLIENT_REDIRECT_URI__'
  }
})

UtilityAdminApi(sdk, { axiosConfig: { request: { headers: { Authorization: 'Bearer {access_token}' } } } })
  .getReflection( queryParams?: {
             appName?: string | null,
             host?: string | null,
             securityType?: string | null
    })

// return Promise<GetGrpcReflectionInfo>
```