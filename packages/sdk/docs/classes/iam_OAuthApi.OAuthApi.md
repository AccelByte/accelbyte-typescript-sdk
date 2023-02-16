[@accelbyte/sdk](../README.md) / [iam/OAuthApi](../modules/iam_OAuthApi.md) / OAuthApi

# Class: OAuthApi

[iam/OAuthApi](../modules/iam_OAuthApi.md).OAuthApi

## Table of contents

### Methods

- [authenticateWithLink](iam_OAuthApi.OAuthApi.md#authenticatewithlink)
- [exchangeTokenByOneTimeLinkCode](iam_OAuthApi.OAuthApi.md#exchangetokenbyonetimelinkcode)
- [getCurrentLocationCountry](iam_OAuthApi.OAuthApi.md#getcurrentlocationcountry)
- [getThirdPartyPlatformToken](iam_OAuthApi.OAuthApi.md#getthirdpartyplatformtoken)
- [logout](iam_OAuthApi.OAuthApi.md#logout)
- [request2FAEmailCode](iam_OAuthApi.OAuthApi.md#request2faemailcode)
- [revoke](iam_OAuthApi.OAuthApi.md#revoke)
- [validateOneTimeLinkCode](iam_OAuthApi.OAuthApi.md#validateonetimelinkcode)
- [verify2FA](iam_OAuthApi.OAuthApi.md#verify2fa)

## Methods

### authenticateWithLink

▸ **authenticateWithLink**(`data`): `Promise`<`IResponse`<`TokenResponseV3`\>\>

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

`Promise`<`IResponse`<`TokenResponseV3`\>\>

#### Defined in

[packages/sdk/src/api/iam/OAuthApi.ts:133](https://github.com/AccelByte/accelbyte-web-sdk/blob/24d660a/packages/sdk/src/api/iam/OAuthApi.ts#L133)

___

### exchangeTokenByOneTimeLinkCode

▸ **exchangeTokenByOneTimeLinkCode**(`data`): `Promise`<`IResponse`<`TokenResponseV3`\>\>

This method is being used to generate user's token by one time link code.
It require publisher ClientID
It required a code which can be generated from <strong>/iam/v3/link/code/request</strong>.<br>

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `Object` |
| `data.client_id` | ``null`` \| `string` |
| `data.oneTimeLinkCode` | ``null`` \| `string` |

#### Returns

`Promise`<`IResponse`<`TokenResponseV3`\>\>

#### Defined in

[packages/sdk/src/api/iam/OAuthApi.ts:160](https://github.com/AccelByte/accelbyte-web-sdk/blob/24d660a/packages/sdk/src/api/iam/OAuthApi.ts#L160)

___

### getCurrentLocationCountry

▸ **getCurrentLocationCountry**(): `Promise`<`IResponseWithSync`<`CountryLocationResponse`\>\>

<p>This method get country location based on the request.</p>

#### Returns

`Promise`<`IResponseWithSync`<`CountryLocationResponse`\>\>

#### Defined in

[packages/sdk/src/api/iam/OAuthApi.ts:97](https://github.com/AccelByte/accelbyte-web-sdk/blob/24d660a/packages/sdk/src/api/iam/OAuthApi.ts#L97)

___

### getThirdPartyPlatformToken

▸ **getThirdPartyPlatformToken**(`userId`, `platformId`): `Promise`<`IResponseWithSync`<`TokenThirdPartyResponse`\>\>

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

`Promise`<`IResponseWithSync`<`TokenThirdPartyResponse`\>\>

#### Defined in

[packages/sdk/src/api/iam/OAuthApi.ts:118](https://github.com/AccelByte/accelbyte-web-sdk/blob/24d660a/packages/sdk/src/api/iam/OAuthApi.ts#L118)

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

[packages/sdk/src/api/iam/OAuthApi.ts:46](https://github.com/AccelByte/accelbyte-web-sdk/blob/24d660a/packages/sdk/src/api/iam/OAuthApi.ts#L46)

___

### request2FAEmailCode

▸ **request2FAEmailCode**(`«destructured»`): `Promise`<`IDataStatus`<`unknown`\>\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `«destructured»` | `Request2FAEmailCode` |

#### Returns

`Promise`<`IDataStatus`<`unknown`\>\>

#### Defined in

[packages/sdk/src/api/iam/OAuthApi.ts:88](https://github.com/AccelByte/accelbyte-web-sdk/blob/24d660a/packages/sdk/src/api/iam/OAuthApi.ts#L88)

___

### revoke

▸ **revoke**(`«destructured»`): `Promise`<`IResponse`<`unknown`\>\>

<p>This method revokes a token.</p>
          <p>This method requires authorized requests header with Basic Authentication from client that establish the token.</p><br>action code: 10706

#### Parameters

| Name | Type |
| :------ | :------ |
| `«destructured»` | `Object` |
| › `token` | `string` |

#### Returns

`Promise`<`IResponse`<`unknown`\>\>

#### Defined in

[packages/sdk/src/api/iam/OAuthApi.ts:60](https://github.com/AccelByte/accelbyte-web-sdk/blob/24d660a/packages/sdk/src/api/iam/OAuthApi.ts#L60)

___

### validateOneTimeLinkCode

▸ **validateOneTimeLinkCode**(`data`): `Promise`<`IResponse`<`OneTimeLinkingCodeValidationResponse`\>\>

This method is being used to validate one time link code.
It require a valid user token.
Should specify the target platform id and current user should already linked to this platform.
Current user should be a headless account.

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `Object` |
| `data.oneTimeLinkCode` | ``null`` \| `string` |

#### Returns

`Promise`<`IResponse`<`OneTimeLinkingCodeValidationResponse`\>\>

#### Defined in

[packages/sdk/src/api/iam/OAuthApi.ts:150](https://github.com/AccelByte/accelbyte-web-sdk/blob/24d660a/packages/sdk/src/api/iam/OAuthApi.ts#L150)

___

### verify2FA

▸ **verify2FA**(`«destructured»`): `Promise`<`IDataStatus`<`TokenResponseV3`\>\>

Verify 2FA code<br/>
<p>This method is used for verifying 2FA code.</p>
         <h2>2FA remember device</h2>
         <p>To remember device for 2FA, should provide cookie: device_token or header: Device-Token</p>

#### Parameters

| Name | Type |
| :------ | :------ |
| `«destructured»` | `Verify2FAParam` |

#### Returns

`Promise`<`IDataStatus`<`TokenResponseV3`\>\>

#### Defined in

[packages/sdk/src/api/iam/OAuthApi.ts:79](https://github.com/AccelByte/accelbyte-web-sdk/blob/24d660a/packages/sdk/src/api/iam/OAuthApi.ts#L79)
