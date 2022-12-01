[@accelbyte/sdk](../README.md) / [event/EventApi](../modules/event_EventApi.md) / EventApi

# Class: EventApi

[event/EventApi](../modules/event_EventApi.md).EventApi

## Table of contents

### Methods

- [getAccountHistoryByUserId](event_EventApi.EventApi.md#getaccounthistorybyuserid)

## Methods

### getAccountHistoryByUserId

▸ **getAccountHistoryByUserId**(`__namedParameters`): `Promise`<`IResponseWithSync`<{ `data`: { payload?: Record<string, any\> \| null \| undefined; name: string; namespace: string; userId: string; version: number; clientId: string; id: string; sessionId: string; timestamp: string; traceId: string; }[] ; `paging`: { first?: string \| null \| undefined; last?: string \| null \| undefined; next?: string \| null \| undefined; previous?: string \| null \| undefined; } = Paging }\>\>

<p>Available Type: </p>
     <ul>
       <li>email</li>
       <li>password</li>
       <li>displayname</li>
       <li>dateofbirth</li>
       <li>country</li>
       <li>language</li>
     </ul>
     <p>Requires a valid user access token</p>

#### Parameters

| Name | Type |
| :------ | :------ |
| `__namedParameters` | `Object` |
| `__namedParameters.queryParams?` | `Object` |
| `__namedParameters.queryParams.endDate?` | ``null`` \| `string` |
| `__namedParameters.queryParams.offset?` | ``null`` \| `number` |
| `__namedParameters.queryParams.pageSize?` | ``null`` \| `number` |
| `__namedParameters.queryParams.startDate?` | ``null`` \| `string` |
| `__namedParameters.queryParams.type?` | ``null`` \| `string` |
| `__namedParameters.userId` | `string` |

#### Returns

`Promise`<`IResponseWithSync`<{ `data`: { payload?: Record<string, any\> \| null \| undefined; name: string; namespace: string; userId: string; version: number; clientId: string; id: string; sessionId: string; timestamp: string; traceId: string; }[] ; `paging`: { first?: string \| null \| undefined; last?: string \| null \| undefined; next?: string \| null \| undefined; previous?: string \| null \| undefined; } = Paging }\>\>

#### Defined in

[packages/sdk/src/api/event/EventApi.ts:28](https://bitbucket.org/accelbyte/justice-odin/src/d39c8cbe8/accelbyte-web-sdk/packages/sdk/src/api/event/EventApi.ts#lines-28)
