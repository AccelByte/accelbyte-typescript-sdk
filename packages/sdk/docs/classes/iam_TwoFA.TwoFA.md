[@accelbyte/sdk](../README.md) / [iam/TwoFA](../modules/iam_TwoFA.md) / TwoFA

# Class: TwoFA

[iam/TwoFA](../modules/iam_TwoFA.md).TwoFA

## Table of contents

### Methods

- [disableAuthenticator](iam_TwoFA.TwoFA.md#disableauthenticator)
- [disableBackupCodes](iam_TwoFA.TwoFA.md#disablebackupcodes)
- [disableEmailMethod](iam_TwoFA.TwoFA.md#disableemailmethod)
- [enable2FAAuthenticator](iam_TwoFA.TwoFA.md#enable2faauthenticator)
- [enable2FABackupCodes](iam_TwoFA.TwoFA.md#enable2fabackupcodes)
- [enableEmailMethod](iam_TwoFA.TwoFA.md#enableemailmethod)
- [generateBackupCodes](iam_TwoFA.TwoFA.md#generatebackupcodes)
- [generateSecretKey](iam_TwoFA.TwoFA.md#generatesecretkey)
- [getBackupCode](iam_TwoFA.TwoFA.md#getbackupcode)
- [getEnabledMethods](iam_TwoFA.TwoFA.md#getenabledmethods)
- [requestEmailCode](iam_TwoFA.TwoFA.md#requestemailcode)
- [set2FAAsDefault](iam_TwoFA.TwoFA.md#set2faasdefault)

## Methods

### disableAuthenticator

▸ **disableAuthenticator**(): `Promise`<`IResponse`<`unknown`\>\>

<p>This method is used to disable 2FA authenticator.</p>
<p>This method Requires valid user access token</p>

#### Returns

`Promise`<`IResponse`<`unknown`\>\>

#### Defined in

[packages/sdk/src/api/iam/TwoFA.ts:58](https://github.com/AccelByte/accelbyte-web-sdk/blob/ed77741/packages/sdk/src/api/iam/TwoFA.ts#L58)

___

### disableBackupCodes

▸ **disableBackupCodes**(): `Promise`<`IResponse`<`unknown`\>\>

<p>This method is used to enable 2FA backup codes.</p>
<p>This method Requires valid user access token</p>

#### Returns

`Promise`<`IResponse`<`unknown`\>\>

#### Defined in

[packages/sdk/src/api/iam/TwoFA.ts:49](https://github.com/AccelByte/accelbyte-web-sdk/blob/ed77741/packages/sdk/src/api/iam/TwoFA.ts#L49)

___

### disableEmailMethod

▸ **disableEmailMethod**(): `Promise`<`IResponse`<`unknown`\>\>

#### Returns

`Promise`<`IResponse`<`unknown`\>\>

#### Defined in

[packages/sdk/src/api/iam/TwoFA.ts:107](https://github.com/AccelByte/accelbyte-web-sdk/blob/ed77741/packages/sdk/src/api/iam/TwoFA.ts#L107)

___

### enable2FAAuthenticator

▸ **enable2FAAuthenticator**(`code`): `Promise`<`IResponse`<`unknown`\>\>

<p>This method is used to enable 2FA authenticator.</p>
<p>This method Requires valid user access token</p>

#### Parameters

| Name | Type |
| :------ | :------ |
| `code` | `string` |

#### Returns

`Promise`<`IResponse`<`unknown`\>\>

#### Defined in

[packages/sdk/src/api/iam/TwoFA.ts:85](https://github.com/AccelByte/accelbyte-web-sdk/blob/ed77741/packages/sdk/src/api/iam/TwoFA.ts#L85)

___

### enable2FABackupCodes

▸ **enable2FABackupCodes**(): `Promise`<`IResponse`<{ `generatedAt`: `number` ; `invalidCodes`: `undefined` \| ``null`` \| `string`[] ; `validCodes`: `undefined` \| ``null`` \| `string`[]  }\>\>

<p>This method is used to enable 2FA backup codes.</p>
<p>This method Requires valid user access token</p>

#### Returns

`Promise`<`IResponse`<{ `generatedAt`: `number` ; `invalidCodes`: `undefined` \| ``null`` \| `string`[] ; `validCodes`: `undefined` \| ``null`` \| `string`[]  }\>\>

#### Defined in

[packages/sdk/src/api/iam/TwoFA.ts:31](https://github.com/AccelByte/accelbyte-web-sdk/blob/ed77741/packages/sdk/src/api/iam/TwoFA.ts#L31)

___

### enableEmailMethod

▸ **enableEmailMethod**(`code`): `Promise`<`IResponse`<`unknown`\>\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `code` | `string` |

#### Returns

`Promise`<`IResponse`<`unknown`\>\>

#### Defined in

[packages/sdk/src/api/iam/TwoFA.ts:103](https://github.com/AccelByte/accelbyte-web-sdk/blob/ed77741/packages/sdk/src/api/iam/TwoFA.ts#L103)

___

### generateBackupCodes

▸ **generateBackupCodes**(): `Promise`<`IResponse`<{ `generatedAt`: `number` ; `invalidCodes`: `undefined` \| ``null`` \| `string`[] ; `validCodes`: `undefined` \| ``null`` \| `string`[]  }\>\>

<p>This method is used to enable 2FA backup codes.</p>
<p>This method Requires valid user access token</p>

#### Returns

`Promise`<`IResponse`<{ `generatedAt`: `number` ; `invalidCodes`: `undefined` \| ``null`` \| `string`[] ; `validCodes`: `undefined` \| ``null`` \| `string`[]  }\>\>

#### Defined in

[packages/sdk/src/api/iam/TwoFA.ts:40](https://github.com/AccelByte/accelbyte-web-sdk/blob/ed77741/packages/sdk/src/api/iam/TwoFA.ts#L40)

___

### generateSecretKey

▸ **generateSecretKey**(): `Promise`<`IResponse`<{ `secretKey`: `string` ; `uri`: `string`  }\>\>

<p>This method is used to generate a secret key for 3rd-party authenticator app.
A QR code URI is also returned so that frontend can generate QR code image.</p>
<p>This method Requires valid user access token</p>

#### Returns

`Promise`<`IResponse`<{ `secretKey`: `string` ; `uri`: `string`  }\>\>

#### Defined in

[packages/sdk/src/api/iam/TwoFA.ts:95](https://github.com/AccelByte/accelbyte-web-sdk/blob/ed77741/packages/sdk/src/api/iam/TwoFA.ts#L95)

___

### getBackupCode

▸ **getBackupCode**(): `Promise`<`IResponseWithSync`<{ `generatedAt`: `number` ; `invalidCodes`: `undefined` \| ``null`` \| `string`[] ; `validCodes`: `undefined` \| ``null`` \| `string`[]  }\>\>

<p>This method is used to get 8-digits backup codes.
Each code is a one-time code and will be deleted once used.</p>
<p>This method Requires valid user access token</p>

#### Returns

`Promise`<`IResponseWithSync`<{ `generatedAt`: `number` ; `invalidCodes`: `undefined` \| ``null`` \| `string`[] ; `validCodes`: `undefined` \| ``null`` \| `string`[]  }\>\>

#### Defined in

[packages/sdk/src/api/iam/TwoFA.ts:22](https://github.com/AccelByte/accelbyte-web-sdk/blob/ed77741/packages/sdk/src/api/iam/TwoFA.ts#L22)

___

### getEnabledMethods

▸ **getEnabledMethods**(): `Promise`<`IResponseWithSync`<{ `default`: `string` ; `enabled`: `string`[]  }\>\>

<p>This method is used to get user enabled factors.</p>
<p>This method Requires valid user access token</p>

#### Returns

`Promise`<`IResponseWithSync`<{ `default`: `string` ; `enabled`: `string`[]  }\>\>

#### Defined in

[packages/sdk/src/api/iam/TwoFA.ts:67](https://github.com/AccelByte/accelbyte-web-sdk/blob/ed77741/packages/sdk/src/api/iam/TwoFA.ts#L67)

___

### requestEmailCode

▸ **requestEmailCode**(): `Promise`<`IResponse`<`unknown`\>\>

#### Returns

`Promise`<`IResponse`<`unknown`\>\>

#### Defined in

[packages/sdk/src/api/iam/TwoFA.ts:99](https://github.com/AccelByte/accelbyte-web-sdk/blob/ed77741/packages/sdk/src/api/iam/TwoFA.ts#L99)

___

### set2FAAsDefault

▸ **set2FAAsDefault**(`factor`): `Promise`<`IResponse`<`unknown`\>\>

<p>This method is used to make 2FA factor default.</p>
<p>This method Requires valid user access token</p>

#### Parameters

| Name | Type |
| :------ | :------ |
| `factor` | `string` |

#### Returns

`Promise`<`IResponse`<`unknown`\>\>

#### Defined in

[packages/sdk/src/api/iam/TwoFA.ts:76](https://github.com/AccelByte/accelbyte-web-sdk/blob/ed77741/packages/sdk/src/api/iam/TwoFA.ts#L76)
