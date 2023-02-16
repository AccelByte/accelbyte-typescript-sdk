[@accelbyte/sdk](../README.md) / [legal/LocalizedPolicyVersionsApi](../modules/legal_LocalizedPolicyVersionsApi.md) / LocalizedPolicyVersionsApi

# Class: LocalizedPolicyVersionsApi

[legal/LocalizedPolicyVersionsApi](../modules/legal_LocalizedPolicyVersionsApi.md).LocalizedPolicyVersionsApi

## Table of contents

### Methods

- [fetchLocalizedPolicyVersionById](legal_LocalizedPolicyVersionsApi.LocalizedPolicyVersionsApi.md#fetchlocalizedpolicyversionbyid)

## Methods

### fetchLocalizedPolicyVersionById

▸ **fetchLocalizedPolicyVersionById**(`localizedPolicyVersionId`): `Promise`<`IResponseWithSync`<`RetrieveLocalizedPolicyVersionPublicResponse`\>\>

Retrieve specific localized policy version including the policy version and base policy version where the localized policy version located.<br>Other detail info: <ul></ul>

#### Parameters

| Name | Type |
| :------ | :------ |
| `localizedPolicyVersionId` | `string` |

#### Returns

`Promise`<`IResponseWithSync`<`RetrieveLocalizedPolicyVersionPublicResponse`\>\>

#### Defined in

[packages/sdk/src/api/legal/LocalizedPolicyVersionsApi.ts:19](https://github.com/AccelByte/accelbyte-web-sdk/blob/c50fb74/packages/sdk/src/api/legal/LocalizedPolicyVersionsApi.ts#L19)
