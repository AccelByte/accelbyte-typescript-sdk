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

▸ **acceptLegalPolicies**(`acceptAgreements`): `Promise`<`IResponse`<`AcceptAgreementResponse`\>\>

Accepts many legal policy versions all at once. Supply with localized version policy id to accept an agreement.<br>Other detail info: <ul><li><i>Required permission</i>: login user</li></ul>

#### Parameters

| Name | Type |
| :------ | :------ |
| `acceptAgreements` | `AcceptAgreementRequest`[] |

#### Returns

`Promise`<`IResponse`<`AcceptAgreementResponse`\>\>

#### Defined in

[packages/sdk/src/api/legal/AgreementApi.ts:20](https://github.com/AccelByte/accelbyte-web-sdk/blob/36ddeb4/packages/sdk/src/api/legal/AgreementApi.ts#L20)

___

### getAgreements

▸ **getAgreements**(): `Promise`<`IResponseWithSync`<`RetrieveAcceptedAgreementResponseArray`\>\>

Retrieve accepted Legal Agreements.<br>Other detail info: <ul><li><i>Required permission</i>: login user</li></ul>

#### Returns

`Promise`<`IResponseWithSync`<`RetrieveAcceptedAgreementResponseArray`\>\>

#### Defined in

[packages/sdk/src/api/legal/AgreementApi.ts:27](https://github.com/AccelByte/accelbyte-web-sdk/blob/36ddeb4/packages/sdk/src/api/legal/AgreementApi.ts#L27)

___

### updateMarketingPreferences

▸ **updateMarketingPreferences**(`acceptAgreements`): `Promise`<`IResponse`<`unknown`\>\>

Change marketing preference consent.<br>Other detail info: <ul><li><i>Required permission</i>: login user</li></ul>

#### Parameters

| Name | Type |
| :------ | :------ |
| `acceptAgreements` | `AcceptAgreementRequest`[] |

#### Returns

`Promise`<`IResponse`<`unknown`\>\>

#### Defined in

[packages/sdk/src/api/legal/AgreementApi.ts:34](https://github.com/AccelByte/accelbyte-web-sdk/blob/36ddeb4/packages/sdk/src/api/legal/AgreementApi.ts#L34)
