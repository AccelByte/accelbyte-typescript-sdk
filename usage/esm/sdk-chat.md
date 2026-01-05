## GET /chat/public/namespaces/{namespace}/muted

```
import { AccelByte } from '@accelbyte/sdk'
import { TopicApi } from '@accelbyte/sdk-chat'

const sdk = AccelByte.SDK({
  coreConfig: {
    baseURL: '__AGS_DOMAIN__',
    clientId: '__IAM_CLIENT_ID__',
    namespace: '__NAMESPACE__',
    redirectURI: '__IAM_CLIENT_REDIRECT_URI__'
  }
})

TopicApi(sdk, { axiosConfig: { request: { headers: { Authorization: 'Bearer {access_token}' } } } })
  .getMuted()

// return Promise<MutedTopicResponseArray>
```

## GET /chat/public/namespaces/{namespace}/topic

```
import { AccelByte } from '@accelbyte/sdk'
import { TopicApi } from '@accelbyte/sdk-chat'

const sdk = AccelByte.SDK({
  coreConfig: {
    baseURL: '__AGS_DOMAIN__',
    clientId: '__IAM_CLIENT_ID__',
    namespace: '__NAMESPACE__',
    redirectURI: '__IAM_CLIENT_REDIRECT_URI__'
  }
})

TopicApi(sdk, { axiosConfig: { request: { headers: { Authorization: 'Bearer {access_token}' } } } })
  .getTopic( queryParams?: {
             limit?: number,
             offset?: number,
             topicType?: string | null
    })

// return Promise<ChatMessageResponseArray>
```

## GET /chat/v1/public/config/namespaces/{namespace}

```
import { AccelByte } from '@accelbyte/sdk'
import { ConfigApi } from '@accelbyte/sdk-chat'

const sdk = AccelByte.SDK({
  coreConfig: {
    baseURL: '__AGS_DOMAIN__',
    clientId: '__IAM_CLIENT_ID__',
    namespace: '__NAMESPACE__',
    redirectURI: '__IAM_CLIENT_REDIRECT_URI__'
  }
})

ConfigApi(sdk, { axiosConfig: { request: { headers: { Authorization: 'Bearer {access_token}' } } } })
  .getConfig_ByNamespace()

// return Promise<PublicConfigResponse>
```

## PUT /chat/public/namespaces/{namespace}/topic/{topic}/mute

```
import { AccelByte } from '@accelbyte/sdk'
import { TopicApi } from '@accelbyte/sdk-chat'

const sdk = AccelByte.SDK({
  coreConfig: {
    baseURL: '__AGS_DOMAIN__',
    clientId: '__IAM_CLIENT_ID__',
    namespace: '__NAMESPACE__',
    redirectURI: '__IAM_CLIENT_REDIRECT_URI__'
  }
})

TopicApi(sdk, { axiosConfig: { request: { headers: { Authorization: 'Bearer {access_token}' } } } })
  .updateMute_ByTopic(topic:string, data: {
             MuteUserRequest
    })

// return Promise
```

## GET /chat/public/namespaces/{namespace}/topic/{topic}/chats

```
import { AccelByte } from '@accelbyte/sdk'
import { TopicApi } from '@accelbyte/sdk-chat'

const sdk = AccelByte.SDK({
  coreConfig: {
    baseURL: '__AGS_DOMAIN__',
    clientId: '__IAM_CLIENT_ID__',
    namespace: '__NAMESPACE__',
    redirectURI: '__IAM_CLIENT_REDIRECT_URI__'
  }
})

TopicApi(sdk, { axiosConfig: { request: { headers: { Authorization: 'Bearer {access_token}' } } } })
  .getChats_ByTopic(topic:string,  queryParams?: {
             limit?: number,
             order?: string | null,
             startCreatedAt?: number
    })

// return Promise<ChatMessageResponseArray>
```

## PUT /chat/public/namespaces/{namespace}/topic/{topic}/unmute

```
import { AccelByte } from '@accelbyte/sdk'
import { TopicApi } from '@accelbyte/sdk-chat'

const sdk = AccelByte.SDK({
  coreConfig: {
    baseURL: '__AGS_DOMAIN__',
    clientId: '__IAM_CLIENT_ID__',
    namespace: '__NAMESPACE__',
    redirectURI: '__IAM_CLIENT_REDIRECT_URI__'
  }
})

TopicApi(sdk, { axiosConfig: { request: { headers: { Authorization: 'Bearer {access_token}' } } } })
  .updateUnmute_ByTopic(topic:string, data: {
             UnmuteUserRequest
    })

// return Promise
```

## POST /chat/public/namespaces/{namespace}/topic/{topic}/ban-members

```
import { AccelByte } from '@accelbyte/sdk'
import { TopicApi } from '@accelbyte/sdk-chat'

const sdk = AccelByte.SDK({
  coreConfig: {
    baseURL: '__AGS_DOMAIN__',
    clientId: '__IAM_CLIENT_ID__',
    namespace: '__NAMESPACE__',
    redirectURI: '__IAM_CLIENT_REDIRECT_URI__'
  }
})

TopicApi(sdk, { axiosConfig: { request: { headers: { Authorization: 'Bearer {access_token}' } } } })
  .updateBanMember_ByTopic(topic:string, data: {
             PublicBanTopicMembersRequest
    })

// return Promise<PublicBanTopicMembersResponse>
```

## POST /chat/public/namespaces/{namespace}/topic/{topic}/unban-members

```
import { AccelByte } from '@accelbyte/sdk'
import { TopicApi } from '@accelbyte/sdk-chat'

const sdk = AccelByte.SDK({
  coreConfig: {
    baseURL: '__AGS_DOMAIN__',
    clientId: '__IAM_CLIENT_ID__',
    namespace: '__NAMESPACE__',
    redirectURI: '__IAM_CLIENT_REDIRECT_URI__'
  }
})

TopicApi(sdk, { axiosConfig: { request: { headers: { Authorization: 'Bearer {access_token}' } } } })
  .updateUnbanMember_ByTopic(topic:string, data: {
             PublicUnbanTopicMembersRequest
    })

// return Promise<PublicUnbanTopicMembersResponse>
```

## DELETE /chat/public/namespaces/{namespace}/topic/{topic}/chats/{chatId}

```
import { AccelByte } from '@accelbyte/sdk'
import { TopicApi } from '@accelbyte/sdk-chat'

const sdk = AccelByte.SDK({
  coreConfig: {
    baseURL: '__AGS_DOMAIN__',
    clientId: '__IAM_CLIENT_ID__',
    namespace: '__NAMESPACE__',
    redirectURI: '__IAM_CLIENT_REDIRECT_URI__'
  }
})

TopicApi(sdk, { axiosConfig: { request: { headers: { Authorization: 'Bearer {access_token}' } } } })
  .deleteChat_ByTopic_ByChatId(topic:string, chatId:string)

// return Promise
```

## GET /chat/v1/public/namespaces/{namespace}/topic/{topic}/snapshot/{chatId}

```
import { AccelByte } from '@accelbyte/sdk'
import { ModerationApi } from '@accelbyte/sdk-chat'

const sdk = AccelByte.SDK({
  coreConfig: {
    baseURL: '__AGS_DOMAIN__',
    clientId: '__IAM_CLIENT_ID__',
    namespace: '__NAMESPACE__',
    redirectURI: '__IAM_CLIENT_REDIRECT_URI__'
  }
})

ModerationApi(sdk, { axiosConfig: { request: { headers: { Authorization: 'Bearer {access_token}' } } } })
  .getSnapshot_ByTopic_ByChatId(topic:string, chatId:string)

// return Promise<ChatSnapshots>
```

## GET /chat/v1/admin/config

```
import { AccelByte } from '@accelbyte/sdk'
import { ConfigAdminApi } from '@accelbyte/sdk-chat'

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

## GET /chat/v1/admin/config/log

```
import { AccelByte } from '@accelbyte/sdk'
import { ConfigAdminApi } from '@accelbyte/sdk-chat'

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

## PATCH /chat/v1/admin/config/log

```
import { AccelByte } from '@accelbyte/sdk'
import { ConfigAdminApi } from '@accelbyte/sdk-chat'

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

## GET /chat/admin/namespaces/{namespace}/chats

```
import { AccelByte } from '@accelbyte/sdk'
import { TopicAdminApi } from '@accelbyte/sdk-chat'

const sdk = AccelByte.SDK({
  coreConfig: {
    baseURL: '__AGS_DOMAIN__',
    clientId: '__IAM_CLIENT_ID__',
    namespace: '__NAMESPACE__',
    redirectURI: '__IAM_CLIENT_REDIRECT_URI__'
  }
})

TopicAdminApi(sdk, { axiosConfig: { request: { headers: { Authorization: 'Bearer {access_token}' } } } })
  .getChats( queryParams?: {
             chatId?: string[],
             endCreatedAt?: number,
             keyword?: string | null,
             limit?: number,
             offset?: number,
             order?: string | null,
             senderUserId?: string | null,
             shardId?: string | null,
             startCreatedAt?: number,
             topic?: string[],
             unfiltered?: boolean | null
    })

// return Promise<ChatMessageWithPaginationResponse>
```

## GET /chat/admin/namespaces/{namespace}/topic

```
import { AccelByte } from '@accelbyte/sdk'
import { TopicAdminApi } from '@accelbyte/sdk-chat'

const sdk = AccelByte.SDK({
  coreConfig: {
    baseURL: '__AGS_DOMAIN__',
    clientId: '__IAM_CLIENT_ID__',
    namespace: '__NAMESPACE__',
    redirectURI: '__IAM_CLIENT_REDIRECT_URI__'
  }
})

TopicAdminApi(sdk, { axiosConfig: { request: { headers: { Authorization: 'Bearer {access_token}' } } } })
  .getTopic( queryParams?: {
             limit?: number,
             offset?: number,
             topicType?: string | null
    })

// return Promise<TopicResponseArray>
```

## POST /chat/admin/namespaces/{namespace}/topic

```
import { AccelByte } from '@accelbyte/sdk'
import { TopicAdminApi } from '@accelbyte/sdk-chat'

const sdk = AccelByte.SDK({
  coreConfig: {
    baseURL: '__AGS_DOMAIN__',
    clientId: '__IAM_CLIENT_ID__',
    namespace: '__NAMESPACE__',
    redirectURI: '__IAM_CLIENT_REDIRECT_URI__'
  }
})

TopicAdminApi(sdk, { axiosConfig: { request: { headers: { Authorization: 'Bearer {access_token}' } } } })
  .createTopic(data: {
             CreateTopicParams
    })

// return Promise<CreateTopicResponse>
```

## GET /chat/admin/namespaces/{namespace}/topics

```
import { AccelByte } from '@accelbyte/sdk'
import { TopicAdminApi } from '@accelbyte/sdk-chat'

const sdk = AccelByte.SDK({
  coreConfig: {
    baseURL: '__AGS_DOMAIN__',
    clientId: '__IAM_CLIENT_ID__',
    namespace: '__NAMESPACE__',
    redirectURI: '__IAM_CLIENT_REDIRECT_URI__'
  }
})

TopicAdminApi(sdk, { axiosConfig: { request: { headers: { Authorization: 'Bearer {access_token}' } } } })
  .getTopics( queryParams?: {
             includeMembers?: boolean | null,
             includePastMembers?: boolean | null,
             includePastTopics?: boolean | null,
             limit?: number,
             offset?: number,
             topic?: string[],
             topicSubType?: 'CLAN' | 'NAMESPACE' | 'NORMAL' | 'PARTY' | 'SESSION',
             topicType?: 'GROUP' | 'PERSONAL',
             userId?: string | null
    })

// return Promise<TopicInfoArray>
```

## GET /chat/admin/namespaces/{namespace}/topic/log

```
import { AccelByte } from '@accelbyte/sdk'
import { TopicAdminApi } from '@accelbyte/sdk-chat'

const sdk = AccelByte.SDK({
  coreConfig: {
    baseURL: '__AGS_DOMAIN__',
    clientId: '__IAM_CLIENT_ID__',
    namespace: '__NAMESPACE__',
    redirectURI: '__IAM_CLIENT_REDIRECT_URI__'
  }
})

TopicAdminApi(sdk, { axiosConfig: { request: { headers: { Authorization: 'Bearer {access_token}' } } } })
  .getTopicLog( queryParams?: {
             endCreatedAt?: number,
             limit?: number,
             offset?: number,
             senderUserId?: string | null,
             startCreatedAt?: number,
             topicId?: string | null,
             topicIds?: string[],
             userId?: string | null
    })

// return Promise<TopicLogWithPaginationResponse>
```

## GET /chat/v1/admin/config/namespaces/{namespace}

```
import { AccelByte } from '@accelbyte/sdk'
import { ConfigAdminApi } from '@accelbyte/sdk-chat'

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

// return Promise<ConfigResponse>
```

## PUT /chat/v1/admin/config/namespaces/{namespace}

```
import { AccelByte } from '@accelbyte/sdk'
import { ConfigAdminApi } from '@accelbyte/sdk-chat'

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
             ConfigResponse
    })

// return Promise<ConfigResponse>
```

## POST /chat/admin/namespaces/{namespace}/chat/filter

```
import { AccelByte } from '@accelbyte/sdk'
import { TopicAdminApi } from '@accelbyte/sdk-chat'

const sdk = AccelByte.SDK({
  coreConfig: {
    baseURL: '__AGS_DOMAIN__',
    clientId: '__IAM_CLIENT_ID__',
    namespace: '__NAMESPACE__',
    redirectURI: '__IAM_CLIENT_REDIRECT_URI__'
  }
})

TopicAdminApi(sdk, { axiosConfig: { request: { headers: { Authorization: 'Bearer {access_token}' } } } })
  .fetchChatFilter(data: {
             MessageRequest,
             queryParams?: {
             detail?: boolean | null
    })

// return Promise<MessageResultWithAttributes>
```

## DELETE /chat/admin/namespaces/{namespace}/topic/{topic}

```
import { AccelByte } from '@accelbyte/sdk'
import { TopicAdminApi } from '@accelbyte/sdk-chat'

const sdk = AccelByte.SDK({
  coreConfig: {
    baseURL: '__AGS_DOMAIN__',
    clientId: '__IAM_CLIENT_ID__',
    namespace: '__NAMESPACE__',
    redirectURI: '__IAM_CLIENT_REDIRECT_URI__'
  }
})

TopicAdminApi(sdk, { axiosConfig: { request: { headers: { Authorization: 'Bearer {access_token}' } } } })
  .deleteTopic_ByTopic(topic:string)

// return Promise<ActionDeleteTopicResult>
```

## PUT /chat/admin/namespaces/{namespace}/topic/{topic}

```
import { AccelByte } from '@accelbyte/sdk'
import { TopicAdminApi } from '@accelbyte/sdk-chat'

const sdk = AccelByte.SDK({
  coreConfig: {
    baseURL: '__AGS_DOMAIN__',
    clientId: '__IAM_CLIENT_ID__',
    namespace: '__NAMESPACE__',
    redirectURI: '__IAM_CLIENT_REDIRECT_URI__'
  }
})

TopicAdminApi(sdk, { axiosConfig: { request: { headers: { Authorization: 'Bearer {access_token}' } } } })
  .updateTopic_ByTopic(topic:string, data: {
             UpdateTopicParams
    })

// return Promise<CreateTopicResponse>
```

## GET /chat/admin/namespaces/{namespace}/topic/channel

```
import { AccelByte } from '@accelbyte/sdk'
import { TopicAdminApi } from '@accelbyte/sdk-chat'

const sdk = AccelByte.SDK({
  coreConfig: {
    baseURL: '__AGS_DOMAIN__',
    clientId: '__IAM_CLIENT_ID__',
    namespace: '__NAMESPACE__',
    redirectURI: '__IAM_CLIENT_REDIRECT_URI__'
  }
})

TopicAdminApi(sdk, { axiosConfig: { request: { headers: { Authorization: 'Bearer {access_token}' } } } })
  .getTopicChannel( queryParams?: {
             limit?: number,
             offset?: number,
             topicName?: string | null
    })

// return Promise<ChannelTopicWithPaginationResponse>
```

## GET /chat/v1/admin/inbox/namespaces/{namespace}/stats

```
import { AccelByte } from '@accelbyte/sdk'
import { InboxAdminApi } from '@accelbyte/sdk-chat'

const sdk = AccelByte.SDK({
  coreConfig: {
    baseURL: '__AGS_DOMAIN__',
    clientId: '__IAM_CLIENT_ID__',
    namespace: '__NAMESPACE__',
    redirectURI: '__IAM_CLIENT_REDIRECT_URI__'
  }
})

InboxAdminApi(sdk, { axiosConfig: { request: { headers: { Authorization: 'Bearer {access_token}' } } } })
  .getInboxStats( queryParams?: {
             messageId?: string[]
    })

// return Promise<GetInboxStatsResponse>
```

## POST /chat/admin/namespaces/{namespace}/namespace-topic

```
import { AccelByte } from '@accelbyte/sdk'
import { TopicAdminApi } from '@accelbyte/sdk-chat'

const sdk = AccelByte.SDK({
  coreConfig: {
    baseURL: '__AGS_DOMAIN__',
    clientId: '__IAM_CLIENT_ID__',
    namespace: '__NAMESPACE__',
    redirectURI: '__IAM_CLIENT_REDIRECT_URI__'
  }
})

TopicAdminApi(sdk, { axiosConfig: { request: { headers: { Authorization: 'Bearer {access_token}' } } } })
  .createNamespaceTopic(data: {
             CreateNamespaceTopicParams
    })

// return Promise<CreateTopicResponse>
```

## GET /chat/v1/admin/config/namespaces/{namespace}/export

```
import { AccelByte } from '@accelbyte/sdk'
import { ConfigAdminApi } from '@accelbyte/sdk-chat'

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

// return Promise<ConfigExportArray>
```

## POST /chat/v1/admin/config/namespaces/{namespace}/import

```
import { AccelByte } from '@accelbyte/sdk'
import { ConfigAdminApi } from '@accelbyte/sdk-chat'

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

## GET /chat/v1/admin/inbox/namespaces/{namespace}/messages

```
import { AccelByte } from '@accelbyte/sdk'
import { InboxAdminApi } from '@accelbyte/sdk-chat'

const sdk = AccelByte.SDK({
  coreConfig: {
    baseURL: '__AGS_DOMAIN__',
    clientId: '__IAM_CLIENT_ID__',
    namespace: '__NAMESPACE__',
    redirectURI: '__IAM_CLIENT_REDIRECT_URI__'
  }
})

InboxAdminApi(sdk, { axiosConfig: { request: { headers: { Authorization: 'Bearer {access_token}' } } } })
  .getInboxMessages( queryParams?: {
             activeOnly?: boolean | null,
             endCreatedAt?: number,
             limit?: number,
             messageId?: string[],
             offset?: number,
             order?: string | null,
             scope?: 'NAMESPACE' | 'USER',
             startCreatedAt?: number,
             status?: 'DRAFT' | 'SENT' | 'UNSENT',
             transient?: boolean | null
    })

// return Promise<GetInboxMessagesResponse>
```

## POST /chat/v1/admin/inbox/namespaces/{namespace}/messages

```
import { AccelByte } from '@accelbyte/sdk'
import { InboxAdminApi } from '@accelbyte/sdk-chat'

const sdk = AccelByte.SDK({
  coreConfig: {
    baseURL: '__AGS_DOMAIN__',
    clientId: '__IAM_CLIENT_ID__',
    namespace: '__NAMESPACE__',
    redirectURI: '__IAM_CLIENT_REDIRECT_URI__'
  }
})

InboxAdminApi(sdk, { axiosConfig: { request: { headers: { Authorization: 'Bearer {access_token}' } } } })
  .createInboxMessage(data: {
             SaveInboxMessageRequest
    })

// return Promise<SaveInboxMessageResponse>
```

## GET /chat/admin/namespaces/{namespace}/topic/{topic}/chats

```
import { AccelByte } from '@accelbyte/sdk'
import { TopicAdminApi } from '@accelbyte/sdk-chat'

const sdk = AccelByte.SDK({
  coreConfig: {
    baseURL: '__AGS_DOMAIN__',
    clientId: '__IAM_CLIENT_ID__',
    namespace: '__NAMESPACE__',
    redirectURI: '__IAM_CLIENT_REDIRECT_URI__'
  }
})

TopicAdminApi(sdk, { axiosConfig: { request: { headers: { Authorization: 'Bearer {access_token}' } } } })
  .getChats_ByTopic(topic:string,  queryParams?: {
             endCreatedAt?: number,
             keyword?: string | null,
             limit?: number,
             offset?: number,
             order?: string | null,
             senderUserId?: string | null,
             shardId?: string | null,
             startCreatedAt?: number,
             unfiltered?: boolean | null
    })

// return Promise<ChatMessageWithPaginationResponse>
```

## POST /chat/admin/namespaces/{namespace}/topic/{topic}/chats

```
import { AccelByte } from '@accelbyte/sdk'
import { TopicAdminApi } from '@accelbyte/sdk-chat'

const sdk = AccelByte.SDK({
  coreConfig: {
    baseURL: '__AGS_DOMAIN__',
    clientId: '__IAM_CLIENT_ID__',
    namespace: '__NAMESPACE__',
    redirectURI: '__IAM_CLIENT_REDIRECT_URI__'
  }
})

TopicAdminApi(sdk, { axiosConfig: { request: { headers: { Authorization: 'Bearer {access_token}' } } } })
  .updateChat_ByTopic(topic:string, data: {
             SendChatParams
    })

// return Promise<ChatMessageResponseArray>
```

## GET /chat/v1/admin/inbox/namespaces/{namespace}/categories

```
import { AccelByte } from '@accelbyte/sdk'
import { InboxAdminApi } from '@accelbyte/sdk-chat'

const sdk = AccelByte.SDK({
  coreConfig: {
    baseURL: '__AGS_DOMAIN__',
    clientId: '__IAM_CLIENT_ID__',
    namespace: '__NAMESPACE__',
    redirectURI: '__IAM_CLIENT_REDIRECT_URI__'
  }
})

InboxAdminApi(sdk, { axiosConfig: { request: { headers: { Authorization: 'Bearer {access_token}' } } } })
  .getInboxCategories()

// return Promise<GetInboxCategoriesResponseItemArray>
```

## POST /chat/v1/admin/inbox/namespaces/{namespace}/categories

```
import { AccelByte } from '@accelbyte/sdk'
import { InboxAdminApi } from '@accelbyte/sdk-chat'

const sdk = AccelByte.SDK({
  coreConfig: {
    baseURL: '__AGS_DOMAIN__',
    clientId: '__IAM_CLIENT_ID__',
    namespace: '__NAMESPACE__',
    redirectURI: '__IAM_CLIENT_REDIRECT_URI__'
  }
})

InboxAdminApi(sdk, { axiosConfig: { request: { headers: { Authorization: 'Bearer {access_token}' } } } })
  .createInboxCategory(data: {
             AddInboxCategoryRequest
    })

// return Promise<AddInboxCategoryResponse>
```

## GET /chat/admin/namespaces/{namespace}/topic/{topic}/shards

```
import { AccelByte } from '@accelbyte/sdk'
import { TopicAdminApi } from '@accelbyte/sdk-chat'

const sdk = AccelByte.SDK({
  coreConfig: {
    baseURL: '__AGS_DOMAIN__',
    clientId: '__IAM_CLIENT_ID__',
    namespace: '__NAMESPACE__',
    redirectURI: '__IAM_CLIENT_REDIRECT_URI__'
  }
})

TopicAdminApi(sdk, { axiosConfig: { request: { headers: { Authorization: 'Bearer {access_token}' } } } })
  .getShards_ByTopic(topic:string)

// return Promise
```

## DELETE /chat/v1/admin/namespaces/{namespace}/snapshot/{chatId}

```
import { AccelByte } from '@accelbyte/sdk'
import { ModerationAdminApi } from '@accelbyte/sdk-chat'

const sdk = AccelByte.SDK({
  coreConfig: {
    baseURL: '__AGS_DOMAIN__',
    clientId: '__IAM_CLIENT_ID__',
    namespace: '__NAMESPACE__',
    redirectURI: '__IAM_CLIENT_REDIRECT_URI__'
  }
})

ModerationAdminApi(sdk, { axiosConfig: { request: { headers: { Authorization: 'Bearer {access_token}' } } } })
  .deleteSnapshot_ByChatId(chatId:string)

// return Promise
```

## GET /chat/v1/admin/namespaces/{namespace}/snapshot/{chatId}

```
import { AccelByte } from '@accelbyte/sdk'
import { ModerationAdminApi } from '@accelbyte/sdk-chat'

const sdk = AccelByte.SDK({
  coreConfig: {
    baseURL: '__AGS_DOMAIN__',
    clientId: '__IAM_CLIENT_ID__',
    namespace: '__NAMESPACE__',
    redirectURI: '__IAM_CLIENT_REDIRECT_URI__'
  }
})

ModerationAdminApi(sdk, { axiosConfig: { request: { headers: { Authorization: 'Bearer {access_token}' } } } })
  .getSnapshot_ByChatId(chatId:string)

// return Promise<ChatSnapshots>
```

## GET /chat/admin/namespaces/{namespace}/topic/{topic}/channel

```
import { AccelByte } from '@accelbyte/sdk'
import { TopicAdminApi } from '@accelbyte/sdk-chat'

const sdk = AccelByte.SDK({
  coreConfig: {
    baseURL: '__AGS_DOMAIN__',
    clientId: '__IAM_CLIENT_ID__',
    namespace: '__NAMESPACE__',
    redirectURI: '__IAM_CLIENT_REDIRECT_URI__'
  }
})

TopicAdminApi(sdk, { axiosConfig: { request: { headers: { Authorization: 'Bearer {access_token}' } } } })
  .getChannel_ByTopic(topic:string)

// return Promise<ChannelTopicResponse>
```

## GET /chat/admin/namespaces/{namespace}/topic/{topic}/members

```
import { AccelByte } from '@accelbyte/sdk'
import { TopicAdminApi } from '@accelbyte/sdk-chat'

const sdk = AccelByte.SDK({
  coreConfig: {
    baseURL: '__AGS_DOMAIN__',
    clientId: '__IAM_CLIENT_ID__',
    namespace: '__NAMESPACE__',
    redirectURI: '__IAM_CLIENT_REDIRECT_URI__'
  }
})

TopicAdminApi(sdk, { axiosConfig: { request: { headers: { Authorization: 'Bearer {access_token}' } } } })
  .getMembers_ByTopic(topic:string,  queryParams?: {
             isBanned?: boolean | null,
             isModerator?: boolean | null,
             limit?: number,
             offset?: number,
             shardId?: string | null
    })

// return Promise<TopicMemberWithPaginationResponse>
```

## GET /chat/admin/namespaces/{namespace}/topic/channel/summary

```
import { AccelByte } from '@accelbyte/sdk'
import { TopicAdminApi } from '@accelbyte/sdk-chat'

const sdk = AccelByte.SDK({
  coreConfig: {
    baseURL: '__AGS_DOMAIN__',
    clientId: '__IAM_CLIENT_ID__',
    namespace: '__NAMESPACE__',
    redirectURI: '__IAM_CLIENT_REDIRECT_URI__'
  }
})

TopicAdminApi(sdk, { axiosConfig: { request: { headers: { Authorization: 'Bearer {access_token}' } } } })
  .getTopicChannelSummary()

// return Promise<ChannelTopicSummaryResponse>
```

## GET /chat/admin/namespaces/{namespace}/users/{userId}/topics

```
import { AccelByte } from '@accelbyte/sdk'
import { TopicAdminApi } from '@accelbyte/sdk-chat'

const sdk = AccelByte.SDK({
  coreConfig: {
    baseURL: '__AGS_DOMAIN__',
    clientId: '__IAM_CLIENT_ID__',
    namespace: '__NAMESPACE__',
    redirectURI: '__IAM_CLIENT_REDIRECT_URI__'
  }
})

TopicAdminApi(sdk, { axiosConfig: { request: { headers: { Authorization: 'Bearer {access_token}' } } } })
  .getTopics_ByUserId(userId:string,  queryParams?: {
             includePastTopics?: boolean | null,
             limit?: number,
             offset?: number,
             topicSubType?: 'CLAN' | 'NAMESPACE' | 'NORMAL' | 'PARTY' | 'SESSION',
             topicType?: 'GROUP' | 'PERSONAL'
    })

// return Promise<TopicLogWithPaginationResponse>
```

## GET /chat/v1/admin/profanity/namespaces/{namespace}/dictionary

```
import { AccelByte } from '@accelbyte/sdk'
import { ProfanityAdminApi } from '@accelbyte/sdk-chat'

const sdk = AccelByte.SDK({
  coreConfig: {
    baseURL: '__AGS_DOMAIN__',
    clientId: '__IAM_CLIENT_ID__',
    namespace: '__NAMESPACE__',
    redirectURI: '__IAM_CLIENT_REDIRECT_URI__'
  }
})

ProfanityAdminApi(sdk, { axiosConfig: { request: { headers: { Authorization: 'Bearer {access_token}' } } } })
  .getProfanityDictionary( queryParams?: {
             filterMask?: string | null,
             includeChildren?: boolean | null,
             limit?: number,
             offset?: number,
             parentId?: string | null,
             startWith?: string | null,
             wordType?: string | null
    })

// return Promise<DictionaryQueryResult>
```

## POST /chat/v1/admin/profanity/namespaces/{namespace}/dictionary

```
import { AccelByte } from '@accelbyte/sdk'
import { ProfanityAdminApi } from '@accelbyte/sdk-chat'

const sdk = AccelByte.SDK({
  coreConfig: {
    baseURL: '__AGS_DOMAIN__',
    clientId: '__IAM_CLIENT_ID__',
    namespace: '__NAMESPACE__',
    redirectURI: '__IAM_CLIENT_REDIRECT_URI__'
  }
})

ProfanityAdminApi(sdk, { axiosConfig: { request: { headers: { Authorization: 'Bearer {access_token}' } } } })
  .createProfanityDictionary(data: {
             DictionaryInsertRequest
    })

// return Promise<Dictionary>
```

## POST /chat/admin/namespaces/{namespace}/topic/{topic}/ban-members

```
import { AccelByte } from '@accelbyte/sdk'
import { TopicAdminApi } from '@accelbyte/sdk-chat'

const sdk = AccelByte.SDK({
  coreConfig: {
    baseURL: '__AGS_DOMAIN__',
    clientId: '__IAM_CLIENT_ID__',
    namespace: '__NAMESPACE__',
    redirectURI: '__IAM_CLIENT_REDIRECT_URI__'
  }
})

TopicAdminApi(sdk, { axiosConfig: { request: { headers: { Authorization: 'Bearer {access_token}' } } } })
  .updateBanMember_ByTopic(topic:string, data: {
             BanTopicMemberParam
    })

// return Promise<BanTopicMemberResult>
```

## POST /chat/admin/namespaces/{namespace}/topic/{topic}/unban-members

```
import { AccelByte } from '@accelbyte/sdk'
import { TopicAdminApi } from '@accelbyte/sdk-chat'

const sdk = AccelByte.SDK({
  coreConfig: {
    baseURL: '__AGS_DOMAIN__',
    clientId: '__IAM_CLIENT_ID__',
    namespace: '__NAMESPACE__',
    redirectURI: '__IAM_CLIENT_REDIRECT_URI__'
  }
})

TopicAdminApi(sdk, { axiosConfig: { request: { headers: { Authorization: 'Bearer {access_token}' } } } })
  .updateUnbanMember_ByTopic(topic:string, data: {
             UnbanTopicMemberParam
    })

// return Promise<UnbanTopicMemberResult>
```

## DELETE /chat/admin/namespaces/{namespace}/topic/{topic}/user/{userId}

```
import { AccelByte } from '@accelbyte/sdk'
import { TopicAdminApi } from '@accelbyte/sdk-chat'

const sdk = AccelByte.SDK({
  coreConfig: {
    baseURL: '__AGS_DOMAIN__',
    clientId: '__IAM_CLIENT_ID__',
    namespace: '__NAMESPACE__',
    redirectURI: '__IAM_CLIENT_REDIRECT_URI__'
  }
})

TopicAdminApi(sdk, { axiosConfig: { request: { headers: { Authorization: 'Bearer {access_token}' } } } })
  .deleteUser_ByTopic_ByUserId(topic:string, userId:string)

// return Promise<ActionAddUserToTopicResult>
```

## POST /chat/admin/namespaces/{namespace}/topic/{topic}/user/{userId}

```
import { AccelByte } from '@accelbyte/sdk'
import { TopicAdminApi } from '@accelbyte/sdk-chat'

const sdk = AccelByte.SDK({
  coreConfig: {
    baseURL: '__AGS_DOMAIN__',
    clientId: '__IAM_CLIENT_ID__',
    namespace: '__NAMESPACE__',
    redirectURI: '__IAM_CLIENT_REDIRECT_URI__'
  }
})

TopicAdminApi(sdk, { axiosConfig: { request: { headers: { Authorization: 'Bearer {access_token}' } } } })
  .updateUser_ByTopic_ByUserId(topic:string, userId:string, data: {
             AddMemberParams
    })

// return Promise<ActionAddUserToTopicResult>
```

## DELETE /chat/admin/namespaces/{namespace}/topic/{topic}/chats/{chatId}

```
import { AccelByte } from '@accelbyte/sdk'
import { TopicAdminApi } from '@accelbyte/sdk-chat'

const sdk = AccelByte.SDK({
  coreConfig: {
    baseURL: '__AGS_DOMAIN__',
    clientId: '__IAM_CLIENT_ID__',
    namespace: '__NAMESPACE__',
    redirectURI: '__IAM_CLIENT_REDIRECT_URI__'
  }
})

TopicAdminApi(sdk, { axiosConfig: { request: { headers: { Authorization: 'Bearer {access_token}' } } } })
  .deleteChat_ByTopic_ByChatId(topic:string, chatId:string)

// return Promise
```

## DELETE /chat/v1/admin/inbox/namespaces/{namespace}/message/{messageId}

```
import { AccelByte } from '@accelbyte/sdk'
import { InboxAdminApi } from '@accelbyte/sdk-chat'

const sdk = AccelByte.SDK({
  coreConfig: {
    baseURL: '__AGS_DOMAIN__',
    clientId: '__IAM_CLIENT_ID__',
    namespace: '__NAMESPACE__',
    redirectURI: '__IAM_CLIENT_REDIRECT_URI__'
  }
})

InboxAdminApi(sdk, { axiosConfig: { request: { headers: { Authorization: 'Bearer {access_token}' } } } })
  .deleteInboxMessage_ByMessageId(messageId:string,  queryParams?: {
             force?: boolean | null
    })

// return Promise
```

## DELETE /chat/v1/admin/profanity/namespaces/{namespace}/dictionary/{id}

```
import { AccelByte } from '@accelbyte/sdk'
import { ProfanityAdminApi } from '@accelbyte/sdk-chat'

const sdk = AccelByte.SDK({
  coreConfig: {
    baseURL: '__AGS_DOMAIN__',
    clientId: '__IAM_CLIENT_ID__',
    namespace: '__NAMESPACE__',
    redirectURI: '__IAM_CLIENT_REDIRECT_URI__'
  }
})

ProfanityAdminApi(sdk, { axiosConfig: { request: { headers: { Authorization: 'Bearer {access_token}' } } } })
  .deleteProfanityDictionary_ById(id:string)

// return Promise
```

## PUT /chat/v1/admin/profanity/namespaces/{namespace}/dictionary/{id}

```
import { AccelByte } from '@accelbyte/sdk'
import { ProfanityAdminApi } from '@accelbyte/sdk-chat'

const sdk = AccelByte.SDK({
  coreConfig: {
    baseURL: '__AGS_DOMAIN__',
    clientId: '__IAM_CLIENT_ID__',
    namespace: '__NAMESPACE__',
    redirectURI: '__IAM_CLIENT_REDIRECT_URI__'
  }
})

ProfanityAdminApi(sdk, { axiosConfig: { request: { headers: { Authorization: 'Bearer {access_token}' } } } })
  .updateProfanityDictionary_ById(id:string, data: {
             DictionaryUpdateRequest
    })

// return Promise<Dictionary>
```

## POST /chat/v1/admin/profanity/namespaces/{namespace}/dictionary/bulk

```
import { AccelByte } from '@accelbyte/sdk'
import { ProfanityAdminApi } from '@accelbyte/sdk-chat'

const sdk = AccelByte.SDK({
  coreConfig: {
    baseURL: '__AGS_DOMAIN__',
    clientId: '__IAM_CLIENT_ID__',
    namespace: '__NAMESPACE__',
    redirectURI: '__IAM_CLIENT_REDIRECT_URI__'
  }
})

ProfanityAdminApi(sdk, { axiosConfig: { request: { headers: { Authorization: 'Bearer {access_token}' } } } })
  .createProfanityDictionaryBulk(data: {
             DictionaryInsertBulkRequest
    })

// return Promise<Dictionary>
```

## PATCH /chat/v1/admin/inbox/namespaces/{namespace}/messages/{messageId}

```
import { AccelByte } from '@accelbyte/sdk'
import { InboxAdminApi } from '@accelbyte/sdk-chat'

const sdk = AccelByte.SDK({
  coreConfig: {
    baseURL: '__AGS_DOMAIN__',
    clientId: '__IAM_CLIENT_ID__',
    namespace: '__NAMESPACE__',
    redirectURI: '__IAM_CLIENT_REDIRECT_URI__'
  }
})

InboxAdminApi(sdk, { axiosConfig: { request: { headers: { Authorization: 'Bearer {access_token}' } } } })
  .patchInboxMessage_ByMessageId(messageId:string, data: {
             UpdateInboxMessageRequest
    })

// return Promise
```

## GET /chat/v1/admin/profanity/namespaces/{namespace}/dictionary/group

```
import { AccelByte } from '@accelbyte/sdk'
import { ProfanityAdminApi } from '@accelbyte/sdk-chat'

const sdk = AccelByte.SDK({
  coreConfig: {
    baseURL: '__AGS_DOMAIN__',
    clientId: '__IAM_CLIENT_ID__',
    namespace: '__NAMESPACE__',
    redirectURI: '__IAM_CLIENT_REDIRECT_URI__'
  }
})

ProfanityAdminApi(sdk, { axiosConfig: { request: { headers: { Authorization: 'Bearer {access_token}' } } } })
  .getProfanityDictionaryGroup( queryParams?: {
             limit?: number,
             offset?: number
    })

// return Promise<DictionaryGroupArray>
```

## DELETE /chat/v1/admin/inbox/namespaces/{namespace}/categories/{category}

```
import { AccelByte } from '@accelbyte/sdk'
import { InboxAdminApi } from '@accelbyte/sdk-chat'

const sdk = AccelByte.SDK({
  coreConfig: {
    baseURL: '__AGS_DOMAIN__',
    clientId: '__IAM_CLIENT_ID__',
    namespace: '__NAMESPACE__',
    redirectURI: '__IAM_CLIENT_REDIRECT_URI__'
  }
})

InboxAdminApi(sdk, { axiosConfig: { request: { headers: { Authorization: 'Bearer {access_token}' } } } })
  .deleteInboxCategory_ByCategory(category:string)

// return Promise
```

## PATCH /chat/v1/admin/inbox/namespaces/{namespace}/categories/{category}

```
import { AccelByte } from '@accelbyte/sdk'
import { InboxAdminApi } from '@accelbyte/sdk-chat'

const sdk = AccelByte.SDK({
  coreConfig: {
    baseURL: '__AGS_DOMAIN__',
    clientId: '__IAM_CLIENT_ID__',
    namespace: '__NAMESPACE__',
    redirectURI: '__IAM_CLIENT_REDIRECT_URI__'
  }
})

InboxAdminApi(sdk, { axiosConfig: { request: { headers: { Authorization: 'Bearer {access_token}' } } } })
  .patchInboxCategory_ByCategory(category:string, data: {
             UpdateInboxCategoryRequest
    })

// return Promise
```

## GET /chat/v1/admin/profanity/namespaces/{namespace}/dictionary/export

```
import { AccelByte } from '@accelbyte/sdk'
import { ProfanityAdminApi } from '@accelbyte/sdk-chat'

const sdk = AccelByte.SDK({
  coreConfig: {
    baseURL: '__AGS_DOMAIN__',
    clientId: '__IAM_CLIENT_ID__',
    namespace: '__NAMESPACE__',
    redirectURI: '__IAM_CLIENT_REDIRECT_URI__'
  }
})

ProfanityAdminApi(sdk, { axiosConfig: { request: { headers: { Authorization: 'Bearer {access_token}' } } } })
  .getProfanityDictionaryExport()

// return Promise<DictionaryExport>
```

## POST /chat/v1/admin/profanity/namespaces/{namespace}/dictionary/import

```
import { AccelByte } from '@accelbyte/sdk'
import { ProfanityAdminApi } from '@accelbyte/sdk-chat'

const sdk = AccelByte.SDK({
  coreConfig: {
    baseURL: '__AGS_DOMAIN__',
    clientId: '__IAM_CLIENT_ID__',
    namespace: '__NAMESPACE__',
    redirectURI: '__IAM_CLIENT_REDIRECT_URI__'
  }
})

ProfanityAdminApi(sdk, { axiosConfig: { request: { headers: { Authorization: 'Bearer {access_token}' } } } })
  .createProfanityDictionaryImport(data: {
             file: File},
             queryParams?: {
             action?: 'FULLREPLACE' | 'LEAVEOUT' | 'REPLACE',
             showResult?: boolean | null
    })

// return Promise<DictionaryImportResult>
```

## GET /chat/v1/admin/inbox/namespaces/{namespace}/messages/{inbox}/users

```
import { AccelByte } from '@accelbyte/sdk'
import { InboxAdminApi } from '@accelbyte/sdk-chat'

const sdk = AccelByte.SDK({
  coreConfig: {
    baseURL: '__AGS_DOMAIN__',
    clientId: '__IAM_CLIENT_ID__',
    namespace: '__NAMESPACE__',
    redirectURI: '__IAM_CLIENT_REDIRECT_URI__'
  }
})

InboxAdminApi(sdk, { axiosConfig: { request: { headers: { Authorization: 'Bearer {access_token}' } } } })
  .getUsersInbox_ByInbox(inbox:string,  queryParams?: {
             limit?: number,
             offset?: number,
             status?: 'READ' | 'UNREAD',
             userId?: string | null
    })

// return Promise<GetInboxUsersResponse>
```

## POST /chat/v1/admin/inbox/namespaces/{namespace}/messages/{inbox}/unsend

```
import { AccelByte } from '@accelbyte/sdk'
import { InboxAdminApi } from '@accelbyte/sdk-chat'

const sdk = AccelByte.SDK({
  coreConfig: {
    baseURL: '__AGS_DOMAIN__',
    clientId: '__IAM_CLIENT_ID__',
    namespace: '__NAMESPACE__',
    redirectURI: '__IAM_CLIENT_REDIRECT_URI__'
  }
})

InboxAdminApi(sdk, { axiosConfig: { request: { headers: { Authorization: 'Bearer {access_token}' } } } })
  .updateUnsendInbox_ByInbox(inbox:string, data: {
             UnsendInboxMessageRequest
    })

// return Promise<UnsendInboxMessageResponse>
```

## POST /chat/v1/admin/inbox/namespaces/{namespace}/messages/{messageId}/send

```
import { AccelByte } from '@accelbyte/sdk'
import { InboxAdminApi } from '@accelbyte/sdk-chat'

const sdk = AccelByte.SDK({
  coreConfig: {
    baseURL: '__AGS_DOMAIN__',
    clientId: '__IAM_CLIENT_ID__',
    namespace: '__NAMESPACE__',
    redirectURI: '__IAM_CLIENT_REDIRECT_URI__'
  }
})

InboxAdminApi(sdk, { axiosConfig: { request: { headers: { Authorization: 'Bearer {access_token}' } } } })
  .updateSendInbox_ByMessageId(messageId:string, data: {
             SendInboxMessageRequest
    })

// return Promise<SendInboxMessageResponse>
```

## GET /chat/v1/admin/inbox/namespaces/{namespace}/categories/{category}/schema.json

```
import { AccelByte } from '@accelbyte/sdk'
import { InboxAdminApi } from '@accelbyte/sdk-chat'

const sdk = AccelByte.SDK({
  coreConfig: {
    baseURL: '__AGS_DOMAIN__',
    clientId: '__IAM_CLIENT_ID__',
    namespace: '__NAMESPACE__',
    redirectURI: '__IAM_CLIENT_REDIRECT_URI__'
  }
})

InboxAdminApi(sdk, { axiosConfig: { request: { headers: { Authorization: 'Bearer {access_token}' } } } })
  .getSchemaJsonInbox_ByCategory(category:string)

// return Promise<JsonSchemaType>
```