[@accelbyte/sdk](../README.md) / [iam/InputValidationHelper](../modules/iam_InputValidationHelper.md) / InputValidationHelper

# Class: InputValidationHelper

[iam/InputValidationHelper](../modules/iam_InputValidationHelper.md).InputValidationHelper

## Table of contents

### Constructors

- [constructor](iam_InputValidationHelper.InputValidationHelper.md#constructor)

### Methods

- [getFormattedValidation](iam_InputValidationHelper.InputValidationHelper.md#getformattedvalidation)
- [getInputValidationByKey](iam_InputValidationHelper.InputValidationHelper.md#getinputvalidationbykey)
- [getValidateDescription](iam_InputValidationHelper.InputValidationHelper.md#getvalidatedescription)
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

[packages/sdk/src/api/iam/InputValidationHelper.ts:103](https://bitbucket.org/accelbyte/justice-odin/src/d39c8cbe8/accelbyte-web-sdk/packages/sdk/src/api/iam/InputValidationHelper.ts#lines-103)

___

### getInputValidationByKey

▸ `Static` **getInputValidationByKey**(`key`, `validations`): `undefined` \| { `allowAllSpecialCharacters`: `boolean` ; `allowDigit`: `boolean` ; `allowLetter`: `boolean` ; `allowSpace`: `boolean` ; `allowUnicode`: `boolean` ; `blockedWord`: `string`[] ; `description`: { message: string[]; language: string; } = InputValidationDescription; `isCustomRegex`: `boolean` ; `letterCase`: `string` ; `maxLength`: `number` ; `maxRepeatingAlphaNum`: `number` ; `maxRepeatingSpecialCharacter`: `number` ; `minCharType`: `number` ; `minLength`: `number` ; `regex`: `string` ; `specialCharacterLocation`: `string` ; `specialCharacters`: `string`[]  }

#### Parameters

| Name | Type |
| :------ | :------ |
| `key` | ``"username"`` \| ``"displayName"`` \| ``"password"`` \| ``"email"`` |
| `validations` | { `field`: `string` ; `validation`: { allowAllSpecialCharacters: boolean; allowDigit: boolean; allowLetter: boolean; allowSpace: boolean; allowUnicode: boolean; blockedWord: string[]; description: { message: string[]; language: string; }; ... 9 more ...; specialCharacters: string[]; } = ValidationDetailPublic }[] |

#### Returns

`undefined` \| { `allowAllSpecialCharacters`: `boolean` ; `allowDigit`: `boolean` ; `allowLetter`: `boolean` ; `allowSpace`: `boolean` ; `allowUnicode`: `boolean` ; `blockedWord`: `string`[] ; `description`: { message: string[]; language: string; } = InputValidationDescription; `isCustomRegex`: `boolean` ; `letterCase`: `string` ; `maxLength`: `number` ; `maxRepeatingAlphaNum`: `number` ; `maxRepeatingSpecialCharacter`: `number` ; `minCharType`: `number` ; `minLength`: `number` ; `regex`: `string` ; `specialCharacterLocation`: `string` ; `specialCharacters`: `string`[]  }

#### Defined in

[packages/sdk/src/api/iam/InputValidationHelper.ts:62](https://bitbucket.org/accelbyte/justice-odin/src/d39c8cbe8/accelbyte-web-sdk/packages/sdk/src/api/iam/InputValidationHelper.ts#lines-62)

___

### getValidateDescription

▸ `Static` **getValidateDescription**(`key`, `validations`): `string`[]

#### Parameters

| Name | Type |
| :------ | :------ |
| `key` | ``"username"`` \| ``"displayName"`` \| ``"password"`` \| ``"email"`` |
| `validations` | { `field`: `string` ; `validation`: { allowAllSpecialCharacters: boolean; allowDigit: boolean; allowLetter: boolean; allowSpace: boolean; allowUnicode: boolean; blockedWord: string[]; description: { message: string[]; language: string; }; ... 9 more ...; specialCharacters: string[]; } = ValidationDetailPublic }[] |

#### Returns

`string`[]

#### Defined in

[packages/sdk/src/api/iam/InputValidationHelper.ts:26](https://bitbucket.org/accelbyte/justice-odin/src/d39c8cbe8/accelbyte-web-sdk/packages/sdk/src/api/iam/InputValidationHelper.ts#lines-26)

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

[packages/sdk/src/api/iam/InputValidationHelper.ts:38](https://bitbucket.org/accelbyte/justice-odin/src/d39c8cbe8/accelbyte-web-sdk/packages/sdk/src/api/iam/InputValidationHelper.ts#lines-38)

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

[packages/sdk/src/api/iam/InputValidationHelper.ts:56](https://bitbucket.org/accelbyte/justice-odin/src/d39c8cbe8/accelbyte-web-sdk/packages/sdk/src/api/iam/InputValidationHelper.ts#lines-56)

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

[packages/sdk/src/api/iam/InputValidationHelper.ts:50](https://bitbucket.org/accelbyte/justice-odin/src/d39c8cbe8/accelbyte-web-sdk/packages/sdk/src/api/iam/InputValidationHelper.ts#lines-50)

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

[packages/sdk/src/api/iam/InputValidationHelper.ts:44](https://bitbucket.org/accelbyte/justice-odin/src/d39c8cbe8/accelbyte-web-sdk/packages/sdk/src/api/iam/InputValidationHelper.ts#lines-44)

___

### validateWithRegex

▸ `Static` **validateWithRegex**(`value`, `__namedParameters`): ``null`` \| ``"invalidFormat"`` \| ``"empty"`` \| ``"lessThanLengthLimit"`` \| ``"exceedLengthLimit"`` \| ``"containsForbiddenWords"``

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `value` | `string` | `undefined` |
| `__namedParameters` | `Object` | `undefined` |
| `__namedParameters.isRequired?` | `boolean` | `undefined` |
| `__namedParameters.validation` | `Object` | `undefined` |
| `__namedParameters.validation.allowAllSpecialCharacters` | `boolean` | `undefined` |
| `__namedParameters.validation.allowDigit` | `boolean` | `undefined` |
| `__namedParameters.validation.allowLetter` | `boolean` | `undefined` |
| `__namedParameters.validation.allowSpace` | `boolean` | `undefined` |
| `__namedParameters.validation.allowUnicode` | `boolean` | `undefined` |
| `__namedParameters.validation.blockedWord` | `string`[] | `undefined` |
| `__namedParameters.validation.description` | { message: string[]; language: string; } | `InputValidationDescription` |
| `__namedParameters.validation.isCustomRegex` | `boolean` | `undefined` |
| `__namedParameters.validation.letterCase` | `string` | `undefined` |
| `__namedParameters.validation.maxLength` | `number` | `undefined` |
| `__namedParameters.validation.maxRepeatingAlphaNum` | `number` | `undefined` |
| `__namedParameters.validation.maxRepeatingSpecialCharacter` | `number` | `undefined` |
| `__namedParameters.validation.minCharType` | `number` | `undefined` |
| `__namedParameters.validation.minLength` | `number` | `undefined` |
| `__namedParameters.validation.regex` | `string` | `undefined` |
| `__namedParameters.validation.specialCharacterLocation` | `string` | `undefined` |
| `__namedParameters.validation.specialCharacters` | `string`[] | `undefined` |

#### Returns

``null`` \| ``"invalidFormat"`` \| ``"empty"`` \| ``"lessThanLengthLimit"`` \| ``"exceedLengthLimit"`` \| ``"containsForbiddenWords"``

#### Defined in

[packages/sdk/src/api/iam/InputValidationHelper.ts:68](https://bitbucket.org/accelbyte/justice-odin/src/d39c8cbe8/accelbyte-web-sdk/packages/sdk/src/api/iam/InputValidationHelper.ts#lines-68)
