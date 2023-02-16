[@accelbyte/sdk](../README.md) / [platform/CurrencyApi](../modules/platform_CurrencyApi.md) / CurrencyApi

# Class: CurrencyApi

[platform/CurrencyApi](../modules/platform_CurrencyApi.md).CurrencyApi

## Table of contents

### Methods

- [getCurrencies](platform_CurrencyApi.CurrencyApi.md#getcurrencies)
- [getCurrencyMap](platform_CurrencyApi.CurrencyApi.md#getcurrencymap)

## Methods

### getCurrencies

▸ **getCurrencies**(): `Promise`<`IResponseWithSync`<`CurrencyInfoArray`\>\>

List currencies of a namespace.<br>Other detail info: <ul><li><i>Returns</i>: Currency List</li></ul>

#### Returns

`Promise`<`IResponseWithSync`<`CurrencyInfoArray`\>\>

#### Defined in

[packages/sdk/src/api/platform/CurrencyApi.ts:20](https://github.com/AccelByte/accelbyte-web-sdk/blob/36ddeb4/packages/sdk/src/api/platform/CurrencyApi.ts#L20)

___

### getCurrencyMap

▸ **getCurrencyMap**(): `Promise`<{ `error`: `IResponseError` ; `onSync`: (`syncedData`: (`_`: `IResponse`<`CurrencyInfoArray`\>) => `void`) => `void` ; `response`: ``null``  } \| { `error`: ``null`` = result.error; `value`: `Map`<`string`, `CurrencyInfo`\>  }\>

Get the currencies list and convert into a map of currency code and the currency itself

#### Returns

`Promise`<{ `error`: `IResponseError` ; `onSync`: (`syncedData`: (`_`: `IResponse`<`CurrencyInfoArray`\>) => `void`) => `void` ; `response`: ``null``  } \| { `error`: ``null`` = result.error; `value`: `Map`<`string`, `CurrencyInfo`\>  }\>

#### Defined in

[packages/sdk/src/api/platform/CurrencyApi.ts:27](https://github.com/AccelByte/accelbyte-web-sdk/blob/36ddeb4/packages/sdk/src/api/platform/CurrencyApi.ts#L27)
