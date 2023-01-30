[@accelbyte/sdk](../README.md) / [basic/MiscApi](../modules/basic_MiscApi.md) / MiscApi

# Class: MiscApi

[basic/MiscApi](../modules/basic_MiscApi.md).MiscApi

## Table of contents

### Methods

- [getCountries](basic_MiscApi.MiscApi.md#getcountries)
- [getLanguages](basic_MiscApi.MiscApi.md#getlanguages)

## Methods

### getCountries

▸ **getCountries**(`lang?`): `Promise`<`IResponseWithSync`<{ `code`: `undefined` \| ``null`` \| `string` ; `name`: `undefined` \| ``null`` \| `string`  }[]\>\>

List countries.<br>Other detail info: <ul><li><i>Returns</i>: country code list</li></ul>

#### Parameters

| Name | Type |
| :------ | :------ |
| `lang?` | `string` |

#### Returns

`Promise`<`IResponseWithSync`<{ `code`: `undefined` \| ``null`` \| `string` ; `name`: `undefined` \| ``null`` \| `string`  }[]\>\>

#### Defined in

[packages/sdk/src/api/basic/MiscApi.ts:19](https://github.com/AccelByte/accelbyte-web-sdk/blob/5292758/packages/sdk/src/api/basic/MiscApi.ts#L19)

___

### getLanguages

▸ **getLanguages**(): `Promise`<`IResponseWithSync`<`unknown`\>\>

#### Returns

`Promise`<`IResponseWithSync`<`unknown`\>\>

#### Defined in

[packages/sdk/src/api/basic/MiscApi.ts:23](https://github.com/AccelByte/accelbyte-web-sdk/blob/5292758/packages/sdk/src/api/basic/MiscApi.ts#L23)
