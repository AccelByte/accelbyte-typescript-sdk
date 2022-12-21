[@accelbyte/sdk](../README.md) / [iam/InputValidationHelper](../modules/iam_InputValidationHelper.md) / InputValidationHelper

# Class: InputValidationHelper

[iam/InputValidationHelper](../modules/iam_InputValidationHelper.md).InputValidationHelper

## Table of contents

### Constructors

- [constructor](iam_InputValidationHelper.InputValidationHelper.md#constructor)

### Methods

- [getFormattedValidation](iam_InputValidationHelper.InputValidationHelper.md#getformattedvalidation)
- [getValidationByKey](iam_InputValidationHelper.InputValidationHelper.md#getvalidationbykey)
- [getValidationDescription](iam_InputValidationHelper.InputValidationHelper.md#getvalidationdescription)
- [validateDisplayName](iam_InputValidationHelper.InputValidationHelper.md#validatedisplayname)
- [validateEmail](iam_InputValidationHelper.InputValidationHelper.md#validateemail)
- [validatePassword](iam_InputValidationHelper.InputValidationHelper.md#validatepassword)
- [validateUserName](iam_InputValidationHelper.InputValidationHelper.md#validateusername)
- [validateWithRegex](iam_InputValidationHelper.InputValidationHelper.md#validatewithregex)

## Constructors

### constructor

• **new InputValidationHelper**()

## Methods

### getFormattedValidation

▸ `Static` **getFormattedValidation**(`validation`): `RegexGeneratorParam`

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `validation` | `Object` | `undefined` |
| `validation.allowAllSpecialCharacters` | `boolean` | `undefined` |
| `validation.allowDigit` | `boolean` | `undefined` |
| `validation.allowLetter` | `boolean` | `undefined` |
| `validation.allowSpace` | `boolean` | `undefined` |
| `validation.allowUnicode` | `boolean` | `undefined` |
| `validation.blockedWord` | `string`[] | `undefined` |
| `validation.description` | { message: string[]; language: string; } | `InputValidationDescription` |
| `validation.isCustomRegex` | `boolean` | `undefined` |
| `validation.letterCase` | `string` | `undefined` |
| `validation.maxLength` | `number` | `undefined` |
| `validation.maxRepeatingAlphaNum` | `number` | `undefined` |
| `validation.maxRepeatingSpecialCharacter` | `number` | `undefined` |
| `validation.minCharType` | `number` | `undefined` |
| `validation.minLength` | `number` | `undefined` |
| `validation.regex` | `string` | `undefined` |
| `validation.specialCharacterLocation` | `string` | `undefined` |
| `validation.specialCharacters` | `string`[] | `undefined` |

#### Returns

`RegexGeneratorParam`

#### Defined in

[packages/sdk/src/api/iam/InputValidationHelper.ts:103](https://github.com/AccelByte/accelbyte-web-sdk/blob/3b81b16/packages/sdk/src/api/iam/InputValidationHelper.ts#L103)

___

### getValidationByKey

▸ `Static` **getValidationByKey**(`key`, `validations`): `undefined` \| { `allowAllSpecialCharacters`: `boolean` ; `allowDigit`: `boolean` ; `allowLetter`: `boolean` ; `allowSpace`: `boolean` ; `allowUnicode`: `boolean` ; `blockedWord`: `string`[] ; `description`: { message: string[]; language: string; } = InputValidationDescription; `isCustomRegex`: `boolean` ; `letterCase`: `string` ; `maxLength`: `number` ; `maxRepeatingAlphaNum`: `number` ; `maxRepeatingSpecialCharacter`: `number` ; `minCharType`: `number` ; `minLength`: `number` ; `regex`: `string` ; `specialCharacterLocation`: `string` ; `specialCharacters`: `string`[]  }

#### Parameters

| Name | Type |
| :------ | :------ |
| `key` | ``"username"`` \| ``"displayName"`` \| ``"password"`` \| ``"email"`` |
| `validations` | { `field`: `string` ; `validation`: { allowAllSpecialCharacters: boolean; allowDigit: boolean; allowLetter: boolean; allowSpace: boolean; allowUnicode: boolean; blockedWord: string[]; description: { message: string[]; language: string; }; ... 9 more ...; specialCharacters: string[]; } = ValidationDetailPublic }[] |

#### Returns

`undefined` \| { `allowAllSpecialCharacters`: `boolean` ; `allowDigit`: `boolean` ; `allowLetter`: `boolean` ; `allowSpace`: `boolean` ; `allowUnicode`: `boolean` ; `blockedWord`: `string`[] ; `description`: { message: string[]; language: string; } = InputValidationDescription; `isCustomRegex`: `boolean` ; `letterCase`: `string` ; `maxLength`: `number` ; `maxRepeatingAlphaNum`: `number` ; `maxRepeatingSpecialCharacter`: `number` ; `minCharType`: `number` ; `minLength`: `number` ; `regex`: `string` ; `specialCharacterLocation`: `string` ; `specialCharacters`: `string`[]  }

#### Defined in

[packages/sdk/src/api/iam/InputValidationHelper.ts:97](https://github.com/AccelByte/accelbyte-web-sdk/blob/3b81b16/packages/sdk/src/api/iam/InputValidationHelper.ts#L97)

___

### getValidationDescription

▸ `Static` **getValidationDescription**(`key`, `validations`): `string`[]

#### Parameters

| Name | Type |
| :------ | :------ |
| `key` | ``"username"`` \| ``"displayName"`` \| ``"password"`` \| ``"email"`` |
| `validations` | { `field`: `string` ; `validation`: { allowAllSpecialCharacters: boolean; allowDigit: boolean; allowLetter: boolean; allowSpace: boolean; allowUnicode: boolean; blockedWord: string[]; description: { message: string[]; language: string; }; ... 9 more ...; specialCharacters: string[]; } = ValidationDetailPublic }[] |

#### Returns

`string`[]

#### Defined in

[packages/sdk/src/api/iam/InputValidationHelper.ts:85](https://github.com/AccelByte/accelbyte-web-sdk/blob/3b81b16/packages/sdk/src/api/iam/InputValidationHelper.ts#L85)

___

### validateDisplayName

▸ `Static` **validateDisplayName**(`value`, `isRequired?`, `validations`): ``null`` \| ``"invalidFormat"`` \| ``"empty"`` \| ``"lessThanLengthLimit"`` \| ``"exceedLengthLimit"`` \| ``"containsForbiddenWords"``

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `value` | `string` | `undefined` |
| `isRequired` | `boolean` | `false` |
| `validations` | { `field`: `string` ; `validation`: { allowAllSpecialCharacters: boolean; allowDigit: boolean; allowLetter: boolean; allowSpace: boolean; allowUnicode: boolean; blockedWord: string[]; description: { message: string[]; language: string; }; ... 9 more ...; specialCharacters: string[]; } = ValidationDetailPublic }[] | `undefined` |

#### Returns

``null`` \| ``"invalidFormat"`` \| ``"empty"`` \| ``"lessThanLengthLimit"`` \| ``"exceedLengthLimit"`` \| ``"containsForbiddenWords"``

#### Defined in

[packages/sdk/src/api/iam/InputValidationHelper.ts:26](https://github.com/AccelByte/accelbyte-web-sdk/blob/3b81b16/packages/sdk/src/api/iam/InputValidationHelper.ts#L26)

___

### validateEmail

▸ `Static` **validateEmail**(`value`, `validations`): ``null`` \| ``"invalidFormat"`` \| ``"empty"`` \| ``"lessThanLengthLimit"`` \| ``"exceedLengthLimit"`` \| ``"containsForbiddenWords"``

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `string` |
| `validations` | { `field`: `string` ; `validation`: { allowAllSpecialCharacters: boolean; allowDigit: boolean; allowLetter: boolean; allowSpace: boolean; allowUnicode: boolean; blockedWord: string[]; description: { message: string[]; language: string; }; ... 9 more ...; specialCharacters: string[]; } = ValidationDetailPublic }[] |

#### Returns

``null`` \| ``"invalidFormat"`` \| ``"empty"`` \| ``"lessThanLengthLimit"`` \| ``"exceedLengthLimit"`` \| ``"containsForbiddenWords"``

#### Defined in

[packages/sdk/src/api/iam/InputValidationHelper.ts:44](https://github.com/AccelByte/accelbyte-web-sdk/blob/3b81b16/packages/sdk/src/api/iam/InputValidationHelper.ts#L44)

___

### validatePassword

▸ `Static` **validatePassword**(`value`, `validations`): ``null`` \| ``"invalidFormat"`` \| ``"empty"`` \| ``"lessThanLengthLimit"`` \| ``"exceedLengthLimit"`` \| ``"containsForbiddenWords"``

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `string` |
| `validations` | { `field`: `string` ; `validation`: { allowAllSpecialCharacters: boolean; allowDigit: boolean; allowLetter: boolean; allowSpace: boolean; allowUnicode: boolean; blockedWord: string[]; description: { message: string[]; language: string; }; ... 9 more ...; specialCharacters: string[]; } = ValidationDetailPublic }[] |

#### Returns

``null`` \| ``"invalidFormat"`` \| ``"empty"`` \| ``"lessThanLengthLimit"`` \| ``"exceedLengthLimit"`` \| ``"containsForbiddenWords"``

#### Defined in

[packages/sdk/src/api/iam/InputValidationHelper.ts:38](https://github.com/AccelByte/accelbyte-web-sdk/blob/3b81b16/packages/sdk/src/api/iam/InputValidationHelper.ts#L38)

___

### validateUserName

▸ `Static` **validateUserName**(`value`, `validations`): ``null`` \| ``"invalidFormat"`` \| ``"empty"`` \| ``"lessThanLengthLimit"`` \| ``"exceedLengthLimit"`` \| ``"containsForbiddenWords"``

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `string` |
| `validations` | { `field`: `string` ; `validation`: { allowAllSpecialCharacters: boolean; allowDigit: boolean; allowLetter: boolean; allowSpace: boolean; allowUnicode: boolean; blockedWord: string[]; description: { message: string[]; language: string; }; ... 9 more ...; specialCharacters: string[]; } = ValidationDetailPublic }[] |

#### Returns

``null`` \| ``"invalidFormat"`` \| ``"empty"`` \| ``"lessThanLengthLimit"`` \| ``"exceedLengthLimit"`` \| ``"containsForbiddenWords"``

#### Defined in

[packages/sdk/src/api/iam/InputValidationHelper.ts:32](https://github.com/AccelByte/accelbyte-web-sdk/blob/3b81b16/packages/sdk/src/api/iam/InputValidationHelper.ts#L32)

___

### validateWithRegex

▸ `Static` **validateWithRegex**(`value`, `«destructured»`): ``null`` \| ``"invalidFormat"`` \| ``"empty"`` \| ``"lessThanLengthLimit"`` \| ``"exceedLengthLimit"`` \| ``"containsForbiddenWords"``

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `value` | `string` | `undefined` |
| `«destructured»` | `Object` | `undefined` |
| › `isRequired?` | `boolean` | `undefined` |
| › `validation` | `Object` | `undefined` |
| › `validation.allowAllSpecialCharacters` | `boolean` | `undefined` |
| › `validation.allowDigit` | `boolean` | `undefined` |
| › `validation.allowLetter` | `boolean` | `undefined` |
| › `validation.allowSpace` | `boolean` | `undefined` |
| › `validation.allowUnicode` | `boolean` | `undefined` |
| › `validation.blockedWord` | `string`[] | `undefined` |
| › `validation.description` | { message: string[]; language: string; } | `InputValidationDescription` |
| › `validation.isCustomRegex` | `boolean` | `undefined` |
| › `validation.letterCase` | `string` | `undefined` |
| › `validation.maxLength` | `number` | `undefined` |
| › `validation.maxRepeatingAlphaNum` | `number` | `undefined` |
| › `validation.maxRepeatingSpecialCharacter` | `number` | `undefined` |
| › `validation.minCharType` | `number` | `undefined` |
| › `validation.minLength` | `number` | `undefined` |
| › `validation.regex` | `string` | `undefined` |
| › `validation.specialCharacterLocation` | `string` | `undefined` |
| › `validation.specialCharacters` | `string`[] | `undefined` |

#### Returns

``null`` \| ``"invalidFormat"`` \| ``"empty"`` \| ``"lessThanLengthLimit"`` \| ``"exceedLengthLimit"`` \| ``"containsForbiddenWords"``

#### Defined in

[packages/sdk/src/api/iam/InputValidationHelper.ts:50](https://github.com/AccelByte/accelbyte-web-sdk/blob/3b81b16/packages/sdk/src/api/iam/InputValidationHelper.ts#L50)
