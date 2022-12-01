[@accelbyte/sdk](../README.md) / [iam/OAuthApi](../modules/iam_OAuthApi.md) / OAuthApi

# Class: OAuthApi

[iam/OAuthApi](../modules/iam_OAuthApi.md).OAuthApi

## Table of contents

### Methods

- [authenticateWithLink](iam_OAuthApi.OAuthApi.md#authenticatewithlink)
- [getCurrentLocationCountry](iam_OAuthApi.OAuthApi.md#getcurrentlocationcountry)
- [getThirdPartyPlatformToken](iam_OAuthApi.OAuthApi.md#getthirdpartyplatformtoken)
- [logout](iam_OAuthApi.OAuthApi.md#logout)
- [request2FAEmailCode](iam_OAuthApi.OAuthApi.md#request2faemailcode)
- [revoke](iam_OAuthApi.OAuthApi.md#revoke)
- [verify2FA](iam_OAuthApi.OAuthApi.md#verify2fa)

## Methods

### authenticateWithLink

▸ **authenticateWithLink**(`data`): `Promise`<`IResponse`<{ `access_token`: `string` ; `bans`: `undefined` \| ``null`` \| { disabledDate?: string \| null \| undefined; ban: string; endDate: string; enabled: boolean; targetedNamespace: string; }[] ; `display_name`: `string` ; `expires_in`: `number` ; `is_comply`: `undefined` \| ``null`` \| `boolean` ; `jflgs`: `undefined` \| ``null`` \| `number` ; `namespace`: `string` ; `namespace_roles`: `undefined` \| ``null`` \| { namespace: string; roleId: string; }[] ; `permissions`: { schedAction?: number \| null \| undefined; schedCron?: string \| null \| undefined; schedRange?: string[] \| null \| undefined; action: number; resource: string; }[] ; `platform_id`: `undefined` \| ``null`` \| `string` ; `platform_user_id`: `undefined` \| ``null`` \| `string` ; `refresh_expires_in`: `number` ; `refresh_token`: `string` ; `roles`: `undefined` \| ``null`` \| `string`[] ; `scope`: `string` ; `token_type`: `string` ; `user_id`: `string` ; `xuid`: `undefined` \| ``null`` \| `string`  }\>\>

This method is being used to authenticate a user account and perform platform link.
It validates user's email / username and password.
If user already enable 2FA, then invoke <i>/mfa/verify</i> using <b>mfa_token</b> from this method response.

<h2>Device Cookie Validation</h2>

Device Cookie is used to protect the user account from brute force login attack, <a target="_blank" href="https://owasp.org/www-community/Slow_Down_Online_Guessing_Attacks_with_Device_Cookies">more detail from OWASP<a>.
This method will read device cookie from cookie <b>auth-trust-id</b>. If device cookie not found, it will generate a new one and set it into cookie when successfully authenticate.

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `Object` |
| `data.client_id` | ``null`` \| `string` |
| `data.extend_exp?` | ``null`` \| `boolean` |
| `data.linkingToken` | ``null`` \| `string` |
| `data.password` | ``null`` \| `string` |
| `data.username` | ``null`` \| `string` |

#### Returns

`Promise`<`IResponse`<{ `access_token`: `string` ; `bans`: `undefined` \| ``null`` \| { disabledDate?: string \| null \| undefined; ban: string; endDate: string; enabled: boolean; targetedNamespace: string; }[] ; `display_name`: `string` ; `expires_in`: `number` ; `is_comply`: `undefined` \| ``null`` \| `boolean` ; `jflgs`: `undefined` \| ``null`` \| `number` ; `namespace`: `string` ; `namespace_roles`: `undefined` \| ``null`` \| { namespace: string; roleId: string; }[] ; `permissions`: { schedAction?: number \| null \| undefined; schedCron?: string \| null \| undefined; schedRange?: string[] \| null \| undefined; action: number; resource: string; }[] ; `platform_id`: `undefined` \| ``null`` \| `string` ; `platform_user_id`: `undefined` \| ``null`` \| `string` ; `refresh_expires_in`: `number` ; `refresh_token`: `string` ; `roles`: `undefined` \| ``null`` \| `string`[] ; `scope`: `string` ; `token_type`: `string` ; `user_id`: `string` ; `xuid`: `undefined` \| ``null`` \| `string`  }\>\>

#### Defined in

[packages/sdk/src/api/iam/OAuthApi.ts:133](https://bitbucket.org/accelbyte/justice-odin/src/d39c8cbe8/accelbyte-web-sdk/packages/sdk/src/api/iam/OAuthApi.ts#lines-133)

___

### getCurrentLocationCountry

▸ **getCurrentLocationCountry**(): `Promise`<`IResponseWithSync`<{ `city`: `string` ; `countryCode`: `string` ; `countryName`: `string` ; `state`: `string`  }\>\>

<p>This method get country location based on the request.</p>

#### Returns

`Promise`<`IResponseWithSync`<{ `city`: `string` ; `countryCode`: `string` ; `countryName`: `string` ; `state`: `string`  }\>\>

#### Defined in

[packages/sdk/src/api/iam/OAuthApi.ts:97](https://bitbucket.org/accelbyte/justice-odin/src/d39c8cbe8/accelbyte-web-sdk/packages/sdk/src/api/iam/OAuthApi.ts#lines-97)

___

### getThirdPartyPlatformToken

▸ **getThirdPartyPlatformToken**(`userId`, `platformId`): `Promise`<`IResponseWithSync`<{ `platform_token`: `string` ; `sand_box_id`: `undefined` \| ``null`` \| `string`  }\>\>

Retrieve User Third Party Platform Token<br/>
<p>
This method used for retrieving third party platform token for user that login using third party,
if user have not link requested platform in game namespace, will try to retrieving third party platform token from publisher namespace.
Passing platform group name or it's member will return same access token that can be used across the platform members.
</p>
<p>The third party platform and platform group covered for this is:</p>
<ul>
 <li>(psn) ps4web</li>
 <li>(psn) ps4</li>
 <li>(psn) ps5</li>
 <li>epicgames</li>
 <li>twitch</li>
 <li>awscognito</li>
</ul>

#### Parameters

| Name | Type |
| :------ | :------ |
| `userId` | `string` |
| `platformId` | `string` |

#### Returns

`Promise`<`IResponseWithSync`<{ `platform_token`: `string` ; `sand_box_id`: `undefined` \| ``null`` \| `string`  }\>\>

#### Defined in

[packages/sdk/src/api/iam/OAuthApi.ts:118](https://bitbucket.org/accelbyte/justice-odin/src/d39c8cbe8/accelbyte-web-sdk/packages/sdk/src/api/iam/OAuthApi.ts#lines-118)

___

### logout

▸ **logout**(): `Promise`<`IResponse`<`unknown`\>\>

<p>This method is used to remove <b>access_token</b>, <b>refresh_token</b> from cookie and revoke token from usage.</p>
   <p>Supported methods:</p>
     <ul>
       <li>VerifyToken to verify token from header</li>
       <li>AddTokenToRevocationList to revoke token with TTL</li>
     </ul>

#### Returns

`Promise`<`IResponse`<`unknown`\>\>

#### Defined in

[packages/sdk/src/api/iam/OAuthApi.ts:46](https://bitbucket.org/accelbyte/justice-odin/src/d39c8cbe8/accelbyte-web-sdk/packages/sdk/src/api/iam/OAuthApi.ts#lines-46)

___

### request2FAEmailCode

▸ **request2FAEmailCode**(`__namedParameters`): `Promise`<`IDataStatus`<`unknown`\>\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `__namedParameters` | `Request2FAEmailCode` |

#### Returns

`Promise`<`IDataStatus`<`unknown`\>\>

#### Defined in

[packages/sdk/src/api/iam/OAuthApi.ts:88](https://bitbucket.org/accelbyte/justice-odin/src/d39c8cbe8/accelbyte-web-sdk/packages/sdk/src/api/iam/OAuthApi.ts#lines-88)

___

### revoke

▸ **revoke**(`__namedParameters`): `Promise`<`IResponse`<`unknown`\>\>

<p>This method revokes a token.</p>
          <p>This method requires authorized requests header with Basic Authentication from client that establish the token.</p><br>action code: 10706

#### Parameters

| Name | Type |
| :------ | :------ |
| `__namedParameters` | `Object` |
| `__namedParameters.token` | `string` |

#### Returns

`Promise`<`IResponse`<`unknown`\>\>

#### Defined in

[packages/sdk/src/api/iam/OAuthApi.ts:60](https://bitbucket.org/accelbyte/justice-odin/src/d39c8cbe8/accelbyte-web-sdk/packages/sdk/src/api/iam/OAuthApi.ts#lines-60)

___

### verify2FA

▸ **verify2FA**(`__namedParameters`): `Promise`<`IDataStatus`<{ `access_token`: `string` ; `bans`: `undefined` \| ``null`` \| { disabledDate?: string \| null \| undefined; ban: string; endDate: string; enabled: boolean; targetedNamespace: string; }[] ; `display_name`: `string` ; `expires_in`: `number` ; `is_comply`: `undefined` \| ``null`` \| `boolean` ; `jflgs`: `undefined` \| ``null`` \| `number` ; `namespace`: `string` ; `namespace_roles`: `undefined` \| ``null`` \| { namespace: string; roleId: string; }[] ; `permissions`: { schedAction?: number \| null \| undefined; schedCron?: string \| null \| undefined; schedRange?: string[] \| null \| undefined; action: number; resource: string; }[] ; `platform_id`: `undefined` \| ``null`` \| `string` ; `platform_user_id`: `undefined` \| ``null`` \| `string` ; `refresh_expires_in`: `number` ; `refresh_token`: `string` ; `roles`: `undefined` \| ``null`` \| `string`[] ; `scope`: `string` ; `token_type`: `string` ; `user_id`: `string` ; `xuid`: `undefined` \| ``null`` \| `string`  }\>\>

Verify 2FA code<br/>
<p>This method is used for verifying 2FA code.</p>
         <h2>2FA remember device</h2>
         <p>To remember device for 2FA, should provide cookie: device_token or header: Device-Token</p>

#### Parameters

| Name | Type |
| :------ | :------ |
| `__namedParameters` | `Verify2FAParam` |

#### Returns

`Promise`<`IDataStatus`<{ `access_token`: `string` ; `bans`: `undefined` \| ``null`` \| { disabledDate?: string \| null \| undefined; ban: string; endDate: string; enabled: boolean; targetedNamespace: string; }[] ; `display_name`: `string` ; `expires_in`: `number` ; `is_comply`: `undefined` \| ``null`` \| `boolean` ; `jflgs`: `undefined` \| ``null`` \| `number` ; `namespace`: `string` ; `namespace_roles`: `undefined` \| ``null`` \| { namespace: string; roleId: string; }[] ; `permissions`: { schedAction?: number \| null \| undefined; schedCron?: string \| null \| undefined; schedRange?: string[] \| null \| undefined; action: number; resource: string; }[] ; `platform_id`: `undefined` \| ``null`` \| `string` ; `platform_user_id`: `undefined` \| ``null`` \| `string` ; `refresh_expires_in`: `number` ; `refresh_token`: `string` ; `roles`: `undefined` \| ``null`` \| `string`[] ; `scope`: `string` ; `token_type`: `string` ; `user_id`: `string` ; `xuid`: `undefined` \| ``null`` \| `string`  }\>\>

#### Defined in

[packages/sdk/src/api/iam/OAuthApi.ts:79](https://bitbucket.org/accelbyte/justice-odin/src/d39c8cbe8/accelbyte-web-sdk/packages/sdk/src/api/iam/OAuthApi.ts#lines-79)
