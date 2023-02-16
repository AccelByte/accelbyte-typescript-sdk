[@accelbyte/sdk](../README.md) / [iam/IamHelper](../modules/iam_IamHelper.md) / IamHelper

# Class: IamHelper

[iam/IamHelper](../modules/iam_IamHelper.md).IamHelper

## Table of contents

### Constructors

- [constructor](iam_IamHelper.IamHelper.md#constructor)

### Methods

- [currentUserCanOrder](iam_IamHelper.IamHelper.md#currentusercanorder)
- [currentUserIsEligible](iam_IamHelper.IamHelper.md#currentuseriseligible)
- [currentUserIsHeadlessAccount](iam_IamHelper.IamHelper.md#currentuserisheadlessaccount)
- [currentUserIsUpdatingEmail](iam_IamHelper.IamHelper.md#currentuserisupdatingemail)
- [currentUserNeedsVerification](iam_IamHelper.IamHelper.md#currentuserneedsverification)
- [getAuthorizationCodeParams](iam_IamHelper.IamHelper.md#getauthorizationcodeparams)

## Constructors

### constructor

• **new IamHelper**()

## Methods

### currentUserCanOrder

▸ `Static` **currentUserCanOrder**(`user`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `user` | ``null`` \| `UserResponseV3` |

#### Returns

`boolean`

#### Defined in

[packages/sdk/src/api/iam/IamHelper.ts:48](https://github.com/AccelByte/accelbyte-web-sdk/blob/36ddeb4/packages/sdk/src/api/iam/IamHelper.ts#L48)

___

### currentUserIsEligible

▸ `Static` **currentUserIsEligible**(`user`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `user` | ``null`` \| `UserResponseV3` |

#### Returns

`boolean`

#### Defined in

[packages/sdk/src/api/iam/IamHelper.ts:43](https://github.com/AccelByte/accelbyte-web-sdk/blob/36ddeb4/packages/sdk/src/api/iam/IamHelper.ts#L43)

___

### currentUserIsHeadlessAccount

▸ `Static` **currentUserIsHeadlessAccount**(`user`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `user` | ``null`` \| `UserResponseV3` |

#### Returns

`boolean`

#### Defined in

[packages/sdk/src/api/iam/IamHelper.ts:23](https://github.com/AccelByte/accelbyte-web-sdk/blob/36ddeb4/packages/sdk/src/api/iam/IamHelper.ts#L23)

___

### currentUserIsUpdatingEmail

▸ `Static` **currentUserIsUpdatingEmail**(`user`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `user` | ``null`` \| `UserResponseV3` |

#### Returns

`boolean`

#### Defined in

[packages/sdk/src/api/iam/IamHelper.ts:33](https://github.com/AccelByte/accelbyte-web-sdk/blob/36ddeb4/packages/sdk/src/api/iam/IamHelper.ts#L33)

___

### currentUserNeedsVerification

▸ `Static` **currentUserNeedsVerification**(`user`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `user` | ``null`` \| `UserResponseV3` |

#### Returns

`boolean`

#### Defined in

[packages/sdk/src/api/iam/IamHelper.ts:28](https://github.com/AccelByte/accelbyte-web-sdk/blob/36ddeb4/packages/sdk/src/api/iam/IamHelper.ts#L28)

___

### getAuthorizationCodeParams

▸ `Static` **getAuthorizationCodeParams**(`urlSearchParams`): `Object`

#### Parameters

| Name | Type |
| :------ | :------ |
| `urlSearchParams` | `string` |

#### Returns

`Object`

| Name | Type |
| :------ | :------ |
| `code` | ``null`` \| `string` |
| `error` | ``null`` \| `string` |
| `state` | `string` |

#### Defined in

[packages/sdk/src/api/iam/IamHelper.ts:11](https://github.com/AccelByte/accelbyte-web-sdk/blob/36ddeb4/packages/sdk/src/api/iam/IamHelper.ts#L11)
