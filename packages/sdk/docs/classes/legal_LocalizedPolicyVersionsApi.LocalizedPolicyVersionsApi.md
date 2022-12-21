[@accelbyte/sdk](../README.md) / [legal/LocalizedPolicyVersionsApi](../modules/legal_LocalizedPolicyVersionsApi.md) / LocalizedPolicyVersionsApi

# Class: LocalizedPolicyVersionsApi

[legal/LocalizedPolicyVersionsApi](../modules/legal_LocalizedPolicyVersionsApi.md).LocalizedPolicyVersionsApi

## Table of contents

### Methods

- [fetchLocalizedPolicyVersionById](legal_LocalizedPolicyVersionsApi.LocalizedPolicyVersionsApi.md#fetchlocalizedpolicyversionbyid)

## Methods

### fetchLocalizedPolicyVersionById

▸ **fetchLocalizedPolicyVersionById**(`localizedPolicyVersionId`): `Promise`<`IResponseWithSync`<{ `attachmentChecksum`: `undefined` \| ``null`` \| `string` ; `attachmentLocation`: `undefined` \| ``null`` \| `string` ; `attachmentVersionIdentifier`: `undefined` \| ``null`` \| `string` ; `basePolicyId`: `undefined` \| ``null`` \| `string` ; `baseUrls`: `undefined` \| ``null`` \| `string`[] ; `contentType`: `undefined` \| ``null`` \| `string` ; `createdAt`: `undefined` \| ``null`` \| `string` ; `description`: `undefined` \| ``null`` \| `string` ; `id`: `string` ; `localeCode`: `string` ; `namespace`: `string` ; `policy`: { createdAt?: string \| null \| undefined; updatedAt?: string \| null \| undefined; description?: string \| null \| undefined; readableId?: string \| null \| undefined; countryGroupCode?: string \| null \| undefined; ... 6 more ...; isDefaultOpted: boolean; } = PolicyObject; `policyVersion`: { status?: string \| null \| undefined; createdAt?: string \| null \| undefined; updatedAt?: string \| null \| undefined; description?: string \| null \| undefined; publishedDate?: string \| null \| undefined; displayVersion: string; id: string; isCommitted: boolean; isInEffect: boolean; } = PolicyVersionObject; `tags`: `undefined` \| ``null`` \| `string`[] ; `updatedAt`: `undefined` \| ``null`` \| `string`  }\>\>

Retrieve specific localized policy version including the policy version and base policy version where the localized policy version located.<br>Other detail info: <ul></ul>

#### Parameters

| Name | Type |
| :------ | :------ |
| `localizedPolicyVersionId` | `string` |

#### Returns

`Promise`<`IResponseWithSync`<{ `attachmentChecksum`: `undefined` \| ``null`` \| `string` ; `attachmentLocation`: `undefined` \| ``null`` \| `string` ; `attachmentVersionIdentifier`: `undefined` \| ``null`` \| `string` ; `basePolicyId`: `undefined` \| ``null`` \| `string` ; `baseUrls`: `undefined` \| ``null`` \| `string`[] ; `contentType`: `undefined` \| ``null`` \| `string` ; `createdAt`: `undefined` \| ``null`` \| `string` ; `description`: `undefined` \| ``null`` \| `string` ; `id`: `string` ; `localeCode`: `string` ; `namespace`: `string` ; `policy`: { createdAt?: string \| null \| undefined; updatedAt?: string \| null \| undefined; description?: string \| null \| undefined; readableId?: string \| null \| undefined; countryGroupCode?: string \| null \| undefined; ... 6 more ...; isDefaultOpted: boolean; } = PolicyObject; `policyVersion`: { status?: string \| null \| undefined; createdAt?: string \| null \| undefined; updatedAt?: string \| null \| undefined; description?: string \| null \| undefined; publishedDate?: string \| null \| undefined; displayVersion: string; id: string; isCommitted: boolean; isInEffect: boolean; } = PolicyVersionObject; `tags`: `undefined` \| ``null`` \| `string`[] ; `updatedAt`: `undefined` \| ``null`` \| `string`  }\>\>

#### Defined in

[packages/sdk/src/api/legal/LocalizedPolicyVersionsApi.ts:19](https://github.com/AccelByte/accelbyte-web-sdk/blob/671b687/packages/sdk/src/api/legal/LocalizedPolicyVersionsApi.ts#L19)
