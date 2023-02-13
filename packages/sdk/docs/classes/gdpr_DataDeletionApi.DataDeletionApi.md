[@accelbyte/sdk](../README.md) / [gdpr/DataDeletionApi](../modules/gdpr_DataDeletionApi.md) / DataDeletionApi

# Class: DataDeletionApi

[gdpr/DataDeletionApi](../modules/gdpr_DataDeletionApi.md).DataDeletionApi

## Table of contents

### Methods

- [cancelAccountDeletion](gdpr_DataDeletionApi.DataDeletionApi.md#cancelaccountdeletion)
- [getGdprDeletionStatus](gdpr_DataDeletionApi.DataDeletionApi.md#getgdprdeletionstatus)
- [requestAccountDeletion](gdpr_DataDeletionApi.DataDeletionApi.md#requestaccountdeletion)

## Methods

### cancelAccountDeletion

▸ **cancelAccountDeletion**(`userId`): `Promise`<`IResponse`<`unknown`\>\>

<p>Cancel a deletion request</p>
<p>Requires valid user access token</p>

#### Parameters

| Name | Type |
| :------ | :------ |
| `userId` | `string` |

#### Returns

`Promise`<`IResponse`<`unknown`\>\>

#### Defined in

[packages/sdk/src/api/gdpr/DataDeletionApi.ts:36](https://github.com/AccelByte/accelbyte-web-sdk/blob/8cb9ca2/packages/sdk/src/api/gdpr/DataDeletionApi.ts#L36)

___

### getGdprDeletionStatus

▸ **getGdprDeletionStatus**(`userId`): `Promise`<`IResponseWithSync`<{ `DeletionStatus`: `boolean` ; `DisplayName`: `string` ; `ExecutionDate`: `undefined` \| ``null`` \| `string` ; `Status`: `string` ; `UserID`: `string`  }\>\>

<p>Fetch the status to check whether or not a user's account is on a deletion status</p>
<p>Requires valid user access token</p>

#### Parameters

| Name | Type |
| :------ | :------ |
| `userId` | `string` |

#### Returns

`Promise`<`IResponseWithSync`<{ `DeletionStatus`: `boolean` ; `DisplayName`: `string` ; `ExecutionDate`: `undefined` \| ``null`` \| `string` ; `Status`: `string` ; `UserID`: `string`  }\>\>

#### Defined in

[packages/sdk/src/api/gdpr/DataDeletionApi.ts:20](https://github.com/AccelByte/accelbyte-web-sdk/blob/8cb9ca2/packages/sdk/src/api/gdpr/DataDeletionApi.ts#L20)

___

### requestAccountDeletion

▸ **requestAccountDeletion**(`«destructured»`): `Promise`<`IResponse`<{ `Namespace`: `string` ; `UserID`: `string`  }\>\>

<p>Request an account's deletion</p>
<p>Requires valid user access token and password

#### Parameters

| Name | Type |
| :------ | :------ |
| `«destructured»` | `Object` |
| › `data` | `Object` |
| › `data.password` | ``null`` \| `string` |
| › `userId` | `string` |

#### Returns

`Promise`<`IResponse`<{ `Namespace`: `string` ; `UserID`: `string`  }\>\>

#### Defined in

[packages/sdk/src/api/gdpr/DataDeletionApi.ts:28](https://github.com/AccelByte/accelbyte-web-sdk/blob/8cb9ca2/packages/sdk/src/api/gdpr/DataDeletionApi.ts#L28)
