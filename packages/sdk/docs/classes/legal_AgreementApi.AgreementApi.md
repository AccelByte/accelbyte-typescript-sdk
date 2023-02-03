[@accelbyte/sdk](../README.md) / [legal/AgreementApi](../modules/legal_AgreementApi.md) / AgreementApi

# Class: AgreementApi

[legal/AgreementApi](../modules/legal_AgreementApi.md).AgreementApi

## Table of contents

### Methods

- [acceptLegalPolicies](legal_AgreementApi.AgreementApi.md#acceptlegalpolicies)
- [getAgreements](legal_AgreementApi.AgreementApi.md#getagreements)
- [updateMarketingPreferences](legal_AgreementApi.AgreementApi.md#updatemarketingpreferences)

## Methods

### acceptLegalPolicies

▸ **acceptLegalPolicies**(`acceptAgreements`): `Promise`<`IResponse`<{ `comply`: `boolean` ; `ext`: `undefined` \| ``null`` \| `Record`<`string`, `any`\> ; `proceed`: `boolean`  }\>\>

Accepts many legal policy versions all at once. Supply with localized version policy id to accept an agreement.<br>Other detail info: <ul><li><i>Required permission</i>: login user</li></ul>

#### Parameters

| Name | Type |
| :------ | :------ |
| `acceptAgreements` | { `isAccepted`: `boolean` ; `isNeedToSendEventMarketing`: `undefined` \| ``null`` \| `boolean` ; `localizedPolicyVersionId`: `string` ; `policyId`: `string` ; `policyVersionId`: `string`  }[] |

#### Returns

`Promise`<`IResponse`<{ `comply`: `boolean` ; `ext`: `undefined` \| ``null`` \| `Record`<`string`, `any`\> ; `proceed`: `boolean`  }\>\>

#### Defined in

[packages/sdk/src/api/legal/AgreementApi.ts:20](https://github.com/AccelByte/accelbyte-web-sdk/blob/95af6d2/packages/sdk/src/api/legal/AgreementApi.ts#L20)

___

### getAgreements

▸ **getAgreements**(): `Promise`<`IResponseWithSync`<{ `countryCode`: `undefined` \| ``null`` \| `string` ; `createdAt`: `undefined` \| ``null`` \| `string` ; `description`: `undefined` \| ``null`` \| `string` ; `displayVersion`: `undefined` \| ``null`` \| `string` ; `id`: `string` ; `isAccepted`: `undefined` \| ``null`` \| `boolean` ; `localizedPolicyVersion`: `undefined` \| ``null`` \| { contentType?: string \| null \| undefined; status?: string \| null \| undefined; createdAt?: string \| null \| undefined; updatedAt?: string \| null \| undefined; description?: string \| null \| undefined; ... 6 more ...; isDefaultSelection: boolean; } ; `namespace`: `undefined` \| ``null`` \| `string` ; `policyId`: `undefined` \| ``null`` \| `string` ; `policyName`: `undefined` \| ``null`` \| `string` ; `policyType`: `undefined` \| ``null`` \| `string` ; `signingDate`: `undefined` \| ``null`` \| `string` ; `updatedAt`: `undefined` \| ``null`` \| `string` ; `userId`: `undefined` \| ``null`` \| `string`  }[]\>\>

Retrieve accepted Legal Agreements.<br>Other detail info: <ul><li><i>Required permission</i>: login user</li></ul>

#### Returns

`Promise`<`IResponseWithSync`<{ `countryCode`: `undefined` \| ``null`` \| `string` ; `createdAt`: `undefined` \| ``null`` \| `string` ; `description`: `undefined` \| ``null`` \| `string` ; `displayVersion`: `undefined` \| ``null`` \| `string` ; `id`: `string` ; `isAccepted`: `undefined` \| ``null`` \| `boolean` ; `localizedPolicyVersion`: `undefined` \| ``null`` \| { contentType?: string \| null \| undefined; status?: string \| null \| undefined; createdAt?: string \| null \| undefined; updatedAt?: string \| null \| undefined; description?: string \| null \| undefined; ... 6 more ...; isDefaultSelection: boolean; } ; `namespace`: `undefined` \| ``null`` \| `string` ; `policyId`: `undefined` \| ``null`` \| `string` ; `policyName`: `undefined` \| ``null`` \| `string` ; `policyType`: `undefined` \| ``null`` \| `string` ; `signingDate`: `undefined` \| ``null`` \| `string` ; `updatedAt`: `undefined` \| ``null`` \| `string` ; `userId`: `undefined` \| ``null`` \| `string`  }[]\>\>

#### Defined in

[packages/sdk/src/api/legal/AgreementApi.ts:27](https://github.com/AccelByte/accelbyte-web-sdk/blob/95af6d2/packages/sdk/src/api/legal/AgreementApi.ts#L27)

___

### updateMarketingPreferences

▸ **updateMarketingPreferences**(`acceptAgreements`): `Promise`<`IResponse`<`unknown`\>\>

Change marketing preference consent.<br>Other detail info: <ul><li><i>Required permission</i>: login user</li></ul>

#### Parameters

| Name | Type |
| :------ | :------ |
| `acceptAgreements` | { `isAccepted`: `boolean` ; `isNeedToSendEventMarketing`: `undefined` \| ``null`` \| `boolean` ; `localizedPolicyVersionId`: `string` ; `policyId`: `string` ; `policyVersionId`: `string`  }[] |

#### Returns

`Promise`<`IResponse`<`unknown`\>\>

#### Defined in

[packages/sdk/src/api/legal/AgreementApi.ts:34](https://github.com/AccelByte/accelbyte-web-sdk/blob/95af6d2/packages/sdk/src/api/legal/AgreementApi.ts#L34)
