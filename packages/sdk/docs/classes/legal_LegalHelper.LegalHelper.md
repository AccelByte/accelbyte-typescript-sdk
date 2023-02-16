[@accelbyte/sdk](../README.md) / [legal/LegalHelper](../modules/legal_LegalHelper.md) / LegalHelper

# Class: LegalHelper

[legal/LegalHelper](../modules/legal_LegalHelper.md).LegalHelper

## Table of contents

### Constructors

- [constructor](legal_LegalHelper.LegalHelper.md#constructor)

### Methods

- [convertPoliciesToDisplayedPolicies](legal_LegalHelper.LegalHelper.md#convertpoliciestodisplayedpolicies)
- [createLegalURL](legal_LegalHelper.LegalHelper.md#createlegalurl)
- [currentUserIsBlockedByLegal](legal_LegalHelper.LegalHelper.md#currentuserisblockedbylegal)
- [getAcceptedPolicies](legal_LegalHelper.LegalHelper.md#getacceptedpolicies)
- [getUnsignedPolicies](legal_LegalHelper.LegalHelper.md#getunsignedpolicies)

## Constructors

### constructor

• **new LegalHelper**()

## Methods

### convertPoliciesToDisplayedPolicies

▸ `Static` **convertPoliciesToDisplayedPolicies**(`policies`, `namespace`): { `description`: `undefined` \| ``null`` \| `string` ; `isMandatory`: `boolean` ; `localizedPolicyVersionId`: `string` ; `policyId`: `string` ; `policyName`: `string` ; `policyType`: `undefined` \| `string` ; `policyVersionId`: `string`  }[]

#### Parameters

| Name | Type |
| :------ | :------ |
| `policies` | `RetrievePolicyPublicResponse`[] |
| `namespace` | `string` |

#### Returns

{ `description`: `undefined` \| ``null`` \| `string` ; `isMandatory`: `boolean` ; `localizedPolicyVersionId`: `string` ; `policyId`: `string` ; `policyName`: `string` ; `policyType`: `undefined` \| `string` ; `policyVersionId`: `string`  }[]

#### Defined in

[packages/sdk/src/api/legal/LegalHelper.ts:30](https://github.com/AccelByte/accelbyte-web-sdk/blob/c50fb74/packages/sdk/src/api/legal/LegalHelper.ts#L30)

___

### createLegalURL

▸ `Static` **createLegalURL**(`legalWebURL?`, `policyId?`): `string`

#### Parameters

| Name | Type |
| :------ | :------ |
| `legalWebURL?` | `string` |
| `policyId?` | `string` |

#### Returns

`string`

#### Defined in

[packages/sdk/src/api/legal/LegalHelper.ts:56](https://github.com/AccelByte/accelbyte-web-sdk/blob/c50fb74/packages/sdk/src/api/legal/LegalHelper.ts#L56)

___

### currentUserIsBlockedByLegal

▸ `Static` **currentUserIsBlockedByLegal**(`eligibilities?`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `eligibilities?` | ``null`` \| `RetrieveUserEligibilitiesResponseArray` |

#### Returns

`boolean`

#### Defined in

[packages/sdk/src/api/legal/LegalHelper.ts:85](https://github.com/AccelByte/accelbyte-web-sdk/blob/c50fb74/packages/sdk/src/api/legal/LegalHelper.ts#L85)

___

### getAcceptedPolicies

▸ `Static` **getAcceptedPolicies**(`eligibilities`): `AcceptedPoliciesRequest`[]

#### Parameters

| Name | Type |
| :------ | :------ |
| `eligibilities` | `RetrieveUserEligibilitiesResponseArray` |

#### Returns

`AcceptedPoliciesRequest`[]

#### Defined in

[packages/sdk/src/api/legal/LegalHelper.ts:64](https://github.com/AccelByte/accelbyte-web-sdk/blob/c50fb74/packages/sdk/src/api/legal/LegalHelper.ts#L64)

___

### getUnsignedPolicies

▸ `Static` **getUnsignedPolicies**(`userEligibilities`): `RetrieveUserEligibilitiesResponseArray`

#### Parameters

| Name | Type |
| :------ | :------ |
| `userEligibilities` | `RetrieveUserEligibilitiesResponseArray` |

#### Returns

`RetrieveUserEligibilitiesResponseArray`

#### Defined in

[packages/sdk/src/api/legal/LegalHelper.ts:16](https://github.com/AccelByte/accelbyte-web-sdk/blob/c50fb74/packages/sdk/src/api/legal/LegalHelper.ts#L16)
