[@accelbyte/sdk](../README.md) / [gdpr/DataRetrievalApi](../modules/gdpr_DataRetrievalApi.md) / DataRetrievalApi

# Class: DataRetrievalApi

[gdpr/DataRetrievalApi](../modules/gdpr_DataRetrievalApi.md).DataRetrievalApi

## Table of contents

### Methods

- [cancelGdprDataRequest](gdpr_DataRetrievalApi.DataRetrievalApi.md#cancelgdprdatarequest)
- [getGdprDataRequestList](gdpr_DataRetrievalApi.DataRetrievalApi.md#getgdprdatarequestlist)
- [requestGdprData](gdpr_DataRetrievalApi.DataRetrievalApi.md#requestgdprdata)
- [requestGdprDataDownloadUrl](gdpr_DataRetrievalApi.DataRetrievalApi.md#requestgdprdatadownloadurl)

## Methods

### cancelGdprDataRequest

▸ **cancelGdprDataRequest**(`«destructured»`): `Promise`<`IResponse`<`unknown`\>\>

<p>Cancel the request for personal data dowwnload</p>
<p>Requires valid user access token</p>

#### Parameters

| Name | Type |
| :------ | :------ |
| `«destructured»` | `Object` |
| › `requestDate` | `string` |
| › `userId` | `string` |

#### Returns

`Promise`<`IResponse`<`unknown`\>\>

#### Defined in

[packages/sdk/src/api/gdpr/DataRetrievalApi.ts:36](https://github.com/AccelByte/accelbyte-web-sdk/blob/c50fb74/packages/sdk/src/api/gdpr/DataRetrievalApi.ts#L36)

___

### getGdprDataRequestList

▸ **getGdprDataRequestList**(`«destructured»`): `Promise`<`IResponseWithSync`<`UserPersonalDataResponse`\>\>

<p>Fetch personal data request list</p>
<p>Requires valid user access token</p>

#### Parameters

| Name | Type |
| :------ | :------ |
| `«destructured»` | `Object` |
| › `queryParams?` | `Object` |
| › `queryParams.limit?` | `number` |
| › `queryParams.offset?` | `number` |
| › `userId` | `string` |

#### Returns

`Promise`<`IResponseWithSync`<`UserPersonalDataResponse`\>\>

#### Defined in

[packages/sdk/src/api/gdpr/DataRetrievalApi.ts:20](https://github.com/AccelByte/accelbyte-web-sdk/blob/c50fb74/packages/sdk/src/api/gdpr/DataRetrievalApi.ts#L20)

___

### requestGdprData

▸ **requestGdprData**(`«destructured»`): `Promise`<`IResponse`<`DataRetrievalResponse`\>\>

<p>Create a request for personal data download</p>
<p>Requires valid user access token</p>

#### Parameters

| Name | Type |
| :------ | :------ |
| `«destructured»` | `Object` |
| › `data` | `Object` |
| › `data.password` | ``null`` \| `string` |
| › `userId` | `string` |

#### Returns

`Promise`<`IResponse`<`DataRetrievalResponse`\>\>

#### Defined in

[packages/sdk/src/api/gdpr/DataRetrievalApi.ts:28](https://github.com/AccelByte/accelbyte-web-sdk/blob/c50fb74/packages/sdk/src/api/gdpr/DataRetrievalApi.ts#L28)

___

### requestGdprDataDownloadUrl

▸ **requestGdprDataDownloadUrl**(`«destructured»`): `Promise`<`IResponse`<`UserDataUrl`\>\>

<p>Create a download URL for personal data request</p>
<p>Requires valid user access token</p>

#### Parameters

| Name | Type |
| :------ | :------ |
| `«destructured»` | `Object` |
| › `data` | `Object` |
| › `data.password` | ``null`` \| `string` |
| › `requestDate` | `string` |
| › `userId` | `string` |

#### Returns

`Promise`<`IResponse`<`UserDataUrl`\>\>

#### Defined in

[packages/sdk/src/api/gdpr/DataRetrievalApi.ts:44](https://github.com/AccelByte/accelbyte-web-sdk/blob/c50fb74/packages/sdk/src/api/gdpr/DataRetrievalApi.ts#L44)
