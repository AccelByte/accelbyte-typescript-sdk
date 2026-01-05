## GET /ugc/v1/public/namespaces/{namespace}/tags

```
<script src="https://unpkg.com/@accelbyte/sdk/dist/global/index.global.js"></script>
<script src="https://unpkg.com/@accelbyte/sdk-ugc/dist/global/index.global.js"></script>
  
<script>

const sdk = AccelByteSDK.AccelByte.SDK({
  coreConfig: {
    baseURL: '__AGS_DOMAIN__',
    clientId: '__IAM_CLIENT_ID__',
    namespace: '__NAMESPACE__',
    redirectURI: '__IAM_CLIENT_REDIRECT_URI__'
  }
})

AccelByteSDK_UGC.PublicTagApi(sdk)
  .getTags( queryParams?: {
             limit?: number,
             offset?: number
    })

// return Promise<PaginatedGetTagResponse>

</script>
```

## GET /ugc/v1/public/namespaces/{namespace}/types

```
<script src="https://unpkg.com/@accelbyte/sdk/dist/global/index.global.js"></script>
<script src="https://unpkg.com/@accelbyte/sdk-ugc/dist/global/index.global.js"></script>
  
<script>

const sdk = AccelByteSDK.AccelByte.SDK({
  coreConfig: {
    baseURL: '__AGS_DOMAIN__',
    clientId: '__IAM_CLIENT_ID__',
    namespace: '__NAMESPACE__',
    redirectURI: '__IAM_CLIENT_REDIRECT_URI__'
  }
})

AccelByteSDK_UGC.PublicTypeApi(sdk, { axiosConfig: { request: { headers: { Authorization: 'Bearer {access_token}' } } } })
  .getTypes( queryParams?: {
             limit?: number,
             offset?: number
    })

// return Promise<PaginatedGetTypeResponse>

</script>
```

## GET /ugc/v1/public/namespaces/{namespace}/users

```
<script src="https://unpkg.com/@accelbyte/sdk/dist/global/index.global.js"></script>
<script src="https://unpkg.com/@accelbyte/sdk-ugc/dist/global/index.global.js"></script>
  
<script>

const sdk = AccelByteSDK.AccelByte.SDK({
  coreConfig: {
    baseURL: '__AGS_DOMAIN__',
    clientId: '__IAM_CLIENT_ID__',
    namespace: '__NAMESPACE__',
    redirectURI: '__IAM_CLIENT_REDIRECT_URI__'
  }
})

AccelByteSDK_UGC.PublicCreatorApi(sdk, { axiosConfig: { request: { headers: { Authorization: 'Bearer {access_token}' } } } })
  .getUsers( queryParams?: {
             limit?: number,
             offset?: number,
             orderby?: string | null,
             sortby?: string | null
    })

// return Promise<PaginatedCreatorOverviewResponse>

</script>
```

## GET /ugc/v1/public/namespaces/{namespace}/contents

```
<script src="https://unpkg.com/@accelbyte/sdk/dist/global/index.global.js"></script>
<script src="https://unpkg.com/@accelbyte/sdk-ugc/dist/global/index.global.js"></script>
  
<script>

const sdk = AccelByteSDK.AccelByte.SDK({
  coreConfig: {
    baseURL: '__AGS_DOMAIN__',
    clientId: '__IAM_CLIENT_ID__',
    namespace: '__NAMESPACE__',
    redirectURI: '__IAM_CLIENT_REDIRECT_URI__'
  }
})

AccelByteSDK_UGC.PublicContentLegacyApi(sdk, { axiosConfig: { request: { headers: { Authorization: 'Bearer {access_token}' } } } })
  .getContents( queryParams?: {
             creator?: string | null,
             ishidden?: string | null,
             isofficial?: string | null,
             limit?: number,
             name?: string | null,
             offset?: number,
             orderby?: string | null,
             sortby?: string | null,
             subtype?: string | null,
             tags?: string[],
             type?: string | null,
             userId?: string | null
    })

// return Promise<PaginatedContentDownloadResponse>

</script>
```

## GET /ugc/v2/public/namespaces/{namespace}/contents

```
<script src="https://unpkg.com/@accelbyte/sdk/dist/global/index.global.js"></script>
<script src="https://unpkg.com/@accelbyte/sdk-ugc/dist/global/index.global.js"></script>
  
<script>

const sdk = AccelByteSDK.AccelByte.SDK({
  coreConfig: {
    baseURL: '__AGS_DOMAIN__',
    clientId: '__IAM_CLIENT_ID__',
    namespace: '__NAMESPACE__',
    redirectURI: '__IAM_CLIENT_REDIRECT_URI__'
  }
})

AccelByteSDK_UGC.PublicContentV2Api(sdk, { axiosConfig: { request: { headers: { Authorization: 'Bearer {access_token}' } } } })
  .getContents_v2( queryParams?: {
             isOfficial?: boolean | null,
             limit?: number,
             name?: string | null,
             offset?: number,
             sortBy?: string | null,
             subType?: string | null,
             tags?: string[],
             type?: string | null
    })

// return Promise<PaginatedContentDownloadResponseV2>

</script>
```

## POST /ugc/v1/public/namespaces/{namespace}/contents/bulk

```
<script src="https://unpkg.com/@accelbyte/sdk/dist/global/index.global.js"></script>
<script src="https://unpkg.com/@accelbyte/sdk-ugc/dist/global/index.global.js"></script>
  
<script>

const sdk = AccelByteSDK.AccelByte.SDK({
  coreConfig: {
    baseURL: '__AGS_DOMAIN__',
    clientId: '__IAM_CLIENT_ID__',
    namespace: '__NAMESPACE__',
    redirectURI: '__IAM_CLIENT_REDIRECT_URI__'
  }
})

AccelByteSDK_UGC.PublicContentLegacyApi(sdk, { axiosConfig: { request: { headers: { Authorization: 'Bearer {access_token}' } } } })
  .createContentBulk(data: {
             PublicGetContentBulkRequest
    })

// return Promise<ContentDownloadResponseArray>

</script>
```

## POST /ugc/v2/public/namespaces/{namespace}/contents/bulk

```
<script src="https://unpkg.com/@accelbyte/sdk/dist/global/index.global.js"></script>
<script src="https://unpkg.com/@accelbyte/sdk-ugc/dist/global/index.global.js"></script>
  
<script>

const sdk = AccelByteSDK.AccelByte.SDK({
  coreConfig: {
    baseURL: '__AGS_DOMAIN__',
    clientId: '__IAM_CLIENT_ID__',
    namespace: '__NAMESPACE__',
    redirectURI: '__IAM_CLIENT_REDIRECT_URI__'
  }
})

AccelByteSDK_UGC.PublicContentV2Api(sdk, { axiosConfig: { request: { headers: { Authorization: 'Bearer {access_token}' } } } })
  .createContentBulk_v2(data: {
             PublicGetContentBulkRequest
    })

// return Promise<ContentDownloadResponseV2Array>

</script>
```

## GET /ugc/v1/public/namespaces/{namespace}/contents/liked

```
<script src="https://unpkg.com/@accelbyte/sdk/dist/global/index.global.js"></script>
<script src="https://unpkg.com/@accelbyte/sdk-ugc/dist/global/index.global.js"></script>
  
<script>

const sdk = AccelByteSDK.AccelByte.SDK({
  coreConfig: {
    baseURL: '__AGS_DOMAIN__',
    clientId: '__IAM_CLIENT_ID__',
    namespace: '__NAMESPACE__',
    redirectURI: '__IAM_CLIENT_REDIRECT_URI__'
  }
})

AccelByteSDK_UGC.PublicLikeLegacyApi(sdk, { axiosConfig: { request: { headers: { Authorization: 'Bearer {access_token}' } } } })
  .getContentsLiked( queryParams?: {
             isofficial?: boolean | null,
             limit?: number,
             name?: string | null,
             offset?: number,
             orderby?: string | null,
             sortby?: string | null,
             subtype?: string | null,
             tags?: string[],
             type?: string | null
    })

// return Promise<PaginatedContentDownloadResponse>

</script>
```

## GET /ugc/v1/public/namespaces/{namespace}/users/{userId}

```
<script src="https://unpkg.com/@accelbyte/sdk/dist/global/index.global.js"></script>
<script src="https://unpkg.com/@accelbyte/sdk-ugc/dist/global/index.global.js"></script>
  
<script>

const sdk = AccelByteSDK.AccelByte.SDK({
  coreConfig: {
    baseURL: '__AGS_DOMAIN__',
    clientId: '__IAM_CLIENT_ID__',
    namespace: '__NAMESPACE__',
    redirectURI: '__IAM_CLIENT_REDIRECT_URI__'
  }
})

AccelByteSDK_UGC.PublicCreatorApi(sdk, { axiosConfig: { request: { headers: { Authorization: 'Bearer {access_token}' } } } })
  .getUser_ByUserId(userId:string)

// return Promise<CreatorResponse>

</script>
```

## GET /ugc/v1/public/namespaces/{namespace}/users/followed

```
<script src="https://unpkg.com/@accelbyte/sdk/dist/global/index.global.js"></script>
<script src="https://unpkg.com/@accelbyte/sdk-ugc/dist/global/index.global.js"></script>
  
<script>

const sdk = AccelByteSDK.AccelByte.SDK({
  coreConfig: {
    baseURL: '__AGS_DOMAIN__',
    clientId: '__IAM_CLIENT_ID__',
    namespace: '__NAMESPACE__',
    redirectURI: '__IAM_CLIENT_REDIRECT_URI__'
  }
})

AccelByteSDK_UGC.PublicFollowApi(sdk, { axiosConfig: { request: { headers: { Authorization: 'Bearer {access_token}' } } } })
  .getUsersFollowed( queryParams?: {
             limit?: number,
             offset?: number
    })

// return Promise<PaginatedCreatorOverviewResponse>

</script>
```

## GET /ugc/v1/public/namespaces/{namespace}/contents/followed

```
<script src="https://unpkg.com/@accelbyte/sdk/dist/global/index.global.js"></script>
<script src="https://unpkg.com/@accelbyte/sdk-ugc/dist/global/index.global.js"></script>
  
<script>

const sdk = AccelByteSDK.AccelByte.SDK({
  coreConfig: {
    baseURL: '__AGS_DOMAIN__',
    clientId: '__IAM_CLIENT_ID__',
    namespace: '__NAMESPACE__',
    redirectURI: '__IAM_CLIENT_REDIRECT_URI__'
  }
})

AccelByteSDK_UGC.PublicFollowApi(sdk, { axiosConfig: { request: { headers: { Authorization: 'Bearer {access_token}' } } } })
  .getContentsFollowed( queryParams?: {
             limit?: number,
             offset?: number
    })

// return Promise<PaginatedContentDownloadResponse>

</script>
```

## GET /ugc/v1/public/namespaces/{namespace}/contents/{contentId}

```
<script src="https://unpkg.com/@accelbyte/sdk/dist/global/index.global.js"></script>
<script src="https://unpkg.com/@accelbyte/sdk-ugc/dist/global/index.global.js"></script>
  
<script>

const sdk = AccelByteSDK.AccelByte.SDK({
  coreConfig: {
    baseURL: '__AGS_DOMAIN__',
    clientId: '__IAM_CLIENT_ID__',
    namespace: '__NAMESPACE__',
    redirectURI: '__IAM_CLIENT_REDIRECT_URI__'
  }
})

AccelByteSDK_UGC.PublicContentLegacyApi(sdk, { axiosConfig: { request: { headers: { Authorization: 'Bearer {access_token}' } } } })
  .getContent_ByContentId(contentId:string)

// return Promise<ContentDownloadResponse>

</script>
```

## GET /ugc/v2/public/namespaces/{namespace}/contents/{contentId}

```
<script src="https://unpkg.com/@accelbyte/sdk/dist/global/index.global.js"></script>
<script src="https://unpkg.com/@accelbyte/sdk-ugc/dist/global/index.global.js"></script>
  
<script>

const sdk = AccelByteSDK.AccelByte.SDK({
  coreConfig: {
    baseURL: '__AGS_DOMAIN__',
    clientId: '__IAM_CLIENT_ID__',
    namespace: '__NAMESPACE__',
    redirectURI: '__IAM_CLIENT_REDIRECT_URI__'
  }
})

AccelByteSDK_UGC.PublicContentV2Api(sdk, { axiosConfig: { request: { headers: { Authorization: 'Bearer {access_token}' } } } })
  .getContent_ByContentId_v2(contentId:string)

// return Promise<ContentDownloadResponseV2>

</script>
```

## PUT /ugc/v1/public/namespaces/{namespace}/users/{userId}/follow

```
<script src="https://unpkg.com/@accelbyte/sdk/dist/global/index.global.js"></script>
<script src="https://unpkg.com/@accelbyte/sdk-ugc/dist/global/index.global.js"></script>
  
<script>

const sdk = AccelByteSDK.AccelByte.SDK({
  coreConfig: {
    baseURL: '__AGS_DOMAIN__',
    clientId: '__IAM_CLIENT_ID__',
    namespace: '__NAMESPACE__',
    redirectURI: '__IAM_CLIENT_REDIRECT_URI__'
  }
})

AccelByteSDK_UGC.PublicFollowApi(sdk, { axiosConfig: { request: { headers: { Authorization: 'Bearer {access_token}' } } } })
  .updateFollow_ByUserId(userId:string, data: {
             UserFollowRequest
    })

// return Promise<UserFollowResponse>

</script>
```

## DELETE /ugc/v1/public/namespaces/{namespace}/users/{userId}/groups

```
<script src="https://unpkg.com/@accelbyte/sdk/dist/global/index.global.js"></script>
<script src="https://unpkg.com/@accelbyte/sdk-ugc/dist/global/index.global.js"></script>
  
<script>

const sdk = AccelByteSDK.AccelByte.SDK({
  coreConfig: {
    baseURL: '__AGS_DOMAIN__',
    clientId: '__IAM_CLIENT_ID__',
    namespace: '__NAMESPACE__',
    redirectURI: '__IAM_CLIENT_REDIRECT_URI__'
  }
})

AccelByteSDK_UGC.AnonymizationApi(sdk, { axiosConfig: { request: { headers: { Authorization: 'Bearer {access_token}' } } } })
  .deleteGroup_ByUserId(userId:string)

// return Promise

</script>
```

## GET /ugc/v1/public/namespaces/{namespace}/users/{userId}/groups

```
<script src="https://unpkg.com/@accelbyte/sdk/dist/global/index.global.js"></script>
<script src="https://unpkg.com/@accelbyte/sdk-ugc/dist/global/index.global.js"></script>
  
<script>

const sdk = AccelByteSDK.AccelByte.SDK({
  coreConfig: {
    baseURL: '__AGS_DOMAIN__',
    clientId: '__IAM_CLIENT_ID__',
    namespace: '__NAMESPACE__',
    redirectURI: '__IAM_CLIENT_REDIRECT_URI__'
  }
})

AccelByteSDK_UGC.PublicGroupApi(sdk, { axiosConfig: { request: { headers: { Authorization: 'Bearer {access_token}' } } } })
  .getGroups_ByUserId(userId:string,  queryParams?: {
             limit?: number,
             offset?: number
    })

// return Promise<PaginatedGroupResponse>

</script>
```

## POST /ugc/v1/public/namespaces/{namespace}/users/{userId}/groups

```
<script src="https://unpkg.com/@accelbyte/sdk/dist/global/index.global.js"></script>
<script src="https://unpkg.com/@accelbyte/sdk-ugc/dist/global/index.global.js"></script>
  
<script>

const sdk = AccelByteSDK.AccelByte.SDK({
  coreConfig: {
    baseURL: '__AGS_DOMAIN__',
    clientId: '__IAM_CLIENT_ID__',
    namespace: '__NAMESPACE__',
    redirectURI: '__IAM_CLIENT_REDIRECT_URI__'
  }
})

AccelByteSDK_UGC.PublicGroupApi(sdk, { axiosConfig: { request: { headers: { Authorization: 'Bearer {access_token}' } } } })
  .createGroup_ByUserId(userId:string, data: {
             CreateGroupRequest
    })

// return Promise<CreateGroupResponse>

</script>
```

## DELETE /ugc/v1/public/namespaces/{namespace}/users/{userId}/states

```
<script src="https://unpkg.com/@accelbyte/sdk/dist/global/index.global.js"></script>
<script src="https://unpkg.com/@accelbyte/sdk-ugc/dist/global/index.global.js"></script>
  
<script>

const sdk = AccelByteSDK.AccelByte.SDK({
  coreConfig: {
    baseURL: '__AGS_DOMAIN__',
    clientId: '__IAM_CLIENT_ID__',
    namespace: '__NAMESPACE__',
    redirectURI: '__IAM_CLIENT_REDIRECT_URI__'
  }
})

AccelByteSDK_UGC.AnonymizationApi(sdk, { axiosConfig: { request: { headers: { Authorization: 'Bearer {access_token}' } } } })
  .deleteState_ByUserId(userId:string)

// return Promise

</script>
```

## DELETE /ugc/v1/public/namespaces/{namespace}/users/{userId}/channels

```
<script src="https://unpkg.com/@accelbyte/sdk/dist/global/index.global.js"></script>
<script src="https://unpkg.com/@accelbyte/sdk-ugc/dist/global/index.global.js"></script>
  
<script>

const sdk = AccelByteSDK.AccelByte.SDK({
  coreConfig: {
    baseURL: '__AGS_DOMAIN__',
    clientId: '__IAM_CLIENT_ID__',
    namespace: '__NAMESPACE__',
    redirectURI: '__IAM_CLIENT_REDIRECT_URI__'
  }
})

AccelByteSDK_UGC.AnonymizationApi(sdk, { axiosConfig: { request: { headers: { Authorization: 'Bearer {access_token}' } } } })
  .deleteChannel_ByUserId(userId:string)

// return Promise

</script>
```

## GET /ugc/v1/public/namespaces/{namespace}/users/{userId}/channels

```
<script src="https://unpkg.com/@accelbyte/sdk/dist/global/index.global.js"></script>
<script src="https://unpkg.com/@accelbyte/sdk-ugc/dist/global/index.global.js"></script>
  
<script>

const sdk = AccelByteSDK.AccelByte.SDK({
  coreConfig: {
    baseURL: '__AGS_DOMAIN__',
    clientId: '__IAM_CLIENT_ID__',
    namespace: '__NAMESPACE__',
    redirectURI: '__IAM_CLIENT_REDIRECT_URI__'
  }
})

AccelByteSDK_UGC.PublicChannelApi(sdk, { axiosConfig: { request: { headers: { Authorization: 'Bearer {access_token}' } } } })
  .getChannels_ByUserId(userId:string,  queryParams?: {
             limit?: number,
             name?: string | null,
             offset?: number
    })

// return Promise<PaginatedGetChannelResponse>

</script>
```

## POST /ugc/v1/public/namespaces/{namespace}/users/{userId}/channels

```
<script src="https://unpkg.com/@accelbyte/sdk/dist/global/index.global.js"></script>
<script src="https://unpkg.com/@accelbyte/sdk-ugc/dist/global/index.global.js"></script>
  
<script>

const sdk = AccelByteSDK.AccelByte.SDK({
  coreConfig: {
    baseURL: '__AGS_DOMAIN__',
    clientId: '__IAM_CLIENT_ID__',
    namespace: '__NAMESPACE__',
    redirectURI: '__IAM_CLIENT_REDIRECT_URI__'
  }
})

AccelByteSDK_UGC.PublicChannelApi(sdk, { axiosConfig: { request: { headers: { Authorization: 'Bearer {access_token}' } } } })
  .createChannel_ByUserId(userId:string, data: {
             PublicChannelRequest
    })

// return Promise<ChannelResponse>

</script>
```

## DELETE /ugc/v1/public/namespaces/{namespace}/users/{userId}/contents

```
<script src="https://unpkg.com/@accelbyte/sdk/dist/global/index.global.js"></script>
<script src="https://unpkg.com/@accelbyte/sdk-ugc/dist/global/index.global.js"></script>
  
<script>

const sdk = AccelByteSDK.AccelByte.SDK({
  coreConfig: {
    baseURL: '__AGS_DOMAIN__',
    clientId: '__IAM_CLIENT_ID__',
    namespace: '__NAMESPACE__',
    redirectURI: '__IAM_CLIENT_REDIRECT_URI__'
  }
})

AccelByteSDK_UGC.AnonymizationApi(sdk, { axiosConfig: { request: { headers: { Authorization: 'Bearer {access_token}' } } } })
  .deleteContent_ByUserId(userId:string)

// return Promise

</script>
```

## GET /ugc/v1/public/namespaces/{namespace}/users/{userId}/contents

```
<script src="https://unpkg.com/@accelbyte/sdk/dist/global/index.global.js"></script>
<script src="https://unpkg.com/@accelbyte/sdk-ugc/dist/global/index.global.js"></script>
  
<script>

const sdk = AccelByteSDK.AccelByte.SDK({
  coreConfig: {
    baseURL: '__AGS_DOMAIN__',
    clientId: '__IAM_CLIENT_ID__',
    namespace: '__NAMESPACE__',
    redirectURI: '__IAM_CLIENT_REDIRECT_URI__'
  }
})

AccelByteSDK_UGC.PublicContentLegacyApi(sdk, { axiosConfig: { request: { headers: { Authorization: 'Bearer {access_token}' } } } })
  .getContents_ByUserId(userId:string,  queryParams?: {
             limit?: number,
             offset?: number
    })

// return Promise<PaginatedContentDownloadResponse>

</script>
```

## GET /ugc/v2/public/namespaces/{namespace}/users/{userId}/contents

```
<script src="https://unpkg.com/@accelbyte/sdk/dist/global/index.global.js"></script>
<script src="https://unpkg.com/@accelbyte/sdk-ugc/dist/global/index.global.js"></script>
  
<script>

const sdk = AccelByteSDK.AccelByte.SDK({
  coreConfig: {
    baseURL: '__AGS_DOMAIN__',
    clientId: '__IAM_CLIENT_ID__',
    namespace: '__NAMESPACE__',
    redirectURI: '__IAM_CLIENT_REDIRECT_URI__'
  }
})

AccelByteSDK_UGC.PublicContentV2Api(sdk, { axiosConfig: { request: { headers: { Authorization: 'Bearer {access_token}' } } } })
  .getContents_ByUserId_v2(userId:string,  queryParams?: {
             limit?: number,
             offset?: number,
             sortBy?: string | null
    })

// return Promise<PaginatedContentDownloadResponseV2>

</script>
```

## POST /ugc/v1/public/namespaces/{namespace}/contents/sharecodes/bulk

```
<script src="https://unpkg.com/@accelbyte/sdk/dist/global/index.global.js"></script>
<script src="https://unpkg.com/@accelbyte/sdk-ugc/dist/global/index.global.js"></script>
  
<script>

const sdk = AccelByteSDK.AccelByte.SDK({
  coreConfig: {
    baseURL: '__AGS_DOMAIN__',
    clientId: '__IAM_CLIENT_ID__',
    namespace: '__NAMESPACE__',
    redirectURI: '__IAM_CLIENT_REDIRECT_URI__'
  }
})

AccelByteSDK_UGC.PublicContentLegacyApi(sdk, { axiosConfig: { request: { headers: { Authorization: 'Bearer {access_token}' } } } })
  .createContentSharecodeBulk(data: {
             GetContentBulkByShareCodesRequest
    })

// return Promise<ContentDownloadResponseArray>

</script>
```

## GET /ugc/v1/public/namespaces/{namespace}/users/{userId}/followers

```
<script src="https://unpkg.com/@accelbyte/sdk/dist/global/index.global.js"></script>
<script src="https://unpkg.com/@accelbyte/sdk-ugc/dist/global/index.global.js"></script>
  
<script>

const sdk = AccelByteSDK.AccelByte.SDK({
  coreConfig: {
    baseURL: '__AGS_DOMAIN__',
    clientId: '__IAM_CLIENT_ID__',
    namespace: '__NAMESPACE__',
    redirectURI: '__IAM_CLIENT_REDIRECT_URI__'
  }
})

AccelByteSDK_UGC.PublicFollowApi(sdk)
  .getFollowers_ByUserId(userId:string,  queryParams?: {
             limit?: number,
             offset?: number
    })

// return Promise<PaginatedCreatorOverviewResponse>

</script>
```

## GET /ugc/v1/public/namespaces/{namespace}/users/{userId}/following

```
<script src="https://unpkg.com/@accelbyte/sdk/dist/global/index.global.js"></script>
<script src="https://unpkg.com/@accelbyte/sdk-ugc/dist/global/index.global.js"></script>
  
<script>

const sdk = AccelByteSDK.AccelByte.SDK({
  coreConfig: {
    baseURL: '__AGS_DOMAIN__',
    clientId: '__IAM_CLIENT_ID__',
    namespace: '__NAMESPACE__',
    redirectURI: '__IAM_CLIENT_REDIRECT_URI__'
  }
})

AccelByteSDK_UGC.PublicFollowApi(sdk)
  .getFollowing_ByUserId(userId:string,  queryParams?: {
             limit?: number,
             offset?: number
    })

// return Promise<PaginatedCreatorOverviewResponse>

</script>
```

## POST /ugc/v2/public/namespaces/{namespace}/contents/sharecodes/bulk

```
<script src="https://unpkg.com/@accelbyte/sdk/dist/global/index.global.js"></script>
<script src="https://unpkg.com/@accelbyte/sdk-ugc/dist/global/index.global.js"></script>
  
<script>

const sdk = AccelByteSDK.AccelByte.SDK({
  coreConfig: {
    baseURL: '__AGS_DOMAIN__',
    clientId: '__IAM_CLIENT_ID__',
    namespace: '__NAMESPACE__',
    redirectURI: '__IAM_CLIENT_REDIRECT_URI__'
  }
})

AccelByteSDK_UGC.PublicContentV2Api(sdk, { axiosConfig: { request: { headers: { Authorization: 'Bearer {access_token}' } } } })
  .createContentSharecodeBulk_v2(data: {
             GetContentBulkByShareCodesRequest
    })

// return Promise<ContentDownloadResponseV2Array>

</script>
```

## PUT /ugc/v1/public/namespaces/{namespace}/contents/{contentId}/like

```
<script src="https://unpkg.com/@accelbyte/sdk/dist/global/index.global.js"></script>
<script src="https://unpkg.com/@accelbyte/sdk-ugc/dist/global/index.global.js"></script>
  
<script>

const sdk = AccelByteSDK.AccelByte.SDK({
  coreConfig: {
    baseURL: '__AGS_DOMAIN__',
    clientId: '__IAM_CLIENT_ID__',
    namespace: '__NAMESPACE__',
    redirectURI: '__IAM_CLIENT_REDIRECT_URI__'
  }
})

AccelByteSDK_UGC.PublicLikeLegacyApi(sdk, { axiosConfig: { request: { headers: { Authorization: 'Bearer {access_token}' } } } })
  .updateLike_ByContentId(contentId:string, data: {
             ContentLikeRequest
    })

// return Promise<ContentLikeResponse>

</script>
```

## GET /ugc/v2/public/namespaces/{namespace}/contents/{contentId}/like

```
<script src="https://unpkg.com/@accelbyte/sdk/dist/global/index.global.js"></script>
<script src="https://unpkg.com/@accelbyte/sdk-ugc/dist/global/index.global.js"></script>
  
<script>

const sdk = AccelByteSDK.AccelByte.SDK({
  coreConfig: {
    baseURL: '__AGS_DOMAIN__',
    clientId: '__IAM_CLIENT_ID__',
    namespace: '__NAMESPACE__',
    redirectURI: '__IAM_CLIENT_REDIRECT_URI__'
  }
})

AccelByteSDK_UGC.PublicLikeV2Api(sdk)
  .getLike_ByContentId_v2(contentId:string,  queryParams?: {
             limit?: number,
             offset?: number,
             sortBy?: string | null
    })

// return Promise<PaginatedContentLikersResponse>

</script>
```

## PUT /ugc/v2/public/namespaces/{namespace}/contents/{contentId}/like

```
<script src="https://unpkg.com/@accelbyte/sdk/dist/global/index.global.js"></script>
<script src="https://unpkg.com/@accelbyte/sdk-ugc/dist/global/index.global.js"></script>
  
<script>

const sdk = AccelByteSDK.AccelByte.SDK({
  coreConfig: {
    baseURL: '__AGS_DOMAIN__',
    clientId: '__IAM_CLIENT_ID__',
    namespace: '__NAMESPACE__',
    redirectURI: '__IAM_CLIENT_REDIRECT_URI__'
  }
})

AccelByteSDK_UGC.PublicLikeV2Api(sdk, { axiosConfig: { request: { headers: { Authorization: 'Bearer {access_token}' } } } })
  .updateLike_ByContentId_v2(contentId:string, data: {
             ContentLikeRequest
    })

// return Promise<ContentLikeResponse>

</script>
```

## GET /ugc/v1/public/namespaces/{namespace}/contents/{contentId}/preview

```
<script src="https://unpkg.com/@accelbyte/sdk/dist/global/index.global.js"></script>
<script src="https://unpkg.com/@accelbyte/sdk-ugc/dist/global/index.global.js"></script>
  
<script>

const sdk = AccelByteSDK.AccelByte.SDK({
  coreConfig: {
    baseURL: '__AGS_DOMAIN__',
    clientId: '__IAM_CLIENT_ID__',
    namespace: '__NAMESPACE__',
    redirectURI: '__IAM_CLIENT_REDIRECT_URI__'
  }
})

AccelByteSDK_UGC.PublicContentLegacyApi(sdk, { axiosConfig: { request: { headers: { Authorization: 'Bearer {access_token}' } } } })
  .getPreview_ByContentId(contentId:string)

// return Promise<GetContentPreviewResponse>

</script>
```

## GET /ugc/v1/public/namespaces/{namespace}/channels/{channelId}/contents

```
<script src="https://unpkg.com/@accelbyte/sdk/dist/global/index.global.js"></script>
<script src="https://unpkg.com/@accelbyte/sdk-ugc/dist/global/index.global.js"></script>
  
<script>

const sdk = AccelByteSDK.AccelByte.SDK({
  coreConfig: {
    baseURL: '__AGS_DOMAIN__',
    clientId: '__IAM_CLIENT_ID__',
    namespace: '__NAMESPACE__',
    redirectURI: '__IAM_CLIENT_REDIRECT_URI__'
  }
})

AccelByteSDK_UGC.PublicContentLegacyApi(sdk, { axiosConfig: { request: { headers: { Authorization: 'Bearer {access_token}' } } } })
  .getContents_ByChannelId(channelId:string,  queryParams?: {
             creator?: string | null,
             ishidden?: string | null,
             isofficial?: string | null,
             limit?: number,
             name?: string | null,
             offset?: number,
             orderby?: string | null,
             sortby?: string | null,
             subtype?: string | null,
             tags?: string[],
             type?: string | null,
             userId?: string | null
    })

// return Promise<PaginatedContentDownloadResponse>

</script>
```

## GET /ugc/v2/public/namespaces/{namespace}/channels/{channelId}/contents

```
<script src="https://unpkg.com/@accelbyte/sdk/dist/global/index.global.js"></script>
<script src="https://unpkg.com/@accelbyte/sdk-ugc/dist/global/index.global.js"></script>
  
<script>

const sdk = AccelByteSDK.AccelByte.SDK({
  coreConfig: {
    baseURL: '__AGS_DOMAIN__',
    clientId: '__IAM_CLIENT_ID__',
    namespace: '__NAMESPACE__',
    redirectURI: '__IAM_CLIENT_REDIRECT_URI__'
  }
})

AccelByteSDK_UGC.PublicContentV2Api(sdk, { axiosConfig: { request: { headers: { Authorization: 'Bearer {access_token}' } } } })
  .getContents_ByChannelId_v2(channelId:string,  queryParams?: {
             limit?: number,
             name?: string | null,
             offset?: number,
             sortBy?: string | null
    })

// return Promise<PaginatedContentDownloadResponseV2>

</script>
```

## GET /ugc/v1/public/namespaces/{namespace}/contents/sharecodes/{shareCode}

```
<script src="https://unpkg.com/@accelbyte/sdk/dist/global/index.global.js"></script>
<script src="https://unpkg.com/@accelbyte/sdk-ugc/dist/global/index.global.js"></script>
  
<script>

const sdk = AccelByteSDK.AccelByte.SDK({
  coreConfig: {
    baseURL: '__AGS_DOMAIN__',
    clientId: '__IAM_CLIENT_ID__',
    namespace: '__NAMESPACE__',
    redirectURI: '__IAM_CLIENT_REDIRECT_URI__'
  }
})

AccelByteSDK_UGC.PublicContentLegacyApi(sdk, { axiosConfig: { request: { headers: { Authorization: 'Bearer {access_token}' } } } })
  .getContentSharecode_ByShareCode(shareCode:string)

// return Promise<ContentDownloadResponse>

</script>
```

## DELETE /ugc/v1/public/namespaces/{namespace}/users/{userId}/groups/{groupId}

```
<script src="https://unpkg.com/@accelbyte/sdk/dist/global/index.global.js"></script>
<script src="https://unpkg.com/@accelbyte/sdk-ugc/dist/global/index.global.js"></script>
  
<script>

const sdk = AccelByteSDK.AccelByte.SDK({
  coreConfig: {
    baseURL: '__AGS_DOMAIN__',
    clientId: '__IAM_CLIENT_ID__',
    namespace: '__NAMESPACE__',
    redirectURI: '__IAM_CLIENT_REDIRECT_URI__'
  }
})

AccelByteSDK_UGC.PublicGroupApi(sdk, { axiosConfig: { request: { headers: { Authorization: 'Bearer {access_token}' } } } })
  .deleteGroup_ByUserId_ByGroupId(userId:string, groupId:string)

// return Promise

</script>
```

## GET /ugc/v1/public/namespaces/{namespace}/users/{userId}/groups/{groupId}

```
<script src="https://unpkg.com/@accelbyte/sdk/dist/global/index.global.js"></script>
<script src="https://unpkg.com/@accelbyte/sdk-ugc/dist/global/index.global.js"></script>
  
<script>

const sdk = AccelByteSDK.AccelByte.SDK({
  coreConfig: {
    baseURL: '__AGS_DOMAIN__',
    clientId: '__IAM_CLIENT_ID__',
    namespace: '__NAMESPACE__',
    redirectURI: '__IAM_CLIENT_REDIRECT_URI__'
  }
})

AccelByteSDK_UGC.PublicGroupApi(sdk, { axiosConfig: { request: { headers: { Authorization: 'Bearer {access_token}' } } } })
  .getGroup_ByUserId_ByGroupId(userId:string, groupId:string)

// return Promise<CreateGroupResponse>

</script>
```

## PUT /ugc/v1/public/namespaces/{namespace}/users/{userId}/groups/{groupId}

```
<script src="https://unpkg.com/@accelbyte/sdk/dist/global/index.global.js"></script>
<script src="https://unpkg.com/@accelbyte/sdk-ugc/dist/global/index.global.js"></script>
  
<script>

const sdk = AccelByteSDK.AccelByte.SDK({
  coreConfig: {
    baseURL: '__AGS_DOMAIN__',
    clientId: '__IAM_CLIENT_ID__',
    namespace: '__NAMESPACE__',
    redirectURI: '__IAM_CLIENT_REDIRECT_URI__'
  }
})

AccelByteSDK_UGC.PublicGroupApi(sdk, { axiosConfig: { request: { headers: { Authorization: 'Bearer {access_token}' } } } })
  .updateGroup_ByUserId_ByGroupId(userId:string, groupId:string, data: {
             CreateGroupRequest
    })

// return Promise<CreateGroupResponse>

</script>
```

## GET /ugc/v2/public/namespaces/{namespace}/contents/{contentId}/downloader

```
<script src="https://unpkg.com/@accelbyte/sdk/dist/global/index.global.js"></script>
<script src="https://unpkg.com/@accelbyte/sdk-ugc/dist/global/index.global.js"></script>
  
<script>

const sdk = AccelByteSDK.AccelByte.SDK({
  coreConfig: {
    baseURL: '__AGS_DOMAIN__',
    clientId: '__IAM_CLIENT_ID__',
    namespace: '__NAMESPACE__',
    redirectURI: '__IAM_CLIENT_REDIRECT_URI__'
  }
})

AccelByteSDK_UGC.PublicDownloadCountV2Api(sdk)
  .getDownloader_ByContentId_v2(contentId:string,  queryParams?: {
             limit?: number,
             offset?: number,
             sortBy?: string | null,
             userId?: string | null
    })

// return Promise<PaginatedContentDownloaderResponse>

</script>
```

## GET /ugc/v2/public/namespaces/{namespace}/contents/sharecodes/{shareCode}

```
<script src="https://unpkg.com/@accelbyte/sdk/dist/global/index.global.js"></script>
<script src="https://unpkg.com/@accelbyte/sdk-ugc/dist/global/index.global.js"></script>
  
<script>

const sdk = AccelByteSDK.AccelByte.SDK({
  coreConfig: {
    baseURL: '__AGS_DOMAIN__',
    clientId: '__IAM_CLIENT_ID__',
    namespace: '__NAMESPACE__',
    redirectURI: '__IAM_CLIENT_REDIRECT_URI__'
  }
})

AccelByteSDK_UGC.PublicContentV2Api(sdk, { axiosConfig: { request: { headers: { Authorization: 'Bearer {access_token}' } } } })
  .getContentSharecode_ByShareCode_v2(shareCode:string)

// return Promise<ContentDownloadResponseV2>

</script>
```

## GET /ugc/v2/public/namespaces/{namespace}/users/{userId}/staging-contents

```
<script src="https://unpkg.com/@accelbyte/sdk/dist/global/index.global.js"></script>
<script src="https://unpkg.com/@accelbyte/sdk-ugc/dist/global/index.global.js"></script>
  
<script>

const sdk = AccelByteSDK.AccelByte.SDK({
  coreConfig: {
    baseURL: '__AGS_DOMAIN__',
    clientId: '__IAM_CLIENT_ID__',
    namespace: '__NAMESPACE__',
    redirectURI: '__IAM_CLIENT_REDIRECT_URI__'
  }
})

AccelByteSDK_UGC.PublicStagingContentApi(sdk, { axiosConfig: { request: { headers: { Authorization: 'Bearer {access_token}' } } } })
  .getStagingContents_ByUserId_v2(userId:string,  queryParams?: {
             limit?: number,
             offset?: number,
             sortBy?: string | null,
             status?: string | null
    })

// return Promise<PaginatedListStagingContentResponse>

</script>
```

## POST /ugc/v1/public/namespaces/{namespace}/contents/{contentId}/downloadcount

```
<script src="https://unpkg.com/@accelbyte/sdk/dist/global/index.global.js"></script>
<script src="https://unpkg.com/@accelbyte/sdk-ugc/dist/global/index.global.js"></script>
  
<script>

const sdk = AccelByteSDK.AccelByte.SDK({
  coreConfig: {
    baseURL: '__AGS_DOMAIN__',
    clientId: '__IAM_CLIENT_ID__',
    namespace: '__NAMESPACE__',
    redirectURI: '__IAM_CLIENT_REDIRECT_URI__'
  }
})

AccelByteSDK_UGC.PublicDownloadCountLegacyApi(sdk, { axiosConfig: { request: { headers: { Authorization: 'Bearer {access_token}' } } } })
  .createDownloadcount_ByContentId(contentId:string)

// return Promise<AddDownloadCountResponse>

</script>
```

## POST /ugc/v2/public/namespaces/{namespace}/contents/{contentId}/downloadcount

```
<script src="https://unpkg.com/@accelbyte/sdk/dist/global/index.global.js"></script>
<script src="https://unpkg.com/@accelbyte/sdk-ugc/dist/global/index.global.js"></script>
  
<script>

const sdk = AccelByteSDK.AccelByte.SDK({
  coreConfig: {
    baseURL: '__AGS_DOMAIN__',
    clientId: '__IAM_CLIENT_ID__',
    namespace: '__NAMESPACE__',
    redirectURI: '__IAM_CLIENT_REDIRECT_URI__'
  }
})

AccelByteSDK_UGC.PublicDownloadCountV2Api(sdk, { axiosConfig: { request: { headers: { Authorization: 'Bearer {access_token}' } } } })
  .createDownloadcount_ByContentId_v2(contentId:string)

// return Promise<AddDownloadCountResponse>

</script>
```

## DELETE /ugc/v1/public/namespaces/{namespace}/users/{userId}/channels/{channelId}

```
<script src="https://unpkg.com/@accelbyte/sdk/dist/global/index.global.js"></script>
<script src="https://unpkg.com/@accelbyte/sdk-ugc/dist/global/index.global.js"></script>
  
<script>

const sdk = AccelByteSDK.AccelByte.SDK({
  coreConfig: {
    baseURL: '__AGS_DOMAIN__',
    clientId: '__IAM_CLIENT_ID__',
    namespace: '__NAMESPACE__',
    redirectURI: '__IAM_CLIENT_REDIRECT_URI__'
  }
})

AccelByteSDK_UGC.PublicChannelApi(sdk, { axiosConfig: { request: { headers: { Authorization: 'Bearer {access_token}' } } } })
  .deleteChannel_ByUserId_ByChannelId(userId:string, channelId:string)

// return Promise

</script>
```

## PUT /ugc/v1/public/namespaces/{namespace}/users/{userId}/channels/{channelId}

```
<script src="https://unpkg.com/@accelbyte/sdk/dist/global/index.global.js"></script>
<script src="https://unpkg.com/@accelbyte/sdk-ugc/dist/global/index.global.js"></script>
  
<script>

const sdk = AccelByteSDK.AccelByte.SDK({
  coreConfig: {
    baseURL: '__AGS_DOMAIN__',
    clientId: '__IAM_CLIENT_ID__',
    namespace: '__NAMESPACE__',
    redirectURI: '__IAM_CLIENT_REDIRECT_URI__'
  }
})

AccelByteSDK_UGC.PublicChannelApi(sdk, { axiosConfig: { request: { headers: { Authorization: 'Bearer {access_token}' } } } })
  .updateChannel_ByUserId_ByChannelId(userId:string, channelId:string, data: {
             UpdateChannelRequest
    })

// return Promise<ChannelResponse>

</script>
```

## GET /ugc/v1/public/namespaces/{namespace}/users/{userId}/groups/{groupId}/contents

```
<script src="https://unpkg.com/@accelbyte/sdk/dist/global/index.global.js"></script>
<script src="https://unpkg.com/@accelbyte/sdk-ugc/dist/global/index.global.js"></script>
  
<script>

const sdk = AccelByteSDK.AccelByte.SDK({
  coreConfig: {
    baseURL: '__AGS_DOMAIN__',
    clientId: '__IAM_CLIENT_ID__',
    namespace: '__NAMESPACE__',
    redirectURI: '__IAM_CLIENT_REDIRECT_URI__'
  }
})

AccelByteSDK_UGC.PublicGroupApi(sdk, { axiosConfig: { request: { headers: { Authorization: 'Bearer {access_token}' } } } })
  .getContents_ByUserId_ByGroupId(userId:string, groupId:string,  queryParams?: {
             limit?: number,
             offset?: number
    })

// return Promise<PaginatedContentDownloadResponse>

</script>
```

## GET /ugc/v2/public/namespaces/{namespace}/users/{userId}/groups/{groupId}/contents

```
<script src="https://unpkg.com/@accelbyte/sdk/dist/global/index.global.js"></script>
<script src="https://unpkg.com/@accelbyte/sdk-ugc/dist/global/index.global.js"></script>
  
<script>

const sdk = AccelByteSDK.AccelByte.SDK({
  coreConfig: {
    baseURL: '__AGS_DOMAIN__',
    clientId: '__IAM_CLIENT_ID__',
    namespace: '__NAMESPACE__',
    redirectURI: '__IAM_CLIENT_REDIRECT_URI__'
  }
})

AccelByteSDK_UGC.PublicGroupApi(sdk, { axiosConfig: { request: { headers: { Authorization: 'Bearer {access_token}' } } } })
  .getContents_ByUserId_ByGroupId_v2(userId:string, groupId:string,  queryParams?: {
             limit?: number,
             offset?: number
    })

// return Promise<PaginatedContentDownloadResponseV2>

</script>
```

## DELETE /ugc/v2/public/namespaces/{namespace}/users/{userId}/staging-contents/{contentId}

```
<script src="https://unpkg.com/@accelbyte/sdk/dist/global/index.global.js"></script>
<script src="https://unpkg.com/@accelbyte/sdk-ugc/dist/global/index.global.js"></script>
  
<script>

const sdk = AccelByteSDK.AccelByte.SDK({
  coreConfig: {
    baseURL: '__AGS_DOMAIN__',
    clientId: '__IAM_CLIENT_ID__',
    namespace: '__NAMESPACE__',
    redirectURI: '__IAM_CLIENT_REDIRECT_URI__'
  }
})

AccelByteSDK_UGC.PublicStagingContentApi(sdk, { axiosConfig: { request: { headers: { Authorization: 'Bearer {access_token}' } } } })
  .deleteStagingContent_ByUserId_ByContentId_v2(userId:string, contentId:string)

// return Promise

</script>
```

## GET /ugc/v2/public/namespaces/{namespace}/users/{userId}/staging-contents/{contentId}

```
<script src="https://unpkg.com/@accelbyte/sdk/dist/global/index.global.js"></script>
<script src="https://unpkg.com/@accelbyte/sdk-ugc/dist/global/index.global.js"></script>
  
<script>

const sdk = AccelByteSDK.AccelByte.SDK({
  coreConfig: {
    baseURL: '__AGS_DOMAIN__',
    clientId: '__IAM_CLIENT_ID__',
    namespace: '__NAMESPACE__',
    redirectURI: '__IAM_CLIENT_REDIRECT_URI__'
  }
})

AccelByteSDK_UGC.PublicStagingContentApi(sdk, { axiosConfig: { request: { headers: { Authorization: 'Bearer {access_token}' } } } })
  .getStagingContent_ByUserId_ByContentId_v2(userId:string, contentId:string)

// return Promise<StagingContentResponse>

</script>
```

## PUT /ugc/v2/public/namespaces/{namespace}/users/{userId}/staging-contents/{contentId}

```
<script src="https://unpkg.com/@accelbyte/sdk/dist/global/index.global.js"></script>
<script src="https://unpkg.com/@accelbyte/sdk-ugc/dist/global/index.global.js"></script>
  
<script>

const sdk = AccelByteSDK.AccelByte.SDK({
  coreConfig: {
    baseURL: '__AGS_DOMAIN__',
    clientId: '__IAM_CLIENT_ID__',
    namespace: '__NAMESPACE__',
    redirectURI: '__IAM_CLIENT_REDIRECT_URI__'
  }
})

AccelByteSDK_UGC.PublicStagingContentApi(sdk, { axiosConfig: { request: { headers: { Authorization: 'Bearer {access_token}' } } } })
  .updateStagingContent_ByUserId_ByContentId_v2(userId:string, contentId:string, data: {
             UpdateStagingContentRequest
    })

// return Promise<StagingContentResponse>

</script>
```

## POST /ugc/v1/public/namespaces/{namespace}/users/{userId}/channels/{channelId}/contents

```
<script src="https://unpkg.com/@accelbyte/sdk/dist/global/index.global.js"></script>
<script src="https://unpkg.com/@accelbyte/sdk-ugc/dist/global/index.global.js"></script>
  
<script>

const sdk = AccelByteSDK.AccelByte.SDK({
  coreConfig: {
    baseURL: '__AGS_DOMAIN__',
    clientId: '__IAM_CLIENT_ID__',
    namespace: '__NAMESPACE__',
    redirectURI: '__IAM_CLIENT_REDIRECT_URI__'
  }
})

AccelByteSDK_UGC.PublicContentLegacyApi(sdk, { axiosConfig: { request: { headers: { Authorization: 'Bearer {access_token}' } } } })
  .createContent_ByUserId_ByChannelId(userId:string, channelId:string, data: {
             CreateContentRequest
    })

// return Promise<CreateContentResponse>

</script>
```

## POST /ugc/v2/public/namespaces/{namespace}/users/{userId}/channels/{channelId}/contents

```
<script src="https://unpkg.com/@accelbyte/sdk/dist/global/index.global.js"></script>
<script src="https://unpkg.com/@accelbyte/sdk-ugc/dist/global/index.global.js"></script>
  
<script>

const sdk = AccelByteSDK.AccelByte.SDK({
  coreConfig: {
    baseURL: '__AGS_DOMAIN__',
    clientId: '__IAM_CLIENT_ID__',
    namespace: '__NAMESPACE__',
    redirectURI: '__IAM_CLIENT_REDIRECT_URI__'
  }
})

AccelByteSDK_UGC.PublicContentV2Api(sdk, { axiosConfig: { request: { headers: { Authorization: 'Bearer {access_token}' } } } })
  .createContent_ByUserId_ByChannelId_v2(userId:string, channelId:string, data: {
             ContentRequestV2
    })

// return Promise<CreateContentResponseV2>

</script>
```

## POST /ugc/v1/public/namespaces/{namespace}/users/{userId}/channels/{channelId}/contents/s3

```
<script src="https://unpkg.com/@accelbyte/sdk/dist/global/index.global.js"></script>
<script src="https://unpkg.com/@accelbyte/sdk-ugc/dist/global/index.global.js"></script>
  
<script>

const sdk = AccelByteSDK.AccelByte.SDK({
  coreConfig: {
    baseURL: '__AGS_DOMAIN__',
    clientId: '__IAM_CLIENT_ID__',
    namespace: '__NAMESPACE__',
    redirectURI: '__IAM_CLIENT_REDIRECT_URI__'
  }
})

AccelByteSDK_UGC.PublicContentLegacyApi(sdk, { axiosConfig: { request: { headers: { Authorization: 'Bearer {access_token}' } } } })
  .createContentS3_ByUserId_ByChannelId(userId:string, channelId:string, data: {
             PublicCreateContentRequestS3
    })

// return Promise<CreateContentResponse>

</script>
```

## POST /ugc/v1/public/namespaces/{namespace}/users/{userId}/contents/{contentId}/screenshots

```
<script src="https://unpkg.com/@accelbyte/sdk/dist/global/index.global.js"></script>
<script src="https://unpkg.com/@accelbyte/sdk-ugc/dist/global/index.global.js"></script>
  
<script>

const sdk = AccelByteSDK.AccelByte.SDK({
  coreConfig: {
    baseURL: '__AGS_DOMAIN__',
    clientId: '__IAM_CLIENT_ID__',
    namespace: '__NAMESPACE__',
    redirectURI: '__IAM_CLIENT_REDIRECT_URI__'
  }
})

AccelByteSDK_UGC.PublicContentLegacyApi(sdk, { axiosConfig: { request: { headers: { Authorization: 'Bearer {access_token}' } } } })
  .createScreenshot_ByUserId_ByContentId(userId:string, contentId:string, data: {
             CreateScreenshotRequest
    })

// return Promise<CreateScreenshotResponse>

</script>
```

## PUT /ugc/v1/public/namespaces/{namespace}/users/{userId}/contents/{contentId}/screenshots

```
<script src="https://unpkg.com/@accelbyte/sdk/dist/global/index.global.js"></script>
<script src="https://unpkg.com/@accelbyte/sdk-ugc/dist/global/index.global.js"></script>
  
<script>

const sdk = AccelByteSDK.AccelByte.SDK({
  coreConfig: {
    baseURL: '__AGS_DOMAIN__',
    clientId: '__IAM_CLIENT_ID__',
    namespace: '__NAMESPACE__',
    redirectURI: '__IAM_CLIENT_REDIRECT_URI__'
  }
})

AccelByteSDK_UGC.PublicContentLegacyApi(sdk, { axiosConfig: { request: { headers: { Authorization: 'Bearer {access_token}' } } } })
  .updateScreenshot_ByUserId_ByContentId(userId:string, contentId:string, data: {
             UpdateScreenshotRequest
    })

// return Promise<UpdateScreenshotResponse>

</script>
```

## POST /ugc/v2/public/namespaces/{namespace}/users/{userId}/contents/{contentId}/screenshots

```
<script src="https://unpkg.com/@accelbyte/sdk/dist/global/index.global.js"></script>
<script src="https://unpkg.com/@accelbyte/sdk-ugc/dist/global/index.global.js"></script>
  
<script>

const sdk = AccelByteSDK.AccelByte.SDK({
  coreConfig: {
    baseURL: '__AGS_DOMAIN__',
    clientId: '__IAM_CLIENT_ID__',
    namespace: '__NAMESPACE__',
    redirectURI: '__IAM_CLIENT_REDIRECT_URI__'
  }
})

AccelByteSDK_UGC.PublicContentV2Api(sdk, { axiosConfig: { request: { headers: { Authorization: 'Bearer {access_token}' } } } })
  .createScreenshot_ByUserId_ByContentId_v2(userId:string, contentId:string, data: {
             CreateScreenshotRequest
    })

// return Promise<CreateScreenshotResponse>

</script>
```

## PUT /ugc/v2/public/namespaces/{namespace}/users/{userId}/contents/{contentId}/screenshots

```
<script src="https://unpkg.com/@accelbyte/sdk/dist/global/index.global.js"></script>
<script src="https://unpkg.com/@accelbyte/sdk-ugc/dist/global/index.global.js"></script>
  
<script>

const sdk = AccelByteSDK.AccelByte.SDK({
  coreConfig: {
    baseURL: '__AGS_DOMAIN__',
    clientId: '__IAM_CLIENT_ID__',
    namespace: '__NAMESPACE__',
    redirectURI: '__IAM_CLIENT_REDIRECT_URI__'
  }
})

AccelByteSDK_UGC.PublicContentV2Api(sdk, { axiosConfig: { request: { headers: { Authorization: 'Bearer {access_token}' } } } })
  .updateScreenshot_ByUserId_ByContentId_v2(userId:string, contentId:string, data: {
             UpdateScreenshotRequest
    })

// return Promise<UpdateScreenshotResponse>

</script>
```

## DELETE /ugc/v1/public/namespaces/{namespace}/users/{userId}/channels/{channelId}/contents/{contentId}

```
<script src="https://unpkg.com/@accelbyte/sdk/dist/global/index.global.js"></script>
<script src="https://unpkg.com/@accelbyte/sdk-ugc/dist/global/index.global.js"></script>
  
<script>

const sdk = AccelByteSDK.AccelByte.SDK({
  coreConfig: {
    baseURL: '__AGS_DOMAIN__',
    clientId: '__IAM_CLIENT_ID__',
    namespace: '__NAMESPACE__',
    redirectURI: '__IAM_CLIENT_REDIRECT_URI__'
  }
})

AccelByteSDK_UGC.PublicContentLegacyApi(sdk, { axiosConfig: { request: { headers: { Authorization: 'Bearer {access_token}' } } } })
  .deleteContent_ByUserId_ByChannelId_ByContentId(userId:string, channelId:string, contentId:string)

// return Promise

</script>
```

## PUT /ugc/v1/public/namespaces/{namespace}/users/{userId}/channels/{channelId}/contents/{contentId}

```
<script src="https://unpkg.com/@accelbyte/sdk/dist/global/index.global.js"></script>
<script src="https://unpkg.com/@accelbyte/sdk-ugc/dist/global/index.global.js"></script>
  
<script>

const sdk = AccelByteSDK.AccelByte.SDK({
  coreConfig: {
    baseURL: '__AGS_DOMAIN__',
    clientId: '__IAM_CLIENT_ID__',
    namespace: '__NAMESPACE__',
    redirectURI: '__IAM_CLIENT_REDIRECT_URI__'
  }
})

AccelByteSDK_UGC.PublicContentLegacyApi(sdk, { axiosConfig: { request: { headers: { Authorization: 'Bearer {access_token}' } } } })
  .updateContent_ByUserId_ByChannelId_ByContentId(userId:string, channelId:string, contentId:string, data: {
             CreateContentRequest
    })

// return Promise<CreateContentResponse>

</script>
```

## DELETE /ugc/v2/public/namespaces/{namespace}/users/{userId}/channels/{channelId}/contents/{contentId}

```
<script src="https://unpkg.com/@accelbyte/sdk/dist/global/index.global.js"></script>
<script src="https://unpkg.com/@accelbyte/sdk-ugc/dist/global/index.global.js"></script>
  
<script>

const sdk = AccelByteSDK.AccelByte.SDK({
  coreConfig: {
    baseURL: '__AGS_DOMAIN__',
    clientId: '__IAM_CLIENT_ID__',
    namespace: '__NAMESPACE__',
    redirectURI: '__IAM_CLIENT_REDIRECT_URI__'
  }
})

AccelByteSDK_UGC.PublicContentV2Api(sdk, { axiosConfig: { request: { headers: { Authorization: 'Bearer {access_token}' } } } })
  .deleteContent_ByUserId_ByChannelId_ByContentId_v2(userId:string, channelId:string, contentId:string)

// return Promise

</script>
```

## PATCH /ugc/v2/public/namespaces/{namespace}/users/{userId}/channels/{channelId}/contents/{contentId}

```
<script src="https://unpkg.com/@accelbyte/sdk/dist/global/index.global.js"></script>
<script src="https://unpkg.com/@accelbyte/sdk-ugc/dist/global/index.global.js"></script>
  
<script>

const sdk = AccelByteSDK.AccelByte.SDK({
  coreConfig: {
    baseURL: '__AGS_DOMAIN__',
    clientId: '__IAM_CLIENT_ID__',
    namespace: '__NAMESPACE__',
    redirectURI: '__IAM_CLIENT_REDIRECT_URI__'
  }
})

AccelByteSDK_UGC.PublicContentV2Api(sdk, { axiosConfig: { request: { headers: { Authorization: 'Bearer {access_token}' } } } })
  .patchContent_ByUserId_ByChannelId_ByContentId_v2(userId:string, channelId:string, contentId:string, data: {
             UpdateContentRequestV2
    })

// return Promise<UpdateContentResponseV2>

</script>
```

## PUT /ugc/v1/public/namespaces/{namespace}/users/{userId}/channels/{channelId}/contents/s3/{contentId}

```
<script src="https://unpkg.com/@accelbyte/sdk/dist/global/index.global.js"></script>
<script src="https://unpkg.com/@accelbyte/sdk-ugc/dist/global/index.global.js"></script>
  
<script>

const sdk = AccelByteSDK.AccelByte.SDK({
  coreConfig: {
    baseURL: '__AGS_DOMAIN__',
    clientId: '__IAM_CLIENT_ID__',
    namespace: '__NAMESPACE__',
    redirectURI: '__IAM_CLIENT_REDIRECT_URI__'
  }
})

AccelByteSDK_UGC.PublicContentLegacyApi(sdk, { axiosConfig: { request: { headers: { Authorization: 'Bearer {access_token}' } } } })
  .updateContentS3_ByUserId_ByChannelId_ByContentId(userId:string, channelId:string, contentId:string, data: {
             UpdateContentRequest
    })

// return Promise<CreateContentResponse>

</script>
```

## DELETE /ugc/v1/public/namespaces/{namespace}/users/{userId}/contents/{contentId}/screenshots/{screenshotId}

```
<script src="https://unpkg.com/@accelbyte/sdk/dist/global/index.global.js"></script>
<script src="https://unpkg.com/@accelbyte/sdk-ugc/dist/global/index.global.js"></script>
  
<script>

const sdk = AccelByteSDK.AccelByte.SDK({
  coreConfig: {
    baseURL: '__AGS_DOMAIN__',
    clientId: '__IAM_CLIENT_ID__',
    namespace: '__NAMESPACE__',
    redirectURI: '__IAM_CLIENT_REDIRECT_URI__'
  }
})

AccelByteSDK_UGC.PublicContentLegacyApi(sdk, { axiosConfig: { request: { headers: { Authorization: 'Bearer {access_token}' } } } })
  .deleteScreenshot_ByUserId_ByContentId_ByScreenshotId(userId:string, contentId:string, screenshotId:string)

// return Promise

</script>
```

## DELETE /ugc/v2/public/namespaces/{namespace}/users/{userId}/contents/{contentId}/screenshots/{screenshotId}

```
<script src="https://unpkg.com/@accelbyte/sdk/dist/global/index.global.js"></script>
<script src="https://unpkg.com/@accelbyte/sdk-ugc/dist/global/index.global.js"></script>
  
<script>

const sdk = AccelByteSDK.AccelByte.SDK({
  coreConfig: {
    baseURL: '__AGS_DOMAIN__',
    clientId: '__IAM_CLIENT_ID__',
    namespace: '__NAMESPACE__',
    redirectURI: '__IAM_CLIENT_REDIRECT_URI__'
  }
})

AccelByteSDK_UGC.PublicContentV2Api(sdk, { axiosConfig: { request: { headers: { Authorization: 'Bearer {access_token}' } } } })
  .deleteScreenshot_ByUserId_ByContentId_ByScreenshotId_v2(userId:string, contentId:string, screenshotId:string)

// return Promise

</script>
```

## PATCH /ugc/v1/public/namespaces/{namespace}/users/{userId}/channels/{channelId}/contents/{contentId}/sharecode

```
<script src="https://unpkg.com/@accelbyte/sdk/dist/global/index.global.js"></script>
<script src="https://unpkg.com/@accelbyte/sdk-ugc/dist/global/index.global.js"></script>
  
<script>

const sdk = AccelByteSDK.AccelByte.SDK({
  coreConfig: {
    baseURL: '__AGS_DOMAIN__',
    clientId: '__IAM_CLIENT_ID__',
    namespace: '__NAMESPACE__',
    redirectURI: '__IAM_CLIENT_REDIRECT_URI__'
  }
})

AccelByteSDK_UGC.PublicContentLegacyApi(sdk, { axiosConfig: { request: { headers: { Authorization: 'Bearer {access_token}' } } } })
  .patchSharecode_ByUserId_ByChannelId_ByContentId(userId:string, channelId:string, contentId:string, data: {
             UpdateContentShareCodeRequest
    })

// return Promise<CreateContentResponse>

</script>
```

## PATCH /ugc/v2/public/namespaces/{namespace}/users/{userId}/channels/{channelId}/contents/{contentId}/sharecode

```
<script src="https://unpkg.com/@accelbyte/sdk/dist/global/index.global.js"></script>
<script src="https://unpkg.com/@accelbyte/sdk-ugc/dist/global/index.global.js"></script>
  
<script>

const sdk = AccelByteSDK.AccelByte.SDK({
  coreConfig: {
    baseURL: '__AGS_DOMAIN__',
    clientId: '__IAM_CLIENT_ID__',
    namespace: '__NAMESPACE__',
    redirectURI: '__IAM_CLIENT_REDIRECT_URI__'
  }
})

AccelByteSDK_UGC.PublicContentV2Api(sdk, { axiosConfig: { request: { headers: { Authorization: 'Bearer {access_token}' } } } })
  .patchSharecode_ByUserId_ByChannelId_ByContentId_v2(userId:string, channelId:string, contentId:string, data: {
             UpdateContentShareCodeRequest
    })

// return Promise<CreateContentResponseV2>

</script>
```

## PATCH /ugc/v2/public/namespaces/{namespace}/users/{userId}/channels/{channelId}/contents/{contentId}/uploadUrl

```
<script src="https://unpkg.com/@accelbyte/sdk/dist/global/index.global.js"></script>
<script src="https://unpkg.com/@accelbyte/sdk-ugc/dist/global/index.global.js"></script>
  
<script>

const sdk = AccelByteSDK.AccelByte.SDK({
  coreConfig: {
    baseURL: '__AGS_DOMAIN__',
    clientId: '__IAM_CLIENT_ID__',
    namespace: '__NAMESPACE__',
    redirectURI: '__IAM_CLIENT_REDIRECT_URI__'
  }
})

AccelByteSDK_UGC.PublicContentV2Api(sdk, { axiosConfig: { request: { headers: { Authorization: 'Bearer {access_token}' } } } })
  .patchUploadUrl_ByUserId_ByChannelId_ByContentId_v2(userId:string, channelId:string, contentId:string, data: {
             GenerateContentUploadUrlRequest
    })

// return Promise<GenerateContentUploadUrlResponse>

</script>
```

## DELETE /ugc/v1/public/namespaces/{namespace}/users/{userId}/channels/{channelId}/contents/sharecodes/{shareCode}

```
<script src="https://unpkg.com/@accelbyte/sdk/dist/global/index.global.js"></script>
<script src="https://unpkg.com/@accelbyte/sdk-ugc/dist/global/index.global.js"></script>
  
<script>

const sdk = AccelByteSDK.AccelByte.SDK({
  coreConfig: {
    baseURL: '__AGS_DOMAIN__',
    clientId: '__IAM_CLIENT_ID__',
    namespace: '__NAMESPACE__',
    redirectURI: '__IAM_CLIENT_REDIRECT_URI__'
  }
})

AccelByteSDK_UGC.PublicContentLegacyApi(sdk, { axiosConfig: { request: { headers: { Authorization: 'Bearer {access_token}' } } } })
  .deleteContentSharecode_ByUserId_ByChannelId_ByShareCode(userId:string, channelId:string, shareCode:string)

// return Promise

</script>
```

## DELETE /ugc/v2/public/namespaces/{namespace}/users/{userId}/channels/{channelId}/contents/sharecodes/{shareCode}

```
<script src="https://unpkg.com/@accelbyte/sdk/dist/global/index.global.js"></script>
<script src="https://unpkg.com/@accelbyte/sdk-ugc/dist/global/index.global.js"></script>
  
<script>

const sdk = AccelByteSDK.AccelByte.SDK({
  coreConfig: {
    baseURL: '__AGS_DOMAIN__',
    clientId: '__IAM_CLIENT_ID__',
    namespace: '__NAMESPACE__',
    redirectURI: '__IAM_CLIENT_REDIRECT_URI__'
  }
})

AccelByteSDK_UGC.PublicContentV2Api(sdk, { axiosConfig: { request: { headers: { Authorization: 'Bearer {access_token}' } } } })
  .deleteContentSharecode_ByUserId_ByChannelId_ByShareCode_v2(userId:string, channelId:string, shareCode:string)

// return Promise

</script>
```

## PATCH /ugc/v2/public/namespaces/{namespace}/users/{userId}/channels/{channelId}/contents/{contentId}/fileLocation

```
<script src="https://unpkg.com/@accelbyte/sdk/dist/global/index.global.js"></script>
<script src="https://unpkg.com/@accelbyte/sdk-ugc/dist/global/index.global.js"></script>
  
<script>

const sdk = AccelByteSDK.AccelByte.SDK({
  coreConfig: {
    baseURL: '__AGS_DOMAIN__',
    clientId: '__IAM_CLIENT_ID__',
    namespace: '__NAMESPACE__',
    redirectURI: '__IAM_CLIENT_REDIRECT_URI__'
  }
})

AccelByteSDK_UGC.PublicContentV2Api(sdk, { axiosConfig: { request: { headers: { Authorization: 'Bearer {access_token}' } } } })
  .patchFileLocation_ByUserId_ByChannelId_ByContentId_v2(userId:string, channelId:string, contentId:string, data: {
             UpdateFileLocationRequest
    })

// return Promise<UpdateContentResponseV2>

</script>
```

## PUT /ugc/v1/public/namespaces/{namespace}/users/{userId}/channels/{channelId}/contents/s3/sharecodes/{shareCode}

```
<script src="https://unpkg.com/@accelbyte/sdk/dist/global/index.global.js"></script>
<script src="https://unpkg.com/@accelbyte/sdk-ugc/dist/global/index.global.js"></script>
  
<script>

const sdk = AccelByteSDK.AccelByte.SDK({
  coreConfig: {
    baseURL: '__AGS_DOMAIN__',
    clientId: '__IAM_CLIENT_ID__',
    namespace: '__NAMESPACE__',
    redirectURI: '__IAM_CLIENT_REDIRECT_URI__'
  }
})

AccelByteSDK_UGC.PublicContentLegacyApi(sdk, { axiosConfig: { request: { headers: { Authorization: 'Bearer {access_token}' } } } })
  .updateContentS3Sharecode_ByUserId_ByChannelId_ByShareCode(userId:string, channelId:string, shareCode:string, data: {
             UpdateContentRequest
    })

// return Promise<CreateContentResponse>

</script>
```

## PUT /ugc/v2/public/namespaces/{namespace}/users/{userId}/channels/{channelId}/contents/s3/sharecodes/{shareCode}

```
<script src="https://unpkg.com/@accelbyte/sdk/dist/global/index.global.js"></script>
<script src="https://unpkg.com/@accelbyte/sdk-ugc/dist/global/index.global.js"></script>
  
<script>

const sdk = AccelByteSDK.AccelByte.SDK({
  coreConfig: {
    baseURL: '__AGS_DOMAIN__',
    clientId: '__IAM_CLIENT_ID__',
    namespace: '__NAMESPACE__',
    redirectURI: '__IAM_CLIENT_REDIRECT_URI__'
  }
})

AccelByteSDK_UGC.PublicContentV2Api(sdk, { axiosConfig: { request: { headers: { Authorization: 'Bearer {access_token}' } } } })
  .updateContentS3Sharecode_ByUserId_ByChannelId_ByShareCode_v2(userId:string, channelId:string, shareCode:string, data: {
             UpdateContentRequestV2
    })

// return Promise<CreateContentResponseV2>

</script>
```

## GET /ugc/v1/admin/namespaces/{namespace}/tags

```
<script src="https://unpkg.com/@accelbyte/sdk/dist/global/index.global.js"></script>
<script src="https://unpkg.com/@accelbyte/sdk-ugc/dist/global/index.global.js"></script>
  
<script>

const sdk = AccelByteSDK.AccelByte.SDK({
  coreConfig: {
    baseURL: '__AGS_DOMAIN__',
    clientId: '__IAM_CLIENT_ID__',
    namespace: '__NAMESPACE__',
    redirectURI: '__IAM_CLIENT_REDIRECT_URI__'
  }
})

AccelByteSDK_UGC.TagAdminApi(sdk, { axiosConfig: { request: { headers: { Authorization: 'Bearer {access_token}' } } } })
  .getTags( queryParams?: {
             limit?: number,
             offset?: number
    })

// return Promise<PaginatedGetTagResponse>

</script>
```

## POST /ugc/v1/admin/namespaces/{namespace}/tags

```
<script src="https://unpkg.com/@accelbyte/sdk/dist/global/index.global.js"></script>
<script src="https://unpkg.com/@accelbyte/sdk-ugc/dist/global/index.global.js"></script>
  
<script>

const sdk = AccelByteSDK.AccelByte.SDK({
  coreConfig: {
    baseURL: '__AGS_DOMAIN__',
    clientId: '__IAM_CLIENT_ID__',
    namespace: '__NAMESPACE__',
    redirectURI: '__IAM_CLIENT_REDIRECT_URI__'
  }
})

AccelByteSDK_UGC.TagAdminApi(sdk, { axiosConfig: { request: { headers: { Authorization: 'Bearer {access_token}' } } } })
  .createTag(data: {
             CreateTagRequest
    })

// return Promise<CreateTagResponse>

</script>
```

## GET /ugc/v1/admin/namespaces/{namespace}/types

```
<script src="https://unpkg.com/@accelbyte/sdk/dist/global/index.global.js"></script>
<script src="https://unpkg.com/@accelbyte/sdk-ugc/dist/global/index.global.js"></script>
  
<script>

const sdk = AccelByteSDK.AccelByte.SDK({
  coreConfig: {
    baseURL: '__AGS_DOMAIN__',
    clientId: '__IAM_CLIENT_ID__',
    namespace: '__NAMESPACE__',
    redirectURI: '__IAM_CLIENT_REDIRECT_URI__'
  }
})

AccelByteSDK_UGC.TypeAdminApi(sdk, { axiosConfig: { request: { headers: { Authorization: 'Bearer {access_token}' } } } })
  .getTypes( queryParams?: {
             limit?: number,
             offset?: number
    })

// return Promise<PaginatedGetTypeResponse>

</script>
```

## POST /ugc/v1/admin/namespaces/{namespace}/types

```
<script src="https://unpkg.com/@accelbyte/sdk/dist/global/index.global.js"></script>
<script src="https://unpkg.com/@accelbyte/sdk-ugc/dist/global/index.global.js"></script>
  
<script>

const sdk = AccelByteSDK.AccelByte.SDK({
  coreConfig: {
    baseURL: '__AGS_DOMAIN__',
    clientId: '__IAM_CLIENT_ID__',
    namespace: '__NAMESPACE__',
    redirectURI: '__IAM_CLIENT_REDIRECT_URI__'
  }
})

AccelByteSDK_UGC.TypeAdminApi(sdk, { axiosConfig: { request: { headers: { Authorization: 'Bearer {access_token}' } } } })
  .createType(data: {
             CreateTypeRequest
    })

// return Promise<CreateTypeResponse>

</script>
```

## GET /ugc/v1/admin/namespaces/{namespace}/groups

```
<script src="https://unpkg.com/@accelbyte/sdk/dist/global/index.global.js"></script>
<script src="https://unpkg.com/@accelbyte/sdk-ugc/dist/global/index.global.js"></script>
  
<script>

const sdk = AccelByteSDK.AccelByte.SDK({
  coreConfig: {
    baseURL: '__AGS_DOMAIN__',
    clientId: '__IAM_CLIENT_ID__',
    namespace: '__NAMESPACE__',
    redirectURI: '__IAM_CLIENT_REDIRECT_URI__'
  }
})

AccelByteSDK_UGC.GroupAdminApi(sdk, { axiosConfig: { request: { headers: { Authorization: 'Bearer {access_token}' } } } })
  .getGroups( queryParams?: {
             limit?: number,
             offset?: number
    })

// return Promise<PaginatedGroupResponse>

</script>
```

## POST /ugc/v1/admin/namespaces/{namespace}/groups

```
<script src="https://unpkg.com/@accelbyte/sdk/dist/global/index.global.js"></script>
<script src="https://unpkg.com/@accelbyte/sdk-ugc/dist/global/index.global.js"></script>
  
<script>

const sdk = AccelByteSDK.AccelByte.SDK({
  coreConfig: {
    baseURL: '__AGS_DOMAIN__',
    clientId: '__IAM_CLIENT_ID__',
    namespace: '__NAMESPACE__',
    redirectURI: '__IAM_CLIENT_REDIRECT_URI__'
  }
})

AccelByteSDK_UGC.GroupAdminApi(sdk, { axiosConfig: { request: { headers: { Authorization: 'Bearer {access_token}' } } } })
  .createGroup(data: {
             CreateGroupRequest
    })

// return Promise<CreateGroupResponse>

</script>
```

## GET /ugc/v2/admin/namespaces/{namespace}/configs

```
<script src="https://unpkg.com/@accelbyte/sdk/dist/global/index.global.js"></script>
<script src="https://unpkg.com/@accelbyte/sdk-ugc/dist/global/index.global.js"></script>
  
<script>

const sdk = AccelByteSDK.AccelByte.SDK({
  coreConfig: {
    baseURL: '__AGS_DOMAIN__',
    clientId: '__IAM_CLIENT_ID__',
    namespace: '__NAMESPACE__',
    redirectURI: '__IAM_CLIENT_REDIRECT_URI__'
  }
})

AccelByteSDK_UGC.ConfigAdminApi(sdk, { axiosConfig: { request: { headers: { Authorization: 'Bearer {access_token}' } } } })
  .getConfigs_v2( queryParams?: {
             limit?: number,
             offset?: number
    })

// return Promise<PaginatedGetConfigsResponse>

</script>
```

## GET /ugc/v1/admin/namespaces/{namespace}/channels

```
<script src="https://unpkg.com/@accelbyte/sdk/dist/global/index.global.js"></script>
<script src="https://unpkg.com/@accelbyte/sdk-ugc/dist/global/index.global.js"></script>
  
<script>

const sdk = AccelByteSDK.AccelByte.SDK({
  coreConfig: {
    baseURL: '__AGS_DOMAIN__',
    clientId: '__IAM_CLIENT_ID__',
    namespace: '__NAMESPACE__',
    redirectURI: '__IAM_CLIENT_REDIRECT_URI__'
  }
})

AccelByteSDK_UGC.ChannelAdminApi(sdk, { axiosConfig: { request: { headers: { Authorization: 'Bearer {access_token}' } } } })
  .getChannels( queryParams?: {
             limit?: number,
             offset?: number
    })

// return Promise<PaginatedGetChannelResponse>

</script>
```

## POST /ugc/v1/admin/namespaces/{namespace}/channels

```
<script src="https://unpkg.com/@accelbyte/sdk/dist/global/index.global.js"></script>
<script src="https://unpkg.com/@accelbyte/sdk-ugc/dist/global/index.global.js"></script>
  
<script>

const sdk = AccelByteSDK.AccelByte.SDK({
  coreConfig: {
    baseURL: '__AGS_DOMAIN__',
    clientId: '__IAM_CLIENT_ID__',
    namespace: '__NAMESPACE__',
    redirectURI: '__IAM_CLIENT_REDIRECT_URI__'
  }
})

AccelByteSDK_UGC.ChannelAdminApi(sdk, { axiosConfig: { request: { headers: { Authorization: 'Bearer {access_token}' } } } })
  .createChannel(data: {
             ChannelRequest
    })

// return Promise<ChannelResponse>

</script>
```

## GET /ugc/v1/admin/namespaces/{namespace}/contents

```
<script src="https://unpkg.com/@accelbyte/sdk/dist/global/index.global.js"></script>
<script src="https://unpkg.com/@accelbyte/sdk-ugc/dist/global/index.global.js"></script>
  
<script>

const sdk = AccelByteSDK.AccelByte.SDK({
  coreConfig: {
    baseURL: '__AGS_DOMAIN__',
    clientId: '__IAM_CLIENT_ID__',
    namespace: '__NAMESPACE__',
    redirectURI: '__IAM_CLIENT_REDIRECT_URI__'
  }
})

AccelByteSDK_UGC.ContentAdminApi(sdk, { axiosConfig: { request: { headers: { Authorization: 'Bearer {access_token}' } } } })
  .getContents( queryParams?: {
             limit?: number,
             offset?: number
    })

// return Promise<PaginatedContentDownloadResponse>

</script>
```

## GET /ugc/v2/admin/namespaces/{namespace}/contents

```
<script src="https://unpkg.com/@accelbyte/sdk/dist/global/index.global.js"></script>
<script src="https://unpkg.com/@accelbyte/sdk-ugc/dist/global/index.global.js"></script>
  
<script>

const sdk = AccelByteSDK.AccelByte.SDK({
  coreConfig: {
    baseURL: '__AGS_DOMAIN__',
    clientId: '__IAM_CLIENT_ID__',
    namespace: '__NAMESPACE__',
    redirectURI: '__IAM_CLIENT_REDIRECT_URI__'
  }
})

AccelByteSDK_UGC.ContentV2AdminApi(sdk, { axiosConfig: { request: { headers: { Authorization: 'Bearer {access_token}' } } } })
  .getContents_v2( queryParams?: {
             isOfficial?: boolean | null,
             limit?: number,
             name?: string | null,
             offset?: number,
             sortBy?: string | null,
             subType?: string | null,
             tags?: string[],
             type?: string | null
    })

// return Promise<PaginatedContentDownloadResponseV2>

</script>
```

## DELETE /ugc/v1/admin/namespaces/{namespace}/tags/{tagId}

```
<script src="https://unpkg.com/@accelbyte/sdk/dist/global/index.global.js"></script>
<script src="https://unpkg.com/@accelbyte/sdk-ugc/dist/global/index.global.js"></script>
  
<script>

const sdk = AccelByteSDK.AccelByte.SDK({
  coreConfig: {
    baseURL: '__AGS_DOMAIN__',
    clientId: '__IAM_CLIENT_ID__',
    namespace: '__NAMESPACE__',
    redirectURI: '__IAM_CLIENT_REDIRECT_URI__'
  }
})

AccelByteSDK_UGC.TagAdminApi(sdk, { axiosConfig: { request: { headers: { Authorization: 'Bearer {access_token}' } } } })
  .deleteTag_ByTagId(tagId:string)

// return Promise

</script>
```

## PUT /ugc/v1/admin/namespaces/{namespace}/tags/{tagId}

```
<script src="https://unpkg.com/@accelbyte/sdk/dist/global/index.global.js"></script>
<script src="https://unpkg.com/@accelbyte/sdk-ugc/dist/global/index.global.js"></script>
  
<script>

const sdk = AccelByteSDK.AccelByte.SDK({
  coreConfig: {
    baseURL: '__AGS_DOMAIN__',
    clientId: '__IAM_CLIENT_ID__',
    namespace: '__NAMESPACE__',
    redirectURI: '__IAM_CLIENT_REDIRECT_URI__'
  }
})

AccelByteSDK_UGC.TagAdminApi(sdk, { axiosConfig: { request: { headers: { Authorization: 'Bearer {access_token}' } } } })
  .updateTag_ByTagId(tagId:string, data: {
             CreateTagRequest
    })

// return Promise<CreateTagResponse>

</script>
```

## POST /ugc/v1/admin/namespaces/{namespace}/contents/bulk

```
<script src="https://unpkg.com/@accelbyte/sdk/dist/global/index.global.js"></script>
<script src="https://unpkg.com/@accelbyte/sdk-ugc/dist/global/index.global.js"></script>
  
<script>

const sdk = AccelByteSDK.AccelByte.SDK({
  coreConfig: {
    baseURL: '__AGS_DOMAIN__',
    clientId: '__IAM_CLIENT_ID__',
    namespace: '__NAMESPACE__',
    redirectURI: '__IAM_CLIENT_REDIRECT_URI__'
  }
})

AccelByteSDK_UGC.ContentAdminApi(sdk, { axiosConfig: { request: { headers: { Authorization: 'Bearer {access_token}' } } } })
  .fetchContentBulk(data: {
             AdminGetContentBulkRequest
    })

// return Promise<ContentDownloadResponseArray>

</script>
```

## PATCH /ugc/v2/admin/namespaces/{namespace}/configs/{key}

```
<script src="https://unpkg.com/@accelbyte/sdk/dist/global/index.global.js"></script>
<script src="https://unpkg.com/@accelbyte/sdk-ugc/dist/global/index.global.js"></script>
  
<script>

const sdk = AccelByteSDK.AccelByte.SDK({
  coreConfig: {
    baseURL: '__AGS_DOMAIN__',
    clientId: '__IAM_CLIENT_ID__',
    namespace: '__NAMESPACE__',
    redirectURI: '__IAM_CLIENT_REDIRECT_URI__'
  }
})

AccelByteSDK_UGC.ConfigAdminApi(sdk, { axiosConfig: { request: { headers: { Authorization: 'Bearer {access_token}' } } } })
  .patchConfig_ByKey_v2(key:string, data: {
             UpdateConfigRequest
    })

// return Promise

</script>
```

## POST /ugc/v2/admin/namespaces/{namespace}/contents/bulk

```
<script src="https://unpkg.com/@accelbyte/sdk/dist/global/index.global.js"></script>
<script src="https://unpkg.com/@accelbyte/sdk-ugc/dist/global/index.global.js"></script>
  
<script>

const sdk = AccelByteSDK.AccelByte.SDK({
  coreConfig: {
    baseURL: '__AGS_DOMAIN__',
    clientId: '__IAM_CLIENT_ID__',
    namespace: '__NAMESPACE__',
    redirectURI: '__IAM_CLIENT_REDIRECT_URI__'
  }
})

AccelByteSDK_UGC.ContentV2AdminApi(sdk, { axiosConfig: { request: { headers: { Authorization: 'Bearer {access_token}' } } } })
  .fetchContentBulk_v2(data: {
             AdminGetContentBulkRequest
    })

// return Promise<ContentDownloadResponseV2Array>

</script>
```

## DELETE /ugc/v1/admin/namespaces/{namespace}/types/{typeId}

```
<script src="https://unpkg.com/@accelbyte/sdk/dist/global/index.global.js"></script>
<script src="https://unpkg.com/@accelbyte/sdk-ugc/dist/global/index.global.js"></script>
  
<script>

const sdk = AccelByteSDK.AccelByte.SDK({
  coreConfig: {
    baseURL: '__AGS_DOMAIN__',
    clientId: '__IAM_CLIENT_ID__',
    namespace: '__NAMESPACE__',
    redirectURI: '__IAM_CLIENT_REDIRECT_URI__'
  }
})

AccelByteSDK_UGC.TypeAdminApi(sdk, { axiosConfig: { request: { headers: { Authorization: 'Bearer {access_token}' } } } })
  .deleteType_ByTypeId(typeId:string)

// return Promise

</script>
```

## PUT /ugc/v1/admin/namespaces/{namespace}/types/{typeId}

```
<script src="https://unpkg.com/@accelbyte/sdk/dist/global/index.global.js"></script>
<script src="https://unpkg.com/@accelbyte/sdk-ugc/dist/global/index.global.js"></script>
  
<script>

const sdk = AccelByteSDK.AccelByte.SDK({
  coreConfig: {
    baseURL: '__AGS_DOMAIN__',
    clientId: '__IAM_CLIENT_ID__',
    namespace: '__NAMESPACE__',
    redirectURI: '__IAM_CLIENT_REDIRECT_URI__'
  }
})

AccelByteSDK_UGC.TypeAdminApi(sdk, { axiosConfig: { request: { headers: { Authorization: 'Bearer {access_token}' } } } })
  .updateType_ByTypeId(typeId:string, data: {
             CreateTypeRequest
    })

// return Promise<CreateTypeResponse>

</script>
```

## GET /ugc/v1/admin/namespaces/{namespace}/contents/search

```
<script src="https://unpkg.com/@accelbyte/sdk/dist/global/index.global.js"></script>
<script src="https://unpkg.com/@accelbyte/sdk-ugc/dist/global/index.global.js"></script>
  
<script>

const sdk = AccelByteSDK.AccelByte.SDK({
  coreConfig: {
    baseURL: '__AGS_DOMAIN__',
    clientId: '__IAM_CLIENT_ID__',
    namespace: '__NAMESPACE__',
    redirectURI: '__IAM_CLIENT_REDIRECT_URI__'
  }
})

AccelByteSDK_UGC.ContentAdminApi(sdk, { axiosConfig: { request: { headers: { Authorization: 'Bearer {access_token}' } } } })
  .getContentsSearch( queryParams?: {
             creator?: string | null,
             ishidden?: string | null,
             isofficial?: string | null,
             limit?: number,
             name?: string | null,
             offset?: number,
             orderby?: string | null,
             sortby?: string | null,
             subtype?: string | null,
             tags?: string[],
             type?: string | null,
             userId?: string | null
    })

// return Promise<PaginatedContentDownloadResponse>

</script>
```

## DELETE /ugc/v1/admin/namespaces/{namespace}/groups/{groupId}

```
<script src="https://unpkg.com/@accelbyte/sdk/dist/global/index.global.js"></script>
<script src="https://unpkg.com/@accelbyte/sdk-ugc/dist/global/index.global.js"></script>
  
<script>

const sdk = AccelByteSDK.AccelByte.SDK({
  coreConfig: {
    baseURL: '__AGS_DOMAIN__',
    clientId: '__IAM_CLIENT_ID__',
    namespace: '__NAMESPACE__',
    redirectURI: '__IAM_CLIENT_REDIRECT_URI__'
  }
})

AccelByteSDK_UGC.GroupAdminApi(sdk, { axiosConfig: { request: { headers: { Authorization: 'Bearer {access_token}' } } } })
  .deleteGroup_ByGroupId(groupId:string)

// return Promise

</script>
```

## GET /ugc/v1/admin/namespaces/{namespace}/groups/{groupId}

```
<script src="https://unpkg.com/@accelbyte/sdk/dist/global/index.global.js"></script>
<script src="https://unpkg.com/@accelbyte/sdk-ugc/dist/global/index.global.js"></script>
  
<script>

const sdk = AccelByteSDK.AccelByte.SDK({
  coreConfig: {
    baseURL: '__AGS_DOMAIN__',
    clientId: '__IAM_CLIENT_ID__',
    namespace: '__NAMESPACE__',
    redirectURI: '__IAM_CLIENT_REDIRECT_URI__'
  }
})

AccelByteSDK_UGC.GroupAdminApi(sdk, { axiosConfig: { request: { headers: { Authorization: 'Bearer {access_token}' } } } })
  .getGroup_ByGroupId(groupId:string)

// return Promise<CreateGroupResponse>

</script>
```

## PUT /ugc/v1/admin/namespaces/{namespace}/groups/{groupId}

```
<script src="https://unpkg.com/@accelbyte/sdk/dist/global/index.global.js"></script>
<script src="https://unpkg.com/@accelbyte/sdk-ugc/dist/global/index.global.js"></script>
  
<script>

const sdk = AccelByteSDK.AccelByte.SDK({
  coreConfig: {
    baseURL: '__AGS_DOMAIN__',
    clientId: '__IAM_CLIENT_ID__',
    namespace: '__NAMESPACE__',
    redirectURI: '__IAM_CLIENT_REDIRECT_URI__'
  }
})

AccelByteSDK_UGC.GroupAdminApi(sdk, { axiosConfig: { request: { headers: { Authorization: 'Bearer {access_token}' } } } })
  .updateGroup_ByGroupId(groupId:string, data: {
             CreateGroupRequest
    })

// return Promise<CreateGroupResponse>

</script>
```

## GET /ugc/v2/admin/namespaces/{namespace}/staging-contents

```
<script src="https://unpkg.com/@accelbyte/sdk/dist/global/index.global.js"></script>
<script src="https://unpkg.com/@accelbyte/sdk-ugc/dist/global/index.global.js"></script>
  
<script>

const sdk = AccelByteSDK.AccelByte.SDK({
  coreConfig: {
    baseURL: '__AGS_DOMAIN__',
    clientId: '__IAM_CLIENT_ID__',
    namespace: '__NAMESPACE__',
    redirectURI: '__IAM_CLIENT_REDIRECT_URI__'
  }
})

AccelByteSDK_UGC.StagingContentAdminApi(sdk, { axiosConfig: { request: { headers: { Authorization: 'Bearer {access_token}' } } } })
  .getStagingContents_v2( queryParams?: {
             limit?: number,
             offset?: number,
             sortBy?: string | null,
             status?: string | null
    })

// return Promise<PaginatedListStagingContentResponse>

</script>
```

## DELETE /ugc/v1/admin/namespaces/{namespace}/channels/{channelId}

```
<script src="https://unpkg.com/@accelbyte/sdk/dist/global/index.global.js"></script>
<script src="https://unpkg.com/@accelbyte/sdk-ugc/dist/global/index.global.js"></script>
  
<script>

const sdk = AccelByteSDK.AccelByte.SDK({
  coreConfig: {
    baseURL: '__AGS_DOMAIN__',
    clientId: '__IAM_CLIENT_ID__',
    namespace: '__NAMESPACE__',
    redirectURI: '__IAM_CLIENT_REDIRECT_URI__'
  }
})

AccelByteSDK_UGC.ChannelAdminApi(sdk, { axiosConfig: { request: { headers: { Authorization: 'Bearer {access_token}' } } } })
  .deleteChannel_ByChannelId(channelId:string)

// return Promise

</script>
```

## PUT /ugc/v1/admin/namespaces/{namespace}/channels/{channelId}

```
<script src="https://unpkg.com/@accelbyte/sdk/dist/global/index.global.js"></script>
<script src="https://unpkg.com/@accelbyte/sdk-ugc/dist/global/index.global.js"></script>
  
<script>

const sdk = AccelByteSDK.AccelByte.SDK({
  coreConfig: {
    baseURL: '__AGS_DOMAIN__',
    clientId: '__IAM_CLIENT_ID__',
    namespace: '__NAMESPACE__',
    redirectURI: '__IAM_CLIENT_REDIRECT_URI__'
  }
})

AccelByteSDK_UGC.ChannelAdminApi(sdk, { axiosConfig: { request: { headers: { Authorization: 'Bearer {access_token}' } } } })
  .updateChannel_ByChannelId(channelId:string, data: {
             UpdateChannelRequest
    })

// return Promise<ChannelResponse>

</script>
```

## GET /ugc/v1/admin/namespaces/{namespace}/contents/{contentId}

```
<script src="https://unpkg.com/@accelbyte/sdk/dist/global/index.global.js"></script>
<script src="https://unpkg.com/@accelbyte/sdk-ugc/dist/global/index.global.js"></script>
  
<script>

const sdk = AccelByteSDK.AccelByte.SDK({
  coreConfig: {
    baseURL: '__AGS_DOMAIN__',
    clientId: '__IAM_CLIENT_ID__',
    namespace: '__NAMESPACE__',
    redirectURI: '__IAM_CLIENT_REDIRECT_URI__'
  }
})

AccelByteSDK_UGC.ContentAdminApi(sdk, { axiosConfig: { request: { headers: { Authorization: 'Bearer {access_token}' } } } })
  .getContent_ByContentId(contentId:string)

// return Promise<ContentDownloadResponse>

</script>
```

## GET /ugc/v2/admin/namespaces/{namespace}/contents/{contentId}

```
<script src="https://unpkg.com/@accelbyte/sdk/dist/global/index.global.js"></script>
<script src="https://unpkg.com/@accelbyte/sdk-ugc/dist/global/index.global.js"></script>
  
<script>

const sdk = AccelByteSDK.AccelByte.SDK({
  coreConfig: {
    baseURL: '__AGS_DOMAIN__',
    clientId: '__IAM_CLIENT_ID__',
    namespace: '__NAMESPACE__',
    redirectURI: '__IAM_CLIENT_REDIRECT_URI__'
  }
})

AccelByteSDK_UGC.ContentV2AdminApi(sdk, { axiosConfig: { request: { headers: { Authorization: 'Bearer {access_token}' } } } })
  .getContent_ByContentId_v2(contentId:string)

// return Promise<ContentDownloadResponseV2>

</script>
```

## DELETE /ugc/v1/admin/namespaces/{namespace}/users/{userId}/groups

```
<script src="https://unpkg.com/@accelbyte/sdk/dist/global/index.global.js"></script>
<script src="https://unpkg.com/@accelbyte/sdk-ugc/dist/global/index.global.js"></script>
  
<script>

const sdk = AccelByteSDK.AccelByte.SDK({
  coreConfig: {
    baseURL: '__AGS_DOMAIN__',
    clientId: '__IAM_CLIENT_ID__',
    namespace: '__NAMESPACE__',
    redirectURI: '__IAM_CLIENT_REDIRECT_URI__'
  }
})

AccelByteSDK_UGC.AnonymizationAdminApi(sdk, { axiosConfig: { request: { headers: { Authorization: 'Bearer {access_token}' } } } })
  .deleteGroup_ByUserId(userId:string)

// return Promise

</script>
```

## GET /ugc/v1/admin/namespaces/{namespace}/users/{userId}/groups

```
<script src="https://unpkg.com/@accelbyte/sdk/dist/global/index.global.js"></script>
<script src="https://unpkg.com/@accelbyte/sdk-ugc/dist/global/index.global.js"></script>
  
<script>

const sdk = AccelByteSDK.AccelByte.SDK({
  coreConfig: {
    baseURL: '__AGS_DOMAIN__',
    clientId: '__IAM_CLIENT_ID__',
    namespace: '__NAMESPACE__',
    redirectURI: '__IAM_CLIENT_REDIRECT_URI__'
  }
})

AccelByteSDK_UGC.GroupAdminApi(sdk, { axiosConfig: { request: { headers: { Authorization: 'Bearer {access_token}' } } } })
  .getGroups_ByUserId(userId:string,  queryParams?: {
             limit?: number,
             offset?: number
    })

// return Promise<PaginatedGroupResponse>

</script>
```

## DELETE /ugc/v1/admin/namespaces/{namespace}/users/{userId}/states

```
<script src="https://unpkg.com/@accelbyte/sdk/dist/global/index.global.js"></script>
<script src="https://unpkg.com/@accelbyte/sdk-ugc/dist/global/index.global.js"></script>
  
<script>

const sdk = AccelByteSDK.AccelByte.SDK({
  coreConfig: {
    baseURL: '__AGS_DOMAIN__',
    clientId: '__IAM_CLIENT_ID__',
    namespace: '__NAMESPACE__',
    redirectURI: '__IAM_CLIENT_REDIRECT_URI__'
  }
})

AccelByteSDK_UGC.AnonymizationAdminApi(sdk, { axiosConfig: { request: { headers: { Authorization: 'Bearer {access_token}' } } } })
  .deleteState_ByUserId(userId:string)

// return Promise

</script>
```

## DELETE /ugc/v1/admin/namespaces/{namespace}/users/{userId}/channels

```
<script src="https://unpkg.com/@accelbyte/sdk/dist/global/index.global.js"></script>
<script src="https://unpkg.com/@accelbyte/sdk-ugc/dist/global/index.global.js"></script>
  
<script>

const sdk = AccelByteSDK.AccelByte.SDK({
  coreConfig: {
    baseURL: '__AGS_DOMAIN__',
    clientId: '__IAM_CLIENT_ID__',
    namespace: '__NAMESPACE__',
    redirectURI: '__IAM_CLIENT_REDIRECT_URI__'
  }
})

AccelByteSDK_UGC.AnonymizationAdminApi(sdk, { axiosConfig: { request: { headers: { Authorization: 'Bearer {access_token}' } } } })
  .deleteChannel_ByUserId(userId:string)

// return Promise

</script>
```

## GET /ugc/v1/admin/namespaces/{namespace}/users/{userId}/channels

```
<script src="https://unpkg.com/@accelbyte/sdk/dist/global/index.global.js"></script>
<script src="https://unpkg.com/@accelbyte/sdk-ugc/dist/global/index.global.js"></script>
  
<script>

const sdk = AccelByteSDK.AccelByte.SDK({
  coreConfig: {
    baseURL: '__AGS_DOMAIN__',
    clientId: '__IAM_CLIENT_ID__',
    namespace: '__NAMESPACE__',
    redirectURI: '__IAM_CLIENT_REDIRECT_URI__'
  }
})

AccelByteSDK_UGC.ChannelAdminApi(sdk, { axiosConfig: { request: { headers: { Authorization: 'Bearer {access_token}' } } } })
  .getChannels_ByUserId(userId:string,  queryParams?: {
             limit?: number,
             name?: string | null,
             offset?: number
    })

// return Promise<PaginatedGetChannelResponse>

</script>
```

## DELETE /ugc/v1/admin/namespaces/{namespace}/users/{userId}/contents

```
<script src="https://unpkg.com/@accelbyte/sdk/dist/global/index.global.js"></script>
<script src="https://unpkg.com/@accelbyte/sdk-ugc/dist/global/index.global.js"></script>
  
<script>

const sdk = AccelByteSDK.AccelByte.SDK({
  coreConfig: {
    baseURL: '__AGS_DOMAIN__',
    clientId: '__IAM_CLIENT_ID__',
    namespace: '__NAMESPACE__',
    redirectURI: '__IAM_CLIENT_REDIRECT_URI__'
  }
})

AccelByteSDK_UGC.AnonymizationAdminApi(sdk, { axiosConfig: { request: { headers: { Authorization: 'Bearer {access_token}' } } } })
  .deleteContent_ByUserId(userId:string)

// return Promise

</script>
```

## GET /ugc/v1/admin/namespaces/{namespace}/users/{userId}/contents

```
<script src="https://unpkg.com/@accelbyte/sdk/dist/global/index.global.js"></script>
<script src="https://unpkg.com/@accelbyte/sdk-ugc/dist/global/index.global.js"></script>
  
<script>

const sdk = AccelByteSDK.AccelByte.SDK({
  coreConfig: {
    baseURL: '__AGS_DOMAIN__',
    clientId: '__IAM_CLIENT_ID__',
    namespace: '__NAMESPACE__',
    redirectURI: '__IAM_CLIENT_REDIRECT_URI__'
  }
})

AccelByteSDK_UGC.ContentAdminApi(sdk, { axiosConfig: { request: { headers: { Authorization: 'Bearer {access_token}' } } } })
  .getContents_ByUserId(userId:string,  queryParams?: {
             limit?: number,
             offset?: number
    })

// return Promise<PaginatedContentDownloadResponse>

</script>
```

## GET /ugc/v2/admin/namespaces/{namespace}/users/{userId}/contents

```
<script src="https://unpkg.com/@accelbyte/sdk/dist/global/index.global.js"></script>
<script src="https://unpkg.com/@accelbyte/sdk-ugc/dist/global/index.global.js"></script>
  
<script>

const sdk = AccelByteSDK.AccelByte.SDK({
  coreConfig: {
    baseURL: '__AGS_DOMAIN__',
    clientId: '__IAM_CLIENT_ID__',
    namespace: '__NAMESPACE__',
    redirectURI: '__IAM_CLIENT_REDIRECT_URI__'
  }
})

AccelByteSDK_UGC.ContentV2AdminApi(sdk, { axiosConfig: { request: { headers: { Authorization: 'Bearer {access_token}' } } } })
  .getContents_ByUserId_v2(userId:string,  queryParams?: {
             limit?: number,
             offset?: number,
             sortBy?: string | null
    })

// return Promise<PaginatedContentDownloadResponseV2>

</script>
```

## POST /ugc/v1/admin/namespaces/{namespace}/contents/sharecodes/bulk

```
<script src="https://unpkg.com/@accelbyte/sdk/dist/global/index.global.js"></script>
<script src="https://unpkg.com/@accelbyte/sdk-ugc/dist/global/index.global.js"></script>
  
<script>

const sdk = AccelByteSDK.AccelByte.SDK({
  coreConfig: {
    baseURL: '__AGS_DOMAIN__',
    clientId: '__IAM_CLIENT_ID__',
    namespace: '__NAMESPACE__',
    redirectURI: '__IAM_CLIENT_REDIRECT_URI__'
  }
})

AccelByteSDK_UGC.ContentAdminApi(sdk, { axiosConfig: { request: { headers: { Authorization: 'Bearer {access_token}' } } } })
  .fetchContentSharecodeBulk(data: {
             GetContentBulkByShareCodesRequest
    })

// return Promise<ContentDownloadResponseArray>

</script>
```

## POST /ugc/v2/admin/namespaces/{namespace}/contents/sharecodes/bulk

```
<script src="https://unpkg.com/@accelbyte/sdk/dist/global/index.global.js"></script>
<script src="https://unpkg.com/@accelbyte/sdk-ugc/dist/global/index.global.js"></script>
  
<script>

const sdk = AccelByteSDK.AccelByte.SDK({
  coreConfig: {
    baseURL: '__AGS_DOMAIN__',
    clientId: '__IAM_CLIENT_ID__',
    namespace: '__NAMESPACE__',
    redirectURI: '__IAM_CLIENT_REDIRECT_URI__'
  }
})

AccelByteSDK_UGC.ContentV2AdminApi(sdk, { axiosConfig: { request: { headers: { Authorization: 'Bearer {access_token}' } } } })
  .fetchContentSharecodeBulk_v2(data: {
             GetContentBulkByShareCodesRequest
    })

// return Promise<ContentDownloadResponseV2Array>

</script>
```

## GET /ugc/v1/admin/namespaces/{namespace}/groups/{groupId}/contents

```
<script src="https://unpkg.com/@accelbyte/sdk/dist/global/index.global.js"></script>
<script src="https://unpkg.com/@accelbyte/sdk-ugc/dist/global/index.global.js"></script>
  
<script>

const sdk = AccelByteSDK.AccelByte.SDK({
  coreConfig: {
    baseURL: '__AGS_DOMAIN__',
    clientId: '__IAM_CLIENT_ID__',
    namespace: '__NAMESPACE__',
    redirectURI: '__IAM_CLIENT_REDIRECT_URI__'
  }
})

AccelByteSDK_UGC.GroupAdminApi(sdk, { axiosConfig: { request: { headers: { Authorization: 'Bearer {access_token}' } } } })
  .getContents_ByGroupId(groupId:string,  queryParams?: {
             limit?: number,
             offset?: number
    })

// return Promise<PaginatedContentDownloadResponse>

</script>
```

## GET /ugc/v2/admin/namespaces/{namespace}/groups/{groupId}/contents

```
<script src="https://unpkg.com/@accelbyte/sdk/dist/global/index.global.js"></script>
<script src="https://unpkg.com/@accelbyte/sdk-ugc/dist/global/index.global.js"></script>
  
<script>

const sdk = AccelByteSDK.AccelByte.SDK({
  coreConfig: {
    baseURL: '__AGS_DOMAIN__',
    clientId: '__IAM_CLIENT_ID__',
    namespace: '__NAMESPACE__',
    redirectURI: '__IAM_CLIENT_REDIRECT_URI__'
  }
})

AccelByteSDK_UGC.GroupAdminApi(sdk, { axiosConfig: { request: { headers: { Authorization: 'Bearer {access_token}' } } } })
  .getContents_ByGroupId_v2(groupId:string,  queryParams?: {
             limit?: number,
             offset?: number
    })

// return Promise<PaginatedContentDownloadResponseV2>

</script>
```

## GET /ugc/v1/admin/namespaces/{namespace}/contents/{contentId}/preview

```
<script src="https://unpkg.com/@accelbyte/sdk/dist/global/index.global.js"></script>
<script src="https://unpkg.com/@accelbyte/sdk-ugc/dist/global/index.global.js"></script>
  
<script>

const sdk = AccelByteSDK.AccelByte.SDK({
  coreConfig: {
    baseURL: '__AGS_DOMAIN__',
    clientId: '__IAM_CLIENT_ID__',
    namespace: '__NAMESPACE__',
    redirectURI: '__IAM_CLIENT_REDIRECT_URI__'
  }
})

AccelByteSDK_UGC.ContentAdminApi(sdk, { axiosConfig: { request: { headers: { Authorization: 'Bearer {access_token}' } } } })
  .getPreview_ByContentId(contentId:string)

// return Promise<GetContentPreviewResponse>

</script>
```

## GET /ugc/v2/admin/namespaces/{namespace}/staging-contents/{contentId}

```
<script src="https://unpkg.com/@accelbyte/sdk/dist/global/index.global.js"></script>
<script src="https://unpkg.com/@accelbyte/sdk-ugc/dist/global/index.global.js"></script>
  
<script>

const sdk = AccelByteSDK.AccelByte.SDK({
  coreConfig: {
    baseURL: '__AGS_DOMAIN__',
    clientId: '__IAM_CLIENT_ID__',
    namespace: '__NAMESPACE__',
    redirectURI: '__IAM_CLIENT_REDIRECT_URI__'
  }
})

AccelByteSDK_UGC.StagingContentAdminApi(sdk, { axiosConfig: { request: { headers: { Authorization: 'Bearer {access_token}' } } } })
  .getStagingContent_ByContentId_v2(contentId:string)

// return Promise<StagingContentResponse>

</script>
```

## POST /ugc/v1/admin/namespaces/{namespace}/channels/{channelId}/contents

```
<script src="https://unpkg.com/@accelbyte/sdk/dist/global/index.global.js"></script>
<script src="https://unpkg.com/@accelbyte/sdk-ugc/dist/global/index.global.js"></script>
  
<script>

const sdk = AccelByteSDK.AccelByte.SDK({
  coreConfig: {
    baseURL: '__AGS_DOMAIN__',
    clientId: '__IAM_CLIENT_ID__',
    namespace: '__NAMESPACE__',
    redirectURI: '__IAM_CLIENT_REDIRECT_URI__'
  }
})

AccelByteSDK_UGC.ContentAdminApi(sdk, { axiosConfig: { request: { headers: { Authorization: 'Bearer {access_token}' } } } })
  .createContent_ByChannelId(channelId:string, data: {
             CreateContentRequest
    })

// return Promise<CreateContentResponse>

</script>
```

## GET /ugc/v1/admin/namespaces/{namespace}/contents/{contentId}/versions

```
<script src="https://unpkg.com/@accelbyte/sdk/dist/global/index.global.js"></script>
<script src="https://unpkg.com/@accelbyte/sdk-ugc/dist/global/index.global.js"></script>
  
<script>

const sdk = AccelByteSDK.AccelByte.SDK({
  coreConfig: {
    baseURL: '__AGS_DOMAIN__',
    clientId: '__IAM_CLIENT_ID__',
    namespace: '__NAMESPACE__',
    redirectURI: '__IAM_CLIENT_REDIRECT_URI__'
  }
})

AccelByteSDK_UGC.ContentAdminApi(sdk, { axiosConfig: { request: { headers: { Authorization: 'Bearer {access_token}' } } } })
  .getVersions_ByContentId(contentId:string)

// return Promise<ListContentVersionsResponse>

</script>
```

## GET /ugc/v2/admin/namespaces/{namespace}/channels/{channelId}/contents

```
<script src="https://unpkg.com/@accelbyte/sdk/dist/global/index.global.js"></script>
<script src="https://unpkg.com/@accelbyte/sdk-ugc/dist/global/index.global.js"></script>
  
<script>

const sdk = AccelByteSDK.AccelByte.SDK({
  coreConfig: {
    baseURL: '__AGS_DOMAIN__',
    clientId: '__IAM_CLIENT_ID__',
    namespace: '__NAMESPACE__',
    redirectURI: '__IAM_CLIENT_REDIRECT_URI__'
  }
})

AccelByteSDK_UGC.ContentV2AdminApi(sdk, { axiosConfig: { request: { headers: { Authorization: 'Bearer {access_token}' } } } })
  .getContents_ByChannelId_v2(channelId:string,  queryParams?: {
             limit?: number,
             name?: string | null,
             offset?: number,
             sortBy?: string | null
    })

// return Promise<PaginatedContentDownloadResponseV2>

</script>
```

## POST /ugc/v2/admin/namespaces/{namespace}/channels/{channelId}/contents

```
<script src="https://unpkg.com/@accelbyte/sdk/dist/global/index.global.js"></script>
<script src="https://unpkg.com/@accelbyte/sdk-ugc/dist/global/index.global.js"></script>
  
<script>

const sdk = AccelByteSDK.AccelByte.SDK({
  coreConfig: {
    baseURL: '__AGS_DOMAIN__',
    clientId: '__IAM_CLIENT_ID__',
    namespace: '__NAMESPACE__',
    redirectURI: '__IAM_CLIENT_REDIRECT_URI__'
  }
})

AccelByteSDK_UGC.ContentV2AdminApi(sdk, { axiosConfig: { request: { headers: { Authorization: 'Bearer {access_token}' } } } })
  .createContent_ByChannelId_v2(channelId:string, data: {
             AdminContentRequestV2
    })

// return Promise<CreateContentResponseV2>

</script>
```

## GET /ugc/v2/admin/namespaces/{namespace}/contents/{contentId}/versions

```
<script src="https://unpkg.com/@accelbyte/sdk/dist/global/index.global.js"></script>
<script src="https://unpkg.com/@accelbyte/sdk-ugc/dist/global/index.global.js"></script>
  
<script>

const sdk = AccelByteSDK.AccelByte.SDK({
  coreConfig: {
    baseURL: '__AGS_DOMAIN__',
    clientId: '__IAM_CLIENT_ID__',
    namespace: '__NAMESPACE__',
    redirectURI: '__IAM_CLIENT_REDIRECT_URI__'
  }
})

AccelByteSDK_UGC.ContentV2AdminApi(sdk, { axiosConfig: { request: { headers: { Authorization: 'Bearer {access_token}' } } } })
  .getVersions_ByContentId_v2(contentId:string)

// return Promise<ListContentVersionsResponse>

</script>
```

## GET /ugc/v1/admin/namespaces/{namespace}/contents/sharecodes/{shareCode}

```
<script src="https://unpkg.com/@accelbyte/sdk/dist/global/index.global.js"></script>
<script src="https://unpkg.com/@accelbyte/sdk-ugc/dist/global/index.global.js"></script>
  
<script>

const sdk = AccelByteSDK.AccelByte.SDK({
  coreConfig: {
    baseURL: '__AGS_DOMAIN__',
    clientId: '__IAM_CLIENT_ID__',
    namespace: '__NAMESPACE__',
    redirectURI: '__IAM_CLIENT_REDIRECT_URI__'
  }
})

AccelByteSDK_UGC.ContentAdminApi(sdk, { axiosConfig: { request: { headers: { Authorization: 'Bearer {access_token}' } } } })
  .getContentSharecode_ByShareCode(shareCode:string)

// return Promise<ContentDownloadResponse>

</script>
```

## DELETE /ugc/v1/admin/namespaces/{namespace}/users/{userId}/groups/{groupId}

```
<script src="https://unpkg.com/@accelbyte/sdk/dist/global/index.global.js"></script>
<script src="https://unpkg.com/@accelbyte/sdk-ugc/dist/global/index.global.js"></script>
  
<script>

const sdk = AccelByteSDK.AccelByte.SDK({
  coreConfig: {
    baseURL: '__AGS_DOMAIN__',
    clientId: '__IAM_CLIENT_ID__',
    namespace: '__NAMESPACE__',
    redirectURI: '__IAM_CLIENT_REDIRECT_URI__'
  }
})

AccelByteSDK_UGC.GroupAdminApi(sdk, { axiosConfig: { request: { headers: { Authorization: 'Bearer {access_token}' } } } })
  .deleteGroup_ByUserId_ByGroupId(userId:string, groupId:string)

// return Promise

</script>
```

## GET /ugc/v1/admin/namespaces/{namespace}/users/{userId}/groups/{groupId}

```
<script src="https://unpkg.com/@accelbyte/sdk/dist/global/index.global.js"></script>
<script src="https://unpkg.com/@accelbyte/sdk-ugc/dist/global/index.global.js"></script>
  
<script>

const sdk = AccelByteSDK.AccelByte.SDK({
  coreConfig: {
    baseURL: '__AGS_DOMAIN__',
    clientId: '__IAM_CLIENT_ID__',
    namespace: '__NAMESPACE__',
    redirectURI: '__IAM_CLIENT_REDIRECT_URI__'
  }
})

AccelByteSDK_UGC.GroupAdminApi(sdk, { axiosConfig: { request: { headers: { Authorization: 'Bearer {access_token}' } } } })
  .getGroup_ByUserId_ByGroupId(userId:string, groupId:string)

// return Promise<CreateGroupResponse>

</script>
```

## PUT /ugc/v1/admin/namespaces/{namespace}/users/{userId}/groups/{groupId}

```
<script src="https://unpkg.com/@accelbyte/sdk/dist/global/index.global.js"></script>
<script src="https://unpkg.com/@accelbyte/sdk-ugc/dist/global/index.global.js"></script>
  
<script>

const sdk = AccelByteSDK.AccelByte.SDK({
  coreConfig: {
    baseURL: '__AGS_DOMAIN__',
    clientId: '__IAM_CLIENT_ID__',
    namespace: '__NAMESPACE__',
    redirectURI: '__IAM_CLIENT_REDIRECT_URI__'
  }
})

AccelByteSDK_UGC.GroupAdminApi(sdk, { axiosConfig: { request: { headers: { Authorization: 'Bearer {access_token}' } } } })
  .updateGroup_ByUserId_ByGroupId(userId:string, groupId:string, data: {
             CreateGroupRequest
    })

// return Promise<CreateGroupResponse>

</script>
```

## GET /ugc/v2/admin/namespaces/{namespace}/contents/sharecodes/{shareCode}

```
<script src="https://unpkg.com/@accelbyte/sdk/dist/global/index.global.js"></script>
<script src="https://unpkg.com/@accelbyte/sdk-ugc/dist/global/index.global.js"></script>
  
<script>

const sdk = AccelByteSDK.AccelByte.SDK({
  coreConfig: {
    baseURL: '__AGS_DOMAIN__',
    clientId: '__IAM_CLIENT_ID__',
    namespace: '__NAMESPACE__',
    redirectURI: '__IAM_CLIENT_REDIRECT_URI__'
  }
})

AccelByteSDK_UGC.ContentV2AdminApi(sdk, { axiosConfig: { request: { headers: { Authorization: 'Bearer {access_token}' } } } })
  .getContentSharecode_ByShareCode_v2(shareCode:string)

// return Promise<ContentDownloadResponseV2>

</script>
```

## GET /ugc/v2/admin/namespaces/{namespace}/users/{userId}/staging-contents

```
<script src="https://unpkg.com/@accelbyte/sdk/dist/global/index.global.js"></script>
<script src="https://unpkg.com/@accelbyte/sdk-ugc/dist/global/index.global.js"></script>
  
<script>

const sdk = AccelByteSDK.AccelByte.SDK({
  coreConfig: {
    baseURL: '__AGS_DOMAIN__',
    clientId: '__IAM_CLIENT_ID__',
    namespace: '__NAMESPACE__',
    redirectURI: '__IAM_CLIENT_REDIRECT_URI__'
  }
})

AccelByteSDK_UGC.StagingContentAdminApi(sdk, { axiosConfig: { request: { headers: { Authorization: 'Bearer {access_token}' } } } })
  .getStagingContents_ByUserId_v2(userId:string,  queryParams?: {
             limit?: number,
             offset?: number,
             sortBy?: string | null,
             status?: string | null
    })

// return Promise<PaginatedListStagingContentResponse>

</script>
```

## POST /ugc/v1/admin/namespaces/{namespace}/channels/{channelId}/contents/s3

```
<script src="https://unpkg.com/@accelbyte/sdk/dist/global/index.global.js"></script>
<script src="https://unpkg.com/@accelbyte/sdk-ugc/dist/global/index.global.js"></script>
  
<script>

const sdk = AccelByteSDK.AccelByte.SDK({
  coreConfig: {
    baseURL: '__AGS_DOMAIN__',
    clientId: '__IAM_CLIENT_ID__',
    namespace: '__NAMESPACE__',
    redirectURI: '__IAM_CLIENT_REDIRECT_URI__'
  }
})

AccelByteSDK_UGC.ContentAdminApi(sdk, { axiosConfig: { request: { headers: { Authorization: 'Bearer {access_token}' } } } })
  .createContentS3_ByChannelId(channelId:string, data: {
             CreateContentRequestS3
    })

// return Promise<CreateContentResponse>

</script>
```

## POST /ugc/v1/admin/namespaces/{namespace}/contents/{contentId}/screenshots

```
<script src="https://unpkg.com/@accelbyte/sdk/dist/global/index.global.js"></script>
<script src="https://unpkg.com/@accelbyte/sdk-ugc/dist/global/index.global.js"></script>
  
<script>

const sdk = AccelByteSDK.AccelByte.SDK({
  coreConfig: {
    baseURL: '__AGS_DOMAIN__',
    clientId: '__IAM_CLIENT_ID__',
    namespace: '__NAMESPACE__',
    redirectURI: '__IAM_CLIENT_REDIRECT_URI__'
  }
})

AccelByteSDK_UGC.ContentAdminApi(sdk, { axiosConfig: { request: { headers: { Authorization: 'Bearer {access_token}' } } } })
  .createScreenshot_ByContentId(contentId:string, data: {
             CreateScreenshotRequest
    })

// return Promise<CreateScreenshotResponse>

</script>
```

## PUT /ugc/v1/admin/namespaces/{namespace}/contents/{contentId}/screenshots

```
<script src="https://unpkg.com/@accelbyte/sdk/dist/global/index.global.js"></script>
<script src="https://unpkg.com/@accelbyte/sdk-ugc/dist/global/index.global.js"></script>
  
<script>

const sdk = AccelByteSDK.AccelByte.SDK({
  coreConfig: {
    baseURL: '__AGS_DOMAIN__',
    clientId: '__IAM_CLIENT_ID__',
    namespace: '__NAMESPACE__',
    redirectURI: '__IAM_CLIENT_REDIRECT_URI__'
  }
})

AccelByteSDK_UGC.ContentAdminApi(sdk, { axiosConfig: { request: { headers: { Authorization: 'Bearer {access_token}' } } } })
  .updateScreenshot_ByContentId(contentId:string, data: {
             UpdateScreenshotRequest
    })

// return Promise<UpdateScreenshotResponse>

</script>
```

## POST /ugc/v2/admin/namespaces/{namespace}/contents/{contentId}/screenshots

```
<script src="https://unpkg.com/@accelbyte/sdk/dist/global/index.global.js"></script>
<script src="https://unpkg.com/@accelbyte/sdk-ugc/dist/global/index.global.js"></script>
  
<script>

const sdk = AccelByteSDK.AccelByte.SDK({
  coreConfig: {
    baseURL: '__AGS_DOMAIN__',
    clientId: '__IAM_CLIENT_ID__',
    namespace: '__NAMESPACE__',
    redirectURI: '__IAM_CLIENT_REDIRECT_URI__'
  }
})

AccelByteSDK_UGC.ContentV2AdminApi(sdk, { axiosConfig: { request: { headers: { Authorization: 'Bearer {access_token}' } } } })
  .createScreenshot_ByContentId_v2(contentId:string, data: {
             CreateScreenshotRequest
    })

// return Promise<CreateScreenshotResponse>

</script>
```

## PUT /ugc/v2/admin/namespaces/{namespace}/contents/{contentId}/screenshots

```
<script src="https://unpkg.com/@accelbyte/sdk/dist/global/index.global.js"></script>
<script src="https://unpkg.com/@accelbyte/sdk-ugc/dist/global/index.global.js"></script>
  
<script>

const sdk = AccelByteSDK.AccelByte.SDK({
  coreConfig: {
    baseURL: '__AGS_DOMAIN__',
    clientId: '__IAM_CLIENT_ID__',
    namespace: '__NAMESPACE__',
    redirectURI: '__IAM_CLIENT_REDIRECT_URI__'
  }
})

AccelByteSDK_UGC.ContentV2AdminApi(sdk, { axiosConfig: { request: { headers: { Authorization: 'Bearer {access_token}' } } } })
  .updateScreenshot_ByContentId_v2(contentId:string, data: {
             UpdateScreenshotRequest
    })

// return Promise<UpdateScreenshotResponse>

</script>
```

## DELETE /ugc/v1/admin/namespaces/{namespace}/users/{userId}/channels/{channelId}

```
<script src="https://unpkg.com/@accelbyte/sdk/dist/global/index.global.js"></script>
<script src="https://unpkg.com/@accelbyte/sdk-ugc/dist/global/index.global.js"></script>
  
<script>

const sdk = AccelByteSDK.AccelByte.SDK({
  coreConfig: {
    baseURL: '__AGS_DOMAIN__',
    clientId: '__IAM_CLIENT_ID__',
    namespace: '__NAMESPACE__',
    redirectURI: '__IAM_CLIENT_REDIRECT_URI__'
  }
})

AccelByteSDK_UGC.ChannelAdminApi(sdk, { axiosConfig: { request: { headers: { Authorization: 'Bearer {access_token}' } } } })
  .deleteChannel_ByUserId_ByChannelId(userId:string, channelId:string)

// return Promise

</script>
```

## PUT /ugc/v1/admin/namespaces/{namespace}/users/{userId}/channels/{channelId}

```
<script src="https://unpkg.com/@accelbyte/sdk/dist/global/index.global.js"></script>
<script src="https://unpkg.com/@accelbyte/sdk-ugc/dist/global/index.global.js"></script>
  
<script>

const sdk = AccelByteSDK.AccelByte.SDK({
  coreConfig: {
    baseURL: '__AGS_DOMAIN__',
    clientId: '__IAM_CLIENT_ID__',
    namespace: '__NAMESPACE__',
    redirectURI: '__IAM_CLIENT_REDIRECT_URI__'
  }
})

AccelByteSDK_UGC.ChannelAdminApi(sdk, { axiosConfig: { request: { headers: { Authorization: 'Bearer {access_token}' } } } })
  .updateChannel_ByUserId_ByChannelId(userId:string, channelId:string, data: {
             UpdateChannelRequest
    })

// return Promise<ChannelResponse>

</script>
```

## GET /ugc/v1/admin/namespaces/{namespace}/channels/{channelId}/contents/search

```
<script src="https://unpkg.com/@accelbyte/sdk/dist/global/index.global.js"></script>
<script src="https://unpkg.com/@accelbyte/sdk-ugc/dist/global/index.global.js"></script>
  
<script>

const sdk = AccelByteSDK.AccelByte.SDK({
  coreConfig: {
    baseURL: '__AGS_DOMAIN__',
    clientId: '__IAM_CLIENT_ID__',
    namespace: '__NAMESPACE__',
    redirectURI: '__IAM_CLIENT_REDIRECT_URI__'
  }
})

AccelByteSDK_UGC.ContentAdminApi(sdk, { axiosConfig: { request: { headers: { Authorization: 'Bearer {access_token}' } } } })
  .getContentsSearch_ByChannelId(channelId:string,  queryParams?: {
             creator?: string | null,
             ishidden?: string | null,
             isofficial?: string | null,
             limit?: number,
             name?: string | null,
             offset?: number,
             orderby?: string | null,
             sortby?: string | null,
             subtype?: string | null,
             tags?: string[],
             type?: string | null,
             userId?: string | null
    })

// return Promise<PaginatedContentDownloadResponse>

</script>
```

## POST /ugc/v2/admin/namespaces/{namespace}/staging-contents/{contentId}/approve

```
<script src="https://unpkg.com/@accelbyte/sdk/dist/global/index.global.js"></script>
<script src="https://unpkg.com/@accelbyte/sdk-ugc/dist/global/index.global.js"></script>
  
<script>

const sdk = AccelByteSDK.AccelByte.SDK({
  coreConfig: {
    baseURL: '__AGS_DOMAIN__',
    clientId: '__IAM_CLIENT_ID__',
    namespace: '__NAMESPACE__',
    redirectURI: '__IAM_CLIENT_REDIRECT_URI__'
  }
})

AccelByteSDK_UGC.StagingContentAdminApi(sdk, { axiosConfig: { request: { headers: { Authorization: 'Bearer {access_token}' } } } })
  .createApprove_ByContentId_v2(contentId:string, data: {
             ApproveStagingContentRequest
    })

// return Promise<StagingContentResponse>

</script>
```

## PUT /ugc/v1/admin/namespaces/{namespace}/users/{userId}/contents/{contentId}/hide

```
<script src="https://unpkg.com/@accelbyte/sdk/dist/global/index.global.js"></script>
<script src="https://unpkg.com/@accelbyte/sdk-ugc/dist/global/index.global.js"></script>
  
<script>

const sdk = AccelByteSDK.AccelByte.SDK({
  coreConfig: {
    baseURL: '__AGS_DOMAIN__',
    clientId: '__IAM_CLIENT_ID__',
    namespace: '__NAMESPACE__',
    redirectURI: '__IAM_CLIENT_REDIRECT_URI__'
  }
})

AccelByteSDK_UGC.ContentAdminApi(sdk, { axiosConfig: { request: { headers: { Authorization: 'Bearer {access_token}' } } } })
  .updateHide_ByUserId_ByContentId(userId:string, contentId:string, data: {
             HideContentRequest
    })

// return Promise<CreateContentResponse>

</script>
```

## GET /ugc/v1/admin/namespaces/{namespace}/users/{userId}/groups/{groupId}/contents

```
<script src="https://unpkg.com/@accelbyte/sdk/dist/global/index.global.js"></script>
<script src="https://unpkg.com/@accelbyte/sdk-ugc/dist/global/index.global.js"></script>
  
<script>

const sdk = AccelByteSDK.AccelByte.SDK({
  coreConfig: {
    baseURL: '__AGS_DOMAIN__',
    clientId: '__IAM_CLIENT_ID__',
    namespace: '__NAMESPACE__',
    redirectURI: '__IAM_CLIENT_REDIRECT_URI__'
  }
})

AccelByteSDK_UGC.GroupAdminApi(sdk, { axiosConfig: { request: { headers: { Authorization: 'Bearer {access_token}' } } } })
  .getContents_ByUserId_ByGroupId(userId:string, groupId:string,  queryParams?: {
             limit?: number,
             offset?: number
    })

// return Promise<PaginatedContentDownloadResponse>

</script>
```

## PUT /ugc/v2/admin/namespaces/{namespace}/users/{userId}/contents/{contentId}/hide

```
<script src="https://unpkg.com/@accelbyte/sdk/dist/global/index.global.js"></script>
<script src="https://unpkg.com/@accelbyte/sdk-ugc/dist/global/index.global.js"></script>
  
<script>

const sdk = AccelByteSDK.AccelByte.SDK({
  coreConfig: {
    baseURL: '__AGS_DOMAIN__',
    clientId: '__IAM_CLIENT_ID__',
    namespace: '__NAMESPACE__',
    redirectURI: '__IAM_CLIENT_REDIRECT_URI__'
  }
})

AccelByteSDK_UGC.ContentV2AdminApi(sdk, { axiosConfig: { request: { headers: { Authorization: 'Bearer {access_token}' } } } })
  .updateHide_ByUserId_ByContentId_v2(userId:string, contentId:string, data: {
             HideContentRequest
    })

// return Promise<CreateContentResponseV2>

</script>
```

## GET /ugc/v2/admin/namespaces/{namespace}/users/{userId}/groups/{groupId}/contents

```
<script src="https://unpkg.com/@accelbyte/sdk/dist/global/index.global.js"></script>
<script src="https://unpkg.com/@accelbyte/sdk-ugc/dist/global/index.global.js"></script>
  
<script>

const sdk = AccelByteSDK.AccelByte.SDK({
  coreConfig: {
    baseURL: '__AGS_DOMAIN__',
    clientId: '__IAM_CLIENT_ID__',
    namespace: '__NAMESPACE__',
    redirectURI: '__IAM_CLIENT_REDIRECT_URI__'
  }
})

AccelByteSDK_UGC.GroupAdminApi(sdk, { axiosConfig: { request: { headers: { Authorization: 'Bearer {access_token}' } } } })
  .getContents_ByUserId_ByGroupId_v2(userId:string, groupId:string,  queryParams?: {
             limit?: number,
             offset?: number
    })

// return Promise<PaginatedContentDownloadResponseV2>

</script>
```

## DELETE /ugc/v1/admin/namespaces/{namespace}/channels/{channelId}/contents/{contentId}

```
<script src="https://unpkg.com/@accelbyte/sdk/dist/global/index.global.js"></script>
<script src="https://unpkg.com/@accelbyte/sdk-ugc/dist/global/index.global.js"></script>
  
<script>

const sdk = AccelByteSDK.AccelByte.SDK({
  coreConfig: {
    baseURL: '__AGS_DOMAIN__',
    clientId: '__IAM_CLIENT_ID__',
    namespace: '__NAMESPACE__',
    redirectURI: '__IAM_CLIENT_REDIRECT_URI__'
  }
})

AccelByteSDK_UGC.ContentAdminApi(sdk, { axiosConfig: { request: { headers: { Authorization: 'Bearer {access_token}' } } } })
  .deleteContent_ByChannelId_ByContentId(channelId:string, contentId:string)

// return Promise

</script>
```

## PUT /ugc/v1/admin/namespaces/{namespace}/channels/{channelId}/contents/{contentId}

```
<script src="https://unpkg.com/@accelbyte/sdk/dist/global/index.global.js"></script>
<script src="https://unpkg.com/@accelbyte/sdk-ugc/dist/global/index.global.js"></script>
  
<script>

const sdk = AccelByteSDK.AccelByte.SDK({
  coreConfig: {
    baseURL: '__AGS_DOMAIN__',
    clientId: '__IAM_CLIENT_ID__',
    namespace: '__NAMESPACE__',
    redirectURI: '__IAM_CLIENT_REDIRECT_URI__'
  }
})

AccelByteSDK_UGC.ContentAdminApi(sdk, { axiosConfig: { request: { headers: { Authorization: 'Bearer {access_token}' } } } })
  .updateContent_ByChannelId_ByContentId(channelId:string, contentId:string, data: {
             CreateContentRequest
    })

// return Promise<CreateContentResponse>

</script>
```

## PUT /ugc/v1/admin/namespaces/{namespace}/contents/{contentId}/rollback/{versionId}

```
<script src="https://unpkg.com/@accelbyte/sdk/dist/global/index.global.js"></script>
<script src="https://unpkg.com/@accelbyte/sdk-ugc/dist/global/index.global.js"></script>
  
<script>

const sdk = AccelByteSDK.AccelByte.SDK({
  coreConfig: {
    baseURL: '__AGS_DOMAIN__',
    clientId: '__IAM_CLIENT_ID__',
    namespace: '__NAMESPACE__',
    redirectURI: '__IAM_CLIENT_REDIRECT_URI__'
  }
})

AccelByteSDK_UGC.ContentAdminApi(sdk, { axiosConfig: { request: { headers: { Authorization: 'Bearer {access_token}' } } } })
  .updateRollback_ByContentId_ByVersionId(contentId:string, versionId:string)

// return Promise<ContentDownloadResponse>

</script>
```

## DELETE /ugc/v2/admin/namespaces/{namespace}/channels/{channelId}/contents/{contentId}

```
<script src="https://unpkg.com/@accelbyte/sdk/dist/global/index.global.js"></script>
<script src="https://unpkg.com/@accelbyte/sdk-ugc/dist/global/index.global.js"></script>
  
<script>

const sdk = AccelByteSDK.AccelByte.SDK({
  coreConfig: {
    baseURL: '__AGS_DOMAIN__',
    clientId: '__IAM_CLIENT_ID__',
    namespace: '__NAMESPACE__',
    redirectURI: '__IAM_CLIENT_REDIRECT_URI__'
  }
})

AccelByteSDK_UGC.ContentV2AdminApi(sdk, { axiosConfig: { request: { headers: { Authorization: 'Bearer {access_token}' } } } })
  .deleteContent_ByChannelId_ByContentId_v2(channelId:string, contentId:string)

// return Promise

</script>
```

## PATCH /ugc/v2/admin/namespaces/{namespace}/channels/{channelId}/contents/{contentId}

```
<script src="https://unpkg.com/@accelbyte/sdk/dist/global/index.global.js"></script>
<script src="https://unpkg.com/@accelbyte/sdk-ugc/dist/global/index.global.js"></script>
  
<script>

const sdk = AccelByteSDK.AccelByte.SDK({
  coreConfig: {
    baseURL: '__AGS_DOMAIN__',
    clientId: '__IAM_CLIENT_ID__',
    namespace: '__NAMESPACE__',
    redirectURI: '__IAM_CLIENT_REDIRECT_URI__'
  }
})

AccelByteSDK_UGC.ContentV2AdminApi(sdk, { axiosConfig: { request: { headers: { Authorization: 'Bearer {access_token}' } } } })
  .patchContent_ByChannelId_ByContentId_v2(channelId:string, contentId:string, data: {
             AdminUpdateContentRequestV2
    })

// return Promise<UpdateContentResponseV2>

</script>
```

## PUT /ugc/v2/admin/namespaces/{namespace}/contents/{contentId}/rollback/{versionId}

```
<script src="https://unpkg.com/@accelbyte/sdk/dist/global/index.global.js"></script>
<script src="https://unpkg.com/@accelbyte/sdk-ugc/dist/global/index.global.js"></script>
  
<script>

const sdk = AccelByteSDK.AccelByte.SDK({
  coreConfig: {
    baseURL: '__AGS_DOMAIN__',
    clientId: '__IAM_CLIENT_ID__',
    namespace: '__NAMESPACE__',
    redirectURI: '__IAM_CLIENT_REDIRECT_URI__'
  }
})

AccelByteSDK_UGC.ContentV2AdminApi(sdk, { axiosConfig: { request: { headers: { Authorization: 'Bearer {access_token}' } } } })
  .updateRollback_ByContentId_ByVersionId_v2(contentId:string, versionId:string)

// return Promise<ContentDownloadResponse>

</script>
```

## PUT /ugc/v1/admin/namespaces/{namespace}/channels/{channelId}/contents/s3/{contentId}

```
<script src="https://unpkg.com/@accelbyte/sdk/dist/global/index.global.js"></script>
<script src="https://unpkg.com/@accelbyte/sdk-ugc/dist/global/index.global.js"></script>
  
<script>

const sdk = AccelByteSDK.AccelByte.SDK({
  coreConfig: {
    baseURL: '__AGS_DOMAIN__',
    clientId: '__IAM_CLIENT_ID__',
    namespace: '__NAMESPACE__',
    redirectURI: '__IAM_CLIENT_REDIRECT_URI__'
  }
})

AccelByteSDK_UGC.ContentAdminApi(sdk, { axiosConfig: { request: { headers: { Authorization: 'Bearer {access_token}' } } } })
  .updateContentS3_ByChannelId_ByContentId(channelId:string, contentId:string, data: {
             AdminUpdateContentRequest
    })

// return Promise<CreateContentResponse>

</script>
```

## POST /ugc/v2/admin/namespaces/{namespace}/channels/{channelId}/contents/{contentId}/copy

```
<script src="https://unpkg.com/@accelbyte/sdk/dist/global/index.global.js"></script>
<script src="https://unpkg.com/@accelbyte/sdk-ugc/dist/global/index.global.js"></script>
  
<script>

const sdk = AccelByteSDK.AccelByte.SDK({
  coreConfig: {
    baseURL: '__AGS_DOMAIN__',
    clientId: '__IAM_CLIENT_ID__',
    namespace: '__NAMESPACE__',
    redirectURI: '__IAM_CLIENT_REDIRECT_URI__'
  }
})

AccelByteSDK_UGC.ContentV2AdminApi(sdk, { axiosConfig: { request: { headers: { Authorization: 'Bearer {access_token}' } } } })
  .createCopy_ByChannelId_ByContentId_v2(channelId:string, contentId:string, data: {
             CopyContentRequest
    })

// return Promise<ContentDownloadResponseV2>

</script>
```

## DELETE /ugc/v1/admin/namespaces/{namespace}/contents/{contentId}/screenshots/{screenshotId}

```
<script src="https://unpkg.com/@accelbyte/sdk/dist/global/index.global.js"></script>
<script src="https://unpkg.com/@accelbyte/sdk-ugc/dist/global/index.global.js"></script>
  
<script>

const sdk = AccelByteSDK.AccelByte.SDK({
  coreConfig: {
    baseURL: '__AGS_DOMAIN__',
    clientId: '__IAM_CLIENT_ID__',
    namespace: '__NAMESPACE__',
    redirectURI: '__IAM_CLIENT_REDIRECT_URI__'
  }
})

AccelByteSDK_UGC.ContentAdminApi(sdk, { axiosConfig: { request: { headers: { Authorization: 'Bearer {access_token}' } } } })
  .deleteScreenshot_ByContentId_ByScreenshotId(contentId:string, screenshotId:string)

// return Promise

</script>
```

## DELETE /ugc/v2/admin/namespaces/{namespace}/contents/{contentId}/screenshots/{screenshotId}

```
<script src="https://unpkg.com/@accelbyte/sdk/dist/global/index.global.js"></script>
<script src="https://unpkg.com/@accelbyte/sdk-ugc/dist/global/index.global.js"></script>
  
<script>

const sdk = AccelByteSDK.AccelByte.SDK({
  coreConfig: {
    baseURL: '__AGS_DOMAIN__',
    clientId: '__IAM_CLIENT_ID__',
    namespace: '__NAMESPACE__',
    redirectURI: '__IAM_CLIENT_REDIRECT_URI__'
  }
})

AccelByteSDK_UGC.ContentV2AdminApi(sdk, { axiosConfig: { request: { headers: { Authorization: 'Bearer {access_token}' } } } })
  .deleteScreenshot_ByContentId_ByScreenshotId_v2(contentId:string, screenshotId:string)

// return Promise

</script>
```

## PATCH /ugc/v2/admin/namespaces/{namespace}/channels/{channelId}/contents/{contentId}/uploadUrl

```
<script src="https://unpkg.com/@accelbyte/sdk/dist/global/index.global.js"></script>
<script src="https://unpkg.com/@accelbyte/sdk-ugc/dist/global/index.global.js"></script>
  
<script>

const sdk = AccelByteSDK.AccelByte.SDK({
  coreConfig: {
    baseURL: '__AGS_DOMAIN__',
    clientId: '__IAM_CLIENT_ID__',
    namespace: '__NAMESPACE__',
    redirectURI: '__IAM_CLIENT_REDIRECT_URI__'
  }
})

AccelByteSDK_UGC.ContentV2AdminApi(sdk, { axiosConfig: { request: { headers: { Authorization: 'Bearer {access_token}' } } } })
  .patchUploadUrl_ByChannelId_ByContentId_v2(channelId:string, contentId:string, data: {
             GenerateContentUploadUrlRequest
    })

// return Promise<GenerateContentUploadUrlResponse>

</script>
```

## PATCH /ugc/v2/admin/namespaces/{namespace}/channels/{channelId}/contents/{contentId}/fileLocation

```
<script src="https://unpkg.com/@accelbyte/sdk/dist/global/index.global.js"></script>
<script src="https://unpkg.com/@accelbyte/sdk-ugc/dist/global/index.global.js"></script>
  
<script>

const sdk = AccelByteSDK.AccelByte.SDK({
  coreConfig: {
    baseURL: '__AGS_DOMAIN__',
    clientId: '__IAM_CLIENT_ID__',
    namespace: '__NAMESPACE__',
    redirectURI: '__IAM_CLIENT_REDIRECT_URI__'
  }
})

AccelByteSDK_UGC.ContentV2AdminApi(sdk, { axiosConfig: { request: { headers: { Authorization: 'Bearer {access_token}' } } } })
  .patchFileLocation_ByChannelId_ByContentId_v2(channelId:string, contentId:string, data: {
             UpdateFileLocationRequest
    })

// return Promise<UpdateContentResponseV2>

</script>
```

## DELETE /ugc/v1/admin/namespaces/{namespace}/users/{userId}/channels/{channelId}/contents/{contentId}

```
<script src="https://unpkg.com/@accelbyte/sdk/dist/global/index.global.js"></script>
<script src="https://unpkg.com/@accelbyte/sdk-ugc/dist/global/index.global.js"></script>
  
<script>

const sdk = AccelByteSDK.AccelByte.SDK({
  coreConfig: {
    baseURL: '__AGS_DOMAIN__',
    clientId: '__IAM_CLIENT_ID__',
    namespace: '__NAMESPACE__',
    redirectURI: '__IAM_CLIENT_REDIRECT_URI__'
  }
})

AccelByteSDK_UGC.ContentAdminApi(sdk, { axiosConfig: { request: { headers: { Authorization: 'Bearer {access_token}' } } } })
  .deleteContent_ByUserId_ByChannelId_ByContentId(userId:string, channelId:string, contentId:string)

// return Promise

</script>
```

## PUT /ugc/v1/admin/namespaces/{namespace}/users/{userId}/channels/{channelId}/contents/{contentId}

```
<script src="https://unpkg.com/@accelbyte/sdk/dist/global/index.global.js"></script>
<script src="https://unpkg.com/@accelbyte/sdk-ugc/dist/global/index.global.js"></script>
  
<script>

const sdk = AccelByteSDK.AccelByte.SDK({
  coreConfig: {
    baseURL: '__AGS_DOMAIN__',
    clientId: '__IAM_CLIENT_ID__',
    namespace: '__NAMESPACE__',
    redirectURI: '__IAM_CLIENT_REDIRECT_URI__'
  }
})

AccelByteSDK_UGC.ContentAdminApi(sdk, { axiosConfig: { request: { headers: { Authorization: 'Bearer {access_token}' } } } })
  .updateContent_ByUserId_ByChannelId_ByContentId(userId:string, channelId:string, contentId:string, data: {
             CreateContentRequest
    })

// return Promise<CreateContentResponse>

</script>
```

## DELETE /ugc/v2/admin/namespaces/{namespace}/users/{userId}/channels/{channelId}/contents/{contentId}

```
<script src="https://unpkg.com/@accelbyte/sdk/dist/global/index.global.js"></script>
<script src="https://unpkg.com/@accelbyte/sdk-ugc/dist/global/index.global.js"></script>
  
<script>

const sdk = AccelByteSDK.AccelByte.SDK({
  coreConfig: {
    baseURL: '__AGS_DOMAIN__',
    clientId: '__IAM_CLIENT_ID__',
    namespace: '__NAMESPACE__',
    redirectURI: '__IAM_CLIENT_REDIRECT_URI__'
  }
})

AccelByteSDK_UGC.ContentV2AdminApi(sdk, { axiosConfig: { request: { headers: { Authorization: 'Bearer {access_token}' } } } })
  .deleteContent_ByUserId_ByChannelId_ByContentId_v2(userId:string, channelId:string, contentId:string)

// return Promise

</script>
```

## PATCH /ugc/v2/admin/namespaces/{namespace}/users/{userId}/channels/{channelId}/contents/{contentId}

```
<script src="https://unpkg.com/@accelbyte/sdk/dist/global/index.global.js"></script>
<script src="https://unpkg.com/@accelbyte/sdk-ugc/dist/global/index.global.js"></script>
  
<script>

const sdk = AccelByteSDK.AccelByte.SDK({
  coreConfig: {
    baseURL: '__AGS_DOMAIN__',
    clientId: '__IAM_CLIENT_ID__',
    namespace: '__NAMESPACE__',
    redirectURI: '__IAM_CLIENT_REDIRECT_URI__'
  }
})

AccelByteSDK_UGC.ContentV2AdminApi(sdk, { axiosConfig: { request: { headers: { Authorization: 'Bearer {access_token}' } } } })
  .patchContent_ByUserId_ByChannelId_ByContentId_v2(userId:string, channelId:string, contentId:string, data: {
             AdminUpdateContentRequestV2
    })

// return Promise<UpdateContentResponseV2>

</script>
```

## PUT /ugc/v1/admin/namespaces/{namespace}/users/{userId}/channels/{channelId}/contents/s3/{contentId}

```
<script src="https://unpkg.com/@accelbyte/sdk/dist/global/index.global.js"></script>
<script src="https://unpkg.com/@accelbyte/sdk-ugc/dist/global/index.global.js"></script>
  
<script>

const sdk = AccelByteSDK.AccelByte.SDK({
  coreConfig: {
    baseURL: '__AGS_DOMAIN__',
    clientId: '__IAM_CLIENT_ID__',
    namespace: '__NAMESPACE__',
    redirectURI: '__IAM_CLIENT_REDIRECT_URI__'
  }
})

AccelByteSDK_UGC.ContentAdminApi(sdk, { axiosConfig: { request: { headers: { Authorization: 'Bearer {access_token}' } } } })
  .updateContentS3_ByUserId_ByChannelId_ByContentId(userId:string, channelId:string, contentId:string, data: {
             AdminUpdateContentRequest
    })

// return Promise<CreateContentResponse>

</script>
```

## PATCH /ugc/v2/admin/namespaces/{namespace}/users/{userId}/channels/{channelId}/contents/{contentId}/uploadUrl

```
<script src="https://unpkg.com/@accelbyte/sdk/dist/global/index.global.js"></script>
<script src="https://unpkg.com/@accelbyte/sdk-ugc/dist/global/index.global.js"></script>
  
<script>

const sdk = AccelByteSDK.AccelByte.SDK({
  coreConfig: {
    baseURL: '__AGS_DOMAIN__',
    clientId: '__IAM_CLIENT_ID__',
    namespace: '__NAMESPACE__',
    redirectURI: '__IAM_CLIENT_REDIRECT_URI__'
  }
})

AccelByteSDK_UGC.ContentV2AdminApi(sdk, { axiosConfig: { request: { headers: { Authorization: 'Bearer {access_token}' } } } })
  .patchUploadUrl_ByUserId_ByChannelId_ByContentId_v2(userId:string, channelId:string, contentId:string, data: {
             GenerateContentUploadUrlRequest
    })

// return Promise<GenerateContentUploadUrlResponse>

</script>
```

## DELETE /ugc/v1/admin/namespaces/{namespace}/users/{userId}/channels/{channelId}/contents/sharecodes/{shareCode}

```
<script src="https://unpkg.com/@accelbyte/sdk/dist/global/index.global.js"></script>
<script src="https://unpkg.com/@accelbyte/sdk-ugc/dist/global/index.global.js"></script>
  
<script>

const sdk = AccelByteSDK.AccelByte.SDK({
  coreConfig: {
    baseURL: '__AGS_DOMAIN__',
    clientId: '__IAM_CLIENT_ID__',
    namespace: '__NAMESPACE__',
    redirectURI: '__IAM_CLIENT_REDIRECT_URI__'
  }
})

AccelByteSDK_UGC.ContentAdminApi(sdk, { axiosConfig: { request: { headers: { Authorization: 'Bearer {access_token}' } } } })
  .deleteContentSharecode_ByUserId_ByChannelId_ByShareCode(userId:string, channelId:string, shareCode:string)

// return Promise

</script>
```

## DELETE /ugc/v2/admin/namespaces/{namespace}/users/{userId}/channels/{channelId}/contents/sharecodes/{shareCode}

```
<script src="https://unpkg.com/@accelbyte/sdk/dist/global/index.global.js"></script>
<script src="https://unpkg.com/@accelbyte/sdk-ugc/dist/global/index.global.js"></script>
  
<script>

const sdk = AccelByteSDK.AccelByte.SDK({
  coreConfig: {
    baseURL: '__AGS_DOMAIN__',
    clientId: '__IAM_CLIENT_ID__',
    namespace: '__NAMESPACE__',
    redirectURI: '__IAM_CLIENT_REDIRECT_URI__'
  }
})

AccelByteSDK_UGC.ContentV2AdminApi(sdk, { axiosConfig: { request: { headers: { Authorization: 'Bearer {access_token}' } } } })
  .deleteContentSharecode_ByUserId_ByChannelId_ByShareCode_v2(userId:string, channelId:string, shareCode:string)

// return Promise

</script>
```

## PATCH /ugc/v2/admin/namespaces/{namespace}/users/{userId}/channels/{channelId}/contents/{contentId}/fileLocation

```
<script src="https://unpkg.com/@accelbyte/sdk/dist/global/index.global.js"></script>
<script src="https://unpkg.com/@accelbyte/sdk-ugc/dist/global/index.global.js"></script>
  
<script>

const sdk = AccelByteSDK.AccelByte.SDK({
  coreConfig: {
    baseURL: '__AGS_DOMAIN__',
    clientId: '__IAM_CLIENT_ID__',
    namespace: '__NAMESPACE__',
    redirectURI: '__IAM_CLIENT_REDIRECT_URI__'
  }
})

AccelByteSDK_UGC.ContentV2AdminApi(sdk, { axiosConfig: { request: { headers: { Authorization: 'Bearer {access_token}' } } } })
  .patchFileLocation_ByUserId_ByChannelId_ByContentId_v2(userId:string, channelId:string, contentId:string, data: {
             UpdateFileLocationRequest
    })

// return Promise<UpdateContentResponseV2>

</script>
```

## PUT /ugc/v1/admin/namespaces/{namespace}/users/{userId}/channels/{channelId}/contents/s3/sharecodes/{shareCode}

```
<script src="https://unpkg.com/@accelbyte/sdk/dist/global/index.global.js"></script>
<script src="https://unpkg.com/@accelbyte/sdk-ugc/dist/global/index.global.js"></script>
  
<script>

const sdk = AccelByteSDK.AccelByte.SDK({
  coreConfig: {
    baseURL: '__AGS_DOMAIN__',
    clientId: '__IAM_CLIENT_ID__',
    namespace: '__NAMESPACE__',
    redirectURI: '__IAM_CLIENT_REDIRECT_URI__'
  }
})

AccelByteSDK_UGC.ContentAdminApi(sdk, { axiosConfig: { request: { headers: { Authorization: 'Bearer {access_token}' } } } })
  .updateContentS3Sharecode_ByUserId_ByChannelId_ByShareCode(userId:string, channelId:string, shareCode:string, data: {
             AdminUpdateContentRequest
    })

// return Promise<CreateContentResponse>

</script>
```

## PUT /ugc/v2/admin/namespaces/{namespace}/users/{userId}/channels/{channelId}/contents/s3/sharecodes/{shareCode}

```
<script src="https://unpkg.com/@accelbyte/sdk/dist/global/index.global.js"></script>
<script src="https://unpkg.com/@accelbyte/sdk-ugc/dist/global/index.global.js"></script>
  
<script>

const sdk = AccelByteSDK.AccelByte.SDK({
  coreConfig: {
    baseURL: '__AGS_DOMAIN__',
    clientId: '__IAM_CLIENT_ID__',
    namespace: '__NAMESPACE__',
    redirectURI: '__IAM_CLIENT_REDIRECT_URI__'
  }
})

AccelByteSDK_UGC.ContentV2AdminApi(sdk, { axiosConfig: { request: { headers: { Authorization: 'Bearer {access_token}' } } } })
  .updateContentS3Sharecode_ByUserId_ByChannelId_ByShareCode_v2(userId:string, channelId:string, shareCode:string, data: {
             AdminUpdateContentRequestV2
    })

// return Promise<CreateContentResponseV2>

</script>
```