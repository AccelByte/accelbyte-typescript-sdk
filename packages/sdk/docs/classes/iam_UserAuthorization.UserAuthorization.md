[@accelbyte/sdk](../README.md) / [iam/UserAuthorization](../modules/iam_UserAuthorization.md) / UserAuthorization

# Class: UserAuthorization

[iam/UserAuthorization](../modules/iam_UserAuthorization.md).UserAuthorization

## Table of contents

### Methods

- [createForgotPasswordURL](iam_UserAuthorization.UserAuthorization.md#createforgotpasswordurl)
- [createLoginURL](iam_UserAuthorization.UserAuthorization.md#createloginurl)
- [deduceLoginError](iam_UserAuthorization.UserAuthorization.md#deduceloginerror)
- [exchangeAuthorizationCode](iam_UserAuthorization.UserAuthorization.md#exchangeauthorizationcode)
- [getCodeChallenge](iam_UserAuthorization.UserAuthorization.md#getcodechallenge)
- [getMfaDataFromError](iam_UserAuthorization.UserAuthorization.md#getmfadatafromerror)
- [getMfaDataFromStorage](iam_UserAuthorization.UserAuthorization.md#getmfadatafromstorage)
- [loginWithAuthorizationCode](iam_UserAuthorization.UserAuthorization.md#loginwithauthorizationcode)
- [matchReceivedState](iam_UserAuthorization.UserAuthorization.md#matchreceivedstate)
- [refreshToken](iam_UserAuthorization.UserAuthorization.md#refreshtoken)
- [removeMfaDataFromStorage](iam_UserAuthorization.UserAuthorization.md#removemfadatafromstorage)

## Methods

### createForgotPasswordURL

▸ **createForgotPasswordURL**(): `string`

#### Returns

`string`

#### Defined in

[packages/sdk/src/api/iam/UserAuthorization.ts:301](https://github.com/AccelByte/accelbyte-web-sdk/blob/68edbf1/packages/sdk/src/api/iam/UserAuthorization.ts#L301)

___

### createLoginURL

▸ **createLoginURL**(`returnPath?`, `targetAuthPage?`, `oneTimeLinkCode?`): `string`

#### Parameters

| Name | Type |
| :------ | :------ |
| `returnPath?` | ``null`` \| `string` |
| `targetAuthPage?` | `string` |
| `oneTimeLinkCode?` | `string` |

#### Returns

`string`

#### Defined in

[packages/sdk/src/api/iam/UserAuthorization.ts:271](https://github.com/AccelByte/accelbyte-web-sdk/blob/68edbf1/packages/sdk/src/api/iam/UserAuthorization.ts#L271)

___

### deduceLoginError

▸ **deduceLoginError**(`error`): [`LoginErrorCancelled`](iam_UserAuthorization.LoginErrorCancelled.md) \| [`LoginErrorExpired`](iam_UserAuthorization.LoginErrorExpired.md) \| [`LoginErrorUnknown`](iam_UserAuthorization.LoginErrorUnknown.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `error` | `string` |

#### Returns

[`LoginErrorCancelled`](iam_UserAuthorization.LoginErrorCancelled.md) \| [`LoginErrorExpired`](iam_UserAuthorization.LoginErrorExpired.md) \| [`LoginErrorUnknown`](iam_UserAuthorization.LoginErrorUnknown.md)

#### Defined in

[packages/sdk/src/api/iam/UserAuthorization.ts:223](https://github.com/AccelByte/accelbyte-web-sdk/blob/68edbf1/packages/sdk/src/api/iam/UserAuthorization.ts#L223)

___

### exchangeAuthorizationCode

▸ **exchangeAuthorizationCode**(`«destructured»`): `Promise`<``null`` \| { `mfaData`: `undefined` \| { `defaultFactor`: `any` = default\_factor; `email`: `any` ; `factors`: `any` ; `mfaToken`: `any` = mfa\_token } = loginResult.mfaData; `response`: ``null`` \| `IDataStatus`<{ `access_token`: `string` ; `auth_trust_id`: `undefined` \| ``null`` \| `string` ; `bans`: `undefined` \| ``null`` \| { disabledDate?: string \| null \| undefined; ban: string; endDate: string; enabled: boolean; targetedNamespace: string; }[] ; `display_name`: `undefined` \| ``null`` \| `string` ; `expires_in`: `number` ; `is_comply`: `undefined` \| ``null`` \| `boolean` ; `jflgs`: `undefined` \| ``null`` \| `number` ; `namespace`: `string` ; `namespace_roles`: `undefined` \| ``null`` \| { namespace: string; roleId: string; }[] ; `permissions`: { schedAction?: number \| null \| undefined; schedCron?: string \| null \| undefined; schedRange?: string[] \| null \| undefined; action: number; resource: string; }[] ; `platform_id`: `undefined` \| ``null`` \| `string` ; `platform_user_id`: `undefined` \| ``null`` \| `string` ; `refresh_expires_in`: `undefined` \| ``null`` \| `number` ; `refresh_token`: `undefined` \| ``null`` \| `string` ; `roles`: `undefined` \| ``null`` \| `string`[] ; `scope`: `string` ; `token_type`: `string` ; `user_id`: `undefined` \| ``null`` \| `string` ; `xuid`: `undefined` \| ``null`` \| `string`  }\> = loginResult.response; `returnPath`: `any`  }\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `«destructured»` | `Object` |
| › `code?` | ``null`` \| `string` |
| › `error?` | ``null`` \| `string` |
| › `state?` | ``null`` \| `string` |

#### Returns

`Promise`<``null`` \| { `mfaData`: `undefined` \| { `defaultFactor`: `any` = default\_factor; `email`: `any` ; `factors`: `any` ; `mfaToken`: `any` = mfa\_token } = loginResult.mfaData; `response`: ``null`` \| `IDataStatus`<{ `access_token`: `string` ; `auth_trust_id`: `undefined` \| ``null`` \| `string` ; `bans`: `undefined` \| ``null`` \| { disabledDate?: string \| null \| undefined; ban: string; endDate: string; enabled: boolean; targetedNamespace: string; }[] ; `display_name`: `undefined` \| ``null`` \| `string` ; `expires_in`: `number` ; `is_comply`: `undefined` \| ``null`` \| `boolean` ; `jflgs`: `undefined` \| ``null`` \| `number` ; `namespace`: `string` ; `namespace_roles`: `undefined` \| ``null`` \| { namespace: string; roleId: string; }[] ; `permissions`: { schedAction?: number \| null \| undefined; schedCron?: string \| null \| undefined; schedRange?: string[] \| null \| undefined; action: number; resource: string; }[] ; `platform_id`: `undefined` \| ``null`` \| `string` ; `platform_user_id`: `undefined` \| ``null`` \| `string` ; `refresh_expires_in`: `undefined` \| ``null`` \| `number` ; `refresh_token`: `undefined` \| ``null`` \| `string` ; `roles`: `undefined` \| ``null`` \| `string`[] ; `scope`: `string` ; `token_type`: `string` ; `user_id`: `undefined` \| ``null`` \| `string` ; `xuid`: `undefined` \| ``null`` \| `string`  }\> = loginResult.response; `returnPath`: `any`  }\>

#### Defined in

[packages/sdk/src/api/iam/UserAuthorization.ts:234](https://github.com/AccelByte/accelbyte-web-sdk/blob/68edbf1/packages/sdk/src/api/iam/UserAuthorization.ts#L234)

___

### getCodeChallenge

▸ **getCodeChallenge**(): `Object`

#### Returns

`Object`

| Name | Type |
| :------ | :------ |
| `challenge` | `string` |
| `verifier` | `string` |

#### Defined in

[packages/sdk/src/api/iam/UserAuthorization.ts:324](https://github.com/AccelByte/accelbyte-web-sdk/blob/68edbf1/packages/sdk/src/api/iam/UserAuthorization.ts#L324)

___

### getMfaDataFromError

▸ **getMfaDataFromError**(`errorResponse`): `undefined` \| { `defaultFactor`: `any` = default\_factor; `email`: `any` ; `factors`: `any` ; `mfaToken`: `any` = mfa\_token }

#### Parameters

| Name | Type |
| :------ | :------ |
| `errorResponse` | `AxiosResponse`<`any`, `any`\> |

#### Returns

`undefined` \| { `defaultFactor`: `any` = default\_factor; `email`: `any` ; `factors`: `any` ; `mfaToken`: `any` = mfa\_token }

#### Defined in

[packages/sdk/src/api/iam/UserAuthorization.ts:181](https://github.com/AccelByte/accelbyte-web-sdk/blob/68edbf1/packages/sdk/src/api/iam/UserAuthorization.ts#L181)

___

### getMfaDataFromStorage

▸ **getMfaDataFromStorage**(): `any`

#### Returns

`any`

#### Defined in

[packages/sdk/src/api/iam/UserAuthorization.ts:194](https://github.com/AccelByte/accelbyte-web-sdk/blob/68edbf1/packages/sdk/src/api/iam/UserAuthorization.ts#L194)

___

### loginWithAuthorizationCode

▸ **loginWithAuthorizationCode**(`«destructured»`): `Promise`<{ `error`: `IResponseError` ; `mfaData`: `undefined` \| { `defaultFactor`: `any` = default\_factor; `email`: `any` ; `factors`: `any` ; `mfaToken`: `any` = mfa\_token } ; `response`: ``null``  } \| { `error`: ``null`` ; `mfaData`: `undefined` \| { `defaultFactor`: `any` = default\_factor; `email`: `any` ; `factors`: `any` ; `mfaToken`: `any` = mfa\_token } ; `response`: `IDataStatus`<{ `access_token`: `string` ; `auth_trust_id`: `undefined` \| ``null`` \| `string` ; `bans`: `undefined` \| ``null`` \| { disabledDate?: string \| null \| undefined; ban: string; endDate: string; enabled: boolean; targetedNamespace: string; }[] ; `display_name`: `undefined` \| ``null`` \| `string` ; `expires_in`: `number` ; `is_comply`: `undefined` \| ``null`` \| `boolean` ; `jflgs`: `undefined` \| ``null`` \| `number` ; `namespace`: `string` ; `namespace_roles`: `undefined` \| ``null`` \| { namespace: string; roleId: string; }[] ; `permissions`: { schedAction?: number \| null \| undefined; schedCron?: string \| null \| undefined; schedRange?: string[] \| null \| undefined; action: number; resource: string; }[] ; `platform_id`: `undefined` \| ``null`` \| `string` ; `platform_user_id`: `undefined` \| ``null`` \| `string` ; `refresh_expires_in`: `undefined` \| ``null`` \| `number` ; `refresh_token`: `undefined` \| ``null`` \| `string` ; `roles`: `undefined` \| ``null`` \| `string`[] ; `scope`: `string` ; `token_type`: `string` ; `user_id`: `undefined` \| ``null`` \| `string` ; `xuid`: `undefined` \| ``null`` \| `string`  }\>  }\>

<p>This method supports grant type:</p><ol>
     <li>Grant Type == <code>authorization_code</code>:<br />
       &nbsp;&nbsp;&nbsp; It generates the user token by given the authorization
       code which generated in "/iam/v3/authenticate" API response. It should also pass
       in the redirect_uri, which should be the same as generating the
       authorization code request.
     </li>
     <li>Grant Type == <code>password</code>:<br />
       &nbsp;&nbsp;&nbsp; The grant type to use for authenticating a user, whether it's by email / username and password combination
       or through platform.
     </li>
     <li>Grant Type == <code>refresh_token</code>:<br />
       &nbsp;&nbsp;&nbsp; Used to get a new access token for a valid refresh token.
     </li>
     <li>Grant Type == <code>client_credentials</code>:<br />
       &nbsp;&nbsp;&nbsp; It generates a token by checking the client credentials provided through Authorization header.
     </li></ol>
     <h2>Access Token Content</h2>
     <p>Following is the access token’s content:</p>
     <ul>
     <li>
       <p><strong>namespace</strong>. It is the namespace the token was generated from.</p>
     </li>
     <li>
       <p><strong>display_name</strong>. The display name of the sub. It is empty if the token is generated from the client credential</p>
     </li>
     <li>
       <p><strong>roles</strong>. The sub’s roles. It is empty if the token is generated from the client credential</p>
     </li>
     <li>
       <p><strong>namespace_roles</strong>. The sub’s roles scoped to namespace. Improvement from roles, which make the role scoped to specific namespace instead of global to publisher namespace</p>
     </li>
     <li>
       <p><strong>permissions</strong>. The sub or aud’ permissions</p>
     </li>
     <li>
       <p><strong>bans</strong>. The sub’s list of bans. It is used by the IAM client for validating the token.</p>
     </li>
     <li>
       <p><strong>jflgs</strong>. It stands for Justice Flags. It is a special flag used for storing additional status information regarding the sub. It is implemented as a bit mask. Following explains what each bit represents:</p>
     <ul>
       <li><p>1: Email Address Verified</p></li>
       <li><p>2: Phone Number Verified</p></li>
       <li><p>4: Anonymous</p></li>
       <li><p>8: Suspicious Login</p></li>
     </ul>
     </li>
     <li>
       <p><strong>aud</strong>. The aud is the targeted resource server.</p>
     </li>
     <li>
       <p><strong>iat</strong>. The time the token issues at. It is in Epoch time format</p>
     </li>
     <li>
       <p><strong>exp</strong>. The time the token expires. It is in Epoch time format</p>
     </li>
     <li>
       <p><strong>client_id</strong>. The UserID. The sub is omitted if the token is generated from client credential</p>
     </li>
     <li>
       <p><strong>scope</strong>. The scope of the access request, expressed as a list of space-delimited, case-sensitive strings</p>
     </li>
     </ul>
     <h2>Bans</h2>
     <p>The JWT contains user's active bans with its expiry date. List of ban types can be obtained from /bans.</p>
     <h2>Device Cookie Validation</h2>
     <p><i><b>For grant type "password" only</b></i></p>
     <p>Device Cookie is used to protect the user account from brute force login attack, <a target="_blank" href="https://owasp.org/www-community/Slow_Down_Online_Guessing_Attacks_with_Device_Cookies">more detail from OWASP<a>.</p>
     <p>This method will read device cookie from request header <b>Auth-Trust-Id</b>. If device cookie not found, it will generate a new one and set it into response body <b>auth_trust_id</b> when successfully login.</p>
     <h2>Track Login History</h2>
     <p>This method will track login history to detect suspicious login activity, please provide <b>Device-Id</b> (alphanumeric) in request header parameter otherwise it will set to "unknown".</p>
     <p>Align with General Data Protection Regulation in Europe, user login history will be kept within 28 days by default"</p>
            <h2>2FA remember device</h2>
            <p>To remember device for 2FA, should provide cookie: device_token or header: Device-Token</p>
     <p>action code: 10703

#### Parameters

| Name | Type |
| :------ | :------ |
| `«destructured»` | `Object` |
| › `code` | `string` |
| › `codeVerifier` | `string` |

#### Returns

`Promise`<{ `error`: `IResponseError` ; `mfaData`: `undefined` \| { `defaultFactor`: `any` = default\_factor; `email`: `any` ; `factors`: `any` ; `mfaToken`: `any` = mfa\_token } ; `response`: ``null``  } \| { `error`: ``null`` ; `mfaData`: `undefined` \| { `defaultFactor`: `any` = default\_factor; `email`: `any` ; `factors`: `any` ; `mfaToken`: `any` = mfa\_token } ; `response`: `IDataStatus`<{ `access_token`: `string` ; `auth_trust_id`: `undefined` \| ``null`` \| `string` ; `bans`: `undefined` \| ``null`` \| { disabledDate?: string \| null \| undefined; ban: string; endDate: string; enabled: boolean; targetedNamespace: string; }[] ; `display_name`: `undefined` \| ``null`` \| `string` ; `expires_in`: `number` ; `is_comply`: `undefined` \| ``null`` \| `boolean` ; `jflgs`: `undefined` \| ``null`` \| `number` ; `namespace`: `string` ; `namespace_roles`: `undefined` \| ``null`` \| { namespace: string; roleId: string; }[] ; `permissions`: { schedAction?: number \| null \| undefined; schedCron?: string \| null \| undefined; schedRange?: string[] \| null \| undefined; action: number; resource: string; }[] ; `platform_id`: `undefined` \| ``null`` \| `string` ; `platform_user_id`: `undefined` \| ``null`` \| `string` ; `refresh_expires_in`: `undefined` \| ``null`` \| `number` ; `refresh_token`: `undefined` \| ``null`` \| `string` ; `roles`: `undefined` \| ``null`` \| `string`[] ; `scope`: `string` ; `token_type`: `string` ; `user_id`: `undefined` \| ``null`` \| `string` ; `xuid`: `undefined` \| ``null`` \| `string`  }\>  }\>

#### Defined in

[packages/sdk/src/api/iam/UserAuthorization.ts:147](https://github.com/AccelByte/accelbyte-web-sdk/blob/68edbf1/packages/sdk/src/api/iam/UserAuthorization.ts#L147)

___

### matchReceivedState

▸ **matchReceivedState**(`maybeSentState`): `MatchReceivedStateResult`

#### Parameters

| Name | Type |
| :------ | :------ |
| `maybeSentState` | `string` |

#### Returns

`MatchReceivedStateResult`

#### Defined in

[packages/sdk/src/api/iam/UserAuthorization.ts:203](https://github.com/AccelByte/accelbyte-web-sdk/blob/68edbf1/packages/sdk/src/api/iam/UserAuthorization.ts#L203)

___

### refreshToken

▸ **refreshToken**(): `Promise`<``false`` \| `Partial`<{ `access_token`: `string` ; `auth_trust_id`: `undefined` \| ``null`` \| `string` ; `bans`: `undefined` \| ``null`` \| { disabledDate?: string \| null \| undefined; ban: string; endDate: string; enabled: boolean; targetedNamespace: string; }[] ; `display_name`: `undefined` \| ``null`` \| `string` ; `expires_in`: `number` ; `is_comply`: `undefined` \| ``null`` \| `boolean` ; `jflgs`: `undefined` \| ``null`` \| `number` ; `namespace`: `string` ; `namespace_roles`: `undefined` \| ``null`` \| { namespace: string; roleId: string; }[] ; `permissions`: { schedAction?: number \| null \| undefined; schedCron?: string \| null \| undefined; schedRange?: string[] \| null \| undefined; action: number; resource: string; }[] ; `platform_id`: `undefined` \| ``null`` \| `string` ; `platform_user_id`: `undefined` \| ``null`` \| `string` ; `refresh_expires_in`: `undefined` \| ``null`` \| `number` ; `refresh_token`: `undefined` \| ``null`` \| `string` ; `roles`: `undefined` \| ``null`` \| `string`[] ; `scope`: `string` ; `token_type`: `string` ; `user_id`: `undefined` \| ``null`` \| `string` ; `xuid`: `undefined` \| ``null`` \| `string`  }\>\>

#### Returns

`Promise`<``false`` \| `Partial`<{ `access_token`: `string` ; `auth_trust_id`: `undefined` \| ``null`` \| `string` ; `bans`: `undefined` \| ``null`` \| { disabledDate?: string \| null \| undefined; ban: string; endDate: string; enabled: boolean; targetedNamespace: string; }[] ; `display_name`: `undefined` \| ``null`` \| `string` ; `expires_in`: `number` ; `is_comply`: `undefined` \| ``null`` \| `boolean` ; `jflgs`: `undefined` \| ``null`` \| `number` ; `namespace`: `string` ; `namespace_roles`: `undefined` \| ``null`` \| { namespace: string; roleId: string; }[] ; `permissions`: { schedAction?: number \| null \| undefined; schedCron?: string \| null \| undefined; schedRange?: string[] \| null \| undefined; action: number; resource: string; }[] ; `platform_id`: `undefined` \| ``null`` \| `string` ; `platform_user_id`: `undefined` \| ``null`` \| `string` ; `refresh_expires_in`: `undefined` \| ``null`` \| `number` ; `refresh_token`: `undefined` \| ``null`` \| `string` ; `roles`: `undefined` \| ``null`` \| `string`[] ; `scope`: `string` ; `token_type`: `string` ; `user_id`: `undefined` \| ``null`` \| `string` ; `xuid`: `undefined` \| ``null`` \| `string`  }\>\>

#### Defined in

[packages/sdk/src/api/iam/UserAuthorization.ts:328](https://github.com/AccelByte/accelbyte-web-sdk/blob/68edbf1/packages/sdk/src/api/iam/UserAuthorization.ts#L328)

___

### removeMfaDataFromStorage

▸ **removeMfaDataFromStorage**(): `void`

#### Returns

`void`

#### Defined in

[packages/sdk/src/api/iam/UserAuthorization.ts:199](https://github.com/AccelByte/accelbyte-web-sdk/blob/68edbf1/packages/sdk/src/api/iam/UserAuthorization.ts#L199)
