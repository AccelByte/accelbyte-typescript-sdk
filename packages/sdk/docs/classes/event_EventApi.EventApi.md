[@accelbyte/sdk](../README.md) / [event/EventApi](../modules/event_EventApi.md) / EventApi

# Class: EventApi

[event/EventApi](../modules/event_EventApi.md).EventApi

## Table of contents

### Methods

- [getAccountHistoryByUserId](event_EventApi.EventApi.md#getaccounthistorybyuserid)

## Methods

### getAccountHistoryByUserId

▸ **getAccountHistoryByUserId**(`«destructured»`): `Promise`<`IResponseWithSync`<{ `data`: { payload?: Record<string, any\> \| null \| undefined; name: string; namespace: string; userId: string; version: number; clientId: string; id: string; sessionId: string; timestamp: string; traceId: string; }[] ; `paging`: { first?: string \| null \| undefined; last?: string \| null \| undefined; next?: string \| null \| undefined; previous?: string \| null \| undefined; } = Paging }\>\>

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
| `«destructured»` | `Object` |
| › `queryParams?` | `Object` |
| › `queryParams.endDate?` | ``null`` \| `string` |
| › `queryParams.offset?` | ``null`` \| `number` |
| › `queryParams.pageSize?` | ``null`` \| `number` |
| › `queryParams.startDate?` | ``null`` \| `string` |
| › `queryParams.type?` | ``null`` \| `string` |
| › `userId` | `string` |

#### Returns

`Promise`<`IResponseWithSync`<{ `data`: { payload?: Record<string, any\> \| null \| undefined; name: string; namespace: string; userId: string; version: number; clientId: string; id: string; sessionId: string; timestamp: string; traceId: string; }[] ; `paging`: { first?: string \| null \| undefined; last?: string \| null \| undefined; next?: string \| null \| undefined; previous?: string \| null \| undefined; } = Paging }\>\>

#### Defined in

[packages/sdk/src/api/event/EventApi.ts:28](https://github.com/AccelByte/accelbyte-web-sdk/blob/a3afe6b/packages/sdk/src/api/event/EventApi.ts#L28)
