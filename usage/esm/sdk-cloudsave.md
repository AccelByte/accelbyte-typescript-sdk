## GET /cloudsave/v1/namespaces/{namespace}/tags

```
import { AccelByte } from '@accelbyte/sdk'
import { PublicTagsApi } from '@accelbyte/sdk-cloudsave'

const sdk = AccelByte.SDK({
  coreConfig: {
    baseURL: '__AGS_DOMAIN__',
    clientId: '__IAM_CLIENT_ID__',
    namespace: '__NAMESPACE__',
    redirectURI: '__IAM_CLIENT_REDIRECT_URI__'
  }
})

PublicTagsApi(sdk, { axiosConfig: { request: { headers: { Authorization: 'Bearer {access_token}' } } } })
  .getTags( queryParams?: {
             limit?: number,
             offset?: number
    })

// return Promise<ListTagsResponse>
```

## GET /cloudsave/v1/namespaces/{namespace}/binaries

```
import { AccelByte } from '@accelbyte/sdk'
import { PublicGameBinaryRecordApi } from '@accelbyte/sdk-cloudsave'

const sdk = AccelByte.SDK({
  coreConfig: {
    baseURL: '__AGS_DOMAIN__',
    clientId: '__IAM_CLIENT_ID__',
    namespace: '__NAMESPACE__',
    redirectURI: '__IAM_CLIENT_REDIRECT_URI__'
  }
})

PublicGameBinaryRecordApi(sdk, { axiosConfig: { request: { headers: { Authorization: 'Bearer {access_token}' } } } })
  .getBinaries( queryParams?: {
             limit?: number,
             offset?: number,
             query?: string | null,
             tags?: string[]
    })

// return Promise<ListGameBinaryRecordsResponse>
```

## POST /cloudsave/v1/namespaces/{namespace}/binaries

```
import { AccelByte } from '@accelbyte/sdk'
import { PublicGameBinaryRecordApi } from '@accelbyte/sdk-cloudsave'

const sdk = AccelByte.SDK({
  coreConfig: {
    baseURL: '__AGS_DOMAIN__',
    clientId: '__IAM_CLIENT_ID__',
    namespace: '__NAMESPACE__',
    redirectURI: '__IAM_CLIENT_REDIRECT_URI__'
  }
})

PublicGameBinaryRecordApi(sdk, { axiosConfig: { request: { headers: { Authorization: 'Bearer {access_token}' } } } })
  .createBinary(data: {
             PublicGameBinaryRecordCreate
    })

// return Promise<UploadBinaryRecordResponse>
```

## POST /cloudsave/v1/namespaces/{namespace}/records/bulk

```
import { AccelByte } from '@accelbyte/sdk'
import { PublicGameRecordApi } from '@accelbyte/sdk-cloudsave'

const sdk = AccelByte.SDK({
  coreConfig: {
    baseURL: '__AGS_DOMAIN__',
    clientId: '__IAM_CLIENT_ID__',
    namespace: '__NAMESPACE__',
    redirectURI: '__IAM_CLIENT_REDIRECT_URI__'
  }
})

PublicGameRecordApi(sdk, { axiosConfig: { request: { headers: { Authorization: 'Bearer {access_token}' } } } })
  .fetchRecordBulk(data: {
             BulkGetGameRecordRequest
    })

// return Promise<BulkGetGameRecordResponse>
```

## POST /cloudsave/v1/namespaces/{namespace}/binaries/bulk

```
import { AccelByte } from '@accelbyte/sdk'
import { PublicGameBinaryRecordApi } from '@accelbyte/sdk-cloudsave'

const sdk = AccelByte.SDK({
  coreConfig: {
    baseURL: '__AGS_DOMAIN__',
    clientId: '__IAM_CLIENT_ID__',
    namespace: '__NAMESPACE__',
    redirectURI: '__IAM_CLIENT_REDIRECT_URI__'
  }
})

PublicGameBinaryRecordApi(sdk, { axiosConfig: { request: { headers: { Authorization: 'Bearer {access_token}' } } } })
  .createBinaryBulk(data: {
             BulkGetGameRecordRequest
    })

// return Promise<BulkGetGameBinaryRecordResponse>
```

## DELETE /cloudsave/v1/namespaces/{namespace}/records/{key}

```
import { AccelByte } from '@accelbyte/sdk'
import { PublicGameRecordApi } from '@accelbyte/sdk-cloudsave'

const sdk = AccelByte.SDK({
  coreConfig: {
    baseURL: '__AGS_DOMAIN__',
    clientId: '__IAM_CLIENT_ID__',
    namespace: '__NAMESPACE__',
    redirectURI: '__IAM_CLIENT_REDIRECT_URI__'
  }
})

PublicGameRecordApi(sdk, { axiosConfig: { request: { headers: { Authorization: 'Bearer {access_token}' } } } })
  .deleteRecord_ByKey(key:string)

// return Promise
```

## GET /cloudsave/v1/namespaces/{namespace}/records/{key}

```
import { AccelByte } from '@accelbyte/sdk'
import { PublicGameRecordApi } from '@accelbyte/sdk-cloudsave'

const sdk = AccelByte.SDK({
  coreConfig: {
    baseURL: '__AGS_DOMAIN__',
    clientId: '__IAM_CLIENT_ID__',
    namespace: '__NAMESPACE__',
    redirectURI: '__IAM_CLIENT_REDIRECT_URI__'
  }
})

PublicGameRecordApi(sdk, { axiosConfig: { request: { headers: { Authorization: 'Bearer {access_token}' } } } })
  .getRecord_ByKey(key:string)

// return Promise<GameRecordResponse>
```

## POST /cloudsave/v1/namespaces/{namespace}/records/{key}

```
import { AccelByte } from '@accelbyte/sdk'
import { PublicGameRecordApi } from '@accelbyte/sdk-cloudsave'

const sdk = AccelByte.SDK({
  coreConfig: {
    baseURL: '__AGS_DOMAIN__',
    clientId: '__IAM_CLIENT_ID__',
    namespace: '__NAMESPACE__',
    redirectURI: '__IAM_CLIENT_REDIRECT_URI__'
  }
})

PublicGameRecordApi(sdk, { axiosConfig: { request: { headers: { Authorization: 'Bearer {access_token}' } } } })
  .createRecord_ByKey(key:string, data: {
             GameRecordRequest
    })

// return Promise<GameRecordResponse>
```

## PUT /cloudsave/v1/namespaces/{namespace}/records/{key}

```
import { AccelByte } from '@accelbyte/sdk'
import { PublicGameRecordApi } from '@accelbyte/sdk-cloudsave'

const sdk = AccelByte.SDK({
  coreConfig: {
    baseURL: '__AGS_DOMAIN__',
    clientId: '__IAM_CLIENT_ID__',
    namespace: '__NAMESPACE__',
    redirectURI: '__IAM_CLIENT_REDIRECT_URI__'
  }
})

PublicGameRecordApi(sdk, { axiosConfig: { request: { headers: { Authorization: 'Bearer {access_token}' } } } })
  .updateRecord_ByKey(key:string, data: {
             GameRecordRequest
    })

// return Promise<GameRecordResponse>
```

## DELETE /cloudsave/v1/namespaces/{namespace}/binaries/{key}

```
import { AccelByte } from '@accelbyte/sdk'
import { PublicGameBinaryRecordApi } from '@accelbyte/sdk-cloudsave'

const sdk = AccelByte.SDK({
  coreConfig: {
    baseURL: '__AGS_DOMAIN__',
    clientId: '__IAM_CLIENT_ID__',
    namespace: '__NAMESPACE__',
    redirectURI: '__IAM_CLIENT_REDIRECT_URI__'
  }
})

PublicGameBinaryRecordApi(sdk, { axiosConfig: { request: { headers: { Authorization: 'Bearer {access_token}' } } } })
  .deleteBinary_ByKey(key:string)

// return Promise
```

## GET /cloudsave/v1/namespaces/{namespace}/binaries/{key}

```
import { AccelByte } from '@accelbyte/sdk'
import { PublicGameBinaryRecordApi } from '@accelbyte/sdk-cloudsave'

const sdk = AccelByte.SDK({
  coreConfig: {
    baseURL: '__AGS_DOMAIN__',
    clientId: '__IAM_CLIENT_ID__',
    namespace: '__NAMESPACE__',
    redirectURI: '__IAM_CLIENT_REDIRECT_URI__'
  }
})

PublicGameBinaryRecordApi(sdk, { axiosConfig: { request: { headers: { Authorization: 'Bearer {access_token}' } } } })
  .getBinary_ByKey(key:string)

// return Promise<GameBinaryRecordResponse>
```

## PUT /cloudsave/v1/namespaces/{namespace}/binaries/{key}

```
import { AccelByte } from '@accelbyte/sdk'
import { PublicGameBinaryRecordApi } from '@accelbyte/sdk-cloudsave'

const sdk = AccelByte.SDK({
  coreConfig: {
    baseURL: '__AGS_DOMAIN__',
    clientId: '__IAM_CLIENT_ID__',
    namespace: '__NAMESPACE__',
    redirectURI: '__IAM_CLIENT_REDIRECT_URI__'
  }
})

PublicGameBinaryRecordApi(sdk, { axiosConfig: { request: { headers: { Authorization: 'Bearer {access_token}' } } } })
  .updateBinary_ByKey(key:string, data: {
             BinaryRecordRequest
    })

// return Promise<GameBinaryRecordResponse>
```

## GET /cloudsave/v1/namespaces/{namespace}/users/me/records

```
import { AccelByte } from '@accelbyte/sdk'
import { PublicPlayerRecordApi } from '@accelbyte/sdk-cloudsave'

const sdk = AccelByte.SDK({
  coreConfig: {
    baseURL: '__AGS_DOMAIN__',
    clientId: '__IAM_CLIENT_ID__',
    namespace: '__NAMESPACE__',
    redirectURI: '__IAM_CLIENT_REDIRECT_URI__'
  }
})

PublicPlayerRecordApi(sdk, { axiosConfig: { request: { headers: { Authorization: 'Bearer {access_token}' } } } })
  .getUsersMeRecords( queryParams?: {
             limit?: number,
             offset?: number,
             tags?: string[]
    })

// return Promise<ListPlayerRecordKeysResponse>
```

## GET /cloudsave/v1/namespaces/{namespace}/users/me/binaries

```
import { AccelByte } from '@accelbyte/sdk'
import { PublicPlayerBinaryRecordApi } from '@accelbyte/sdk-cloudsave'

const sdk = AccelByte.SDK({
  coreConfig: {
    baseURL: '__AGS_DOMAIN__',
    clientId: '__IAM_CLIENT_ID__',
    namespace: '__NAMESPACE__',
    redirectURI: '__IAM_CLIENT_REDIRECT_URI__'
  }
})

PublicPlayerBinaryRecordApi(sdk, { axiosConfig: { request: { headers: { Authorization: 'Bearer {access_token}' } } } })
  .getUsersMeBinaries( queryParams?: {
             limit?: number,
             offset?: number,
             query?: string | null,
             tags?: string[]
    })

// return Promise<ListPlayerBinaryRecordsResponse>
```

## POST /cloudsave/v1/namespaces/{namespace}/users/me/records/bulk

```
import { AccelByte } from '@accelbyte/sdk'
import { PublicPlayerRecordApi } from '@accelbyte/sdk-cloudsave'

const sdk = AccelByte.SDK({
  coreConfig: {
    baseURL: '__AGS_DOMAIN__',
    clientId: '__IAM_CLIENT_ID__',
    namespace: '__NAMESPACE__',
    redirectURI: '__IAM_CLIENT_REDIRECT_URI__'
  }
})

PublicPlayerRecordApi(sdk, { axiosConfig: { request: { headers: { Authorization: 'Bearer {access_token}' } } } })
  .createUserMeRecordBulk(data: {
             BulkGetPlayerRecordsRequest
    })

// return Promise<BulkGetPlayerRecordResponse>
```

## POST /cloudsave/v1/namespaces/{namespace}/users/me/binaries/bulk

```
import { AccelByte } from '@accelbyte/sdk'
import { PublicPlayerBinaryRecordApi } from '@accelbyte/sdk-cloudsave'

const sdk = AccelByte.SDK({
  coreConfig: {
    baseURL: '__AGS_DOMAIN__',
    clientId: '__IAM_CLIENT_ID__',
    namespace: '__NAMESPACE__',
    redirectURI: '__IAM_CLIENT_REDIRECT_URI__'
  }
})

PublicPlayerBinaryRecordApi(sdk, { axiosConfig: { request: { headers: { Authorization: 'Bearer {access_token}' } } } })
  .createUserMeBinaryBulk(data: {
             BulkGetPlayerRecordsRequest
    })

// return Promise<BulkGetPlayerBinaryRecordResponse>
```

## POST /cloudsave/v1/namespaces/{namespace}/users/{userId}/binaries

```
import { AccelByte } from '@accelbyte/sdk'
import { PublicPlayerBinaryRecordApi } from '@accelbyte/sdk-cloudsave'

const sdk = AccelByte.SDK({
  coreConfig: {
    baseURL: '__AGS_DOMAIN__',
    clientId: '__IAM_CLIENT_ID__',
    namespace: '__NAMESPACE__',
    redirectURI: '__IAM_CLIENT_REDIRECT_URI__'
  }
})

PublicPlayerBinaryRecordApi(sdk, { axiosConfig: { request: { headers: { Authorization: 'Bearer {access_token}' } } } })
  .createBinary_ByUserId(userId:string, data: {
             PublicPlayerBinaryRecordCreate
    })

// return Promise<UploadBinaryRecordResponse>
```

## POST /cloudsave/v1/namespaces/{namespace}/binaries/{key}/presigned

```
import { AccelByte } from '@accelbyte/sdk'
import { PublicGameBinaryRecordApi } from '@accelbyte/sdk-cloudsave'

const sdk = AccelByte.SDK({
  coreConfig: {
    baseURL: '__AGS_DOMAIN__',
    clientId: '__IAM_CLIENT_ID__',
    namespace: '__NAMESPACE__',
    redirectURI: '__IAM_CLIENT_REDIRECT_URI__'
  }
})

PublicGameBinaryRecordApi(sdk, { axiosConfig: { request: { headers: { Authorization: 'Bearer {access_token}' } } } })
  .createPresigned_ByKey(key:string, data: {
             UploadBinaryRecordRequest
    })

// return Promise<UploadBinaryRecordResponse>
```

## PUT /cloudsave/v1/namespaces/{namespace}/concurrent/records/{key}

```
import { AccelByte } from '@accelbyte/sdk'
import { ConcurrentRecordApi } from '@accelbyte/sdk-cloudsave'

const sdk = AccelByte.SDK({
  coreConfig: {
    baseURL: '__AGS_DOMAIN__',
    clientId: '__IAM_CLIENT_ID__',
    namespace: '__NAMESPACE__',
    redirectURI: '__IAM_CLIENT_REDIRECT_URI__'
  }
})

ConcurrentRecordApi(sdk, { axiosConfig: { request: { headers: { Authorization: 'Bearer {access_token}' } } } })
  .updateConcurrentRecord_ByKey(key:string, data: {
             ConcurrentRecordRequest
    })

// return Promise
```

## DELETE /cloudsave/v1/namespaces/{namespace}/users/{userId}/records/{key}

```
import { AccelByte } from '@accelbyte/sdk'
import { PublicPlayerRecordApi } from '@accelbyte/sdk-cloudsave'

const sdk = AccelByte.SDK({
  coreConfig: {
    baseURL: '__AGS_DOMAIN__',
    clientId: '__IAM_CLIENT_ID__',
    namespace: '__NAMESPACE__',
    redirectURI: '__IAM_CLIENT_REDIRECT_URI__'
  }
})

PublicPlayerRecordApi(sdk, { axiosConfig: { request: { headers: { Authorization: 'Bearer {access_token}' } } } })
  .deleteRecord_ByUserId_ByKey(userId:string, key:string)

// return Promise
```

## GET /cloudsave/v1/namespaces/{namespace}/users/{userId}/records/{key}

```
import { AccelByte } from '@accelbyte/sdk'
import { PublicPlayerRecordApi } from '@accelbyte/sdk-cloudsave'

const sdk = AccelByte.SDK({
  coreConfig: {
    baseURL: '__AGS_DOMAIN__',
    clientId: '__IAM_CLIENT_ID__',
    namespace: '__NAMESPACE__',
    redirectURI: '__IAM_CLIENT_REDIRECT_URI__'
  }
})

PublicPlayerRecordApi(sdk, { axiosConfig: { request: { headers: { Authorization: 'Bearer {access_token}' } } } })
  .getRecord_ByUserId_ByKey(userId:string, key:string)

// return Promise<PlayerRecordResponse>
```

## POST /cloudsave/v1/namespaces/{namespace}/users/{userId}/records/{key}

```
import { AccelByte } from '@accelbyte/sdk'
import { PublicPlayerRecordApi } from '@accelbyte/sdk-cloudsave'

const sdk = AccelByte.SDK({
  coreConfig: {
    baseURL: '__AGS_DOMAIN__',
    clientId: '__IAM_CLIENT_ID__',
    namespace: '__NAMESPACE__',
    redirectURI: '__IAM_CLIENT_REDIRECT_URI__'
  }
})

PublicPlayerRecordApi(sdk, { axiosConfig: { request: { headers: { Authorization: 'Bearer {access_token}' } } } })
  .createRecord_ByUserId_ByKey(userId:string, key:string, data: {
             PlayerRecordRequest
    })

// return Promise<PlayerRecordResponse>
```

## PUT /cloudsave/v1/namespaces/{namespace}/users/{userId}/records/{key}

```
import { AccelByte } from '@accelbyte/sdk'
import { PublicPlayerRecordApi } from '@accelbyte/sdk-cloudsave'

const sdk = AccelByte.SDK({
  coreConfig: {
    baseURL: '__AGS_DOMAIN__',
    clientId: '__IAM_CLIENT_ID__',
    namespace: '__NAMESPACE__',
    redirectURI: '__IAM_CLIENT_REDIRECT_URI__'
  }
})

PublicPlayerRecordApi(sdk, { axiosConfig: { request: { headers: { Authorization: 'Bearer {access_token}' } } } })
  .updateRecord_ByUserId_ByKey(userId:string, key:string, data: {
             PlayerRecordRequest
    })

// return Promise<PlayerRecordResponse>
```

## DELETE /cloudsave/v1/namespaces/{namespace}/users/{userId}/binaries/{key}

```
import { AccelByte } from '@accelbyte/sdk'
import { PublicPlayerBinaryRecordApi } from '@accelbyte/sdk-cloudsave'

const sdk = AccelByte.SDK({
  coreConfig: {
    baseURL: '__AGS_DOMAIN__',
    clientId: '__IAM_CLIENT_ID__',
    namespace: '__NAMESPACE__',
    redirectURI: '__IAM_CLIENT_REDIRECT_URI__'
  }
})

PublicPlayerBinaryRecordApi(sdk, { axiosConfig: { request: { headers: { Authorization: 'Bearer {access_token}' } } } })
  .deleteBinary_ByUserId_ByKey(userId:string, key:string)

// return Promise
```

## GET /cloudsave/v1/namespaces/{namespace}/users/{userId}/binaries/{key}

```
import { AccelByte } from '@accelbyte/sdk'
import { PublicPlayerBinaryRecordApi } from '@accelbyte/sdk-cloudsave'

const sdk = AccelByte.SDK({
  coreConfig: {
    baseURL: '__AGS_DOMAIN__',
    clientId: '__IAM_CLIENT_ID__',
    namespace: '__NAMESPACE__',
    redirectURI: '__IAM_CLIENT_REDIRECT_URI__'
  }
})

PublicPlayerBinaryRecordApi(sdk, { axiosConfig: { request: { headers: { Authorization: 'Bearer {access_token}' } } } })
  .getBinary_ByUserId_ByKey(userId:string, key:string)

// return Promise<PlayerBinaryRecordResponse>
```

## PUT /cloudsave/v1/namespaces/{namespace}/users/{userId}/binaries/{key}

```
import { AccelByte } from '@accelbyte/sdk'
import { PublicPlayerBinaryRecordApi } from '@accelbyte/sdk-cloudsave'

const sdk = AccelByte.SDK({
  coreConfig: {
    baseURL: '__AGS_DOMAIN__',
    clientId: '__IAM_CLIENT_ID__',
    namespace: '__NAMESPACE__',
    redirectURI: '__IAM_CLIENT_REDIRECT_URI__'
  }
})

PublicPlayerBinaryRecordApi(sdk, { axiosConfig: { request: { headers: { Authorization: 'Bearer {access_token}' } } } })
  .updateBinary_ByUserId_ByKey(userId:string, key:string, data: {
             BinaryRecordRequest
    })

// return Promise<PlayerBinaryRecordResponse>
```

## GET /cloudsave/v1/namespaces/{namespace}/users/{userId}/records/public

```
import { AccelByte } from '@accelbyte/sdk'
import { PublicPlayerRecordApi } from '@accelbyte/sdk-cloudsave'

const sdk = AccelByte.SDK({
  coreConfig: {
    baseURL: '__AGS_DOMAIN__',
    clientId: '__IAM_CLIENT_ID__',
    namespace: '__NAMESPACE__',
    redirectURI: '__IAM_CLIENT_REDIRECT_URI__'
  }
})

PublicPlayerRecordApi(sdk, { axiosConfig: { request: { headers: { Authorization: 'Bearer {access_token}' } } } })
  .getRecordsPublic_ByUserId(userId:string,  queryParams?: {
             limit?: number,
             offset?: number,
             tags?: string[]
    })

// return Promise<ListPlayerRecordKeysResponse>
```

## DELETE /cloudsave/v1/namespaces/{namespace}/users/me/records/{key}/public

```
import { AccelByte } from '@accelbyte/sdk'
import { PublicPlayerRecordApi } from '@accelbyte/sdk-cloudsave'

const sdk = AccelByte.SDK({
  coreConfig: {
    baseURL: '__AGS_DOMAIN__',
    clientId: '__IAM_CLIENT_ID__',
    namespace: '__NAMESPACE__',
    redirectURI: '__IAM_CLIENT_REDIRECT_URI__'
  }
})

PublicPlayerRecordApi(sdk, { axiosConfig: { request: { headers: { Authorization: 'Bearer {access_token}' } } } })
  .deletePublicMeUser_ByKey(key:string)

// return Promise
```

## GET /cloudsave/v1/namespaces/{namespace}/users/{userId}/binaries/public

```
import { AccelByte } from '@accelbyte/sdk'
import { PublicPlayerBinaryRecordApi } from '@accelbyte/sdk-cloudsave'

const sdk = AccelByte.SDK({
  coreConfig: {
    baseURL: '__AGS_DOMAIN__',
    clientId: '__IAM_CLIENT_ID__',
    namespace: '__NAMESPACE__',
    redirectURI: '__IAM_CLIENT_REDIRECT_URI__'
  }
})

PublicPlayerBinaryRecordApi(sdk, { axiosConfig: { request: { headers: { Authorization: 'Bearer {access_token}' } } } })
  .getBinariesPublic_ByUserId(userId:string,  queryParams?: {
             limit?: number,
             offset?: number,
             tags?: string[]
    })

// return Promise<ListPlayerBinaryRecordsResponse>
```

## POST /cloudsave/v1/namespaces/{namespace}/users/bulk/records/{key}/public

```
import { AccelByte } from '@accelbyte/sdk'
import { PublicPlayerRecordApi } from '@accelbyte/sdk-cloudsave'

const sdk = AccelByte.SDK({
  coreConfig: {
    baseURL: '__AGS_DOMAIN__',
    clientId: '__IAM_CLIENT_ID__',
    namespace: '__NAMESPACE__',
    redirectURI: '__IAM_CLIENT_REDIRECT_URI__'
  }
})

PublicPlayerRecordApi(sdk, { axiosConfig: { request: { headers: { Authorization: 'Bearer {access_token}' } } } })
  .fetchPublicBulkUser_ByKey(key:string, data: {
             BulkUserIDsRequest
    })

// return Promise<BulkGetPlayerRecordResponse>
```

## POST /cloudsave/v1/namespaces/{namespace}/users/bulk/binaries/{key}/public

```
import { AccelByte } from '@accelbyte/sdk'
import { PublicPlayerBinaryRecordApi } from '@accelbyte/sdk-cloudsave'

const sdk = AccelByte.SDK({
  coreConfig: {
    baseURL: '__AGS_DOMAIN__',
    clientId: '__IAM_CLIENT_ID__',
    namespace: '__NAMESPACE__',
    redirectURI: '__IAM_CLIENT_REDIRECT_URI__'
  }
})

PublicPlayerBinaryRecordApi(sdk, { axiosConfig: { request: { headers: { Authorization: 'Bearer {access_token}' } } } })
  .fetchPublicBulkUser_ByKey(key:string, data: {
             BulkUserIDsRequest
    })

// return Promise<BulkGetPlayerBinaryRecordResponse>
```

## POST /cloudsave/v1/namespaces/{namespace}/users/{userId}/records/public/bulk

```
import { AccelByte } from '@accelbyte/sdk'
import { PublicPlayerRecordApi } from '@accelbyte/sdk-cloudsave'

const sdk = AccelByte.SDK({
  coreConfig: {
    baseURL: '__AGS_DOMAIN__',
    clientId: '__IAM_CLIENT_ID__',
    namespace: '__NAMESPACE__',
    redirectURI: '__IAM_CLIENT_REDIRECT_URI__'
  }
})

PublicPlayerRecordApi(sdk, { axiosConfig: { request: { headers: { Authorization: 'Bearer {access_token}' } } } })
  .fetchRecordBulk_ByUserId(userId:string, data: {
             BulkGetPlayerRecordsRequest
    })

// return Promise<BulkGetPlayerRecordResponse>
```

## POST /cloudsave/v1/namespaces/{namespace}/users/{userId}/binaries/public/bulk

```
import { AccelByte } from '@accelbyte/sdk'
import { PublicPlayerBinaryRecordApi } from '@accelbyte/sdk-cloudsave'

const sdk = AccelByte.SDK({
  coreConfig: {
    baseURL: '__AGS_DOMAIN__',
    clientId: '__IAM_CLIENT_ID__',
    namespace: '__NAMESPACE__',
    redirectURI: '__IAM_CLIENT_REDIRECT_URI__'
  }
})

PublicPlayerBinaryRecordApi(sdk, { axiosConfig: { request: { headers: { Authorization: 'Bearer {access_token}' } } } })
  .fetchBinaryBulk_ByUserId(userId:string, data: {
             BulkGetPlayerRecordsRequest
    })

// return Promise<BulkGetPlayerBinaryRecordResponse>
```

## GET /cloudsave/v1/namespaces/{namespace}/users/{userId}/records/{key}/public

```
import { AccelByte } from '@accelbyte/sdk'
import { PublicPlayerRecordApi } from '@accelbyte/sdk-cloudsave'

const sdk = AccelByte.SDK({
  coreConfig: {
    baseURL: '__AGS_DOMAIN__',
    clientId: '__IAM_CLIENT_ID__',
    namespace: '__NAMESPACE__',
    redirectURI: '__IAM_CLIENT_REDIRECT_URI__'
  }
})

PublicPlayerRecordApi(sdk, { axiosConfig: { request: { headers: { Authorization: 'Bearer {access_token}' } } } })
  .getPublic_ByUserId_ByKey(userId:string, key:string)

// return Promise<PlayerRecordResponse>
```

## POST /cloudsave/v1/namespaces/{namespace}/users/{userId}/records/{key}/public

```
import { AccelByte } from '@accelbyte/sdk'
import { PublicPlayerRecordApi } from '@accelbyte/sdk-cloudsave'

const sdk = AccelByte.SDK({
  coreConfig: {
    baseURL: '__AGS_DOMAIN__',
    clientId: '__IAM_CLIENT_ID__',
    namespace: '__NAMESPACE__',
    redirectURI: '__IAM_CLIENT_REDIRECT_URI__'
  }
})

PublicPlayerRecordApi(sdk, { axiosConfig: { request: { headers: { Authorization: 'Bearer {access_token}' } } } })
  .createPublic_ByUserId_ByKey(userId:string, key:string, data: {
             PlayerRecordRequest
    })

// return Promise<PlayerRecordResponse>
```

## PUT /cloudsave/v1/namespaces/{namespace}/users/{userId}/records/{key}/public

```
import { AccelByte } from '@accelbyte/sdk'
import { PublicPlayerRecordApi } from '@accelbyte/sdk-cloudsave'

const sdk = AccelByte.SDK({
  coreConfig: {
    baseURL: '__AGS_DOMAIN__',
    clientId: '__IAM_CLIENT_ID__',
    namespace: '__NAMESPACE__',
    redirectURI: '__IAM_CLIENT_REDIRECT_URI__'
  }
})

PublicPlayerRecordApi(sdk, { axiosConfig: { request: { headers: { Authorization: 'Bearer {access_token}' } } } })
  .updatePublic_ByUserId_ByKey(userId:string, key:string, data: {
             PlayerRecordRequest
    })

// return Promise<PlayerRecordResponse>
```

## GET /cloudsave/v1/namespaces/{namespace}/users/{userId}/binaries/{key}/public

```
import { AccelByte } from '@accelbyte/sdk'
import { PublicPlayerBinaryRecordApi } from '@accelbyte/sdk-cloudsave'

const sdk = AccelByte.SDK({
  coreConfig: {
    baseURL: '__AGS_DOMAIN__',
    clientId: '__IAM_CLIENT_ID__',
    namespace: '__NAMESPACE__',
    redirectURI: '__IAM_CLIENT_REDIRECT_URI__'
  }
})

PublicPlayerBinaryRecordApi(sdk, { axiosConfig: { request: { headers: { Authorization: 'Bearer {access_token}' } } } })
  .getPublic_ByUserId_ByKey(userId:string, key:string)

// return Promise<PlayerBinaryRecordResponse>
```

## PUT /cloudsave/v1/namespaces/{namespace}/users/{userId}/binaries/{key}/metadata

```
import { AccelByte } from '@accelbyte/sdk'
import { PublicPlayerBinaryRecordApi } from '@accelbyte/sdk-cloudsave'

const sdk = AccelByte.SDK({
  coreConfig: {
    baseURL: '__AGS_DOMAIN__',
    clientId: '__IAM_CLIENT_ID__',
    namespace: '__NAMESPACE__',
    redirectURI: '__IAM_CLIENT_REDIRECT_URI__'
  }
})

PublicPlayerBinaryRecordApi(sdk, { axiosConfig: { request: { headers: { Authorization: 'Bearer {access_token}' } } } })
  .updateMetadata_ByUserId_ByKey(userId:string, key:string, data: {
             PlayerBinaryRecordMetadataPublicRequest
    })

// return Promise<PlayerBinaryRecordResponse>
```

## POST /cloudsave/v1/namespaces/{namespace}/users/{userId}/binaries/{key}/presigned

```
import { AccelByte } from '@accelbyte/sdk'
import { PublicPlayerBinaryRecordApi } from '@accelbyte/sdk-cloudsave'

const sdk = AccelByte.SDK({
  coreConfig: {
    baseURL: '__AGS_DOMAIN__',
    clientId: '__IAM_CLIENT_ID__',
    namespace: '__NAMESPACE__',
    redirectURI: '__IAM_CLIENT_REDIRECT_URI__'
  }
})

PublicPlayerBinaryRecordApi(sdk, { axiosConfig: { request: { headers: { Authorization: 'Bearer {access_token}' } } } })
  .createPresigned_ByUserId_ByKey(userId:string, key:string, data: {
             UploadBinaryRecordRequest
    })

// return Promise<UploadBinaryRecordResponse>
```

## PUT /cloudsave/v1/namespaces/{namespace}/users/{userId}/concurrent/records/{key}

```
import { AccelByte } from '@accelbyte/sdk'
import { ConcurrentRecordApi } from '@accelbyte/sdk-cloudsave'

const sdk = AccelByte.SDK({
  coreConfig: {
    baseURL: '__AGS_DOMAIN__',
    clientId: '__IAM_CLIENT_ID__',
    namespace: '__NAMESPACE__',
    redirectURI: '__IAM_CLIENT_REDIRECT_URI__'
  }
})

ConcurrentRecordApi(sdk, { axiosConfig: { request: { headers: { Authorization: 'Bearer {access_token}' } } } })
  .updateConcurrentRecord_ByUserId_ByKey(userId:string, key:string, data: {
             ConcurrentRecordRequest,
             queryParams?: {
             responseBody?: boolean | null
    })

// return Promise<PlayerRecordConcurrentUpdateResponse>
```

## PUT /cloudsave/v1/namespaces/{namespace}/users/{userId}/concurrent/records/{key}/public

```
import { AccelByte } from '@accelbyte/sdk'
import { ConcurrentRecordApi } from '@accelbyte/sdk-cloudsave'

const sdk = AccelByte.SDK({
  coreConfig: {
    baseURL: '__AGS_DOMAIN__',
    clientId: '__IAM_CLIENT_ID__',
    namespace: '__NAMESPACE__',
    redirectURI: '__IAM_CLIENT_REDIRECT_URI__'
  }
})

ConcurrentRecordApi(sdk, { axiosConfig: { request: { headers: { Authorization: 'Bearer {access_token}' } } } })
  .updatePublicConcurrent_ByUserId_ByKey(userId:string, key:string, data: {
             ConcurrentRecordRequest,
             queryParams?: {
             responseBody?: boolean | null
    })

// return Promise<PlayerRecordConcurrentUpdateResponse>
```

## GET /cloudsave/v1/admin/namespaces/{namespace}/tags

```
import { AccelByte } from '@accelbyte/sdk'
import { TagsAdminApi } from '@accelbyte/sdk-cloudsave'

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
             offset?: number
    })

// return Promise<ListTagsResponse>
```

## POST /cloudsave/v1/admin/namespaces/{namespace}/tags

```
import { AccelByte } from '@accelbyte/sdk'
import { TagsAdminApi } from '@accelbyte/sdk-cloudsave'

const sdk = AccelByte.SDK({
  coreConfig: {
    baseURL: '__AGS_DOMAIN__',
    clientId: '__IAM_CLIENT_ID__',
    namespace: '__NAMESPACE__',
    redirectURI: '__IAM_CLIENT_REDIRECT_URI__'
  }
})

TagsAdminApi(sdk, { axiosConfig: { request: { headers: { Authorization: 'Bearer {access_token}' } } } })
  .createTag(data: {
             TagRequest
    })

// return Promise
```

## DELETE /cloudsave/v1/admin/namespaces/{namespace}/plugins

```
import { AccelByte } from '@accelbyte/sdk'
import { PluginConfigAdminApi } from '@accelbyte/sdk-cloudsave'

const sdk = AccelByte.SDK({
  coreConfig: {
    baseURL: '__AGS_DOMAIN__',
    clientId: '__IAM_CLIENT_ID__',
    namespace: '__NAMESPACE__',
    redirectURI: '__IAM_CLIENT_REDIRECT_URI__'
  }
})

PluginConfigAdminApi(sdk, { axiosConfig: { request: { headers: { Authorization: 'Bearer {access_token}' } } } })
  .deletePlugin()

// return Promise
```

## GET /cloudsave/v1/admin/namespaces/{namespace}/plugins

```
import { AccelByte } from '@accelbyte/sdk'
import { PluginConfigAdminApi } from '@accelbyte/sdk-cloudsave'

const sdk = AccelByte.SDK({
  coreConfig: {
    baseURL: '__AGS_DOMAIN__',
    clientId: '__IAM_CLIENT_ID__',
    namespace: '__NAMESPACE__',
    redirectURI: '__IAM_CLIENT_REDIRECT_URI__'
  }
})

PluginConfigAdminApi(sdk, { axiosConfig: { request: { headers: { Authorization: 'Bearer {access_token}' } } } })
  .getPlugins()

// return Promise<PluginResponse>
```

## PATCH /cloudsave/v1/admin/namespaces/{namespace}/plugins

```
import { AccelByte } from '@accelbyte/sdk'
import { PluginConfigAdminApi } from '@accelbyte/sdk-cloudsave'

const sdk = AccelByte.SDK({
  coreConfig: {
    baseURL: '__AGS_DOMAIN__',
    clientId: '__IAM_CLIENT_ID__',
    namespace: '__NAMESPACE__',
    redirectURI: '__IAM_CLIENT_REDIRECT_URI__'
  }
})

PluginConfigAdminApi(sdk, { axiosConfig: { request: { headers: { Authorization: 'Bearer {access_token}' } } } })
  .patchPlugin(data: {
             PluginRequest
    })

// return Promise<PluginResponse>
```

## POST /cloudsave/v1/admin/namespaces/{namespace}/plugins

```
import { AccelByte } from '@accelbyte/sdk'
import { PluginConfigAdminApi } from '@accelbyte/sdk-cloudsave'

const sdk = AccelByte.SDK({
  coreConfig: {
    baseURL: '__AGS_DOMAIN__',
    clientId: '__IAM_CLIENT_ID__',
    namespace: '__NAMESPACE__',
    redirectURI: '__IAM_CLIENT_REDIRECT_URI__'
  }
})

PluginConfigAdminApi(sdk, { axiosConfig: { request: { headers: { Authorization: 'Bearer {access_token}' } } } })
  .createPlugin(data: {
             PluginRequest
    })

// return Promise<PluginResponse>
```

## GET /cloudsave/v1/admin/namespaces/{namespace}/records

```
import { AccelByte } from '@accelbyte/sdk'
import { GameRecordAdminApi } from '@accelbyte/sdk-cloudsave'

const sdk = AccelByte.SDK({
  coreConfig: {
    baseURL: '__AGS_DOMAIN__',
    clientId: '__IAM_CLIENT_ID__',
    namespace: '__NAMESPACE__',
    redirectURI: '__IAM_CLIENT_REDIRECT_URI__'
  }
})

GameRecordAdminApi(sdk, { axiosConfig: { request: { headers: { Authorization: 'Bearer {access_token}' } } } })
  .getRecords( queryParams: {
             limit: number,
             offset: number,
             query?: string | null,
             tags?: string[]
    })

// return Promise<ListGameRecordKeysResponse>
```

## GET /cloudsave/v1/admin/namespaces/{namespace}/binaries

```
import { AccelByte } from '@accelbyte/sdk'
import { GameBinaryRecordAdminApi } from '@accelbyte/sdk-cloudsave'

const sdk = AccelByte.SDK({
  coreConfig: {
    baseURL: '__AGS_DOMAIN__',
    clientId: '__IAM_CLIENT_ID__',
    namespace: '__NAMESPACE__',
    redirectURI: '__IAM_CLIENT_REDIRECT_URI__'
  }
})

GameBinaryRecordAdminApi(sdk, { axiosConfig: { request: { headers: { Authorization: 'Bearer {access_token}' } } } })
  .getBinaries( queryParams?: {
             limit?: number,
             offset?: number,
             query?: string | null,
             tags?: string[]
    })

// return Promise<ListGameBinaryRecordsAdminResponse>
```

## POST /cloudsave/v1/admin/namespaces/{namespace}/binaries

```
import { AccelByte } from '@accelbyte/sdk'
import { GameBinaryRecordAdminApi } from '@accelbyte/sdk-cloudsave'

const sdk = AccelByte.SDK({
  coreConfig: {
    baseURL: '__AGS_DOMAIN__',
    clientId: '__IAM_CLIENT_ID__',
    namespace: '__NAMESPACE__',
    redirectURI: '__IAM_CLIENT_REDIRECT_URI__'
  }
})

GameBinaryRecordAdminApi(sdk, { axiosConfig: { request: { headers: { Authorization: 'Bearer {access_token}' } } } })
  .createBinary(data: {
             GameBinaryRecordCreate
    })

// return Promise<UploadBinaryRecordResponse>
```

## DELETE /cloudsave/v1/admin/namespaces/{namespace}/tags/{tag}

```
import { AccelByte } from '@accelbyte/sdk'
import { TagsAdminApi } from '@accelbyte/sdk-cloudsave'

const sdk = AccelByte.SDK({
  coreConfig: {
    baseURL: '__AGS_DOMAIN__',
    clientId: '__IAM_CLIENT_ID__',
    namespace: '__NAMESPACE__',
    redirectURI: '__IAM_CLIENT_REDIRECT_URI__'
  }
})

TagsAdminApi(sdk, { axiosConfig: { request: { headers: { Authorization: 'Bearer {access_token}' } } } })
  .deleteTag_ByTag(tag:string)

// return Promise
```

## GET /cloudsave/v1/admin/namespaces/{namespace}/adminrecords

```
import { AccelByte } from '@accelbyte/sdk'
import { RecordAdminApi } from '@accelbyte/sdk-cloudsave'

const sdk = AccelByte.SDK({
  coreConfig: {
    baseURL: '__AGS_DOMAIN__',
    clientId: '__IAM_CLIENT_ID__',
    namespace: '__NAMESPACE__',
    redirectURI: '__IAM_CLIENT_REDIRECT_URI__'
  }
})

RecordAdminApi(sdk, { axiosConfig: { request: { headers: { Authorization: 'Bearer {access_token}' } } } })
  .getAdminrecords( queryParams?: {
             limit?: number,
             offset?: number,
             query?: string | null,
             tags?: string[]
    })

// return Promise<ListAdminGameRecordKeysResponse>
```

## DELETE /cloudsave/v1/admin/namespaces/{namespace}/records/{key}

```
import { AccelByte } from '@accelbyte/sdk'
import { GameRecordAdminApi } from '@accelbyte/sdk-cloudsave'

const sdk = AccelByte.SDK({
  coreConfig: {
    baseURL: '__AGS_DOMAIN__',
    clientId: '__IAM_CLIENT_ID__',
    namespace: '__NAMESPACE__',
    redirectURI: '__IAM_CLIENT_REDIRECT_URI__'
  }
})

GameRecordAdminApi(sdk, { axiosConfig: { request: { headers: { Authorization: 'Bearer {access_token}' } } } })
  .deleteRecord_ByKey(key:string)

// return Promise
```

## GET /cloudsave/v1/admin/namespaces/{namespace}/records/{key}

```
import { AccelByte } from '@accelbyte/sdk'
import { GameRecordAdminApi } from '@accelbyte/sdk-cloudsave'

const sdk = AccelByte.SDK({
  coreConfig: {
    baseURL: '__AGS_DOMAIN__',
    clientId: '__IAM_CLIENT_ID__',
    namespace: '__NAMESPACE__',
    redirectURI: '__IAM_CLIENT_REDIRECT_URI__'
  }
})

GameRecordAdminApi(sdk, { axiosConfig: { request: { headers: { Authorization: 'Bearer {access_token}' } } } })
  .getRecord_ByKey(key:string)

// return Promise<GameRecordAdminResponse>
```

## POST /cloudsave/v1/admin/namespaces/{namespace}/records/{key}

```
import { AccelByte } from '@accelbyte/sdk'
import { GameRecordAdminApi } from '@accelbyte/sdk-cloudsave'

const sdk = AccelByte.SDK({
  coreConfig: {
    baseURL: '__AGS_DOMAIN__',
    clientId: '__IAM_CLIENT_ID__',
    namespace: '__NAMESPACE__',
    redirectURI: '__IAM_CLIENT_REDIRECT_URI__'
  }
})

GameRecordAdminApi(sdk, { axiosConfig: { request: { headers: { Authorization: 'Bearer {access_token}' } } } })
  .createRecord_ByKey(key:string, data: {
             GameRecordRequest
    })

// return Promise<GameRecordAdminResponse>
```

## PUT /cloudsave/v1/admin/namespaces/{namespace}/records/{key}

```
import { AccelByte } from '@accelbyte/sdk'
import { GameRecordAdminApi } from '@accelbyte/sdk-cloudsave'

const sdk = AccelByte.SDK({
  coreConfig: {
    baseURL: '__AGS_DOMAIN__',
    clientId: '__IAM_CLIENT_ID__',
    namespace: '__NAMESPACE__',
    redirectURI: '__IAM_CLIENT_REDIRECT_URI__'
  }
})

GameRecordAdminApi(sdk, { axiosConfig: { request: { headers: { Authorization: 'Bearer {access_token}' } } } })
  .updateRecord_ByKey(key:string, data: {
             GameRecordRequest
    })

// return Promise<GameRecordAdminResponse>
```

## GET /cloudsave/v1/admin/namespaces/{namespace}/users/records

```
import { AccelByte } from '@accelbyte/sdk'
import { PlayerRecordAdminApi } from '@accelbyte/sdk-cloudsave'

const sdk = AccelByte.SDK({
  coreConfig: {
    baseURL: '__AGS_DOMAIN__',
    clientId: '__IAM_CLIENT_ID__',
    namespace: '__NAMESPACE__',
    redirectURI: '__IAM_CLIENT_REDIRECT_URI__'
  }
})

PlayerRecordAdminApi(sdk, { axiosConfig: { request: { headers: { Authorization: 'Bearer {access_token}' } } } })
  .getUsersRecords( queryParams?: {
             limit?: number,
             offset?: number,
             query?: string | null
    })

// return Promise<ListPlayerRecordKeysResponse>
```

## DELETE /cloudsave/v1/admin/namespaces/{namespace}/binaries/{key}

```
import { AccelByte } from '@accelbyte/sdk'
import { GameBinaryRecordAdminApi } from '@accelbyte/sdk-cloudsave'

const sdk = AccelByte.SDK({
  coreConfig: {
    baseURL: '__AGS_DOMAIN__',
    clientId: '__IAM_CLIENT_ID__',
    namespace: '__NAMESPACE__',
    redirectURI: '__IAM_CLIENT_REDIRECT_URI__'
  }
})

GameBinaryRecordAdminApi(sdk, { axiosConfig: { request: { headers: { Authorization: 'Bearer {access_token}' } } } })
  .deleteBinary_ByKey(key:string)

// return Promise
```

## GET /cloudsave/v1/admin/namespaces/{namespace}/binaries/{key}

```
import { AccelByte } from '@accelbyte/sdk'
import { GameBinaryRecordAdminApi } from '@accelbyte/sdk-cloudsave'

const sdk = AccelByte.SDK({
  coreConfig: {
    baseURL: '__AGS_DOMAIN__',
    clientId: '__IAM_CLIENT_ID__',
    namespace: '__NAMESPACE__',
    redirectURI: '__IAM_CLIENT_REDIRECT_URI__'
  }
})

GameBinaryRecordAdminApi(sdk, { axiosConfig: { request: { headers: { Authorization: 'Bearer {access_token}' } } } })
  .getBinary_ByKey(key:string)

// return Promise<GameBinaryRecordAdminResponse>
```

## PUT /cloudsave/v1/admin/namespaces/{namespace}/binaries/{key}

```
import { AccelByte } from '@accelbyte/sdk'
import { GameBinaryRecordAdminApi } from '@accelbyte/sdk-cloudsave'

const sdk = AccelByte.SDK({
  coreConfig: {
    baseURL: '__AGS_DOMAIN__',
    clientId: '__IAM_CLIENT_ID__',
    namespace: '__NAMESPACE__',
    redirectURI: '__IAM_CLIENT_REDIRECT_URI__'
  }
})

GameBinaryRecordAdminApi(sdk, { axiosConfig: { request: { headers: { Authorization: 'Bearer {access_token}' } } } })
  .updateBinary_ByKey(key:string, data: {
             BinaryRecordRequest
    })

// return Promise<GameBinaryRecordAdminResponse>
```

## POST /cloudsave/v1/admin/namespaces/{namespace}/adminrecords/bulk

```
import { AccelByte } from '@accelbyte/sdk'
import { RecordAdminApi } from '@accelbyte/sdk-cloudsave'

const sdk = AccelByte.SDK({
  coreConfig: {
    baseURL: '__AGS_DOMAIN__',
    clientId: '__IAM_CLIENT_ID__',
    namespace: '__NAMESPACE__',
    redirectURI: '__IAM_CLIENT_REDIRECT_URI__'
  }
})

RecordAdminApi(sdk, { axiosConfig: { request: { headers: { Authorization: 'Bearer {access_token}' } } } })
  .fetchAdminrecordBulk(data: {
             BulkGetAdminGameRecordRequest
    })

// return Promise<BulkGetAdminGameRecordResponse>
```

## DELETE /cloudsave/v1/admin/namespaces/{namespace}/records/{key}/ttl

```
import { AccelByte } from '@accelbyte/sdk'
import { TtlConfigAdminApi } from '@accelbyte/sdk-cloudsave'

const sdk = AccelByte.SDK({
  coreConfig: {
    baseURL: '__AGS_DOMAIN__',
    clientId: '__IAM_CLIENT_ID__',
    namespace: '__NAMESPACE__',
    redirectURI: '__IAM_CLIENT_REDIRECT_URI__'
  }
})

TtlConfigAdminApi(sdk, { axiosConfig: { request: { headers: { Authorization: 'Bearer {access_token}' } } } })
  .deleteTtl_ByKey(key:string)

// return Promise
```

## DELETE /cloudsave/v1/admin/namespaces/{namespace}/adminrecords/{key}

```
import { AccelByte } from '@accelbyte/sdk'
import { RecordAdminApi } from '@accelbyte/sdk-cloudsave'

const sdk = AccelByte.SDK({
  coreConfig: {
    baseURL: '__AGS_DOMAIN__',
    clientId: '__IAM_CLIENT_ID__',
    namespace: '__NAMESPACE__',
    redirectURI: '__IAM_CLIENT_REDIRECT_URI__'
  }
})

RecordAdminApi(sdk, { axiosConfig: { request: { headers: { Authorization: 'Bearer {access_token}' } } } })
  .deleteAdminrecord_ByKey(key:string)

// return Promise
```

## GET /cloudsave/v1/admin/namespaces/{namespace}/adminrecords/{key}

```
import { AccelByte } from '@accelbyte/sdk'
import { RecordAdminApi } from '@accelbyte/sdk-cloudsave'

const sdk = AccelByte.SDK({
  coreConfig: {
    baseURL: '__AGS_DOMAIN__',
    clientId: '__IAM_CLIENT_ID__',
    namespace: '__NAMESPACE__',
    redirectURI: '__IAM_CLIENT_REDIRECT_URI__'
  }
})

RecordAdminApi(sdk, { axiosConfig: { request: { headers: { Authorization: 'Bearer {access_token}' } } } })
  .getAdminrecord_ByKey(key:string)

// return Promise<AdminGameRecordResponse>
```

## POST /cloudsave/v1/admin/namespaces/{namespace}/adminrecords/{key}

```
import { AccelByte } from '@accelbyte/sdk'
import { RecordAdminApi } from '@accelbyte/sdk-cloudsave'

const sdk = AccelByte.SDK({
  coreConfig: {
    baseURL: '__AGS_DOMAIN__',
    clientId: '__IAM_CLIENT_ID__',
    namespace: '__NAMESPACE__',
    redirectURI: '__IAM_CLIENT_REDIRECT_URI__'
  }
})

RecordAdminApi(sdk, { axiosConfig: { request: { headers: { Authorization: 'Bearer {access_token}' } } } })
  .createAdminrecord_ByKey(key:string, data: {
             AdminGameRecordRequest
    })

// return Promise<AdminGameRecordResponse>
```

## PUT /cloudsave/v1/admin/namespaces/{namespace}/adminrecords/{key}

```
import { AccelByte } from '@accelbyte/sdk'
import { RecordAdminApi } from '@accelbyte/sdk-cloudsave'

const sdk = AccelByte.SDK({
  coreConfig: {
    baseURL: '__AGS_DOMAIN__',
    clientId: '__IAM_CLIENT_ID__',
    namespace: '__NAMESPACE__',
    redirectURI: '__IAM_CLIENT_REDIRECT_URI__'
  }
})

RecordAdminApi(sdk, { axiosConfig: { request: { headers: { Authorization: 'Bearer {access_token}' } } } })
  .updateAdminrecord_ByKey(key:string, data: {
             AdminGameRecordRequest
    })

// return Promise<AdminGameRecordResponse>
```

## DELETE /cloudsave/v1/admin/namespaces/{namespace}/binaries/{key}/ttl

```
import { AccelByte } from '@accelbyte/sdk'
import { TtlConfigAdminApi } from '@accelbyte/sdk-cloudsave'

const sdk = AccelByte.SDK({
  coreConfig: {
    baseURL: '__AGS_DOMAIN__',
    clientId: '__IAM_CLIENT_ID__',
    namespace: '__NAMESPACE__',
    redirectURI: '__IAM_CLIENT_REDIRECT_URI__'
  }
})

TtlConfigAdminApi(sdk, { axiosConfig: { request: { headers: { Authorization: 'Bearer {access_token}' } } } })
  .deleteTtl_ByKey_ByNS(key:string)

// return Promise
```

## DELETE /cloudsave/v1/admin/namespaces/{namespace}/adminrecords/{key}/ttl

```
import { AccelByte } from '@accelbyte/sdk'
import { TtlConfigAdminApi } from '@accelbyte/sdk-cloudsave'

const sdk = AccelByte.SDK({
  coreConfig: {
    baseURL: '__AGS_DOMAIN__',
    clientId: '__IAM_CLIENT_ID__',
    namespace: '__NAMESPACE__',
    redirectURI: '__IAM_CLIENT_REDIRECT_URI__'
  }
})

TtlConfigAdminApi(sdk, { axiosConfig: { request: { headers: { Authorization: 'Bearer {access_token}' } } } })
  .deleteTtl_ByKey_ByNS_admin(key:string)

// return Promise
```

## GET /cloudsave/v1/admin/namespaces/{namespace}/users/{userId}/records

```
import { AccelByte } from '@accelbyte/sdk'
import { PlayerRecordAdminApi } from '@accelbyte/sdk-cloudsave'

const sdk = AccelByte.SDK({
  coreConfig: {
    baseURL: '__AGS_DOMAIN__',
    clientId: '__IAM_CLIENT_ID__',
    namespace: '__NAMESPACE__',
    redirectURI: '__IAM_CLIENT_REDIRECT_URI__'
  }
})

PlayerRecordAdminApi(sdk, { axiosConfig: { request: { headers: { Authorization: 'Bearer {access_token}' } } } })
  .getRecords_ByUserId(userId:string,  queryParams?: {
             limit?: number,
             offset?: number,
             query?: string | null,
             tags?: string[]
    })

// return Promise<ListPlayerRecordKeysResponse>
```

## PUT /cloudsave/v1/admin/namespaces/{namespace}/binaries/{key}/metadata

```
import { AccelByte } from '@accelbyte/sdk'
import { GameBinaryRecordAdminApi } from '@accelbyte/sdk-cloudsave'

const sdk = AccelByte.SDK({
  coreConfig: {
    baseURL: '__AGS_DOMAIN__',
    clientId: '__IAM_CLIENT_ID__',
    namespace: '__NAMESPACE__',
    redirectURI: '__IAM_CLIENT_REDIRECT_URI__'
  }
})

GameBinaryRecordAdminApi(sdk, { axiosConfig: { request: { headers: { Authorization: 'Bearer {access_token}' } } } })
  .updateMetadata_ByKey(key:string, data: {
             GameBinaryRecordMetadataRequest
    })

// return Promise<GameBinaryRecordAdminResponse>
```

## GET /cloudsave/v1/admin/namespaces/{namespace}/users/{userId}/binaries

```
import { AccelByte } from '@accelbyte/sdk'
import { PlayerBinaryRecordAdminApi } from '@accelbyte/sdk-cloudsave'

const sdk = AccelByte.SDK({
  coreConfig: {
    baseURL: '__AGS_DOMAIN__',
    clientId: '__IAM_CLIENT_ID__',
    namespace: '__NAMESPACE__',
    redirectURI: '__IAM_CLIENT_REDIRECT_URI__'
  }
})

PlayerBinaryRecordAdminApi(sdk, { axiosConfig: { request: { headers: { Authorization: 'Bearer {access_token}' } } } })
  .getBinaries_ByUserId(userId:string,  queryParams?: {
             limit?: number,
             offset?: number,
             query?: string | null,
             tags?: string[]
    })

// return Promise<ListPlayerBinaryRecordsResponse>
```

## POST /cloudsave/v1/admin/namespaces/{namespace}/users/{userId}/binaries

```
import { AccelByte } from '@accelbyte/sdk'
import { PlayerBinaryRecordAdminApi } from '@accelbyte/sdk-cloudsave'

const sdk = AccelByte.SDK({
  coreConfig: {
    baseURL: '__AGS_DOMAIN__',
    clientId: '__IAM_CLIENT_ID__',
    namespace: '__NAMESPACE__',
    redirectURI: '__IAM_CLIENT_REDIRECT_URI__'
  }
})

PlayerBinaryRecordAdminApi(sdk, { axiosConfig: { request: { headers: { Authorization: 'Bearer {access_token}' } } } })
  .createBinary_ByUserId(userId:string, data: {
             PlayerBinaryRecordCreate
    })

// return Promise<UploadBinaryRecordResponse>
```

## POST /cloudsave/v1/admin/namespaces/{namespace}/users/bulk/records/size

```
import { AccelByte } from '@accelbyte/sdk'
import { PlayerRecordAdminApi } from '@accelbyte/sdk-cloudsave'

const sdk = AccelByte.SDK({
  coreConfig: {
    baseURL: '__AGS_DOMAIN__',
    clientId: '__IAM_CLIENT_ID__',
    namespace: '__NAMESPACE__',
    redirectURI: '__IAM_CLIENT_REDIRECT_URI__'
  }
})

PlayerRecordAdminApi(sdk, { axiosConfig: { request: { headers: { Authorization: 'Bearer {access_token}' } } } })
  .fetchUserBulkRecordSize(data: {
             BulkUserKeyRequest
    })

// return Promise<BulkGetPlayerRecordSizeResponse>
```

## POST /cloudsave/v1/admin/namespaces/{namespace}/binaries/{key}/presigned

```
import { AccelByte } from '@accelbyte/sdk'
import { GameBinaryRecordAdminApi } from '@accelbyte/sdk-cloudsave'

const sdk = AccelByte.SDK({
  coreConfig: {
    baseURL: '__AGS_DOMAIN__',
    clientId: '__IAM_CLIENT_ID__',
    namespace: '__NAMESPACE__',
    redirectURI: '__IAM_CLIENT_REDIRECT_URI__'
  }
})

GameBinaryRecordAdminApi(sdk, { axiosConfig: { request: { headers: { Authorization: 'Bearer {access_token}' } } } })
  .createPresigned_ByKey(key:string, data: {
             UploadBinaryRecordRequest
    })

// return Promise<UploadBinaryRecordResponse>
```

## PUT /cloudsave/v1/admin/namespaces/{namespace}/concurrent/records/{key}

```
import { AccelByte } from '@accelbyte/sdk'
import { ConcurrentRecordAdminApi } from '@accelbyte/sdk-cloudsave'

const sdk = AccelByte.SDK({
  coreConfig: {
    baseURL: '__AGS_DOMAIN__',
    clientId: '__IAM_CLIENT_ID__',
    namespace: '__NAMESPACE__',
    redirectURI: '__IAM_CLIENT_REDIRECT_URI__'
  }
})

ConcurrentRecordAdminApi(sdk, { axiosConfig: { request: { headers: { Authorization: 'Bearer {access_token}' } } } })
  .updateConcurrentRecord_ByKey(key:string, data: {
             AdminConcurrentRecordRequest
    })

// return Promise
```

## POST /cloudsave/v1/admin/namespaces/{namespace}/users/records/{key}/bulk

```
import { AccelByte } from '@accelbyte/sdk'
import { PlayerRecordAdminApi } from '@accelbyte/sdk-cloudsave'

const sdk = AccelByte.SDK({
  coreConfig: {
    baseURL: '__AGS_DOMAIN__',
    clientId: '__IAM_CLIENT_ID__',
    namespace: '__NAMESPACE__',
    redirectURI: '__IAM_CLIENT_REDIRECT_URI__'
  }
})

PlayerRecordAdminApi(sdk, { axiosConfig: { request: { headers: { Authorization: 'Bearer {access_token}' } } } })
  .fetchBulkUser_ByKey(key:string, data: {
             BulkUserIDsRequest
    })

// return Promise<BulkGetPlayerRecordResponse>
```

## PUT /cloudsave/v1/admin/namespaces/{namespace}/users/records/{key}/bulk

```
import { AccelByte } from '@accelbyte/sdk'
import { PlayerRecordAdminApi } from '@accelbyte/sdk-cloudsave'

const sdk = AccelByte.SDK({
  coreConfig: {
    baseURL: '__AGS_DOMAIN__',
    clientId: '__IAM_CLIENT_ID__',
    namespace: '__NAMESPACE__',
    redirectURI: '__IAM_CLIENT_REDIRECT_URI__'
  }
})

PlayerRecordAdminApi(sdk, { axiosConfig: { request: { headers: { Authorization: 'Bearer {access_token}' } } } })
  .updateBulkUser_ByKey(key:string, data: {
             BulkUpdatePlayerRecordsByKeyRequest
    })

// return Promise<BulkUpdatePlayerRecordByKeyResponseArray>
```

## GET /cloudsave/v1/admin/namespaces/{namespace}/users/{userId}/adminrecords

```
import { AccelByte } from '@accelbyte/sdk'
import { RecordAdminApi } from '@accelbyte/sdk-cloudsave'

const sdk = AccelByte.SDK({
  coreConfig: {
    baseURL: '__AGS_DOMAIN__',
    clientId: '__IAM_CLIENT_ID__',
    namespace: '__NAMESPACE__',
    redirectURI: '__IAM_CLIENT_REDIRECT_URI__'
  }
})

RecordAdminApi(sdk, { axiosConfig: { request: { headers: { Authorization: 'Bearer {access_token}' } } } })
  .getAdminrecords_ByUserId(userId:string,  queryParams?: {
             limit?: number,
             offset?: number,
             query?: string | null,
             tags?: string[]
    })

// return Promise<ListAdminPlayerRecordKeysResponse>
```

## POST /cloudsave/v1/admin/namespaces/{namespace}/users/{userId}/records/bulk

```
import { AccelByte } from '@accelbyte/sdk'
import { PlayerRecordAdminApi } from '@accelbyte/sdk-cloudsave'

const sdk = AccelByte.SDK({
  coreConfig: {
    baseURL: '__AGS_DOMAIN__',
    clientId: '__IAM_CLIENT_ID__',
    namespace: '__NAMESPACE__',
    redirectURI: '__IAM_CLIENT_REDIRECT_URI__'
  }
})

PlayerRecordAdminApi(sdk, { axiosConfig: { request: { headers: { Authorization: 'Bearer {access_token}' } } } })
  .fetchRecordBulk_ByUserId(userId:string, data: {
             BulkGetPlayerRecordsRequest
    })

// return Promise<BulkGetAdminPlayerRecordResponse>
```

## PUT /cloudsave/v1/admin/namespaces/{namespace}/users/{userId}/records/bulk

```
import { AccelByte } from '@accelbyte/sdk'
import { PlayerRecordAdminApi } from '@accelbyte/sdk-cloudsave'

const sdk = AccelByte.SDK({
  coreConfig: {
    baseURL: '__AGS_DOMAIN__',
    clientId: '__IAM_CLIENT_ID__',
    namespace: '__NAMESPACE__',
    redirectURI: '__IAM_CLIENT_REDIRECT_URI__'
  }
})

PlayerRecordAdminApi(sdk, { axiosConfig: { request: { headers: { Authorization: 'Bearer {access_token}' } } } })
  .updateRecordBulk_ByUserId(userId:string, data: {
             BulkUpdatePlayerRecordsRequest
    })

// return Promise<BulkUpdatePlayerRecordResponseArray>
```

## DELETE /cloudsave/v1/admin/namespaces/{namespace}/users/{userId}/records/{key}

```
import { AccelByte } from '@accelbyte/sdk'
import { PlayerRecordAdminApi } from '@accelbyte/sdk-cloudsave'

const sdk = AccelByte.SDK({
  coreConfig: {
    baseURL: '__AGS_DOMAIN__',
    clientId: '__IAM_CLIENT_ID__',
    namespace: '__NAMESPACE__',
    redirectURI: '__IAM_CLIENT_REDIRECT_URI__'
  }
})

PlayerRecordAdminApi(sdk, { axiosConfig: { request: { headers: { Authorization: 'Bearer {access_token}' } } } })
  .deleteRecord_ByUserId_ByKey(userId:string, key:string)

// return Promise
```

## GET /cloudsave/v1/admin/namespaces/{namespace}/users/{userId}/records/{key}

```
import { AccelByte } from '@accelbyte/sdk'
import { PlayerRecordAdminApi } from '@accelbyte/sdk-cloudsave'

const sdk = AccelByte.SDK({
  coreConfig: {
    baseURL: '__AGS_DOMAIN__',
    clientId: '__IAM_CLIENT_ID__',
    namespace: '__NAMESPACE__',
    redirectURI: '__IAM_CLIENT_REDIRECT_URI__'
  }
})

PlayerRecordAdminApi(sdk, { axiosConfig: { request: { headers: { Authorization: 'Bearer {access_token}' } } } })
  .getRecord_ByUserId_ByKey(userId:string, key:string)

// return Promise<PlayerRecordResponse>
```

## POST /cloudsave/v1/admin/namespaces/{namespace}/users/{userId}/records/{key}

```
import { AccelByte } from '@accelbyte/sdk'
import { PlayerRecordAdminApi } from '@accelbyte/sdk-cloudsave'

const sdk = AccelByte.SDK({
  coreConfig: {
    baseURL: '__AGS_DOMAIN__',
    clientId: '__IAM_CLIENT_ID__',
    namespace: '__NAMESPACE__',
    redirectURI: '__IAM_CLIENT_REDIRECT_URI__'
  }
})

PlayerRecordAdminApi(sdk, { axiosConfig: { request: { headers: { Authorization: 'Bearer {access_token}' } } } })
  .createRecord_ByUserId_ByKey(userId:string, key:string, data: {
             PlayerRecordRequest
    })

// return Promise<PlayerRecordResponse>
```

## PUT /cloudsave/v1/admin/namespaces/{namespace}/users/{userId}/records/{key}

```
import { AccelByte } from '@accelbyte/sdk'
import { PlayerRecordAdminApi } from '@accelbyte/sdk-cloudsave'

const sdk = AccelByte.SDK({
  coreConfig: {
    baseURL: '__AGS_DOMAIN__',
    clientId: '__IAM_CLIENT_ID__',
    namespace: '__NAMESPACE__',
    redirectURI: '__IAM_CLIENT_REDIRECT_URI__'
  }
})

PlayerRecordAdminApi(sdk, { axiosConfig: { request: { headers: { Authorization: 'Bearer {access_token}' } } } })
  .updateRecord_ByUserId_ByKey(userId:string, key:string, data: {
             PlayerRecordRequest
    })

// return Promise<PlayerRecordResponse>
```

## PUT /cloudsave/v1/admin/namespaces/{namespace}/concurrent/adminrecords/{key}

```
import { AccelByte } from '@accelbyte/sdk'
import { ConcurrentRecordAdminApi } from '@accelbyte/sdk-cloudsave'

const sdk = AccelByte.SDK({
  coreConfig: {
    baseURL: '__AGS_DOMAIN__',
    clientId: '__IAM_CLIENT_ID__',
    namespace: '__NAMESPACE__',
    redirectURI: '__IAM_CLIENT_REDIRECT_URI__'
  }
})

ConcurrentRecordAdminApi(sdk, { axiosConfig: { request: { headers: { Authorization: 'Bearer {access_token}' } } } })
  .updateConcurrentAdminrecord_ByKey(key:string, data: {
             AdminGameConcurrentRecordRequest
    })

// return Promise
```

## DELETE /cloudsave/v1/admin/namespaces/{namespace}/users/{userId}/binaries/{key}

```
import { AccelByte } from '@accelbyte/sdk'
import { PlayerBinaryRecordAdminApi } from '@accelbyte/sdk-cloudsave'

const sdk = AccelByte.SDK({
  coreConfig: {
    baseURL: '__AGS_DOMAIN__',
    clientId: '__IAM_CLIENT_ID__',
    namespace: '__NAMESPACE__',
    redirectURI: '__IAM_CLIENT_REDIRECT_URI__'
  }
})

PlayerBinaryRecordAdminApi(sdk, { axiosConfig: { request: { headers: { Authorization: 'Bearer {access_token}' } } } })
  .deleteBinary_ByUserId_ByKey(userId:string, key:string)

// return Promise
```

## GET /cloudsave/v1/admin/namespaces/{namespace}/users/{userId}/binaries/{key}

```
import { AccelByte } from '@accelbyte/sdk'
import { PlayerBinaryRecordAdminApi } from '@accelbyte/sdk-cloudsave'

const sdk = AccelByte.SDK({
  coreConfig: {
    baseURL: '__AGS_DOMAIN__',
    clientId: '__IAM_CLIENT_ID__',
    namespace: '__NAMESPACE__',
    redirectURI: '__IAM_CLIENT_REDIRECT_URI__'
  }
})

PlayerBinaryRecordAdminApi(sdk, { axiosConfig: { request: { headers: { Authorization: 'Bearer {access_token}' } } } })
  .getBinary_ByUserId_ByKey(userId:string, key:string)

// return Promise<PlayerBinaryRecordResponse>
```

## PUT /cloudsave/v1/admin/namespaces/{namespace}/users/{userId}/binaries/{key}

```
import { AccelByte } from '@accelbyte/sdk'
import { PlayerBinaryRecordAdminApi } from '@accelbyte/sdk-cloudsave'

const sdk = AccelByte.SDK({
  coreConfig: {
    baseURL: '__AGS_DOMAIN__',
    clientId: '__IAM_CLIENT_ID__',
    namespace: '__NAMESPACE__',
    redirectURI: '__IAM_CLIENT_REDIRECT_URI__'
  }
})

PlayerBinaryRecordAdminApi(sdk, { axiosConfig: { request: { headers: { Authorization: 'Bearer {access_token}' } } } })
  .updateBinary_ByUserId_ByKey(userId:string, key:string, data: {
             BinaryRecordRequest
    })

// return Promise<PlayerBinaryRecordResponse>
```

## POST /cloudsave/v1/admin/namespaces/{namespace}/users/adminrecords/{key}/bulk

```
import { AccelByte } from '@accelbyte/sdk'
import { RecordAdminApi } from '@accelbyte/sdk-cloudsave'

const sdk = AccelByte.SDK({
  coreConfig: {
    baseURL: '__AGS_DOMAIN__',
    clientId: '__IAM_CLIENT_ID__',
    namespace: '__NAMESPACE__',
    redirectURI: '__IAM_CLIENT_REDIRECT_URI__'
  }
})

RecordAdminApi(sdk, { axiosConfig: { request: { headers: { Authorization: 'Bearer {access_token}' } } } })
  .fetchBulkUser_ByKey(key:string, data: {
             BulkUserIDsRequest
    })

// return Promise<BulkGetAdminPlayerRecordResponse>
```

## POST /cloudsave/v1/admin/namespaces/{namespace}/users/{userId}/adminrecords/bulk

```
import { AccelByte } from '@accelbyte/sdk'
import { RecordAdminApi } from '@accelbyte/sdk-cloudsave'

const sdk = AccelByte.SDK({
  coreConfig: {
    baseURL: '__AGS_DOMAIN__',
    clientId: '__IAM_CLIENT_ID__',
    namespace: '__NAMESPACE__',
    redirectURI: '__IAM_CLIENT_REDIRECT_URI__'
  }
})

RecordAdminApi(sdk, { axiosConfig: { request: { headers: { Authorization: 'Bearer {access_token}' } } } })
  .fetchAdminrecordBulk_ByUserId(userId:string, data: {
             BulkGetAdminPlayerRecordRequest
    })

// return Promise<BulkGetAdminPlayerRecordResponse>
```

## DELETE /cloudsave/v1/admin/namespaces/{namespace}/users/{userId}/adminrecords/{key}

```
import { AccelByte } from '@accelbyte/sdk'
import { RecordAdminApi } from '@accelbyte/sdk-cloudsave'

const sdk = AccelByte.SDK({
  coreConfig: {
    baseURL: '__AGS_DOMAIN__',
    clientId: '__IAM_CLIENT_ID__',
    namespace: '__NAMESPACE__',
    redirectURI: '__IAM_CLIENT_REDIRECT_URI__'
  }
})

RecordAdminApi(sdk, { axiosConfig: { request: { headers: { Authorization: 'Bearer {access_token}' } } } })
  .deleteAdminrecord_ByUserId_ByKey(userId:string, key:string)

// return Promise
```

## GET /cloudsave/v1/admin/namespaces/{namespace}/users/{userId}/adminrecords/{key}

```
import { AccelByte } from '@accelbyte/sdk'
import { RecordAdminApi } from '@accelbyte/sdk-cloudsave'

const sdk = AccelByte.SDK({
  coreConfig: {
    baseURL: '__AGS_DOMAIN__',
    clientId: '__IAM_CLIENT_ID__',
    namespace: '__NAMESPACE__',
    redirectURI: '__IAM_CLIENT_REDIRECT_URI__'
  }
})

RecordAdminApi(sdk, { axiosConfig: { request: { headers: { Authorization: 'Bearer {access_token}' } } } })
  .getAdminrecord_ByUserId_ByKey(userId:string, key:string)

// return Promise<AdminPlayerRecordResponse>
```

## POST /cloudsave/v1/admin/namespaces/{namespace}/users/{userId}/adminrecords/{key}

```
import { AccelByte } from '@accelbyte/sdk'
import { RecordAdminApi } from '@accelbyte/sdk-cloudsave'

const sdk = AccelByte.SDK({
  coreConfig: {
    baseURL: '__AGS_DOMAIN__',
    clientId: '__IAM_CLIENT_ID__',
    namespace: '__NAMESPACE__',
    redirectURI: '__IAM_CLIENT_REDIRECT_URI__'
  }
})

RecordAdminApi(sdk, { axiosConfig: { request: { headers: { Authorization: 'Bearer {access_token}' } } } })
  .createAdminrecord_ByUserId_ByKey(userId:string, key:string, data: {
             AdminPlayerRecordRequest
    })

// return Promise<AdminPlayerRecordResponse>
```

## PUT /cloudsave/v1/admin/namespaces/{namespace}/users/{userId}/adminrecords/{key}

```
import { AccelByte } from '@accelbyte/sdk'
import { RecordAdminApi } from '@accelbyte/sdk-cloudsave'

const sdk = AccelByte.SDK({
  coreConfig: {
    baseURL: '__AGS_DOMAIN__',
    clientId: '__IAM_CLIENT_ID__',
    namespace: '__NAMESPACE__',
    redirectURI: '__IAM_CLIENT_REDIRECT_URI__'
  }
})

RecordAdminApi(sdk, { axiosConfig: { request: { headers: { Authorization: 'Bearer {access_token}' } } } })
  .updateAdminrecord_ByUserId_ByKey(userId:string, key:string, data: {
             AdminPlayerRecordRequest
    })

// return Promise<AdminPlayerRecordResponse>
```

## GET /cloudsave/v1/admin/namespaces/{namespace}/users/{userId}/records/{key}/size

```
import { AccelByte } from '@accelbyte/sdk'
import { PlayerRecordAdminApi } from '@accelbyte/sdk-cloudsave'

const sdk = AccelByte.SDK({
  coreConfig: {
    baseURL: '__AGS_DOMAIN__',
    clientId: '__IAM_CLIENT_ID__',
    namespace: '__NAMESPACE__',
    redirectURI: '__IAM_CLIENT_REDIRECT_URI__'
  }
})

PlayerRecordAdminApi(sdk, { axiosConfig: { request: { headers: { Authorization: 'Bearer {access_token}' } } } })
  .getSize_ByUserId_ByKey(userId:string, key:string)

// return Promise<PlayerRecordSizeResponse>
```

## DELETE /cloudsave/v1/admin/namespaces/{namespace}/users/{userId}/records/{key}/public

```
import { AccelByte } from '@accelbyte/sdk'
import { PlayerRecordAdminApi } from '@accelbyte/sdk-cloudsave'

const sdk = AccelByte.SDK({
  coreConfig: {
    baseURL: '__AGS_DOMAIN__',
    clientId: '__IAM_CLIENT_ID__',
    namespace: '__NAMESPACE__',
    redirectURI: '__IAM_CLIENT_REDIRECT_URI__'
  }
})

PlayerRecordAdminApi(sdk, { axiosConfig: { request: { headers: { Authorization: 'Bearer {access_token}' } } } })
  .deletePublic_ByUserId_ByKey(userId:string, key:string)

// return Promise
```

## GET /cloudsave/v1/admin/namespaces/{namespace}/users/{userId}/records/{key}/public

```
import { AccelByte } from '@accelbyte/sdk'
import { PlayerRecordAdminApi } from '@accelbyte/sdk-cloudsave'

const sdk = AccelByte.SDK({
  coreConfig: {
    baseURL: '__AGS_DOMAIN__',
    clientId: '__IAM_CLIENT_ID__',
    namespace: '__NAMESPACE__',
    redirectURI: '__IAM_CLIENT_REDIRECT_URI__'
  }
})

PlayerRecordAdminApi(sdk, { axiosConfig: { request: { headers: { Authorization: 'Bearer {access_token}' } } } })
  .getPublic_ByUserId_ByKey(userId:string, key:string)

// return Promise<PlayerRecordResponse>
```

## POST /cloudsave/v1/admin/namespaces/{namespace}/users/{userId}/records/{key}/public

```
import { AccelByte } from '@accelbyte/sdk'
import { PlayerRecordAdminApi } from '@accelbyte/sdk-cloudsave'

const sdk = AccelByte.SDK({
  coreConfig: {
    baseURL: '__AGS_DOMAIN__',
    clientId: '__IAM_CLIENT_ID__',
    namespace: '__NAMESPACE__',
    redirectURI: '__IAM_CLIENT_REDIRECT_URI__'
  }
})

PlayerRecordAdminApi(sdk, { axiosConfig: { request: { headers: { Authorization: 'Bearer {access_token}' } } } })
  .createPublic_ByUserId_ByKey(userId:string, key:string, data: {
             PlayerRecordRequest
    })

// return Promise<PlayerRecordResponse>
```

## PUT /cloudsave/v1/admin/namespaces/{namespace}/users/{userId}/records/{key}/public

```
import { AccelByte } from '@accelbyte/sdk'
import { PlayerRecordAdminApi } from '@accelbyte/sdk-cloudsave'

const sdk = AccelByte.SDK({
  coreConfig: {
    baseURL: '__AGS_DOMAIN__',
    clientId: '__IAM_CLIENT_ID__',
    namespace: '__NAMESPACE__',
    redirectURI: '__IAM_CLIENT_REDIRECT_URI__'
  }
})

PlayerRecordAdminApi(sdk, { axiosConfig: { request: { headers: { Authorization: 'Bearer {access_token}' } } } })
  .updatePublic_ByUserId_ByKey(userId:string, key:string, data: {
             PlayerRecordRequest
    })

// return Promise<PlayerRecordResponse>
```

## PUT /cloudsave/v1/admin/namespaces/{namespace}/users/{userId}/binaries/{key}/metadata

```
import { AccelByte } from '@accelbyte/sdk'
import { PlayerBinaryRecordAdminApi } from '@accelbyte/sdk-cloudsave'

const sdk = AccelByte.SDK({
  coreConfig: {
    baseURL: '__AGS_DOMAIN__',
    clientId: '__IAM_CLIENT_ID__',
    namespace: '__NAMESPACE__',
    redirectURI: '__IAM_CLIENT_REDIRECT_URI__'
  }
})

PlayerBinaryRecordAdminApi(sdk, { axiosConfig: { request: { headers: { Authorization: 'Bearer {access_token}' } } } })
  .updateMetadata_ByUserId_ByKey(userId:string, key:string, data: {
             PlayerBinaryRecordMetadataRequest
    })

// return Promise<PlayerBinaryRecordResponse>
```

## POST /cloudsave/v1/admin/namespaces/{namespace}/users/{userId}/binaries/{key}/presigned

```
import { AccelByte } from '@accelbyte/sdk'
import { PlayerBinaryRecordAdminApi } from '@accelbyte/sdk-cloudsave'

const sdk = AccelByte.SDK({
  coreConfig: {
    baseURL: '__AGS_DOMAIN__',
    clientId: '__IAM_CLIENT_ID__',
    namespace: '__NAMESPACE__',
    redirectURI: '__IAM_CLIENT_REDIRECT_URI__'
  }
})

PlayerBinaryRecordAdminApi(sdk, { axiosConfig: { request: { headers: { Authorization: 'Bearer {access_token}' } } } })
  .createPresigned_ByUserId_ByKey(userId:string, key:string, data: {
             UploadBinaryRecordRequest
    })

// return Promise<UploadBinaryRecordResponse>
```

## PUT /cloudsave/v1/admin/namespaces/{namespace}/users/{userId}/concurrent/records/{key}

```
import { AccelByte } from '@accelbyte/sdk'
import { ConcurrentRecordAdminApi } from '@accelbyte/sdk-cloudsave'

const sdk = AccelByte.SDK({
  coreConfig: {
    baseURL: '__AGS_DOMAIN__',
    clientId: '__IAM_CLIENT_ID__',
    namespace: '__NAMESPACE__',
    redirectURI: '__IAM_CLIENT_REDIRECT_URI__'
  }
})

ConcurrentRecordAdminApi(sdk, { axiosConfig: { request: { headers: { Authorization: 'Bearer {access_token}' } } } })
  .updateConcurrentRecord_ByUserId_ByKey(userId:string, key:string, data: {
             AdminConcurrentRecordRequest,
             queryParams?: {
             responseBody?: boolean | null
    })

// return Promise<PlayerRecordConcurrentUpdateResponse>
```

## PUT /cloudsave/v1/admin/namespaces/{namespace}/users/{userId}/concurrent/adminrecords/{key}

```
import { AccelByte } from '@accelbyte/sdk'
import { ConcurrentRecordAdminApi } from '@accelbyte/sdk-cloudsave'

const sdk = AccelByte.SDK({
  coreConfig: {
    baseURL: '__AGS_DOMAIN__',
    clientId: '__IAM_CLIENT_ID__',
    namespace: '__NAMESPACE__',
    redirectURI: '__IAM_CLIENT_REDIRECT_URI__'
  }
})

ConcurrentRecordAdminApi(sdk, { axiosConfig: { request: { headers: { Authorization: 'Bearer {access_token}' } } } })
  .updateConcurrentAdminrecord_ByUserId_ByKey(userId:string, key:string, data: {
             AdminPlayerConcurrentRecordRequest,
             queryParams?: {
             responseBody?: boolean | null
    })

// return Promise<PlayerRecordConcurrentUpdateResponse>
```

## PUT /cloudsave/v1/admin/namespaces/{namespace}/users/{userId}/concurrent/records/{key}/public

```
import { AccelByte } from '@accelbyte/sdk'
import { ConcurrentRecordAdminApi } from '@accelbyte/sdk-cloudsave'

const sdk = AccelByte.SDK({
  coreConfig: {
    baseURL: '__AGS_DOMAIN__',
    clientId: '__IAM_CLIENT_ID__',
    namespace: '__NAMESPACE__',
    redirectURI: '__IAM_CLIENT_REDIRECT_URI__'
  }
})

ConcurrentRecordAdminApi(sdk, { axiosConfig: { request: { headers: { Authorization: 'Bearer {access_token}' } } } })
  .updatePublicConcurrent_ByUserId_ByKey(userId:string, key:string, data: {
             AdminConcurrentRecordRequest,
             queryParams?: {
             responseBody?: boolean | null
    })

// return Promise<PlayerRecordConcurrentUpdateResponse>
```