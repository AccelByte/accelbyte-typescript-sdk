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

▸ **cancelGdprDataRequest**(`__namedParameters`): `Promise`<`IResponse`<`unknown`\>\>

<p>Cancel the request for personal data dowwnload</p>
<p>Requires valid user access token</p>

#### Parameters

| Name | Type |
| :------ | :------ |
| `__namedParameters` | `Object` |
| `__namedParameters.requestDate` | `string` |
| `__namedParameters.userId` | `string` |

#### Returns

`Promise`<`IResponse`<`unknown`\>\>

#### Defined in

[packages/sdk/src/api/gdpr/DataRetrievalApi.ts:36](https://bitbucket.org/accelbyte/justice-odin/src/d39c8cbe8/accelbyte-web-sdk/packages/sdk/src/api/gdpr/DataRetrievalApi.ts#lines-36)

___

### getGdprDataRequestList

▸ **getGdprDataRequestList**(`__namedParameters`): `Promise`<`IResponseWithSync`<{ `Data`: { Status: string; DataExpirationDate: string; RequestDate: string; }[] ; `Paging`: { First: string; Last: string; Next: string; Previous: string; } = Pagination }\>\>

<p>Fetch personal data request list</p>
<p>Requires valid user access token</p>

#### Parameters

| Name | Type |
| :------ | :------ |
| `__namedParameters` | `Object` |
| `__namedParameters.queryParams?` | `Object` |
| `__namedParameters.queryParams.limit?` | `number` |
| `__namedParameters.queryParams.offset?` | `number` |
| `__namedParameters.userId` | `string` |

#### Returns

`Promise`<`IResponseWithSync`<{ `Data`: { Status: string; DataExpirationDate: string; RequestDate: string; }[] ; `Paging`: { First: string; Last: string; Next: string; Previous: string; } = Pagination }\>\>

#### Defined in

[packages/sdk/src/api/gdpr/DataRetrievalApi.ts:20](https://bitbucket.org/accelbyte/justice-odin/src/d39c8cbe8/accelbyte-web-sdk/packages/sdk/src/api/gdpr/DataRetrievalApi.ts#lines-20)

___

### requestGdprData

▸ **requestGdprData**(`__namedParameters`): `Promise`<`IResponse`<{ `Namespace`: `string` ; `RequestDate`: `string` ; `UserID`: `string`  }\>\>

<p>Create a request for personal data download</p>
<p>Requires valid user access token</p>

#### Parameters

| Name | Type |
| :------ | :------ |
| `__namedParameters` | `Object` |
| `__namedParameters.data` | `Object` |
| `__namedParameters.data.password` | ``null`` \| `string` |
| `__namedParameters.userId` | `string` |

#### Returns

`Promise`<`IResponse`<{ `Namespace`: `string` ; `RequestDate`: `string` ; `UserID`: `string`  }\>\>

#### Defined in

[packages/sdk/src/api/gdpr/DataRetrievalApi.ts:28](https://bitbucket.org/accelbyte/justice-odin/src/d39c8cbe8/accelbyte-web-sdk/packages/sdk/src/api/gdpr/DataRetrievalApi.ts#lines-28)

___

### requestGdprDataDownloadUrl

▸ **requestGdprDataDownloadUrl**(`__namedParameters`): `Promise`<`IResponse`<{ `URL`: `string`  }\>\>

<p>Create a download URL for personal data request</p>
<p>Requires valid user access token</p>

#### Parameters

| Name | Type |
| :------ | :------ |
| `__namedParameters` | `Object` |
| `__namedParameters.data` | `Object` |
| `__namedParameters.data.password` | ``null`` \| `string` |
| `__namedParameters.requestDate` | `string` |
| `__namedParameters.userId` | `string` |

#### Returns

`Promise`<`IResponse`<{ `URL`: `string`  }\>\>

#### Defined in

[packages/sdk/src/api/gdpr/DataRetrievalApi.ts:44](https://bitbucket.org/accelbyte/justice-odin/src/d39c8cbe8/accelbyte-web-sdk/packages/sdk/src/api/gdpr/DataRetrievalApi.ts#lines-44)
