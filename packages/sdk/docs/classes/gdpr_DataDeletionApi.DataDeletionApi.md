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

[packages/sdk/src/api/gdpr/DataDeletionApi.ts:36](https://bitbucket.org/accelbyte/justice-odin/src/d39c8cbe8/accelbyte-web-sdk/packages/sdk/src/api/gdpr/DataDeletionApi.ts#lines-36)

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

[packages/sdk/src/api/gdpr/DataDeletionApi.ts:20](https://bitbucket.org/accelbyte/justice-odin/src/d39c8cbe8/accelbyte-web-sdk/packages/sdk/src/api/gdpr/DataDeletionApi.ts#lines-20)

___

### requestAccountDeletion

▸ **requestAccountDeletion**(`__namedParameters`): `Promise`<`IResponse`<{ `Namespace`: `string` ; `UserID`: `string`  }\>\>

<p>Request an account's deletion</p>
<p>Requires valid user access token and password

#### Parameters

| Name | Type |
| :------ | :------ |
| `__namedParameters` | `Object` |
| `__namedParameters.data` | `Object` |
| `__namedParameters.data.password` | ``null`` \| `string` |
| `__namedParameters.userId` | `string` |

#### Returns

`Promise`<`IResponse`<{ `Namespace`: `string` ; `UserID`: `string`  }\>\>

#### Defined in

[packages/sdk/src/api/gdpr/DataDeletionApi.ts:28](https://bitbucket.org/accelbyte/justice-odin/src/d39c8cbe8/accelbyte-web-sdk/packages/sdk/src/api/gdpr/DataDeletionApi.ts#lines-28)
