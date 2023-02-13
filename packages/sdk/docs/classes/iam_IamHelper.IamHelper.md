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
| `user` | ``null`` \| { `authType`: `string` ; `avatarUrl`: `undefined` \| ``null`` \| `string` ; `bans`: { ban: string; banId: string; endDate: string; }[] ; `country`: `string` ; `createdAt`: `string` ; `dateOfBirth`: `undefined` \| ``null`` \| `string` ; `deletionStatus`: `boolean` ; `displayName`: `string` ; `emailAddress`: `string` ; `emailVerified`: `boolean` ; `enabled`: `boolean` ; `lastDateOfBirthChangedTime`: `string` ; `lastEnabledChangedTime`: `string` ; `namespace`: `string` ; `namespaceRoles`: `undefined` \| ``null`` \| { namespace: string; roleId: string; }[] ; `newEmailAddress`: `undefined` \| ``null`` \| `string` ; `oldEmailAddress`: `string` ; `permissions`: { schedAction?: number \| null \| undefined; schedCron?: string \| null \| undefined; schedRange?: string[] \| null \| undefined; action: number; resource: string; }[] ; `phoneNumber`: `undefined` \| ``null`` \| `string` ; `phoneVerified`: `boolean` ; `platformAvatarUrl`: `undefined` \| ``null`` \| `string` ; `platformDisplayName`: `undefined` \| ``null`` \| `string` ; `platformId`: `undefined` \| ``null`` \| `string` ; `platformUserId`: `undefined` \| ``null`` \| `string` ; `roles`: `string`[] ; `userId`: `string` ; `userName`: `undefined` \| ``null`` \| `string`  } |

#### Returns

`boolean`

#### Defined in

[packages/sdk/src/api/iam/IamHelper.ts:48](https://github.com/AccelByte/accelbyte-web-sdk/blob/8cb9ca2/packages/sdk/src/api/iam/IamHelper.ts#L48)

___

### currentUserIsEligible

▸ `Static` **currentUserIsEligible**(`user`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `user` | ``null`` \| { `authType`: `string` ; `avatarUrl`: `undefined` \| ``null`` \| `string` ; `bans`: { ban: string; banId: string; endDate: string; }[] ; `country`: `string` ; `createdAt`: `string` ; `dateOfBirth`: `undefined` \| ``null`` \| `string` ; `deletionStatus`: `boolean` ; `displayName`: `string` ; `emailAddress`: `string` ; `emailVerified`: `boolean` ; `enabled`: `boolean` ; `lastDateOfBirthChangedTime`: `string` ; `lastEnabledChangedTime`: `string` ; `namespace`: `string` ; `namespaceRoles`: `undefined` \| ``null`` \| { namespace: string; roleId: string; }[] ; `newEmailAddress`: `undefined` \| ``null`` \| `string` ; `oldEmailAddress`: `string` ; `permissions`: { schedAction?: number \| null \| undefined; schedCron?: string \| null \| undefined; schedRange?: string[] \| null \| undefined; action: number; resource: string; }[] ; `phoneNumber`: `undefined` \| ``null`` \| `string` ; `phoneVerified`: `boolean` ; `platformAvatarUrl`: `undefined` \| ``null`` \| `string` ; `platformDisplayName`: `undefined` \| ``null`` \| `string` ; `platformId`: `undefined` \| ``null`` \| `string` ; `platformUserId`: `undefined` \| ``null`` \| `string` ; `roles`: `string`[] ; `userId`: `string` ; `userName`: `undefined` \| ``null`` \| `string`  } |

#### Returns

`boolean`

#### Defined in

[packages/sdk/src/api/iam/IamHelper.ts:43](https://github.com/AccelByte/accelbyte-web-sdk/blob/8cb9ca2/packages/sdk/src/api/iam/IamHelper.ts#L43)

___

### currentUserIsHeadlessAccount

▸ `Static` **currentUserIsHeadlessAccount**(`user`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `user` | ``null`` \| { `authType`: `string` ; `avatarUrl`: `undefined` \| ``null`` \| `string` ; `bans`: { ban: string; banId: string; endDate: string; }[] ; `country`: `string` ; `createdAt`: `string` ; `dateOfBirth`: `undefined` \| ``null`` \| `string` ; `deletionStatus`: `boolean` ; `displayName`: `string` ; `emailAddress`: `string` ; `emailVerified`: `boolean` ; `enabled`: `boolean` ; `lastDateOfBirthChangedTime`: `string` ; `lastEnabledChangedTime`: `string` ; `namespace`: `string` ; `namespaceRoles`: `undefined` \| ``null`` \| { namespace: string; roleId: string; }[] ; `newEmailAddress`: `undefined` \| ``null`` \| `string` ; `oldEmailAddress`: `string` ; `permissions`: { schedAction?: number \| null \| undefined; schedCron?: string \| null \| undefined; schedRange?: string[] \| null \| undefined; action: number; resource: string; }[] ; `phoneNumber`: `undefined` \| ``null`` \| `string` ; `phoneVerified`: `boolean` ; `platformAvatarUrl`: `undefined` \| ``null`` \| `string` ; `platformDisplayName`: `undefined` \| ``null`` \| `string` ; `platformId`: `undefined` \| ``null`` \| `string` ; `platformUserId`: `undefined` \| ``null`` \| `string` ; `roles`: `string`[] ; `userId`: `string` ; `userName`: `undefined` \| ``null`` \| `string`  } |

#### Returns

`boolean`

#### Defined in

[packages/sdk/src/api/iam/IamHelper.ts:23](https://github.com/AccelByte/accelbyte-web-sdk/blob/8cb9ca2/packages/sdk/src/api/iam/IamHelper.ts#L23)

___

### currentUserIsUpdatingEmail

▸ `Static` **currentUserIsUpdatingEmail**(`user`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `user` | ``null`` \| { `authType`: `string` ; `avatarUrl`: `undefined` \| ``null`` \| `string` ; `bans`: { ban: string; banId: string; endDate: string; }[] ; `country`: `string` ; `createdAt`: `string` ; `dateOfBirth`: `undefined` \| ``null`` \| `string` ; `deletionStatus`: `boolean` ; `displayName`: `string` ; `emailAddress`: `string` ; `emailVerified`: `boolean` ; `enabled`: `boolean` ; `lastDateOfBirthChangedTime`: `string` ; `lastEnabledChangedTime`: `string` ; `namespace`: `string` ; `namespaceRoles`: `undefined` \| ``null`` \| { namespace: string; roleId: string; }[] ; `newEmailAddress`: `undefined` \| ``null`` \| `string` ; `oldEmailAddress`: `string` ; `permissions`: { schedAction?: number \| null \| undefined; schedCron?: string \| null \| undefined; schedRange?: string[] \| null \| undefined; action: number; resource: string; }[] ; `phoneNumber`: `undefined` \| ``null`` \| `string` ; `phoneVerified`: `boolean` ; `platformAvatarUrl`: `undefined` \| ``null`` \| `string` ; `platformDisplayName`: `undefined` \| ``null`` \| `string` ; `platformId`: `undefined` \| ``null`` \| `string` ; `platformUserId`: `undefined` \| ``null`` \| `string` ; `roles`: `string`[] ; `userId`: `string` ; `userName`: `undefined` \| ``null`` \| `string`  } |

#### Returns

`boolean`

#### Defined in

[packages/sdk/src/api/iam/IamHelper.ts:33](https://github.com/AccelByte/accelbyte-web-sdk/blob/8cb9ca2/packages/sdk/src/api/iam/IamHelper.ts#L33)

___

### currentUserNeedsVerification

▸ `Static` **currentUserNeedsVerification**(`user`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `user` | ``null`` \| { `authType`: `string` ; `avatarUrl`: `undefined` \| ``null`` \| `string` ; `bans`: { ban: string; banId: string; endDate: string; }[] ; `country`: `string` ; `createdAt`: `string` ; `dateOfBirth`: `undefined` \| ``null`` \| `string` ; `deletionStatus`: `boolean` ; `displayName`: `string` ; `emailAddress`: `string` ; `emailVerified`: `boolean` ; `enabled`: `boolean` ; `lastDateOfBirthChangedTime`: `string` ; `lastEnabledChangedTime`: `string` ; `namespace`: `string` ; `namespaceRoles`: `undefined` \| ``null`` \| { namespace: string; roleId: string; }[] ; `newEmailAddress`: `undefined` \| ``null`` \| `string` ; `oldEmailAddress`: `string` ; `permissions`: { schedAction?: number \| null \| undefined; schedCron?: string \| null \| undefined; schedRange?: string[] \| null \| undefined; action: number; resource: string; }[] ; `phoneNumber`: `undefined` \| ``null`` \| `string` ; `phoneVerified`: `boolean` ; `platformAvatarUrl`: `undefined` \| ``null`` \| `string` ; `platformDisplayName`: `undefined` \| ``null`` \| `string` ; `platformId`: `undefined` \| ``null`` \| `string` ; `platformUserId`: `undefined` \| ``null`` \| `string` ; `roles`: `string`[] ; `userId`: `string` ; `userName`: `undefined` \| ``null`` \| `string`  } |

#### Returns

`boolean`

#### Defined in

[packages/sdk/src/api/iam/IamHelper.ts:28](https://github.com/AccelByte/accelbyte-web-sdk/blob/8cb9ca2/packages/sdk/src/api/iam/IamHelper.ts#L28)

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

[packages/sdk/src/api/iam/IamHelper.ts:11](https://github.com/AccelByte/accelbyte-web-sdk/blob/8cb9ca2/packages/sdk/src/api/iam/IamHelper.ts#L11)
