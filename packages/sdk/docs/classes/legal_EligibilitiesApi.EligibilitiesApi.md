[@accelbyte/sdk](../README.md) / [legal/EligibilitiesApi](../modules/legal_EligibilitiesApi.md) / EligibilitiesApi

# Class: EligibilitiesApi

[legal/EligibilitiesApi](../modules/legal_EligibilitiesApi.md).EligibilitiesApi

## Table of contents

### Methods

- [getUserEligibilities](legal_EligibilitiesApi.EligibilitiesApi.md#getusereligibilities)

## Methods

### getUserEligibilities

▸ **getUserEligibilities**(): `Promise`<`IResponseWithSync`<`RetrieveUserEligibilitiesResponseArray`\>\>

Retrieve the active policies and its conformance status by user.<br>This process supports cross-namespace checking, that means if the active policy already accepted by the same user in other namespace, then it will be considered as eligible.<br/><br/>Other detail info: <ul><li><i>Required permission</i>: login user</li></ul>

#### Returns

`Promise`<`IResponseWithSync`<`RetrieveUserEligibilitiesResponseArray`\>\>

#### Defined in

[packages/sdk/src/api/legal/EligibilitiesApi.ts:19](https://github.com/AccelByte/accelbyte-web-sdk/blob/96dad9f/packages/sdk/src/api/legal/EligibilitiesApi.ts#L19)
