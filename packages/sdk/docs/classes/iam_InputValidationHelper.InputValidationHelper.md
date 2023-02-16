[@accelbyte/sdk](../README.md) / [iam/InputValidationHelper](../modules/iam_InputValidationHelper.md) / InputValidationHelper

# Class: InputValidationHelper

[iam/InputValidationHelper](../modules/iam_InputValidationHelper.md).InputValidationHelper

## Table of contents

### Constructors

- [constructor](iam_InputValidationHelper.InputValidationHelper.md#constructor)

### Methods

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

### getValidationByKey

▸ `Static` **getValidationByKey**(`key`, `validations`): `undefined` \| { `allowAllSpecialCharacters`: `boolean` ; `allowDigit`: `boolean` ; `allowLetter`: `boolean` ; `allowSpace`: `boolean` ; `allowUnicode`: `boolean` ; `blockedWord`: `string`[] ; `description`: { message: string[]; language: string; } = InputValidationDescription; `isCustomRegex`: `boolean` ; `letterCase`: `string` ; `maxLength`: `number` ; `maxRepeatingAlphaNum`: `number` ; `maxRepeatingSpecialCharacter`: `number` ; `minCharType`: `number` ; `minLength`: `number` ; `regex`: `string` ; `specialCharacterLocation`: `string` ; `specialCharacters`: `string`[]  }

#### Parameters

| Name | Type |
| :------ | :------ |
| `key` | ``"username"`` \| ``"displayName"`` \| ``"password"`` \| ``"email"`` |
| `validations` | `InputValidationDataPublic`[] |

#### Returns

`undefined` \| { `allowAllSpecialCharacters`: `boolean` ; `allowDigit`: `boolean` ; `allowLetter`: `boolean` ; `allowSpace`: `boolean` ; `allowUnicode`: `boolean` ; `blockedWord`: `string`[] ; `description`: { message: string[]; language: string; } = InputValidationDescription; `isCustomRegex`: `boolean` ; `letterCase`: `string` ; `maxLength`: `number` ; `maxRepeatingAlphaNum`: `number` ; `maxRepeatingSpecialCharacter`: `number` ; `minCharType`: `number` ; `minLength`: `number` ; `regex`: `string` ; `specialCharacterLocation`: `string` ; `specialCharacters`: `string`[]  }

#### Defined in

[packages/sdk/src/api/iam/InputValidationHelper.ts:94](https://github.com/AccelByte/accelbyte-web-sdk/blob/d43c233/packages/sdk/src/api/iam/InputValidationHelper.ts#L94)

___

### getValidationDescription

▸ `Static` **getValidationDescription**(`key`, `validations`): `string`[]

#### Parameters

| Name | Type |
| :------ | :------ |
| `key` | ``"username"`` \| ``"displayName"`` \| ``"password"`` \| ``"email"`` |
| `validations` | `InputValidationDataPublic`[] |

#### Returns

`string`[]

#### Defined in

[packages/sdk/src/api/iam/InputValidationHelper.ts:82](https://github.com/AccelByte/accelbyte-web-sdk/blob/d43c233/packages/sdk/src/api/iam/InputValidationHelper.ts#L82)

___

### validateDisplayName

▸ `Static` **validateDisplayName**(`value`, `isRequired?`, `validations`): ``null`` \| ``"empty"`` \| ``"lessThanLengthLimit"`` \| ``"exceedLengthLimit"`` \| ``"invalidFormat"`` \| ``"containsForbiddenWords"``

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `value` | `string` | `undefined` |
| `isRequired` | `boolean` | `false` |
| `validations` | `InputValidationDataPublic`[] | `undefined` |

#### Returns

``null`` \| ``"empty"`` \| ``"lessThanLengthLimit"`` \| ``"exceedLengthLimit"`` \| ``"invalidFormat"`` \| ``"containsForbiddenWords"``

#### Defined in

[packages/sdk/src/api/iam/InputValidationHelper.ts:23](https://github.com/AccelByte/accelbyte-web-sdk/blob/d43c233/packages/sdk/src/api/iam/InputValidationHelper.ts#L23)

___

### validateEmail

▸ `Static` **validateEmail**(`value`, `validations`): ``null`` \| ``"empty"`` \| ``"lessThanLengthLimit"`` \| ``"exceedLengthLimit"`` \| ``"invalidFormat"`` \| ``"containsForbiddenWords"``

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `string` |
| `validations` | `InputValidationDataPublic`[] |

#### Returns

``null`` \| ``"empty"`` \| ``"lessThanLengthLimit"`` \| ``"exceedLengthLimit"`` \| ``"invalidFormat"`` \| ``"containsForbiddenWords"``

#### Defined in

[packages/sdk/src/api/iam/InputValidationHelper.ts:41](https://github.com/AccelByte/accelbyte-web-sdk/blob/d43c233/packages/sdk/src/api/iam/InputValidationHelper.ts#L41)

___

### validatePassword

▸ `Static` **validatePassword**(`value`, `validations`): ``null`` \| ``"empty"`` \| ``"lessThanLengthLimit"`` \| ``"exceedLengthLimit"`` \| ``"invalidFormat"`` \| ``"containsForbiddenWords"``

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `string` |
| `validations` | `InputValidationDataPublic`[] |

#### Returns

``null`` \| ``"empty"`` \| ``"lessThanLengthLimit"`` \| ``"exceedLengthLimit"`` \| ``"invalidFormat"`` \| ``"containsForbiddenWords"``

#### Defined in

[packages/sdk/src/api/iam/InputValidationHelper.ts:35](https://github.com/AccelByte/accelbyte-web-sdk/blob/d43c233/packages/sdk/src/api/iam/InputValidationHelper.ts#L35)

___

### validateUserName

▸ `Static` **validateUserName**(`value`, `validations`): ``null`` \| ``"empty"`` \| ``"lessThanLengthLimit"`` \| ``"exceedLengthLimit"`` \| ``"invalidFormat"`` \| ``"containsForbiddenWords"``

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `string` |
| `validations` | `InputValidationDataPublic`[] |

#### Returns

``null`` \| ``"empty"`` \| ``"lessThanLengthLimit"`` \| ``"exceedLengthLimit"`` \| ``"invalidFormat"`` \| ``"containsForbiddenWords"``

#### Defined in

[packages/sdk/src/api/iam/InputValidationHelper.ts:29](https://github.com/AccelByte/accelbyte-web-sdk/blob/d43c233/packages/sdk/src/api/iam/InputValidationHelper.ts#L29)

___

### validateWithRegex

▸ `Static` **validateWithRegex**(`value`, `«destructured»`): ``null`` \| ``"empty"`` \| ``"lessThanLengthLimit"`` \| ``"exceedLengthLimit"`` \| ``"invalidFormat"`` \| ``"containsForbiddenWords"``

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `string` |
| `«destructured»` | `Object` |
| › `isRequired?` | `boolean` |
| › `validation` | `ValidationDetailPublic` |

#### Returns

``null`` \| ``"empty"`` \| ``"lessThanLengthLimit"`` \| ``"exceedLengthLimit"`` \| ``"invalidFormat"`` \| ``"containsForbiddenWords"``

#### Defined in

[packages/sdk/src/api/iam/InputValidationHelper.ts:47](https://github.com/AccelByte/accelbyte-web-sdk/blob/d43c233/packages/sdk/src/api/iam/InputValidationHelper.ts#L47)
