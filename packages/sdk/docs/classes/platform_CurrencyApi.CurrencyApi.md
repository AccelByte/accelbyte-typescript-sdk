[@accelbyte/sdk](../README.md) / [platform/CurrencyApi](../modules/platform_CurrencyApi.md) / CurrencyApi

# Class: CurrencyApi

[platform/CurrencyApi](../modules/platform_CurrencyApi.md).CurrencyApi

## Table of contents

### Methods

- [getCurrencies](platform_CurrencyApi.CurrencyApi.md#getcurrencies)
- [getCurrencyMap](platform_CurrencyApi.CurrencyApi.md#getcurrencymap)

## Methods

### getCurrencies

▸ **getCurrencies**(): `Promise`<`IResponseWithSync`<{ `createdAt`: `string` ; `currencyCode`: `string` ; `currencySymbol`: `string` ; `currencyType`: ``"REAL"`` \| ``"VIRTUAL"`` ; `decimals`: `number` ; `localizationDescriptions`: `undefined` \| ``null`` \| `Record`<`string`, `string`\> ; `namespace`: `string` ; `updatedAt`: `string`  }[]\>\>

List currencies of a namespace.<br>Other detail info: <ul><li><i>Returns</i>: Currency List</li></ul>

#### Returns

`Promise`<`IResponseWithSync`<{ `createdAt`: `string` ; `currencyCode`: `string` ; `currencySymbol`: `string` ; `currencyType`: ``"REAL"`` \| ``"VIRTUAL"`` ; `decimals`: `number` ; `localizationDescriptions`: `undefined` \| ``null`` \| `Record`<`string`, `string`\> ; `namespace`: `string` ; `updatedAt`: `string`  }[]\>\>

#### Defined in

[packages/sdk/src/api/platform/CurrencyApi.ts:20](https://bitbucket.org/accelbyte/justice-odin/src/d39c8cbe8/accelbyte-web-sdk/packages/sdk/src/api/platform/CurrencyApi.ts#lines-20)

___

### getCurrencyMap

▸ **getCurrencyMap**(): `Promise`<{ `error`: `IResponseError` ; `onSync`: (`syncedData`: (`_`: `IResponse`<{ `createdAt`: `string` ; `currencyCode`: `string` ; `currencySymbol`: `string` ; `currencyType`: ``"REAL"`` \| ``"VIRTUAL"`` ; `decimals`: `number` ; `localizationDescriptions`: `undefined` \| ``null`` \| `Record`<`string`, `string`\> ; `namespace`: `string` ; `updatedAt`: `string`  }[]\>) => `void`) => `void` ; `response`: ``null``  } \| { `error`: ``null`` = result.error; `value`: `Map`<`string`, { `createdAt`: `string` ; `currencyCode`: `string` ; `currencySymbol`: `string` ; `currencyType`: ``"REAL"`` \| ``"VIRTUAL"`` ; `decimals`: `number` ; `localizationDescriptions`: `undefined` \| ``null`` \| `Record`<`string`, `string`\> ; `namespace`: `string` ; `updatedAt`: `string`  }\>  }\>

Get the currencies list and convert into a map of currency code and the currency itself

#### Returns

`Promise`<{ `error`: `IResponseError` ; `onSync`: (`syncedData`: (`_`: `IResponse`<{ `createdAt`: `string` ; `currencyCode`: `string` ; `currencySymbol`: `string` ; `currencyType`: ``"REAL"`` \| ``"VIRTUAL"`` ; `decimals`: `number` ; `localizationDescriptions`: `undefined` \| ``null`` \| `Record`<`string`, `string`\> ; `namespace`: `string` ; `updatedAt`: `string`  }[]\>) => `void`) => `void` ; `response`: ``null``  } \| { `error`: ``null`` = result.error; `value`: `Map`<`string`, { `createdAt`: `string` ; `currencyCode`: `string` ; `currencySymbol`: `string` ; `currencyType`: ``"REAL"`` \| ``"VIRTUAL"`` ; `decimals`: `number` ; `localizationDescriptions`: `undefined` \| ``null`` \| `Record`<`string`, `string`\> ; `namespace`: `string` ; `updatedAt`: `string`  }\>  }\>

#### Defined in

[packages/sdk/src/api/platform/CurrencyApi.ts:27](https://bitbucket.org/accelbyte/justice-odin/src/d39c8cbe8/accelbyte-web-sdk/packages/sdk/src/api/platform/CurrencyApi.ts#lines-27)
