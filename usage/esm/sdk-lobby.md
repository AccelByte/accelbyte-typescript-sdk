## GET /lobby/v1/messages

```
import { AccelByte } from '@accelbyte/sdk'
import { LobbyOperationsApi } from '@accelbyte/sdk-lobby'

const sdk = AccelByte.SDK({
  coreConfig: {
    baseURL: '__AGS_DOMAIN__',
    clientId: '__IAM_CLIENT_ID__',
    namespace: '__NAMESPACE__',
    redirectURI: '__IAM_CLIENT_REDIRECT_URI__'
  }
})

LobbyOperationsApi(sdk)
  .getMessages()

// return Promise<AppMessageDeclarationArray>
```

## GET /friends/namespaces/{namespace}/me

```
import { AccelByte } from '@accelbyte/sdk'
import { FriendsApi } from '@accelbyte/sdk-lobby'

const sdk = AccelByte.SDK({
  coreConfig: {
    baseURL: '__AGS_DOMAIN__',
    clientId: '__IAM_CLIENT_ID__',
    namespace: '__NAMESPACE__',
    redirectURI: '__IAM_CLIENT_REDIRECT_URI__'
  }
})

FriendsApi(sdk, { axiosConfig: { request: { headers: { Authorization: 'Bearer {access_token}' } } } })
  .getFriendsMe( queryParams?: {
             limit?: number,
             offset?: number
    })

// return Promise<GetUserFriendsResponseArray>
```

## PATCH /friends/sync/namespaces/{namespace}/me

```
import { AccelByte } from '@accelbyte/sdk'
import { FriendsApi } from '@accelbyte/sdk-lobby'

const sdk = AccelByte.SDK({
  coreConfig: {
    baseURL: '__AGS_DOMAIN__',
    clientId: '__IAM_CLIENT_ID__',
    namespace: '__NAMESPACE__',
    redirectURI: '__IAM_CLIENT_REDIRECT_URI__'
  }
})

FriendsApi(sdk, { axiosConfig: { request: { headers: { Authorization: 'Bearer {access_token}' } } } })
  .patchFriendSyncMe(data: {
             NativeFriendRequest[]
    })

// return Promise<NativeFriendSyncResponseArray>
```

## GET /notification/namespaces/{namespace}/me

```
import { AccelByte } from '@accelbyte/sdk'
import { NotificationApi } from '@accelbyte/sdk-lobby'

const sdk = AccelByte.SDK({
  coreConfig: {
    baseURL: '__AGS_DOMAIN__',
    clientId: '__IAM_CLIENT_ID__',
    namespace: '__NAMESPACE__',
    redirectURI: '__IAM_CLIENT_REDIRECT_URI__'
  }
})

NotificationApi(sdk, { axiosConfig: { request: { headers: { Authorization: 'Bearer {access_token}' } } } })
  .getNotificationMe( queryParams?: {
             endTime?: number,
             limit?: number,
             offset?: number,
             startTime?: number
    })

// return Promise<NotificationResponse>
```

## POST /friends/namespaces/{namespace}/me/request

```
import { AccelByte } from '@accelbyte/sdk'
import { FriendsApi } from '@accelbyte/sdk-lobby'

const sdk = AccelByte.SDK({
  coreConfig: {
    baseURL: '__AGS_DOMAIN__',
    clientId: '__IAM_CLIENT_ID__',
    namespace: '__NAMESPACE__',
    redirectURI: '__IAM_CLIENT_REDIRECT_URI__'
  }
})

FriendsApi(sdk, { axiosConfig: { request: { headers: { Authorization: 'Bearer {access_token}' } } } })
  .createFriendMeRequest(data: {
             UserRequestFriendRequest
    })

// return Promise
```

## GET /friends/namespaces/{namespace}/me/incoming

```
import { AccelByte } from '@accelbyte/sdk'
import { FriendsApi } from '@accelbyte/sdk-lobby'

const sdk = AccelByte.SDK({
  coreConfig: {
    baseURL: '__AGS_DOMAIN__',
    clientId: '__IAM_CLIENT_ID__',
    namespace: '__NAMESPACE__',
    redirectURI: '__IAM_CLIENT_REDIRECT_URI__'
  }
})

FriendsApi(sdk, { axiosConfig: { request: { headers: { Authorization: 'Bearer {access_token}' } } } })
  .getFriendsMeIncoming( queryParams?: {
             limit?: number,
             offset?: number
    })

// return Promise<GetUserIncomingFriendsResponseArray>
```

## GET /friends/namespaces/{namespace}/me/outgoing

```
import { AccelByte } from '@accelbyte/sdk'
import { FriendsApi } from '@accelbyte/sdk-lobby'

const sdk = AccelByte.SDK({
  coreConfig: {
    baseURL: '__AGS_DOMAIN__',
    clientId: '__IAM_CLIENT_ID__',
    namespace: '__NAMESPACE__',
    redirectURI: '__IAM_CLIENT_REDIRECT_URI__'
  }
})

FriendsApi(sdk, { axiosConfig: { request: { headers: { Authorization: 'Bearer {access_token}' } } } })
  .getFriendsMeOutgoing( queryParams?: {
             limit?: number,
             offset?: number
    })

// return Promise<GetUserOutgoingFriendsResponseArray>
```

## POST /friends/namespaces/{namespace}/me/unfriend

```
import { AccelByte } from '@accelbyte/sdk'
import { FriendsApi } from '@accelbyte/sdk-lobby'

const sdk = AccelByte.SDK({
  coreConfig: {
    baseURL: '__AGS_DOMAIN__',
    clientId: '__IAM_CLIENT_ID__',
    namespace: '__NAMESPACE__',
    redirectURI: '__IAM_CLIENT_REDIRECT_URI__'
  }
})

FriendsApi(sdk, { axiosConfig: { request: { headers: { Authorization: 'Bearer {access_token}' } } } })
  .createFriendMeUnfriend(data: {
             UserUnfriendRequest
    })

// return Promise
```

## PATCH /lobby/sync/namespaces/{namespace}/me/block

```
import { AccelByte } from '@accelbyte/sdk'
import { BlocksApi } from '@accelbyte/sdk-lobby'

const sdk = AccelByte.SDK({
  coreConfig: {
    baseURL: '__AGS_DOMAIN__',
    clientId: '__IAM_CLIENT_ID__',
    namespace: '__NAMESPACE__',
    redirectURI: '__IAM_CLIENT_REDIRECT_URI__'
  }
})

BlocksApi(sdk, { axiosConfig: { request: { headers: { Authorization: 'Bearer {access_token}' } } } })
  .patchSyncMeBlock(data: {
             NativeUserBlockRequest[]
    })

// return Promise<NativeUserBlockResponseArray>
```

## GET /notification/namespaces/{namespace}/topics

```
import { AccelByte } from '@accelbyte/sdk'
import { NotificationApi } from '@accelbyte/sdk-lobby'

const sdk = AccelByte.SDK({
  coreConfig: {
    baseURL: '__AGS_DOMAIN__',
    clientId: '__IAM_CLIENT_ID__',
    namespace: '__NAMESPACE__',
    redirectURI: '__IAM_CLIENT_REDIRECT_URI__'
  }
})

NotificationApi(sdk, { axiosConfig: { request: { headers: { Authorization: 'Bearer {access_token}' } } } })
  .getNotificationTopics( queryParams?: {
             after?: string | null,
             before?: string | null,
             limit?: number
    })

// return Promise<TopicByNamespacesResponse>
```

## POST /notification/namespaces/{namespace}/topics

```
import { AccelByte } from '@accelbyte/sdk'
import { NotificationApi } from '@accelbyte/sdk-lobby'

const sdk = AccelByte.SDK({
  coreConfig: {
    baseURL: '__AGS_DOMAIN__',
    clientId: '__IAM_CLIENT_ID__',
    namespace: '__NAMESPACE__',
    redirectURI: '__IAM_CLIENT_REDIRECT_URI__'
  }
})

NotificationApi(sdk, { axiosConfig: { request: { headers: { Authorization: 'Bearer {access_token}' } } } })
  .createNotificationTopic(data: {
             CreateTopicRequest
    })

// return Promise
```

## GET /friends/namespaces/{namespace}/me/platforms

```
import { AccelByte } from '@accelbyte/sdk'
import { FriendsApi } from '@accelbyte/sdk-lobby'

const sdk = AccelByte.SDK({
  coreConfig: {
    baseURL: '__AGS_DOMAIN__',
    clientId: '__IAM_CLIENT_ID__',
    namespace: '__NAMESPACE__',
    redirectURI: '__IAM_CLIENT_REDIRECT_URI__'
  }
})

FriendsApi(sdk, { axiosConfig: { request: { headers: { Authorization: 'Bearer {access_token}' } } } })
  .getFriendsMePlatforms( queryParams?: {
             limit?: number,
             offset?: number
    })

// return Promise<ListBulkUserPlatformsResponse>
```

## POST /notification/namespaces/{namespace}/freeform

```
import { AccelByte } from '@accelbyte/sdk'
import { AdminApi } from '@accelbyte/sdk-lobby'

const sdk = AccelByte.SDK({
  coreConfig: {
    baseURL: '__AGS_DOMAIN__',
    clientId: '__IAM_CLIENT_ID__',
    namespace: '__NAMESPACE__',
    redirectURI: '__IAM_CLIENT_REDIRECT_URI__'
  }
})

AdminApi(sdk, { axiosConfig: { request: { headers: { Authorization: 'Bearer {access_token}' } } } })
  .createNotificationFreeform(data: {
             FreeFormNotificationRequest
    })

// return Promise
```

## POST /notification/namespaces/{namespace}/templated

```
import { AccelByte } from '@accelbyte/sdk'
import { AdminApi } from '@accelbyte/sdk-lobby'

const sdk = AccelByte.SDK({
  coreConfig: {
    baseURL: '__AGS_DOMAIN__',
    clientId: '__IAM_CLIENT_ID__',
    namespace: '__NAMESPACE__',
    redirectURI: '__IAM_CLIENT_REDIRECT_URI__'
  }
})

AdminApi(sdk, { axiosConfig: { request: { headers: { Authorization: 'Bearer {access_token}' } } } })
  .createNotificationTemplated(data: {
             NotificationWithTemplateRequest
    })

// return Promise
```

## GET /notification/namespaces/{namespace}/templates

```
import { AccelByte } from '@accelbyte/sdk'
import { AdminApi } from '@accelbyte/sdk-lobby'

const sdk = AccelByte.SDK({
  coreConfig: {
    baseURL: '__AGS_DOMAIN__',
    clientId: '__IAM_CLIENT_ID__',
    namespace: '__NAMESPACE__',
    redirectURI: '__IAM_CLIENT_REDIRECT_URI__'
  }
})

AdminApi(sdk, { axiosConfig: { request: { headers: { Authorization: 'Bearer {access_token}' } } } })
  .getNotificationTemplates()

// return Promise<TemplateResponseArray>
```

## POST /notification/namespaces/{namespace}/templates

```
import { AccelByte } from '@accelbyte/sdk'
import { AdminApi } from '@accelbyte/sdk-lobby'

const sdk = AccelByte.SDK({
  coreConfig: {
    baseURL: '__AGS_DOMAIN__',
    clientId: '__IAM_CLIENT_ID__',
    namespace: '__NAMESPACE__',
    redirectURI: '__IAM_CLIENT_REDIRECT_URI__'
  }
})

AdminApi(sdk, { axiosConfig: { request: { headers: { Authorization: 'Bearer {access_token}' } } } })
  .createNotificationTemplate(data: {
             CreateTemplateRequest
    })

// return Promise
```

## GET /friends/namespaces/{namespace}/me/incoming-time

```
import { AccelByte } from '@accelbyte/sdk'
import { FriendsApi } from '@accelbyte/sdk-lobby'

const sdk = AccelByte.SDK({
  coreConfig: {
    baseURL: '__AGS_DOMAIN__',
    clientId: '__IAM_CLIENT_ID__',
    namespace: '__NAMESPACE__',
    redirectURI: '__IAM_CLIENT_REDIRECT_URI__'
  }
})

FriendsApi(sdk, { axiosConfig: { request: { headers: { Authorization: 'Bearer {access_token}' } } } })
  .getFriendsMeIncomingTime( queryParams?: {
             limit?: number,
             offset?: number
    })

// return Promise<LoadIncomingFriendsWithTimeResponseArray>
```

## GET /friends/namespaces/{namespace}/me/outgoing-time

```
import { AccelByte } from '@accelbyte/sdk'
import { FriendsApi } from '@accelbyte/sdk-lobby'

const sdk = AccelByte.SDK({
  coreConfig: {
    baseURL: '__AGS_DOMAIN__',
    clientId: '__IAM_CLIENT_ID__',
    namespace: '__NAMESPACE__',
    redirectURI: '__IAM_CLIENT_REDIRECT_URI__'
  }
})

FriendsApi(sdk, { axiosConfig: { request: { headers: { Authorization: 'Bearer {access_token}' } } } })
  .getFriendsMeOutgoingTime( queryParams?: {
             limit?: number,
             offset?: number
    })

// return Promise<LoadOutgoingFriendsWithTimeResponseArray>
```

## POST /friends/namespaces/{namespace}/me/request/accept

```
import { AccelByte } from '@accelbyte/sdk'
import { FriendsApi } from '@accelbyte/sdk-lobby'

const sdk = AccelByte.SDK({
  coreConfig: {
    baseURL: '__AGS_DOMAIN__',
    clientId: '__IAM_CLIENT_ID__',
    namespace: '__NAMESPACE__',
    redirectURI: '__IAM_CLIENT_REDIRECT_URI__'
  }
})

FriendsApi(sdk, { axiosConfig: { request: { headers: { Authorization: 'Bearer {access_token}' } } } })
  .createFriendMeRequestAccept(data: {
             UserAcceptFriendRequest
    })

// return Promise
```

## POST /friends/namespaces/{namespace}/me/request/cancel

```
import { AccelByte } from '@accelbyte/sdk'
import { FriendsApi } from '@accelbyte/sdk-lobby'

const sdk = AccelByte.SDK({
  coreConfig: {
    baseURL: '__AGS_DOMAIN__',
    clientId: '__IAM_CLIENT_ID__',
    namespace: '__NAMESPACE__',
    redirectURI: '__IAM_CLIENT_REDIRECT_URI__'
  }
})

FriendsApi(sdk, { axiosConfig: { request: { headers: { Authorization: 'Bearer {access_token}' } } } })
  .createFriendMeRequestCancel(data: {
             UserCancelFriendRequest
    })

// return Promise
```

## POST /friends/namespaces/{namespace}/me/request/reject

```
import { AccelByte } from '@accelbyte/sdk'
import { FriendsApi } from '@accelbyte/sdk-lobby'

const sdk = AccelByte.SDK({
  coreConfig: {
    baseURL: '__AGS_DOMAIN__',
    clientId: '__IAM_CLIENT_ID__',
    namespace: '__NAMESPACE__',
    redirectURI: '__IAM_CLIENT_REDIRECT_URI__'
  }
})

FriendsApi(sdk, { axiosConfig: { request: { headers: { Authorization: 'Bearer {access_token}' } } } })
  .createFriendMeRequestReject(data: {
             UserRejectFriendRequest
    })

// return Promise
```

## DELETE /notification/namespaces/{namespace}/topics/{topic}

```
import { AccelByte } from '@accelbyte/sdk'
import { NotificationApi } from '@accelbyte/sdk-lobby'

const sdk = AccelByte.SDK({
  coreConfig: {
    baseURL: '__AGS_DOMAIN__',
    clientId: '__IAM_CLIENT_ID__',
    namespace: '__NAMESPACE__',
    redirectURI: '__IAM_CLIENT_REDIRECT_URI__'
  }
})

NotificationApi(sdk, { axiosConfig: { request: { headers: { Authorization: 'Bearer {access_token}' } } } })
  .deleteNotificationTopic_ByTopic(topic:string)

// return Promise
```

## GET /notification/namespaces/{namespace}/topics/{topic}

```
import { AccelByte } from '@accelbyte/sdk'
import { NotificationApi } from '@accelbyte/sdk-lobby'

const sdk = AccelByte.SDK({
  coreConfig: {
    baseURL: '__AGS_DOMAIN__',
    clientId: '__IAM_CLIENT_ID__',
    namespace: '__NAMESPACE__',
    redirectURI: '__IAM_CLIENT_REDIRECT_URI__'
  }
})

NotificationApi(sdk, { axiosConfig: { request: { headers: { Authorization: 'Bearer {access_token}' } } } })
  .getNotificationTopic_ByTopic(topic:string)

// return Promise<NotificationTopicResponse>
```

## PUT /notification/namespaces/{namespace}/topics/{topic}

```
import { AccelByte } from '@accelbyte/sdk'
import { NotificationApi } from '@accelbyte/sdk-lobby'

const sdk = AccelByte.SDK({
  coreConfig: {
    baseURL: '__AGS_DOMAIN__',
    clientId: '__IAM_CLIENT_ID__',
    namespace: '__NAMESPACE__',
    redirectURI: '__IAM_CLIENT_REDIRECT_URI__'
  }
})

NotificationApi(sdk, { axiosConfig: { request: { headers: { Authorization: 'Bearer {access_token}' } } } })
  .updateNotificationTopic_ByTopic(topic:string, data: {
             UpdateTopicRequest
    })

// return Promise
```

## GET /friends/namespaces/{namespace}/me/status/{friendId}

```
import { AccelByte } from '@accelbyte/sdk'
import { FriendsApi } from '@accelbyte/sdk-lobby'

const sdk = AccelByte.SDK({
  coreConfig: {
    baseURL: '__AGS_DOMAIN__',
    clientId: '__IAM_CLIENT_ID__',
    namespace: '__NAMESPACE__',
    redirectURI: '__IAM_CLIENT_REDIRECT_URI__'
  }
})

FriendsApi(sdk, { axiosConfig: { request: { headers: { Authorization: 'Bearer {access_token}' } } } })
  .getFriendMeStatu_ByFriendId(friendId:string)

// return Promise<UserGetFriendshipStatusResponse>
```

## POST /friends/namespaces/{namespace}/users/{userId}/add/bulk

```
import { AccelByte } from '@accelbyte/sdk'
import { FriendsApi } from '@accelbyte/sdk-lobby'

const sdk = AccelByte.SDK({
  coreConfig: {
    baseURL: '__AGS_DOMAIN__',
    clientId: '__IAM_CLIENT_ID__',
    namespace: '__NAMESPACE__',
    redirectURI: '__IAM_CLIENT_REDIRECT_URI__'
  }
})

FriendsApi(sdk, { axiosConfig: { request: { headers: { Authorization: 'Bearer {access_token}' } } } })
  .createAddBulkFriend_ByUserId(userId:string, data: {
             BulkFriendsRequest
    })

// return Promise
```

## POST /friends/namespaces/{namespace}/users/{userId}/delete/bulk

```
import { AccelByte } from '@accelbyte/sdk'
import { FriendsApi } from '@accelbyte/sdk-lobby'

const sdk = AccelByte.SDK({
  coreConfig: {
    baseURL: '__AGS_DOMAIN__',
    clientId: '__IAM_CLIENT_ID__',
    namespace: '__NAMESPACE__',
    redirectURI: '__IAM_CLIENT_REDIRECT_URI__'
  }
})

FriendsApi(sdk, { axiosConfig: { request: { headers: { Authorization: 'Bearer {access_token}' } } } })
  .createDeleteBulkFriend_ByUserId(userId:string, data: {
             BulkFriendsRequest
    })

// return Promise<BulkFriendsResponse>
```

## POST /notification/namespaces/{namespace}/users/{userId}/freeform

```
import { AccelByte } from '@accelbyte/sdk'
import { NotificationApi } from '@accelbyte/sdk-lobby'

const sdk = AccelByte.SDK({
  coreConfig: {
    baseURL: '__AGS_DOMAIN__',
    clientId: '__IAM_CLIENT_ID__',
    namespace: '__NAMESPACE__',
    redirectURI: '__IAM_CLIENT_REDIRECT_URI__'
  }
})

NotificationApi(sdk, { axiosConfig: { request: { headers: { Authorization: 'Bearer {access_token}' } } } })
  .createFreeformNotification_ByUserId(userId:string, data: {
             FreeFormNotificationRequest
    })

// return Promise
```

## POST /lobby/v1/public/player/namespaces/{namespace}/users/me/block

```
import { AccelByte } from '@accelbyte/sdk'
import { PlayerApi } from '@accelbyte/sdk-lobby'

const sdk = AccelByte.SDK({
  coreConfig: {
    baseURL: '__AGS_DOMAIN__',
    clientId: '__IAM_CLIENT_ID__',
    namespace: '__NAMESPACE__',
    redirectURI: '__IAM_CLIENT_REDIRECT_URI__'
  }
})

PlayerApi(sdk, { axiosConfig: { request: { headers: { Authorization: 'Bearer {access_token}' } } } })
  .createPlayerUserMeBlock(data: {
             BlockPlayerRequest
    })

// return Promise
```

## DELETE /notification/namespaces/{namespace}/templates/{templateSlug}

```
import { AccelByte } from '@accelbyte/sdk'
import { AdminApi } from '@accelbyte/sdk-lobby'

const sdk = AccelByte.SDK({
  coreConfig: {
    baseURL: '__AGS_DOMAIN__',
    clientId: '__IAM_CLIENT_ID__',
    namespace: '__NAMESPACE__',
    redirectURI: '__IAM_CLIENT_REDIRECT_URI__'
  }
})

AdminApi(sdk, { axiosConfig: { request: { headers: { Authorization: 'Bearer {access_token}' } } } })
  .deleteNotificationTemplate_ByTemplateSlug(templateSlug:string)

// return Promise
```

## GET /notification/namespaces/{namespace}/templates/{templateSlug}

```
import { AccelByte } from '@accelbyte/sdk'
import { AdminApi } from '@accelbyte/sdk-lobby'

const sdk = AccelByte.SDK({
  coreConfig: {
    baseURL: '__AGS_DOMAIN__',
    clientId: '__IAM_CLIENT_ID__',
    namespace: '__NAMESPACE__',
    redirectURI: '__IAM_CLIENT_REDIRECT_URI__'
  }
})

AdminApi(sdk, { axiosConfig: { request: { headers: { Authorization: 'Bearer {access_token}' } } } })
  .getNotificationTemplate_ByTemplateSlug(templateSlug:string,  queryParams?: {
             after?: string | null,
             before?: string | null,
             limit?: number
    })

// return Promise<TemplateLocalizationResponse>
```

## POST /notification/namespaces/{namespace}/users/{userId}/templated

```
import { AccelByte } from '@accelbyte/sdk'
import { NotificationApi } from '@accelbyte/sdk-lobby'

const sdk = AccelByte.SDK({
  coreConfig: {
    baseURL: '__AGS_DOMAIN__',
    clientId: '__IAM_CLIENT_ID__',
    namespace: '__NAMESPACE__',
    redirectURI: '__IAM_CLIENT_REDIRECT_URI__'
  }
})

NotificationApi(sdk, { axiosConfig: { request: { headers: { Authorization: 'Bearer {access_token}' } } } })
  .createTemplatedNotification_ByUserId(userId:string, data: {
             NotificationWithTemplateRequest
    })

// return Promise
```

## GET /lobby/v1/public/party/namespaces/{namespace}/parties/{partyId}

```
import { AccelByte } from '@accelbyte/sdk'
import { PartyApi } from '@accelbyte/sdk-lobby'

const sdk = AccelByte.SDK({
  coreConfig: {
    baseURL: '__AGS_DOMAIN__',
    clientId: '__IAM_CLIENT_ID__',
    namespace: '__NAMESPACE__',
    redirectURI: '__IAM_CLIENT_REDIRECT_URI__'
  }
})

PartyApi(sdk, { axiosConfig: { request: { headers: { Authorization: 'Bearer {access_token}' } } } })
  .getPartyParty_ByPartyId(partyId:string)

// return Promise<PartyData>
```

## GET /lobby/v1/public/player/namespaces/{namespace}/users/me/blocked

```
import { AccelByte } from '@accelbyte/sdk'
import { PlayerApi } from '@accelbyte/sdk-lobby'

const sdk = AccelByte.SDK({
  coreConfig: {
    baseURL: '__AGS_DOMAIN__',
    clientId: '__IAM_CLIENT_ID__',
    namespace: '__NAMESPACE__',
    redirectURI: '__IAM_CLIENT_REDIRECT_URI__'
  }
})

PlayerApi(sdk, { axiosConfig: { request: { headers: { Authorization: 'Bearer {access_token}' } } } })
  .getPlayerUsersMeBlocked()

// return Promise<GetAllPlayerBlockedUsersResponse>
```

## POST /lobby/v1/public/player/namespaces/{namespace}/users/me/unblock

```
import { AccelByte } from '@accelbyte/sdk'
import { PlayerApi } from '@accelbyte/sdk-lobby'

const sdk = AccelByte.SDK({
  coreConfig: {
    baseURL: '__AGS_DOMAIN__',
    clientId: '__IAM_CLIENT_ID__',
    namespace: '__NAMESPACE__',
    redirectURI: '__IAM_CLIENT_REDIRECT_URI__'
  }
})

PlayerApi(sdk, { axiosConfig: { request: { headers: { Authorization: 'Bearer {access_token}' } } } })
  .createPlayerUserMeUnblock(data: {
             UnblockPlayerRequest
    })

// return Promise
```

## GET /lobby/v1/public/presence/namespaces/{namespace}/users/presence

```
import { AccelByte } from '@accelbyte/sdk'
import { PresenceApi } from '@accelbyte/sdk-lobby'

const sdk = AccelByte.SDK({
  coreConfig: {
    baseURL: '__AGS_DOMAIN__',
    clientId: '__IAM_CLIENT_ID__',
    namespace: '__NAMESPACE__',
    redirectURI: '__IAM_CLIENT_REDIRECT_URI__'
  }
})

PresenceApi(sdk, { axiosConfig: { request: { headers: { Authorization: 'Bearer {access_token}' } } } })
  .getPresenceUsersPresence( queryParams: {
             userIds: string | null,
             countOnly?: boolean | null
    })

// return Promise<GetUsersPresenceResponse>
```

## POST /lobby/v1/public/presence/namespaces/{namespace}/users/presence

```
import { AccelByte } from '@accelbyte/sdk'
import { PresenceApi } from '@accelbyte/sdk-lobby'

const sdk = AccelByte.SDK({
  coreConfig: {
    baseURL: '__AGS_DOMAIN__',
    clientId: '__IAM_CLIENT_ID__',
    namespace: '__NAMESPACE__',
    redirectURI: '__IAM_CLIENT_REDIRECT_URI__'
  }
})

PresenceApi(sdk, { axiosConfig: { request: { headers: { Authorization: 'Bearer {access_token}' } } } })
  .createPresenceUserPresence(data: {
             RequestUserPresence,
             queryParams?: {
             countOnly?: boolean | null
    })

// return Promise<GetUsersPresenceResponse>
```

## GET /lobby/v1/public/player/namespaces/{namespace}/users/me/blocked-by

```
import { AccelByte } from '@accelbyte/sdk'
import { PlayerApi } from '@accelbyte/sdk-lobby'

const sdk = AccelByte.SDK({
  coreConfig: {
    baseURL: '__AGS_DOMAIN__',
    clientId: '__IAM_CLIENT_ID__',
    namespace: '__NAMESPACE__',
    redirectURI: '__IAM_CLIENT_REDIRECT_URI__'
  }
})

PlayerApi(sdk, { axiosConfig: { request: { headers: { Authorization: 'Bearer {access_token}' } } } })
  .getPlayerUsersMeBlockedBy()

// return Promise<GetAllPlayerBlockedByUsersResponse>
```

## PUT /lobby/v1/public/party/namespaces/{namespace}/parties/{partyId}/limit

```
import { AccelByte } from '@accelbyte/sdk'
import { PartyApi } from '@accelbyte/sdk-lobby'

const sdk = AccelByte.SDK({
  coreConfig: {
    baseURL: '__AGS_DOMAIN__',
    clientId: '__IAM_CLIENT_ID__',
    namespace: '__NAMESPACE__',
    redirectURI: '__IAM_CLIENT_REDIRECT_URI__'
  }
})

PartyApi(sdk, { axiosConfig: { request: { headers: { Authorization: 'Bearer {access_token}' } } } })
  .updateLimitParty_ByPartyId(partyId:string, data: {
             PartyPutLimitSizeRequest
    })

// return Promise
```

## PUT /lobby/v1/public/party/namespaces/{namespace}/parties/{partyId}/attributes

```
import { AccelByte } from '@accelbyte/sdk'
import { PartyApi } from '@accelbyte/sdk-lobby'

const sdk = AccelByte.SDK({
  coreConfig: {
    baseURL: '__AGS_DOMAIN__',
    clientId: '__IAM_CLIENT_ID__',
    namespace: '__NAMESPACE__',
    redirectURI: '__IAM_CLIENT_REDIRECT_URI__'
  }
})

PartyApi(sdk, { axiosConfig: { request: { headers: { Authorization: 'Bearer {access_token}' } } } })
  .updateAttributeParty_ByPartyId(partyId:string, data: {
             PartyPutCustomAttributesRequest
    })

// return Promise<PartyData>
```

## DELETE /notification/namespaces/{namespace}/templates/{templateSlug}/languages/{templateLanguage}

```
import { AccelByte } from '@accelbyte/sdk'
import { AdminApi } from '@accelbyte/sdk-lobby'

const sdk = AccelByte.SDK({
  coreConfig: {
    baseURL: '__AGS_DOMAIN__',
    clientId: '__IAM_CLIENT_ID__',
    namespace: '__NAMESPACE__',
    redirectURI: '__IAM_CLIENT_REDIRECT_URI__'
  }
})

AdminApi(sdk, { axiosConfig: { request: { headers: { Authorization: 'Bearer {access_token}' } } } })
  .deleteLanguageNotification_ByTemplateSlug_ByTemplateLanguage(templateSlug:string, templateLanguage:string)

// return Promise
```

## GET /notification/namespaces/{namespace}/templates/{templateSlug}/languages/{templateLanguage}

```
import { AccelByte } from '@accelbyte/sdk'
import { AdminApi } from '@accelbyte/sdk-lobby'

const sdk = AccelByte.SDK({
  coreConfig: {
    baseURL: '__AGS_DOMAIN__',
    clientId: '__IAM_CLIENT_ID__',
    namespace: '__NAMESPACE__',
    redirectURI: '__IAM_CLIENT_REDIRECT_URI__'
  }
})

AdminApi(sdk, { axiosConfig: { request: { headers: { Authorization: 'Bearer {access_token}' } } } })
  .getLanguageNotification_ByTemplateSlug_ByTemplateLanguage(templateSlug:string, templateLanguage:string)

// return Promise<TemplateLocalization>
```

## PUT /notification/namespaces/{namespace}/templates/{templateSlug}/languages/{templateLanguage}

```
import { AccelByte } from '@accelbyte/sdk'
import { AdminApi } from '@accelbyte/sdk-lobby'

const sdk = AccelByte.SDK({
  coreConfig: {
    baseURL: '__AGS_DOMAIN__',
    clientId: '__IAM_CLIENT_ID__',
    namespace: '__NAMESPACE__',
    redirectURI: '__IAM_CLIENT_REDIRECT_URI__'
  }
})

AdminApi(sdk, { axiosConfig: { request: { headers: { Authorization: 'Bearer {access_token}' } } } })
  .updateLanguageNotification_ByTemplateSlug_ByTemplateLanguage(templateSlug:string, templateLanguage:string, data: {
             UpdateTemplateRequest
    })

// return Promise
```

## POST /notification/namespaces/{namespace}/templates/{templateSlug}/languages/{templateLanguage}/publish

```
import { AccelByte } from '@accelbyte/sdk'
import { AdminApi } from '@accelbyte/sdk-lobby'

const sdk = AccelByte.SDK({
  coreConfig: {
    baseURL: '__AGS_DOMAIN__',
    clientId: '__IAM_CLIENT_ID__',
    namespace: '__NAMESPACE__',
    redirectURI: '__IAM_CLIENT_REDIRECT_URI__'
  }
})

AdminApi(sdk, { axiosConfig: { request: { headers: { Authorization: 'Bearer {access_token}' } } } })
  .createPublishNotification_ByTemplateSlug_ByTemplateLanguage(templateSlug:string, templateLanguage:string)

// return Promise
```

## GET /lobby/v1/admin/config

```
import { AccelByte } from '@accelbyte/sdk'
import { ConfigAdminApi } from '@accelbyte/sdk-lobby'

const sdk = AccelByte.SDK({
  coreConfig: {
    baseURL: '__AGS_DOMAIN__',
    clientId: '__IAM_CLIENT_ID__',
    namespace: '__NAMESPACE__',
    redirectURI: '__IAM_CLIENT_REDIRECT_URI__'
  }
})

ConfigAdminApi(sdk, { axiosConfig: { request: { headers: { Authorization: 'Bearer {access_token}' } } } })
  .getConfig()

// return Promise<ConfigList>
```

## GET /lobby/v1/admin/config/log

```
import { AccelByte } from '@accelbyte/sdk'
import { ConfigAdminApi } from '@accelbyte/sdk-lobby'

const sdk = AccelByte.SDK({
  coreConfig: {
    baseURL: '__AGS_DOMAIN__',
    clientId: '__IAM_CLIENT_ID__',
    namespace: '__NAMESPACE__',
    redirectURI: '__IAM_CLIENT_REDIRECT_URI__'
  }
})

ConfigAdminApi(sdk, { axiosConfig: { request: { headers: { Authorization: 'Bearer {access_token}' } } } })
  .getConfigLog()

// return Promise<Configuration>
```

## PATCH /lobby/v1/admin/config/log

```
import { AccelByte } from '@accelbyte/sdk'
import { ConfigAdminApi } from '@accelbyte/sdk-lobby'

const sdk = AccelByte.SDK({
  coreConfig: {
    baseURL: '__AGS_DOMAIN__',
    clientId: '__IAM_CLIENT_ID__',
    namespace: '__NAMESPACE__',
    redirectURI: '__IAM_CLIENT_REDIRECT_URI__'
  }
})

ConfigAdminApi(sdk, { axiosConfig: { request: { headers: { Authorization: 'Bearer {access_token}' } } } })
  .patchConfigLog(data: {
             Configuration
    })

// return Promise<Configuration>
```

## DELETE /lobby/v1/admin/global-configurations

```
import { AccelByte } from '@accelbyte/sdk'
import { AdminAdminApi } from '@accelbyte/sdk-lobby'

const sdk = AccelByte.SDK({
  coreConfig: {
    baseURL: '__AGS_DOMAIN__',
    clientId: '__IAM_CLIENT_ID__',
    namespace: '__NAMESPACE__',
    redirectURI: '__IAM_CLIENT_REDIRECT_URI__'
  }
})

AdminAdminApi(sdk, { axiosConfig: { request: { headers: { Authorization: 'Bearer {access_token}' } } } })
  .deleteGlobalConfiguration()

// return Promise
```

## GET /lobby/v1/admin/global-configurations

```
import { AccelByte } from '@accelbyte/sdk'
import { AdminAdminApi } from '@accelbyte/sdk-lobby'

const sdk = AccelByte.SDK({
  coreConfig: {
    baseURL: '__AGS_DOMAIN__',
    clientId: '__IAM_CLIENT_ID__',
    namespace: '__NAMESPACE__',
    redirectURI: '__IAM_CLIENT_REDIRECT_URI__'
  }
})

AdminAdminApi(sdk, { axiosConfig: { request: { headers: { Authorization: 'Bearer {access_token}' } } } })
  .getGlobalConfigurations()

// return Promise<GlobalConfiguration>
```

## PUT /lobby/v1/admin/global-configurations

```
import { AccelByte } from '@accelbyte/sdk'
import { AdminAdminApi } from '@accelbyte/sdk-lobby'

const sdk = AccelByte.SDK({
  coreConfig: {
    baseURL: '__AGS_DOMAIN__',
    clientId: '__IAM_CLIENT_ID__',
    namespace: '__NAMESPACE__',
    redirectURI: '__IAM_CLIENT_REDIRECT_URI__'
  }
})

AdminAdminApi(sdk, { axiosConfig: { request: { headers: { Authorization: 'Bearer {access_token}' } } } })
  .updateGlobalConfiguration(data: {
             PutGlobalConfigurationRequest
    })

// return Promise<GlobalConfiguration>
```

## GET /lobby/v1/admin/config/namespaces/{namespace}

```
import { AccelByte } from '@accelbyte/sdk'
import { ConfigAdminApi } from '@accelbyte/sdk-lobby'

const sdk = AccelByte.SDK({
  coreConfig: {
    baseURL: '__AGS_DOMAIN__',
    clientId: '__IAM_CLIENT_ID__',
    namespace: '__NAMESPACE__',
    redirectURI: '__IAM_CLIENT_REDIRECT_URI__'
  }
})

ConfigAdminApi(sdk, { axiosConfig: { request: { headers: { Authorization: 'Bearer {access_token}' } } } })
  .getConfig_ByNamespace()

// return Promise<ConfigReq>
```

## PUT /lobby/v1/admin/config/namespaces/{namespace}

```
import { AccelByte } from '@accelbyte/sdk'
import { ConfigAdminApi } from '@accelbyte/sdk-lobby'

const sdk = AccelByte.SDK({
  coreConfig: {
    baseURL: '__AGS_DOMAIN__',
    clientId: '__IAM_CLIENT_ID__',
    namespace: '__NAMESPACE__',
    redirectURI: '__IAM_CLIENT_REDIRECT_URI__'
  }
})

ConfigAdminApi(sdk, { axiosConfig: { request: { headers: { Authorization: 'Bearer {access_token}' } } } })
  .updateConfig_ByNamespace(data: {
             ConfigReq
    })

// return Promise<ConfigReq>
```

## GET /lobby/v1/admin/player/namespaces/{namespace}/ccu

```
import { AccelByte } from '@accelbyte/sdk'
import { PlayerAdminApi } from '@accelbyte/sdk-lobby'

const sdk = AccelByte.SDK({
  coreConfig: {
    baseURL: '__AGS_DOMAIN__',
    clientId: '__IAM_CLIENT_ID__',
    namespace: '__NAMESPACE__',
    redirectURI: '__IAM_CLIENT_REDIRECT_URI__'
  }
})

PlayerAdminApi(sdk, { axiosConfig: { request: { headers: { Authorization: 'Bearer {access_token}' } } } })
  .getPlayerCcu()

// return Promise<GetLobbyCcuResponse>
```

## GET /lobby/v1/admin/config/namespaces/{namespace}/export

```
import { AccelByte } from '@accelbyte/sdk'
import { ConfigAdminApi } from '@accelbyte/sdk-lobby'

const sdk = AccelByte.SDK({
  coreConfig: {
    baseURL: '__AGS_DOMAIN__',
    clientId: '__IAM_CLIENT_ID__',
    namespace: '__NAMESPACE__',
    redirectURI: '__IAM_CLIENT_REDIRECT_URI__'
  }
})

ConfigAdminApi(sdk, { axiosConfig: { request: { headers: { Authorization: 'Bearer {access_token}' } } } })
  .getConfigExport()

// return Promise
```

## POST /lobby/v1/admin/config/namespaces/{namespace}/import

```
import { AccelByte } from '@accelbyte/sdk'
import { ConfigAdminApi } from '@accelbyte/sdk-lobby'

const sdk = AccelByte.SDK({
  coreConfig: {
    baseURL: '__AGS_DOMAIN__',
    clientId: '__IAM_CLIENT_ID__',
    namespace: '__NAMESPACE__',
    redirectURI: '__IAM_CLIENT_REDIRECT_URI__'
  }
})

ConfigAdminApi(sdk, { axiosConfig: { request: { headers: { Authorization: 'Bearer {access_token}' } } } })
  .updateConfigImport(data: {
             file?: File
    })

// return Promise<ImportConfigResponse>
```

## GET /lobby/v1/admin/profanity/namespaces/{namespace}/rule

```
import { AccelByte } from '@accelbyte/sdk'
import { ProfanityAdminApi } from '@accelbyte/sdk-lobby'

const sdk = AccelByte.SDK({
  coreConfig: {
    baseURL: '__AGS_DOMAIN__',
    clientId: '__IAM_CLIENT_ID__',
    namespace: '__NAMESPACE__',
    redirectURI: '__IAM_CLIENT_REDIRECT_URI__'
  }
})

ProfanityAdminApi(sdk, { axiosConfig: { request: { headers: { Authorization: 'Bearer {access_token}' } } } })
  .getProfanityRule()

// return Promise<ProfanityRule>
```

## POST /lobby/v1/admin/profanity/namespaces/{namespace}/rule

```
import { AccelByte } from '@accelbyte/sdk'
import { ProfanityAdminApi } from '@accelbyte/sdk-lobby'

const sdk = AccelByte.SDK({
  coreConfig: {
    baseURL: '__AGS_DOMAIN__',
    clientId: '__IAM_CLIENT_ID__',
    namespace: '__NAMESPACE__',
    redirectURI: '__IAM_CLIENT_REDIRECT_URI__'
  }
})

ProfanityAdminApi(sdk, { axiosConfig: { request: { headers: { Authorization: 'Bearer {access_token}' } } } })
  .updateProfanityRule(data: {
             AdminSetProfanityRuleForNamespaceRequest
    })

// return Promise
```

## GET /lobby/v1/admin/profanity/namespaces/{namespace}/lists

```
import { AccelByte } from '@accelbyte/sdk'
import { ProfanityAdminApi } from '@accelbyte/sdk-lobby'

const sdk = AccelByte.SDK({
  coreConfig: {
    baseURL: '__AGS_DOMAIN__',
    clientId: '__IAM_CLIENT_ID__',
    namespace: '__NAMESPACE__',
    redirectURI: '__IAM_CLIENT_REDIRECT_URI__'
  }
})

ProfanityAdminApi(sdk, { axiosConfig: { request: { headers: { Authorization: 'Bearer {access_token}' } } } })
  .getProfanityLists()

// return Promise<AdminGetProfanityListsListResponseArray>
```

## POST /lobby/v1/admin/profanity/namespaces/{namespace}/lists

```
import { AccelByte } from '@accelbyte/sdk'
import { ProfanityAdminApi } from '@accelbyte/sdk-lobby'

const sdk = AccelByte.SDK({
  coreConfig: {
    baseURL: '__AGS_DOMAIN__',
    clientId: '__IAM_CLIENT_ID__',
    namespace: '__NAMESPACE__',
    redirectURI: '__IAM_CLIENT_REDIRECT_URI__'
  }
})

ProfanityAdminApi(sdk, { axiosConfig: { request: { headers: { Authorization: 'Bearer {access_token}' } } } })
  .createProfanityList(data: {
             AdminCreateProfanityListRequest
    })

// return Promise
```

## POST /lobby/v1/admin/profanity/namespaces/{namespace}/verify

```
import { AccelByte } from '@accelbyte/sdk'
import { ProfanityAdminApi } from '@accelbyte/sdk-lobby'

const sdk = AccelByte.SDK({
  coreConfig: {
    baseURL: '__AGS_DOMAIN__',
    clientId: '__IAM_CLIENT_ID__',
    namespace: '__NAMESPACE__',
    redirectURI: '__IAM_CLIENT_REDIRECT_URI__'
  }
})

ProfanityAdminApi(sdk, { axiosConfig: { request: { headers: { Authorization: 'Bearer {access_token}' } } } })
  .fetchProfanityVerify(data: {
             AdminVerifyMessageProfanityRequest
    })

// return Promise<AdminVerifyMessageProfanityResponse>
```

## GET /lobby/v1/admin/notification/namespaces/{namespace}/topics

```
import { AccelByte } from '@accelbyte/sdk'
import { NotificationAdminApi } from '@accelbyte/sdk-lobby'

const sdk = AccelByte.SDK({
  coreConfig: {
    baseURL: '__AGS_DOMAIN__',
    clientId: '__IAM_CLIENT_ID__',
    namespace: '__NAMESPACE__',
    redirectURI: '__IAM_CLIENT_REDIRECT_URI__'
  }
})

NotificationAdminApi(sdk, { axiosConfig: { request: { headers: { Authorization: 'Bearer {access_token}' } } } })
  .getNotificationTopics( queryParams?: {
             after?: string | null,
             before?: string | null,
             limit?: number
    })

// return Promise<GetAllNotificationTopicsResponse>
```

## POST /lobby/v1/admin/notification/namespaces/{namespace}/topics

```
import { AccelByte } from '@accelbyte/sdk'
import { NotificationAdminApi } from '@accelbyte/sdk-lobby'

const sdk = AccelByte.SDK({
  coreConfig: {
    baseURL: '__AGS_DOMAIN__',
    clientId: '__IAM_CLIENT_ID__',
    namespace: '__NAMESPACE__',
    redirectURI: '__IAM_CLIENT_REDIRECT_URI__'
  }
})

NotificationAdminApi(sdk, { axiosConfig: { request: { headers: { Authorization: 'Bearer {access_token}' } } } })
  .createNotificationTopic(data: {
             CreateTopicRequestV1
    })

// return Promise
```

## GET /lobby/v1/admin/friend/namespaces/{namespace}/users/{userId}

```
import { AccelByte } from '@accelbyte/sdk'
import { FriendsAdminApi } from '@accelbyte/sdk-lobby'

const sdk = AccelByte.SDK({
  coreConfig: {
    baseURL: '__AGS_DOMAIN__',
    clientId: '__IAM_CLIENT_ID__',
    namespace: '__NAMESPACE__',
    redirectURI: '__IAM_CLIENT_REDIRECT_URI__'
  }
})

FriendsAdminApi(sdk, { axiosConfig: { request: { headers: { Authorization: 'Bearer {access_token}' } } } })
  .getFriendUser_ByUserId(userId:string,  queryParams?: {
             friendId?: string | null,
             friendIds?: string[],
             limit?: number,
             offset?: number
    })

// return Promise<GetFriendsResponse>
```

## GET /lobby/v1/admin/notification/namespaces/{namespace}/templates

```
import { AccelByte } from '@accelbyte/sdk'
import { NotificationAdminApi } from '@accelbyte/sdk-lobby'

const sdk = AccelByte.SDK({
  coreConfig: {
    baseURL: '__AGS_DOMAIN__',
    clientId: '__IAM_CLIENT_ID__',
    namespace: '__NAMESPACE__',
    redirectURI: '__IAM_CLIENT_REDIRECT_URI__'
  }
})

NotificationAdminApi(sdk, { axiosConfig: { request: { headers: { Authorization: 'Bearer {access_token}' } } } })
  .getNotificationTemplates()

// return Promise<NotificationTemplateResponseArray>
```

## POST /lobby/v1/admin/notification/namespaces/{namespace}/templates

```
import { AccelByte } from '@accelbyte/sdk'
import { NotificationAdminApi } from '@accelbyte/sdk-lobby'

const sdk = AccelByte.SDK({
  coreConfig: {
    baseURL: '__AGS_DOMAIN__',
    clientId: '__IAM_CLIENT_ID__',
    namespace: '__NAMESPACE__',
    redirectURI: '__IAM_CLIENT_REDIRECT_URI__'
  }
})

NotificationAdminApi(sdk, { axiosConfig: { request: { headers: { Authorization: 'Bearer {access_token}' } } } })
  .createNotificationTemplate(data: {
             CreateTemplateRequest
    })

// return Promise
```

## DELETE /lobby/v1/admin/profanity/namespaces/{namespace}/lists/{list}

```
import { AccelByte } from '@accelbyte/sdk'
import { ProfanityAdminApi } from '@accelbyte/sdk-lobby'

const sdk = AccelByte.SDK({
  coreConfig: {
    baseURL: '__AGS_DOMAIN__',
    clientId: '__IAM_CLIENT_ID__',
    namespace: '__NAMESPACE__',
    redirectURI: '__IAM_CLIENT_REDIRECT_URI__'
  }
})

ProfanityAdminApi(sdk, { axiosConfig: { request: { headers: { Authorization: 'Bearer {access_token}' } } } })
  .deleteProfanityList_ByList(list:string)

// return Promise
```

## POST /lobby/v1/admin/profanity/namespaces/{namespace}/lists/{list}

```
import { AccelByte } from '@accelbyte/sdk'
import { ProfanityAdminApi } from '@accelbyte/sdk-lobby'

const sdk = AccelByte.SDK({
  coreConfig: {
    baseURL: '__AGS_DOMAIN__',
    clientId: '__IAM_CLIENT_ID__',
    namespace: '__NAMESPACE__',
    redirectURI: '__IAM_CLIENT_REDIRECT_URI__'
  }
})

ProfanityAdminApi(sdk, { axiosConfig: { request: { headers: { Authorization: 'Bearer {access_token}' } } } })
  .updateProfanityList_ByList(list:string, data: {
             AdminUpdateProfanityList
    })

// return Promise
```

## GET /lobby/v1/admin/party/namespaces/{namespace}/parties/{partyId}

```
import { AccelByte } from '@accelbyte/sdk'
import { PartyAdminApi } from '@accelbyte/sdk-lobby'

const sdk = AccelByte.SDK({
  coreConfig: {
    baseURL: '__AGS_DOMAIN__',
    clientId: '__IAM_CLIENT_ID__',
    namespace: '__NAMESPACE__',
    redirectURI: '__IAM_CLIENT_REDIRECT_URI__'
  }
})

PartyAdminApi(sdk, { axiosConfig: { request: { headers: { Authorization: 'Bearer {access_token}' } } } })
  .getPartyParty_ByPartyId(partyId:string)

// return Promise<PartyData>
```

## POST /lobby/v1/admin/profanity/namespaces/{namespace}/filters/debug

```
import { AccelByte } from '@accelbyte/sdk'
import { ProfanityAdminApi } from '@accelbyte/sdk-lobby'

const sdk = AccelByte.SDK({
  coreConfig: {
    baseURL: '__AGS_DOMAIN__',
    clientId: '__IAM_CLIENT_ID__',
    namespace: '__NAMESPACE__',
    redirectURI: '__IAM_CLIENT_REDIRECT_URI__'
  }
})

ProfanityAdminApi(sdk, { axiosConfig: { request: { headers: { Authorization: 'Bearer {access_token}' } } } })
  .fetchProfanityFilterDebug(data: {
             DebugProfanityFilterRequest
    })

// return Promise<ProfanityFilterArray>
```

## DELETE /lobby/v1/admin/thirdparty/namespaces/{namespace}/config/steam

```
import { AccelByte } from '@accelbyte/sdk'
import { ThirdPartyAdminApi } from '@accelbyte/sdk-lobby'

const sdk = AccelByte.SDK({
  coreConfig: {
    baseURL: '__AGS_DOMAIN__',
    clientId: '__IAM_CLIENT_ID__',
    namespace: '__NAMESPACE__',
    redirectURI: '__IAM_CLIENT_REDIRECT_URI__'
  }
})

ThirdPartyAdminApi(sdk, { axiosConfig: { request: { headers: { Authorization: 'Bearer {access_token}' } } } })
  .deleteThirdpartyConfigSteam()

// return Promise
```

## GET /lobby/v1/admin/thirdparty/namespaces/{namespace}/config/steam

```
import { AccelByte } from '@accelbyte/sdk'
import { ThirdPartyAdminApi } from '@accelbyte/sdk-lobby'

const sdk = AccelByte.SDK({
  coreConfig: {
    baseURL: '__AGS_DOMAIN__',
    clientId: '__IAM_CLIENT_ID__',
    namespace: '__NAMESPACE__',
    redirectURI: '__IAM_CLIENT_REDIRECT_URI__'
  }
})

ThirdPartyAdminApi(sdk, { axiosConfig: { request: { headers: { Authorization: 'Bearer {access_token}' } } } })
  .getThirdpartyConfigSteam()

// return Promise<GetConfigResponse>
```

## POST /lobby/v1/admin/thirdparty/namespaces/{namespace}/config/steam

```
import { AccelByte } from '@accelbyte/sdk'
import { ThirdPartyAdminApi } from '@accelbyte/sdk-lobby'

const sdk = AccelByte.SDK({
  coreConfig: {
    baseURL: '__AGS_DOMAIN__',
    clientId: '__IAM_CLIENT_ID__',
    namespace: '__NAMESPACE__',
    redirectURI: '__IAM_CLIENT_REDIRECT_URI__'
  }
})

ThirdPartyAdminApi(sdk, { axiosConfig: { request: { headers: { Authorization: 'Bearer {access_token}' } } } })
  .createThirdpartyConfigSteam(data: {
             CreateConfigRequest
    })

// return Promise<CreateConfigResponse>
```

## PUT /lobby/v1/admin/thirdparty/namespaces/{namespace}/config/steam

```
import { AccelByte } from '@accelbyte/sdk'
import { ThirdPartyAdminApi } from '@accelbyte/sdk-lobby'

const sdk = AccelByte.SDK({
  coreConfig: {
    baseURL: '__AGS_DOMAIN__',
    clientId: '__IAM_CLIENT_ID__',
    namespace: '__NAMESPACE__',
    redirectURI: '__IAM_CLIENT_REDIRECT_URI__'
  }
})

ThirdPartyAdminApi(sdk, { axiosConfig: { request: { headers: { Authorization: 'Bearer {access_token}' } } } })
  .updateThirdpartyConfigSteam(data: {
             UpdateConfigRequest
    })

// return Promise<UpdateConfigResponse>
```

## POST /lobby/v1/admin/player/namespaces/{namespace}/users/bulk/blocked

```
import { AccelByte } from '@accelbyte/sdk'
import { PlayerAdminApi } from '@accelbyte/sdk-lobby'

const sdk = AccelByte.SDK({
  coreConfig: {
    baseURL: '__AGS_DOMAIN__',
    clientId: '__IAM_CLIENT_ID__',
    namespace: '__NAMESPACE__',
    redirectURI: '__IAM_CLIENT_REDIRECT_URI__'
  }
})

PlayerAdminApi(sdk, { axiosConfig: { request: { headers: { Authorization: 'Bearer {access_token}' } } } })
  .fetchPlayerUserBulkBlocked(data: {
             GetBulkAllPlayerBlockedUsersRequest
    })

// return Promise<GetBulkAllPlayerBlockedUsersResponse>
```

## GET /lobby/v1/admin/party/namespaces/{namespace}/users/{userId}/party

```
import { AccelByte } from '@accelbyte/sdk'
import { PartyAdminApi } from '@accelbyte/sdk-lobby'

const sdk = AccelByte.SDK({
  coreConfig: {
    baseURL: '__AGS_DOMAIN__',
    clientId: '__IAM_CLIENT_ID__',
    namespace: '__NAMESPACE__',
    redirectURI: '__IAM_CLIENT_REDIRECT_URI__'
  }
})

PartyAdminApi(sdk, { axiosConfig: { request: { headers: { Authorization: 'Bearer {access_token}' } } } })
  .getParty_ByUserId(userId:string)

// return Promise<PartyData>
```

## POST /lobby/v1/admin/notification/namespaces/{namespace}/freeform/notify

```
import { AccelByte } from '@accelbyte/sdk'
import { NotificationAdminApi } from '@accelbyte/sdk-lobby'

const sdk = AccelByte.SDK({
  coreConfig: {
    baseURL: '__AGS_DOMAIN__',
    clientId: '__IAM_CLIENT_ID__',
    namespace: '__NAMESPACE__',
    redirectURI: '__IAM_CLIENT_REDIRECT_URI__'
  }
})

NotificationAdminApi(sdk, { axiosConfig: { request: { headers: { Authorization: 'Bearer {access_token}' } } } })
  .createNotificationFreeformNotify(data: {
             FreeFormNotificationRequestV1
    })

// return Promise
```

## POST /lobby/v1/admin/notification/namespaces/{namespace}/templates/notify

```
import { AccelByte } from '@accelbyte/sdk'
import { NotificationAdminApi } from '@accelbyte/sdk-lobby'

const sdk = AccelByte.SDK({
  coreConfig: {
    baseURL: '__AGS_DOMAIN__',
    clientId: '__IAM_CLIENT_ID__',
    namespace: '__NAMESPACE__',
    redirectURI: '__IAM_CLIENT_REDIRECT_URI__'
  }
})

NotificationAdminApi(sdk, { axiosConfig: { request: { headers: { Authorization: 'Bearer {access_token}' } } } })
  .createNotificationTemplateNotify(data: {
             NotificationWithTemplateRequestV1
    })

// return Promise
```

## GET /lobby/v1/admin/player/namespaces/{namespace}/users/{userId}/blocked

```
import { AccelByte } from '@accelbyte/sdk'
import { PlayerAdminApi } from '@accelbyte/sdk-lobby'

const sdk = AccelByte.SDK({
  coreConfig: {
    baseURL: '__AGS_DOMAIN__',
    clientId: '__IAM_CLIENT_ID__',
    namespace: '__NAMESPACE__',
    redirectURI: '__IAM_CLIENT_REDIRECT_URI__'
  }
})

PlayerAdminApi(sdk, { axiosConfig: { request: { headers: { Authorization: 'Bearer {access_token}' } } } })
  .getBlockedPlayer_ByUserId(userId:string)

// return Promise<GetAllPlayerBlockedUsersResponse>
```

## GET /lobby/v1/admin/profanity/namespaces/{namespace}/list/{list}/filters

```
import { AccelByte } from '@accelbyte/sdk'
import { ProfanityAdminApi } from '@accelbyte/sdk-lobby'

const sdk = AccelByte.SDK({
  coreConfig: {
    baseURL: '__AGS_DOMAIN__',
    clientId: '__IAM_CLIENT_ID__',
    namespace: '__NAMESPACE__',
    redirectURI: '__IAM_CLIENT_REDIRECT_URI__'
  }
})

ProfanityAdminApi(sdk, { axiosConfig: { request: { headers: { Authorization: 'Bearer {access_token}' } } } })
  .getFiltersProfanity_ByList(list:string)

// return Promise<AdminGetProfanityListFiltersV1Response>
```

## POST /lobby/v1/admin/profanity/namespaces/{namespace}/list/{list}/filters

```
import { AccelByte } from '@accelbyte/sdk'
import { ProfanityAdminApi } from '@accelbyte/sdk-lobby'

const sdk = AccelByte.SDK({
  coreConfig: {
    baseURL: '__AGS_DOMAIN__',
    clientId: '__IAM_CLIENT_ID__',
    namespace: '__NAMESPACE__',
    redirectURI: '__IAM_CLIENT_REDIRECT_URI__'
  }
})

ProfanityAdminApi(sdk, { axiosConfig: { request: { headers: { Authorization: 'Bearer {access_token}' } } } })
  .createFilterProfanity_ByList(list:string, data: {
             AdminAddProfanityFilterIntoListRequest
    })

// return Promise
```

## GET /lobby/v1/admin/friend/namespaces/{namespace}/users/{userId}/incoming

```
import { AccelByte } from '@accelbyte/sdk'
import { FriendsAdminApi } from '@accelbyte/sdk-lobby'

const sdk = AccelByte.SDK({
  coreConfig: {
    baseURL: '__AGS_DOMAIN__',
    clientId: '__IAM_CLIENT_ID__',
    namespace: '__NAMESPACE__',
    redirectURI: '__IAM_CLIENT_REDIRECT_URI__'
  }
})

FriendsAdminApi(sdk, { axiosConfig: { request: { headers: { Authorization: 'Bearer {access_token}' } } } })
  .getIncomingFriend_ByUserId(userId:string,  queryParams?: {
             friendId?: string | null,
             limit?: number,
             offset?: number
    })

// return Promise<LoadIncomingFriendsWithTimeResponse>
```

## GET /lobby/v1/admin/friend/namespaces/{namespace}/users/{userId}/outgoing

```
import { AccelByte } from '@accelbyte/sdk'
import { FriendsAdminApi } from '@accelbyte/sdk-lobby'

const sdk = AccelByte.SDK({
  coreConfig: {
    baseURL: '__AGS_DOMAIN__',
    clientId: '__IAM_CLIENT_ID__',
    namespace: '__NAMESPACE__',
    redirectURI: '__IAM_CLIENT_REDIRECT_URI__'
  }
})

FriendsAdminApi(sdk, { axiosConfig: { request: { headers: { Authorization: 'Bearer {access_token}' } } } })
  .getOutgoingFriend_ByUserId(userId:string,  queryParams?: {
             limit?: number,
             offset?: number
    })

// return Promise<LoadOutgoingFriendsWithTimeResponse>
```

## DELETE /lobby/v1/admin/notification/namespaces/{namespace}/topics/{topicName}

```
import { AccelByte } from '@accelbyte/sdk'
import { NotificationAdminApi } from '@accelbyte/sdk-lobby'

const sdk = AccelByte.SDK({
  coreConfig: {
    baseURL: '__AGS_DOMAIN__',
    clientId: '__IAM_CLIENT_ID__',
    namespace: '__NAMESPACE__',
    redirectURI: '__IAM_CLIENT_REDIRECT_URI__'
  }
})

NotificationAdminApi(sdk, { axiosConfig: { request: { headers: { Authorization: 'Bearer {access_token}' } } } })
  .deleteNotificationTopic_ByTopicName(topicName:string)

// return Promise
```

## GET /lobby/v1/admin/notification/namespaces/{namespace}/topics/{topicName}

```
import { AccelByte } from '@accelbyte/sdk'
import { NotificationAdminApi } from '@accelbyte/sdk-lobby'

const sdk = AccelByte.SDK({
  coreConfig: {
    baseURL: '__AGS_DOMAIN__',
    clientId: '__IAM_CLIENT_ID__',
    namespace: '__NAMESPACE__',
    redirectURI: '__IAM_CLIENT_REDIRECT_URI__'
  }
})

NotificationAdminApi(sdk, { axiosConfig: { request: { headers: { Authorization: 'Bearer {access_token}' } } } })
  .getNotificationTopic_ByTopicName(topicName:string)

// return Promise<NotificationTopicResponseV1>
```

## PUT /lobby/v1/admin/notification/namespaces/{namespace}/topics/{topicName}

```
import { AccelByte } from '@accelbyte/sdk'
import { NotificationAdminApi } from '@accelbyte/sdk-lobby'

const sdk = AccelByte.SDK({
  coreConfig: {
    baseURL: '__AGS_DOMAIN__',
    clientId: '__IAM_CLIENT_ID__',
    namespace: '__NAMESPACE__',
    redirectURI: '__IAM_CLIENT_REDIRECT_URI__'
  }
})

NotificationAdminApi(sdk, { axiosConfig: { request: { headers: { Authorization: 'Bearer {access_token}' } } } })
  .updateNotificationTopic_ByTopicName(topicName:string, data: {
             UpdateTopicRequest
    })

// return Promise
```

## GET /lobby/v1/admin/friend/namespaces/{namespace}/users/{userId}/of-friends

```
import { AccelByte } from '@accelbyte/sdk'
import { FriendsAdminApi } from '@accelbyte/sdk-lobby'

const sdk = AccelByte.SDK({
  coreConfig: {
    baseURL: '__AGS_DOMAIN__',
    clientId: '__IAM_CLIENT_ID__',
    namespace: '__NAMESPACE__',
    redirectURI: '__IAM_CLIENT_REDIRECT_URI__'
  }
})

FriendsAdminApi(sdk, { axiosConfig: { request: { headers: { Authorization: 'Bearer {access_token}' } } } })
  .getOfFriends_ByUserId(userId:string,  queryParams?: {
             friendId?: string | null,
             limit?: number,
             nopaging?: boolean | null,
             offset?: number
    })

// return Promise<FriendshipConnectionResponse>
```

## GET /lobby/v1/admin/player/namespaces/{namespace}/users/{userId}/attributes

```
import { AccelByte } from '@accelbyte/sdk'
import { PlayerAdminApi } from '@accelbyte/sdk-lobby'

const sdk = AccelByte.SDK({
  coreConfig: {
    baseURL: '__AGS_DOMAIN__',
    clientId: '__IAM_CLIENT_ID__',
    namespace: '__NAMESPACE__',
    redirectURI: '__IAM_CLIENT_REDIRECT_URI__'
  }
})

PlayerAdminApi(sdk, { axiosConfig: { request: { headers: { Authorization: 'Bearer {access_token}' } } } })
  .getAttributesPlayer_ByUserId(userId:string)

// return Promise<GetAllPlayerSessionAttributeResponse>
```

## PUT /lobby/v1/admin/player/namespaces/{namespace}/users/{userId}/attributes

```
import { AccelByte } from '@accelbyte/sdk'
import { PlayerAdminApi } from '@accelbyte/sdk-lobby'

const sdk = AccelByte.SDK({
  coreConfig: {
    baseURL: '__AGS_DOMAIN__',
    clientId: '__IAM_CLIENT_ID__',
    namespace: '__NAMESPACE__',
    redirectURI: '__IAM_CLIENT_REDIRECT_URI__'
  }
})

PlayerAdminApi(sdk, { axiosConfig: { request: { headers: { Authorization: 'Bearer {access_token}' } } } })
  .updateAttributePlayer_ByUserId(userId:string, data: {
             SetPlayerSessionAttributeRequest
    })

// return Promise
```

## GET /lobby/v1/admin/player/namespaces/{namespace}/users/{userId}/blocked-by

```
import { AccelByte } from '@accelbyte/sdk'
import { PlayerAdminApi } from '@accelbyte/sdk-lobby'

const sdk = AccelByte.SDK({
  coreConfig: {
    baseURL: '__AGS_DOMAIN__',
    clientId: '__IAM_CLIENT_ID__',
    namespace: '__NAMESPACE__',
    redirectURI: '__IAM_CLIENT_REDIRECT_URI__'
  }
})

PlayerAdminApi(sdk, { axiosConfig: { request: { headers: { Authorization: 'Bearer {access_token}' } } } })
  .getBlockedByPlayer_ByUserId(userId:string)

// return Promise<GetAllPlayerBlockedByUsersResponse>
```

## POST /lobby/v1/admin/player/namespaces/{namespace}/users/{userId}/bulk/block

```
import { AccelByte } from '@accelbyte/sdk'
import { PlayerAdminApi } from '@accelbyte/sdk-lobby'

const sdk = AccelByte.SDK({
  coreConfig: {
    baseURL: '__AGS_DOMAIN__',
    clientId: '__IAM_CLIENT_ID__',
    namespace: '__NAMESPACE__',
    redirectURI: '__IAM_CLIENT_REDIRECT_URI__'
  }
})

PlayerAdminApi(sdk, { axiosConfig: { request: { headers: { Authorization: 'Bearer {access_token}' } } } })
  .createBulkBlockPlayer_ByUserId(userId:string, data: {
             ListBlockedPlayerRequest
    })

// return Promise
```

## PUT /lobby/v1/admin/party/namespaces/{namespace}/parties/{partyId}/attributes

```
import { AccelByte } from '@accelbyte/sdk'
import { LobbyOperationsAdminApi } from '@accelbyte/sdk-lobby'

const sdk = AccelByte.SDK({
  coreConfig: {
    baseURL: '__AGS_DOMAIN__',
    clientId: '__IAM_CLIENT_ID__',
    namespace: '__NAMESPACE__',
    redirectURI: '__IAM_CLIENT_REDIRECT_URI__'
  }
})

LobbyOperationsAdminApi(sdk, { axiosConfig: { request: { headers: { Authorization: 'Bearer {access_token}' } } } })
  .updateAttributeParty_ByPartyId(partyId:string, data: {
             PartyPutCustomAttributesRequest
    })

// return Promise<PartyData>
```

## DELETE /lobby/v1/admin/player/namespaces/{namespace}/users/{userId}/bulk/unblock

```
import { AccelByte } from '@accelbyte/sdk'
import { PlayerAdminApi } from '@accelbyte/sdk-lobby'

const sdk = AccelByte.SDK({
  coreConfig: {
    baseURL: '__AGS_DOMAIN__',
    clientId: '__IAM_CLIENT_ID__',
    namespace: '__NAMESPACE__',
    redirectURI: '__IAM_CLIENT_REDIRECT_URI__'
  }
})

PlayerAdminApi(sdk, { axiosConfig: { request: { headers: { Authorization: 'Bearer {access_token}' } } } })
  .deleteBulkUnblockPlayer_ByUserId(userId:string, data: {
             ListUnblockPlayerRequest
    })

// return Promise
```

## POST /lobby/v1/admin/profanity/namespaces/{namespace}/list/{list}/filters/bulk

```
import { AccelByte } from '@accelbyte/sdk'
import { ProfanityAdminApi } from '@accelbyte/sdk-lobby'

const sdk = AccelByte.SDK({
  coreConfig: {
    baseURL: '__AGS_DOMAIN__',
    clientId: '__IAM_CLIENT_ID__',
    namespace: '__NAMESPACE__',
    redirectURI: '__IAM_CLIENT_REDIRECT_URI__'
  }
})

ProfanityAdminApi(sdk, { axiosConfig: { request: { headers: { Authorization: 'Bearer {access_token}' } } } })
  .createFilterBulkProfanity_ByList(list:string, data: {
             AdminAddProfanityFiltersRequest
    })

// return Promise
```

## POST /lobby/v1/admin/profanity/namespaces/{namespace}/list/{list}/filters/delete

```
import { AccelByte } from '@accelbyte/sdk'
import { ProfanityAdminApi } from '@accelbyte/sdk-lobby'

const sdk = AccelByte.SDK({
  coreConfig: {
    baseURL: '__AGS_DOMAIN__',
    clientId: '__IAM_CLIENT_ID__',
    namespace: '__NAMESPACE__',
    redirectURI: '__IAM_CLIENT_REDIRECT_URI__'
  }
})

ProfanityAdminApi(sdk, { axiosConfig: { request: { headers: { Authorization: 'Bearer {access_token}' } } } })
  .createFilterDeleteProfanity_ByList(list:string, data: {
             AdminDeleteProfanityFilterRequest
    })

// return Promise<ProfanityFilterArray>
```

## DELETE /lobby/v1/admin/notification/namespaces/{namespace}/templates/{templateSlug}

```
import { AccelByte } from '@accelbyte/sdk'
import { NotificationAdminApi } from '@accelbyte/sdk-lobby'

const sdk = AccelByte.SDK({
  coreConfig: {
    baseURL: '__AGS_DOMAIN__',
    clientId: '__IAM_CLIENT_ID__',
    namespace: '__NAMESPACE__',
    redirectURI: '__IAM_CLIENT_REDIRECT_URI__'
  }
})

NotificationAdminApi(sdk, { axiosConfig: { request: { headers: { Authorization: 'Bearer {access_token}' } } } })
  .deleteNotificationTemplate_ByTemplateSlug(templateSlug:string)

// return Promise
```

## GET /lobby/v1/admin/notification/namespaces/{namespace}/templates/{templateSlug}

```
import { AccelByte } from '@accelbyte/sdk'
import { NotificationAdminApi } from '@accelbyte/sdk-lobby'

const sdk = AccelByte.SDK({
  coreConfig: {
    baseURL: '__AGS_DOMAIN__',
    clientId: '__IAM_CLIENT_ID__',
    namespace: '__NAMESPACE__',
    redirectURI: '__IAM_CLIENT_REDIRECT_URI__'
  }
})

NotificationAdminApi(sdk, { axiosConfig: { request: { headers: { Authorization: 'Bearer {access_token}' } } } })
  .getNotificationTemplate_ByTemplateSlug(templateSlug:string,  queryParams?: {
             after?: string | null,
             before?: string | null,
             limit?: number
    })

// return Promise<GetAllNotificationTemplateSlugResp>
```

## POST /lobby/v1/admin/party/namespaces/{namespace}/parties/{partyId}/join/{userId}

```
import { AccelByte } from '@accelbyte/sdk'
import { LobbyOperationsAdminApi } from '@accelbyte/sdk-lobby'

const sdk = AccelByte.SDK({
  coreConfig: {
    baseURL: '__AGS_DOMAIN__',
    clientId: '__IAM_CLIENT_ID__',
    namespace: '__NAMESPACE__',
    redirectURI: '__IAM_CLIENT_REDIRECT_URI__'
  }
})

LobbyOperationsAdminApi(sdk, { axiosConfig: { request: { headers: { Authorization: 'Bearer {access_token}' } } } })
  .updateJoinParty_ByPartyId_ByUserId(partyId:string, userId:string)

// return Promise
```

## POST /lobby/v1/admin/notification/namespaces/{namespace}/bulkUsers/freeform/notify

```
import { AccelByte } from '@accelbyte/sdk'
import { NotificationAdminApi } from '@accelbyte/sdk-lobby'

const sdk = AccelByte.SDK({
  coreConfig: {
    baseURL: '__AGS_DOMAIN__',
    clientId: '__IAM_CLIENT_ID__',
    namespace: '__NAMESPACE__',
    redirectURI: '__IAM_CLIENT_REDIRECT_URI__'
  }
})

NotificationAdminApi(sdk, { axiosConfig: { request: { headers: { Authorization: 'Bearer {access_token}' } } } })
  .createNotificationBulkUserFreeformNotify(data: {
             BulkUsersFreeFormNotificationRequestV1
    })

// return Promise
```

## POST /lobby/v1/admin/profanity/namespaces/{namespace}/list/{list}/filters/bulk-file

```
import { AccelByte } from '@accelbyte/sdk'
import { ProfanityAdminApi } from '@accelbyte/sdk-lobby'

const sdk = AccelByte.SDK({
  coreConfig: {
    baseURL: '__AGS_DOMAIN__',
    clientId: '__IAM_CLIENT_ID__',
    namespace: '__NAMESPACE__',
    redirectURI: '__IAM_CLIENT_REDIRECT_URI__'
  }
})

ProfanityAdminApi(sdk, { axiosConfig: { request: { headers: { Authorization: 'Bearer {access_token}' } } } })
  .createFilterBulkFileProfanity_ByList(list:string, data: {
             number[]
    })

// return Promise
```

## POST /lobby/v1/admin/notification/namespaces/{namespace}/users/{userId}/freeform/notify

```
import { AccelByte } from '@accelbyte/sdk'
import { NotificationAdminApi } from '@accelbyte/sdk-lobby'

const sdk = AccelByte.SDK({
  coreConfig: {
    baseURL: '__AGS_DOMAIN__',
    clientId: '__IAM_CLIENT_ID__',
    namespace: '__NAMESPACE__',
    redirectURI: '__IAM_CLIENT_REDIRECT_URI__'
  }
})

NotificationAdminApi(sdk, { axiosConfig: { request: { headers: { Authorization: 'Bearer {access_token}' } } } })
  .createFreeformNotifyNotification_ByUserId(userId:string, data: {
             FreeFormNotificationRequestV1
    })

// return Promise
```

## POST /lobby/v1/admin/notification/namespaces/{namespace}/users/{userId}/templates/notify

```
import { AccelByte } from '@accelbyte/sdk'
import { NotificationAdminApi } from '@accelbyte/sdk-lobby'

const sdk = AccelByte.SDK({
  coreConfig: {
    baseURL: '__AGS_DOMAIN__',
    clientId: '__IAM_CLIENT_ID__',
    namespace: '__NAMESPACE__',
    redirectURI: '__IAM_CLIENT_REDIRECT_URI__'
  }
})

NotificationAdminApi(sdk, { axiosConfig: { request: { headers: { Authorization: 'Bearer {access_token}' } } } })
  .createTemplateNotifyNotification_ByUserId(userId:string, data: {
             NotificationWithTemplateRequestV1
    })

// return Promise
```

## GET /lobby/v1/admin/player/namespaces/{namespace}/users/{userId}/attributes/{attribute}

```
import { AccelByte } from '@accelbyte/sdk'
import { PlayerAdminApi } from '@accelbyte/sdk-lobby'

const sdk = AccelByte.SDK({
  coreConfig: {
    baseURL: '__AGS_DOMAIN__',
    clientId: '__IAM_CLIENT_ID__',
    namespace: '__NAMESPACE__',
    redirectURI: '__IAM_CLIENT_REDIRECT_URI__'
  }
})

PlayerAdminApi(sdk, { axiosConfig: { request: { headers: { Authorization: 'Bearer {access_token}' } } } })
  .getAttributePlayer_ByUserId_ByAttribute(userId:string, attribute:string)

// return Promise<GetPlayerSessionAttributeResponse>
```

## POST /lobby/v1/admin/notification/namespaces/{namespace}/parties/{partyId}/freeform/notify

```
import { AccelByte } from '@accelbyte/sdk'
import { NotificationAdminApi } from '@accelbyte/sdk-lobby'

const sdk = AccelByte.SDK({
  coreConfig: {
    baseURL: '__AGS_DOMAIN__',
    clientId: '__IAM_CLIENT_ID__',
    namespace: '__NAMESPACE__',
    redirectURI: '__IAM_CLIENT_REDIRECT_URI__'
  }
})

NotificationAdminApi(sdk, { axiosConfig: { request: { headers: { Authorization: 'Bearer {access_token}' } } } })
  .createFreeformNotifyNotification_ByPartyId(partyId:string, data: {
             FreeFormNotificationRequestV1
    })

// return Promise
```

## POST /lobby/v1/admin/notification/namespaces/{namespace}/parties/{partyId}/templates/notify

```
import { AccelByte } from '@accelbyte/sdk'
import { NotificationAdminApi } from '@accelbyte/sdk-lobby'

const sdk = AccelByte.SDK({
  coreConfig: {
    baseURL: '__AGS_DOMAIN__',
    clientId: '__IAM_CLIENT_ID__',
    namespace: '__NAMESPACE__',
    redirectURI: '__IAM_CLIENT_REDIRECT_URI__'
  }
})

NotificationAdminApi(sdk, { axiosConfig: { request: { headers: { Authorization: 'Bearer {access_token}' } } } })
  .createTemplateNotifyNotification_ByPartyId(partyId:string, data: {
             NotificationWithTemplateRequestV1
    })

// return Promise
```

## DELETE /lobby/v1/admin/notification/namespaces/{namespace}/templates/{templateSlug}/languages/{templateLanguage}

```
import { AccelByte } from '@accelbyte/sdk'
import { NotificationAdminApi } from '@accelbyte/sdk-lobby'

const sdk = AccelByte.SDK({
  coreConfig: {
    baseURL: '__AGS_DOMAIN__',
    clientId: '__IAM_CLIENT_ID__',
    namespace: '__NAMESPACE__',
    redirectURI: '__IAM_CLIENT_REDIRECT_URI__'
  }
})

NotificationAdminApi(sdk, { axiosConfig: { request: { headers: { Authorization: 'Bearer {access_token}' } } } })
  .deleteLanguageNotification_ByTemplateSlug_ByTemplateLanguage(templateSlug:string, templateLanguage:string)

// return Promise
```

## GET /lobby/v1/admin/notification/namespaces/{namespace}/templates/{templateSlug}/languages/{templateLanguage}

```
import { AccelByte } from '@accelbyte/sdk'
import { NotificationAdminApi } from '@accelbyte/sdk-lobby'

const sdk = AccelByte.SDK({
  coreConfig: {
    baseURL: '__AGS_DOMAIN__',
    clientId: '__IAM_CLIENT_ID__',
    namespace: '__NAMESPACE__',
    redirectURI: '__IAM_CLIENT_REDIRECT_URI__'
  }
})

NotificationAdminApi(sdk, { axiosConfig: { request: { headers: { Authorization: 'Bearer {access_token}' } } } })
  .getLanguageNotification_ByTemplateSlug_ByTemplateLanguage(templateSlug:string, templateLanguage:string)

// return Promise<Localization>
```

## PUT /lobby/v1/admin/notification/namespaces/{namespace}/templates/{templateSlug}/languages/{templateLanguage}

```
import { AccelByte } from '@accelbyte/sdk'
import { NotificationAdminApi } from '@accelbyte/sdk-lobby'

const sdk = AccelByte.SDK({
  coreConfig: {
    baseURL: '__AGS_DOMAIN__',
    clientId: '__IAM_CLIENT_ID__',
    namespace: '__NAMESPACE__',
    redirectURI: '__IAM_CLIENT_REDIRECT_URI__'
  }
})

NotificationAdminApi(sdk, { axiosConfig: { request: { headers: { Authorization: 'Bearer {access_token}' } } } })
  .updateLanguageNotification_ByTemplateSlug_ByTemplateLanguage(templateSlug:string, templateLanguage:string, data: {
             UpdateTemplateRequest
    })

// return Promise
```

## POST /lobby/v1/admin/notification/namespaces/{namespace}/templates/{templateSlug}/languages/{templateLanguage}/publish

```
import { AccelByte } from '@accelbyte/sdk'
import { NotificationAdminApi } from '@accelbyte/sdk-lobby'

const sdk = AccelByte.SDK({
  coreConfig: {
    baseURL: '__AGS_DOMAIN__',
    clientId: '__IAM_CLIENT_ID__',
    namespace: '__NAMESPACE__',
    redirectURI: '__IAM_CLIENT_REDIRECT_URI__'
  }
})

NotificationAdminApi(sdk, { axiosConfig: { request: { headers: { Authorization: 'Bearer {access_token}' } } } })
  .createPublishNotification_ByTemplateSlug_ByTemplateLanguage(templateSlug:string, templateLanguage:string)

// return Promise
```