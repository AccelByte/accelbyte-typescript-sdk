[@accelbyte/sdk](../README.md) / iam/UserAuthorization

# Module: iam/UserAuthorization

## Table of contents

### Classes

- [LoginErrorCancelled](../classes/iam_UserAuthorization.LoginErrorCancelled.md)
- [LoginErrorExpired](../classes/iam_UserAuthorization.LoginErrorExpired.md)
- [LoginErrorUnknown](../classes/iam_UserAuthorization.LoginErrorUnknown.md)
- [LoginErrorUnmatchedState](../classes/iam_UserAuthorization.LoginErrorUnmatchedState.md)
- [UserAuthorization](../classes/iam_UserAuthorization.UserAuthorization.md)

### Interfaces

- [MFAData](../interfaces/iam_UserAuthorization.MFAData.md)

### Type Aliases

- [LoginErrorParam](iam_UserAuthorization.md#loginerrorparam)
- [TWOFA\_PAGE](iam_UserAuthorization.md#twofa_page)

### Variables

- [LoginErrorParam](iam_UserAuthorization.md#loginerrorparam-1)
- [MFA\_DATA\_STORAGE\_KEY](iam_UserAuthorization.md#mfa_data_storage_key)
- [TWOFA\_PAGE](iam_UserAuthorization.md#twofa_page-1)

## Type Aliases

### LoginErrorParam

Ƭ **LoginErrorParam**: `z.TypeOf`<typeof [`LoginErrorParam`](iam_UserAuthorization.md#loginerrorparam-1)\>

#### Defined in

[packages/sdk/src/api/iam/UserAuthorization.ts:48](https://github.com/AccelByte/accelbyte-web-sdk/blob/5292758/packages/sdk/src/api/iam/UserAuthorization.ts#L48)

[packages/sdk/src/api/iam/UserAuthorization.ts:49](https://github.com/AccelByte/accelbyte-web-sdk/blob/5292758/packages/sdk/src/api/iam/UserAuthorization.ts#L49)

___

### TWOFA\_PAGE

Ƭ **TWOFA\_PAGE**: `z.TypeOf`<typeof [`TWOFA_PAGE`](iam_UserAuthorization.md#twofa_page-1)\>

#### Defined in

[packages/sdk/src/api/iam/UserAuthorization.ts:30](https://github.com/AccelByte/accelbyte-web-sdk/blob/5292758/packages/sdk/src/api/iam/UserAuthorization.ts#L30)

[packages/sdk/src/api/iam/UserAuthorization.ts:31](https://github.com/AccelByte/accelbyte-web-sdk/blob/5292758/packages/sdk/src/api/iam/UserAuthorization.ts#L31)

## Variables

### LoginErrorParam

• `Const` **LoginErrorParam**: `ZodEnum`<[``"cancelled"``, ``"login_session_expired"``]\>

#### Defined in

[packages/sdk/src/api/iam/UserAuthorization.ts:48](https://github.com/AccelByte/accelbyte-web-sdk/blob/5292758/packages/sdk/src/api/iam/UserAuthorization.ts#L48)

[packages/sdk/src/api/iam/UserAuthorization.ts:49](https://github.com/AccelByte/accelbyte-web-sdk/blob/5292758/packages/sdk/src/api/iam/UserAuthorization.ts#L49)

___

### MFA\_DATA\_STORAGE\_KEY

• `Const` **MFA\_DATA\_STORAGE\_KEY**: ``"mfaData"``

#### Defined in

[packages/sdk/src/api/iam/UserAuthorization.ts:23](https://github.com/AccelByte/accelbyte-web-sdk/blob/5292758/packages/sdk/src/api/iam/UserAuthorization.ts#L23)

___

### TWOFA\_PAGE

• `Const` **TWOFA\_PAGE**: `ZodEnum`<[``"authenticator"``, ``"backupCode"``, ``"email"``, ``"options"``, ``"verify"``]\>

#### Defined in

[packages/sdk/src/api/iam/UserAuthorization.ts:30](https://github.com/AccelByte/accelbyte-web-sdk/blob/5292758/packages/sdk/src/api/iam/UserAuthorization.ts#L30)

[packages/sdk/src/api/iam/UserAuthorization.ts:31](https://github.com/AccelByte/accelbyte-web-sdk/blob/5292758/packages/sdk/src/api/iam/UserAuthorization.ts#L31)
