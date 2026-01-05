## GET /cloudsave/v1/namespaces/{namespace}/tags

```
<script src="https://unpkg.com/@accelbyte/sdk/dist/global/index.global.js"></script>
<script src="https://unpkg.com/@accelbyte/sdk-cloudsave/dist/global/index.global.js"></script>
  
<script>

const sdk = AccelByteSDK.AccelByte.SDK({
  coreConfig: {
    baseURL: '__AGS_DOMAIN__',
    clientId: '__IAM_CLIENT_ID__',
    namespace: '__NAMESPACE__',
    redirectURI: '__IAM_CLIENT_REDIRECT_URI__'
  }
})

AccelByteSDK_Cloudsave.PublicTagsApi(sdk, { axiosConfig: { request: { headers: { Authorization: 'Bearer {access_token}' } } } })
  .getTags( queryParams?: {
             limit?: number,
             offset?: number
    })

// return Promise<ListTagsResponse>

</script>
```

## GET /cloudsave/v1/namespaces/{namespace}/binaries

```
<script src="https://unpkg.com/@accelbyte/sdk/dist/global/index.global.js"></script>
<script src="https://unpkg.com/@accelbyte/sdk-cloudsave/dist/global/index.global.js"></script>
  
<script>

const sdk = AccelByteSDK.AccelByte.SDK({
  coreConfig: {
    baseURL: '__AGS_DOMAIN__',
    clientId: '__IAM_CLIENT_ID__',
    namespace: '__NAMESPACE__',
    redirectURI: '__IAM_CLIENT_REDIRECT_URI__'
  }
})

AccelByteSDK_Cloudsave.PublicGameBinaryRecordApi(sdk, { axiosConfig: { request: { headers: { Authorization: 'Bearer {access_token}' } } } })
  .getBinaries( queryParams?: {
             limit?: number,
             offset?: number,
             query?: string | null,
             tags?: string[]
    })

// return Promise<ListGameBinaryRecordsResponse>

</script>
```

## POST /cloudsave/v1/namespaces/{namespace}/binaries

```
<script src="https://unpkg.com/@accelbyte/sdk/dist/global/index.global.js"></script>
<script src="https://unpkg.com/@accelbyte/sdk-cloudsave/dist/global/index.global.js"></script>
  
<script>

const sdk = AccelByteSDK.AccelByte.SDK({
  coreConfig: {
    baseURL: '__AGS_DOMAIN__',
    clientId: '__IAM_CLIENT_ID__',
    namespace: '__NAMESPACE__',
    redirectURI: '__IAM_CLIENT_REDIRECT_URI__'
  }
})

AccelByteSDK_Cloudsave.PublicGameBinaryRecordApi(sdk, { axiosConfig: { request: { headers: { Authorization: 'Bearer {access_token}' } } } })
  .createBinary(data: {
             PublicGameBinaryRecordCreate
    })

// return Promise<UploadBinaryRecordResponse>

</script>
```

## POST /cloudsave/v1/namespaces/{namespace}/records/bulk

```
<script src="https://unpkg.com/@accelbyte/sdk/dist/global/index.global.js"></script>
<script src="https://unpkg.com/@accelbyte/sdk-cloudsave/dist/global/index.global.js"></script>
  
<script>

const sdk = AccelByteSDK.AccelByte.SDK({
  coreConfig: {
    baseURL: '__AGS_DOMAIN__',
    clientId: '__IAM_CLIENT_ID__',
    namespace: '__NAMESPACE__',
    redirectURI: '__IAM_CLIENT_REDIRECT_URI__'
  }
})

AccelByteSDK_Cloudsave.PublicGameRecordApi(sdk, { axiosConfig: { request: { headers: { Authorization: 'Bearer {access_token}' } } } })
  .fetchRecordBulk(data: {
             BulkGetGameRecordRequest
    })

// return Promise<BulkGetGameRecordResponse>

</script>
```

## POST /cloudsave/v1/namespaces/{namespace}/binaries/bulk

```
<script src="https://unpkg.com/@accelbyte/sdk/dist/global/index.global.js"></script>
<script src="https://unpkg.com/@accelbyte/sdk-cloudsave/dist/global/index.global.js"></script>
  
<script>

const sdk = AccelByteSDK.AccelByte.SDK({
  coreConfig: {
    baseURL: '__AGS_DOMAIN__',
    clientId: '__IAM_CLIENT_ID__',
    namespace: '__NAMESPACE__',
    redirectURI: '__IAM_CLIENT_REDIRECT_URI__'
  }
})

AccelByteSDK_Cloudsave.PublicGameBinaryRecordApi(sdk, { axiosConfig: { request: { headers: { Authorization: 'Bearer {access_token}' } } } })
  .createBinaryBulk(data: {
             BulkGetGameRecordRequest
    })

// return Promise<BulkGetGameBinaryRecordResponse>

</script>
```

## DELETE /cloudsave/v1/namespaces/{namespace}/records/{key}

```
<script src="https://unpkg.com/@accelbyte/sdk/dist/global/index.global.js"></script>
<script src="https://unpkg.com/@accelbyte/sdk-cloudsave/dist/global/index.global.js"></script>
  
<script>

const sdk = AccelByteSDK.AccelByte.SDK({
  coreConfig: {
    baseURL: '__AGS_DOMAIN__',
    clientId: '__IAM_CLIENT_ID__',
    namespace: '__NAMESPACE__',
    redirectURI: '__IAM_CLIENT_REDIRECT_URI__'
  }
})

AccelByteSDK_Cloudsave.PublicGameRecordApi(sdk, { axiosConfig: { request: { headers: { Authorization: 'Bearer {access_token}' } } } })
  .deleteRecord_ByKey(key:string)

// return Promise

</script>
```

## GET /cloudsave/v1/namespaces/{namespace}/records/{key}

```
<script src="https://unpkg.com/@accelbyte/sdk/dist/global/index.global.js"></script>
<script src="https://unpkg.com/@accelbyte/sdk-cloudsave/dist/global/index.global.js"></script>
  
<script>

const sdk = AccelByteSDK.AccelByte.SDK({
  coreConfig: {
    baseURL: '__AGS_DOMAIN__',
    clientId: '__IAM_CLIENT_ID__',
    namespace: '__NAMESPACE__',
    redirectURI: '__IAM_CLIENT_REDIRECT_URI__'
  }
})

AccelByteSDK_Cloudsave.PublicGameRecordApi(sdk, { axiosConfig: { request: { headers: { Authorization: 'Bearer {access_token}' } } } })
  .getRecord_ByKey(key:string)

// return Promise<GameRecordResponse>

</script>
```

## POST /cloudsave/v1/namespaces/{namespace}/records/{key}

```
<script src="https://unpkg.com/@accelbyte/sdk/dist/global/index.global.js"></script>
<script src="https://unpkg.com/@accelbyte/sdk-cloudsave/dist/global/index.global.js"></script>
  
<script>

const sdk = AccelByteSDK.AccelByte.SDK({
  coreConfig: {
    baseURL: '__AGS_DOMAIN__',
    clientId: '__IAM_CLIENT_ID__',
    namespace: '__NAMESPACE__',
    redirectURI: '__IAM_CLIENT_REDIRECT_URI__'
  }
})

AccelByteSDK_Cloudsave.PublicGameRecordApi(sdk, { axiosConfig: { request: { headers: { Authorization: 'Bearer {access_token}' } } } })
  .createRecord_ByKey(key:string, data: {
             GameRecordRequest
    })

// return Promise<GameRecordResponse>

</script>
```

## PUT /cloudsave/v1/namespaces/{namespace}/records/{key}

```
<script src="https://unpkg.com/@accelbyte/sdk/dist/global/index.global.js"></script>
<script src="https://unpkg.com/@accelbyte/sdk-cloudsave/dist/global/index.global.js"></script>
  
<script>

const sdk = AccelByteSDK.AccelByte.SDK({
  coreConfig: {
    baseURL: '__AGS_DOMAIN__',
    clientId: '__IAM_CLIENT_ID__',
    namespace: '__NAMESPACE__',
    redirectURI: '__IAM_CLIENT_REDIRECT_URI__'
  }
})

AccelByteSDK_Cloudsave.PublicGameRecordApi(sdk, { axiosConfig: { request: { headers: { Authorization: 'Bearer {access_token}' } } } })
  .updateRecord_ByKey(key:string, data: {
             GameRecordRequest
    })

// return Promise<GameRecordResponse>

</script>
```

## DELETE /cloudsave/v1/namespaces/{namespace}/binaries/{key}

```
<script src="https://unpkg.com/@accelbyte/sdk/dist/global/index.global.js"></script>
<script src="https://unpkg.com/@accelbyte/sdk-cloudsave/dist/global/index.global.js"></script>
  
<script>

const sdk = AccelByteSDK.AccelByte.SDK({
  coreConfig: {
    baseURL: '__AGS_DOMAIN__',
    clientId: '__IAM_CLIENT_ID__',
    namespace: '__NAMESPACE__',
    redirectURI: '__IAM_CLIENT_REDIRECT_URI__'
  }
})

AccelByteSDK_Cloudsave.PublicGameBinaryRecordApi(sdk, { axiosConfig: { request: { headers: { Authorization: 'Bearer {access_token}' } } } })
  .deleteBinary_ByKey(key:string)

// return Promise

</script>
```

## GET /cloudsave/v1/namespaces/{namespace}/binaries/{key}

```
<script src="https://unpkg.com/@accelbyte/sdk/dist/global/index.global.js"></script>
<script src="https://unpkg.com/@accelbyte/sdk-cloudsave/dist/global/index.global.js"></script>
  
<script>

const sdk = AccelByteSDK.AccelByte.SDK({
  coreConfig: {
    baseURL: '__AGS_DOMAIN__',
    clientId: '__IAM_CLIENT_ID__',
    namespace: '__NAMESPACE__',
    redirectURI: '__IAM_CLIENT_REDIRECT_URI__'
  }
})

AccelByteSDK_Cloudsave.PublicGameBinaryRecordApi(sdk, { axiosConfig: { request: { headers: { Authorization: 'Bearer {access_token}' } } } })
  .getBinary_ByKey(key:string)

// return Promise<GameBinaryRecordResponse>

</script>
```

## PUT /cloudsave/v1/namespaces/{namespace}/binaries/{key}

```
<script src="https://unpkg.com/@accelbyte/sdk/dist/global/index.global.js"></script>
<script src="https://unpkg.com/@accelbyte/sdk-cloudsave/dist/global/index.global.js"></script>
  
<script>

const sdk = AccelByteSDK.AccelByte.SDK({
  coreConfig: {
    baseURL: '__AGS_DOMAIN__',
    clientId: '__IAM_CLIENT_ID__',
    namespace: '__NAMESPACE__',
    redirectURI: '__IAM_CLIENT_REDIRECT_URI__'
  }
})

AccelByteSDK_Cloudsave.PublicGameBinaryRecordApi(sdk, { axiosConfig: { request: { headers: { Authorization: 'Bearer {access_token}' } } } })
  .updateBinary_ByKey(key:string, data: {
             BinaryRecordRequest
    })

// return Promise<GameBinaryRecordResponse>

</script>
```

## GET /cloudsave/v1/namespaces/{namespace}/users/me/records

```
<script src="https://unpkg.com/@accelbyte/sdk/dist/global/index.global.js"></script>
<script src="https://unpkg.com/@accelbyte/sdk-cloudsave/dist/global/index.global.js"></script>
  
<script>

const sdk = AccelByteSDK.AccelByte.SDK({
  coreConfig: {
    baseURL: '__AGS_DOMAIN__',
    clientId: '__IAM_CLIENT_ID__',
    namespace: '__NAMESPACE__',
    redirectURI: '__IAM_CLIENT_REDIRECT_URI__'
  }
})

AccelByteSDK_Cloudsave.PublicPlayerRecordApi(sdk, { axiosConfig: { request: { headers: { Authorization: 'Bearer {access_token}' } } } })
  .getUsersMeRecords( queryParams?: {
             limit?: number,
             offset?: number,
             tags?: string[]
    })

// return Promise<ListPlayerRecordKeysResponse>

</script>
```

## GET /cloudsave/v1/namespaces/{namespace}/users/me/binaries

```
<script src="https://unpkg.com/@accelbyte/sdk/dist/global/index.global.js"></script>
<script src="https://unpkg.com/@accelbyte/sdk-cloudsave/dist/global/index.global.js"></script>
  
<script>

const sdk = AccelByteSDK.AccelByte.SDK({
  coreConfig: {
    baseURL: '__AGS_DOMAIN__',
    clientId: '__IAM_CLIENT_ID__',
    namespace: '__NAMESPACE__',
    redirectURI: '__IAM_CLIENT_REDIRECT_URI__'
  }
})

AccelByteSDK_Cloudsave.PublicPlayerBinaryRecordApi(sdk, { axiosConfig: { request: { headers: { Authorization: 'Bearer {access_token}' } } } })
  .getUsersMeBinaries( queryParams?: {
             limit?: number,
             offset?: number,
             query?: string | null,
             tags?: string[]
    })

// return Promise<ListPlayerBinaryRecordsResponse>

</script>
```

## POST /cloudsave/v1/namespaces/{namespace}/users/me/records/bulk

```
<script src="https://unpkg.com/@accelbyte/sdk/dist/global/index.global.js"></script>
<script src="https://unpkg.com/@accelbyte/sdk-cloudsave/dist/global/index.global.js"></script>
  
<script>

const sdk = AccelByteSDK.AccelByte.SDK({
  coreConfig: {
    baseURL: '__AGS_DOMAIN__',
    clientId: '__IAM_CLIENT_ID__',
    namespace: '__NAMESPACE__',
    redirectURI: '__IAM_CLIENT_REDIRECT_URI__'
  }
})

AccelByteSDK_Cloudsave.PublicPlayerRecordApi(sdk, { axiosConfig: { request: { headers: { Authorization: 'Bearer {access_token}' } } } })
  .createUserMeRecordBulk(data: {
             BulkGetPlayerRecordsRequest
    })

// return Promise<BulkGetPlayerRecordResponse>

</script>
```

## POST /cloudsave/v1/namespaces/{namespace}/users/me/binaries/bulk

```
<script src="https://unpkg.com/@accelbyte/sdk/dist/global/index.global.js"></script>
<script src="https://unpkg.com/@accelbyte/sdk-cloudsave/dist/global/index.global.js"></script>
  
<script>

const sdk = AccelByteSDK.AccelByte.SDK({
  coreConfig: {
    baseURL: '__AGS_DOMAIN__',
    clientId: '__IAM_CLIENT_ID__',
    namespace: '__NAMESPACE__',
    redirectURI: '__IAM_CLIENT_REDIRECT_URI__'
  }
})

AccelByteSDK_Cloudsave.PublicPlayerBinaryRecordApi(sdk, { axiosConfig: { request: { headers: { Authorization: 'Bearer {access_token}' } } } })
  .createUserMeBinaryBulk(data: {
             BulkGetPlayerRecordsRequest
    })

// return Promise<BulkGetPlayerBinaryRecordResponse>

</script>
```

## POST /cloudsave/v1/namespaces/{namespace}/users/{userId}/binaries

```
<script src="https://unpkg.com/@accelbyte/sdk/dist/global/index.global.js"></script>
<script src="https://unpkg.com/@accelbyte/sdk-cloudsave/dist/global/index.global.js"></script>
  
<script>

const sdk = AccelByteSDK.AccelByte.SDK({
  coreConfig: {
    baseURL: '__AGS_DOMAIN__',
    clientId: '__IAM_CLIENT_ID__',
    namespace: '__NAMESPACE__',
    redirectURI: '__IAM_CLIENT_REDIRECT_URI__'
  }
})

AccelByteSDK_Cloudsave.PublicPlayerBinaryRecordApi(sdk, { axiosConfig: { request: { headers: { Authorization: 'Bearer {access_token}' } } } })
  .createBinary_ByUserId(userId:string, data: {
             PublicPlayerBinaryRecordCreate
    })

// return Promise<UploadBinaryRecordResponse>

</script>
```

## POST /cloudsave/v1/namespaces/{namespace}/binaries/{key}/presigned

```
<script src="https://unpkg.com/@accelbyte/sdk/dist/global/index.global.js"></script>
<script src="https://unpkg.com/@accelbyte/sdk-cloudsave/dist/global/index.global.js"></script>
  
<script>

const sdk = AccelByteSDK.AccelByte.SDK({
  coreConfig: {
    baseURL: '__AGS_DOMAIN__',
    clientId: '__IAM_CLIENT_ID__',
    namespace: '__NAMESPACE__',
    redirectURI: '__IAM_CLIENT_REDIRECT_URI__'
  }
})

AccelByteSDK_Cloudsave.PublicGameBinaryRecordApi(sdk, { axiosConfig: { request: { headers: { Authorization: 'Bearer {access_token}' } } } })
  .createPresigned_ByKey(key:string, data: {
             UploadBinaryRecordRequest
    })

// return Promise<UploadBinaryRecordResponse>

</script>
```

## PUT /cloudsave/v1/namespaces/{namespace}/concurrent/records/{key}

```
<script src="https://unpkg.com/@accelbyte/sdk/dist/global/index.global.js"></script>
<script src="https://unpkg.com/@accelbyte/sdk-cloudsave/dist/global/index.global.js"></script>
  
<script>

const sdk = AccelByteSDK.AccelByte.SDK({
  coreConfig: {
    baseURL: '__AGS_DOMAIN__',
    clientId: '__IAM_CLIENT_ID__',
    namespace: '__NAMESPACE__',
    redirectURI: '__IAM_CLIENT_REDIRECT_URI__'
  }
})

AccelByteSDK_Cloudsave.ConcurrentRecordApi(sdk, { axiosConfig: { request: { headers: { Authorization: 'Bearer {access_token}' } } } })
  .updateConcurrentRecord_ByKey(key:string, data: {
             ConcurrentRecordRequest
    })

// return Promise

</script>
```

## DELETE /cloudsave/v1/namespaces/{namespace}/users/{userId}/records/{key}

```
<script src="https://unpkg.com/@accelbyte/sdk/dist/global/index.global.js"></script>
<script src="https://unpkg.com/@accelbyte/sdk-cloudsave/dist/global/index.global.js"></script>
  
<script>

const sdk = AccelByteSDK.AccelByte.SDK({
  coreConfig: {
    baseURL: '__AGS_DOMAIN__',
    clientId: '__IAM_CLIENT_ID__',
    namespace: '__NAMESPACE__',
    redirectURI: '__IAM_CLIENT_REDIRECT_URI__'
  }
})

AccelByteSDK_Cloudsave.PublicPlayerRecordApi(sdk, { axiosConfig: { request: { headers: { Authorization: 'Bearer {access_token}' } } } })
  .deleteRecord_ByUserId_ByKey(userId:string, key:string)

// return Promise

</script>
```

## GET /cloudsave/v1/namespaces/{namespace}/users/{userId}/records/{key}

```
<script src="https://unpkg.com/@accelbyte/sdk/dist/global/index.global.js"></script>
<script src="https://unpkg.com/@accelbyte/sdk-cloudsave/dist/global/index.global.js"></script>
  
<script>

const sdk = AccelByteSDK.AccelByte.SDK({
  coreConfig: {
    baseURL: '__AGS_DOMAIN__',
    clientId: '__IAM_CLIENT_ID__',
    namespace: '__NAMESPACE__',
    redirectURI: '__IAM_CLIENT_REDIRECT_URI__'
  }
})

AccelByteSDK_Cloudsave.PublicPlayerRecordApi(sdk, { axiosConfig: { request: { headers: { Authorization: 'Bearer {access_token}' } } } })
  .getRecord_ByUserId_ByKey(userId:string, key:string)

// return Promise<PlayerRecordResponse>

</script>
```

## POST /cloudsave/v1/namespaces/{namespace}/users/{userId}/records/{key}

```
<script src="https://unpkg.com/@accelbyte/sdk/dist/global/index.global.js"></script>
<script src="https://unpkg.com/@accelbyte/sdk-cloudsave/dist/global/index.global.js"></script>
  
<script>

const sdk = AccelByteSDK.AccelByte.SDK({
  coreConfig: {
    baseURL: '__AGS_DOMAIN__',
    clientId: '__IAM_CLIENT_ID__',
    namespace: '__NAMESPACE__',
    redirectURI: '__IAM_CLIENT_REDIRECT_URI__'
  }
})

AccelByteSDK_Cloudsave.PublicPlayerRecordApi(sdk, { axiosConfig: { request: { headers: { Authorization: 'Bearer {access_token}' } } } })
  .createRecord_ByUserId_ByKey(userId:string, key:string, data: {
             PlayerRecordRequest
    })

// return Promise<PlayerRecordResponse>

</script>
```

## PUT /cloudsave/v1/namespaces/{namespace}/users/{userId}/records/{key}

```
<script src="https://unpkg.com/@accelbyte/sdk/dist/global/index.global.js"></script>
<script src="https://unpkg.com/@accelbyte/sdk-cloudsave/dist/global/index.global.js"></script>
  
<script>

const sdk = AccelByteSDK.AccelByte.SDK({
  coreConfig: {
    baseURL: '__AGS_DOMAIN__',
    clientId: '__IAM_CLIENT_ID__',
    namespace: '__NAMESPACE__',
    redirectURI: '__IAM_CLIENT_REDIRECT_URI__'
  }
})

AccelByteSDK_Cloudsave.PublicPlayerRecordApi(sdk, { axiosConfig: { request: { headers: { Authorization: 'Bearer {access_token}' } } } })
  .updateRecord_ByUserId_ByKey(userId:string, key:string, data: {
             PlayerRecordRequest
    })

// return Promise<PlayerRecordResponse>

</script>
```

## DELETE /cloudsave/v1/namespaces/{namespace}/users/{userId}/binaries/{key}

```
<script src="https://unpkg.com/@accelbyte/sdk/dist/global/index.global.js"></script>
<script src="https://unpkg.com/@accelbyte/sdk-cloudsave/dist/global/index.global.js"></script>
  
<script>

const sdk = AccelByteSDK.AccelByte.SDK({
  coreConfig: {
    baseURL: '__AGS_DOMAIN__',
    clientId: '__IAM_CLIENT_ID__',
    namespace: '__NAMESPACE__',
    redirectURI: '__IAM_CLIENT_REDIRECT_URI__'
  }
})

AccelByteSDK_Cloudsave.PublicPlayerBinaryRecordApi(sdk, { axiosConfig: { request: { headers: { Authorization: 'Bearer {access_token}' } } } })
  .deleteBinary_ByUserId_ByKey(userId:string, key:string)

// return Promise

</script>
```

## GET /cloudsave/v1/namespaces/{namespace}/users/{userId}/binaries/{key}

```
<script src="https://unpkg.com/@accelbyte/sdk/dist/global/index.global.js"></script>
<script src="https://unpkg.com/@accelbyte/sdk-cloudsave/dist/global/index.global.js"></script>
  
<script>

const sdk = AccelByteSDK.AccelByte.SDK({
  coreConfig: {
    baseURL: '__AGS_DOMAIN__',
    clientId: '__IAM_CLIENT_ID__',
    namespace: '__NAMESPACE__',
    redirectURI: '__IAM_CLIENT_REDIRECT_URI__'
  }
})

AccelByteSDK_Cloudsave.PublicPlayerBinaryRecordApi(sdk, { axiosConfig: { request: { headers: { Authorization: 'Bearer {access_token}' } } } })
  .getBinary_ByUserId_ByKey(userId:string, key:string)

// return Promise<PlayerBinaryRecordResponse>

</script>
```

## PUT /cloudsave/v1/namespaces/{namespace}/users/{userId}/binaries/{key}

```
<script src="https://unpkg.com/@accelbyte/sdk/dist/global/index.global.js"></script>
<script src="https://unpkg.com/@accelbyte/sdk-cloudsave/dist/global/index.global.js"></script>
  
<script>

const sdk = AccelByteSDK.AccelByte.SDK({
  coreConfig: {
    baseURL: '__AGS_DOMAIN__',
    clientId: '__IAM_CLIENT_ID__',
    namespace: '__NAMESPACE__',
    redirectURI: '__IAM_CLIENT_REDIRECT_URI__'
  }
})

AccelByteSDK_Cloudsave.PublicPlayerBinaryRecordApi(sdk, { axiosConfig: { request: { headers: { Authorization: 'Bearer {access_token}' } } } })
  .updateBinary_ByUserId_ByKey(userId:string, key:string, data: {
             BinaryRecordRequest
    })

// return Promise<PlayerBinaryRecordResponse>

</script>
```

## GET /cloudsave/v1/namespaces/{namespace}/users/{userId}/records/public

```
<script src="https://unpkg.com/@accelbyte/sdk/dist/global/index.global.js"></script>
<script src="https://unpkg.com/@accelbyte/sdk-cloudsave/dist/global/index.global.js"></script>
  
<script>

const sdk = AccelByteSDK.AccelByte.SDK({
  coreConfig: {
    baseURL: '__AGS_DOMAIN__',
    clientId: '__IAM_CLIENT_ID__',
    namespace: '__NAMESPACE__',
    redirectURI: '__IAM_CLIENT_REDIRECT_URI__'
  }
})

AccelByteSDK_Cloudsave.PublicPlayerRecordApi(sdk, { axiosConfig: { request: { headers: { Authorization: 'Bearer {access_token}' } } } })
  .getRecordsPublic_ByUserId(userId:string,  queryParams?: {
             limit?: number,
             offset?: number,
             tags?: string[]
    })

// return Promise<ListPlayerRecordKeysResponse>

</script>
```

## DELETE /cloudsave/v1/namespaces/{namespace}/users/me/records/{key}/public

```
<script src="https://unpkg.com/@accelbyte/sdk/dist/global/index.global.js"></script>
<script src="https://unpkg.com/@accelbyte/sdk-cloudsave/dist/global/index.global.js"></script>
  
<script>

const sdk = AccelByteSDK.AccelByte.SDK({
  coreConfig: {
    baseURL: '__AGS_DOMAIN__',
    clientId: '__IAM_CLIENT_ID__',
    namespace: '__NAMESPACE__',
    redirectURI: '__IAM_CLIENT_REDIRECT_URI__'
  }
})

AccelByteSDK_Cloudsave.PublicPlayerRecordApi(sdk, { axiosConfig: { request: { headers: { Authorization: 'Bearer {access_token}' } } } })
  .deletePublicMeUser_ByKey(key:string)

// return Promise

</script>
```

## GET /cloudsave/v1/namespaces/{namespace}/users/{userId}/binaries/public

```
<script src="https://unpkg.com/@accelbyte/sdk/dist/global/index.global.js"></script>
<script src="https://unpkg.com/@accelbyte/sdk-cloudsave/dist/global/index.global.js"></script>
  
<script>

const sdk = AccelByteSDK.AccelByte.SDK({
  coreConfig: {
    baseURL: '__AGS_DOMAIN__',
    clientId: '__IAM_CLIENT_ID__',
    namespace: '__NAMESPACE__',
    redirectURI: '__IAM_CLIENT_REDIRECT_URI__'
  }
})

AccelByteSDK_Cloudsave.PublicPlayerBinaryRecordApi(sdk, { axiosConfig: { request: { headers: { Authorization: 'Bearer {access_token}' } } } })
  .getBinariesPublic_ByUserId(userId:string,  queryParams?: {
             limit?: number,
             offset?: number,
             tags?: string[]
    })

// return Promise<ListPlayerBinaryRecordsResponse>

</script>
```

## POST /cloudsave/v1/namespaces/{namespace}/users/bulk/records/{key}/public

```
<script src="https://unpkg.com/@accelbyte/sdk/dist/global/index.global.js"></script>
<script src="https://unpkg.com/@accelbyte/sdk-cloudsave/dist/global/index.global.js"></script>
  
<script>

const sdk = AccelByteSDK.AccelByte.SDK({
  coreConfig: {
    baseURL: '__AGS_DOMAIN__',
    clientId: '__IAM_CLIENT_ID__',
    namespace: '__NAMESPACE__',
    redirectURI: '__IAM_CLIENT_REDIRECT_URI__'
  }
})

AccelByteSDK_Cloudsave.PublicPlayerRecordApi(sdk, { axiosConfig: { request: { headers: { Authorization: 'Bearer {access_token}' } } } })
  .fetchPublicBulkUser_ByKey(key:string, data: {
             BulkUserIDsRequest
    })

// return Promise<BulkGetPlayerRecordResponse>

</script>
```

## POST /cloudsave/v1/namespaces/{namespace}/users/bulk/binaries/{key}/public

```
<script src="https://unpkg.com/@accelbyte/sdk/dist/global/index.global.js"></script>
<script src="https://unpkg.com/@accelbyte/sdk-cloudsave/dist/global/index.global.js"></script>
  
<script>

const sdk = AccelByteSDK.AccelByte.SDK({
  coreConfig: {
    baseURL: '__AGS_DOMAIN__',
    clientId: '__IAM_CLIENT_ID__',
    namespace: '__NAMESPACE__',
    redirectURI: '__IAM_CLIENT_REDIRECT_URI__'
  }
})

AccelByteSDK_Cloudsave.PublicPlayerBinaryRecordApi(sdk, { axiosConfig: { request: { headers: { Authorization: 'Bearer {access_token}' } } } })
  .fetchPublicBulkUser_ByKey(key:string, data: {
             BulkUserIDsRequest
    })

// return Promise<BulkGetPlayerBinaryRecordResponse>

</script>
```

## POST /cloudsave/v1/namespaces/{namespace}/users/{userId}/records/public/bulk

```
<script src="https://unpkg.com/@accelbyte/sdk/dist/global/index.global.js"></script>
<script src="https://unpkg.com/@accelbyte/sdk-cloudsave/dist/global/index.global.js"></script>
  
<script>

const sdk = AccelByteSDK.AccelByte.SDK({
  coreConfig: {
    baseURL: '__AGS_DOMAIN__',
    clientId: '__IAM_CLIENT_ID__',
    namespace: '__NAMESPACE__',
    redirectURI: '__IAM_CLIENT_REDIRECT_URI__'
  }
})

AccelByteSDK_Cloudsave.PublicPlayerRecordApi(sdk, { axiosConfig: { request: { headers: { Authorization: 'Bearer {access_token}' } } } })
  .fetchRecordBulk_ByUserId(userId:string, data: {
             BulkGetPlayerRecordsRequest
    })

// return Promise<BulkGetPlayerRecordResponse>

</script>
```

## POST /cloudsave/v1/namespaces/{namespace}/users/{userId}/binaries/public/bulk

```
<script src="https://unpkg.com/@accelbyte/sdk/dist/global/index.global.js"></script>
<script src="https://unpkg.com/@accelbyte/sdk-cloudsave/dist/global/index.global.js"></script>
  
<script>

const sdk = AccelByteSDK.AccelByte.SDK({
  coreConfig: {
    baseURL: '__AGS_DOMAIN__',
    clientId: '__IAM_CLIENT_ID__',
    namespace: '__NAMESPACE__',
    redirectURI: '__IAM_CLIENT_REDIRECT_URI__'
  }
})

AccelByteSDK_Cloudsave.PublicPlayerBinaryRecordApi(sdk, { axiosConfig: { request: { headers: { Authorization: 'Bearer {access_token}' } } } })
  .fetchBinaryBulk_ByUserId(userId:string, data: {
             BulkGetPlayerRecordsRequest
    })

// return Promise<BulkGetPlayerBinaryRecordResponse>

</script>
```

## GET /cloudsave/v1/namespaces/{namespace}/users/{userId}/records/{key}/public

```
<script src="https://unpkg.com/@accelbyte/sdk/dist/global/index.global.js"></script>
<script src="https://unpkg.com/@accelbyte/sdk-cloudsave/dist/global/index.global.js"></script>
  
<script>

const sdk = AccelByteSDK.AccelByte.SDK({
  coreConfig: {
    baseURL: '__AGS_DOMAIN__',
    clientId: '__IAM_CLIENT_ID__',
    namespace: '__NAMESPACE__',
    redirectURI: '__IAM_CLIENT_REDIRECT_URI__'
  }
})

AccelByteSDK_Cloudsave.PublicPlayerRecordApi(sdk, { axiosConfig: { request: { headers: { Authorization: 'Bearer {access_token}' } } } })
  .getPublic_ByUserId_ByKey(userId:string, key:string)

// return Promise<PlayerRecordResponse>

</script>
```

## POST /cloudsave/v1/namespaces/{namespace}/users/{userId}/records/{key}/public

```
<script src="https://unpkg.com/@accelbyte/sdk/dist/global/index.global.js"></script>
<script src="https://unpkg.com/@accelbyte/sdk-cloudsave/dist/global/index.global.js"></script>
  
<script>

const sdk = AccelByteSDK.AccelByte.SDK({
  coreConfig: {
    baseURL: '__AGS_DOMAIN__',
    clientId: '__IAM_CLIENT_ID__',
    namespace: '__NAMESPACE__',
    redirectURI: '__IAM_CLIENT_REDIRECT_URI__'
  }
})

AccelByteSDK_Cloudsave.PublicPlayerRecordApi(sdk, { axiosConfig: { request: { headers: { Authorization: 'Bearer {access_token}' } } } })
  .createPublic_ByUserId_ByKey(userId:string, key:string, data: {
             PlayerRecordRequest
    })

// return Promise<PlayerRecordResponse>

</script>
```

## PUT /cloudsave/v1/namespaces/{namespace}/users/{userId}/records/{key}/public

```
<script src="https://unpkg.com/@accelbyte/sdk/dist/global/index.global.js"></script>
<script src="https://unpkg.com/@accelbyte/sdk-cloudsave/dist/global/index.global.js"></script>
  
<script>

const sdk = AccelByteSDK.AccelByte.SDK({
  coreConfig: {
    baseURL: '__AGS_DOMAIN__',
    clientId: '__IAM_CLIENT_ID__',
    namespace: '__NAMESPACE__',
    redirectURI: '__IAM_CLIENT_REDIRECT_URI__'
  }
})

AccelByteSDK_Cloudsave.PublicPlayerRecordApi(sdk, { axiosConfig: { request: { headers: { Authorization: 'Bearer {access_token}' } } } })
  .updatePublic_ByUserId_ByKey(userId:string, key:string, data: {
             PlayerRecordRequest
    })

// return Promise<PlayerRecordResponse>

</script>
```

## GET /cloudsave/v1/namespaces/{namespace}/users/{userId}/binaries/{key}/public

```
<script src="https://unpkg.com/@accelbyte/sdk/dist/global/index.global.js"></script>
<script src="https://unpkg.com/@accelbyte/sdk-cloudsave/dist/global/index.global.js"></script>
  
<script>

const sdk = AccelByteSDK.AccelByte.SDK({
  coreConfig: {
    baseURL: '__AGS_DOMAIN__',
    clientId: '__IAM_CLIENT_ID__',
    namespace: '__NAMESPACE__',
    redirectURI: '__IAM_CLIENT_REDIRECT_URI__'
  }
})

AccelByteSDK_Cloudsave.PublicPlayerBinaryRecordApi(sdk, { axiosConfig: { request: { headers: { Authorization: 'Bearer {access_token}' } } } })
  .getPublic_ByUserId_ByKey(userId:string, key:string)

// return Promise<PlayerBinaryRecordResponse>

</script>
```

## PUT /cloudsave/v1/namespaces/{namespace}/users/{userId}/binaries/{key}/metadata

```
<script src="https://unpkg.com/@accelbyte/sdk/dist/global/index.global.js"></script>
<script src="https://unpkg.com/@accelbyte/sdk-cloudsave/dist/global/index.global.js"></script>
  
<script>

const sdk = AccelByteSDK.AccelByte.SDK({
  coreConfig: {
    baseURL: '__AGS_DOMAIN__',
    clientId: '__IAM_CLIENT_ID__',
    namespace: '__NAMESPACE__',
    redirectURI: '__IAM_CLIENT_REDIRECT_URI__'
  }
})

AccelByteSDK_Cloudsave.PublicPlayerBinaryRecordApi(sdk, { axiosConfig: { request: { headers: { Authorization: 'Bearer {access_token}' } } } })
  .updateMetadata_ByUserId_ByKey(userId:string, key:string, data: {
             PlayerBinaryRecordMetadataPublicRequest
    })

// return Promise<PlayerBinaryRecordResponse>

</script>
```

## POST /cloudsave/v1/namespaces/{namespace}/users/{userId}/binaries/{key}/presigned

```
<script src="https://unpkg.com/@accelbyte/sdk/dist/global/index.global.js"></script>
<script src="https://unpkg.com/@accelbyte/sdk-cloudsave/dist/global/index.global.js"></script>
  
<script>

const sdk = AccelByteSDK.AccelByte.SDK({
  coreConfig: {
    baseURL: '__AGS_DOMAIN__',
    clientId: '__IAM_CLIENT_ID__',
    namespace: '__NAMESPACE__',
    redirectURI: '__IAM_CLIENT_REDIRECT_URI__'
  }
})

AccelByteSDK_Cloudsave.PublicPlayerBinaryRecordApi(sdk, { axiosConfig: { request: { headers: { Authorization: 'Bearer {access_token}' } } } })
  .createPresigned_ByUserId_ByKey(userId:string, key:string, data: {
             UploadBinaryRecordRequest
    })

// return Promise<UploadBinaryRecordResponse>

</script>
```

## PUT /cloudsave/v1/namespaces/{namespace}/users/{userId}/concurrent/records/{key}

```
<script src="https://unpkg.com/@accelbyte/sdk/dist/global/index.global.js"></script>
<script src="https://unpkg.com/@accelbyte/sdk-cloudsave/dist/global/index.global.js"></script>
  
<script>

const sdk = AccelByteSDK.AccelByte.SDK({
  coreConfig: {
    baseURL: '__AGS_DOMAIN__',
    clientId: '__IAM_CLIENT_ID__',
    namespace: '__NAMESPACE__',
    redirectURI: '__IAM_CLIENT_REDIRECT_URI__'
  }
})

AccelByteSDK_Cloudsave.ConcurrentRecordApi(sdk, { axiosConfig: { request: { headers: { Authorization: 'Bearer {access_token}' } } } })
  .updateConcurrentRecord_ByUserId_ByKey(userId:string, key:string, data: {
             ConcurrentRecordRequest,
             queryParams?: {
             responseBody?: boolean | null
    })

// return Promise<PlayerRecordConcurrentUpdateResponse>

</script>
```

## PUT /cloudsave/v1/namespaces/{namespace}/users/{userId}/concurrent/records/{key}/public

```
<script src="https://unpkg.com/@accelbyte/sdk/dist/global/index.global.js"></script>
<script src="https://unpkg.com/@accelbyte/sdk-cloudsave/dist/global/index.global.js"></script>
  
<script>

const sdk = AccelByteSDK.AccelByte.SDK({
  coreConfig: {
    baseURL: '__AGS_DOMAIN__',
    clientId: '__IAM_CLIENT_ID__',
    namespace: '__NAMESPACE__',
    redirectURI: '__IAM_CLIENT_REDIRECT_URI__'
  }
})

AccelByteSDK_Cloudsave.ConcurrentRecordApi(sdk, { axiosConfig: { request: { headers: { Authorization: 'Bearer {access_token}' } } } })
  .updatePublicConcurrent_ByUserId_ByKey(userId:string, key:string, data: {
             ConcurrentRecordRequest,
             queryParams?: {
             responseBody?: boolean | null
    })

// return Promise<PlayerRecordConcurrentUpdateResponse>

</script>
```

## GET /cloudsave/v1/admin/namespaces/{namespace}/tags

```
<script src="https://unpkg.com/@accelbyte/sdk/dist/global/index.global.js"></script>
<script src="https://unpkg.com/@accelbyte/sdk-cloudsave/dist/global/index.global.js"></script>
  
<script>

const sdk = AccelByteSDK.AccelByte.SDK({
  coreConfig: {
    baseURL: '__AGS_DOMAIN__',
    clientId: '__IAM_CLIENT_ID__',
    namespace: '__NAMESPACE__',
    redirectURI: '__IAM_CLIENT_REDIRECT_URI__'
  }
})

AccelByteSDK_Cloudsave.TagsAdminApi(sdk, { axiosConfig: { request: { headers: { Authorization: 'Bearer {access_token}' } } } })
  .getTags( queryParams?: {
             limit?: number,
             offset?: number
    })

// return Promise<ListTagsResponse>

</script>
```

## POST /cloudsave/v1/admin/namespaces/{namespace}/tags

```
<script src="https://unpkg.com/@accelbyte/sdk/dist/global/index.global.js"></script>
<script src="https://unpkg.com/@accelbyte/sdk-cloudsave/dist/global/index.global.js"></script>
  
<script>

const sdk = AccelByteSDK.AccelByte.SDK({
  coreConfig: {
    baseURL: '__AGS_DOMAIN__',
    clientId: '__IAM_CLIENT_ID__',
    namespace: '__NAMESPACE__',
    redirectURI: '__IAM_CLIENT_REDIRECT_URI__'
  }
})

AccelByteSDK_Cloudsave.TagsAdminApi(sdk, { axiosConfig: { request: { headers: { Authorization: 'Bearer {access_token}' } } } })
  .createTag(data: {
             TagRequest
    })

// return Promise

</script>
```

## DELETE /cloudsave/v1/admin/namespaces/{namespace}/plugins

```
<script src="https://unpkg.com/@accelbyte/sdk/dist/global/index.global.js"></script>
<script src="https://unpkg.com/@accelbyte/sdk-cloudsave/dist/global/index.global.js"></script>
  
<script>

const sdk = AccelByteSDK.AccelByte.SDK({
  coreConfig: {
    baseURL: '__AGS_DOMAIN__',
    clientId: '__IAM_CLIENT_ID__',
    namespace: '__NAMESPACE__',
    redirectURI: '__IAM_CLIENT_REDIRECT_URI__'
  }
})

AccelByteSDK_Cloudsave.PluginConfigAdminApi(sdk, { axiosConfig: { request: { headers: { Authorization: 'Bearer {access_token}' } } } })
  .deletePlugin()

// return Promise

</script>
```

## GET /cloudsave/v1/admin/namespaces/{namespace}/plugins

```
<script src="https://unpkg.com/@accelbyte/sdk/dist/global/index.global.js"></script>
<script src="https://unpkg.com/@accelbyte/sdk-cloudsave/dist/global/index.global.js"></script>
  
<script>

const sdk = AccelByteSDK.AccelByte.SDK({
  coreConfig: {
    baseURL: '__AGS_DOMAIN__',
    clientId: '__IAM_CLIENT_ID__',
    namespace: '__NAMESPACE__',
    redirectURI: '__IAM_CLIENT_REDIRECT_URI__'
  }
})

AccelByteSDK_Cloudsave.PluginConfigAdminApi(sdk, { axiosConfig: { request: { headers: { Authorization: 'Bearer {access_token}' } } } })
  .getPlugins()

// return Promise<PluginResponse>

</script>
```

## PATCH /cloudsave/v1/admin/namespaces/{namespace}/plugins

```
<script src="https://unpkg.com/@accelbyte/sdk/dist/global/index.global.js"></script>
<script src="https://unpkg.com/@accelbyte/sdk-cloudsave/dist/global/index.global.js"></script>
  
<script>

const sdk = AccelByteSDK.AccelByte.SDK({
  coreConfig: {
    baseURL: '__AGS_DOMAIN__',
    clientId: '__IAM_CLIENT_ID__',
    namespace: '__NAMESPACE__',
    redirectURI: '__IAM_CLIENT_REDIRECT_URI__'
  }
})

AccelByteSDK_Cloudsave.PluginConfigAdminApi(sdk, { axiosConfig: { request: { headers: { Authorization: 'Bearer {access_token}' } } } })
  .patchPlugin(data: {
             PluginRequest
    })

// return Promise<PluginResponse>

</script>
```

## POST /cloudsave/v1/admin/namespaces/{namespace}/plugins

```
<script src="https://unpkg.com/@accelbyte/sdk/dist/global/index.global.js"></script>
<script src="https://unpkg.com/@accelbyte/sdk-cloudsave/dist/global/index.global.js"></script>
  
<script>

const sdk = AccelByteSDK.AccelByte.SDK({
  coreConfig: {
    baseURL: '__AGS_DOMAIN__',
    clientId: '__IAM_CLIENT_ID__',
    namespace: '__NAMESPACE__',
    redirectURI: '__IAM_CLIENT_REDIRECT_URI__'
  }
})

AccelByteSDK_Cloudsave.PluginConfigAdminApi(sdk, { axiosConfig: { request: { headers: { Authorization: 'Bearer {access_token}' } } } })
  .createPlugin(data: {
             PluginRequest
    })

// return Promise<PluginResponse>

</script>
```

## GET /cloudsave/v1/admin/namespaces/{namespace}/records

```
<script src="https://unpkg.com/@accelbyte/sdk/dist/global/index.global.js"></script>
<script src="https://unpkg.com/@accelbyte/sdk-cloudsave/dist/global/index.global.js"></script>
  
<script>

const sdk = AccelByteSDK.AccelByte.SDK({
  coreConfig: {
    baseURL: '__AGS_DOMAIN__',
    clientId: '__IAM_CLIENT_ID__',
    namespace: '__NAMESPACE__',
    redirectURI: '__IAM_CLIENT_REDIRECT_URI__'
  }
})

AccelByteSDK_Cloudsave.GameRecordAdminApi(sdk, { axiosConfig: { request: { headers: { Authorization: 'Bearer {access_token}' } } } })
  .getRecords( queryParams: {
             limit: number,
             offset: number,
             query?: string | null,
             tags?: string[]
    })

// return Promise<ListGameRecordKeysResponse>

</script>
```

## GET /cloudsave/v1/admin/namespaces/{namespace}/binaries

```
<script src="https://unpkg.com/@accelbyte/sdk/dist/global/index.global.js"></script>
<script src="https://unpkg.com/@accelbyte/sdk-cloudsave/dist/global/index.global.js"></script>
  
<script>

const sdk = AccelByteSDK.AccelByte.SDK({
  coreConfig: {
    baseURL: '__AGS_DOMAIN__',
    clientId: '__IAM_CLIENT_ID__',
    namespace: '__NAMESPACE__',
    redirectURI: '__IAM_CLIENT_REDIRECT_URI__'
  }
})

AccelByteSDK_Cloudsave.GameBinaryRecordAdminApi(sdk, { axiosConfig: { request: { headers: { Authorization: 'Bearer {access_token}' } } } })
  .getBinaries( queryParams?: {
             limit?: number,
             offset?: number,
             query?: string | null,
             tags?: string[]
    })

// return Promise<ListGameBinaryRecordsAdminResponse>

</script>
```

## POST /cloudsave/v1/admin/namespaces/{namespace}/binaries

```
<script src="https://unpkg.com/@accelbyte/sdk/dist/global/index.global.js"></script>
<script src="https://unpkg.com/@accelbyte/sdk-cloudsave/dist/global/index.global.js"></script>
  
<script>

const sdk = AccelByteSDK.AccelByte.SDK({
  coreConfig: {
    baseURL: '__AGS_DOMAIN__',
    clientId: '__IAM_CLIENT_ID__',
    namespace: '__NAMESPACE__',
    redirectURI: '__IAM_CLIENT_REDIRECT_URI__'
  }
})

AccelByteSDK_Cloudsave.GameBinaryRecordAdminApi(sdk, { axiosConfig: { request: { headers: { Authorization: 'Bearer {access_token}' } } } })
  .createBinary(data: {
             GameBinaryRecordCreate
    })

// return Promise<UploadBinaryRecordResponse>

</script>
```

## DELETE /cloudsave/v1/admin/namespaces/{namespace}/tags/{tag}

```
<script src="https://unpkg.com/@accelbyte/sdk/dist/global/index.global.js"></script>
<script src="https://unpkg.com/@accelbyte/sdk-cloudsave/dist/global/index.global.js"></script>
  
<script>

const sdk = AccelByteSDK.AccelByte.SDK({
  coreConfig: {
    baseURL: '__AGS_DOMAIN__',
    clientId: '__IAM_CLIENT_ID__',
    namespace: '__NAMESPACE__',
    redirectURI: '__IAM_CLIENT_REDIRECT_URI__'
  }
})

AccelByteSDK_Cloudsave.TagsAdminApi(sdk, { axiosConfig: { request: { headers: { Authorization: 'Bearer {access_token}' } } } })
  .deleteTag_ByTag(tag:string)

// return Promise

</script>
```

## GET /cloudsave/v1/admin/namespaces/{namespace}/adminrecords

```
<script src="https://unpkg.com/@accelbyte/sdk/dist/global/index.global.js"></script>
<script src="https://unpkg.com/@accelbyte/sdk-cloudsave/dist/global/index.global.js"></script>
  
<script>

const sdk = AccelByteSDK.AccelByte.SDK({
  coreConfig: {
    baseURL: '__AGS_DOMAIN__',
    clientId: '__IAM_CLIENT_ID__',
    namespace: '__NAMESPACE__',
    redirectURI: '__IAM_CLIENT_REDIRECT_URI__'
  }
})

AccelByteSDK_Cloudsave.RecordAdminApi(sdk, { axiosConfig: { request: { headers: { Authorization: 'Bearer {access_token}' } } } })
  .getAdminrecords( queryParams?: {
             limit?: number,
             offset?: number,
             query?: string | null,
             tags?: string[]
    })

// return Promise<ListAdminGameRecordKeysResponse>

</script>
```

## DELETE /cloudsave/v1/admin/namespaces/{namespace}/records/{key}

```
<script src="https://unpkg.com/@accelbyte/sdk/dist/global/index.global.js"></script>
<script src="https://unpkg.com/@accelbyte/sdk-cloudsave/dist/global/index.global.js"></script>
  
<script>

const sdk = AccelByteSDK.AccelByte.SDK({
  coreConfig: {
    baseURL: '__AGS_DOMAIN__',
    clientId: '__IAM_CLIENT_ID__',
    namespace: '__NAMESPACE__',
    redirectURI: '__IAM_CLIENT_REDIRECT_URI__'
  }
})

AccelByteSDK_Cloudsave.GameRecordAdminApi(sdk, { axiosConfig: { request: { headers: { Authorization: 'Bearer {access_token}' } } } })
  .deleteRecord_ByKey(key:string)

// return Promise

</script>
```

## GET /cloudsave/v1/admin/namespaces/{namespace}/records/{key}

```
<script src="https://unpkg.com/@accelbyte/sdk/dist/global/index.global.js"></script>
<script src="https://unpkg.com/@accelbyte/sdk-cloudsave/dist/global/index.global.js"></script>
  
<script>

const sdk = AccelByteSDK.AccelByte.SDK({
  coreConfig: {
    baseURL: '__AGS_DOMAIN__',
    clientId: '__IAM_CLIENT_ID__',
    namespace: '__NAMESPACE__',
    redirectURI: '__IAM_CLIENT_REDIRECT_URI__'
  }
})

AccelByteSDK_Cloudsave.GameRecordAdminApi(sdk, { axiosConfig: { request: { headers: { Authorization: 'Bearer {access_token}' } } } })
  .getRecord_ByKey(key:string)

// return Promise<GameRecordAdminResponse>

</script>
```

## POST /cloudsave/v1/admin/namespaces/{namespace}/records/{key}

```
<script src="https://unpkg.com/@accelbyte/sdk/dist/global/index.global.js"></script>
<script src="https://unpkg.com/@accelbyte/sdk-cloudsave/dist/global/index.global.js"></script>
  
<script>

const sdk = AccelByteSDK.AccelByte.SDK({
  coreConfig: {
    baseURL: '__AGS_DOMAIN__',
    clientId: '__IAM_CLIENT_ID__',
    namespace: '__NAMESPACE__',
    redirectURI: '__IAM_CLIENT_REDIRECT_URI__'
  }
})

AccelByteSDK_Cloudsave.GameRecordAdminApi(sdk, { axiosConfig: { request: { headers: { Authorization: 'Bearer {access_token}' } } } })
  .createRecord_ByKey(key:string, data: {
             GameRecordRequest
    })

// return Promise<GameRecordAdminResponse>

</script>
```

## PUT /cloudsave/v1/admin/namespaces/{namespace}/records/{key}

```
<script src="https://unpkg.com/@accelbyte/sdk/dist/global/index.global.js"></script>
<script src="https://unpkg.com/@accelbyte/sdk-cloudsave/dist/global/index.global.js"></script>
  
<script>

const sdk = AccelByteSDK.AccelByte.SDK({
  coreConfig: {
    baseURL: '__AGS_DOMAIN__',
    clientId: '__IAM_CLIENT_ID__',
    namespace: '__NAMESPACE__',
    redirectURI: '__IAM_CLIENT_REDIRECT_URI__'
  }
})

AccelByteSDK_Cloudsave.GameRecordAdminApi(sdk, { axiosConfig: { request: { headers: { Authorization: 'Bearer {access_token}' } } } })
  .updateRecord_ByKey(key:string, data: {
             GameRecordRequest
    })

// return Promise<GameRecordAdminResponse>

</script>
```

## GET /cloudsave/v1/admin/namespaces/{namespace}/users/records

```
<script src="https://unpkg.com/@accelbyte/sdk/dist/global/index.global.js"></script>
<script src="https://unpkg.com/@accelbyte/sdk-cloudsave/dist/global/index.global.js"></script>
  
<script>

const sdk = AccelByteSDK.AccelByte.SDK({
  coreConfig: {
    baseURL: '__AGS_DOMAIN__',
    clientId: '__IAM_CLIENT_ID__',
    namespace: '__NAMESPACE__',
    redirectURI: '__IAM_CLIENT_REDIRECT_URI__'
  }
})

AccelByteSDK_Cloudsave.PlayerRecordAdminApi(sdk, { axiosConfig: { request: { headers: { Authorization: 'Bearer {access_token}' } } } })
  .getUsersRecords( queryParams?: {
             limit?: number,
             offset?: number,
             query?: string | null
    })

// return Promise<ListPlayerRecordKeysResponse>

</script>
```

## DELETE /cloudsave/v1/admin/namespaces/{namespace}/binaries/{key}

```
<script src="https://unpkg.com/@accelbyte/sdk/dist/global/index.global.js"></script>
<script src="https://unpkg.com/@accelbyte/sdk-cloudsave/dist/global/index.global.js"></script>
  
<script>

const sdk = AccelByteSDK.AccelByte.SDK({
  coreConfig: {
    baseURL: '__AGS_DOMAIN__',
    clientId: '__IAM_CLIENT_ID__',
    namespace: '__NAMESPACE__',
    redirectURI: '__IAM_CLIENT_REDIRECT_URI__'
  }
})

AccelByteSDK_Cloudsave.GameBinaryRecordAdminApi(sdk, { axiosConfig: { request: { headers: { Authorization: 'Bearer {access_token}' } } } })
  .deleteBinary_ByKey(key:string)

// return Promise

</script>
```

## GET /cloudsave/v1/admin/namespaces/{namespace}/binaries/{key}

```
<script src="https://unpkg.com/@accelbyte/sdk/dist/global/index.global.js"></script>
<script src="https://unpkg.com/@accelbyte/sdk-cloudsave/dist/global/index.global.js"></script>
  
<script>

const sdk = AccelByteSDK.AccelByte.SDK({
  coreConfig: {
    baseURL: '__AGS_DOMAIN__',
    clientId: '__IAM_CLIENT_ID__',
    namespace: '__NAMESPACE__',
    redirectURI: '__IAM_CLIENT_REDIRECT_URI__'
  }
})

AccelByteSDK_Cloudsave.GameBinaryRecordAdminApi(sdk, { axiosConfig: { request: { headers: { Authorization: 'Bearer {access_token}' } } } })
  .getBinary_ByKey(key:string)

// return Promise<GameBinaryRecordAdminResponse>

</script>
```

## PUT /cloudsave/v1/admin/namespaces/{namespace}/binaries/{key}

```
<script src="https://unpkg.com/@accelbyte/sdk/dist/global/index.global.js"></script>
<script src="https://unpkg.com/@accelbyte/sdk-cloudsave/dist/global/index.global.js"></script>
  
<script>

const sdk = AccelByteSDK.AccelByte.SDK({
  coreConfig: {
    baseURL: '__AGS_DOMAIN__',
    clientId: '__IAM_CLIENT_ID__',
    namespace: '__NAMESPACE__',
    redirectURI: '__IAM_CLIENT_REDIRECT_URI__'
  }
})

AccelByteSDK_Cloudsave.GameBinaryRecordAdminApi(sdk, { axiosConfig: { request: { headers: { Authorization: 'Bearer {access_token}' } } } })
  .updateBinary_ByKey(key:string, data: {
             BinaryRecordRequest
    })

// return Promise<GameBinaryRecordAdminResponse>

</script>
```

## POST /cloudsave/v1/admin/namespaces/{namespace}/adminrecords/bulk

```
<script src="https://unpkg.com/@accelbyte/sdk/dist/global/index.global.js"></script>
<script src="https://unpkg.com/@accelbyte/sdk-cloudsave/dist/global/index.global.js"></script>
  
<script>

const sdk = AccelByteSDK.AccelByte.SDK({
  coreConfig: {
    baseURL: '__AGS_DOMAIN__',
    clientId: '__IAM_CLIENT_ID__',
    namespace: '__NAMESPACE__',
    redirectURI: '__IAM_CLIENT_REDIRECT_URI__'
  }
})

AccelByteSDK_Cloudsave.RecordAdminApi(sdk, { axiosConfig: { request: { headers: { Authorization: 'Bearer {access_token}' } } } })
  .fetchAdminrecordBulk(data: {
             BulkGetAdminGameRecordRequest
    })

// return Promise<BulkGetAdminGameRecordResponse>

</script>
```

## DELETE /cloudsave/v1/admin/namespaces/{namespace}/records/{key}/ttl

```
<script src="https://unpkg.com/@accelbyte/sdk/dist/global/index.global.js"></script>
<script src="https://unpkg.com/@accelbyte/sdk-cloudsave/dist/global/index.global.js"></script>
  
<script>

const sdk = AccelByteSDK.AccelByte.SDK({
  coreConfig: {
    baseURL: '__AGS_DOMAIN__',
    clientId: '__IAM_CLIENT_ID__',
    namespace: '__NAMESPACE__',
    redirectURI: '__IAM_CLIENT_REDIRECT_URI__'
  }
})

AccelByteSDK_Cloudsave.TtlConfigAdminApi(sdk, { axiosConfig: { request: { headers: { Authorization: 'Bearer {access_token}' } } } })
  .deleteTtl_ByKey(key:string)

// return Promise

</script>
```

## DELETE /cloudsave/v1/admin/namespaces/{namespace}/adminrecords/{key}

```
<script src="https://unpkg.com/@accelbyte/sdk/dist/global/index.global.js"></script>
<script src="https://unpkg.com/@accelbyte/sdk-cloudsave/dist/global/index.global.js"></script>
  
<script>

const sdk = AccelByteSDK.AccelByte.SDK({
  coreConfig: {
    baseURL: '__AGS_DOMAIN__',
    clientId: '__IAM_CLIENT_ID__',
    namespace: '__NAMESPACE__',
    redirectURI: '__IAM_CLIENT_REDIRECT_URI__'
  }
})

AccelByteSDK_Cloudsave.RecordAdminApi(sdk, { axiosConfig: { request: { headers: { Authorization: 'Bearer {access_token}' } } } })
  .deleteAdminrecord_ByKey(key:string)

// return Promise

</script>
```

## GET /cloudsave/v1/admin/namespaces/{namespace}/adminrecords/{key}

```
<script src="https://unpkg.com/@accelbyte/sdk/dist/global/index.global.js"></script>
<script src="https://unpkg.com/@accelbyte/sdk-cloudsave/dist/global/index.global.js"></script>
  
<script>

const sdk = AccelByteSDK.AccelByte.SDK({
  coreConfig: {
    baseURL: '__AGS_DOMAIN__',
    clientId: '__IAM_CLIENT_ID__',
    namespace: '__NAMESPACE__',
    redirectURI: '__IAM_CLIENT_REDIRECT_URI__'
  }
})

AccelByteSDK_Cloudsave.RecordAdminApi(sdk, { axiosConfig: { request: { headers: { Authorization: 'Bearer {access_token}' } } } })
  .getAdminrecord_ByKey(key:string)

// return Promise<AdminGameRecordResponse>

</script>
```

## POST /cloudsave/v1/admin/namespaces/{namespace}/adminrecords/{key}

```
<script src="https://unpkg.com/@accelbyte/sdk/dist/global/index.global.js"></script>
<script src="https://unpkg.com/@accelbyte/sdk-cloudsave/dist/global/index.global.js"></script>
  
<script>

const sdk = AccelByteSDK.AccelByte.SDK({
  coreConfig: {
    baseURL: '__AGS_DOMAIN__',
    clientId: '__IAM_CLIENT_ID__',
    namespace: '__NAMESPACE__',
    redirectURI: '__IAM_CLIENT_REDIRECT_URI__'
  }
})

AccelByteSDK_Cloudsave.RecordAdminApi(sdk, { axiosConfig: { request: { headers: { Authorization: 'Bearer {access_token}' } } } })
  .createAdminrecord_ByKey(key:string, data: {
             AdminGameRecordRequest
    })

// return Promise<AdminGameRecordResponse>

</script>
```

## PUT /cloudsave/v1/admin/namespaces/{namespace}/adminrecords/{key}

```
<script src="https://unpkg.com/@accelbyte/sdk/dist/global/index.global.js"></script>
<script src="https://unpkg.com/@accelbyte/sdk-cloudsave/dist/global/index.global.js"></script>
  
<script>

const sdk = AccelByteSDK.AccelByte.SDK({
  coreConfig: {
    baseURL: '__AGS_DOMAIN__',
    clientId: '__IAM_CLIENT_ID__',
    namespace: '__NAMESPACE__',
    redirectURI: '__IAM_CLIENT_REDIRECT_URI__'
  }
})

AccelByteSDK_Cloudsave.RecordAdminApi(sdk, { axiosConfig: { request: { headers: { Authorization: 'Bearer {access_token}' } } } })
  .updateAdminrecord_ByKey(key:string, data: {
             AdminGameRecordRequest
    })

// return Promise<AdminGameRecordResponse>

</script>
```

## DELETE /cloudsave/v1/admin/namespaces/{namespace}/binaries/{key}/ttl

```
<script src="https://unpkg.com/@accelbyte/sdk/dist/global/index.global.js"></script>
<script src="https://unpkg.com/@accelbyte/sdk-cloudsave/dist/global/index.global.js"></script>
  
<script>

const sdk = AccelByteSDK.AccelByte.SDK({
  coreConfig: {
    baseURL: '__AGS_DOMAIN__',
    clientId: '__IAM_CLIENT_ID__',
    namespace: '__NAMESPACE__',
    redirectURI: '__IAM_CLIENT_REDIRECT_URI__'
  }
})

AccelByteSDK_Cloudsave.TtlConfigAdminApi(sdk, { axiosConfig: { request: { headers: { Authorization: 'Bearer {access_token}' } } } })
  .deleteTtl_ByKey_ByNS(key:string)

// return Promise

</script>
```

## DELETE /cloudsave/v1/admin/namespaces/{namespace}/adminrecords/{key}/ttl

```
<script src="https://unpkg.com/@accelbyte/sdk/dist/global/index.global.js"></script>
<script src="https://unpkg.com/@accelbyte/sdk-cloudsave/dist/global/index.global.js"></script>
  
<script>

const sdk = AccelByteSDK.AccelByte.SDK({
  coreConfig: {
    baseURL: '__AGS_DOMAIN__',
    clientId: '__IAM_CLIENT_ID__',
    namespace: '__NAMESPACE__',
    redirectURI: '__IAM_CLIENT_REDIRECT_URI__'
  }
})

AccelByteSDK_Cloudsave.TtlConfigAdminApi(sdk, { axiosConfig: { request: { headers: { Authorization: 'Bearer {access_token}' } } } })
  .deleteTtl_ByKey_ByNS_admin(key:string)

// return Promise

</script>
```

## GET /cloudsave/v1/admin/namespaces/{namespace}/users/{userId}/records

```
<script src="https://unpkg.com/@accelbyte/sdk/dist/global/index.global.js"></script>
<script src="https://unpkg.com/@accelbyte/sdk-cloudsave/dist/global/index.global.js"></script>
  
<script>

const sdk = AccelByteSDK.AccelByte.SDK({
  coreConfig: {
    baseURL: '__AGS_DOMAIN__',
    clientId: '__IAM_CLIENT_ID__',
    namespace: '__NAMESPACE__',
    redirectURI: '__IAM_CLIENT_REDIRECT_URI__'
  }
})

AccelByteSDK_Cloudsave.PlayerRecordAdminApi(sdk, { axiosConfig: { request: { headers: { Authorization: 'Bearer {access_token}' } } } })
  .getRecords_ByUserId(userId:string,  queryParams?: {
             limit?: number,
             offset?: number,
             query?: string | null,
             tags?: string[]
    })

// return Promise<ListPlayerRecordKeysResponse>

</script>
```

## PUT /cloudsave/v1/admin/namespaces/{namespace}/binaries/{key}/metadata

```
<script src="https://unpkg.com/@accelbyte/sdk/dist/global/index.global.js"></script>
<script src="https://unpkg.com/@accelbyte/sdk-cloudsave/dist/global/index.global.js"></script>
  
<script>

const sdk = AccelByteSDK.AccelByte.SDK({
  coreConfig: {
    baseURL: '__AGS_DOMAIN__',
    clientId: '__IAM_CLIENT_ID__',
    namespace: '__NAMESPACE__',
    redirectURI: '__IAM_CLIENT_REDIRECT_URI__'
  }
})

AccelByteSDK_Cloudsave.GameBinaryRecordAdminApi(sdk, { axiosConfig: { request: { headers: { Authorization: 'Bearer {access_token}' } } } })
  .updateMetadata_ByKey(key:string, data: {
             GameBinaryRecordMetadataRequest
    })

// return Promise<GameBinaryRecordAdminResponse>

</script>
```

## GET /cloudsave/v1/admin/namespaces/{namespace}/users/{userId}/binaries

```
<script src="https://unpkg.com/@accelbyte/sdk/dist/global/index.global.js"></script>
<script src="https://unpkg.com/@accelbyte/sdk-cloudsave/dist/global/index.global.js"></script>
  
<script>

const sdk = AccelByteSDK.AccelByte.SDK({
  coreConfig: {
    baseURL: '__AGS_DOMAIN__',
    clientId: '__IAM_CLIENT_ID__',
    namespace: '__NAMESPACE__',
    redirectURI: '__IAM_CLIENT_REDIRECT_URI__'
  }
})

AccelByteSDK_Cloudsave.PlayerBinaryRecordAdminApi(sdk, { axiosConfig: { request: { headers: { Authorization: 'Bearer {access_token}' } } } })
  .getBinaries_ByUserId(userId:string,  queryParams?: {
             limit?: number,
             offset?: number,
             query?: string | null,
             tags?: string[]
    })

// return Promise<ListPlayerBinaryRecordsResponse>

</script>
```

## POST /cloudsave/v1/admin/namespaces/{namespace}/users/{userId}/binaries

```
<script src="https://unpkg.com/@accelbyte/sdk/dist/global/index.global.js"></script>
<script src="https://unpkg.com/@accelbyte/sdk-cloudsave/dist/global/index.global.js"></script>
  
<script>

const sdk = AccelByteSDK.AccelByte.SDK({
  coreConfig: {
    baseURL: '__AGS_DOMAIN__',
    clientId: '__IAM_CLIENT_ID__',
    namespace: '__NAMESPACE__',
    redirectURI: '__IAM_CLIENT_REDIRECT_URI__'
  }
})

AccelByteSDK_Cloudsave.PlayerBinaryRecordAdminApi(sdk, { axiosConfig: { request: { headers: { Authorization: 'Bearer {access_token}' } } } })
  .createBinary_ByUserId(userId:string, data: {
             PlayerBinaryRecordCreate
    })

// return Promise<UploadBinaryRecordResponse>

</script>
```

## POST /cloudsave/v1/admin/namespaces/{namespace}/users/bulk/records/size

```
<script src="https://unpkg.com/@accelbyte/sdk/dist/global/index.global.js"></script>
<script src="https://unpkg.com/@accelbyte/sdk-cloudsave/dist/global/index.global.js"></script>
  
<script>

const sdk = AccelByteSDK.AccelByte.SDK({
  coreConfig: {
    baseURL: '__AGS_DOMAIN__',
    clientId: '__IAM_CLIENT_ID__',
    namespace: '__NAMESPACE__',
    redirectURI: '__IAM_CLIENT_REDIRECT_URI__'
  }
})

AccelByteSDK_Cloudsave.PlayerRecordAdminApi(sdk, { axiosConfig: { request: { headers: { Authorization: 'Bearer {access_token}' } } } })
  .fetchUserBulkRecordSize(data: {
             BulkUserKeyRequest
    })

// return Promise<BulkGetPlayerRecordSizeResponse>

</script>
```

## POST /cloudsave/v1/admin/namespaces/{namespace}/binaries/{key}/presigned

```
<script src="https://unpkg.com/@accelbyte/sdk/dist/global/index.global.js"></script>
<script src="https://unpkg.com/@accelbyte/sdk-cloudsave/dist/global/index.global.js"></script>
  
<script>

const sdk = AccelByteSDK.AccelByte.SDK({
  coreConfig: {
    baseURL: '__AGS_DOMAIN__',
    clientId: '__IAM_CLIENT_ID__',
    namespace: '__NAMESPACE__',
    redirectURI: '__IAM_CLIENT_REDIRECT_URI__'
  }
})

AccelByteSDK_Cloudsave.GameBinaryRecordAdminApi(sdk, { axiosConfig: { request: { headers: { Authorization: 'Bearer {access_token}' } } } })
  .createPresigned_ByKey(key:string, data: {
             UploadBinaryRecordRequest
    })

// return Promise<UploadBinaryRecordResponse>

</script>
```

## PUT /cloudsave/v1/admin/namespaces/{namespace}/concurrent/records/{key}

```
<script src="https://unpkg.com/@accelbyte/sdk/dist/global/index.global.js"></script>
<script src="https://unpkg.com/@accelbyte/sdk-cloudsave/dist/global/index.global.js"></script>
  
<script>

const sdk = AccelByteSDK.AccelByte.SDK({
  coreConfig: {
    baseURL: '__AGS_DOMAIN__',
    clientId: '__IAM_CLIENT_ID__',
    namespace: '__NAMESPACE__',
    redirectURI: '__IAM_CLIENT_REDIRECT_URI__'
  }
})

AccelByteSDK_Cloudsave.ConcurrentRecordAdminApi(sdk, { axiosConfig: { request: { headers: { Authorization: 'Bearer {access_token}' } } } })
  .updateConcurrentRecord_ByKey(key:string, data: {
             AdminConcurrentRecordRequest
    })

// return Promise

</script>
```

## POST /cloudsave/v1/admin/namespaces/{namespace}/users/records/{key}/bulk

```
<script src="https://unpkg.com/@accelbyte/sdk/dist/global/index.global.js"></script>
<script src="https://unpkg.com/@accelbyte/sdk-cloudsave/dist/global/index.global.js"></script>
  
<script>

const sdk = AccelByteSDK.AccelByte.SDK({
  coreConfig: {
    baseURL: '__AGS_DOMAIN__',
    clientId: '__IAM_CLIENT_ID__',
    namespace: '__NAMESPACE__',
    redirectURI: '__IAM_CLIENT_REDIRECT_URI__'
  }
})

AccelByteSDK_Cloudsave.PlayerRecordAdminApi(sdk, { axiosConfig: { request: { headers: { Authorization: 'Bearer {access_token}' } } } })
  .fetchBulkUser_ByKey(key:string, data: {
             BulkUserIDsRequest
    })

// return Promise<BulkGetPlayerRecordResponse>

</script>
```

## PUT /cloudsave/v1/admin/namespaces/{namespace}/users/records/{key}/bulk

```
<script src="https://unpkg.com/@accelbyte/sdk/dist/global/index.global.js"></script>
<script src="https://unpkg.com/@accelbyte/sdk-cloudsave/dist/global/index.global.js"></script>
  
<script>

const sdk = AccelByteSDK.AccelByte.SDK({
  coreConfig: {
    baseURL: '__AGS_DOMAIN__',
    clientId: '__IAM_CLIENT_ID__',
    namespace: '__NAMESPACE__',
    redirectURI: '__IAM_CLIENT_REDIRECT_URI__'
  }
})

AccelByteSDK_Cloudsave.PlayerRecordAdminApi(sdk, { axiosConfig: { request: { headers: { Authorization: 'Bearer {access_token}' } } } })
  .updateBulkUser_ByKey(key:string, data: {
             BulkUpdatePlayerRecordsByKeyRequest
    })

// return Promise<BulkUpdatePlayerRecordByKeyResponseArray>

</script>
```

## GET /cloudsave/v1/admin/namespaces/{namespace}/users/{userId}/adminrecords

```
<script src="https://unpkg.com/@accelbyte/sdk/dist/global/index.global.js"></script>
<script src="https://unpkg.com/@accelbyte/sdk-cloudsave/dist/global/index.global.js"></script>
  
<script>

const sdk = AccelByteSDK.AccelByte.SDK({
  coreConfig: {
    baseURL: '__AGS_DOMAIN__',
    clientId: '__IAM_CLIENT_ID__',
    namespace: '__NAMESPACE__',
    redirectURI: '__IAM_CLIENT_REDIRECT_URI__'
  }
})

AccelByteSDK_Cloudsave.RecordAdminApi(sdk, { axiosConfig: { request: { headers: { Authorization: 'Bearer {access_token}' } } } })
  .getAdminrecords_ByUserId(userId:string,  queryParams?: {
             limit?: number,
             offset?: number,
             query?: string | null,
             tags?: string[]
    })

// return Promise<ListAdminPlayerRecordKeysResponse>

</script>
```

## POST /cloudsave/v1/admin/namespaces/{namespace}/users/{userId}/records/bulk

```
<script src="https://unpkg.com/@accelbyte/sdk/dist/global/index.global.js"></script>
<script src="https://unpkg.com/@accelbyte/sdk-cloudsave/dist/global/index.global.js"></script>
  
<script>

const sdk = AccelByteSDK.AccelByte.SDK({
  coreConfig: {
    baseURL: '__AGS_DOMAIN__',
    clientId: '__IAM_CLIENT_ID__',
    namespace: '__NAMESPACE__',
    redirectURI: '__IAM_CLIENT_REDIRECT_URI__'
  }
})

AccelByteSDK_Cloudsave.PlayerRecordAdminApi(sdk, { axiosConfig: { request: { headers: { Authorization: 'Bearer {access_token}' } } } })
  .fetchRecordBulk_ByUserId(userId:string, data: {
             BulkGetPlayerRecordsRequest
    })

// return Promise<BulkGetAdminPlayerRecordResponse>

</script>
```

## PUT /cloudsave/v1/admin/namespaces/{namespace}/users/{userId}/records/bulk

```
<script src="https://unpkg.com/@accelbyte/sdk/dist/global/index.global.js"></script>
<script src="https://unpkg.com/@accelbyte/sdk-cloudsave/dist/global/index.global.js"></script>
  
<script>

const sdk = AccelByteSDK.AccelByte.SDK({
  coreConfig: {
    baseURL: '__AGS_DOMAIN__',
    clientId: '__IAM_CLIENT_ID__',
    namespace: '__NAMESPACE__',
    redirectURI: '__IAM_CLIENT_REDIRECT_URI__'
  }
})

AccelByteSDK_Cloudsave.PlayerRecordAdminApi(sdk, { axiosConfig: { request: { headers: { Authorization: 'Bearer {access_token}' } } } })
  .updateRecordBulk_ByUserId(userId:string, data: {
             BulkUpdatePlayerRecordsRequest
    })

// return Promise<BulkUpdatePlayerRecordResponseArray>

</script>
```

## DELETE /cloudsave/v1/admin/namespaces/{namespace}/users/{userId}/records/{key}

```
<script src="https://unpkg.com/@accelbyte/sdk/dist/global/index.global.js"></script>
<script src="https://unpkg.com/@accelbyte/sdk-cloudsave/dist/global/index.global.js"></script>
  
<script>

const sdk = AccelByteSDK.AccelByte.SDK({
  coreConfig: {
    baseURL: '__AGS_DOMAIN__',
    clientId: '__IAM_CLIENT_ID__',
    namespace: '__NAMESPACE__',
    redirectURI: '__IAM_CLIENT_REDIRECT_URI__'
  }
})

AccelByteSDK_Cloudsave.PlayerRecordAdminApi(sdk, { axiosConfig: { request: { headers: { Authorization: 'Bearer {access_token}' } } } })
  .deleteRecord_ByUserId_ByKey(userId:string, key:string)

// return Promise

</script>
```

## GET /cloudsave/v1/admin/namespaces/{namespace}/users/{userId}/records/{key}

```
<script src="https://unpkg.com/@accelbyte/sdk/dist/global/index.global.js"></script>
<script src="https://unpkg.com/@accelbyte/sdk-cloudsave/dist/global/index.global.js"></script>
  
<script>

const sdk = AccelByteSDK.AccelByte.SDK({
  coreConfig: {
    baseURL: '__AGS_DOMAIN__',
    clientId: '__IAM_CLIENT_ID__',
    namespace: '__NAMESPACE__',
    redirectURI: '__IAM_CLIENT_REDIRECT_URI__'
  }
})

AccelByteSDK_Cloudsave.PlayerRecordAdminApi(sdk, { axiosConfig: { request: { headers: { Authorization: 'Bearer {access_token}' } } } })
  .getRecord_ByUserId_ByKey(userId:string, key:string)

// return Promise<PlayerRecordResponse>

</script>
```

## POST /cloudsave/v1/admin/namespaces/{namespace}/users/{userId}/records/{key}

```
<script src="https://unpkg.com/@accelbyte/sdk/dist/global/index.global.js"></script>
<script src="https://unpkg.com/@accelbyte/sdk-cloudsave/dist/global/index.global.js"></script>
  
<script>

const sdk = AccelByteSDK.AccelByte.SDK({
  coreConfig: {
    baseURL: '__AGS_DOMAIN__',
    clientId: '__IAM_CLIENT_ID__',
    namespace: '__NAMESPACE__',
    redirectURI: '__IAM_CLIENT_REDIRECT_URI__'
  }
})

AccelByteSDK_Cloudsave.PlayerRecordAdminApi(sdk, { axiosConfig: { request: { headers: { Authorization: 'Bearer {access_token}' } } } })
  .createRecord_ByUserId_ByKey(userId:string, key:string, data: {
             PlayerRecordRequest
    })

// return Promise<PlayerRecordResponse>

</script>
```

## PUT /cloudsave/v1/admin/namespaces/{namespace}/users/{userId}/records/{key}

```
<script src="https://unpkg.com/@accelbyte/sdk/dist/global/index.global.js"></script>
<script src="https://unpkg.com/@accelbyte/sdk-cloudsave/dist/global/index.global.js"></script>
  
<script>

const sdk = AccelByteSDK.AccelByte.SDK({
  coreConfig: {
    baseURL: '__AGS_DOMAIN__',
    clientId: '__IAM_CLIENT_ID__',
    namespace: '__NAMESPACE__',
    redirectURI: '__IAM_CLIENT_REDIRECT_URI__'
  }
})

AccelByteSDK_Cloudsave.PlayerRecordAdminApi(sdk, { axiosConfig: { request: { headers: { Authorization: 'Bearer {access_token}' } } } })
  .updateRecord_ByUserId_ByKey(userId:string, key:string, data: {
             PlayerRecordRequest
    })

// return Promise<PlayerRecordResponse>

</script>
```

## PUT /cloudsave/v1/admin/namespaces/{namespace}/concurrent/adminrecords/{key}

```
<script src="https://unpkg.com/@accelbyte/sdk/dist/global/index.global.js"></script>
<script src="https://unpkg.com/@accelbyte/sdk-cloudsave/dist/global/index.global.js"></script>
  
<script>

const sdk = AccelByteSDK.AccelByte.SDK({
  coreConfig: {
    baseURL: '__AGS_DOMAIN__',
    clientId: '__IAM_CLIENT_ID__',
    namespace: '__NAMESPACE__',
    redirectURI: '__IAM_CLIENT_REDIRECT_URI__'
  }
})

AccelByteSDK_Cloudsave.ConcurrentRecordAdminApi(sdk, { axiosConfig: { request: { headers: { Authorization: 'Bearer {access_token}' } } } })
  .updateConcurrentAdminrecord_ByKey(key:string, data: {
             AdminGameConcurrentRecordRequest
    })

// return Promise

</script>
```

## DELETE /cloudsave/v1/admin/namespaces/{namespace}/users/{userId}/binaries/{key}

```
<script src="https://unpkg.com/@accelbyte/sdk/dist/global/index.global.js"></script>
<script src="https://unpkg.com/@accelbyte/sdk-cloudsave/dist/global/index.global.js"></script>
  
<script>

const sdk = AccelByteSDK.AccelByte.SDK({
  coreConfig: {
    baseURL: '__AGS_DOMAIN__',
    clientId: '__IAM_CLIENT_ID__',
    namespace: '__NAMESPACE__',
    redirectURI: '__IAM_CLIENT_REDIRECT_URI__'
  }
})

AccelByteSDK_Cloudsave.PlayerBinaryRecordAdminApi(sdk, { axiosConfig: { request: { headers: { Authorization: 'Bearer {access_token}' } } } })
  .deleteBinary_ByUserId_ByKey(userId:string, key:string)

// return Promise

</script>
```

## GET /cloudsave/v1/admin/namespaces/{namespace}/users/{userId}/binaries/{key}

```
<script src="https://unpkg.com/@accelbyte/sdk/dist/global/index.global.js"></script>
<script src="https://unpkg.com/@accelbyte/sdk-cloudsave/dist/global/index.global.js"></script>
  
<script>

const sdk = AccelByteSDK.AccelByte.SDK({
  coreConfig: {
    baseURL: '__AGS_DOMAIN__',
    clientId: '__IAM_CLIENT_ID__',
    namespace: '__NAMESPACE__',
    redirectURI: '__IAM_CLIENT_REDIRECT_URI__'
  }
})

AccelByteSDK_Cloudsave.PlayerBinaryRecordAdminApi(sdk, { axiosConfig: { request: { headers: { Authorization: 'Bearer {access_token}' } } } })
  .getBinary_ByUserId_ByKey(userId:string, key:string)

// return Promise<PlayerBinaryRecordResponse>

</script>
```

## PUT /cloudsave/v1/admin/namespaces/{namespace}/users/{userId}/binaries/{key}

```
<script src="https://unpkg.com/@accelbyte/sdk/dist/global/index.global.js"></script>
<script src="https://unpkg.com/@accelbyte/sdk-cloudsave/dist/global/index.global.js"></script>
  
<script>

const sdk = AccelByteSDK.AccelByte.SDK({
  coreConfig: {
    baseURL: '__AGS_DOMAIN__',
    clientId: '__IAM_CLIENT_ID__',
    namespace: '__NAMESPACE__',
    redirectURI: '__IAM_CLIENT_REDIRECT_URI__'
  }
})

AccelByteSDK_Cloudsave.PlayerBinaryRecordAdminApi(sdk, { axiosConfig: { request: { headers: { Authorization: 'Bearer {access_token}' } } } })
  .updateBinary_ByUserId_ByKey(userId:string, key:string, data: {
             BinaryRecordRequest
    })

// return Promise<PlayerBinaryRecordResponse>

</script>
```

## POST /cloudsave/v1/admin/namespaces/{namespace}/users/adminrecords/{key}/bulk

```
<script src="https://unpkg.com/@accelbyte/sdk/dist/global/index.global.js"></script>
<script src="https://unpkg.com/@accelbyte/sdk-cloudsave/dist/global/index.global.js"></script>
  
<script>

const sdk = AccelByteSDK.AccelByte.SDK({
  coreConfig: {
    baseURL: '__AGS_DOMAIN__',
    clientId: '__IAM_CLIENT_ID__',
    namespace: '__NAMESPACE__',
    redirectURI: '__IAM_CLIENT_REDIRECT_URI__'
  }
})

AccelByteSDK_Cloudsave.RecordAdminApi(sdk, { axiosConfig: { request: { headers: { Authorization: 'Bearer {access_token}' } } } })
  .fetchBulkUser_ByKey(key:string, data: {
             BulkUserIDsRequest
    })

// return Promise<BulkGetAdminPlayerRecordResponse>

</script>
```

## POST /cloudsave/v1/admin/namespaces/{namespace}/users/{userId}/adminrecords/bulk

```
<script src="https://unpkg.com/@accelbyte/sdk/dist/global/index.global.js"></script>
<script src="https://unpkg.com/@accelbyte/sdk-cloudsave/dist/global/index.global.js"></script>
  
<script>

const sdk = AccelByteSDK.AccelByte.SDK({
  coreConfig: {
    baseURL: '__AGS_DOMAIN__',
    clientId: '__IAM_CLIENT_ID__',
    namespace: '__NAMESPACE__',
    redirectURI: '__IAM_CLIENT_REDIRECT_URI__'
  }
})

AccelByteSDK_Cloudsave.RecordAdminApi(sdk, { axiosConfig: { request: { headers: { Authorization: 'Bearer {access_token}' } } } })
  .fetchAdminrecordBulk_ByUserId(userId:string, data: {
             BulkGetAdminPlayerRecordRequest
    })

// return Promise<BulkGetAdminPlayerRecordResponse>

</script>
```

## DELETE /cloudsave/v1/admin/namespaces/{namespace}/users/{userId}/adminrecords/{key}

```
<script src="https://unpkg.com/@accelbyte/sdk/dist/global/index.global.js"></script>
<script src="https://unpkg.com/@accelbyte/sdk-cloudsave/dist/global/index.global.js"></script>
  
<script>

const sdk = AccelByteSDK.AccelByte.SDK({
  coreConfig: {
    baseURL: '__AGS_DOMAIN__',
    clientId: '__IAM_CLIENT_ID__',
    namespace: '__NAMESPACE__',
    redirectURI: '__IAM_CLIENT_REDIRECT_URI__'
  }
})

AccelByteSDK_Cloudsave.RecordAdminApi(sdk, { axiosConfig: { request: { headers: { Authorization: 'Bearer {access_token}' } } } })
  .deleteAdminrecord_ByUserId_ByKey(userId:string, key:string)

// return Promise

</script>
```

## GET /cloudsave/v1/admin/namespaces/{namespace}/users/{userId}/adminrecords/{key}

```
<script src="https://unpkg.com/@accelbyte/sdk/dist/global/index.global.js"></script>
<script src="https://unpkg.com/@accelbyte/sdk-cloudsave/dist/global/index.global.js"></script>
  
<script>

const sdk = AccelByteSDK.AccelByte.SDK({
  coreConfig: {
    baseURL: '__AGS_DOMAIN__',
    clientId: '__IAM_CLIENT_ID__',
    namespace: '__NAMESPACE__',
    redirectURI: '__IAM_CLIENT_REDIRECT_URI__'
  }
})

AccelByteSDK_Cloudsave.RecordAdminApi(sdk, { axiosConfig: { request: { headers: { Authorization: 'Bearer {access_token}' } } } })
  .getAdminrecord_ByUserId_ByKey(userId:string, key:string)

// return Promise<AdminPlayerRecordResponse>

</script>
```

## POST /cloudsave/v1/admin/namespaces/{namespace}/users/{userId}/adminrecords/{key}

```
<script src="https://unpkg.com/@accelbyte/sdk/dist/global/index.global.js"></script>
<script src="https://unpkg.com/@accelbyte/sdk-cloudsave/dist/global/index.global.js"></script>
  
<script>

const sdk = AccelByteSDK.AccelByte.SDK({
  coreConfig: {
    baseURL: '__AGS_DOMAIN__',
    clientId: '__IAM_CLIENT_ID__',
    namespace: '__NAMESPACE__',
    redirectURI: '__IAM_CLIENT_REDIRECT_URI__'
  }
})

AccelByteSDK_Cloudsave.RecordAdminApi(sdk, { axiosConfig: { request: { headers: { Authorization: 'Bearer {access_token}' } } } })
  .createAdminrecord_ByUserId_ByKey(userId:string, key:string, data: {
             AdminPlayerRecordRequest
    })

// return Promise<AdminPlayerRecordResponse>

</script>
```

## PUT /cloudsave/v1/admin/namespaces/{namespace}/users/{userId}/adminrecords/{key}

```
<script src="https://unpkg.com/@accelbyte/sdk/dist/global/index.global.js"></script>
<script src="https://unpkg.com/@accelbyte/sdk-cloudsave/dist/global/index.global.js"></script>
  
<script>

const sdk = AccelByteSDK.AccelByte.SDK({
  coreConfig: {
    baseURL: '__AGS_DOMAIN__',
    clientId: '__IAM_CLIENT_ID__',
    namespace: '__NAMESPACE__',
    redirectURI: '__IAM_CLIENT_REDIRECT_URI__'
  }
})

AccelByteSDK_Cloudsave.RecordAdminApi(sdk, { axiosConfig: { request: { headers: { Authorization: 'Bearer {access_token}' } } } })
  .updateAdminrecord_ByUserId_ByKey(userId:string, key:string, data: {
             AdminPlayerRecordRequest
    })

// return Promise<AdminPlayerRecordResponse>

</script>
```

## GET /cloudsave/v1/admin/namespaces/{namespace}/users/{userId}/records/{key}/size

```
<script src="https://unpkg.com/@accelbyte/sdk/dist/global/index.global.js"></script>
<script src="https://unpkg.com/@accelbyte/sdk-cloudsave/dist/global/index.global.js"></script>
  
<script>

const sdk = AccelByteSDK.AccelByte.SDK({
  coreConfig: {
    baseURL: '__AGS_DOMAIN__',
    clientId: '__IAM_CLIENT_ID__',
    namespace: '__NAMESPACE__',
    redirectURI: '__IAM_CLIENT_REDIRECT_URI__'
  }
})

AccelByteSDK_Cloudsave.PlayerRecordAdminApi(sdk, { axiosConfig: { request: { headers: { Authorization: 'Bearer {access_token}' } } } })
  .getSize_ByUserId_ByKey(userId:string, key:string)

// return Promise<PlayerRecordSizeResponse>

</script>
```

## DELETE /cloudsave/v1/admin/namespaces/{namespace}/users/{userId}/records/{key}/public

```
<script src="https://unpkg.com/@accelbyte/sdk/dist/global/index.global.js"></script>
<script src="https://unpkg.com/@accelbyte/sdk-cloudsave/dist/global/index.global.js"></script>
  
<script>

const sdk = AccelByteSDK.AccelByte.SDK({
  coreConfig: {
    baseURL: '__AGS_DOMAIN__',
    clientId: '__IAM_CLIENT_ID__',
    namespace: '__NAMESPACE__',
    redirectURI: '__IAM_CLIENT_REDIRECT_URI__'
  }
})

AccelByteSDK_Cloudsave.PlayerRecordAdminApi(sdk, { axiosConfig: { request: { headers: { Authorization: 'Bearer {access_token}' } } } })
  .deletePublic_ByUserId_ByKey(userId:string, key:string)

// return Promise

</script>
```

## GET /cloudsave/v1/admin/namespaces/{namespace}/users/{userId}/records/{key}/public

```
<script src="https://unpkg.com/@accelbyte/sdk/dist/global/index.global.js"></script>
<script src="https://unpkg.com/@accelbyte/sdk-cloudsave/dist/global/index.global.js"></script>
  
<script>

const sdk = AccelByteSDK.AccelByte.SDK({
  coreConfig: {
    baseURL: '__AGS_DOMAIN__',
    clientId: '__IAM_CLIENT_ID__',
    namespace: '__NAMESPACE__',
    redirectURI: '__IAM_CLIENT_REDIRECT_URI__'
  }
})

AccelByteSDK_Cloudsave.PlayerRecordAdminApi(sdk, { axiosConfig: { request: { headers: { Authorization: 'Bearer {access_token}' } } } })
  .getPublic_ByUserId_ByKey(userId:string, key:string)

// return Promise<PlayerRecordResponse>

</script>
```

## POST /cloudsave/v1/admin/namespaces/{namespace}/users/{userId}/records/{key}/public

```
<script src="https://unpkg.com/@accelbyte/sdk/dist/global/index.global.js"></script>
<script src="https://unpkg.com/@accelbyte/sdk-cloudsave/dist/global/index.global.js"></script>
  
<script>

const sdk = AccelByteSDK.AccelByte.SDK({
  coreConfig: {
    baseURL: '__AGS_DOMAIN__',
    clientId: '__IAM_CLIENT_ID__',
    namespace: '__NAMESPACE__',
    redirectURI: '__IAM_CLIENT_REDIRECT_URI__'
  }
})

AccelByteSDK_Cloudsave.PlayerRecordAdminApi(sdk, { axiosConfig: { request: { headers: { Authorization: 'Bearer {access_token}' } } } })
  .createPublic_ByUserId_ByKey(userId:string, key:string, data: {
             PlayerRecordRequest
    })

// return Promise<PlayerRecordResponse>

</script>
```

## PUT /cloudsave/v1/admin/namespaces/{namespace}/users/{userId}/records/{key}/public

```
<script src="https://unpkg.com/@accelbyte/sdk/dist/global/index.global.js"></script>
<script src="https://unpkg.com/@accelbyte/sdk-cloudsave/dist/global/index.global.js"></script>
  
<script>

const sdk = AccelByteSDK.AccelByte.SDK({
  coreConfig: {
    baseURL: '__AGS_DOMAIN__',
    clientId: '__IAM_CLIENT_ID__',
    namespace: '__NAMESPACE__',
    redirectURI: '__IAM_CLIENT_REDIRECT_URI__'
  }
})

AccelByteSDK_Cloudsave.PlayerRecordAdminApi(sdk, { axiosConfig: { request: { headers: { Authorization: 'Bearer {access_token}' } } } })
  .updatePublic_ByUserId_ByKey(userId:string, key:string, data: {
             PlayerRecordRequest
    })

// return Promise<PlayerRecordResponse>

</script>
```

## PUT /cloudsave/v1/admin/namespaces/{namespace}/users/{userId}/binaries/{key}/metadata

```
<script src="https://unpkg.com/@accelbyte/sdk/dist/global/index.global.js"></script>
<script src="https://unpkg.com/@accelbyte/sdk-cloudsave/dist/global/index.global.js"></script>
  
<script>

const sdk = AccelByteSDK.AccelByte.SDK({
  coreConfig: {
    baseURL: '__AGS_DOMAIN__',
    clientId: '__IAM_CLIENT_ID__',
    namespace: '__NAMESPACE__',
    redirectURI: '__IAM_CLIENT_REDIRECT_URI__'
  }
})

AccelByteSDK_Cloudsave.PlayerBinaryRecordAdminApi(sdk, { axiosConfig: { request: { headers: { Authorization: 'Bearer {access_token}' } } } })
  .updateMetadata_ByUserId_ByKey(userId:string, key:string, data: {
             PlayerBinaryRecordMetadataRequest
    })

// return Promise<PlayerBinaryRecordResponse>

</script>
```

## POST /cloudsave/v1/admin/namespaces/{namespace}/users/{userId}/binaries/{key}/presigned

```
<script src="https://unpkg.com/@accelbyte/sdk/dist/global/index.global.js"></script>
<script src="https://unpkg.com/@accelbyte/sdk-cloudsave/dist/global/index.global.js"></script>
  
<script>

const sdk = AccelByteSDK.AccelByte.SDK({
  coreConfig: {
    baseURL: '__AGS_DOMAIN__',
    clientId: '__IAM_CLIENT_ID__',
    namespace: '__NAMESPACE__',
    redirectURI: '__IAM_CLIENT_REDIRECT_URI__'
  }
})

AccelByteSDK_Cloudsave.PlayerBinaryRecordAdminApi(sdk, { axiosConfig: { request: { headers: { Authorization: 'Bearer {access_token}' } } } })
  .createPresigned_ByUserId_ByKey(userId:string, key:string, data: {
             UploadBinaryRecordRequest
    })

// return Promise<UploadBinaryRecordResponse>

</script>
```

## PUT /cloudsave/v1/admin/namespaces/{namespace}/users/{userId}/concurrent/records/{key}

```
<script src="https://unpkg.com/@accelbyte/sdk/dist/global/index.global.js"></script>
<script src="https://unpkg.com/@accelbyte/sdk-cloudsave/dist/global/index.global.js"></script>
  
<script>

const sdk = AccelByteSDK.AccelByte.SDK({
  coreConfig: {
    baseURL: '__AGS_DOMAIN__',
    clientId: '__IAM_CLIENT_ID__',
    namespace: '__NAMESPACE__',
    redirectURI: '__IAM_CLIENT_REDIRECT_URI__'
  }
})

AccelByteSDK_Cloudsave.ConcurrentRecordAdminApi(sdk, { axiosConfig: { request: { headers: { Authorization: 'Bearer {access_token}' } } } })
  .updateConcurrentRecord_ByUserId_ByKey(userId:string, key:string, data: {
             AdminConcurrentRecordRequest,
             queryParams?: {
             responseBody?: boolean | null
    })

// return Promise<PlayerRecordConcurrentUpdateResponse>

</script>
```

## PUT /cloudsave/v1/admin/namespaces/{namespace}/users/{userId}/concurrent/adminrecords/{key}

```
<script src="https://unpkg.com/@accelbyte/sdk/dist/global/index.global.js"></script>
<script src="https://unpkg.com/@accelbyte/sdk-cloudsave/dist/global/index.global.js"></script>
  
<script>

const sdk = AccelByteSDK.AccelByte.SDK({
  coreConfig: {
    baseURL: '__AGS_DOMAIN__',
    clientId: '__IAM_CLIENT_ID__',
    namespace: '__NAMESPACE__',
    redirectURI: '__IAM_CLIENT_REDIRECT_URI__'
  }
})

AccelByteSDK_Cloudsave.ConcurrentRecordAdminApi(sdk, { axiosConfig: { request: { headers: { Authorization: 'Bearer {access_token}' } } } })
  .updateConcurrentAdminrecord_ByUserId_ByKey(userId:string, key:string, data: {
             AdminPlayerConcurrentRecordRequest,
             queryParams?: {
             responseBody?: boolean | null
    })

// return Promise<PlayerRecordConcurrentUpdateResponse>

</script>
```

## PUT /cloudsave/v1/admin/namespaces/{namespace}/users/{userId}/concurrent/records/{key}/public

```
<script src="https://unpkg.com/@accelbyte/sdk/dist/global/index.global.js"></script>
<script src="https://unpkg.com/@accelbyte/sdk-cloudsave/dist/global/index.global.js"></script>
  
<script>

const sdk = AccelByteSDK.AccelByte.SDK({
  coreConfig: {
    baseURL: '__AGS_DOMAIN__',
    clientId: '__IAM_CLIENT_ID__',
    namespace: '__NAMESPACE__',
    redirectURI: '__IAM_CLIENT_REDIRECT_URI__'
  }
})

AccelByteSDK_Cloudsave.ConcurrentRecordAdminApi(sdk, { axiosConfig: { request: { headers: { Authorization: 'Bearer {access_token}' } } } })
  .updatePublicConcurrent_ByUserId_ByKey(userId:string, key:string, data: {
             AdminConcurrentRecordRequest,
             queryParams?: {
             responseBody?: boolean | null
    })

// return Promise<PlayerRecordConcurrentUpdateResponse>

</script>
```