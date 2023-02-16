[@accelbyte/sdk](../README.md) / [event/EventApi](../modules/event_EventApi.md) / EventApi

# Class: EventApi

[event/EventApi](../modules/event_EventApi.md).EventApi

## Table of contents

### Methods

- [getAccountHistoryByUserId](event_EventApi.EventApi.md#getaccounthistorybyuserid)

## Methods

### getAccountHistoryByUserId

▸ **getAccountHistoryByUserId**(`«destructured»`): `Promise`<`IResponseWithSync`<`EventResponseV2`\>\>

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
| › `queryParams.offset?` | `number` |
| › `queryParams.pageSize?` | `number` |
| › `queryParams.startDate?` | ``null`` \| `string` |
| › `queryParams.type?` | ``null`` \| `string` |
| › `userId` | `string` |

#### Returns

`Promise`<`IResponseWithSync`<`EventResponseV2`\>\>

#### Defined in

[packages/sdk/src/api/event/EventApi.ts:28](https://github.com/AccelByte/accelbyte-web-sdk/blob/d43c233/packages/sdk/src/api/event/EventApi.ts#L28)
