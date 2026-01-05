## GET /ugc/v1/public/namespaces/{namespace}/tags

```
import { AccelByte } from '@accelbyte/sdk'
import { PublicTagApi } from '@accelbyte/sdk-ugc'

const sdk = AccelByte.SDK({
  coreConfig: {
    baseURL: '__AGS_DOMAIN__',
    clientId: '__IAM_CLIENT_ID__',
    namespace: '__NAMESPACE__',
    redirectURI: '__IAM_CLIENT_REDIRECT_URI__'
  }
})

PublicTagApi(sdk)
  .getTags( queryParams?: {
             limit?: number,
             offset?: number
    })

// return Promise<PaginatedGetTagResponse>
```

## GET /ugc/v1/public/namespaces/{namespace}/types

```
import { AccelByte } from '@accelbyte/sdk'
import { PublicTypeApi } from '@accelbyte/sdk-ugc'

const sdk = AccelByte.SDK({
  coreConfig: {
    baseURL: '__AGS_DOMAIN__',
    clientId: '__IAM_CLIENT_ID__',
    namespace: '__NAMESPACE__',
    redirectURI: '__IAM_CLIENT_REDIRECT_URI__'
  }
})

PublicTypeApi(sdk, { axiosConfig: { request: { headers: { Authorization: 'Bearer {access_token}' } } } })
  .getTypes( queryParams?: {
             limit?: number,
             offset?: number
    })

// return Promise<PaginatedGetTypeResponse>
```

## GET /ugc/v1/public/namespaces/{namespace}/users

```
import { AccelByte } from '@accelbyte/sdk'
import { PublicCreatorApi } from '@accelbyte/sdk-ugc'

const sdk = AccelByte.SDK({
  coreConfig: {
    baseURL: '__AGS_DOMAIN__',
    clientId: '__IAM_CLIENT_ID__',
    namespace: '__NAMESPACE__',
    redirectURI: '__IAM_CLIENT_REDIRECT_URI__'
  }
})

PublicCreatorApi(sdk, { axiosConfig: { request: { headers: { Authorization: 'Bearer {access_token}' } } } })
  .getUsers( queryParams?: {
             limit?: number,
             offset?: number,
             orderby?: string | null,
             sortby?: string | null
    })

// return Promise<PaginatedCreatorOverviewResponse>
```

## GET /ugc/v1/public/namespaces/{namespace}/contents

```
import { AccelByte } from '@accelbyte/sdk'
import { PublicContentLegacyApi } from '@accelbyte/sdk-ugc'

const sdk = AccelByte.SDK({
  coreConfig: {
    baseURL: '__AGS_DOMAIN__',
    clientId: '__IAM_CLIENT_ID__',
    namespace: '__NAMESPACE__',
    redirectURI: '__IAM_CLIENT_REDIRECT_URI__'
  }
})

PublicContentLegacyApi(sdk, { axiosConfig: { request: { headers: { Authorization: 'Bearer {access_token}' } } } })
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
```

## GET /ugc/v2/public/namespaces/{namespace}/contents

```
import { AccelByte } from '@accelbyte/sdk'
import { PublicContentV2Api } from '@accelbyte/sdk-ugc'

const sdk = AccelByte.SDK({
  coreConfig: {
    baseURL: '__AGS_DOMAIN__',
    clientId: '__IAM_CLIENT_ID__',
    namespace: '__NAMESPACE__',
    redirectURI: '__IAM_CLIENT_REDIRECT_URI__'
  }
})

PublicContentV2Api(sdk, { axiosConfig: { request: { headers: { Authorization: 'Bearer {access_token}' } } } })
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
```

## POST /ugc/v1/public/namespaces/{namespace}/contents/bulk

```
import { AccelByte } from '@accelbyte/sdk'
import { PublicContentLegacyApi } from '@accelbyte/sdk-ugc'

const sdk = AccelByte.SDK({
  coreConfig: {
    baseURL: '__AGS_DOMAIN__',
    clientId: '__IAM_CLIENT_ID__',
    namespace: '__NAMESPACE__',
    redirectURI: '__IAM_CLIENT_REDIRECT_URI__'
  }
})

PublicContentLegacyApi(sdk, { axiosConfig: { request: { headers: { Authorization: 'Bearer {access_token}' } } } })
  .createContentBulk(data: {
             PublicGetContentBulkRequest
    })

// return Promise<ContentDownloadResponseArray>
```

## POST /ugc/v2/public/namespaces/{namespace}/contents/bulk

```
import { AccelByte } from '@accelbyte/sdk'
import { PublicContentV2Api } from '@accelbyte/sdk-ugc'

const sdk = AccelByte.SDK({
  coreConfig: {
    baseURL: '__AGS_DOMAIN__',
    clientId: '__IAM_CLIENT_ID__',
    namespace: '__NAMESPACE__',
    redirectURI: '__IAM_CLIENT_REDIRECT_URI__'
  }
})

PublicContentV2Api(sdk, { axiosConfig: { request: { headers: { Authorization: 'Bearer {access_token}' } } } })
  .createContentBulk_v2(data: {
             PublicGetContentBulkRequest
    })

// return Promise<ContentDownloadResponseV2Array>
```

## GET /ugc/v1/public/namespaces/{namespace}/contents/liked

```
import { AccelByte } from '@accelbyte/sdk'
import { PublicLikeLegacyApi } from '@accelbyte/sdk-ugc'

const sdk = AccelByte.SDK({
  coreConfig: {
    baseURL: '__AGS_DOMAIN__',
    clientId: '__IAM_CLIENT_ID__',
    namespace: '__NAMESPACE__',
    redirectURI: '__IAM_CLIENT_REDIRECT_URI__'
  }
})

PublicLikeLegacyApi(sdk, { axiosConfig: { request: { headers: { Authorization: 'Bearer {access_token}' } } } })
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
```

## GET /ugc/v1/public/namespaces/{namespace}/users/{userId}

```
import { AccelByte } from '@accelbyte/sdk'
import { PublicCreatorApi } from '@accelbyte/sdk-ugc'

const sdk = AccelByte.SDK({
  coreConfig: {
    baseURL: '__AGS_DOMAIN__',
    clientId: '__IAM_CLIENT_ID__',
    namespace: '__NAMESPACE__',
    redirectURI: '__IAM_CLIENT_REDIRECT_URI__'
  }
})

PublicCreatorApi(sdk, { axiosConfig: { request: { headers: { Authorization: 'Bearer {access_token}' } } } })
  .getUser_ByUserId(userId:string)

// return Promise<CreatorResponse>
```

## GET /ugc/v1/public/namespaces/{namespace}/users/followed

```
import { AccelByte } from '@accelbyte/sdk'
import { PublicFollowApi } from '@accelbyte/sdk-ugc'

const sdk = AccelByte.SDK({
  coreConfig: {
    baseURL: '__AGS_DOMAIN__',
    clientId: '__IAM_CLIENT_ID__',
    namespace: '__NAMESPACE__',
    redirectURI: '__IAM_CLIENT_REDIRECT_URI__'
  }
})

PublicFollowApi(sdk, { axiosConfig: { request: { headers: { Authorization: 'Bearer {access_token}' } } } })
  .getUsersFollowed( queryParams?: {
             limit?: number,
             offset?: number
    })

// return Promise<PaginatedCreatorOverviewResponse>
```

## GET /ugc/v1/public/namespaces/{namespace}/contents/followed

```
import { AccelByte } from '@accelbyte/sdk'
import { PublicFollowApi } from '@accelbyte/sdk-ugc'

const sdk = AccelByte.SDK({
  coreConfig: {
    baseURL: '__AGS_DOMAIN__',
    clientId: '__IAM_CLIENT_ID__',
    namespace: '__NAMESPACE__',
    redirectURI: '__IAM_CLIENT_REDIRECT_URI__'
  }
})

PublicFollowApi(sdk, { axiosConfig: { request: { headers: { Authorization: 'Bearer {access_token}' } } } })
  .getContentsFollowed( queryParams?: {
             limit?: number,
             offset?: number
    })

// return Promise<PaginatedContentDownloadResponse>
```

## GET /ugc/v1/public/namespaces/{namespace}/contents/{contentId}

```
import { AccelByte } from '@accelbyte/sdk'
import { PublicContentLegacyApi } from '@accelbyte/sdk-ugc'

const sdk = AccelByte.SDK({
  coreConfig: {
    baseURL: '__AGS_DOMAIN__',
    clientId: '__IAM_CLIENT_ID__',
    namespace: '__NAMESPACE__',
    redirectURI: '__IAM_CLIENT_REDIRECT_URI__'
  }
})

PublicContentLegacyApi(sdk, { axiosConfig: { request: { headers: { Authorization: 'Bearer {access_token}' } } } })
  .getContent_ByContentId(contentId:string)

// return Promise<ContentDownloadResponse>
```

## GET /ugc/v2/public/namespaces/{namespace}/contents/{contentId}

```
import { AccelByte } from '@accelbyte/sdk'
import { PublicContentV2Api } from '@accelbyte/sdk-ugc'

const sdk = AccelByte.SDK({
  coreConfig: {
    baseURL: '__AGS_DOMAIN__',
    clientId: '__IAM_CLIENT_ID__',
    namespace: '__NAMESPACE__',
    redirectURI: '__IAM_CLIENT_REDIRECT_URI__'
  }
})

PublicContentV2Api(sdk, { axiosConfig: { request: { headers: { Authorization: 'Bearer {access_token}' } } } })
  .getContent_ByContentId_v2(contentId:string)

// return Promise<ContentDownloadResponseV2>
```

## PUT /ugc/v1/public/namespaces/{namespace}/users/{userId}/follow

```
import { AccelByte } from '@accelbyte/sdk'
import { PublicFollowApi } from '@accelbyte/sdk-ugc'

const sdk = AccelByte.SDK({
  coreConfig: {
    baseURL: '__AGS_DOMAIN__',
    clientId: '__IAM_CLIENT_ID__',
    namespace: '__NAMESPACE__',
    redirectURI: '__IAM_CLIENT_REDIRECT_URI__'
  }
})

PublicFollowApi(sdk, { axiosConfig: { request: { headers: { Authorization: 'Bearer {access_token}' } } } })
  .updateFollow_ByUserId(userId:string, data: {
             UserFollowRequest
    })

// return Promise<UserFollowResponse>
```

## DELETE /ugc/v1/public/namespaces/{namespace}/users/{userId}/groups

```
import { AccelByte } from '@accelbyte/sdk'
import { AnonymizationApi } from '@accelbyte/sdk-ugc'

const sdk = AccelByte.SDK({
  coreConfig: {
    baseURL: '__AGS_DOMAIN__',
    clientId: '__IAM_CLIENT_ID__',
    namespace: '__NAMESPACE__',
    redirectURI: '__IAM_CLIENT_REDIRECT_URI__'
  }
})

AnonymizationApi(sdk, { axiosConfig: { request: { headers: { Authorization: 'Bearer {access_token}' } } } })
  .deleteGroup_ByUserId(userId:string)

// return Promise
```

## GET /ugc/v1/public/namespaces/{namespace}/users/{userId}/groups

```
import { AccelByte } from '@accelbyte/sdk'
import { PublicGroupApi } from '@accelbyte/sdk-ugc'

const sdk = AccelByte.SDK({
  coreConfig: {
    baseURL: '__AGS_DOMAIN__',
    clientId: '__IAM_CLIENT_ID__',
    namespace: '__NAMESPACE__',
    redirectURI: '__IAM_CLIENT_REDIRECT_URI__'
  }
})

PublicGroupApi(sdk, { axiosConfig: { request: { headers: { Authorization: 'Bearer {access_token}' } } } })
  .getGroups_ByUserId(userId:string,  queryParams?: {
             limit?: number,
             offset?: number
    })

// return Promise<PaginatedGroupResponse>
```

## POST /ugc/v1/public/namespaces/{namespace}/users/{userId}/groups

```
import { AccelByte } from '@accelbyte/sdk'
import { PublicGroupApi } from '@accelbyte/sdk-ugc'

const sdk = AccelByte.SDK({
  coreConfig: {
    baseURL: '__AGS_DOMAIN__',
    clientId: '__IAM_CLIENT_ID__',
    namespace: '__NAMESPACE__',
    redirectURI: '__IAM_CLIENT_REDIRECT_URI__'
  }
})

PublicGroupApi(sdk, { axiosConfig: { request: { headers: { Authorization: 'Bearer {access_token}' } } } })
  .createGroup_ByUserId(userId:string, data: {
             CreateGroupRequest
    })

// return Promise<CreateGroupResponse>
```

## DELETE /ugc/v1/public/namespaces/{namespace}/users/{userId}/states

```
import { AccelByte } from '@accelbyte/sdk'
import { AnonymizationApi } from '@accelbyte/sdk-ugc'

const sdk = AccelByte.SDK({
  coreConfig: {
    baseURL: '__AGS_DOMAIN__',
    clientId: '__IAM_CLIENT_ID__',
    namespace: '__NAMESPACE__',
    redirectURI: '__IAM_CLIENT_REDIRECT_URI__'
  }
})

AnonymizationApi(sdk, { axiosConfig: { request: { headers: { Authorization: 'Bearer {access_token}' } } } })
  .deleteState_ByUserId(userId:string)

// return Promise
```

## DELETE /ugc/v1/public/namespaces/{namespace}/users/{userId}/channels

```
import { AccelByte } from '@accelbyte/sdk'
import { AnonymizationApi } from '@accelbyte/sdk-ugc'

const sdk = AccelByte.SDK({
  coreConfig: {
    baseURL: '__AGS_DOMAIN__',
    clientId: '__IAM_CLIENT_ID__',
    namespace: '__NAMESPACE__',
    redirectURI: '__IAM_CLIENT_REDIRECT_URI__'
  }
})

AnonymizationApi(sdk, { axiosConfig: { request: { headers: { Authorization: 'Bearer {access_token}' } } } })
  .deleteChannel_ByUserId(userId:string)

// return Promise
```

## GET /ugc/v1/public/namespaces/{namespace}/users/{userId}/channels

```
import { AccelByte } from '@accelbyte/sdk'
import { PublicChannelApi } from '@accelbyte/sdk-ugc'

const sdk = AccelByte.SDK({
  coreConfig: {
    baseURL: '__AGS_DOMAIN__',
    clientId: '__IAM_CLIENT_ID__',
    namespace: '__NAMESPACE__',
    redirectURI: '__IAM_CLIENT_REDIRECT_URI__'
  }
})

PublicChannelApi(sdk, { axiosConfig: { request: { headers: { Authorization: 'Bearer {access_token}' } } } })
  .getChannels_ByUserId(userId:string,  queryParams?: {
             limit?: number,
             name?: string | null,
             offset?: number
    })

// return Promise<PaginatedGetChannelResponse>
```

## POST /ugc/v1/public/namespaces/{namespace}/users/{userId}/channels

```
import { AccelByte } from '@accelbyte/sdk'
import { PublicChannelApi } from '@accelbyte/sdk-ugc'

const sdk = AccelByte.SDK({
  coreConfig: {
    baseURL: '__AGS_DOMAIN__',
    clientId: '__IAM_CLIENT_ID__',
    namespace: '__NAMESPACE__',
    redirectURI: '__IAM_CLIENT_REDIRECT_URI__'
  }
})

PublicChannelApi(sdk, { axiosConfig: { request: { headers: { Authorization: 'Bearer {access_token}' } } } })
  .createChannel_ByUserId(userId:string, data: {
             PublicChannelRequest
    })

// return Promise<ChannelResponse>
```

## DELETE /ugc/v1/public/namespaces/{namespace}/users/{userId}/contents

```
import { AccelByte } from '@accelbyte/sdk'
import { AnonymizationApi } from '@accelbyte/sdk-ugc'

const sdk = AccelByte.SDK({
  coreConfig: {
    baseURL: '__AGS_DOMAIN__',
    clientId: '__IAM_CLIENT_ID__',
    namespace: '__NAMESPACE__',
    redirectURI: '__IAM_CLIENT_REDIRECT_URI__'
  }
})

AnonymizationApi(sdk, { axiosConfig: { request: { headers: { Authorization: 'Bearer {access_token}' } } } })
  .deleteContent_ByUserId(userId:string)

// return Promise
```

## GET /ugc/v1/public/namespaces/{namespace}/users/{userId}/contents

```
import { AccelByte } from '@accelbyte/sdk'
import { PublicContentLegacyApi } from '@accelbyte/sdk-ugc'

const sdk = AccelByte.SDK({
  coreConfig: {
    baseURL: '__AGS_DOMAIN__',
    clientId: '__IAM_CLIENT_ID__',
    namespace: '__NAMESPACE__',
    redirectURI: '__IAM_CLIENT_REDIRECT_URI__'
  }
})

PublicContentLegacyApi(sdk, { axiosConfig: { request: { headers: { Authorization: 'Bearer {access_token}' } } } })
  .getContents_ByUserId(userId:string,  queryParams?: {
             limit?: number,
             offset?: number
    })

// return Promise<PaginatedContentDownloadResponse>
```

## GET /ugc/v2/public/namespaces/{namespace}/users/{userId}/contents

```
import { AccelByte } from '@accelbyte/sdk'
import { PublicContentV2Api } from '@accelbyte/sdk-ugc'

const sdk = AccelByte.SDK({
  coreConfig: {
    baseURL: '__AGS_DOMAIN__',
    clientId: '__IAM_CLIENT_ID__',
    namespace: '__NAMESPACE__',
    redirectURI: '__IAM_CLIENT_REDIRECT_URI__'
  }
})

PublicContentV2Api(sdk, { axiosConfig: { request: { headers: { Authorization: 'Bearer {access_token}' } } } })
  .getContents_ByUserId_v2(userId:string,  queryParams?: {
             limit?: number,
             offset?: number,
             sortBy?: string | null
    })

// return Promise<PaginatedContentDownloadResponseV2>
```

## POST /ugc/v1/public/namespaces/{namespace}/contents/sharecodes/bulk

```
import { AccelByte } from '@accelbyte/sdk'
import { PublicContentLegacyApi } from '@accelbyte/sdk-ugc'

const sdk = AccelByte.SDK({
  coreConfig: {
    baseURL: '__AGS_DOMAIN__',
    clientId: '__IAM_CLIENT_ID__',
    namespace: '__NAMESPACE__',
    redirectURI: '__IAM_CLIENT_REDIRECT_URI__'
  }
})

PublicContentLegacyApi(sdk, { axiosConfig: { request: { headers: { Authorization: 'Bearer {access_token}' } } } })
  .createContentSharecodeBulk(data: {
             GetContentBulkByShareCodesRequest
    })

// return Promise<ContentDownloadResponseArray>
```

## GET /ugc/v1/public/namespaces/{namespace}/users/{userId}/followers

```
import { AccelByte } from '@accelbyte/sdk'
import { PublicFollowApi } from '@accelbyte/sdk-ugc'

const sdk = AccelByte.SDK({
  coreConfig: {
    baseURL: '__AGS_DOMAIN__',
    clientId: '__IAM_CLIENT_ID__',
    namespace: '__NAMESPACE__',
    redirectURI: '__IAM_CLIENT_REDIRECT_URI__'
  }
})

PublicFollowApi(sdk)
  .getFollowers_ByUserId(userId:string,  queryParams?: {
             limit?: number,
             offset?: number
    })

// return Promise<PaginatedCreatorOverviewResponse>
```

## GET /ugc/v1/public/namespaces/{namespace}/users/{userId}/following

```
import { AccelByte } from '@accelbyte/sdk'
import { PublicFollowApi } from '@accelbyte/sdk-ugc'

const sdk = AccelByte.SDK({
  coreConfig: {
    baseURL: '__AGS_DOMAIN__',
    clientId: '__IAM_CLIENT_ID__',
    namespace: '__NAMESPACE__',
    redirectURI: '__IAM_CLIENT_REDIRECT_URI__'
  }
})

PublicFollowApi(sdk)
  .getFollowing_ByUserId(userId:string,  queryParams?: {
             limit?: number,
             offset?: number
    })

// return Promise<PaginatedCreatorOverviewResponse>
```

## POST /ugc/v2/public/namespaces/{namespace}/contents/sharecodes/bulk

```
import { AccelByte } from '@accelbyte/sdk'
import { PublicContentV2Api } from '@accelbyte/sdk-ugc'

const sdk = AccelByte.SDK({
  coreConfig: {
    baseURL: '__AGS_DOMAIN__',
    clientId: '__IAM_CLIENT_ID__',
    namespace: '__NAMESPACE__',
    redirectURI: '__IAM_CLIENT_REDIRECT_URI__'
  }
})

PublicContentV2Api(sdk, { axiosConfig: { request: { headers: { Authorization: 'Bearer {access_token}' } } } })
  .createContentSharecodeBulk_v2(data: {
             GetContentBulkByShareCodesRequest
    })

// return Promise<ContentDownloadResponseV2Array>
```

## PUT /ugc/v1/public/namespaces/{namespace}/contents/{contentId}/like

```
import { AccelByte } from '@accelbyte/sdk'
import { PublicLikeLegacyApi } from '@accelbyte/sdk-ugc'

const sdk = AccelByte.SDK({
  coreConfig: {
    baseURL: '__AGS_DOMAIN__',
    clientId: '__IAM_CLIENT_ID__',
    namespace: '__NAMESPACE__',
    redirectURI: '__IAM_CLIENT_REDIRECT_URI__'
  }
})

PublicLikeLegacyApi(sdk, { axiosConfig: { request: { headers: { Authorization: 'Bearer {access_token}' } } } })
  .updateLike_ByContentId(contentId:string, data: {
             ContentLikeRequest
    })

// return Promise<ContentLikeResponse>
```

## GET /ugc/v2/public/namespaces/{namespace}/contents/{contentId}/like

```
import { AccelByte } from '@accelbyte/sdk'
import { PublicLikeV2Api } from '@accelbyte/sdk-ugc'

const sdk = AccelByte.SDK({
  coreConfig: {
    baseURL: '__AGS_DOMAIN__',
    clientId: '__IAM_CLIENT_ID__',
    namespace: '__NAMESPACE__',
    redirectURI: '__IAM_CLIENT_REDIRECT_URI__'
  }
})

PublicLikeV2Api(sdk)
  .getLike_ByContentId_v2(contentId:string,  queryParams?: {
             limit?: number,
             offset?: number,
             sortBy?: string | null
    })

// return Promise<PaginatedContentLikersResponse>
```

## PUT /ugc/v2/public/namespaces/{namespace}/contents/{contentId}/like

```
import { AccelByte } from '@accelbyte/sdk'
import { PublicLikeV2Api } from '@accelbyte/sdk-ugc'

const sdk = AccelByte.SDK({
  coreConfig: {
    baseURL: '__AGS_DOMAIN__',
    clientId: '__IAM_CLIENT_ID__',
    namespace: '__NAMESPACE__',
    redirectURI: '__IAM_CLIENT_REDIRECT_URI__'
  }
})

PublicLikeV2Api(sdk, { axiosConfig: { request: { headers: { Authorization: 'Bearer {access_token}' } } } })
  .updateLike_ByContentId_v2(contentId:string, data: {
             ContentLikeRequest
    })

// return Promise<ContentLikeResponse>
```

## GET /ugc/v1/public/namespaces/{namespace}/contents/{contentId}/preview

```
import { AccelByte } from '@accelbyte/sdk'
import { PublicContentLegacyApi } from '@accelbyte/sdk-ugc'

const sdk = AccelByte.SDK({
  coreConfig: {
    baseURL: '__AGS_DOMAIN__',
    clientId: '__IAM_CLIENT_ID__',
    namespace: '__NAMESPACE__',
    redirectURI: '__IAM_CLIENT_REDIRECT_URI__'
  }
})

PublicContentLegacyApi(sdk, { axiosConfig: { request: { headers: { Authorization: 'Bearer {access_token}' } } } })
  .getPreview_ByContentId(contentId:string)

// return Promise<GetContentPreviewResponse>
```

## GET /ugc/v1/public/namespaces/{namespace}/channels/{channelId}/contents

```
import { AccelByte } from '@accelbyte/sdk'
import { PublicContentLegacyApi } from '@accelbyte/sdk-ugc'

const sdk = AccelByte.SDK({
  coreConfig: {
    baseURL: '__AGS_DOMAIN__',
    clientId: '__IAM_CLIENT_ID__',
    namespace: '__NAMESPACE__',
    redirectURI: '__IAM_CLIENT_REDIRECT_URI__'
  }
})

PublicContentLegacyApi(sdk, { axiosConfig: { request: { headers: { Authorization: 'Bearer {access_token}' } } } })
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
```

## GET /ugc/v2/public/namespaces/{namespace}/channels/{channelId}/contents

```
import { AccelByte } from '@accelbyte/sdk'
import { PublicContentV2Api } from '@accelbyte/sdk-ugc'

const sdk = AccelByte.SDK({
  coreConfig: {
    baseURL: '__AGS_DOMAIN__',
    clientId: '__IAM_CLIENT_ID__',
    namespace: '__NAMESPACE__',
    redirectURI: '__IAM_CLIENT_REDIRECT_URI__'
  }
})

PublicContentV2Api(sdk, { axiosConfig: { request: { headers: { Authorization: 'Bearer {access_token}' } } } })
  .getContents_ByChannelId_v2(channelId:string,  queryParams?: {
             limit?: number,
             name?: string | null,
             offset?: number,
             sortBy?: string | null
    })

// return Promise<PaginatedContentDownloadResponseV2>
```

## GET /ugc/v1/public/namespaces/{namespace}/contents/sharecodes/{shareCode}

```
import { AccelByte } from '@accelbyte/sdk'
import { PublicContentLegacyApi } from '@accelbyte/sdk-ugc'

const sdk = AccelByte.SDK({
  coreConfig: {
    baseURL: '__AGS_DOMAIN__',
    clientId: '__IAM_CLIENT_ID__',
    namespace: '__NAMESPACE__',
    redirectURI: '__IAM_CLIENT_REDIRECT_URI__'
  }
})

PublicContentLegacyApi(sdk, { axiosConfig: { request: { headers: { Authorization: 'Bearer {access_token}' } } } })
  .getContentSharecode_ByShareCode(shareCode:string)

// return Promise<ContentDownloadResponse>
```

## DELETE /ugc/v1/public/namespaces/{namespace}/users/{userId}/groups/{groupId}

```
import { AccelByte } from '@accelbyte/sdk'
import { PublicGroupApi } from '@accelbyte/sdk-ugc'

const sdk = AccelByte.SDK({
  coreConfig: {
    baseURL: '__AGS_DOMAIN__',
    clientId: '__IAM_CLIENT_ID__',
    namespace: '__NAMESPACE__',
    redirectURI: '__IAM_CLIENT_REDIRECT_URI__'
  }
})

PublicGroupApi(sdk, { axiosConfig: { request: { headers: { Authorization: 'Bearer {access_token}' } } } })
  .deleteGroup_ByUserId_ByGroupId(userId:string, groupId:string)

// return Promise
```

## GET /ugc/v1/public/namespaces/{namespace}/users/{userId}/groups/{groupId}

```
import { AccelByte } from '@accelbyte/sdk'
import { PublicGroupApi } from '@accelbyte/sdk-ugc'

const sdk = AccelByte.SDK({
  coreConfig: {
    baseURL: '__AGS_DOMAIN__',
    clientId: '__IAM_CLIENT_ID__',
    namespace: '__NAMESPACE__',
    redirectURI: '__IAM_CLIENT_REDIRECT_URI__'
  }
})

PublicGroupApi(sdk, { axiosConfig: { request: { headers: { Authorization: 'Bearer {access_token}' } } } })
  .getGroup_ByUserId_ByGroupId(userId:string, groupId:string)

// return Promise<CreateGroupResponse>
```

## PUT /ugc/v1/public/namespaces/{namespace}/users/{userId}/groups/{groupId}

```
import { AccelByte } from '@accelbyte/sdk'
import { PublicGroupApi } from '@accelbyte/sdk-ugc'

const sdk = AccelByte.SDK({
  coreConfig: {
    baseURL: '__AGS_DOMAIN__',
    clientId: '__IAM_CLIENT_ID__',
    namespace: '__NAMESPACE__',
    redirectURI: '__IAM_CLIENT_REDIRECT_URI__'
  }
})

PublicGroupApi(sdk, { axiosConfig: { request: { headers: { Authorization: 'Bearer {access_token}' } } } })
  .updateGroup_ByUserId_ByGroupId(userId:string, groupId:string, data: {
             CreateGroupRequest
    })

// return Promise<CreateGroupResponse>
```

## GET /ugc/v2/public/namespaces/{namespace}/contents/{contentId}/downloader

```
import { AccelByte } from '@accelbyte/sdk'
import { PublicDownloadCountV2Api } from '@accelbyte/sdk-ugc'

const sdk = AccelByte.SDK({
  coreConfig: {
    baseURL: '__AGS_DOMAIN__',
    clientId: '__IAM_CLIENT_ID__',
    namespace: '__NAMESPACE__',
    redirectURI: '__IAM_CLIENT_REDIRECT_URI__'
  }
})

PublicDownloadCountV2Api(sdk)
  .getDownloader_ByContentId_v2(contentId:string,  queryParams?: {
             limit?: number,
             offset?: number,
             sortBy?: string | null,
             userId?: string | null
    })

// return Promise<PaginatedContentDownloaderResponse>
```

## GET /ugc/v2/public/namespaces/{namespace}/contents/sharecodes/{shareCode}

```
import { AccelByte } from '@accelbyte/sdk'
import { PublicContentV2Api } from '@accelbyte/sdk-ugc'

const sdk = AccelByte.SDK({
  coreConfig: {
    baseURL: '__AGS_DOMAIN__',
    clientId: '__IAM_CLIENT_ID__',
    namespace: '__NAMESPACE__',
    redirectURI: '__IAM_CLIENT_REDIRECT_URI__'
  }
})

PublicContentV2Api(sdk, { axiosConfig: { request: { headers: { Authorization: 'Bearer {access_token}' } } } })
  .getContentSharecode_ByShareCode_v2(shareCode:string)

// return Promise<ContentDownloadResponseV2>
```

## GET /ugc/v2/public/namespaces/{namespace}/users/{userId}/staging-contents

```
import { AccelByte } from '@accelbyte/sdk'
import { PublicStagingContentApi } from '@accelbyte/sdk-ugc'

const sdk = AccelByte.SDK({
  coreConfig: {
    baseURL: '__AGS_DOMAIN__',
    clientId: '__IAM_CLIENT_ID__',
    namespace: '__NAMESPACE__',
    redirectURI: '__IAM_CLIENT_REDIRECT_URI__'
  }
})

PublicStagingContentApi(sdk, { axiosConfig: { request: { headers: { Authorization: 'Bearer {access_token}' } } } })
  .getStagingContents_ByUserId_v2(userId:string,  queryParams?: {
             limit?: number,
             offset?: number,
             sortBy?: string | null,
             status?: string | null
    })

// return Promise<PaginatedListStagingContentResponse>
```

## POST /ugc/v1/public/namespaces/{namespace}/contents/{contentId}/downloadcount

```
import { AccelByte } from '@accelbyte/sdk'
import { PublicDownloadCountLegacyApi } from '@accelbyte/sdk-ugc'

const sdk = AccelByte.SDK({
  coreConfig: {
    baseURL: '__AGS_DOMAIN__',
    clientId: '__IAM_CLIENT_ID__',
    namespace: '__NAMESPACE__',
    redirectURI: '__IAM_CLIENT_REDIRECT_URI__'
  }
})

PublicDownloadCountLegacyApi(sdk, { axiosConfig: { request: { headers: { Authorization: 'Bearer {access_token}' } } } })
  .createDownloadcount_ByContentId(contentId:string)

// return Promise<AddDownloadCountResponse>
```

## POST /ugc/v2/public/namespaces/{namespace}/contents/{contentId}/downloadcount

```
import { AccelByte } from '@accelbyte/sdk'
import { PublicDownloadCountV2Api } from '@accelbyte/sdk-ugc'

const sdk = AccelByte.SDK({
  coreConfig: {
    baseURL: '__AGS_DOMAIN__',
    clientId: '__IAM_CLIENT_ID__',
    namespace: '__NAMESPACE__',
    redirectURI: '__IAM_CLIENT_REDIRECT_URI__'
  }
})

PublicDownloadCountV2Api(sdk, { axiosConfig: { request: { headers: { Authorization: 'Bearer {access_token}' } } } })
  .createDownloadcount_ByContentId_v2(contentId:string)

// return Promise<AddDownloadCountResponse>
```

## DELETE /ugc/v1/public/namespaces/{namespace}/users/{userId}/channels/{channelId}

```
import { AccelByte } from '@accelbyte/sdk'
import { PublicChannelApi } from '@accelbyte/sdk-ugc'

const sdk = AccelByte.SDK({
  coreConfig: {
    baseURL: '__AGS_DOMAIN__',
    clientId: '__IAM_CLIENT_ID__',
    namespace: '__NAMESPACE__',
    redirectURI: '__IAM_CLIENT_REDIRECT_URI__'
  }
})

PublicChannelApi(sdk, { axiosConfig: { request: { headers: { Authorization: 'Bearer {access_token}' } } } })
  .deleteChannel_ByUserId_ByChannelId(userId:string, channelId:string)

// return Promise
```

## PUT /ugc/v1/public/namespaces/{namespace}/users/{userId}/channels/{channelId}

```
import { AccelByte } from '@accelbyte/sdk'
import { PublicChannelApi } from '@accelbyte/sdk-ugc'

const sdk = AccelByte.SDK({
  coreConfig: {
    baseURL: '__AGS_DOMAIN__',
    clientId: '__IAM_CLIENT_ID__',
    namespace: '__NAMESPACE__',
    redirectURI: '__IAM_CLIENT_REDIRECT_URI__'
  }
})

PublicChannelApi(sdk, { axiosConfig: { request: { headers: { Authorization: 'Bearer {access_token}' } } } })
  .updateChannel_ByUserId_ByChannelId(userId:string, channelId:string, data: {
             UpdateChannelRequest
    })

// return Promise<ChannelResponse>
```

## GET /ugc/v1/public/namespaces/{namespace}/users/{userId}/groups/{groupId}/contents

```
import { AccelByte } from '@accelbyte/sdk'
import { PublicGroupApi } from '@accelbyte/sdk-ugc'

const sdk = AccelByte.SDK({
  coreConfig: {
    baseURL: '__AGS_DOMAIN__',
    clientId: '__IAM_CLIENT_ID__',
    namespace: '__NAMESPACE__',
    redirectURI: '__IAM_CLIENT_REDIRECT_URI__'
  }
})

PublicGroupApi(sdk, { axiosConfig: { request: { headers: { Authorization: 'Bearer {access_token}' } } } })
  .getContents_ByUserId_ByGroupId(userId:string, groupId:string,  queryParams?: {
             limit?: number,
             offset?: number
    })

// return Promise<PaginatedContentDownloadResponse>
```

## GET /ugc/v2/public/namespaces/{namespace}/users/{userId}/groups/{groupId}/contents

```
import { AccelByte } from '@accelbyte/sdk'
import { PublicGroupApi } from '@accelbyte/sdk-ugc'

const sdk = AccelByte.SDK({
  coreConfig: {
    baseURL: '__AGS_DOMAIN__',
    clientId: '__IAM_CLIENT_ID__',
    namespace: '__NAMESPACE__',
    redirectURI: '__IAM_CLIENT_REDIRECT_URI__'
  }
})

PublicGroupApi(sdk, { axiosConfig: { request: { headers: { Authorization: 'Bearer {access_token}' } } } })
  .getContents_ByUserId_ByGroupId_v2(userId:string, groupId:string,  queryParams?: {
             limit?: number,
             offset?: number
    })

// return Promise<PaginatedContentDownloadResponseV2>
```

## DELETE /ugc/v2/public/namespaces/{namespace}/users/{userId}/staging-contents/{contentId}

```
import { AccelByte } from '@accelbyte/sdk'
import { PublicStagingContentApi } from '@accelbyte/sdk-ugc'

const sdk = AccelByte.SDK({
  coreConfig: {
    baseURL: '__AGS_DOMAIN__',
    clientId: '__IAM_CLIENT_ID__',
    namespace: '__NAMESPACE__',
    redirectURI: '__IAM_CLIENT_REDIRECT_URI__'
  }
})

PublicStagingContentApi(sdk, { axiosConfig: { request: { headers: { Authorization: 'Bearer {access_token}' } } } })
  .deleteStagingContent_ByUserId_ByContentId_v2(userId:string, contentId:string)

// return Promise
```

## GET /ugc/v2/public/namespaces/{namespace}/users/{userId}/staging-contents/{contentId}

```
import { AccelByte } from '@accelbyte/sdk'
import { PublicStagingContentApi } from '@accelbyte/sdk-ugc'

const sdk = AccelByte.SDK({
  coreConfig: {
    baseURL: '__AGS_DOMAIN__',
    clientId: '__IAM_CLIENT_ID__',
    namespace: '__NAMESPACE__',
    redirectURI: '__IAM_CLIENT_REDIRECT_URI__'
  }
})

PublicStagingContentApi(sdk, { axiosConfig: { request: { headers: { Authorization: 'Bearer {access_token}' } } } })
  .getStagingContent_ByUserId_ByContentId_v2(userId:string, contentId:string)

// return Promise<StagingContentResponse>
```

## PUT /ugc/v2/public/namespaces/{namespace}/users/{userId}/staging-contents/{contentId}

```
import { AccelByte } from '@accelbyte/sdk'
import { PublicStagingContentApi } from '@accelbyte/sdk-ugc'

const sdk = AccelByte.SDK({
  coreConfig: {
    baseURL: '__AGS_DOMAIN__',
    clientId: '__IAM_CLIENT_ID__',
    namespace: '__NAMESPACE__',
    redirectURI: '__IAM_CLIENT_REDIRECT_URI__'
  }
})

PublicStagingContentApi(sdk, { axiosConfig: { request: { headers: { Authorization: 'Bearer {access_token}' } } } })
  .updateStagingContent_ByUserId_ByContentId_v2(userId:string, contentId:string, data: {
             UpdateStagingContentRequest
    })

// return Promise<StagingContentResponse>
```

## POST /ugc/v1/public/namespaces/{namespace}/users/{userId}/channels/{channelId}/contents

```
import { AccelByte } from '@accelbyte/sdk'
import { PublicContentLegacyApi } from '@accelbyte/sdk-ugc'

const sdk = AccelByte.SDK({
  coreConfig: {
    baseURL: '__AGS_DOMAIN__',
    clientId: '__IAM_CLIENT_ID__',
    namespace: '__NAMESPACE__',
    redirectURI: '__IAM_CLIENT_REDIRECT_URI__'
  }
})

PublicContentLegacyApi(sdk, { axiosConfig: { request: { headers: { Authorization: 'Bearer {access_token}' } } } })
  .createContent_ByUserId_ByChannelId(userId:string, channelId:string, data: {
             CreateContentRequest
    })

// return Promise<CreateContentResponse>
```

## POST /ugc/v2/public/namespaces/{namespace}/users/{userId}/channels/{channelId}/contents

```
import { AccelByte } from '@accelbyte/sdk'
import { PublicContentV2Api } from '@accelbyte/sdk-ugc'

const sdk = AccelByte.SDK({
  coreConfig: {
    baseURL: '__AGS_DOMAIN__',
    clientId: '__IAM_CLIENT_ID__',
    namespace: '__NAMESPACE__',
    redirectURI: '__IAM_CLIENT_REDIRECT_URI__'
  }
})

PublicContentV2Api(sdk, { axiosConfig: { request: { headers: { Authorization: 'Bearer {access_token}' } } } })
  .createContent_ByUserId_ByChannelId_v2(userId:string, channelId:string, data: {
             ContentRequestV2
    })

// return Promise<CreateContentResponseV2>
```

## POST /ugc/v1/public/namespaces/{namespace}/users/{userId}/channels/{channelId}/contents/s3

```
import { AccelByte } from '@accelbyte/sdk'
import { PublicContentLegacyApi } from '@accelbyte/sdk-ugc'

const sdk = AccelByte.SDK({
  coreConfig: {
    baseURL: '__AGS_DOMAIN__',
    clientId: '__IAM_CLIENT_ID__',
    namespace: '__NAMESPACE__',
    redirectURI: '__IAM_CLIENT_REDIRECT_URI__'
  }
})

PublicContentLegacyApi(sdk, { axiosConfig: { request: { headers: { Authorization: 'Bearer {access_token}' } } } })
  .createContentS3_ByUserId_ByChannelId(userId:string, channelId:string, data: {
             PublicCreateContentRequestS3
    })

// return Promise<CreateContentResponse>
```

## POST /ugc/v1/public/namespaces/{namespace}/users/{userId}/contents/{contentId}/screenshots

```
import { AccelByte } from '@accelbyte/sdk'
import { PublicContentLegacyApi } from '@accelbyte/sdk-ugc'

const sdk = AccelByte.SDK({
  coreConfig: {
    baseURL: '__AGS_DOMAIN__',
    clientId: '__IAM_CLIENT_ID__',
    namespace: '__NAMESPACE__',
    redirectURI: '__IAM_CLIENT_REDIRECT_URI__'
  }
})

PublicContentLegacyApi(sdk, { axiosConfig: { request: { headers: { Authorization: 'Bearer {access_token}' } } } })
  .createScreenshot_ByUserId_ByContentId(userId:string, contentId:string, data: {
             CreateScreenshotRequest
    })

// return Promise<CreateScreenshotResponse>
```

## PUT /ugc/v1/public/namespaces/{namespace}/users/{userId}/contents/{contentId}/screenshots

```
import { AccelByte } from '@accelbyte/sdk'
import { PublicContentLegacyApi } from '@accelbyte/sdk-ugc'

const sdk = AccelByte.SDK({
  coreConfig: {
    baseURL: '__AGS_DOMAIN__',
    clientId: '__IAM_CLIENT_ID__',
    namespace: '__NAMESPACE__',
    redirectURI: '__IAM_CLIENT_REDIRECT_URI__'
  }
})

PublicContentLegacyApi(sdk, { axiosConfig: { request: { headers: { Authorization: 'Bearer {access_token}' } } } })
  .updateScreenshot_ByUserId_ByContentId(userId:string, contentId:string, data: {
             UpdateScreenshotRequest
    })

// return Promise<UpdateScreenshotResponse>
```

## POST /ugc/v2/public/namespaces/{namespace}/users/{userId}/contents/{contentId}/screenshots

```
import { AccelByte } from '@accelbyte/sdk'
import { PublicContentV2Api } from '@accelbyte/sdk-ugc'

const sdk = AccelByte.SDK({
  coreConfig: {
    baseURL: '__AGS_DOMAIN__',
    clientId: '__IAM_CLIENT_ID__',
    namespace: '__NAMESPACE__',
    redirectURI: '__IAM_CLIENT_REDIRECT_URI__'
  }
})

PublicContentV2Api(sdk, { axiosConfig: { request: { headers: { Authorization: 'Bearer {access_token}' } } } })
  .createScreenshot_ByUserId_ByContentId_v2(userId:string, contentId:string, data: {
             CreateScreenshotRequest
    })

// return Promise<CreateScreenshotResponse>
```

## PUT /ugc/v2/public/namespaces/{namespace}/users/{userId}/contents/{contentId}/screenshots

```
import { AccelByte } from '@accelbyte/sdk'
import { PublicContentV2Api } from '@accelbyte/sdk-ugc'

const sdk = AccelByte.SDK({
  coreConfig: {
    baseURL: '__AGS_DOMAIN__',
    clientId: '__IAM_CLIENT_ID__',
    namespace: '__NAMESPACE__',
    redirectURI: '__IAM_CLIENT_REDIRECT_URI__'
  }
})

PublicContentV2Api(sdk, { axiosConfig: { request: { headers: { Authorization: 'Bearer {access_token}' } } } })
  .updateScreenshot_ByUserId_ByContentId_v2(userId:string, contentId:string, data: {
             UpdateScreenshotRequest
    })

// return Promise<UpdateScreenshotResponse>
```

## DELETE /ugc/v1/public/namespaces/{namespace}/users/{userId}/channels/{channelId}/contents/{contentId}

```
import { AccelByte } from '@accelbyte/sdk'
import { PublicContentLegacyApi } from '@accelbyte/sdk-ugc'

const sdk = AccelByte.SDK({
  coreConfig: {
    baseURL: '__AGS_DOMAIN__',
    clientId: '__IAM_CLIENT_ID__',
    namespace: '__NAMESPACE__',
    redirectURI: '__IAM_CLIENT_REDIRECT_URI__'
  }
})

PublicContentLegacyApi(sdk, { axiosConfig: { request: { headers: { Authorization: 'Bearer {access_token}' } } } })
  .deleteContent_ByUserId_ByChannelId_ByContentId(userId:string, channelId:string, contentId:string)

// return Promise
```

## PUT /ugc/v1/public/namespaces/{namespace}/users/{userId}/channels/{channelId}/contents/{contentId}

```
import { AccelByte } from '@accelbyte/sdk'
import { PublicContentLegacyApi } from '@accelbyte/sdk-ugc'

const sdk = AccelByte.SDK({
  coreConfig: {
    baseURL: '__AGS_DOMAIN__',
    clientId: '__IAM_CLIENT_ID__',
    namespace: '__NAMESPACE__',
    redirectURI: '__IAM_CLIENT_REDIRECT_URI__'
  }
})

PublicContentLegacyApi(sdk, { axiosConfig: { request: { headers: { Authorization: 'Bearer {access_token}' } } } })
  .updateContent_ByUserId_ByChannelId_ByContentId(userId:string, channelId:string, contentId:string, data: {
             CreateContentRequest
    })

// return Promise<CreateContentResponse>
```

## DELETE /ugc/v2/public/namespaces/{namespace}/users/{userId}/channels/{channelId}/contents/{contentId}

```
import { AccelByte } from '@accelbyte/sdk'
import { PublicContentV2Api } from '@accelbyte/sdk-ugc'

const sdk = AccelByte.SDK({
  coreConfig: {
    baseURL: '__AGS_DOMAIN__',
    clientId: '__IAM_CLIENT_ID__',
    namespace: '__NAMESPACE__',
    redirectURI: '__IAM_CLIENT_REDIRECT_URI__'
  }
})

PublicContentV2Api(sdk, { axiosConfig: { request: { headers: { Authorization: 'Bearer {access_token}' } } } })
  .deleteContent_ByUserId_ByChannelId_ByContentId_v2(userId:string, channelId:string, contentId:string)

// return Promise
```

## PATCH /ugc/v2/public/namespaces/{namespace}/users/{userId}/channels/{channelId}/contents/{contentId}

```
import { AccelByte } from '@accelbyte/sdk'
import { PublicContentV2Api } from '@accelbyte/sdk-ugc'

const sdk = AccelByte.SDK({
  coreConfig: {
    baseURL: '__AGS_DOMAIN__',
    clientId: '__IAM_CLIENT_ID__',
    namespace: '__NAMESPACE__',
    redirectURI: '__IAM_CLIENT_REDIRECT_URI__'
  }
})

PublicContentV2Api(sdk, { axiosConfig: { request: { headers: { Authorization: 'Bearer {access_token}' } } } })
  .patchContent_ByUserId_ByChannelId_ByContentId_v2(userId:string, channelId:string, contentId:string, data: {
             UpdateContentRequestV2
    })

// return Promise<UpdateContentResponseV2>
```

## PUT /ugc/v1/public/namespaces/{namespace}/users/{userId}/channels/{channelId}/contents/s3/{contentId}

```
import { AccelByte } from '@accelbyte/sdk'
import { PublicContentLegacyApi } from '@accelbyte/sdk-ugc'

const sdk = AccelByte.SDK({
  coreConfig: {
    baseURL: '__AGS_DOMAIN__',
    clientId: '__IAM_CLIENT_ID__',
    namespace: '__NAMESPACE__',
    redirectURI: '__IAM_CLIENT_REDIRECT_URI__'
  }
})

PublicContentLegacyApi(sdk, { axiosConfig: { request: { headers: { Authorization: 'Bearer {access_token}' } } } })
  .updateContentS3_ByUserId_ByChannelId_ByContentId(userId:string, channelId:string, contentId:string, data: {
             UpdateContentRequest
    })

// return Promise<CreateContentResponse>
```

## DELETE /ugc/v1/public/namespaces/{namespace}/users/{userId}/contents/{contentId}/screenshots/{screenshotId}

```
import { AccelByte } from '@accelbyte/sdk'
import { PublicContentLegacyApi } from '@accelbyte/sdk-ugc'

const sdk = AccelByte.SDK({
  coreConfig: {
    baseURL: '__AGS_DOMAIN__',
    clientId: '__IAM_CLIENT_ID__',
    namespace: '__NAMESPACE__',
    redirectURI: '__IAM_CLIENT_REDIRECT_URI__'
  }
})

PublicContentLegacyApi(sdk, { axiosConfig: { request: { headers: { Authorization: 'Bearer {access_token}' } } } })
  .deleteScreenshot_ByUserId_ByContentId_ByScreenshotId(userId:string, contentId:string, screenshotId:string)

// return Promise
```

## DELETE /ugc/v2/public/namespaces/{namespace}/users/{userId}/contents/{contentId}/screenshots/{screenshotId}

```
import { AccelByte } from '@accelbyte/sdk'
import { PublicContentV2Api } from '@accelbyte/sdk-ugc'

const sdk = AccelByte.SDK({
  coreConfig: {
    baseURL: '__AGS_DOMAIN__',
    clientId: '__IAM_CLIENT_ID__',
    namespace: '__NAMESPACE__',
    redirectURI: '__IAM_CLIENT_REDIRECT_URI__'
  }
})

PublicContentV2Api(sdk, { axiosConfig: { request: { headers: { Authorization: 'Bearer {access_token}' } } } })
  .deleteScreenshot_ByUserId_ByContentId_ByScreenshotId_v2(userId:string, contentId:string, screenshotId:string)

// return Promise
```

## PATCH /ugc/v1/public/namespaces/{namespace}/users/{userId}/channels/{channelId}/contents/{contentId}/sharecode

```
import { AccelByte } from '@accelbyte/sdk'
import { PublicContentLegacyApi } from '@accelbyte/sdk-ugc'

const sdk = AccelByte.SDK({
  coreConfig: {
    baseURL: '__AGS_DOMAIN__',
    clientId: '__IAM_CLIENT_ID__',
    namespace: '__NAMESPACE__',
    redirectURI: '__IAM_CLIENT_REDIRECT_URI__'
  }
})

PublicContentLegacyApi(sdk, { axiosConfig: { request: { headers: { Authorization: 'Bearer {access_token}' } } } })
  .patchSharecode_ByUserId_ByChannelId_ByContentId(userId:string, channelId:string, contentId:string, data: {
             UpdateContentShareCodeRequest
    })

// return Promise<CreateContentResponse>
```

## PATCH /ugc/v2/public/namespaces/{namespace}/users/{userId}/channels/{channelId}/contents/{contentId}/sharecode

```
import { AccelByte } from '@accelbyte/sdk'
import { PublicContentV2Api } from '@accelbyte/sdk-ugc'

const sdk = AccelByte.SDK({
  coreConfig: {
    baseURL: '__AGS_DOMAIN__',
    clientId: '__IAM_CLIENT_ID__',
    namespace: '__NAMESPACE__',
    redirectURI: '__IAM_CLIENT_REDIRECT_URI__'
  }
})

PublicContentV2Api(sdk, { axiosConfig: { request: { headers: { Authorization: 'Bearer {access_token}' } } } })
  .patchSharecode_ByUserId_ByChannelId_ByContentId_v2(userId:string, channelId:string, contentId:string, data: {
             UpdateContentShareCodeRequest
    })

// return Promise<CreateContentResponseV2>
```

## PATCH /ugc/v2/public/namespaces/{namespace}/users/{userId}/channels/{channelId}/contents/{contentId}/uploadUrl

```
import { AccelByte } from '@accelbyte/sdk'
import { PublicContentV2Api } from '@accelbyte/sdk-ugc'

const sdk = AccelByte.SDK({
  coreConfig: {
    baseURL: '__AGS_DOMAIN__',
    clientId: '__IAM_CLIENT_ID__',
    namespace: '__NAMESPACE__',
    redirectURI: '__IAM_CLIENT_REDIRECT_URI__'
  }
})

PublicContentV2Api(sdk, { axiosConfig: { request: { headers: { Authorization: 'Bearer {access_token}' } } } })
  .patchUploadUrl_ByUserId_ByChannelId_ByContentId_v2(userId:string, channelId:string, contentId:string, data: {
             GenerateContentUploadUrlRequest
    })

// return Promise<GenerateContentUploadUrlResponse>
```

## DELETE /ugc/v1/public/namespaces/{namespace}/users/{userId}/channels/{channelId}/contents/sharecodes/{shareCode}

```
import { AccelByte } from '@accelbyte/sdk'
import { PublicContentLegacyApi } from '@accelbyte/sdk-ugc'

const sdk = AccelByte.SDK({
  coreConfig: {
    baseURL: '__AGS_DOMAIN__',
    clientId: '__IAM_CLIENT_ID__',
    namespace: '__NAMESPACE__',
    redirectURI: '__IAM_CLIENT_REDIRECT_URI__'
  }
})

PublicContentLegacyApi(sdk, { axiosConfig: { request: { headers: { Authorization: 'Bearer {access_token}' } } } })
  .deleteContentSharecode_ByUserId_ByChannelId_ByShareCode(userId:string, channelId:string, shareCode:string)

// return Promise
```

## DELETE /ugc/v2/public/namespaces/{namespace}/users/{userId}/channels/{channelId}/contents/sharecodes/{shareCode}

```
import { AccelByte } from '@accelbyte/sdk'
import { PublicContentV2Api } from '@accelbyte/sdk-ugc'

const sdk = AccelByte.SDK({
  coreConfig: {
    baseURL: '__AGS_DOMAIN__',
    clientId: '__IAM_CLIENT_ID__',
    namespace: '__NAMESPACE__',
    redirectURI: '__IAM_CLIENT_REDIRECT_URI__'
  }
})

PublicContentV2Api(sdk, { axiosConfig: { request: { headers: { Authorization: 'Bearer {access_token}' } } } })
  .deleteContentSharecode_ByUserId_ByChannelId_ByShareCode_v2(userId:string, channelId:string, shareCode:string)

// return Promise
```

## PATCH /ugc/v2/public/namespaces/{namespace}/users/{userId}/channels/{channelId}/contents/{contentId}/fileLocation

```
import { AccelByte } from '@accelbyte/sdk'
import { PublicContentV2Api } from '@accelbyte/sdk-ugc'

const sdk = AccelByte.SDK({
  coreConfig: {
    baseURL: '__AGS_DOMAIN__',
    clientId: '__IAM_CLIENT_ID__',
    namespace: '__NAMESPACE__',
    redirectURI: '__IAM_CLIENT_REDIRECT_URI__'
  }
})

PublicContentV2Api(sdk, { axiosConfig: { request: { headers: { Authorization: 'Bearer {access_token}' } } } })
  .patchFileLocation_ByUserId_ByChannelId_ByContentId_v2(userId:string, channelId:string, contentId:string, data: {
             UpdateFileLocationRequest
    })

// return Promise<UpdateContentResponseV2>
```

## PUT /ugc/v1/public/namespaces/{namespace}/users/{userId}/channels/{channelId}/contents/s3/sharecodes/{shareCode}

```
import { AccelByte } from '@accelbyte/sdk'
import { PublicContentLegacyApi } from '@accelbyte/sdk-ugc'

const sdk = AccelByte.SDK({
  coreConfig: {
    baseURL: '__AGS_DOMAIN__',
    clientId: '__IAM_CLIENT_ID__',
    namespace: '__NAMESPACE__',
    redirectURI: '__IAM_CLIENT_REDIRECT_URI__'
  }
})

PublicContentLegacyApi(sdk, { axiosConfig: { request: { headers: { Authorization: 'Bearer {access_token}' } } } })
  .updateContentS3Sharecode_ByUserId_ByChannelId_ByShareCode(userId:string, channelId:string, shareCode:string, data: {
             UpdateContentRequest
    })

// return Promise<CreateContentResponse>
```

## PUT /ugc/v2/public/namespaces/{namespace}/users/{userId}/channels/{channelId}/contents/s3/sharecodes/{shareCode}

```
import { AccelByte } from '@accelbyte/sdk'
import { PublicContentV2Api } from '@accelbyte/sdk-ugc'

const sdk = AccelByte.SDK({
  coreConfig: {
    baseURL: '__AGS_DOMAIN__',
    clientId: '__IAM_CLIENT_ID__',
    namespace: '__NAMESPACE__',
    redirectURI: '__IAM_CLIENT_REDIRECT_URI__'
  }
})

PublicContentV2Api(sdk, { axiosConfig: { request: { headers: { Authorization: 'Bearer {access_token}' } } } })
  .updateContentS3Sharecode_ByUserId_ByChannelId_ByShareCode_v2(userId:string, channelId:string, shareCode:string, data: {
             UpdateContentRequestV2
    })

// return Promise<CreateContentResponseV2>
```

## GET /ugc/v1/admin/namespaces/{namespace}/tags

```
import { AccelByte } from '@accelbyte/sdk'
import { TagAdminApi } from '@accelbyte/sdk-ugc'

const sdk = AccelByte.SDK({
  coreConfig: {
    baseURL: '__AGS_DOMAIN__',
    clientId: '__IAM_CLIENT_ID__',
    namespace: '__NAMESPACE__',
    redirectURI: '__IAM_CLIENT_REDIRECT_URI__'
  }
})

TagAdminApi(sdk, { axiosConfig: { request: { headers: { Authorization: 'Bearer {access_token}' } } } })
  .getTags( queryParams?: {
             limit?: number,
             offset?: number
    })

// return Promise<PaginatedGetTagResponse>
```

## POST /ugc/v1/admin/namespaces/{namespace}/tags

```
import { AccelByte } from '@accelbyte/sdk'
import { TagAdminApi } from '@accelbyte/sdk-ugc'

const sdk = AccelByte.SDK({
  coreConfig: {
    baseURL: '__AGS_DOMAIN__',
    clientId: '__IAM_CLIENT_ID__',
    namespace: '__NAMESPACE__',
    redirectURI: '__IAM_CLIENT_REDIRECT_URI__'
  }
})

TagAdminApi(sdk, { axiosConfig: { request: { headers: { Authorization: 'Bearer {access_token}' } } } })
  .createTag(data: {
             CreateTagRequest
    })

// return Promise<CreateTagResponse>
```

## GET /ugc/v1/admin/namespaces/{namespace}/types

```
import { AccelByte } from '@accelbyte/sdk'
import { TypeAdminApi } from '@accelbyte/sdk-ugc'

const sdk = AccelByte.SDK({
  coreConfig: {
    baseURL: '__AGS_DOMAIN__',
    clientId: '__IAM_CLIENT_ID__',
    namespace: '__NAMESPACE__',
    redirectURI: '__IAM_CLIENT_REDIRECT_URI__'
  }
})

TypeAdminApi(sdk, { axiosConfig: { request: { headers: { Authorization: 'Bearer {access_token}' } } } })
  .getTypes( queryParams?: {
             limit?: number,
             offset?: number
    })

// return Promise<PaginatedGetTypeResponse>
```

## POST /ugc/v1/admin/namespaces/{namespace}/types

```
import { AccelByte } from '@accelbyte/sdk'
import { TypeAdminApi } from '@accelbyte/sdk-ugc'

const sdk = AccelByte.SDK({
  coreConfig: {
    baseURL: '__AGS_DOMAIN__',
    clientId: '__IAM_CLIENT_ID__',
    namespace: '__NAMESPACE__',
    redirectURI: '__IAM_CLIENT_REDIRECT_URI__'
  }
})

TypeAdminApi(sdk, { axiosConfig: { request: { headers: { Authorization: 'Bearer {access_token}' } } } })
  .createType(data: {
             CreateTypeRequest
    })

// return Promise<CreateTypeResponse>
```

## GET /ugc/v1/admin/namespaces/{namespace}/groups

```
import { AccelByte } from '@accelbyte/sdk'
import { GroupAdminApi } from '@accelbyte/sdk-ugc'

const sdk = AccelByte.SDK({
  coreConfig: {
    baseURL: '__AGS_DOMAIN__',
    clientId: '__IAM_CLIENT_ID__',
    namespace: '__NAMESPACE__',
    redirectURI: '__IAM_CLIENT_REDIRECT_URI__'
  }
})

GroupAdminApi(sdk, { axiosConfig: { request: { headers: { Authorization: 'Bearer {access_token}' } } } })
  .getGroups( queryParams?: {
             limit?: number,
             offset?: number
    })

// return Promise<PaginatedGroupResponse>
```

## POST /ugc/v1/admin/namespaces/{namespace}/groups

```
import { AccelByte } from '@accelbyte/sdk'
import { GroupAdminApi } from '@accelbyte/sdk-ugc'

const sdk = AccelByte.SDK({
  coreConfig: {
    baseURL: '__AGS_DOMAIN__',
    clientId: '__IAM_CLIENT_ID__',
    namespace: '__NAMESPACE__',
    redirectURI: '__IAM_CLIENT_REDIRECT_URI__'
  }
})

GroupAdminApi(sdk, { axiosConfig: { request: { headers: { Authorization: 'Bearer {access_token}' } } } })
  .createGroup(data: {
             CreateGroupRequest
    })

// return Promise<CreateGroupResponse>
```

## GET /ugc/v2/admin/namespaces/{namespace}/configs

```
import { AccelByte } from '@accelbyte/sdk'
import { ConfigAdminApi } from '@accelbyte/sdk-ugc'

const sdk = AccelByte.SDK({
  coreConfig: {
    baseURL: '__AGS_DOMAIN__',
    clientId: '__IAM_CLIENT_ID__',
    namespace: '__NAMESPACE__',
    redirectURI: '__IAM_CLIENT_REDIRECT_URI__'
  }
})

ConfigAdminApi(sdk, { axiosConfig: { request: { headers: { Authorization: 'Bearer {access_token}' } } } })
  .getConfigs_v2( queryParams?: {
             limit?: number,
             offset?: number
    })

// return Promise<PaginatedGetConfigsResponse>
```

## GET /ugc/v1/admin/namespaces/{namespace}/channels

```
import { AccelByte } from '@accelbyte/sdk'
import { ChannelAdminApi } from '@accelbyte/sdk-ugc'

const sdk = AccelByte.SDK({
  coreConfig: {
    baseURL: '__AGS_DOMAIN__',
    clientId: '__IAM_CLIENT_ID__',
    namespace: '__NAMESPACE__',
    redirectURI: '__IAM_CLIENT_REDIRECT_URI__'
  }
})

ChannelAdminApi(sdk, { axiosConfig: { request: { headers: { Authorization: 'Bearer {access_token}' } } } })
  .getChannels( queryParams?: {
             limit?: number,
             offset?: number
    })

// return Promise<PaginatedGetChannelResponse>
```

## POST /ugc/v1/admin/namespaces/{namespace}/channels

```
import { AccelByte } from '@accelbyte/sdk'
import { ChannelAdminApi } from '@accelbyte/sdk-ugc'

const sdk = AccelByte.SDK({
  coreConfig: {
    baseURL: '__AGS_DOMAIN__',
    clientId: '__IAM_CLIENT_ID__',
    namespace: '__NAMESPACE__',
    redirectURI: '__IAM_CLIENT_REDIRECT_URI__'
  }
})

ChannelAdminApi(sdk, { axiosConfig: { request: { headers: { Authorization: 'Bearer {access_token}' } } } })
  .createChannel(data: {
             ChannelRequest
    })

// return Promise<ChannelResponse>
```

## GET /ugc/v1/admin/namespaces/{namespace}/contents

```
import { AccelByte } from '@accelbyte/sdk'
import { ContentAdminApi } from '@accelbyte/sdk-ugc'

const sdk = AccelByte.SDK({
  coreConfig: {
    baseURL: '__AGS_DOMAIN__',
    clientId: '__IAM_CLIENT_ID__',
    namespace: '__NAMESPACE__',
    redirectURI: '__IAM_CLIENT_REDIRECT_URI__'
  }
})

ContentAdminApi(sdk, { axiosConfig: { request: { headers: { Authorization: 'Bearer {access_token}' } } } })
  .getContents( queryParams?: {
             limit?: number,
             offset?: number
    })

// return Promise<PaginatedContentDownloadResponse>
```

## GET /ugc/v2/admin/namespaces/{namespace}/contents

```
import { AccelByte } from '@accelbyte/sdk'
import { ContentV2AdminApi } from '@accelbyte/sdk-ugc'

const sdk = AccelByte.SDK({
  coreConfig: {
    baseURL: '__AGS_DOMAIN__',
    clientId: '__IAM_CLIENT_ID__',
    namespace: '__NAMESPACE__',
    redirectURI: '__IAM_CLIENT_REDIRECT_URI__'
  }
})

ContentV2AdminApi(sdk, { axiosConfig: { request: { headers: { Authorization: 'Bearer {access_token}' } } } })
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
```

## DELETE /ugc/v1/admin/namespaces/{namespace}/tags/{tagId}

```
import { AccelByte } from '@accelbyte/sdk'
import { TagAdminApi } from '@accelbyte/sdk-ugc'

const sdk = AccelByte.SDK({
  coreConfig: {
    baseURL: '__AGS_DOMAIN__',
    clientId: '__IAM_CLIENT_ID__',
    namespace: '__NAMESPACE__',
    redirectURI: '__IAM_CLIENT_REDIRECT_URI__'
  }
})

TagAdminApi(sdk, { axiosConfig: { request: { headers: { Authorization: 'Bearer {access_token}' } } } })
  .deleteTag_ByTagId(tagId:string)

// return Promise
```

## PUT /ugc/v1/admin/namespaces/{namespace}/tags/{tagId}

```
import { AccelByte } from '@accelbyte/sdk'
import { TagAdminApi } from '@accelbyte/sdk-ugc'

const sdk = AccelByte.SDK({
  coreConfig: {
    baseURL: '__AGS_DOMAIN__',
    clientId: '__IAM_CLIENT_ID__',
    namespace: '__NAMESPACE__',
    redirectURI: '__IAM_CLIENT_REDIRECT_URI__'
  }
})

TagAdminApi(sdk, { axiosConfig: { request: { headers: { Authorization: 'Bearer {access_token}' } } } })
  .updateTag_ByTagId(tagId:string, data: {
             CreateTagRequest
    })

// return Promise<CreateTagResponse>
```

## POST /ugc/v1/admin/namespaces/{namespace}/contents/bulk

```
import { AccelByte } from '@accelbyte/sdk'
import { ContentAdminApi } from '@accelbyte/sdk-ugc'

const sdk = AccelByte.SDK({
  coreConfig: {
    baseURL: '__AGS_DOMAIN__',
    clientId: '__IAM_CLIENT_ID__',
    namespace: '__NAMESPACE__',
    redirectURI: '__IAM_CLIENT_REDIRECT_URI__'
  }
})

ContentAdminApi(sdk, { axiosConfig: { request: { headers: { Authorization: 'Bearer {access_token}' } } } })
  .fetchContentBulk(data: {
             AdminGetContentBulkRequest
    })

// return Promise<ContentDownloadResponseArray>
```

## PATCH /ugc/v2/admin/namespaces/{namespace}/configs/{key}

```
import { AccelByte } from '@accelbyte/sdk'
import { ConfigAdminApi } from '@accelbyte/sdk-ugc'

const sdk = AccelByte.SDK({
  coreConfig: {
    baseURL: '__AGS_DOMAIN__',
    clientId: '__IAM_CLIENT_ID__',
    namespace: '__NAMESPACE__',
    redirectURI: '__IAM_CLIENT_REDIRECT_URI__'
  }
})

ConfigAdminApi(sdk, { axiosConfig: { request: { headers: { Authorization: 'Bearer {access_token}' } } } })
  .patchConfig_ByKey_v2(key:string, data: {
             UpdateConfigRequest
    })

// return Promise
```

## POST /ugc/v2/admin/namespaces/{namespace}/contents/bulk

```
import { AccelByte } from '@accelbyte/sdk'
import { ContentV2AdminApi } from '@accelbyte/sdk-ugc'

const sdk = AccelByte.SDK({
  coreConfig: {
    baseURL: '__AGS_DOMAIN__',
    clientId: '__IAM_CLIENT_ID__',
    namespace: '__NAMESPACE__',
    redirectURI: '__IAM_CLIENT_REDIRECT_URI__'
  }
})

ContentV2AdminApi(sdk, { axiosConfig: { request: { headers: { Authorization: 'Bearer {access_token}' } } } })
  .fetchContentBulk_v2(data: {
             AdminGetContentBulkRequest
    })

// return Promise<ContentDownloadResponseV2Array>
```

## DELETE /ugc/v1/admin/namespaces/{namespace}/types/{typeId}

```
import { AccelByte } from '@accelbyte/sdk'
import { TypeAdminApi } from '@accelbyte/sdk-ugc'

const sdk = AccelByte.SDK({
  coreConfig: {
    baseURL: '__AGS_DOMAIN__',
    clientId: '__IAM_CLIENT_ID__',
    namespace: '__NAMESPACE__',
    redirectURI: '__IAM_CLIENT_REDIRECT_URI__'
  }
})

TypeAdminApi(sdk, { axiosConfig: { request: { headers: { Authorization: 'Bearer {access_token}' } } } })
  .deleteType_ByTypeId(typeId:string)

// return Promise
```

## PUT /ugc/v1/admin/namespaces/{namespace}/types/{typeId}

```
import { AccelByte } from '@accelbyte/sdk'
import { TypeAdminApi } from '@accelbyte/sdk-ugc'

const sdk = AccelByte.SDK({
  coreConfig: {
    baseURL: '__AGS_DOMAIN__',
    clientId: '__IAM_CLIENT_ID__',
    namespace: '__NAMESPACE__',
    redirectURI: '__IAM_CLIENT_REDIRECT_URI__'
  }
})

TypeAdminApi(sdk, { axiosConfig: { request: { headers: { Authorization: 'Bearer {access_token}' } } } })
  .updateType_ByTypeId(typeId:string, data: {
             CreateTypeRequest
    })

// return Promise<CreateTypeResponse>
```

## GET /ugc/v1/admin/namespaces/{namespace}/contents/search

```
import { AccelByte } from '@accelbyte/sdk'
import { ContentAdminApi } from '@accelbyte/sdk-ugc'

const sdk = AccelByte.SDK({
  coreConfig: {
    baseURL: '__AGS_DOMAIN__',
    clientId: '__IAM_CLIENT_ID__',
    namespace: '__NAMESPACE__',
    redirectURI: '__IAM_CLIENT_REDIRECT_URI__'
  }
})

ContentAdminApi(sdk, { axiosConfig: { request: { headers: { Authorization: 'Bearer {access_token}' } } } })
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
```

## DELETE /ugc/v1/admin/namespaces/{namespace}/groups/{groupId}

```
import { AccelByte } from '@accelbyte/sdk'
import { GroupAdminApi } from '@accelbyte/sdk-ugc'

const sdk = AccelByte.SDK({
  coreConfig: {
    baseURL: '__AGS_DOMAIN__',
    clientId: '__IAM_CLIENT_ID__',
    namespace: '__NAMESPACE__',
    redirectURI: '__IAM_CLIENT_REDIRECT_URI__'
  }
})

GroupAdminApi(sdk, { axiosConfig: { request: { headers: { Authorization: 'Bearer {access_token}' } } } })
  .deleteGroup_ByGroupId(groupId:string)

// return Promise
```

## GET /ugc/v1/admin/namespaces/{namespace}/groups/{groupId}

```
import { AccelByte } from '@accelbyte/sdk'
import { GroupAdminApi } from '@accelbyte/sdk-ugc'

const sdk = AccelByte.SDK({
  coreConfig: {
    baseURL: '__AGS_DOMAIN__',
    clientId: '__IAM_CLIENT_ID__',
    namespace: '__NAMESPACE__',
    redirectURI: '__IAM_CLIENT_REDIRECT_URI__'
  }
})

GroupAdminApi(sdk, { axiosConfig: { request: { headers: { Authorization: 'Bearer {access_token}' } } } })
  .getGroup_ByGroupId(groupId:string)

// return Promise<CreateGroupResponse>
```

## PUT /ugc/v1/admin/namespaces/{namespace}/groups/{groupId}

```
import { AccelByte } from '@accelbyte/sdk'
import { GroupAdminApi } from '@accelbyte/sdk-ugc'

const sdk = AccelByte.SDK({
  coreConfig: {
    baseURL: '__AGS_DOMAIN__',
    clientId: '__IAM_CLIENT_ID__',
    namespace: '__NAMESPACE__',
    redirectURI: '__IAM_CLIENT_REDIRECT_URI__'
  }
})

GroupAdminApi(sdk, { axiosConfig: { request: { headers: { Authorization: 'Bearer {access_token}' } } } })
  .updateGroup_ByGroupId(groupId:string, data: {
             CreateGroupRequest
    })

// return Promise<CreateGroupResponse>
```

## GET /ugc/v2/admin/namespaces/{namespace}/staging-contents

```
import { AccelByte } from '@accelbyte/sdk'
import { StagingContentAdminApi } from '@accelbyte/sdk-ugc'

const sdk = AccelByte.SDK({
  coreConfig: {
    baseURL: '__AGS_DOMAIN__',
    clientId: '__IAM_CLIENT_ID__',
    namespace: '__NAMESPACE__',
    redirectURI: '__IAM_CLIENT_REDIRECT_URI__'
  }
})

StagingContentAdminApi(sdk, { axiosConfig: { request: { headers: { Authorization: 'Bearer {access_token}' } } } })
  .getStagingContents_v2( queryParams?: {
             limit?: number,
             offset?: number,
             sortBy?: string | null,
             status?: string | null
    })

// return Promise<PaginatedListStagingContentResponse>
```

## DELETE /ugc/v1/admin/namespaces/{namespace}/channels/{channelId}

```
import { AccelByte } from '@accelbyte/sdk'
import { ChannelAdminApi } from '@accelbyte/sdk-ugc'

const sdk = AccelByte.SDK({
  coreConfig: {
    baseURL: '__AGS_DOMAIN__',
    clientId: '__IAM_CLIENT_ID__',
    namespace: '__NAMESPACE__',
    redirectURI: '__IAM_CLIENT_REDIRECT_URI__'
  }
})

ChannelAdminApi(sdk, { axiosConfig: { request: { headers: { Authorization: 'Bearer {access_token}' } } } })
  .deleteChannel_ByChannelId(channelId:string)

// return Promise
```

## PUT /ugc/v1/admin/namespaces/{namespace}/channels/{channelId}

```
import { AccelByte } from '@accelbyte/sdk'
import { ChannelAdminApi } from '@accelbyte/sdk-ugc'

const sdk = AccelByte.SDK({
  coreConfig: {
    baseURL: '__AGS_DOMAIN__',
    clientId: '__IAM_CLIENT_ID__',
    namespace: '__NAMESPACE__',
    redirectURI: '__IAM_CLIENT_REDIRECT_URI__'
  }
})

ChannelAdminApi(sdk, { axiosConfig: { request: { headers: { Authorization: 'Bearer {access_token}' } } } })
  .updateChannel_ByChannelId(channelId:string, data: {
             UpdateChannelRequest
    })

// return Promise<ChannelResponse>
```

## GET /ugc/v1/admin/namespaces/{namespace}/contents/{contentId}

```
import { AccelByte } from '@accelbyte/sdk'
import { ContentAdminApi } from '@accelbyte/sdk-ugc'

const sdk = AccelByte.SDK({
  coreConfig: {
    baseURL: '__AGS_DOMAIN__',
    clientId: '__IAM_CLIENT_ID__',
    namespace: '__NAMESPACE__',
    redirectURI: '__IAM_CLIENT_REDIRECT_URI__'
  }
})

ContentAdminApi(sdk, { axiosConfig: { request: { headers: { Authorization: 'Bearer {access_token}' } } } })
  .getContent_ByContentId(contentId:string)

// return Promise<ContentDownloadResponse>
```

## GET /ugc/v2/admin/namespaces/{namespace}/contents/{contentId}

```
import { AccelByte } from '@accelbyte/sdk'
import { ContentV2AdminApi } from '@accelbyte/sdk-ugc'

const sdk = AccelByte.SDK({
  coreConfig: {
    baseURL: '__AGS_DOMAIN__',
    clientId: '__IAM_CLIENT_ID__',
    namespace: '__NAMESPACE__',
    redirectURI: '__IAM_CLIENT_REDIRECT_URI__'
  }
})

ContentV2AdminApi(sdk, { axiosConfig: { request: { headers: { Authorization: 'Bearer {access_token}' } } } })
  .getContent_ByContentId_v2(contentId:string)

// return Promise<ContentDownloadResponseV2>
```

## DELETE /ugc/v1/admin/namespaces/{namespace}/users/{userId}/groups

```
import { AccelByte } from '@accelbyte/sdk'
import { AnonymizationAdminApi } from '@accelbyte/sdk-ugc'

const sdk = AccelByte.SDK({
  coreConfig: {
    baseURL: '__AGS_DOMAIN__',
    clientId: '__IAM_CLIENT_ID__',
    namespace: '__NAMESPACE__',
    redirectURI: '__IAM_CLIENT_REDIRECT_URI__'
  }
})

AnonymizationAdminApi(sdk, { axiosConfig: { request: { headers: { Authorization: 'Bearer {access_token}' } } } })
  .deleteGroup_ByUserId(userId:string)

// return Promise
```

## GET /ugc/v1/admin/namespaces/{namespace}/users/{userId}/groups

```
import { AccelByte } from '@accelbyte/sdk'
import { GroupAdminApi } from '@accelbyte/sdk-ugc'

const sdk = AccelByte.SDK({
  coreConfig: {
    baseURL: '__AGS_DOMAIN__',
    clientId: '__IAM_CLIENT_ID__',
    namespace: '__NAMESPACE__',
    redirectURI: '__IAM_CLIENT_REDIRECT_URI__'
  }
})

GroupAdminApi(sdk, { axiosConfig: { request: { headers: { Authorization: 'Bearer {access_token}' } } } })
  .getGroups_ByUserId(userId:string,  queryParams?: {
             limit?: number,
             offset?: number
    })

// return Promise<PaginatedGroupResponse>
```

## DELETE /ugc/v1/admin/namespaces/{namespace}/users/{userId}/states

```
import { AccelByte } from '@accelbyte/sdk'
import { AnonymizationAdminApi } from '@accelbyte/sdk-ugc'

const sdk = AccelByte.SDK({
  coreConfig: {
    baseURL: '__AGS_DOMAIN__',
    clientId: '__IAM_CLIENT_ID__',
    namespace: '__NAMESPACE__',
    redirectURI: '__IAM_CLIENT_REDIRECT_URI__'
  }
})

AnonymizationAdminApi(sdk, { axiosConfig: { request: { headers: { Authorization: 'Bearer {access_token}' } } } })
  .deleteState_ByUserId(userId:string)

// return Promise
```

## DELETE /ugc/v1/admin/namespaces/{namespace}/users/{userId}/channels

```
import { AccelByte } from '@accelbyte/sdk'
import { AnonymizationAdminApi } from '@accelbyte/sdk-ugc'

const sdk = AccelByte.SDK({
  coreConfig: {
    baseURL: '__AGS_DOMAIN__',
    clientId: '__IAM_CLIENT_ID__',
    namespace: '__NAMESPACE__',
    redirectURI: '__IAM_CLIENT_REDIRECT_URI__'
  }
})

AnonymizationAdminApi(sdk, { axiosConfig: { request: { headers: { Authorization: 'Bearer {access_token}' } } } })
  .deleteChannel_ByUserId(userId:string)

// return Promise
```

## GET /ugc/v1/admin/namespaces/{namespace}/users/{userId}/channels

```
import { AccelByte } from '@accelbyte/sdk'
import { ChannelAdminApi } from '@accelbyte/sdk-ugc'

const sdk = AccelByte.SDK({
  coreConfig: {
    baseURL: '__AGS_DOMAIN__',
    clientId: '__IAM_CLIENT_ID__',
    namespace: '__NAMESPACE__',
    redirectURI: '__IAM_CLIENT_REDIRECT_URI__'
  }
})

ChannelAdminApi(sdk, { axiosConfig: { request: { headers: { Authorization: 'Bearer {access_token}' } } } })
  .getChannels_ByUserId(userId:string,  queryParams?: {
             limit?: number,
             name?: string | null,
             offset?: number
    })

// return Promise<PaginatedGetChannelResponse>
```

## DELETE /ugc/v1/admin/namespaces/{namespace}/users/{userId}/contents

```
import { AccelByte } from '@accelbyte/sdk'
import { AnonymizationAdminApi } from '@accelbyte/sdk-ugc'

const sdk = AccelByte.SDK({
  coreConfig: {
    baseURL: '__AGS_DOMAIN__',
    clientId: '__IAM_CLIENT_ID__',
    namespace: '__NAMESPACE__',
    redirectURI: '__IAM_CLIENT_REDIRECT_URI__'
  }
})

AnonymizationAdminApi(sdk, { axiosConfig: { request: { headers: { Authorization: 'Bearer {access_token}' } } } })
  .deleteContent_ByUserId(userId:string)

// return Promise
```

## GET /ugc/v1/admin/namespaces/{namespace}/users/{userId}/contents

```
import { AccelByte } from '@accelbyte/sdk'
import { ContentAdminApi } from '@accelbyte/sdk-ugc'

const sdk = AccelByte.SDK({
  coreConfig: {
    baseURL: '__AGS_DOMAIN__',
    clientId: '__IAM_CLIENT_ID__',
    namespace: '__NAMESPACE__',
    redirectURI: '__IAM_CLIENT_REDIRECT_URI__'
  }
})

ContentAdminApi(sdk, { axiosConfig: { request: { headers: { Authorization: 'Bearer {access_token}' } } } })
  .getContents_ByUserId(userId:string,  queryParams?: {
             limit?: number,
             offset?: number
    })

// return Promise<PaginatedContentDownloadResponse>
```

## GET /ugc/v2/admin/namespaces/{namespace}/users/{userId}/contents

```
import { AccelByte } from '@accelbyte/sdk'
import { ContentV2AdminApi } from '@accelbyte/sdk-ugc'

const sdk = AccelByte.SDK({
  coreConfig: {
    baseURL: '__AGS_DOMAIN__',
    clientId: '__IAM_CLIENT_ID__',
    namespace: '__NAMESPACE__',
    redirectURI: '__IAM_CLIENT_REDIRECT_URI__'
  }
})

ContentV2AdminApi(sdk, { axiosConfig: { request: { headers: { Authorization: 'Bearer {access_token}' } } } })
  .getContents_ByUserId_v2(userId:string,  queryParams?: {
             limit?: number,
             offset?: number,
             sortBy?: string | null
    })

// return Promise<PaginatedContentDownloadResponseV2>
```

## POST /ugc/v1/admin/namespaces/{namespace}/contents/sharecodes/bulk

```
import { AccelByte } from '@accelbyte/sdk'
import { ContentAdminApi } from '@accelbyte/sdk-ugc'

const sdk = AccelByte.SDK({
  coreConfig: {
    baseURL: '__AGS_DOMAIN__',
    clientId: '__IAM_CLIENT_ID__',
    namespace: '__NAMESPACE__',
    redirectURI: '__IAM_CLIENT_REDIRECT_URI__'
  }
})

ContentAdminApi(sdk, { axiosConfig: { request: { headers: { Authorization: 'Bearer {access_token}' } } } })
  .fetchContentSharecodeBulk(data: {
             GetContentBulkByShareCodesRequest
    })

// return Promise<ContentDownloadResponseArray>
```

## POST /ugc/v2/admin/namespaces/{namespace}/contents/sharecodes/bulk

```
import { AccelByte } from '@accelbyte/sdk'
import { ContentV2AdminApi } from '@accelbyte/sdk-ugc'

const sdk = AccelByte.SDK({
  coreConfig: {
    baseURL: '__AGS_DOMAIN__',
    clientId: '__IAM_CLIENT_ID__',
    namespace: '__NAMESPACE__',
    redirectURI: '__IAM_CLIENT_REDIRECT_URI__'
  }
})

ContentV2AdminApi(sdk, { axiosConfig: { request: { headers: { Authorization: 'Bearer {access_token}' } } } })
  .fetchContentSharecodeBulk_v2(data: {
             GetContentBulkByShareCodesRequest
    })

// return Promise<ContentDownloadResponseV2Array>
```

## GET /ugc/v1/admin/namespaces/{namespace}/groups/{groupId}/contents

```
import { AccelByte } from '@accelbyte/sdk'
import { GroupAdminApi } from '@accelbyte/sdk-ugc'

const sdk = AccelByte.SDK({
  coreConfig: {
    baseURL: '__AGS_DOMAIN__',
    clientId: '__IAM_CLIENT_ID__',
    namespace: '__NAMESPACE__',
    redirectURI: '__IAM_CLIENT_REDIRECT_URI__'
  }
})

GroupAdminApi(sdk, { axiosConfig: { request: { headers: { Authorization: 'Bearer {access_token}' } } } })
  .getContents_ByGroupId(groupId:string,  queryParams?: {
             limit?: number,
             offset?: number
    })

// return Promise<PaginatedContentDownloadResponse>
```

## GET /ugc/v2/admin/namespaces/{namespace}/groups/{groupId}/contents

```
import { AccelByte } from '@accelbyte/sdk'
import { GroupAdminApi } from '@accelbyte/sdk-ugc'

const sdk = AccelByte.SDK({
  coreConfig: {
    baseURL: '__AGS_DOMAIN__',
    clientId: '__IAM_CLIENT_ID__',
    namespace: '__NAMESPACE__',
    redirectURI: '__IAM_CLIENT_REDIRECT_URI__'
  }
})

GroupAdminApi(sdk, { axiosConfig: { request: { headers: { Authorization: 'Bearer {access_token}' } } } })
  .getContents_ByGroupId_v2(groupId:string,  queryParams?: {
             limit?: number,
             offset?: number
    })

// return Promise<PaginatedContentDownloadResponseV2>
```

## GET /ugc/v1/admin/namespaces/{namespace}/contents/{contentId}/preview

```
import { AccelByte } from '@accelbyte/sdk'
import { ContentAdminApi } from '@accelbyte/sdk-ugc'

const sdk = AccelByte.SDK({
  coreConfig: {
    baseURL: '__AGS_DOMAIN__',
    clientId: '__IAM_CLIENT_ID__',
    namespace: '__NAMESPACE__',
    redirectURI: '__IAM_CLIENT_REDIRECT_URI__'
  }
})

ContentAdminApi(sdk, { axiosConfig: { request: { headers: { Authorization: 'Bearer {access_token}' } } } })
  .getPreview_ByContentId(contentId:string)

// return Promise<GetContentPreviewResponse>
```

## GET /ugc/v2/admin/namespaces/{namespace}/staging-contents/{contentId}

```
import { AccelByte } from '@accelbyte/sdk'
import { StagingContentAdminApi } from '@accelbyte/sdk-ugc'

const sdk = AccelByte.SDK({
  coreConfig: {
    baseURL: '__AGS_DOMAIN__',
    clientId: '__IAM_CLIENT_ID__',
    namespace: '__NAMESPACE__',
    redirectURI: '__IAM_CLIENT_REDIRECT_URI__'
  }
})

StagingContentAdminApi(sdk, { axiosConfig: { request: { headers: { Authorization: 'Bearer {access_token}' } } } })
  .getStagingContent_ByContentId_v2(contentId:string)

// return Promise<StagingContentResponse>
```

## POST /ugc/v1/admin/namespaces/{namespace}/channels/{channelId}/contents

```
import { AccelByte } from '@accelbyte/sdk'
import { ContentAdminApi } from '@accelbyte/sdk-ugc'

const sdk = AccelByte.SDK({
  coreConfig: {
    baseURL: '__AGS_DOMAIN__',
    clientId: '__IAM_CLIENT_ID__',
    namespace: '__NAMESPACE__',
    redirectURI: '__IAM_CLIENT_REDIRECT_URI__'
  }
})

ContentAdminApi(sdk, { axiosConfig: { request: { headers: { Authorization: 'Bearer {access_token}' } } } })
  .createContent_ByChannelId(channelId:string, data: {
             CreateContentRequest
    })

// return Promise<CreateContentResponse>
```

## GET /ugc/v1/admin/namespaces/{namespace}/contents/{contentId}/versions

```
import { AccelByte } from '@accelbyte/sdk'
import { ContentAdminApi } from '@accelbyte/sdk-ugc'

const sdk = AccelByte.SDK({
  coreConfig: {
    baseURL: '__AGS_DOMAIN__',
    clientId: '__IAM_CLIENT_ID__',
    namespace: '__NAMESPACE__',
    redirectURI: '__IAM_CLIENT_REDIRECT_URI__'
  }
})

ContentAdminApi(sdk, { axiosConfig: { request: { headers: { Authorization: 'Bearer {access_token}' } } } })
  .getVersions_ByContentId(contentId:string)

// return Promise<ListContentVersionsResponse>
```

## GET /ugc/v2/admin/namespaces/{namespace}/channels/{channelId}/contents

```
import { AccelByte } from '@accelbyte/sdk'
import { ContentV2AdminApi } from '@accelbyte/sdk-ugc'

const sdk = AccelByte.SDK({
  coreConfig: {
    baseURL: '__AGS_DOMAIN__',
    clientId: '__IAM_CLIENT_ID__',
    namespace: '__NAMESPACE__',
    redirectURI: '__IAM_CLIENT_REDIRECT_URI__'
  }
})

ContentV2AdminApi(sdk, { axiosConfig: { request: { headers: { Authorization: 'Bearer {access_token}' } } } })
  .getContents_ByChannelId_v2(channelId:string,  queryParams?: {
             limit?: number,
             name?: string | null,
             offset?: number,
             sortBy?: string | null
    })

// return Promise<PaginatedContentDownloadResponseV2>
```

## POST /ugc/v2/admin/namespaces/{namespace}/channels/{channelId}/contents

```
import { AccelByte } from '@accelbyte/sdk'
import { ContentV2AdminApi } from '@accelbyte/sdk-ugc'

const sdk = AccelByte.SDK({
  coreConfig: {
    baseURL: '__AGS_DOMAIN__',
    clientId: '__IAM_CLIENT_ID__',
    namespace: '__NAMESPACE__',
    redirectURI: '__IAM_CLIENT_REDIRECT_URI__'
  }
})

ContentV2AdminApi(sdk, { axiosConfig: { request: { headers: { Authorization: 'Bearer {access_token}' } } } })
  .createContent_ByChannelId_v2(channelId:string, data: {
             AdminContentRequestV2
    })

// return Promise<CreateContentResponseV2>
```

## GET /ugc/v2/admin/namespaces/{namespace}/contents/{contentId}/versions

```
import { AccelByte } from '@accelbyte/sdk'
import { ContentV2AdminApi } from '@accelbyte/sdk-ugc'

const sdk = AccelByte.SDK({
  coreConfig: {
    baseURL: '__AGS_DOMAIN__',
    clientId: '__IAM_CLIENT_ID__',
    namespace: '__NAMESPACE__',
    redirectURI: '__IAM_CLIENT_REDIRECT_URI__'
  }
})

ContentV2AdminApi(sdk, { axiosConfig: { request: { headers: { Authorization: 'Bearer {access_token}' } } } })
  .getVersions_ByContentId_v2(contentId:string)

// return Promise<ListContentVersionsResponse>
```

## GET /ugc/v1/admin/namespaces/{namespace}/contents/sharecodes/{shareCode}

```
import { AccelByte } from '@accelbyte/sdk'
import { ContentAdminApi } from '@accelbyte/sdk-ugc'

const sdk = AccelByte.SDK({
  coreConfig: {
    baseURL: '__AGS_DOMAIN__',
    clientId: '__IAM_CLIENT_ID__',
    namespace: '__NAMESPACE__',
    redirectURI: '__IAM_CLIENT_REDIRECT_URI__'
  }
})

ContentAdminApi(sdk, { axiosConfig: { request: { headers: { Authorization: 'Bearer {access_token}' } } } })
  .getContentSharecode_ByShareCode(shareCode:string)

// return Promise<ContentDownloadResponse>
```

## DELETE /ugc/v1/admin/namespaces/{namespace}/users/{userId}/groups/{groupId}

```
import { AccelByte } from '@accelbyte/sdk'
import { GroupAdminApi } from '@accelbyte/sdk-ugc'

const sdk = AccelByte.SDK({
  coreConfig: {
    baseURL: '__AGS_DOMAIN__',
    clientId: '__IAM_CLIENT_ID__',
    namespace: '__NAMESPACE__',
    redirectURI: '__IAM_CLIENT_REDIRECT_URI__'
  }
})

GroupAdminApi(sdk, { axiosConfig: { request: { headers: { Authorization: 'Bearer {access_token}' } } } })
  .deleteGroup_ByUserId_ByGroupId(userId:string, groupId:string)

// return Promise
```

## GET /ugc/v1/admin/namespaces/{namespace}/users/{userId}/groups/{groupId}

```
import { AccelByte } from '@accelbyte/sdk'
import { GroupAdminApi } from '@accelbyte/sdk-ugc'

const sdk = AccelByte.SDK({
  coreConfig: {
    baseURL: '__AGS_DOMAIN__',
    clientId: '__IAM_CLIENT_ID__',
    namespace: '__NAMESPACE__',
    redirectURI: '__IAM_CLIENT_REDIRECT_URI__'
  }
})

GroupAdminApi(sdk, { axiosConfig: { request: { headers: { Authorization: 'Bearer {access_token}' } } } })
  .getGroup_ByUserId_ByGroupId(userId:string, groupId:string)

// return Promise<CreateGroupResponse>
```

## PUT /ugc/v1/admin/namespaces/{namespace}/users/{userId}/groups/{groupId}

```
import { AccelByte } from '@accelbyte/sdk'
import { GroupAdminApi } from '@accelbyte/sdk-ugc'

const sdk = AccelByte.SDK({
  coreConfig: {
    baseURL: '__AGS_DOMAIN__',
    clientId: '__IAM_CLIENT_ID__',
    namespace: '__NAMESPACE__',
    redirectURI: '__IAM_CLIENT_REDIRECT_URI__'
  }
})

GroupAdminApi(sdk, { axiosConfig: { request: { headers: { Authorization: 'Bearer {access_token}' } } } })
  .updateGroup_ByUserId_ByGroupId(userId:string, groupId:string, data: {
             CreateGroupRequest
    })

// return Promise<CreateGroupResponse>
```

## GET /ugc/v2/admin/namespaces/{namespace}/contents/sharecodes/{shareCode}

```
import { AccelByte } from '@accelbyte/sdk'
import { ContentV2AdminApi } from '@accelbyte/sdk-ugc'

const sdk = AccelByte.SDK({
  coreConfig: {
    baseURL: '__AGS_DOMAIN__',
    clientId: '__IAM_CLIENT_ID__',
    namespace: '__NAMESPACE__',
    redirectURI: '__IAM_CLIENT_REDIRECT_URI__'
  }
})

ContentV2AdminApi(sdk, { axiosConfig: { request: { headers: { Authorization: 'Bearer {access_token}' } } } })
  .getContentSharecode_ByShareCode_v2(shareCode:string)

// return Promise<ContentDownloadResponseV2>
```

## GET /ugc/v2/admin/namespaces/{namespace}/users/{userId}/staging-contents

```
import { AccelByte } from '@accelbyte/sdk'
import { StagingContentAdminApi } from '@accelbyte/sdk-ugc'

const sdk = AccelByte.SDK({
  coreConfig: {
    baseURL: '__AGS_DOMAIN__',
    clientId: '__IAM_CLIENT_ID__',
    namespace: '__NAMESPACE__',
    redirectURI: '__IAM_CLIENT_REDIRECT_URI__'
  }
})

StagingContentAdminApi(sdk, { axiosConfig: { request: { headers: { Authorization: 'Bearer {access_token}' } } } })
  .getStagingContents_ByUserId_v2(userId:string,  queryParams?: {
             limit?: number,
             offset?: number,
             sortBy?: string | null,
             status?: string | null
    })

// return Promise<PaginatedListStagingContentResponse>
```

## POST /ugc/v1/admin/namespaces/{namespace}/channels/{channelId}/contents/s3

```
import { AccelByte } from '@accelbyte/sdk'
import { ContentAdminApi } from '@accelbyte/sdk-ugc'

const sdk = AccelByte.SDK({
  coreConfig: {
    baseURL: '__AGS_DOMAIN__',
    clientId: '__IAM_CLIENT_ID__',
    namespace: '__NAMESPACE__',
    redirectURI: '__IAM_CLIENT_REDIRECT_URI__'
  }
})

ContentAdminApi(sdk, { axiosConfig: { request: { headers: { Authorization: 'Bearer {access_token}' } } } })
  .createContentS3_ByChannelId(channelId:string, data: {
             CreateContentRequestS3
    })

// return Promise<CreateContentResponse>
```

## POST /ugc/v1/admin/namespaces/{namespace}/contents/{contentId}/screenshots

```
import { AccelByte } from '@accelbyte/sdk'
import { ContentAdminApi } from '@accelbyte/sdk-ugc'

const sdk = AccelByte.SDK({
  coreConfig: {
    baseURL: '__AGS_DOMAIN__',
    clientId: '__IAM_CLIENT_ID__',
    namespace: '__NAMESPACE__',
    redirectURI: '__IAM_CLIENT_REDIRECT_URI__'
  }
})

ContentAdminApi(sdk, { axiosConfig: { request: { headers: { Authorization: 'Bearer {access_token}' } } } })
  .createScreenshot_ByContentId(contentId:string, data: {
             CreateScreenshotRequest
    })

// return Promise<CreateScreenshotResponse>
```

## PUT /ugc/v1/admin/namespaces/{namespace}/contents/{contentId}/screenshots

```
import { AccelByte } from '@accelbyte/sdk'
import { ContentAdminApi } from '@accelbyte/sdk-ugc'

const sdk = AccelByte.SDK({
  coreConfig: {
    baseURL: '__AGS_DOMAIN__',
    clientId: '__IAM_CLIENT_ID__',
    namespace: '__NAMESPACE__',
    redirectURI: '__IAM_CLIENT_REDIRECT_URI__'
  }
})

ContentAdminApi(sdk, { axiosConfig: { request: { headers: { Authorization: 'Bearer {access_token}' } } } })
  .updateScreenshot_ByContentId(contentId:string, data: {
             UpdateScreenshotRequest
    })

// return Promise<UpdateScreenshotResponse>
```

## POST /ugc/v2/admin/namespaces/{namespace}/contents/{contentId}/screenshots

```
import { AccelByte } from '@accelbyte/sdk'
import { ContentV2AdminApi } from '@accelbyte/sdk-ugc'

const sdk = AccelByte.SDK({
  coreConfig: {
    baseURL: '__AGS_DOMAIN__',
    clientId: '__IAM_CLIENT_ID__',
    namespace: '__NAMESPACE__',
    redirectURI: '__IAM_CLIENT_REDIRECT_URI__'
  }
})

ContentV2AdminApi(sdk, { axiosConfig: { request: { headers: { Authorization: 'Bearer {access_token}' } } } })
  .createScreenshot_ByContentId_v2(contentId:string, data: {
             CreateScreenshotRequest
    })

// return Promise<CreateScreenshotResponse>
```

## PUT /ugc/v2/admin/namespaces/{namespace}/contents/{contentId}/screenshots

```
import { AccelByte } from '@accelbyte/sdk'
import { ContentV2AdminApi } from '@accelbyte/sdk-ugc'

const sdk = AccelByte.SDK({
  coreConfig: {
    baseURL: '__AGS_DOMAIN__',
    clientId: '__IAM_CLIENT_ID__',
    namespace: '__NAMESPACE__',
    redirectURI: '__IAM_CLIENT_REDIRECT_URI__'
  }
})

ContentV2AdminApi(sdk, { axiosConfig: { request: { headers: { Authorization: 'Bearer {access_token}' } } } })
  .updateScreenshot_ByContentId_v2(contentId:string, data: {
             UpdateScreenshotRequest
    })

// return Promise<UpdateScreenshotResponse>
```

## DELETE /ugc/v1/admin/namespaces/{namespace}/users/{userId}/channels/{channelId}

```
import { AccelByte } from '@accelbyte/sdk'
import { ChannelAdminApi } from '@accelbyte/sdk-ugc'

const sdk = AccelByte.SDK({
  coreConfig: {
    baseURL: '__AGS_DOMAIN__',
    clientId: '__IAM_CLIENT_ID__',
    namespace: '__NAMESPACE__',
    redirectURI: '__IAM_CLIENT_REDIRECT_URI__'
  }
})

ChannelAdminApi(sdk, { axiosConfig: { request: { headers: { Authorization: 'Bearer {access_token}' } } } })
  .deleteChannel_ByUserId_ByChannelId(userId:string, channelId:string)

// return Promise
```

## PUT /ugc/v1/admin/namespaces/{namespace}/users/{userId}/channels/{channelId}

```
import { AccelByte } from '@accelbyte/sdk'
import { ChannelAdminApi } from '@accelbyte/sdk-ugc'

const sdk = AccelByte.SDK({
  coreConfig: {
    baseURL: '__AGS_DOMAIN__',
    clientId: '__IAM_CLIENT_ID__',
    namespace: '__NAMESPACE__',
    redirectURI: '__IAM_CLIENT_REDIRECT_URI__'
  }
})

ChannelAdminApi(sdk, { axiosConfig: { request: { headers: { Authorization: 'Bearer {access_token}' } } } })
  .updateChannel_ByUserId_ByChannelId(userId:string, channelId:string, data: {
             UpdateChannelRequest
    })

// return Promise<ChannelResponse>
```

## GET /ugc/v1/admin/namespaces/{namespace}/channels/{channelId}/contents/search

```
import { AccelByte } from '@accelbyte/sdk'
import { ContentAdminApi } from '@accelbyte/sdk-ugc'

const sdk = AccelByte.SDK({
  coreConfig: {
    baseURL: '__AGS_DOMAIN__',
    clientId: '__IAM_CLIENT_ID__',
    namespace: '__NAMESPACE__',
    redirectURI: '__IAM_CLIENT_REDIRECT_URI__'
  }
})

ContentAdminApi(sdk, { axiosConfig: { request: { headers: { Authorization: 'Bearer {access_token}' } } } })
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
```

## POST /ugc/v2/admin/namespaces/{namespace}/staging-contents/{contentId}/approve

```
import { AccelByte } from '@accelbyte/sdk'
import { StagingContentAdminApi } from '@accelbyte/sdk-ugc'

const sdk = AccelByte.SDK({
  coreConfig: {
    baseURL: '__AGS_DOMAIN__',
    clientId: '__IAM_CLIENT_ID__',
    namespace: '__NAMESPACE__',
    redirectURI: '__IAM_CLIENT_REDIRECT_URI__'
  }
})

StagingContentAdminApi(sdk, { axiosConfig: { request: { headers: { Authorization: 'Bearer {access_token}' } } } })
  .createApprove_ByContentId_v2(contentId:string, data: {
             ApproveStagingContentRequest
    })

// return Promise<StagingContentResponse>
```

## PUT /ugc/v1/admin/namespaces/{namespace}/users/{userId}/contents/{contentId}/hide

```
import { AccelByte } from '@accelbyte/sdk'
import { ContentAdminApi } from '@accelbyte/sdk-ugc'

const sdk = AccelByte.SDK({
  coreConfig: {
    baseURL: '__AGS_DOMAIN__',
    clientId: '__IAM_CLIENT_ID__',
    namespace: '__NAMESPACE__',
    redirectURI: '__IAM_CLIENT_REDIRECT_URI__'
  }
})

ContentAdminApi(sdk, { axiosConfig: { request: { headers: { Authorization: 'Bearer {access_token}' } } } })
  .updateHide_ByUserId_ByContentId(userId:string, contentId:string, data: {
             HideContentRequest
    })

// return Promise<CreateContentResponse>
```

## GET /ugc/v1/admin/namespaces/{namespace}/users/{userId}/groups/{groupId}/contents

```
import { AccelByte } from '@accelbyte/sdk'
import { GroupAdminApi } from '@accelbyte/sdk-ugc'

const sdk = AccelByte.SDK({
  coreConfig: {
    baseURL: '__AGS_DOMAIN__',
    clientId: '__IAM_CLIENT_ID__',
    namespace: '__NAMESPACE__',
    redirectURI: '__IAM_CLIENT_REDIRECT_URI__'
  }
})

GroupAdminApi(sdk, { axiosConfig: { request: { headers: { Authorization: 'Bearer {access_token}' } } } })
  .getContents_ByUserId_ByGroupId(userId:string, groupId:string,  queryParams?: {
             limit?: number,
             offset?: number
    })

// return Promise<PaginatedContentDownloadResponse>
```

## PUT /ugc/v2/admin/namespaces/{namespace}/users/{userId}/contents/{contentId}/hide

```
import { AccelByte } from '@accelbyte/sdk'
import { ContentV2AdminApi } from '@accelbyte/sdk-ugc'

const sdk = AccelByte.SDK({
  coreConfig: {
    baseURL: '__AGS_DOMAIN__',
    clientId: '__IAM_CLIENT_ID__',
    namespace: '__NAMESPACE__',
    redirectURI: '__IAM_CLIENT_REDIRECT_URI__'
  }
})

ContentV2AdminApi(sdk, { axiosConfig: { request: { headers: { Authorization: 'Bearer {access_token}' } } } })
  .updateHide_ByUserId_ByContentId_v2(userId:string, contentId:string, data: {
             HideContentRequest
    })

// return Promise<CreateContentResponseV2>
```

## GET /ugc/v2/admin/namespaces/{namespace}/users/{userId}/groups/{groupId}/contents

```
import { AccelByte } from '@accelbyte/sdk'
import { GroupAdminApi } from '@accelbyte/sdk-ugc'

const sdk = AccelByte.SDK({
  coreConfig: {
    baseURL: '__AGS_DOMAIN__',
    clientId: '__IAM_CLIENT_ID__',
    namespace: '__NAMESPACE__',
    redirectURI: '__IAM_CLIENT_REDIRECT_URI__'
  }
})

GroupAdminApi(sdk, { axiosConfig: { request: { headers: { Authorization: 'Bearer {access_token}' } } } })
  .getContents_ByUserId_ByGroupId_v2(userId:string, groupId:string,  queryParams?: {
             limit?: number,
             offset?: number
    })

// return Promise<PaginatedContentDownloadResponseV2>
```

## DELETE /ugc/v1/admin/namespaces/{namespace}/channels/{channelId}/contents/{contentId}

```
import { AccelByte } from '@accelbyte/sdk'
import { ContentAdminApi } from '@accelbyte/sdk-ugc'

const sdk = AccelByte.SDK({
  coreConfig: {
    baseURL: '__AGS_DOMAIN__',
    clientId: '__IAM_CLIENT_ID__',
    namespace: '__NAMESPACE__',
    redirectURI: '__IAM_CLIENT_REDIRECT_URI__'
  }
})

ContentAdminApi(sdk, { axiosConfig: { request: { headers: { Authorization: 'Bearer {access_token}' } } } })
  .deleteContent_ByChannelId_ByContentId(channelId:string, contentId:string)

// return Promise
```

## PUT /ugc/v1/admin/namespaces/{namespace}/channels/{channelId}/contents/{contentId}

```
import { AccelByte } from '@accelbyte/sdk'
import { ContentAdminApi } from '@accelbyte/sdk-ugc'

const sdk = AccelByte.SDK({
  coreConfig: {
    baseURL: '__AGS_DOMAIN__',
    clientId: '__IAM_CLIENT_ID__',
    namespace: '__NAMESPACE__',
    redirectURI: '__IAM_CLIENT_REDIRECT_URI__'
  }
})

ContentAdminApi(sdk, { axiosConfig: { request: { headers: { Authorization: 'Bearer {access_token}' } } } })
  .updateContent_ByChannelId_ByContentId(channelId:string, contentId:string, data: {
             CreateContentRequest
    })

// return Promise<CreateContentResponse>
```

## PUT /ugc/v1/admin/namespaces/{namespace}/contents/{contentId}/rollback/{versionId}

```
import { AccelByte } from '@accelbyte/sdk'
import { ContentAdminApi } from '@accelbyte/sdk-ugc'

const sdk = AccelByte.SDK({
  coreConfig: {
    baseURL: '__AGS_DOMAIN__',
    clientId: '__IAM_CLIENT_ID__',
    namespace: '__NAMESPACE__',
    redirectURI: '__IAM_CLIENT_REDIRECT_URI__'
  }
})

ContentAdminApi(sdk, { axiosConfig: { request: { headers: { Authorization: 'Bearer {access_token}' } } } })
  .updateRollback_ByContentId_ByVersionId(contentId:string, versionId:string)

// return Promise<ContentDownloadResponse>
```

## DELETE /ugc/v2/admin/namespaces/{namespace}/channels/{channelId}/contents/{contentId}

```
import { AccelByte } from '@accelbyte/sdk'
import { ContentV2AdminApi } from '@accelbyte/sdk-ugc'

const sdk = AccelByte.SDK({
  coreConfig: {
    baseURL: '__AGS_DOMAIN__',
    clientId: '__IAM_CLIENT_ID__',
    namespace: '__NAMESPACE__',
    redirectURI: '__IAM_CLIENT_REDIRECT_URI__'
  }
})

ContentV2AdminApi(sdk, { axiosConfig: { request: { headers: { Authorization: 'Bearer {access_token}' } } } })
  .deleteContent_ByChannelId_ByContentId_v2(channelId:string, contentId:string)

// return Promise
```

## PATCH /ugc/v2/admin/namespaces/{namespace}/channels/{channelId}/contents/{contentId}

```
import { AccelByte } from '@accelbyte/sdk'
import { ContentV2AdminApi } from '@accelbyte/sdk-ugc'

const sdk = AccelByte.SDK({
  coreConfig: {
    baseURL: '__AGS_DOMAIN__',
    clientId: '__IAM_CLIENT_ID__',
    namespace: '__NAMESPACE__',
    redirectURI: '__IAM_CLIENT_REDIRECT_URI__'
  }
})

ContentV2AdminApi(sdk, { axiosConfig: { request: { headers: { Authorization: 'Bearer {access_token}' } } } })
  .patchContent_ByChannelId_ByContentId_v2(channelId:string, contentId:string, data: {
             AdminUpdateContentRequestV2
    })

// return Promise<UpdateContentResponseV2>
```

## PUT /ugc/v2/admin/namespaces/{namespace}/contents/{contentId}/rollback/{versionId}

```
import { AccelByte } from '@accelbyte/sdk'
import { ContentV2AdminApi } from '@accelbyte/sdk-ugc'

const sdk = AccelByte.SDK({
  coreConfig: {
    baseURL: '__AGS_DOMAIN__',
    clientId: '__IAM_CLIENT_ID__',
    namespace: '__NAMESPACE__',
    redirectURI: '__IAM_CLIENT_REDIRECT_URI__'
  }
})

ContentV2AdminApi(sdk, { axiosConfig: { request: { headers: { Authorization: 'Bearer {access_token}' } } } })
  .updateRollback_ByContentId_ByVersionId_v2(contentId:string, versionId:string)

// return Promise<ContentDownloadResponse>
```

## PUT /ugc/v1/admin/namespaces/{namespace}/channels/{channelId}/contents/s3/{contentId}

```
import { AccelByte } from '@accelbyte/sdk'
import { ContentAdminApi } from '@accelbyte/sdk-ugc'

const sdk = AccelByte.SDK({
  coreConfig: {
    baseURL: '__AGS_DOMAIN__',
    clientId: '__IAM_CLIENT_ID__',
    namespace: '__NAMESPACE__',
    redirectURI: '__IAM_CLIENT_REDIRECT_URI__'
  }
})

ContentAdminApi(sdk, { axiosConfig: { request: { headers: { Authorization: 'Bearer {access_token}' } } } })
  .updateContentS3_ByChannelId_ByContentId(channelId:string, contentId:string, data: {
             AdminUpdateContentRequest
    })

// return Promise<CreateContentResponse>
```

## POST /ugc/v2/admin/namespaces/{namespace}/channels/{channelId}/contents/{contentId}/copy

```
import { AccelByte } from '@accelbyte/sdk'
import { ContentV2AdminApi } from '@accelbyte/sdk-ugc'

const sdk = AccelByte.SDK({
  coreConfig: {
    baseURL: '__AGS_DOMAIN__',
    clientId: '__IAM_CLIENT_ID__',
    namespace: '__NAMESPACE__',
    redirectURI: '__IAM_CLIENT_REDIRECT_URI__'
  }
})

ContentV2AdminApi(sdk, { axiosConfig: { request: { headers: { Authorization: 'Bearer {access_token}' } } } })
  .createCopy_ByChannelId_ByContentId_v2(channelId:string, contentId:string, data: {
             CopyContentRequest
    })

// return Promise<ContentDownloadResponseV2>
```

## DELETE /ugc/v1/admin/namespaces/{namespace}/contents/{contentId}/screenshots/{screenshotId}

```
import { AccelByte } from '@accelbyte/sdk'
import { ContentAdminApi } from '@accelbyte/sdk-ugc'

const sdk = AccelByte.SDK({
  coreConfig: {
    baseURL: '__AGS_DOMAIN__',
    clientId: '__IAM_CLIENT_ID__',
    namespace: '__NAMESPACE__',
    redirectURI: '__IAM_CLIENT_REDIRECT_URI__'
  }
})

ContentAdminApi(sdk, { axiosConfig: { request: { headers: { Authorization: 'Bearer {access_token}' } } } })
  .deleteScreenshot_ByContentId_ByScreenshotId(contentId:string, screenshotId:string)

// return Promise
```

## DELETE /ugc/v2/admin/namespaces/{namespace}/contents/{contentId}/screenshots/{screenshotId}

```
import { AccelByte } from '@accelbyte/sdk'
import { ContentV2AdminApi } from '@accelbyte/sdk-ugc'

const sdk = AccelByte.SDK({
  coreConfig: {
    baseURL: '__AGS_DOMAIN__',
    clientId: '__IAM_CLIENT_ID__',
    namespace: '__NAMESPACE__',
    redirectURI: '__IAM_CLIENT_REDIRECT_URI__'
  }
})

ContentV2AdminApi(sdk, { axiosConfig: { request: { headers: { Authorization: 'Bearer {access_token}' } } } })
  .deleteScreenshot_ByContentId_ByScreenshotId_v2(contentId:string, screenshotId:string)

// return Promise
```

## PATCH /ugc/v2/admin/namespaces/{namespace}/channels/{channelId}/contents/{contentId}/uploadUrl

```
import { AccelByte } from '@accelbyte/sdk'
import { ContentV2AdminApi } from '@accelbyte/sdk-ugc'

const sdk = AccelByte.SDK({
  coreConfig: {
    baseURL: '__AGS_DOMAIN__',
    clientId: '__IAM_CLIENT_ID__',
    namespace: '__NAMESPACE__',
    redirectURI: '__IAM_CLIENT_REDIRECT_URI__'
  }
})

ContentV2AdminApi(sdk, { axiosConfig: { request: { headers: { Authorization: 'Bearer {access_token}' } } } })
  .patchUploadUrl_ByChannelId_ByContentId_v2(channelId:string, contentId:string, data: {
             GenerateContentUploadUrlRequest
    })

// return Promise<GenerateContentUploadUrlResponse>
```

## PATCH /ugc/v2/admin/namespaces/{namespace}/channels/{channelId}/contents/{contentId}/fileLocation

```
import { AccelByte } from '@accelbyte/sdk'
import { ContentV2AdminApi } from '@accelbyte/sdk-ugc'

const sdk = AccelByte.SDK({
  coreConfig: {
    baseURL: '__AGS_DOMAIN__',
    clientId: '__IAM_CLIENT_ID__',
    namespace: '__NAMESPACE__',
    redirectURI: '__IAM_CLIENT_REDIRECT_URI__'
  }
})

ContentV2AdminApi(sdk, { axiosConfig: { request: { headers: { Authorization: 'Bearer {access_token}' } } } })
  .patchFileLocation_ByChannelId_ByContentId_v2(channelId:string, contentId:string, data: {
             UpdateFileLocationRequest
    })

// return Promise<UpdateContentResponseV2>
```

## DELETE /ugc/v1/admin/namespaces/{namespace}/users/{userId}/channels/{channelId}/contents/{contentId}

```
import { AccelByte } from '@accelbyte/sdk'
import { ContentAdminApi } from '@accelbyte/sdk-ugc'

const sdk = AccelByte.SDK({
  coreConfig: {
    baseURL: '__AGS_DOMAIN__',
    clientId: '__IAM_CLIENT_ID__',
    namespace: '__NAMESPACE__',
    redirectURI: '__IAM_CLIENT_REDIRECT_URI__'
  }
})

ContentAdminApi(sdk, { axiosConfig: { request: { headers: { Authorization: 'Bearer {access_token}' } } } })
  .deleteContent_ByUserId_ByChannelId_ByContentId(userId:string, channelId:string, contentId:string)

// return Promise
```

## PUT /ugc/v1/admin/namespaces/{namespace}/users/{userId}/channels/{channelId}/contents/{contentId}

```
import { AccelByte } from '@accelbyte/sdk'
import { ContentAdminApi } from '@accelbyte/sdk-ugc'

const sdk = AccelByte.SDK({
  coreConfig: {
    baseURL: '__AGS_DOMAIN__',
    clientId: '__IAM_CLIENT_ID__',
    namespace: '__NAMESPACE__',
    redirectURI: '__IAM_CLIENT_REDIRECT_URI__'
  }
})

ContentAdminApi(sdk, { axiosConfig: { request: { headers: { Authorization: 'Bearer {access_token}' } } } })
  .updateContent_ByUserId_ByChannelId_ByContentId(userId:string, channelId:string, contentId:string, data: {
             CreateContentRequest
    })

// return Promise<CreateContentResponse>
```

## DELETE /ugc/v2/admin/namespaces/{namespace}/users/{userId}/channels/{channelId}/contents/{contentId}

```
import { AccelByte } from '@accelbyte/sdk'
import { ContentV2AdminApi } from '@accelbyte/sdk-ugc'

const sdk = AccelByte.SDK({
  coreConfig: {
    baseURL: '__AGS_DOMAIN__',
    clientId: '__IAM_CLIENT_ID__',
    namespace: '__NAMESPACE__',
    redirectURI: '__IAM_CLIENT_REDIRECT_URI__'
  }
})

ContentV2AdminApi(sdk, { axiosConfig: { request: { headers: { Authorization: 'Bearer {access_token}' } } } })
  .deleteContent_ByUserId_ByChannelId_ByContentId_v2(userId:string, channelId:string, contentId:string)

// return Promise
```

## PATCH /ugc/v2/admin/namespaces/{namespace}/users/{userId}/channels/{channelId}/contents/{contentId}

```
import { AccelByte } from '@accelbyte/sdk'
import { ContentV2AdminApi } from '@accelbyte/sdk-ugc'

const sdk = AccelByte.SDK({
  coreConfig: {
    baseURL: '__AGS_DOMAIN__',
    clientId: '__IAM_CLIENT_ID__',
    namespace: '__NAMESPACE__',
    redirectURI: '__IAM_CLIENT_REDIRECT_URI__'
  }
})

ContentV2AdminApi(sdk, { axiosConfig: { request: { headers: { Authorization: 'Bearer {access_token}' } } } })
  .patchContent_ByUserId_ByChannelId_ByContentId_v2(userId:string, channelId:string, contentId:string, data: {
             AdminUpdateContentRequestV2
    })

// return Promise<UpdateContentResponseV2>
```

## PUT /ugc/v1/admin/namespaces/{namespace}/users/{userId}/channels/{channelId}/contents/s3/{contentId}

```
import { AccelByte } from '@accelbyte/sdk'
import { ContentAdminApi } from '@accelbyte/sdk-ugc'

const sdk = AccelByte.SDK({
  coreConfig: {
    baseURL: '__AGS_DOMAIN__',
    clientId: '__IAM_CLIENT_ID__',
    namespace: '__NAMESPACE__',
    redirectURI: '__IAM_CLIENT_REDIRECT_URI__'
  }
})

ContentAdminApi(sdk, { axiosConfig: { request: { headers: { Authorization: 'Bearer {access_token}' } } } })
  .updateContentS3_ByUserId_ByChannelId_ByContentId(userId:string, channelId:string, contentId:string, data: {
             AdminUpdateContentRequest
    })

// return Promise<CreateContentResponse>
```

## PATCH /ugc/v2/admin/namespaces/{namespace}/users/{userId}/channels/{channelId}/contents/{contentId}/uploadUrl

```
import { AccelByte } from '@accelbyte/sdk'
import { ContentV2AdminApi } from '@accelbyte/sdk-ugc'

const sdk = AccelByte.SDK({
  coreConfig: {
    baseURL: '__AGS_DOMAIN__',
    clientId: '__IAM_CLIENT_ID__',
    namespace: '__NAMESPACE__',
    redirectURI: '__IAM_CLIENT_REDIRECT_URI__'
  }
})

ContentV2AdminApi(sdk, { axiosConfig: { request: { headers: { Authorization: 'Bearer {access_token}' } } } })
  .patchUploadUrl_ByUserId_ByChannelId_ByContentId_v2(userId:string, channelId:string, contentId:string, data: {
             GenerateContentUploadUrlRequest
    })

// return Promise<GenerateContentUploadUrlResponse>
```

## DELETE /ugc/v1/admin/namespaces/{namespace}/users/{userId}/channels/{channelId}/contents/sharecodes/{shareCode}

```
import { AccelByte } from '@accelbyte/sdk'
import { ContentAdminApi } from '@accelbyte/sdk-ugc'

const sdk = AccelByte.SDK({
  coreConfig: {
    baseURL: '__AGS_DOMAIN__',
    clientId: '__IAM_CLIENT_ID__',
    namespace: '__NAMESPACE__',
    redirectURI: '__IAM_CLIENT_REDIRECT_URI__'
  }
})

ContentAdminApi(sdk, { axiosConfig: { request: { headers: { Authorization: 'Bearer {access_token}' } } } })
  .deleteContentSharecode_ByUserId_ByChannelId_ByShareCode(userId:string, channelId:string, shareCode:string)

// return Promise
```

## DELETE /ugc/v2/admin/namespaces/{namespace}/users/{userId}/channels/{channelId}/contents/sharecodes/{shareCode}

```
import { AccelByte } from '@accelbyte/sdk'
import { ContentV2AdminApi } from '@accelbyte/sdk-ugc'

const sdk = AccelByte.SDK({
  coreConfig: {
    baseURL: '__AGS_DOMAIN__',
    clientId: '__IAM_CLIENT_ID__',
    namespace: '__NAMESPACE__',
    redirectURI: '__IAM_CLIENT_REDIRECT_URI__'
  }
})

ContentV2AdminApi(sdk, { axiosConfig: { request: { headers: { Authorization: 'Bearer {access_token}' } } } })
  .deleteContentSharecode_ByUserId_ByChannelId_ByShareCode_v2(userId:string, channelId:string, shareCode:string)

// return Promise
```

## PATCH /ugc/v2/admin/namespaces/{namespace}/users/{userId}/channels/{channelId}/contents/{contentId}/fileLocation

```
import { AccelByte } from '@accelbyte/sdk'
import { ContentV2AdminApi } from '@accelbyte/sdk-ugc'

const sdk = AccelByte.SDK({
  coreConfig: {
    baseURL: '__AGS_DOMAIN__',
    clientId: '__IAM_CLIENT_ID__',
    namespace: '__NAMESPACE__',
    redirectURI: '__IAM_CLIENT_REDIRECT_URI__'
  }
})

ContentV2AdminApi(sdk, { axiosConfig: { request: { headers: { Authorization: 'Bearer {access_token}' } } } })
  .patchFileLocation_ByUserId_ByChannelId_ByContentId_v2(userId:string, channelId:string, contentId:string, data: {
             UpdateFileLocationRequest
    })

// return Promise<UpdateContentResponseV2>
```

## PUT /ugc/v1/admin/namespaces/{namespace}/users/{userId}/channels/{channelId}/contents/s3/sharecodes/{shareCode}

```
import { AccelByte } from '@accelbyte/sdk'
import { ContentAdminApi } from '@accelbyte/sdk-ugc'

const sdk = AccelByte.SDK({
  coreConfig: {
    baseURL: '__AGS_DOMAIN__',
    clientId: '__IAM_CLIENT_ID__',
    namespace: '__NAMESPACE__',
    redirectURI: '__IAM_CLIENT_REDIRECT_URI__'
  }
})

ContentAdminApi(sdk, { axiosConfig: { request: { headers: { Authorization: 'Bearer {access_token}' } } } })
  .updateContentS3Sharecode_ByUserId_ByChannelId_ByShareCode(userId:string, channelId:string, shareCode:string, data: {
             AdminUpdateContentRequest
    })

// return Promise<CreateContentResponse>
```

## PUT /ugc/v2/admin/namespaces/{namespace}/users/{userId}/channels/{channelId}/contents/s3/sharecodes/{shareCode}

```
import { AccelByte } from '@accelbyte/sdk'
import { ContentV2AdminApi } from '@accelbyte/sdk-ugc'

const sdk = AccelByte.SDK({
  coreConfig: {
    baseURL: '__AGS_DOMAIN__',
    clientId: '__IAM_CLIENT_ID__',
    namespace: '__NAMESPACE__',
    redirectURI: '__IAM_CLIENT_REDIRECT_URI__'
  }
})

ContentV2AdminApi(sdk, { axiosConfig: { request: { headers: { Authorization: 'Bearer {access_token}' } } } })
  .updateContentS3Sharecode_ByUserId_ByChannelId_ByShareCode_v2(userId:string, channelId:string, shareCode:string, data: {
             AdminUpdateContentRequestV2
    })

// return Promise<CreateContentResponseV2>
```