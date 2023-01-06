[@accelbyte/sdk](../README.md) / [legal/EligibilitiesApi](../modules/legal_EligibilitiesApi.md) / EligibilitiesApi

# Class: EligibilitiesApi

[legal/EligibilitiesApi](../modules/legal_EligibilitiesApi.md).EligibilitiesApi

## Table of contents

### Methods

- [getUserEligibilities](legal_EligibilitiesApi.EligibilitiesApi.md#getusereligibilities)

## Methods

### getUserEligibilities

▸ **getUserEligibilities**(): `Promise`<`IResponseWithSync`<{ `baseUrls`: `undefined` \| ``null`` \| `string`[] ; `countryCode`: `string` ; `countryGroupCode`: `undefined` \| ``null`` \| `string` ; `description`: `undefined` \| ``null`` \| `string` ; `isAccepted`: `boolean` ; `isMandatory`: `boolean` ; `namespace`: `string` ; `policyId`: `string` ; `policyName`: `string` ; `policyType`: `string` ; `policyVersions`: `undefined` \| ``null`` \| { status?: string \| null \| undefined; createdAt?: string \| null \| undefined; updatedAt?: string \| null \| undefined; description?: string \| null \| undefined; publishedDate?: string \| null \| undefined; ... 4 more ...; isInEffect: boolean; }[] ; `readableId`: `undefined` \| ``null`` \| `string`  }[]\>\>

Retrieve the active policies and its conformance status by user.<br>This process supports cross-namespace checking, that means if the active policy already accepted by the same user in other namespace, then it will be considered as eligible.<br/><br/>Other detail info: <ul><li><i>Required permission</i>: login user</li></ul>

#### Returns

`Promise`<`IResponseWithSync`<{ `baseUrls`: `undefined` \| ``null`` \| `string`[] ; `countryCode`: `string` ; `countryGroupCode`: `undefined` \| ``null`` \| `string` ; `description`: `undefined` \| ``null`` \| `string` ; `isAccepted`: `boolean` ; `isMandatory`: `boolean` ; `namespace`: `string` ; `policyId`: `string` ; `policyName`: `string` ; `policyType`: `string` ; `policyVersions`: `undefined` \| ``null`` \| { status?: string \| null \| undefined; createdAt?: string \| null \| undefined; updatedAt?: string \| null \| undefined; description?: string \| null \| undefined; publishedDate?: string \| null \| undefined; ... 4 more ...; isInEffect: boolean; }[] ; `readableId`: `undefined` \| ``null`` \| `string`  }[]\>\>

#### Defined in

[packages/sdk/src/api/legal/EligibilitiesApi.ts:19](https://github.com/AccelByte/accelbyte-web-sdk/blob/67c6f8c/packages/sdk/src/api/legal/EligibilitiesApi.ts#L19)
