[@accelbyte/sdk](../README.md) / [legal/PoliciesApi](../modules/legal_PoliciesApi.md) / PoliciesApi

# Class: PoliciesApi

[legal/PoliciesApi](../modules/legal_PoliciesApi.md).PoliciesApi

## Table of contents

### Methods

- [fetchAllPoliciesByCountry](legal_PoliciesApi.PoliciesApi.md#fetchallpoliciesbycountry)
- [fetchPoliciesByCountry](legal_PoliciesApi.PoliciesApi.md#fetchpoliciesbycountry)

## Methods

### fetchAllPoliciesByCountry

▸ **fetchAllPoliciesByCountry**(`«destructured»`): `Promise`<`IResponseWithSync`<{ `basePolicyId`: `string` ; `baseUrls`: `undefined` \| ``null`` \| `string`[] ; `countryCode`: `string` ; `countryGroupCode`: `undefined` \| ``null`` \| `string` ; `createdAt`: `undefined` \| ``null`` \| `string` ; `description`: `undefined` \| ``null`` \| `string` ; `id`: `string` ; `isDefaultOpted`: `boolean` ; `isDefaultSelection`: `boolean` ; `isMandatory`: `boolean` ; `namespace`: `string` ; `policyName`: `string` ; `policyType`: `string` ; `policyVersions`: `undefined` \| ``null`` \| { status?: string \| null \| undefined; createdAt?: string \| null \| undefined; updatedAt?: string \| null \| undefined; description?: string \| null \| undefined; publishedDate?: string \| null \| undefined; ... 4 more ...; isInEffect: boolean; }[] ; `readableId`: `undefined` \| ``null`` \| `string` ; `shouldNotifyOnUpdate`: `boolean` ; `tags`: `undefined` \| ``null`` \| `string`[] ; `updatedAt`: `undefined` \| ``null`` \| `string`  }[]\>\>

Retrieve all active latest policies based on country from all namespaces.<br>Other detail info: <ul><li><i>Leave the policyType empty if you want to be responded with all policy type</i></li><li><i>Fill the tags if you want to filter the responded policy by tags</i></li><li><i>Fill the defaultOnEmpty with true if you want to be responded with default country-specific policy if your requested country is not exist</i></li></ul>

#### Parameters

| Name | Type |
| :------ | :------ |
| `«destructured»` | `Object` |
| › `countryCode` | `string` |
| › `queryParams?` | `Object` |
| › `queryParams.defaultOnEmpty?` | ``null`` \| `boolean` |
| › `queryParams.policyType?` | ``"LEGAL_DOCUMENT_TYPE"`` \| ``"MARKETING_PREFERENCE_TYPE"`` |
| › `queryParams.tags?` | ``null`` \| `string` |

#### Returns

`Promise`<`IResponseWithSync`<{ `basePolicyId`: `string` ; `baseUrls`: `undefined` \| ``null`` \| `string`[] ; `countryCode`: `string` ; `countryGroupCode`: `undefined` \| ``null`` \| `string` ; `createdAt`: `undefined` \| ``null`` \| `string` ; `description`: `undefined` \| ``null`` \| `string` ; `id`: `string` ; `isDefaultOpted`: `boolean` ; `isDefaultSelection`: `boolean` ; `isMandatory`: `boolean` ; `namespace`: `string` ; `policyName`: `string` ; `policyType`: `string` ; `policyVersions`: `undefined` \| ``null`` \| { status?: string \| null \| undefined; createdAt?: string \| null \| undefined; updatedAt?: string \| null \| undefined; description?: string \| null \| undefined; publishedDate?: string \| null \| undefined; ... 4 more ...; isInEffect: boolean; }[] ; `readableId`: `undefined` \| ``null`` \| `string` ; `shouldNotifyOnUpdate`: `boolean` ; `tags`: `undefined` \| ``null`` \| `string`[] ; `updatedAt`: `undefined` \| ``null`` \| `string`  }[]\>\>

#### Defined in

[packages/sdk/src/api/legal/PoliciesApi.ts:32](https://github.com/AccelByte/accelbyte-web-sdk/blob/68edbf1/packages/sdk/src/api/legal/PoliciesApi.ts#L32)

___

### fetchPoliciesByCountry

▸ **fetchPoliciesByCountry**(`«destructured»`): `Promise`<`IResponseWithSync`<{ `basePolicyId`: `string` ; `baseUrls`: `undefined` \| ``null`` \| `string`[] ; `countryCode`: `string` ; `countryGroupCode`: `undefined` \| ``null`` \| `string` ; `createdAt`: `undefined` \| ``null`` \| `string` ; `description`: `undefined` \| ``null`` \| `string` ; `id`: `string` ; `isDefaultOpted`: `boolean` ; `isDefaultSelection`: `boolean` ; `isMandatory`: `boolean` ; `namespace`: `string` ; `policyName`: `string` ; `policyType`: `string` ; `policyVersions`: `undefined` \| ``null`` \| { status?: string \| null \| undefined; createdAt?: string \| null \| undefined; updatedAt?: string \| null \| undefined; description?: string \| null \| undefined; publishedDate?: string \| null \| undefined; ... 4 more ...; isInEffect: boolean; }[] ; `readableId`: `undefined` \| ``null`` \| `string` ; `shouldNotifyOnUpdate`: `boolean` ; `tags`: `undefined` \| ``null`` \| `string`[] ; `updatedAt`: `undefined` \| ``null`` \| `string`  }[]\>\>

Retrieve all active latest policies based on a namespace and country.<br>Other detail info: <ul><li><i>Leave the policyType empty if you want to be responded with all policy type</i></li><li><i>Fill the tags if you want to filter the responded policy by tags</i></li><li><i>Fill the defaultOnEmpty with true if you want to be responded with default country-specific policy if your requested country is not exist</i></li><li><i>Fill the alwaysIncludeDefault with true if you want to be responded with always include default policy. If there are duplicate policies (default policies and country specific policies with same base policy) it'll include policy with same country code, for example:<ul><li>Document 1 (default): Region US (default), UA</li><li>Document 2 (default): Region US (default)</li><li>Document 3 (default): Region US (default)</li><li>User: Region UA</li><li>Query: alwaysIncludeDefault: true</li><li>Response: Document 1 (UA), Document 2 (US), Document 3 (US)</li></ul>

#### Parameters

| Name | Type |
| :------ | :------ |
| `«destructured»` | `Object` |
| › `countryCode` | `string` |
| › `queryParams` | `undefined` \| { `alwaysIncludeDefault?`: ``null`` \| `boolean` ; `defaultOnEmpty?`: ``null`` \| `boolean` ; `policyType?`: ``"LEGAL_DOCUMENT_TYPE"`` \| ``"MARKETING_PREFERENCE_TYPE"`` ; `tags?`: ``null`` \| `string`  } |

#### Returns

`Promise`<`IResponseWithSync`<{ `basePolicyId`: `string` ; `baseUrls`: `undefined` \| ``null`` \| `string`[] ; `countryCode`: `string` ; `countryGroupCode`: `undefined` \| ``null`` \| `string` ; `createdAt`: `undefined` \| ``null`` \| `string` ; `description`: `undefined` \| ``null`` \| `string` ; `id`: `string` ; `isDefaultOpted`: `boolean` ; `isDefaultSelection`: `boolean` ; `isMandatory`: `boolean` ; `namespace`: `string` ; `policyName`: `string` ; `policyType`: `string` ; `policyVersions`: `undefined` \| ``null`` \| { status?: string \| null \| undefined; createdAt?: string \| null \| undefined; updatedAt?: string \| null \| undefined; description?: string \| null \| undefined; publishedDate?: string \| null \| undefined; ... 4 more ...; isInEffect: boolean; }[] ; `readableId`: `undefined` \| ``null`` \| `string` ; `shouldNotifyOnUpdate`: `boolean` ; `tags`: `undefined` \| ``null`` \| `string`[] ; `updatedAt`: `undefined` \| ``null`` \| `string`  }[]\>\>

#### Defined in

[packages/sdk/src/api/legal/PoliciesApi.ts:19](https://github.com/AccelByte/accelbyte-web-sdk/blob/68edbf1/packages/sdk/src/api/legal/PoliciesApi.ts#L19)
