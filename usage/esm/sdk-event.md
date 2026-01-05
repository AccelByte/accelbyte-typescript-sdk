## GET /event/descriptions/ux

```
import { AccelByte } from '@accelbyte/sdk'
import { EventDescriptionsApi } from '@accelbyte/sdk-event'

const sdk = AccelByte.SDK({
  coreConfig: {
    baseURL: '__AGS_DOMAIN__',
    clientId: '__IAM_CLIENT_ID__',
    namespace: '__NAMESPACE__',
    redirectURI: '__IAM_CLIENT_REDIRECT_URI__'
  }
})

EventDescriptionsApi(sdk)
  .getDescriptionsUx()

// return Promise<MultipleUx>
```

## GET /event/registry/eventIds

```
import { AccelByte } from '@accelbyte/sdk'
import { EventRegistryApi } from '@accelbyte/sdk-event'

const sdk = AccelByte.SDK({
  coreConfig: {
    baseURL: '__AGS_DOMAIN__',
    clientId: '__IAM_CLIENT_ID__',
    namespace: '__NAMESPACE__',
    redirectURI: '__IAM_CLIENT_REDIRECT_URI__'
  }
})

EventRegistryApi(sdk)
  .getRegistryEventIds()

// return Promise<EventRegistry>
```

## POST /event/registry/eventIds

```
import { AccelByte } from '@accelbyte/sdk'
import { EventRegistryApi } from '@accelbyte/sdk-event'

const sdk = AccelByte.SDK({
  coreConfig: {
    baseURL: '__AGS_DOMAIN__',
    clientId: '__IAM_CLIENT_ID__',
    namespace: '__NAMESPACE__',
    redirectURI: '__IAM_CLIENT_REDIRECT_URI__'
  }
})

EventRegistryApi(sdk)
  .createRegistryEventId(data: {
             EventRegistry
    })

// return Promise
```

## GET /event/descriptions/eventId

```
import { AccelByte } from '@accelbyte/sdk'
import { EventDescriptionsApi } from '@accelbyte/sdk-event'

const sdk = AccelByte.SDK({
  coreConfig: {
    baseURL: '__AGS_DOMAIN__',
    clientId: '__IAM_CLIENT_ID__',
    namespace: '__NAMESPACE__',
    redirectURI: '__IAM_CLIENT_REDIRECT_URI__'
  }
})

EventDescriptionsApi(sdk)
  .getDescriptionsEventId()

// return Promise<MultipleEventId>
```

## GET /event/descriptions/agentType

```
import { AccelByte } from '@accelbyte/sdk'
import { EventDescriptionsApi } from '@accelbyte/sdk-event'

const sdk = AccelByte.SDK({
  coreConfig: {
    baseURL: '__AGS_DOMAIN__',
    clientId: '__IAM_CLIENT_ID__',
    namespace: '__NAMESPACE__',
    redirectURI: '__IAM_CLIENT_REDIRECT_URI__'
  }
})

EventDescriptionsApi(sdk)
  .getDescriptionsAgentType()

// return Promise<MultipleAgentType>
```

## GET /event/descriptions/eventType

```
import { AccelByte } from '@accelbyte/sdk'
import { EventDescriptionsApi } from '@accelbyte/sdk-event'

const sdk = AccelByte.SDK({
  coreConfig: {
    baseURL: '__AGS_DOMAIN__',
    clientId: '__IAM_CLIENT_ID__',
    namespace: '__NAMESPACE__',
    redirectURI: '__IAM_CLIENT_REDIRECT_URI__'
  }
})

EventDescriptionsApi(sdk)
  .getDescriptionsEventType()

// return Promise<MultipleEventType>
```

## GET /event/namespaces/{namespace}

```
import { AccelByte } from '@accelbyte/sdk'
import { EventApi } from '@accelbyte/sdk-event'

const sdk = AccelByte.SDK({
  coreConfig: {
    baseURL: '__AGS_DOMAIN__',
    clientId: '__IAM_CLIENT_ID__',
    namespace: '__NAMESPACE__',
    redirectURI: '__IAM_CLIENT_REDIRECT_URI__'
  }
})

EventApi(sdk)
  .getNamespace_ByNamespace( queryParams: {
             endDate: string | null,
             pageSize: number,
             startDate: string | null,
             offset?: number
    })

// return Promise<EventResponse>
```

## POST /event/namespaces/{namespace}

```
import { AccelByte } from '@accelbyte/sdk'
import { EventApi } from '@accelbyte/sdk-event'

const sdk = AccelByte.SDK({
  coreConfig: {
    baseURL: '__AGS_DOMAIN__',
    clientId: '__IAM_CLIENT_ID__',
    namespace: '__NAMESPACE__',
    redirectURI: '__IAM_CLIENT_REDIRECT_URI__'
  }
})

EventApi(sdk)
  .createNamespace_ByNamespace(data: {
             Event
    })

// return Promise
```

## GET /event/descriptions/eventLevel

```
import { AccelByte } from '@accelbyte/sdk'
import { EventDescriptionsApi } from '@accelbyte/sdk-event'

const sdk = AccelByte.SDK({
  coreConfig: {
    baseURL: '__AGS_DOMAIN__',
    clientId: '__IAM_CLIENT_ID__',
    namespace: '__NAMESPACE__',
    redirectURI: '__IAM_CLIENT_REDIRECT_URI__'
  }
})

EventDescriptionsApi(sdk)
  .getDescriptionsEventLevel()

// return Promise<MultipleEventLevel>
```

## GET /event/descriptions/ux/listByUx

```
import { AccelByte } from '@accelbyte/sdk'
import { EventDescriptionsApi } from '@accelbyte/sdk-event'

const sdk = AccelByte.SDK({
  coreConfig: {
    baseURL: '__AGS_DOMAIN__',
    clientId: '__IAM_CLIENT_ID__',
    namespace: '__NAMESPACE__',
    redirectURI: '__IAM_CLIENT_REDIRECT_URI__'
  }
})

EventDescriptionsApi(sdk)
  .getDescriptionsUxListByUx( queryParams?: {
             ux?: string | null
    })

// return Promise<MultipleUx>
```

## DELETE /event/registry/eventIds/{eventId}

```
import { AccelByte } from '@accelbyte/sdk'
import { EventRegistryApi } from '@accelbyte/sdk-event'

const sdk = AccelByte.SDK({
  coreConfig: {
    baseURL: '__AGS_DOMAIN__',
    clientId: '__IAM_CLIENT_ID__',
    namespace: '__NAMESPACE__',
    redirectURI: '__IAM_CLIENT_REDIRECT_URI__'
  }
})

EventRegistryApi(sdk)
  .deleteRegistryEventId_ByEventId(eventId:string)

// return Promise
```

## GET /event/registry/eventIds/{eventId}

```
import { AccelByte } from '@accelbyte/sdk'
import { EventRegistryApi } from '@accelbyte/sdk-event'

const sdk = AccelByte.SDK({
  coreConfig: {
    baseURL: '__AGS_DOMAIN__',
    clientId: '__IAM_CLIENT_ID__',
    namespace: '__NAMESPACE__',
    redirectURI: '__IAM_CLIENT_REDIRECT_URI__'
  }
})

EventRegistryApi(sdk)
  .getRegistryEventId_ByEventId(eventId:string)

// return Promise<EventRegistry>
```

## POST /event/registry/eventIds/{eventId}

```
import { AccelByte } from '@accelbyte/sdk'
import { EventRegistryApi } from '@accelbyte/sdk-event'

const sdk = AccelByte.SDK({
  coreConfig: {
    baseURL: '__AGS_DOMAIN__',
    clientId: '__IAM_CLIENT_ID__',
    namespace: '__NAMESPACE__',
    redirectURI: '__IAM_CLIENT_REDIRECT_URI__'
  }
})

EventRegistryApi(sdk)
  .createRegistryEventId_ByEventId(eventId:string, data: {
             EventRegistry
    })

// return Promise
```

## GET /event/registry/eventTypes/{eventType}

```
import { AccelByte } from '@accelbyte/sdk'
import { EventRegistryApi } from '@accelbyte/sdk-event'

const sdk = AccelByte.SDK({
  coreConfig: {
    baseURL: '__AGS_DOMAIN__',
    clientId: '__IAM_CLIENT_ID__',
    namespace: '__NAMESPACE__',
    redirectURI: '__IAM_CLIENT_REDIRECT_URI__'
  }
})

EventRegistryApi(sdk)
  .getRegistryEventType_ByEventType(eventType:string)

// return Promise<EventRegistry>
```

## GET /event/descriptions/eventId/listByEventIds

```
import { AccelByte } from '@accelbyte/sdk'
import { EventDescriptionsApi } from '@accelbyte/sdk-event'

const sdk = AccelByte.SDK({
  coreConfig: {
    baseURL: '__AGS_DOMAIN__',
    clientId: '__IAM_CLIENT_ID__',
    namespace: '__NAMESPACE__',
    redirectURI: '__IAM_CLIENT_REDIRECT_URI__'
  }
})

EventDescriptionsApi(sdk)
  .getDescriptionsEventIdListByEventIds( queryParams?: {
             eventIds?: string | null
    })

// return Promise<MultipleEventId>
```

## GET /event/namespaces/{namespace}/users/{userId}

```
import { AccelByte } from '@accelbyte/sdk'
import { EventApi } from '@accelbyte/sdk-event'

const sdk = AccelByte.SDK({
  coreConfig: {
    baseURL: '__AGS_DOMAIN__',
    clientId: '__IAM_CLIENT_ID__',
    namespace: '__NAMESPACE__',
    redirectURI: '__IAM_CLIENT_REDIRECT_URI__'
  }
})

EventApi(sdk)
  .getUser_ByUserId(userId:string,  queryParams: {
             endDate: string | null,
             pageSize: number,
             startDate: string | null,
             offset?: number
    })

// return Promise<EventResponse>
```

## GET /event/descriptions/agentType/listByAgentTypes

```
import { AccelByte } from '@accelbyte/sdk'
import { EventDescriptionsApi } from '@accelbyte/sdk-event'

const sdk = AccelByte.SDK({
  coreConfig: {
    baseURL: '__AGS_DOMAIN__',
    clientId: '__IAM_CLIENT_ID__',
    namespace: '__NAMESPACE__',
    redirectURI: '__IAM_CLIENT_REDIRECT_URI__'
  }
})

EventDescriptionsApi(sdk)
  .getDescriptionsAgentTypeListByAgentTypes( queryParams?: {
             agentTypes?: string | null
    })

// return Promise<MultipleAgentType>
```

## GET /event/descriptions/eventType/listByEventTypes

```
import { AccelByte } from '@accelbyte/sdk'
import { EventDescriptionsApi } from '@accelbyte/sdk-event'

const sdk = AccelByte.SDK({
  coreConfig: {
    baseURL: '__AGS_DOMAIN__',
    clientId: '__IAM_CLIENT_ID__',
    namespace: '__NAMESPACE__',
    redirectURI: '__IAM_CLIENT_REDIRECT_URI__'
  }
})

EventDescriptionsApi(sdk)
  .getDescriptionsEventTypeListByEventTypes( queryParams?: {
             eventTypes?: string | null
    })

// return Promise<MultipleEventType>
```

## GET /event/namespaces/{namespace}/eventId/{eventId}

```
import { AccelByte } from '@accelbyte/sdk'
import { EventApi } from '@accelbyte/sdk-event'

const sdk = AccelByte.SDK({
  coreConfig: {
    baseURL: '__AGS_DOMAIN__',
    clientId: '__IAM_CLIENT_ID__',
    namespace: '__NAMESPACE__',
    redirectURI: '__IAM_CLIENT_REDIRECT_URI__'
  }
})

EventApi(sdk)
  .getEventId_ByEventId(eventId:number,  queryParams: {
             endDate: string | null,
             pageSize: number,
             startDate: string | null,
             offset?: number
    })

// return Promise<EventResponse>
```

## GET /event/descriptions/eventLevel/listByEventLevels

```
import { AccelByte } from '@accelbyte/sdk'
import { EventDescriptionsApi } from '@accelbyte/sdk-event'

const sdk = AccelByte.SDK({
  coreConfig: {
    baseURL: '__AGS_DOMAIN__',
    clientId: '__IAM_CLIENT_ID__',
    namespace: '__NAMESPACE__',
    redirectURI: '__IAM_CLIENT_REDIRECT_URI__'
  }
})

EventDescriptionsApi(sdk)
  .getDescriptionsEventLevelListByEventLevels( queryParams?: {
             eventLevels?: string | null
    })

// return Promise<MultipleEventLevel>
```

## GET /event/namespaces/{namespace}/eventType/{eventType}

```
import { AccelByte } from '@accelbyte/sdk'
import { EventApi } from '@accelbyte/sdk-event'

const sdk = AccelByte.SDK({
  coreConfig: {
    baseURL: '__AGS_DOMAIN__',
    clientId: '__IAM_CLIENT_ID__',
    namespace: '__NAMESPACE__',
    redirectURI: '__IAM_CLIENT_REDIRECT_URI__'
  }
})

EventApi(sdk)
  .getEventType_ByEventType(eventType:number,  queryParams: {
             endDate: string | null,
             pageSize: number,
             startDate: string | null,
             offset?: number
    })

// return Promise<EventResponse>
```

## DELETE /event/namespaces/{namespace}/users/{userId}/activities

```
import { AccelByte } from '@accelbyte/sdk'
import { UserInformationApi } from '@accelbyte/sdk-event'

const sdk = AccelByte.SDK({
  coreConfig: {
    baseURL: '__AGS_DOMAIN__',
    clientId: '__IAM_CLIENT_ID__',
    namespace: '__NAMESPACE__',
    redirectURI: '__IAM_CLIENT_REDIRECT_URI__'
  }
})

UserInformationApi(sdk)
  .deleteActivity_ByUserId(userId:string)

// return Promise
```

## GET /event/namespaces/{namespace}/users/{userId}/activities

```
import { AccelByte } from '@accelbyte/sdk'
import { UserInformationApi } from '@accelbyte/sdk-event'

const sdk = AccelByte.SDK({
  coreConfig: {
    baseURL: '__AGS_DOMAIN__',
    clientId: '__IAM_CLIENT_ID__',
    namespace: '__NAMESPACE__',
    redirectURI: '__IAM_CLIENT_REDIRECT_URI__'
  }
})

UserInformationApi(sdk)
  .getActivities_ByUserId(userId:string,  queryParams: {
             pageSize: number,
             offset?: number
    })

// return Promise<EventResponse>
```

## GET /event/v2/public/namespaces/{namespace}/users/{userId}/event

```
import { AccelByte } from '@accelbyte/sdk'
import { EventV2Api } from '@accelbyte/sdk-event'

const sdk = AccelByte.SDK({
  coreConfig: {
    baseURL: '__AGS_DOMAIN__',
    clientId: '__IAM_CLIENT_ID__',
    namespace: '__NAMESPACE__',
    redirectURI: '__IAM_CLIENT_REDIRECT_URI__'
  }
})

EventV2Api(sdk, { axiosConfig: { request: { headers: { Authorization: 'Bearer {access_token}' } } } })
  .getEvent_ByUserId_v2(userId:string,  queryParams?: {
             endDate?: string | null,
             eventName?: string | null,
             offset?: number,
             pageSize?: number,
             startDate?: string | null
    })

// return Promise<EventResponseV2>
```

## GET /event/namespaces/{namespace}/users/{userId}/lastActivityTime

```
import { AccelByte } from '@accelbyte/sdk'
import { UserInformationApi } from '@accelbyte/sdk-event'

const sdk = AccelByte.SDK({
  coreConfig: {
    baseURL: '__AGS_DOMAIN__',
    clientId: '__IAM_CLIENT_ID__',
    namespace: '__NAMESPACE__',
    redirectURI: '__IAM_CLIENT_REDIRECT_URI__'
  }
})

UserInformationApi(sdk)
  .getLastActivityTime_ByUserId(userId:string)

// return Promise<UserLastActivity>
```

## GET /event/namespaces/{namespace}/users/{userId}/eventId/{eventId}

```
import { AccelByte } from '@accelbyte/sdk'
import { EventApi } from '@accelbyte/sdk-event'

const sdk = AccelByte.SDK({
  coreConfig: {
    baseURL: '__AGS_DOMAIN__',
    clientId: '__IAM_CLIENT_ID__',
    namespace: '__NAMESPACE__',
    redirectURI: '__IAM_CLIENT_REDIRECT_URI__'
  }
})

EventApi(sdk)
  .getEventId_ByUserId_ByEventId(userId:string, eventId:number,  queryParams: {
             endDate: string | null,
             pageSize: number,
             startDate: string | null,
             offset?: number
    })

// return Promise<EventResponse>
```

## GET /event/namespaces/{namespace}/users/{userId}/eventType/{eventType}

```
import { AccelByte } from '@accelbyte/sdk'
import { EventApi } from '@accelbyte/sdk-event'

const sdk = AccelByte.SDK({
  coreConfig: {
    baseURL: '__AGS_DOMAIN__',
    clientId: '__IAM_CLIENT_ID__',
    namespace: '__NAMESPACE__',
    redirectURI: '__IAM_CLIENT_REDIRECT_URI__'
  }
})

EventApi(sdk)
  .getEventType_ByUserId_ByEventType(userId:string, eventType:number,  queryParams: {
             endDate: string | null,
             pageSize: number,
             startDate: string | null,
             offset?: number
    })

// return Promise<EventResponse>
```

## GET /event/v2/public/namespaces/{namespace}/users/{userId}/edithistory

```
import { AccelByte } from '@accelbyte/sdk'
import { EventV2Api } from '@accelbyte/sdk-event'

const sdk = AccelByte.SDK({
  coreConfig: {
    baseURL: '__AGS_DOMAIN__',
    clientId: '__IAM_CLIENT_ID__',
    namespace: '__NAMESPACE__',
    redirectURI: '__IAM_CLIENT_REDIRECT_URI__'
  }
})

EventV2Api(sdk, { axiosConfig: { request: { headers: { Authorization: 'Bearer {access_token}' } } } })
  .getEdithistory_ByUserId_v2(userId:string,  queryParams?: {
             endDate?: string | null,
             offset?: number,
             pageSize?: number,
             startDate?: string | null,
             type?: string | null
    })

// return Promise<EventResponseV2>
```

## GET /event/namespaces/{namespace}/eventType/{eventType}/eventId/{eventId}

```
import { AccelByte } from '@accelbyte/sdk'
import { EventApi } from '@accelbyte/sdk-event'

const sdk = AccelByte.SDK({
  coreConfig: {
    baseURL: '__AGS_DOMAIN__',
    clientId: '__IAM_CLIENT_ID__',
    namespace: '__NAMESPACE__',
    redirectURI: '__IAM_CLIENT_REDIRECT_URI__'
  }
})

EventApi(sdk)
  .getEventId_ByEventType_ByEventId(eventType:number, eventId:number,  queryParams: {
             endDate: string | null,
             pageSize: number,
             startDate: string | null,
             offset?: number
    })

// return Promise<EventResponse>
```

## GET /event/namespaces/{namespace}/users/{userId}/eventType/{eventType}/eventId/{eventId}

```
import { AccelByte } from '@accelbyte/sdk'
import { EventApi } from '@accelbyte/sdk-event'

const sdk = AccelByte.SDK({
  coreConfig: {
    baseURL: '__AGS_DOMAIN__',
    clientId: '__IAM_CLIENT_ID__',
    namespace: '__NAMESPACE__',
    redirectURI: '__IAM_CLIENT_REDIRECT_URI__'
  }
})

EventApi(sdk)
  .getEventId_ByUserId_ByEventType_ByEventId(userId:string, eventType:number, eventId:number,  queryParams: {
             endDate: string | null,
             pageSize: number,
             startDate: string | null,
             offset?: number
    })

// return Promise<EventResponse>
```

## POST /event/v2/admin/namespaces/{namespace}/query

```
import { AccelByte } from '@accelbyte/sdk'
import { EventV2AdminApi } from '@accelbyte/sdk-event'

const sdk = AccelByte.SDK({
  coreConfig: {
    baseURL: '__AGS_DOMAIN__',
    clientId: '__IAM_CLIENT_ID__',
    namespace: '__NAMESPACE__',
    redirectURI: '__IAM_CLIENT_REDIRECT_URI__'
  }
})

EventV2AdminApi(sdk, { axiosConfig: { request: { headers: { Authorization: 'Bearer {access_token}' } } } })
  .fetchQuery_v2(data: {
             GenericQueryPayload,
             queryParams?: {
             endDate?: string | null,
             offset?: number,
             pageSize?: number,
             startDate?: string | null
    })

// return Promise<EventResponseV2>
```

## GET /event/v2/admin/namespaces/{namespace}/users/{userId}/event

```
import { AccelByte } from '@accelbyte/sdk'
import { EventV2AdminApi } from '@accelbyte/sdk-event'

const sdk = AccelByte.SDK({
  coreConfig: {
    baseURL: '__AGS_DOMAIN__',
    clientId: '__IAM_CLIENT_ID__',
    namespace: '__NAMESPACE__',
    redirectURI: '__IAM_CLIENT_REDIRECT_URI__'
  }
})

EventV2AdminApi(sdk, { axiosConfig: { request: { headers: { Authorization: 'Bearer {access_token}' } } } })
  .getEvent_ByUserId_v2(userId:string,  queryParams?: {
             endDate?: string | null,
             eventName?: string | null,
             offset?: number,
             pageSize?: number,
             startDate?: string | null
    })

// return Promise<EventResponseV2>
```