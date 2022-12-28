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
| `policies` | { `basePolicyId`: `string` ; `baseUrls`: `undefined` \| ``null`` \| `string`[] ; `countryCode`: `string` ; `countryGroupCode`: `undefined` \| ``null`` \| `string` ; `createdAt`: `undefined` \| ``null`` \| `string` ; `description`: `undefined` \| ``null`` \| `string` ; `id`: `string` ; `isDefaultOpted`: `boolean` ; `isDefaultSelection`: `boolean` ; `isMandatory`: `boolean` ; `namespace`: `string` ; `policyName`: `string` ; `policyType`: `string` ; `policyVersions`: `undefined` \| ``null`` \| { status?: string \| null \| undefined; createdAt?: string \| null \| undefined; updatedAt?: string \| null \| undefined; description?: string \| null \| undefined; publishedDate?: string \| null \| undefined; ... 4 more ...; isInEffect: boolean; }[] ; `readableId`: `undefined` \| ``null`` \| `string` ; `shouldNotifyOnUpdate`: `boolean` ; `tags`: `undefined` \| ``null`` \| `string`[] ; `updatedAt`: `undefined` \| ``null`` \| `string`  }[] |
| `namespace` | `string` |

#### Returns

{ `description`: `undefined` \| ``null`` \| `string` ; `isMandatory`: `boolean` ; `localizedPolicyVersionId`: `string` ; `policyId`: `string` ; `policyName`: `string` ; `policyType`: `undefined` \| `string` ; `policyVersionId`: `string`  }[]

#### Defined in

[packages/sdk/src/api/legal/LegalHelper.ts:30](https://github.com/AccelByte/accelbyte-web-sdk/blob/82edf3f/packages/sdk/src/api/legal/LegalHelper.ts#L30)

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

[packages/sdk/src/api/legal/LegalHelper.ts:56](https://github.com/AccelByte/accelbyte-web-sdk/blob/82edf3f/packages/sdk/src/api/legal/LegalHelper.ts#L56)

___

### currentUserIsBlockedByLegal

▸ `Static` **currentUserIsBlockedByLegal**(`eligibilities?`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `eligibilities?` | ``null`` \| { `baseUrls`: `undefined` \| ``null`` \| `string`[] ; `countryCode`: `string` ; `countryGroupCode`: `undefined` \| ``null`` \| `string` ; `description`: `undefined` \| ``null`` \| `string` ; `isAccepted`: `boolean` ; `isMandatory`: `boolean` ; `namespace`: `string` ; `policyId`: `string` ; `policyName`: `string` ; `policyType`: `string` ; `policyVersions`: `undefined` \| ``null`` \| { status?: string \| null \| undefined; createdAt?: string \| null \| undefined; updatedAt?: string \| null \| undefined; description?: string \| null \| undefined; publishedDate?: string \| null \| undefined; ... 4 more ...; isInEffect: boolean; }[] ; `readableId`: `undefined` \| ``null`` \| `string`  }[] |

#### Returns

`boolean`

#### Defined in

[packages/sdk/src/api/legal/LegalHelper.ts:85](https://github.com/AccelByte/accelbyte-web-sdk/blob/82edf3f/packages/sdk/src/api/legal/LegalHelper.ts#L85)

___

### getAcceptedPolicies

▸ `Static` **getAcceptedPolicies**(`eligibilities`): { `isAccepted`: `boolean` ; `localizedPolicyVersionId`: `string` ; `policyId`: `string` ; `policyVersionId`: `string`  }[]

#### Parameters

| Name | Type |
| :------ | :------ |
| `eligibilities` | { `baseUrls`: `undefined` \| ``null`` \| `string`[] ; `countryCode`: `string` ; `countryGroupCode`: `undefined` \| ``null`` \| `string` ; `description`: `undefined` \| ``null`` \| `string` ; `isAccepted`: `boolean` ; `isMandatory`: `boolean` ; `namespace`: `string` ; `policyId`: `string` ; `policyName`: `string` ; `policyType`: `string` ; `policyVersions`: `undefined` \| ``null`` \| { status?: string \| null \| undefined; createdAt?: string \| null \| undefined; updatedAt?: string \| null \| undefined; description?: string \| null \| undefined; publishedDate?: string \| null \| undefined; ... 4 more ...; isInEffect: boolean; }[] ; `readableId`: `undefined` \| ``null`` \| `string`  }[] |

#### Returns

{ `isAccepted`: `boolean` ; `localizedPolicyVersionId`: `string` ; `policyId`: `string` ; `policyVersionId`: `string`  }[]

#### Defined in

[packages/sdk/src/api/legal/LegalHelper.ts:64](https://github.com/AccelByte/accelbyte-web-sdk/blob/82edf3f/packages/sdk/src/api/legal/LegalHelper.ts#L64)

___

### getUnsignedPolicies

▸ `Static` **getUnsignedPolicies**(`userEligibilities`): { `baseUrls`: `undefined` \| ``null`` \| `string`[] ; `countryCode`: `string` ; `countryGroupCode`: `undefined` \| ``null`` \| `string` ; `description`: `undefined` \| ``null`` \| `string` ; `isAccepted`: `boolean` ; `isMandatory`: `boolean` ; `namespace`: `string` ; `policyId`: `string` ; `policyName`: `string` ; `policyType`: `string` ; `policyVersions`: `undefined` \| ``null`` \| { status?: string \| null \| undefined; createdAt?: string \| null \| undefined; updatedAt?: string \| null \| undefined; description?: string \| null \| undefined; publishedDate?: string \| null \| undefined; ... 4 more ...; isInEffect: boolean; }[] ; `readableId`: `undefined` \| ``null`` \| `string`  }[]

#### Parameters

| Name | Type |
| :------ | :------ |
| `userEligibilities` | { `baseUrls`: `undefined` \| ``null`` \| `string`[] ; `countryCode`: `string` ; `countryGroupCode`: `undefined` \| ``null`` \| `string` ; `description`: `undefined` \| ``null`` \| `string` ; `isAccepted`: `boolean` ; `isMandatory`: `boolean` ; `namespace`: `string` ; `policyId`: `string` ; `policyName`: `string` ; `policyType`: `string` ; `policyVersions`: `undefined` \| ``null`` \| { status?: string \| null \| undefined; createdAt?: string \| null \| undefined; updatedAt?: string \| null \| undefined; description?: string \| null \| undefined; publishedDate?: string \| null \| undefined; ... 4 more ...; isInEffect: boolean; }[] ; `readableId`: `undefined` \| ``null`` \| `string`  }[] |

#### Returns

{ `baseUrls`: `undefined` \| ``null`` \| `string`[] ; `countryCode`: `string` ; `countryGroupCode`: `undefined` \| ``null`` \| `string` ; `description`: `undefined` \| ``null`` \| `string` ; `isAccepted`: `boolean` ; `isMandatory`: `boolean` ; `namespace`: `string` ; `policyId`: `string` ; `policyName`: `string` ; `policyType`: `string` ; `policyVersions`: `undefined` \| ``null`` \| { status?: string \| null \| undefined; createdAt?: string \| null \| undefined; updatedAt?: string \| null \| undefined; description?: string \| null \| undefined; publishedDate?: string \| null \| undefined; ... 4 more ...; isInEffect: boolean; }[] ; `readableId`: `undefined` \| ``null`` \| `string`  }[]

#### Defined in

[packages/sdk/src/api/legal/LegalHelper.ts:16](https://github.com/AccelByte/accelbyte-web-sdk/blob/82edf3f/packages/sdk/src/api/legal/LegalHelper.ts#L16)
