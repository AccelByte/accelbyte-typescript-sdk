[@accelbyte/sdk](../README.md) / [iam/InputValidationApi](../modules/iam_InputValidationApi.md) / InputValidationsApi

# Class: InputValidationsApi

[iam/InputValidationApi](../modules/iam_InputValidationApi.md).InputValidationsApi

## Table of contents

### Methods

- [getValidations](iam_InputValidationApi.InputValidationsApi.md#getvalidations)

## Methods

### getValidations

▸ **getValidations**(`languageCode?`, `defaultOnEmpty?`): `Promise`<`IResponseWithSync`<{ `data`: { validation: { allowAllSpecialCharacters: boolean; allowDigit: boolean; allowLetter: boolean; allowSpace: boolean; allowUnicode: boolean; blockedWord: string[]; description: { message: string[]; language: string; }; ... 9 more ...; specialCharacters: string[]; }; field: string; }[] ; `version`: `number`  }\>\>

<p>No role required</p>
   <p>This method is to get list of input validation configuration.</p>
   <p><code>regex</code> parameter will be returned if <code>isCustomRegex</code> is true. Otherwise, it will be empty.</p>

#### Parameters

| Name | Type |
| :------ | :------ |
| `languageCode?` | ``null`` \| `string` |
| `defaultOnEmpty?` | ``null`` \| `boolean` |

#### Returns

`Promise`<`IResponseWithSync`<{ `data`: { validation: { allowAllSpecialCharacters: boolean; allowDigit: boolean; allowLetter: boolean; allowSpace: boolean; allowUnicode: boolean; blockedWord: string[]; description: { message: string[]; language: string; }; ... 9 more ...; specialCharacters: string[]; }; field: string; }[] ; `version`: `number`  }\>\>

#### Defined in

[packages/sdk/src/api/iam/InputValidationApi.ts:22](https://github.com/AccelByte/accelbyte-web-sdk/blob/68edbf1/packages/sdk/src/api/iam/InputValidationApi.ts#L22)
