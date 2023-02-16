[@accelbyte/sdk](../README.md) / [basic/UserProfileApi](../modules/basic_UserProfileApi.md) / UserProfileApi

# Class: UserProfileApi

[basic/UserProfileApi](../modules/basic_UserProfileApi.md).UserProfileApi

## Table of contents

### Methods

- [createUserMeProfile](basic_UserProfileApi.UserProfileApi.md#createusermeprofile)
- [getUsersMeProfiles](basic_UserProfileApi.UserProfileApi.md#getusersmeprofiles)
- [updateUserCustomAttributes](basic_UserProfileApi.UserProfileApi.md#updateusercustomattributes)
- [updateUserMeProfile](basic_UserProfileApi.UserProfileApi.md#updateusermeprofile)

## Methods

### createUserMeProfile

▸ **createUserMeProfile**(`data`): `Promise`<`IResponse`<`UserProfilePrivateInfo`\>\>

Create my profile.<br><b>Client with user token can create user profile in target namespace</b><br>Other detail info: <ul><li><i>Required permission</i>: resource=<b>"NAMESPACE:{namespace}:PROFILE"</b>, action=1 <b>(CREATE)</b></li><li><i>Action code</i>: 11401</li><li><i>Returns</i>: Created user profile</li><li><i>Path's namespace</i> : <ul><li>can be filled with <b>publisher namespace</b> in order to create <b>publisher user profile</b></li><li>can be filled with <b>game namespace</b> in order to create <b>game user profile</b></li></ul></li><li><i>Language</i> : allowed format: en, en-US</li><li><i>Country</i>  : ISO3166-1 alpha-2 two letter, e.g. US </li><li><i>Timezone</i> : IANA time zone, e.g. Asia/Shanghai</li></ul>

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `UserProfilePrivateCreate` |

#### Returns

`Promise`<`IResponse`<`UserProfilePrivateInfo`\>\>

#### Defined in

[packages/sdk/src/api/basic/UserProfileApi.ts:28](https://github.com/AccelByte/accelbyte-web-sdk/blob/24d660a/packages/sdk/src/api/basic/UserProfileApi.ts#L28)

___

### getUsersMeProfiles

▸ **getUsersMeProfiles**(): `Promise`<`IResponseWithSync`<`UserProfilePrivateInfo`\>\>

Get my profile<br><b>Client with user token can get user profile in target namespace</b><br>Other detail info: <ul><li><i>Required permission</i>: resource=<b>"NAMESPACE:{namespace}:PROFILE"</b>, action=2 <b>(READ)</b></li><li><i>Action code</i>: 11403</li><li><i>Returns</i>: user profile</li><li><i>Path's namespace</i> : <ul><li>can be filled with <b>publisher namespace</b> in order to get <b>publisher user profile</b></li><li>can be filled with <b>game namespace</b> in order to get <b>game user profile</b></li></ul></li><li><i>Language</i> : allowed format: en, en-US</li><li><i>Timezone</i> : IANA time zone, e.g. Asia/Shanghai</li></ul>

#### Returns

`Promise`<`IResponseWithSync`<`UserProfilePrivateInfo`\>\>

#### Defined in

[packages/sdk/src/api/basic/UserProfileApi.ts:21](https://github.com/AccelByte/accelbyte-web-sdk/blob/24d660a/packages/sdk/src/api/basic/UserProfileApi.ts#L21)

___

### updateUserCustomAttributes

▸ **updateUserCustomAttributes**(`userId`, `data`): `Promise`<`IResponse`<`unknown`\>\>

Update partially custom attributes tied to user id.<br>Other detail info: <ul><li><i>Required permission</i>: resource=<b>"NAMESPACE:{namespace}:USER:{userId}:PROFILE"</b>, action=4 <b>(UPDATE)</b></li><li><i>Action code</i>: 11402</li><li><i>Request body</i> : allowed format: JSON object</li><li><i>Returns</i>: Updated custom attributes</li></ul>

#### Parameters

| Name | Type |
| :------ | :------ |
| `userId` | `string` |
| `data` | `any` |

#### Returns

`Promise`<`IResponse`<`unknown`\>\>

#### Defined in

[packages/sdk/src/api/basic/UserProfileApi.ts:42](https://github.com/AccelByte/accelbyte-web-sdk/blob/24d660a/packages/sdk/src/api/basic/UserProfileApi.ts#L42)

___

### updateUserMeProfile

▸ **updateUserMeProfile**(`data`): `Promise`<`IResponse`<`UserProfilePrivateInfo`\>\>

Update my profile.<br>Updates user profile in the target namespace. If token's namespace doesn't match the target namespace, the service automatically maps the token's user ID into the user ID in the target namespace. The method returns the updated user profile on a successful call.<br>Other detail info: <ul><li><i>Required permission</i>: resource=<b>"NAMESPACE:{namespace}:PROFILE"</b>, action=4 <b>(UPDATE)</b></li><li><i>Action code</i>: 11402</li><li><i>Returns</i>: user profile</li><li><i>Path's namespace</i> : <ul><li>can be filled with <b>publisher namespace</b> in order to update <b>publisher user profile</b></li><li>can be filled with <b>game namespace</b> in order to update <b>game user profile</b></li></ul></li><li><i>Language</i> : allowed format: en, en-US</li><li><i>Timezone</i> : IANA time zone, e.g. Asia/Shanghai</li></ul>

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `UserProfilePrivateUpdate` |

#### Returns

`Promise`<`IResponse`<`UserProfilePrivateInfo`\>\>

#### Defined in

[packages/sdk/src/api/basic/UserProfileApi.ts:35](https://github.com/AccelByte/accelbyte-web-sdk/blob/24d660a/packages/sdk/src/api/basic/UserProfileApi.ts#L35)
