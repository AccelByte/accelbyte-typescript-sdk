[@accelbyte/sdk](../README.md) / [iam/UserApi](../modules/iam_UserApi.md) / UserApi

# Class: UserApi

[iam/UserApi](../modules/iam_UserApi.md).UserApi

## Table of contents

### Methods

- [createUser](iam_UserApi.UserApi.md#createuser)
- [getAgeRestrictionByCountry](iam_UserApi.UserApi.md#getagerestrictionbycountry)
- [getCurrentUser](iam_UserApi.UserApi.md#getcurrentuser)
- [getLinkAccountByOneTimeCodeConflict](iam_UserApi.UserApi.md#getlinkaccountbyonetimecodeconflict)
- [getLinkRequestStatus](iam_UserApi.UserApi.md#getlinkrequeststatus)
- [getLinkedAccount](iam_UserApi.UserApi.md#getlinkedaccount)
- [getThirdPartyURL](iam_UserApi.UserApi.md#getthirdpartyurl)
- [getUserDistinctLinkedPlatform](iam_UserApi.UserApi.md#getuserdistinctlinkedplatform)
- [getUserLinkedPlatform](iam_UserApi.UserApi.md#getuserlinkedplatform)
- [linkAccountToPlatform](iam_UserApi.UserApi.md#linkaccounttoplatform)
- [linkPlatformToUserAccount](iam_UserApi.UserApi.md#linkplatformtouseraccount)
- [linkWithProgression](iam_UserApi.UserApi.md#linkwithprogression)
- [notifyGameSDK](iam_UserApi.UserApi.md#notifygamesdk)
- [renderImageFromGlbModel](iam_UserApi.UserApi.md#renderimagefromglbmodel)
- [requestNewUserVerificationCode](iam_UserApi.UserApi.md#requestnewuserverificationcode)
- [requestVerificationCode](iam_UserApi.UserApi.md#requestverificationcode)
- [sendVerificationLink](iam_UserApi.UserApi.md#sendverificationlink)
- [unLinkAccountFromPlatform](iam_UserApi.UserApi.md#unlinkaccountfromplatform)
- [unLinkAccountFromPlatformDistinct](iam_UserApi.UserApi.md#unlinkaccountfromplatformdistinct)
- [updateEmailMe](iam_UserApi.UserApi.md#updateemailme)
- [updatePasswordMe](iam_UserApi.UserApi.md#updatepasswordme)
- [updateUserMe](iam_UserApi.UserApi.md#updateuserme)
- [upgradeHeadlessAccount](iam_UserApi.UserApi.md#upgradeheadlessaccount)
- [upgradeHeadlessAccountV4](iam_UserApi.UserApi.md#upgradeheadlessaccountv4)
- [verifyCode](iam_UserApi.UserApi.md#verifycode)

## Methods

### createUser

▸ **createUser**(`data`): `Promise`<`IResponse`<{ `authType`: `string` ; `country`: `string` ; `dateOfBirth`: `string` ; `displayName`: `string` ; `emailAddress`: `string` ; `namespace`: `string` ; `userId`: `string` ; `username`: `string`  }\>\>

Create a new user with unique email address and username.
   <p>
   <b>Required attributes:</b>
   - authType: possible value is EMAILPASSWD
   - emailAddress: Please refer to the rule from /v3/public/inputValidations API.
   - username: Please refer to the rule from /v3/public/inputValidations API.
   - password: Please refer to the rule from /v3/public/inputValidations API.
   - country: ISO3166-1 alpha-2 two letter, e.g. US.
   - dateOfBirth: YYYY-MM-DD, e.g. 1990-01-01. valid values are between 1905-01-01 until current date.
   <br/>
   <b>Not required attributes:</b>
   - displayName: Please refer to the rule from /v3/public/inputValidations API.
   </p>
   <p>This method support accepting agreements for the created user. Supply the accepted agreements in acceptedPolicies attribute.</p>

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `Object` |
| `data.acceptedPolicies` | `undefined` \| ``null`` \| { isAccepted: boolean; localizedPolicyVersionId: string; policyId: string; policyVersionId: string; }[] |
| `data.authType` | `string` |
| `data.code` | `string` |
| `data.country` | `string` |
| `data.dateOfBirth` | `undefined` \| ``null`` \| `string` |
| `data.displayName` | `string` |
| `data.emailAddress` | `string` |
| `data.password` | `string` |
| `data.passwordMD5Sum` | `undefined` \| ``null`` \| `string` |
| `data.reachMinimumAge` | `boolean` |
| `data.username` | `string` |

#### Returns

`Promise`<`IResponse`<{ `authType`: `string` ; `country`: `string` ; `dateOfBirth`: `string` ; `displayName`: `string` ; `emailAddress`: `string` ; `namespace`: `string` ; `userId`: `string` ; `username`: `string`  }\>\>

#### Defined in

[packages/sdk/src/api/iam/UserApi.ts:296](https://github.com/AccelByte/accelbyte-web-sdk/blob/9d4cc94/packages/sdk/src/api/iam/UserApi.ts#L296)

___

### getAgeRestrictionByCountry

▸ **getAgeRestrictionByCountry**(`countryCode`): `Promise`<`IResponseWithSync`<{ `ageRestriction`: `number` ; `countryCode`: `string` ; `countryName`: `string` ; `enable`: `boolean`  }\>\>

Get age restriction by country code. It will always get by publisher namespace

#### Parameters

| Name | Type |
| :------ | :------ |
| `countryCode` | `string` |

#### Returns

`Promise`<`IResponseWithSync`<{ `ageRestriction`: `number` ; `countryCode`: `string` ; `countryName`: `string` ; `enable`: `boolean`  }\>\>

#### Defined in

[packages/sdk/src/api/iam/UserApi.ts:244](https://github.com/AccelByte/accelbyte-web-sdk/blob/9d4cc94/packages/sdk/src/api/iam/UserApi.ts#L244)

___

### getCurrentUser

▸ **getCurrentUser**(): `Promise`<`IResponseWithSync`<{ `authType`: `string` ; `avatarUrl`: `undefined` \| ``null`` \| `string` ; `bans`: { ban: string; banId: string; endDate: string; }[] ; `country`: `string` ; `createdAt`: `string` ; `dateOfBirth`: `string` ; `deletionStatus`: `boolean` ; `displayName`: `string` ; `emailAddress`: `string` ; `emailVerified`: `boolean` ; `enabled`: `boolean` ; `lastDateOfBirthChangedTime`: `string` ; `lastEnabledChangedTime`: `string` ; `namespace`: `string` ; `namespaceRoles`: `undefined` \| ``null`` \| { namespace: string; roleId: string; }[] ; `newEmailAddress`: `undefined` \| ``null`` \| `string` ; `oldEmailAddress`: `string` ; `permissions`: { schedAction?: number \| null \| undefined; schedCron?: string \| null \| undefined; schedRange?: string[] \| null \| undefined; action: number; resource: string; }[] ; `phoneNumber`: `undefined` \| ``null`` \| `string` ; `phoneVerified`: `boolean` ; `platformAvatarUrl`: `undefined` \| ``null`` \| `string` ; `platformDisplayName`: `undefined` \| ``null`` \| `string` ; `platformId`: `undefined` \| ``null`` \| `string` ; `platformUserId`: `undefined` \| ``null`` \| `string` ; `roles`: `string`[] ; `userId`: `string` ; `userName`: `undefined` \| ``null`` \| `string`  }\>\>

get currently logged in user

#### Returns

`Promise`<`IResponseWithSync`<{ `authType`: `string` ; `avatarUrl`: `undefined` \| ``null`` \| `string` ; `bans`: { ban: string; banId: string; endDate: string; }[] ; `country`: `string` ; `createdAt`: `string` ; `dateOfBirth`: `string` ; `deletionStatus`: `boolean` ; `displayName`: `string` ; `emailAddress`: `string` ; `emailVerified`: `boolean` ; `enabled`: `boolean` ; `lastDateOfBirthChangedTime`: `string` ; `lastEnabledChangedTime`: `string` ; `namespace`: `string` ; `namespaceRoles`: `undefined` \| ``null`` \| { namespace: string; roleId: string; }[] ; `newEmailAddress`: `undefined` \| ``null`` \| `string` ; `oldEmailAddress`: `string` ; `permissions`: { schedAction?: number \| null \| undefined; schedCron?: string \| null \| undefined; schedRange?: string[] \| null \| undefined; action: number; resource: string; }[] ; `phoneNumber`: `undefined` \| ``null`` \| `string` ; `phoneVerified`: `boolean` ; `platformAvatarUrl`: `undefined` \| ``null`` \| `string` ; `platformDisplayName`: `undefined` \| ``null`` \| `string` ; `platformId`: `undefined` \| ``null`` \| `string` ; `platformUserId`: `undefined` \| ``null`` \| `string` ; `roles`: `string`[] ; `userId`: `string` ; `userName`: `undefined` \| ``null`` \| `string`  }\>\>

#### Defined in

[packages/sdk/src/api/iam/UserApi.ts:35](https://github.com/AccelByte/accelbyte-web-sdk/blob/9d4cc94/packages/sdk/src/api/iam/UserApi.ts#L35)

___

### getLinkAccountByOneTimeCodeConflict

▸ **getLinkAccountByOneTimeCodeConflict**(`params`): `Promise`<`IResponseWithSync`<{ `currentAccount`: `undefined` \| ``null`` \| { displayName?: string \| null \| undefined; userName?: string \| null \| undefined; email?: string \| null \| undefined; linkedGames?: string[] \| null \| undefined; } ; `headlessAccount`: `undefined` \| ``null`` \| { displayName?: string \| null \| undefined; userName?: string \| null \| undefined; email?: string \| null \| undefined; linkedGames?: string[] \| null \| undefined; } ; `platformAlreadyLinked`: `boolean` ; `platformId`: `string` ; `platformLinkConflict`: `boolean`  }\>\>

Note:<br>
1. My account should be full account
2. My account not linked to request headless account's third platform.

#### Parameters

| Name | Type |
| :------ | :------ |
| `params` | `Object` |
| `params.oneTimeLinkCode` | ``null`` \| `string` |

#### Returns

`Promise`<`IResponseWithSync`<{ `currentAccount`: `undefined` \| ``null`` \| { displayName?: string \| null \| undefined; userName?: string \| null \| undefined; email?: string \| null \| undefined; linkedGames?: string[] \| null \| undefined; } ; `headlessAccount`: `undefined` \| ``null`` \| { displayName?: string \| null \| undefined; userName?: string \| null \| undefined; email?: string \| null \| undefined; linkedGames?: string[] \| null \| undefined; } ; `platformAlreadyLinked`: `boolean` ; `platformId`: `string` ; `platformLinkConflict`: `boolean`  }\>\>

#### Defined in

[packages/sdk/src/api/iam/UserApi.ts:340](https://github.com/AccelByte/accelbyte-web-sdk/blob/9d4cc94/packages/sdk/src/api/iam/UserApi.ts#L340)

___

### getLinkRequestStatus

▸ **getLinkRequestStatus**(`requestId`): `Promise`<`IResponseWithSync`<{ `client_id`: `string` ; `conflict_publisher_user_id`: `undefined` \| ``null`` \| `string` ; `conflict_user_linked_games`: `undefined` \| ``null`` \| `string`[] ; `current_user_linked_games`: `undefined` \| ``null`` \| `string`[] ; `error`: `undefined` \| ``null`` \| { messageVariables?: { platformUserID: string; publisherAccounts: { namespace: string; displayName: string; userId: string; emailAddress: string; linkedPlatforms: { platformId?: string \| null \| undefined; namespace: string; platformUserId: string; }[]; }[]; } \| null \| undefined; errorCode: number; errorMessage: stri... ; `expiration`: `undefined` \| ``null`` \| `number` ; `namespace`: `string` ; `operation_name`: `string` ; `payload`: `Record`<`string`, `any`\> ; `platformDisplayName`: `undefined` \| ``null`` \| `string` ; `platformID`: `undefined` \| ``null`` \| `string` ; `platform_user_id`: `undefined` \| ``null`` \| `string` ; `redirect_uri`: `string` ; `refreshToken`: `undefined` \| ``null`` \| `string` ; `request_id`: `string` ; `status`: `string`  }\>\>

Get the linking status between a third-party platform to a user

#### Parameters

| Name | Type |
| :------ | :------ |
| `requestId` | `string` |

#### Returns

`Promise`<`IResponseWithSync`<{ `client_id`: `string` ; `conflict_publisher_user_id`: `undefined` \| ``null`` \| `string` ; `conflict_user_linked_games`: `undefined` \| ``null`` \| `string`[] ; `current_user_linked_games`: `undefined` \| ``null`` \| `string`[] ; `error`: `undefined` \| ``null`` \| { messageVariables?: { platformUserID: string; publisherAccounts: { namespace: string; displayName: string; userId: string; emailAddress: string; linkedPlatforms: { platformId?: string \| null \| undefined; namespace: string; platformUserId: string; }[]; }[]; } \| null \| undefined; errorCode: number; errorMessage: stri... ; `expiration`: `undefined` \| ``null`` \| `number` ; `namespace`: `string` ; `operation_name`: `string` ; `payload`: `Record`<`string`, `any`\> ; `platformDisplayName`: `undefined` \| ``null`` \| `string` ; `platformID`: `undefined` \| ``null`` \| `string` ; `platform_user_id`: `undefined` \| ``null`` \| `string` ; `redirect_uri`: `string` ; `refreshToken`: `undefined` \| ``null`` \| `string` ; `request_id`: `string` ; `status`: `string`  }\>\>

#### Defined in

[packages/sdk/src/api/iam/UserApi.ts:180](https://github.com/AccelByte/accelbyte-web-sdk/blob/9d4cc94/packages/sdk/src/api/iam/UserApi.ts#L180)

___

### getLinkedAccount

▸ **getLinkedAccount**(`userId`): `Promise`<`IResponseWithSync`<{ `data`: { displayName?: string \| null \| undefined; platformId?: string \| null \| undefined; emailAddress?: string \| null \| undefined; platformUserId?: string \| null \| undefined; namespace: string; userId: string; accountGroup: string; linkedAt: string; originNamespace: string; }[] ; `paging`: { first: string; last: string; next: string; previous: string; } = PaginationV3 }\>\>

<p>This method retrieves platform accounts linked to user. Required valid user authorization.
         <br>action code: 10128 </p>

#### Parameters

| Name | Type |
| :------ | :------ |
| `userId` | `string` |

#### Returns

`Promise`<`IResponseWithSync`<{ `data`: { displayName?: string \| null \| undefined; platformId?: string \| null \| undefined; emailAddress?: string \| null \| undefined; platformUserId?: string \| null \| undefined; namespace: string; userId: string; accountGroup: string; linkedAt: string; originNamespace: string; }[] ; `paging`: { first: string; last: string; next: string; previous: string; } = PaginationV3 }\>\>

#### Defined in

[packages/sdk/src/api/iam/UserApi.ts:331](https://github.com/AccelByte/accelbyte-web-sdk/blob/9d4cc94/packages/sdk/src/api/iam/UserApi.ts#L331)

___

### getThirdPartyURL

▸ **getThirdPartyURL**(`«destructured»`): `Promise`<`IResponseWithSync`<{ `third_party_url`: `string`  }\>\>

This method is used to generate third party login page which will redirected to establish method.

#### Parameters

| Name | Type |
| :------ | :------ |
| `«destructured»` | `Object` |
| › `platformId` | `string` |
| › `queryParams?` | `Object` |
| › `queryParams.clientId?` | ``null`` \| `string` |
| › `queryParams.redirectUri?` | ``null`` \| `string` |

#### Returns

`Promise`<`IResponseWithSync`<{ `third_party_url`: `string`  }\>\>

#### Defined in

[packages/sdk/src/api/iam/UserApi.ts:231](https://github.com/AccelByte/accelbyte-web-sdk/blob/9d4cc94/packages/sdk/src/api/iam/UserApi.ts#L231)

___

### getUserDistinctLinkedPlatform

▸ **getUserDistinctLinkedPlatform**(`userId`): `Promise`<`IResponseWithSync`<{ `platforms`: { platformUserId?: string \| null \| undefined; linkedAt: string; details: { displayName?: string \| null \| undefined; platformId?: string \| null \| undefined; namespace: string; linkedAt: string; originNamespace: string; }[]; platformName: string; }[]  }\>\>

<p>This method retrieves platform accounts linked to user.
         <br>It will query all linked platform accounts and result will be distinct & grouped, same platform we will pick oldest linked one.
         <br>Required valid user authorization.</p>

#### Parameters

| Name | Type |
| :------ | :------ |
| `userId` | `string` |

#### Returns

`Promise`<`IResponseWithSync`<{ `platforms`: { platformUserId?: string \| null \| undefined; linkedAt: string; details: { displayName?: string \| null \| undefined; platformId?: string \| null \| undefined; namespace: string; linkedAt: string; originNamespace: string; }[]; platformName: string; }[]  }\>\>

#### Defined in

[packages/sdk/src/api/iam/UserApi.ts:305](https://github.com/AccelByte/accelbyte-web-sdk/blob/9d4cc94/packages/sdk/src/api/iam/UserApi.ts#L305)

___

### getUserLinkedPlatform

▸ **getUserLinkedPlatform**(`userId`): `Promise`<`IResponseWithSync`<{ `data`: { displayName?: string \| null \| undefined; platformId?: string \| null \| undefined; emailAddress?: string \| null \| undefined; platformUserId?: string \| null \| undefined; namespace: string; userId: string; accountGroup: string; linkedAt: string; originNamespace: string; }[] ; `paging`: { first: string; last: string; next: string; previous: string; } = PaginationV3 }\>\>

<p>This method retrieves platform accounts linked to user. Required valid user authorization.
         <br>action code: 10128 </p>

#### Parameters

| Name | Type |
| :------ | :------ |
| `userId` | `string` |

#### Returns

`Promise`<`IResponseWithSync`<{ `data`: { displayName?: string \| null \| undefined; platformId?: string \| null \| undefined; emailAddress?: string \| null \| undefined; platformUserId?: string \| null \| undefined; namespace: string; userId: string; accountGroup: string; linkedAt: string; originNamespace: string; }[] ; `paging`: { first: string; last: string; next: string; previous: string; } = PaginationV3 }\>\>

#### Defined in

[packages/sdk/src/api/iam/UserApi.ts:143](https://github.com/AccelByte/accelbyte-web-sdk/blob/9d4cc94/packages/sdk/src/api/iam/UserApi.ts#L143)

___

### linkAccountToPlatform

▸ **linkAccountToPlatform**(`«destructured»`): `Promise`<`IResponse`<`unknown`\>\>

Required valid user authorization.
   <p><br><b>Prerequisite:</b>
   Platform client configuration need to be added to database for specific platformId. Namespace service URL need to be specified (refer to required environment variables).
     <h2>Supported platforms:</h2>
     <ul>
       <li><strong>steam</strong>: The ticket’s value is the authentication code returned by Steam.</li>
       <li><strong>steamopenid</strong>: Steam's user authentication method using OpenID 2.0. The ticket's value is URL generated by Steam on web authentication</li>
       <li><strong>facebook</strong>: The ticket’s value is the authorization code returned by Facebook OAuth</li>
       <li><strong>google</strong>: The ticket’s value is the authorization code returned by Google OAuth</li>
       <li><strong>oculus</strong>: The ticket’s value is a string composed of Oculus's user ID and the nonce separated by a colon (:).</li>
       <li><strong>twitch</strong>: The ticket’s value is the authorization code returned by Twitch OAuth.</li>
       <li><strong>android</strong>: The ticket's value is the Android’s device ID</li>
       <li><strong>ios</strong>: The ticket's value is the iOS’s device ID.</li>
       <li><strong>apple</strong>: The ticket’s value is the authorization code returned by Apple OAuth.</li>
       <li><strong>device</strong>: Every device that doesn't run Android and iOS is categorized as a device platform. The ticket's value is the device’s ID.</li>
       <li><strong>discord</strong>: The ticket’s value is the authorization code returned by Discord OAuth.</li>
       <li><strong>ps4web</strong>: The ticket’s value is the authorization code returned by PSN OAuth.</li>
       <li><strong>xblweb</strong>: The ticket’s value is the authorization code returned by XBox Live OAuth.</li>
       <li><strong>awscognito</strong>: The ticket’s value is the aws cognito access token (JWT).</li>
       <li><strong>epicgames</strong>: The ticket’s value is an access-token obtained from Epicgames EOS Account Service.</li>
       <li><strong>nintendo</strong>: The ticket’s value is the authorization code(id_token) returned by Nintendo OAuth.</li>
       <li><strong>stadia</strong>: The ticket’s value is a JWT Token, which can be obtained after calling the Stadia SDK's function.</li>
     </ul>
   <br>action code : 10144

#### Parameters

| Name | Type |
| :------ | :------ |
| `«destructured»` | `Object` |
| › `data` | `Object` |
| › `data.redirectUri?` | ``null`` \| `string` |
| › `data.ticket` | ``null`` \| `string` |
| › `platformId` | `string` |

#### Returns

`Promise`<`IResponse`<`unknown`\>\>

#### Defined in

[packages/sdk/src/api/iam/UserApi.ts:173](https://github.com/AccelByte/accelbyte-web-sdk/blob/9d4cc94/packages/sdk/src/api/iam/UserApi.ts#L173)

___

### linkPlatformToUserAccount

▸ **linkPlatformToUserAccount**(`«destructured»`): `Promise`<`IResponse`<`unknown`\>\>

It is going to be <strong>DEPRECATED</strong>.
Update Platform Account relation to current User Account.
Note: Game progression data (statistics, reward, etc) associated with previous User Account will not be
transferred. If the data is tight to game user ID, the user will have the game progression data.

#### Parameters

| Name | Type |
| :------ | :------ |
| `«destructured»` | `Object` |
| › `data` | `Object` |
| › `data.platformId` | `string` |
| › `data.platformUserId` | `string` |
| › `userId` | `string` |

#### Returns

`Promise`<`IResponse`<`unknown`\>\>

#### Defined in

[packages/sdk/src/api/iam/UserApi.ts:191](https://github.com/AccelByte/accelbyte-web-sdk/blob/9d4cc94/packages/sdk/src/api/iam/UserApi.ts#L191)

___

### linkWithProgression

▸ **linkWithProgression**(`data`): `Promise`<`IResponse`<`unknown`\>\>

Note:<br>
1. My account should be full account
2. My account not linked to headless account's third platform.

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `Object` |
| `data.chosenNamespaces` | `string`[] |
| `data.oneTimeLinkCode` | `string` |

#### Returns

`Promise`<`IResponse`<`unknown`\>\>

#### Defined in

[packages/sdk/src/api/iam/UserApi.ts:349](https://github.com/AccelByte/accelbyte-web-sdk/blob/9d4cc94/packages/sdk/src/api/iam/UserApi.ts#L349)

___

### notifyGameSDK

▸ **notifyGameSDK**(`url`): `Promise`<`IResponse`<`string`\>\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `url` | `string` |

#### Returns

`Promise`<`IResponse`<`string`\>\>

#### Defined in

[packages/sdk/src/api/iam/UserApi.ts:259](https://github.com/AccelByte/accelbyte-web-sdk/blob/9d4cc94/packages/sdk/src/api/iam/UserApi.ts#L259)

___

### renderImageFromGlbModel

▸ **renderImageFromGlbModel**(`data`): `Promise`<`IResponse`<{ `renders`: `string`[]  }\>\>

Render 2D Avatar via readyplayer.me (https://docs.readyplayer.me/ready-player-me/avatars/2d-avatars/render-api)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `Object` |
| `data.model` | `string` |
| `data.scene` | `string` |

#### Returns

`Promise`<`IResponse`<{ `renders`: `string`[]  }\>\>

#### Defined in

[packages/sdk/src/api/iam/UserApi.ts:251](https://github.com/AccelByte/accelbyte-web-sdk/blob/9d4cc94/packages/sdk/src/api/iam/UserApi.ts#L251)

___

### requestNewUserVerificationCode

▸ **requestNewUserVerificationCode**(`data`): `Promise`<`IResponse`<`unknown`\>\>

This method will validate the request's email address.

If it already been used, will response 409.

If it is available, we will send a verification code to this email address.
This code can be verified by this <a href="#operations-Users-PublicVerifyRegistrationCode">method</a>.

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `Object` |
| `data.emailAddress` | `string` |
| `data.languageTag` | `undefined` \| ``null`` \| `string` |

#### Returns

`Promise`<`IResponse`<`unknown`\>\>

#### Defined in

[packages/sdk/src/api/iam/UserApi.ts:275](https://github.com/AccelByte/accelbyte-web-sdk/blob/9d4cc94/packages/sdk/src/api/iam/UserApi.ts#L275)

___

### requestVerificationCode

▸ **requestVerificationCode**(`data`): `Promise`<`IResponse`<`unknown`\>\>

Required valid user authorization
<p>The verification code is sent to email address</p>
<p>Available contexts for use : </p>
<ol>
 <li>
   <strong>UserAccountRegistration</strong>
   <p>a context type used for verifying email address in user account registration. It returns 409 if the email address already verified.
   <strong><em>It is the default context if the Context field is empty</em></strong></p>
 </li>
 <li>
   <strong>UpdateEmailAddress</strong>
   <p>a context type used for verify user before updating email address.(Without email address verified checking)</p>
 </li>
 <li><strong>upgradeHeadlessAccount</strong>
   <p>The context is intended to be used whenever the email address wanted to be automatically verified on upgrading a headless account.
   If this context used, IAM rejects the request if the email address is already used by others by returning HTTP Status Code 409.</p>
 </li>
</ol>
<p>action code: 10116</p>

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `Object` |
| `data.context` | `undefined` \| ``null`` \| `string` |
| `data.emailAddress` | `string` |
| `data.languageTag` | `undefined` \| ``null`` \| `string` |

#### Returns

`Promise`<`IResponse`<`unknown`\>\>

#### Defined in

[packages/sdk/src/api/iam/UserApi.ts:82](https://github.com/AccelByte/accelbyte-web-sdk/blob/9d4cc94/packages/sdk/src/api/iam/UserApi.ts#L82)

___

### sendVerificationLink

▸ **sendVerificationLink**(`languageTag`): `Promise`<`IResponse`<`unknown`\>\>

Required valid user authorization
<p>The verification link is sent to email address</p>
<p>It will not send request if user email is already verified</p>

#### Parameters

| Name | Type |
| :------ | :------ |
| `languageTag` | `string` |

#### Returns

`Promise`<`IResponse`<`unknown`\>\>

#### Defined in

[packages/sdk/src/api/iam/UserApi.ts:323](https://github.com/AccelByte/accelbyte-web-sdk/blob/9d4cc94/packages/sdk/src/api/iam/UserApi.ts#L323)

___

### unLinkAccountFromPlatform

▸ **unLinkAccountFromPlatform**(`«destructured»`): `Promise`<`IResponse`<`unknown`\>\>

Required valid user authorization.
     <h2>Supported platforms:</h2>
     <ul>
       <li><strong>steam</strong></li>
       <li><strong>steamopenid</strong></li>
       <li><strong>facebook</strong></li>
       <li><strong>google</strong></li>
       <li><strong>oculus</strong></li>
       <li><strong>twitch</strong></li>
       <li><strong>android</strong></li>
       <li><strong>ios</strong></li>
       <li><strong>apple</strong></li>
       <li><strong>device</strong></li>
       <li><strong>discord</strong></li>
       <li><strong>awscognito</strong></li>
       <li><strong>epicgames</strong></li>
       <li><strong>nintendo</strong></li>
       <li><strong>stadia</strong></li>
     </ul>
     <p>Unlink user's account from a specific platform. 'justice' platform might have multiple accounts from different namespaces linked.
     <br><i>platformNamespace</i> need to be specified when the platform ID is 'justice'.
     <br>
     <br>Unlink user's account from justice platform will enable password token grant and password update.
     <br>
     <br>If you want to unlink user's account in a game namespace, you have to specify <i>platformNamespace</i> to that game namespace.
     <br>
     <br>action code : 10121 </p>

#### Parameters

| Name | Type |
| :------ | :------ |
| `«destructured»` | `Object` |
| › `data` | `Object` |
| › `data.platformNamespace` | `undefined` \| ``null`` \| `string` |
| › `platformId` | `string` |

#### Returns

`Promise`<`IResponse`<`unknown`\>\>

#### Defined in

[packages/sdk/src/api/iam/UserApi.ts:224](https://github.com/AccelByte/accelbyte-web-sdk/blob/9d4cc94/packages/sdk/src/api/iam/UserApi.ts#L224)

___

### unLinkAccountFromPlatformDistinct

▸ **unLinkAccountFromPlatformDistinct**(`platformId`): `Promise`<`IResponse`<`unknown`\>\>

Required valid user authorization.
     <p>Unlink user's account from for all third platforms. </p>

#### Parameters

| Name | Type |
| :------ | :------ |
| `platformId` | `string` |

#### Returns

`Promise`<`IResponse`<`unknown`\>\>

#### Defined in

[packages/sdk/src/api/iam/UserApi.ts:313](https://github.com/AccelByte/accelbyte-web-sdk/blob/9d4cc94/packages/sdk/src/api/iam/UserApi.ts#L313)

___

### updateEmailMe

▸ **updateEmailMe**(`data`): `Promise`<`IResponse`<`unknown`\>\>

update current user's email

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `Object` |
| `data.code` | `string` |
| `data.emailAddress` | `string` |

#### Returns

`Promise`<`IResponse`<`unknown`\>\>

#### Defined in

[packages/sdk/src/api/iam/UserApi.ts:49](https://github.com/AccelByte/accelbyte-web-sdk/blob/9d4cc94/packages/sdk/src/api/iam/UserApi.ts#L49)

___

### updatePasswordMe

▸ **updatePasswordMe**(`data`): `Promise`<`IResponse`<`unknown`\>\>

update current user's password

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `Object` |
| `data.languageTag` | `string` |
| `data.newPassword` | `string` |
| `data.oldPassword` | `string` |

#### Returns

`Promise`<`IResponse`<`unknown`\>\>

#### Defined in

[packages/sdk/src/api/iam/UserApi.ts:56](https://github.com/AccelByte/accelbyte-web-sdk/blob/9d4cc94/packages/sdk/src/api/iam/UserApi.ts#L56)

___

### updateUserMe

▸ **updateUserMe**(`data`): `Promise`<`IResponse`<{ `authType`: `string` ; `avatarUrl`: `undefined` \| ``null`` \| `string` ; `bans`: { ban: string; banId: string; endDate: string; }[] ; `country`: `string` ; `createdAt`: `string` ; `dateOfBirth`: `string` ; `deletionStatus`: `boolean` ; `displayName`: `string` ; `emailAddress`: `string` ; `emailVerified`: `boolean` ; `enabled`: `boolean` ; `lastDateOfBirthChangedTime`: `string` ; `lastEnabledChangedTime`: `string` ; `namespace`: `string` ; `namespaceRoles`: `undefined` \| ``null`` \| { namespace: string; roleId: string; }[] ; `newEmailAddress`: `undefined` \| ``null`` \| `string` ; `oldEmailAddress`: `string` ; `permissions`: { schedAction?: number \| null \| undefined; schedCron?: string \| null \| undefined; schedRange?: string[] \| null \| undefined; action: number; resource: string; }[] ; `phoneNumber`: `undefined` \| ``null`` \| `string` ; `phoneVerified`: `boolean` ; `platformAvatarUrl`: `undefined` \| ``null`` \| `string` ; `platformDisplayName`: `undefined` \| ``null`` \| `string` ; `platformId`: `undefined` \| ``null`` \| `string` ; `platformUserId`: `undefined` \| ``null`` \| `string` ; `roles`: `string`[] ; `userId`: `string` ; `userName`: `undefined` \| ``null`` \| `string`  }\>\>

update current user

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `Object` |
| `data.avatarUrl` | `undefined` \| ``null`` \| `string` |
| `data.country` | `undefined` \| ``null`` \| `string` |
| `data.dateOfBirth` | `undefined` \| ``null`` \| `string` |
| `data.displayName` | `undefined` \| ``null`` \| `string` |
| `data.languageTag` | `undefined` \| ``null`` \| `string` |
| `data.userName` | `undefined` \| ``null`` \| `string` |

#### Returns

`Promise`<`IResponse`<{ `authType`: `string` ; `avatarUrl`: `undefined` \| ``null`` \| `string` ; `bans`: { ban: string; banId: string; endDate: string; }[] ; `country`: `string` ; `createdAt`: `string` ; `dateOfBirth`: `string` ; `deletionStatus`: `boolean` ; `displayName`: `string` ; `emailAddress`: `string` ; `emailVerified`: `boolean` ; `enabled`: `boolean` ; `lastDateOfBirthChangedTime`: `string` ; `lastEnabledChangedTime`: `string` ; `namespace`: `string` ; `namespaceRoles`: `undefined` \| ``null`` \| { namespace: string; roleId: string; }[] ; `newEmailAddress`: `undefined` \| ``null`` \| `string` ; `oldEmailAddress`: `string` ; `permissions`: { schedAction?: number \| null \| undefined; schedCron?: string \| null \| undefined; schedRange?: string[] \| null \| undefined; action: number; resource: string; }[] ; `phoneNumber`: `undefined` \| ``null`` \| `string` ; `phoneVerified`: `boolean` ; `platformAvatarUrl`: `undefined` \| ``null`` \| `string` ; `platformDisplayName`: `undefined` \| ``null`` \| `string` ; `platformId`: `undefined` \| ``null`` \| `string` ; `platformUserId`: `undefined` \| ``null`` \| `string` ; `roles`: `string`[] ; `userId`: `string` ; `userName`: `undefined` \| ``null`` \| `string`  }\>\>

#### Defined in

[packages/sdk/src/api/iam/UserApi.ts:42](https://github.com/AccelByte/accelbyte-web-sdk/blob/9d4cc94/packages/sdk/src/api/iam/UserApi.ts#L42)

___

### upgradeHeadlessAccount

▸ **upgradeHeadlessAccount**(`data`): `Promise`<`IResponse`<{ `authType`: `string` ; `avatarUrl`: `undefined` \| ``null`` \| `string` ; `bans`: { ban: string; banId: string; endDate: string; }[] ; `country`: `string` ; `createdAt`: `string` ; `dateOfBirth`: `string` ; `deletionStatus`: `boolean` ; `displayName`: `string` ; `emailAddress`: `string` ; `emailVerified`: `boolean` ; `enabled`: `boolean` ; `lastDateOfBirthChangedTime`: `string` ; `lastEnabledChangedTime`: `string` ; `namespace`: `string` ; `namespaceRoles`: `undefined` \| ``null`` \| { namespace: string; roleId: string; }[] ; `newEmailAddress`: `undefined` \| ``null`` \| `string` ; `oldEmailAddress`: `string` ; `permissions`: { schedAction?: number \| null \| undefined; schedCron?: string \| null \| undefined; schedRange?: string[] \| null \| undefined; action: number; resource: string; }[] ; `phoneNumber`: `undefined` \| ``null`` \| `string` ; `phoneVerified`: `boolean` ; `platformAvatarUrl`: `undefined` \| ``null`` \| `string` ; `platformDisplayName`: `undefined` \| ``null`` \| `string` ; `platformId`: `undefined` \| ``null`` \| `string` ; `platformUserId`: `undefined` \| ``null`` \| `string` ; `roles`: `string`[] ; `userId`: `string` ; `userName`: `undefined` \| ``null`` \| `string`  }\>\>

<p>If validateOnly is set false, consume code and upgrade headless account and automatically verified the email address if it is succeeded</p>
Require valid user access token.
       <p>The method upgrades a headless account by linking the headless account with the email address and the password.
By upgrading the headless account into a full account, the user could use the email address and password for using Justice IAM. </p>
       <p>The method is a shortcut for upgrading a headless account and verifying the email address in one call.
In order to get a verification code for the method, please check the send verification code method.</p>
       <p>This method also have an ability to update user data (if the user data field is specified) right after the upgrade account process is done.<br/>
 Supported user data fields :
 <ul>
   <li>displayName</li>
   <li>dateOfBirth : format YYYY-MM-DD, e.g. 2019-04-29</li>
   <li>country : format ISO3166-1 alpha-2 two letter, e.g. US</li>
 </ul>
       <br>action code : 10124</p>

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `Object` |
| `data.code` | `string` |
| `data.country` | `undefined` \| ``null`` \| `string` |
| `data.dateOfBirth` | `undefined` \| ``null`` \| `string` |
| `data.displayName` | `undefined` \| ``null`` \| `string` |
| `data.emailAddress` | `string` |
| `data.password` | `string` |
| `data.validateOnly` | `undefined` \| ``null`` \| `boolean` |

#### Returns

`Promise`<`IResponse`<{ `authType`: `string` ; `avatarUrl`: `undefined` \| ``null`` \| `string` ; `bans`: { ban: string; banId: string; endDate: string; }[] ; `country`: `string` ; `createdAt`: `string` ; `dateOfBirth`: `string` ; `deletionStatus`: `boolean` ; `displayName`: `string` ; `emailAddress`: `string` ; `emailVerified`: `boolean` ; `enabled`: `boolean` ; `lastDateOfBirthChangedTime`: `string` ; `lastEnabledChangedTime`: `string` ; `namespace`: `string` ; `namespaceRoles`: `undefined` \| ``null`` \| { namespace: string; roleId: string; }[] ; `newEmailAddress`: `undefined` \| ``null`` \| `string` ; `oldEmailAddress`: `string` ; `permissions`: { schedAction?: number \| null \| undefined; schedCron?: string \| null \| undefined; schedRange?: string[] \| null \| undefined; action: number; resource: string; }[] ; `phoneNumber`: `undefined` \| ``null`` \| `string` ; `phoneVerified`: `boolean` ; `platformAvatarUrl`: `undefined` \| ``null`` \| `string` ; `platformDisplayName`: `undefined` \| ``null`` \| `string` ; `platformId`: `undefined` \| ``null`` \| `string` ; `platformUserId`: `undefined` \| ``null`` \| `string` ; `roles`: `string`[] ; `userId`: `string` ; `userName`: `undefined` \| ``null`` \| `string`  }\>\>

#### Defined in

[packages/sdk/src/api/iam/UserApi.ts:114](https://github.com/AccelByte/accelbyte-web-sdk/blob/9d4cc94/packages/sdk/src/api/iam/UserApi.ts#L114)

___

### upgradeHeadlessAccountV4

▸ **upgradeHeadlessAccountV4**(`data`): `Promise`<`IResponse`<{ `authType`: `string` ; `bans`: { ban: string; banId: string; endDate: string; }[] ; `country`: `string` ; `createdAt`: `string` ; `dateOfBirth`: `string` ; `deletionStatus`: `boolean` ; `displayName`: `string` ; `emailAddress`: `string` ; `emailVerified`: `boolean` ; `enabled`: `boolean` ; `lastDateOfBirthChangedTime`: `string` ; `lastEnabledChangedTime`: `string` ; `namespace`: `string` ; `newEmailAddress`: `undefined` \| ``null`` \| `string` ; `oldEmailAddress`: `string` ; `permissions`: { schedAction?: number \| null \| undefined; schedCron?: string \| null \| undefined; schedRange?: string[] \| null \| undefined; action: number; resource: string; }[] ; `phoneNumber`: `undefined` \| ``null`` \| `string` ; `phoneVerified`: `boolean` ; `platformId`: `undefined` \| ``null`` \| `string` ; `platformUserId`: `undefined` \| ``null`` \| `string` ; `roles`: `string`[] ; `userId`: `string` ; `username`: `undefined` \| ``null`` \| `string`  }\>\>

Require valid user access token.
         The method upgrades a headless account by linking the headless account with the email address, username, and password.
     By upgrading the headless account into a full account, the user could use the email address, username, and password for using Justice IAM.
         <br>
     The method is a shortcut for upgrading a headless account and verifying the email address in one call.
     In order to get a verification code for the method, please check the <a href="#operations-Users-PublicSendVerificationCodeV3">send verification code method</a>.
         <br>
     This method also have an ability to update user data (if the user data field is specified) right after the upgrade account process is done.
     Supported user data fields:
       <ul>
         <li>displayName</li>
         <li>dateOfBirth : format YYYY-MM-DD, e.g. 2019-04-29</li>
         <li>country : format ISO3166-1 alpha-2 two letter, e.g. US</li>
       </ul>
         action code : 10124

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `Object` |
| `data.code` | `string` |
| `data.country` | `undefined` \| ``null`` \| `string` |
| `data.dateOfBirth` | `undefined` \| ``null`` \| `string` |
| `data.displayName` | `undefined` \| ``null`` \| `string` |
| `data.emailAddress` | `string` |
| `data.password` | `string` |
| `data.reachMinimumAge` | `boolean` |
| `data.username` | `string` |
| `data.validateOnly` | `undefined` \| ``null`` \| `boolean` |

#### Returns

`Promise`<`IResponse`<{ `authType`: `string` ; `bans`: { ban: string; banId: string; endDate: string; }[] ; `country`: `string` ; `createdAt`: `string` ; `dateOfBirth`: `string` ; `deletionStatus`: `boolean` ; `displayName`: `string` ; `emailAddress`: `string` ; `emailVerified`: `boolean` ; `enabled`: `boolean` ; `lastDateOfBirthChangedTime`: `string` ; `lastEnabledChangedTime`: `string` ; `namespace`: `string` ; `newEmailAddress`: `undefined` \| ``null`` \| `string` ; `oldEmailAddress`: `string` ; `permissions`: { schedAction?: number \| null \| undefined; schedCron?: string \| null \| undefined; schedRange?: string[] \| null \| undefined; action: number; resource: string; }[] ; `phoneNumber`: `undefined` \| ``null`` \| `string` ; `phoneVerified`: `boolean` ; `platformId`: `undefined` \| ``null`` \| `string` ; `platformUserId`: `undefined` \| ``null`` \| `string` ; `roles`: `string`[] ; `userId`: `string` ; `username`: `undefined` \| ``null`` \| `string`  }\>\>

#### Defined in

[packages/sdk/src/api/iam/UserApi.ts:135](https://github.com/AccelByte/accelbyte-web-sdk/blob/9d4cc94/packages/sdk/src/api/iam/UserApi.ts#L135)

___

### verifyCode

▸ **verifyCode**(`data`): `Promise`<`IResponse`<`unknown`\>\>

<p>Will consume code if validateOnly is set false</p>
<p>Required valid user authorization</p>
<p>Redeems a verification code sent to a user to verify the user's contact address is correct</p>
<p>Available ContactType : <b>email</b></p>
<p>action code: 10107</p>

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `Object` |
| `data.code` | `string` |
| `data.contactType` | `string` |
| `data.languageTag` | `string` |
| `data.validateOnly` | `undefined` \| ``null`` \| `boolean` |

#### Returns

`Promise`<`IResponse`<`unknown`\>\>

#### Defined in

[packages/sdk/src/api/iam/UserApi.ts:94](https://github.com/AccelByte/accelbyte-web-sdk/blob/9d4cc94/packages/sdk/src/api/iam/UserApi.ts#L94)
