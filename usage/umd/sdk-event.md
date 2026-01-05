## GET /event/descriptions/ux

```
<script src="https://unpkg.com/@accelbyte/sdk/dist/global/index.global.js"></script>
<script src="https://unpkg.com/@accelbyte/sdk-event/dist/global/index.global.js"></script>
  
<script>

const sdk = AccelByteSDK.AccelByte.SDK({
  coreConfig: {
    baseURL: '__AGS_DOMAIN__',
    clientId: '__IAM_CLIENT_ID__',
    namespace: '__NAMESPACE__',
    redirectURI: '__IAM_CLIENT_REDIRECT_URI__'
  }
})

AccelByteSDK_Event.EventDescriptionsApi(sdk)
  .getDescriptionsUx()

// return Promise<MultipleUx>

</script>
```

## GET /event/registry/eventIds

```
<script src="https://unpkg.com/@accelbyte/sdk/dist/global/index.global.js"></script>
<script src="https://unpkg.com/@accelbyte/sdk-event/dist/global/index.global.js"></script>
  
<script>

const sdk = AccelByteSDK.AccelByte.SDK({
  coreConfig: {
    baseURL: '__AGS_DOMAIN__',
    clientId: '__IAM_CLIENT_ID__',
    namespace: '__NAMESPACE__',
    redirectURI: '__IAM_CLIENT_REDIRECT_URI__'
  }
})

AccelByteSDK_Event.EventRegistryApi(sdk)
  .getRegistryEventIds()

// return Promise<EventRegistry>

</script>
```

## POST /event/registry/eventIds

```
<script src="https://unpkg.com/@accelbyte/sdk/dist/global/index.global.js"></script>
<script src="https://unpkg.com/@accelbyte/sdk-event/dist/global/index.global.js"></script>
  
<script>

const sdk = AccelByteSDK.AccelByte.SDK({
  coreConfig: {
    baseURL: '__AGS_DOMAIN__',
    clientId: '__IAM_CLIENT_ID__',
    namespace: '__NAMESPACE__',
    redirectURI: '__IAM_CLIENT_REDIRECT_URI__'
  }
})

AccelByteSDK_Event.EventRegistryApi(sdk)
  .createRegistryEventId(data: {
             EventRegistry
    })

// return Promise

</script>
```

## GET /event/descriptions/eventId

```
<script src="https://unpkg.com/@accelbyte/sdk/dist/global/index.global.js"></script>
<script src="https://unpkg.com/@accelbyte/sdk-event/dist/global/index.global.js"></script>
  
<script>

const sdk = AccelByteSDK.AccelByte.SDK({
  coreConfig: {
    baseURL: '__AGS_DOMAIN__',
    clientId: '__IAM_CLIENT_ID__',
    namespace: '__NAMESPACE__',
    redirectURI: '__IAM_CLIENT_REDIRECT_URI__'
  }
})

AccelByteSDK_Event.EventDescriptionsApi(sdk)
  .getDescriptionsEventId()

// return Promise<MultipleEventId>

</script>
```

## GET /event/descriptions/agentType

```
<script src="https://unpkg.com/@accelbyte/sdk/dist/global/index.global.js"></script>
<script src="https://unpkg.com/@accelbyte/sdk-event/dist/global/index.global.js"></script>
  
<script>

const sdk = AccelByteSDK.AccelByte.SDK({
  coreConfig: {
    baseURL: '__AGS_DOMAIN__',
    clientId: '__IAM_CLIENT_ID__',
    namespace: '__NAMESPACE__',
    redirectURI: '__IAM_CLIENT_REDIRECT_URI__'
  }
})

AccelByteSDK_Event.EventDescriptionsApi(sdk)
  .getDescriptionsAgentType()

// return Promise<MultipleAgentType>

</script>
```

## GET /event/descriptions/eventType

```
<script src="https://unpkg.com/@accelbyte/sdk/dist/global/index.global.js"></script>
<script src="https://unpkg.com/@accelbyte/sdk-event/dist/global/index.global.js"></script>
  
<script>

const sdk = AccelByteSDK.AccelByte.SDK({
  coreConfig: {
    baseURL: '__AGS_DOMAIN__',
    clientId: '__IAM_CLIENT_ID__',
    namespace: '__NAMESPACE__',
    redirectURI: '__IAM_CLIENT_REDIRECT_URI__'
  }
})

AccelByteSDK_Event.EventDescriptionsApi(sdk)
  .getDescriptionsEventType()

// return Promise<MultipleEventType>

</script>
```

## GET /event/namespaces/{namespace}

```
<script src="https://unpkg.com/@accelbyte/sdk/dist/global/index.global.js"></script>
<script src="https://unpkg.com/@accelbyte/sdk-event/dist/global/index.global.js"></script>
  
<script>

const sdk = AccelByteSDK.AccelByte.SDK({
  coreConfig: {
    baseURL: '__AGS_DOMAIN__',
    clientId: '__IAM_CLIENT_ID__',
    namespace: '__NAMESPACE__',
    redirectURI: '__IAM_CLIENT_REDIRECT_URI__'
  }
})

AccelByteSDK_Event.EventApi(sdk)
  .getNamespace_ByNamespace( queryParams: {
             endDate: string | null,
             pageSize: number,
             startDate: string | null,
             offset?: number
    })

// return Promise<EventResponse>

</script>
```

## POST /event/namespaces/{namespace}

```
<script src="https://unpkg.com/@accelbyte/sdk/dist/global/index.global.js"></script>
<script src="https://unpkg.com/@accelbyte/sdk-event/dist/global/index.global.js"></script>
  
<script>

const sdk = AccelByteSDK.AccelByte.SDK({
  coreConfig: {
    baseURL: '__AGS_DOMAIN__',
    clientId: '__IAM_CLIENT_ID__',
    namespace: '__NAMESPACE__',
    redirectURI: '__IAM_CLIENT_REDIRECT_URI__'
  }
})

AccelByteSDK_Event.EventApi(sdk)
  .createNamespace_ByNamespace(data: {
             Event
    })

// return Promise

</script>
```

## GET /event/descriptions/eventLevel

```
<script src="https://unpkg.com/@accelbyte/sdk/dist/global/index.global.js"></script>
<script src="https://unpkg.com/@accelbyte/sdk-event/dist/global/index.global.js"></script>
  
<script>

const sdk = AccelByteSDK.AccelByte.SDK({
  coreConfig: {
    baseURL: '__AGS_DOMAIN__',
    clientId: '__IAM_CLIENT_ID__',
    namespace: '__NAMESPACE__',
    redirectURI: '__IAM_CLIENT_REDIRECT_URI__'
  }
})

AccelByteSDK_Event.EventDescriptionsApi(sdk)
  .getDescriptionsEventLevel()

// return Promise<MultipleEventLevel>

</script>
```

## GET /event/descriptions/ux/listByUx

```
<script src="https://unpkg.com/@accelbyte/sdk/dist/global/index.global.js"></script>
<script src="https://unpkg.com/@accelbyte/sdk-event/dist/global/index.global.js"></script>
  
<script>

const sdk = AccelByteSDK.AccelByte.SDK({
  coreConfig: {
    baseURL: '__AGS_DOMAIN__',
    clientId: '__IAM_CLIENT_ID__',
    namespace: '__NAMESPACE__',
    redirectURI: '__IAM_CLIENT_REDIRECT_URI__'
  }
})

AccelByteSDK_Event.EventDescriptionsApi(sdk)
  .getDescriptionsUxListByUx( queryParams?: {
             ux?: string | null
    })

// return Promise<MultipleUx>

</script>
```

## DELETE /event/registry/eventIds/{eventId}

```
<script src="https://unpkg.com/@accelbyte/sdk/dist/global/index.global.js"></script>
<script src="https://unpkg.com/@accelbyte/sdk-event/dist/global/index.global.js"></script>
  
<script>

const sdk = AccelByteSDK.AccelByte.SDK({
  coreConfig: {
    baseURL: '__AGS_DOMAIN__',
    clientId: '__IAM_CLIENT_ID__',
    namespace: '__NAMESPACE__',
    redirectURI: '__IAM_CLIENT_REDIRECT_URI__'
  }
})

AccelByteSDK_Event.EventRegistryApi(sdk)
  .deleteRegistryEventId_ByEventId(eventId:string)

// return Promise

</script>
```

## GET /event/registry/eventIds/{eventId}

```
<script src="https://unpkg.com/@accelbyte/sdk/dist/global/index.global.js"></script>
<script src="https://unpkg.com/@accelbyte/sdk-event/dist/global/index.global.js"></script>
  
<script>

const sdk = AccelByteSDK.AccelByte.SDK({
  coreConfig: {
    baseURL: '__AGS_DOMAIN__',
    clientId: '__IAM_CLIENT_ID__',
    namespace: '__NAMESPACE__',
    redirectURI: '__IAM_CLIENT_REDIRECT_URI__'
  }
})

AccelByteSDK_Event.EventRegistryApi(sdk)
  .getRegistryEventId_ByEventId(eventId:string)

// return Promise<EventRegistry>

</script>
```

## POST /event/registry/eventIds/{eventId}

```
<script src="https://unpkg.com/@accelbyte/sdk/dist/global/index.global.js"></script>
<script src="https://unpkg.com/@accelbyte/sdk-event/dist/global/index.global.js"></script>
  
<script>

const sdk = AccelByteSDK.AccelByte.SDK({
  coreConfig: {
    baseURL: '__AGS_DOMAIN__',
    clientId: '__IAM_CLIENT_ID__',
    namespace: '__NAMESPACE__',
    redirectURI: '__IAM_CLIENT_REDIRECT_URI__'
  }
})

AccelByteSDK_Event.EventRegistryApi(sdk)
  .createRegistryEventId_ByEventId(eventId:string, data: {
             EventRegistry
    })

// return Promise

</script>
```

## GET /event/registry/eventTypes/{eventType}

```
<script src="https://unpkg.com/@accelbyte/sdk/dist/global/index.global.js"></script>
<script src="https://unpkg.com/@accelbyte/sdk-event/dist/global/index.global.js"></script>
  
<script>

const sdk = AccelByteSDK.AccelByte.SDK({
  coreConfig: {
    baseURL: '__AGS_DOMAIN__',
    clientId: '__IAM_CLIENT_ID__',
    namespace: '__NAMESPACE__',
    redirectURI: '__IAM_CLIENT_REDIRECT_URI__'
  }
})

AccelByteSDK_Event.EventRegistryApi(sdk)
  .getRegistryEventType_ByEventType(eventType:string)

// return Promise<EventRegistry>

</script>
```

## GET /event/descriptions/eventId/listByEventIds

```
<script src="https://unpkg.com/@accelbyte/sdk/dist/global/index.global.js"></script>
<script src="https://unpkg.com/@accelbyte/sdk-event/dist/global/index.global.js"></script>
  
<script>

const sdk = AccelByteSDK.AccelByte.SDK({
  coreConfig: {
    baseURL: '__AGS_DOMAIN__',
    clientId: '__IAM_CLIENT_ID__',
    namespace: '__NAMESPACE__',
    redirectURI: '__IAM_CLIENT_REDIRECT_URI__'
  }
})

AccelByteSDK_Event.EventDescriptionsApi(sdk)
  .getDescriptionsEventIdListByEventIds( queryParams?: {
             eventIds?: string | null
    })

// return Promise<MultipleEventId>

</script>
```

## GET /event/namespaces/{namespace}/users/{userId}

```
<script src="https://unpkg.com/@accelbyte/sdk/dist/global/index.global.js"></script>
<script src="https://unpkg.com/@accelbyte/sdk-event/dist/global/index.global.js"></script>
  
<script>

const sdk = AccelByteSDK.AccelByte.SDK({
  coreConfig: {
    baseURL: '__AGS_DOMAIN__',
    clientId: '__IAM_CLIENT_ID__',
    namespace: '__NAMESPACE__',
    redirectURI: '__IAM_CLIENT_REDIRECT_URI__'
  }
})

AccelByteSDK_Event.EventApi(sdk)
  .getUser_ByUserId(userId:string,  queryParams: {
             endDate: string | null,
             pageSize: number,
             startDate: string | null,
             offset?: number
    })

// return Promise<EventResponse>

</script>
```

## GET /event/descriptions/agentType/listByAgentTypes

```
<script src="https://unpkg.com/@accelbyte/sdk/dist/global/index.global.js"></script>
<script src="https://unpkg.com/@accelbyte/sdk-event/dist/global/index.global.js"></script>
  
<script>

const sdk = AccelByteSDK.AccelByte.SDK({
  coreConfig: {
    baseURL: '__AGS_DOMAIN__',
    clientId: '__IAM_CLIENT_ID__',
    namespace: '__NAMESPACE__',
    redirectURI: '__IAM_CLIENT_REDIRECT_URI__'
  }
})

AccelByteSDK_Event.EventDescriptionsApi(sdk)
  .getDescriptionsAgentTypeListByAgentTypes( queryParams?: {
             agentTypes?: string | null
    })

// return Promise<MultipleAgentType>

</script>
```

## GET /event/descriptions/eventType/listByEventTypes

```
<script src="https://unpkg.com/@accelbyte/sdk/dist/global/index.global.js"></script>
<script src="https://unpkg.com/@accelbyte/sdk-event/dist/global/index.global.js"></script>
  
<script>

const sdk = AccelByteSDK.AccelByte.SDK({
  coreConfig: {
    baseURL: '__AGS_DOMAIN__',
    clientId: '__IAM_CLIENT_ID__',
    namespace: '__NAMESPACE__',
    redirectURI: '__IAM_CLIENT_REDIRECT_URI__'
  }
})

AccelByteSDK_Event.EventDescriptionsApi(sdk)
  .getDescriptionsEventTypeListByEventTypes( queryParams?: {
             eventTypes?: string | null
    })

// return Promise<MultipleEventType>

</script>
```

## GET /event/namespaces/{namespace}/eventId/{eventId}

```
<script src="https://unpkg.com/@accelbyte/sdk/dist/global/index.global.js"></script>
<script src="https://unpkg.com/@accelbyte/sdk-event/dist/global/index.global.js"></script>
  
<script>

const sdk = AccelByteSDK.AccelByte.SDK({
  coreConfig: {
    baseURL: '__AGS_DOMAIN__',
    clientId: '__IAM_CLIENT_ID__',
    namespace: '__NAMESPACE__',
    redirectURI: '__IAM_CLIENT_REDIRECT_URI__'
  }
})

AccelByteSDK_Event.EventApi(sdk)
  .getEventId_ByEventId(eventId:number,  queryParams: {
             endDate: string | null,
             pageSize: number,
             startDate: string | null,
             offset?: number
    })

// return Promise<EventResponse>

</script>
```

## GET /event/descriptions/eventLevel/listByEventLevels

```
<script src="https://unpkg.com/@accelbyte/sdk/dist/global/index.global.js"></script>
<script src="https://unpkg.com/@accelbyte/sdk-event/dist/global/index.global.js"></script>
  
<script>

const sdk = AccelByteSDK.AccelByte.SDK({
  coreConfig: {
    baseURL: '__AGS_DOMAIN__',
    clientId: '__IAM_CLIENT_ID__',
    namespace: '__NAMESPACE__',
    redirectURI: '__IAM_CLIENT_REDIRECT_URI__'
  }
})

AccelByteSDK_Event.EventDescriptionsApi(sdk)
  .getDescriptionsEventLevelListByEventLevels( queryParams?: {
             eventLevels?: string | null
    })

// return Promise<MultipleEventLevel>

</script>
```

## GET /event/namespaces/{namespace}/eventType/{eventType}

```
<script src="https://unpkg.com/@accelbyte/sdk/dist/global/index.global.js"></script>
<script src="https://unpkg.com/@accelbyte/sdk-event/dist/global/index.global.js"></script>
  
<script>

const sdk = AccelByteSDK.AccelByte.SDK({
  coreConfig: {
    baseURL: '__AGS_DOMAIN__',
    clientId: '__IAM_CLIENT_ID__',
    namespace: '__NAMESPACE__',
    redirectURI: '__IAM_CLIENT_REDIRECT_URI__'
  }
})

AccelByteSDK_Event.EventApi(sdk)
  .getEventType_ByEventType(eventType:number,  queryParams: {
             endDate: string | null,
             pageSize: number,
             startDate: string | null,
             offset?: number
    })

// return Promise<EventResponse>

</script>
```

## DELETE /event/namespaces/{namespace}/users/{userId}/activities

```
<script src="https://unpkg.com/@accelbyte/sdk/dist/global/index.global.js"></script>
<script src="https://unpkg.com/@accelbyte/sdk-event/dist/global/index.global.js"></script>
  
<script>

const sdk = AccelByteSDK.AccelByte.SDK({
  coreConfig: {
    baseURL: '__AGS_DOMAIN__',
    clientId: '__IAM_CLIENT_ID__',
    namespace: '__NAMESPACE__',
    redirectURI: '__IAM_CLIENT_REDIRECT_URI__'
  }
})

AccelByteSDK_Event.UserInformationApi(sdk)
  .deleteActivity_ByUserId(userId:string)

// return Promise

</script>
```

## GET /event/namespaces/{namespace}/users/{userId}/activities

```
<script src="https://unpkg.com/@accelbyte/sdk/dist/global/index.global.js"></script>
<script src="https://unpkg.com/@accelbyte/sdk-event/dist/global/index.global.js"></script>
  
<script>

const sdk = AccelByteSDK.AccelByte.SDK({
  coreConfig: {
    baseURL: '__AGS_DOMAIN__',
    clientId: '__IAM_CLIENT_ID__',
    namespace: '__NAMESPACE__',
    redirectURI: '__IAM_CLIENT_REDIRECT_URI__'
  }
})

AccelByteSDK_Event.UserInformationApi(sdk)
  .getActivities_ByUserId(userId:string,  queryParams: {
             pageSize: number,
             offset?: number
    })

// return Promise<EventResponse>

</script>
```

## GET /event/v2/public/namespaces/{namespace}/users/{userId}/event

```
<script src="https://unpkg.com/@accelbyte/sdk/dist/global/index.global.js"></script>
<script src="https://unpkg.com/@accelbyte/sdk-event/dist/global/index.global.js"></script>
  
<script>

const sdk = AccelByteSDK.AccelByte.SDK({
  coreConfig: {
    baseURL: '__AGS_DOMAIN__',
    clientId: '__IAM_CLIENT_ID__',
    namespace: '__NAMESPACE__',
    redirectURI: '__IAM_CLIENT_REDIRECT_URI__'
  }
})

AccelByteSDK_Event.EventV2Api(sdk, { axiosConfig: { request: { headers: { Authorization: 'Bearer {access_token}' } } } })
  .getEvent_ByUserId_v2(userId:string,  queryParams?: {
             endDate?: string | null,
             eventName?: string | null,
             offset?: number,
             pageSize?: number,
             startDate?: string | null
    })

// return Promise<EventResponseV2>

</script>
```

## GET /event/namespaces/{namespace}/users/{userId}/lastActivityTime

```
<script src="https://unpkg.com/@accelbyte/sdk/dist/global/index.global.js"></script>
<script src="https://unpkg.com/@accelbyte/sdk-event/dist/global/index.global.js"></script>
  
<script>

const sdk = AccelByteSDK.AccelByte.SDK({
  coreConfig: {
    baseURL: '__AGS_DOMAIN__',
    clientId: '__IAM_CLIENT_ID__',
    namespace: '__NAMESPACE__',
    redirectURI: '__IAM_CLIENT_REDIRECT_URI__'
  }
})

AccelByteSDK_Event.UserInformationApi(sdk)
  .getLastActivityTime_ByUserId(userId:string)

// return Promise<UserLastActivity>

</script>
```

## GET /event/namespaces/{namespace}/users/{userId}/eventId/{eventId}

```
<script src="https://unpkg.com/@accelbyte/sdk/dist/global/index.global.js"></script>
<script src="https://unpkg.com/@accelbyte/sdk-event/dist/global/index.global.js"></script>
  
<script>

const sdk = AccelByteSDK.AccelByte.SDK({
  coreConfig: {
    baseURL: '__AGS_DOMAIN__',
    clientId: '__IAM_CLIENT_ID__',
    namespace: '__NAMESPACE__',
    redirectURI: '__IAM_CLIENT_REDIRECT_URI__'
  }
})

AccelByteSDK_Event.EventApi(sdk)
  .getEventId_ByUserId_ByEventId(userId:string, eventId:number,  queryParams: {
             endDate: string | null,
             pageSize: number,
             startDate: string | null,
             offset?: number
    })

// return Promise<EventResponse>

</script>
```

## GET /event/namespaces/{namespace}/users/{userId}/eventType/{eventType}

```
<script src="https://unpkg.com/@accelbyte/sdk/dist/global/index.global.js"></script>
<script src="https://unpkg.com/@accelbyte/sdk-event/dist/global/index.global.js"></script>
  
<script>

const sdk = AccelByteSDK.AccelByte.SDK({
  coreConfig: {
    baseURL: '__AGS_DOMAIN__',
    clientId: '__IAM_CLIENT_ID__',
    namespace: '__NAMESPACE__',
    redirectURI: '__IAM_CLIENT_REDIRECT_URI__'
  }
})

AccelByteSDK_Event.EventApi(sdk)
  .getEventType_ByUserId_ByEventType(userId:string, eventType:number,  queryParams: {
             endDate: string | null,
             pageSize: number,
             startDate: string | null,
             offset?: number
    })

// return Promise<EventResponse>

</script>
```

## GET /event/v2/public/namespaces/{namespace}/users/{userId}/edithistory

```
<script src="https://unpkg.com/@accelbyte/sdk/dist/global/index.global.js"></script>
<script src="https://unpkg.com/@accelbyte/sdk-event/dist/global/index.global.js"></script>
  
<script>

const sdk = AccelByteSDK.AccelByte.SDK({
  coreConfig: {
    baseURL: '__AGS_DOMAIN__',
    clientId: '__IAM_CLIENT_ID__',
    namespace: '__NAMESPACE__',
    redirectURI: '__IAM_CLIENT_REDIRECT_URI__'
  }
})

AccelByteSDK_Event.EventV2Api(sdk, { axiosConfig: { request: { headers: { Authorization: 'Bearer {access_token}' } } } })
  .getEdithistory_ByUserId_v2(userId:string,  queryParams?: {
             endDate?: string | null,
             offset?: number,
             pageSize?: number,
             startDate?: string | null,
             type?: string | null
    })

// return Promise<EventResponseV2>

</script>
```

## GET /event/namespaces/{namespace}/eventType/{eventType}/eventId/{eventId}

```
<script src="https://unpkg.com/@accelbyte/sdk/dist/global/index.global.js"></script>
<script src="https://unpkg.com/@accelbyte/sdk-event/dist/global/index.global.js"></script>
  
<script>

const sdk = AccelByteSDK.AccelByte.SDK({
  coreConfig: {
    baseURL: '__AGS_DOMAIN__',
    clientId: '__IAM_CLIENT_ID__',
    namespace: '__NAMESPACE__',
    redirectURI: '__IAM_CLIENT_REDIRECT_URI__'
  }
})

AccelByteSDK_Event.EventApi(sdk)
  .getEventId_ByEventType_ByEventId(eventType:number, eventId:number,  queryParams: {
             endDate: string | null,
             pageSize: number,
             startDate: string | null,
             offset?: number
    })

// return Promise<EventResponse>

</script>
```

## GET /event/namespaces/{namespace}/users/{userId}/eventType/{eventType}/eventId/{eventId}

```
<script src="https://unpkg.com/@accelbyte/sdk/dist/global/index.global.js"></script>
<script src="https://unpkg.com/@accelbyte/sdk-event/dist/global/index.global.js"></script>
  
<script>

const sdk = AccelByteSDK.AccelByte.SDK({
  coreConfig: {
    baseURL: '__AGS_DOMAIN__',
    clientId: '__IAM_CLIENT_ID__',
    namespace: '__NAMESPACE__',
    redirectURI: '__IAM_CLIENT_REDIRECT_URI__'
  }
})

AccelByteSDK_Event.EventApi(sdk)
  .getEventId_ByUserId_ByEventType_ByEventId(userId:string, eventType:number, eventId:number,  queryParams: {
             endDate: string | null,
             pageSize: number,
             startDate: string | null,
             offset?: number
    })

// return Promise<EventResponse>

</script>
```

## POST /event/v2/admin/namespaces/{namespace}/query

```
<script src="https://unpkg.com/@accelbyte/sdk/dist/global/index.global.js"></script>
<script src="https://unpkg.com/@accelbyte/sdk-event/dist/global/index.global.js"></script>
  
<script>

const sdk = AccelByteSDK.AccelByte.SDK({
  coreConfig: {
    baseURL: '__AGS_DOMAIN__',
    clientId: '__IAM_CLIENT_ID__',
    namespace: '__NAMESPACE__',
    redirectURI: '__IAM_CLIENT_REDIRECT_URI__'
  }
})

AccelByteSDK_Event.EventV2AdminApi(sdk, { axiosConfig: { request: { headers: { Authorization: 'Bearer {access_token}' } } } })
  .fetchQuery_v2(data: {
             GenericQueryPayload,
             queryParams?: {
             endDate?: string | null,
             offset?: number,
             pageSize?: number,
             startDate?: string | null
    })

// return Promise<EventResponseV2>

</script>
```

## GET /event/v2/admin/namespaces/{namespace}/users/{userId}/event

```
<script src="https://unpkg.com/@accelbyte/sdk/dist/global/index.global.js"></script>
<script src="https://unpkg.com/@accelbyte/sdk-event/dist/global/index.global.js"></script>
  
<script>

const sdk = AccelByteSDK.AccelByte.SDK({
  coreConfig: {
    baseURL: '__AGS_DOMAIN__',
    clientId: '__IAM_CLIENT_ID__',
    namespace: '__NAMESPACE__',
    redirectURI: '__IAM_CLIENT_REDIRECT_URI__'
  }
})

AccelByteSDK_Event.EventV2AdminApi(sdk, { axiosConfig: { request: { headers: { Authorization: 'Bearer {access_token}' } } } })
  .getEvent_ByUserId_v2(userId:string,  queryParams?: {
             endDate?: string | null,
             eventName?: string | null,
             offset?: number,
             pageSize?: number,
             startDate?: string | null
    })

// return Promise<EventResponseV2>

</script>
```