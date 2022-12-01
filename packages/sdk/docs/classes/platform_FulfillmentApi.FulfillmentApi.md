[@accelbyte/sdk](../README.md) / [platform/FulfillmentApi](../modules/platform_FulfillmentApi.md) / FulfillmentApi

# Class: FulfillmentApi

[platform/FulfillmentApi](../modules/platform_FulfillmentApi.md).FulfillmentApi

## Table of contents

### Methods

- [redeemCode](platform_FulfillmentApi.FulfillmentApi.md#redeemcode)

## Methods

### redeemCode

▸ **redeemCode**(`__namedParameters`): `Promise`<`IResponse`<{ `creditSummaries`: `undefined` \| ``null`` \| { namespace: string; userId: string; walletId: string; amount: number; }[] ; `entitlementSummaries`: `undefined` \| ``null`` \| { endDate?: string \| null \| undefined; storeId?: string \| null \| undefined; itemId?: string \| null \| undefined; startDate?: string \| null \| undefined; stackable?: boolean \| null \| undefined; ... 8 more ...; clazz: "APP" \| ... 5 more ... \| "ENTITLEMENT"; }[] ; `namespace`: `string` ; `subscriptionSummaries`: `undefined` \| ``null`` \| { sku?: string \| null \| undefined; currentPeriodStart?: string \| null \| undefined; currentPeriodEnd?: string \| null \| undefined; subscribedBy?: "USER" \| "PLATFORM" \| null \| undefined; ... 4 more ...; itemId: string; }[] ; `userId`: `string`  }\>\>

Redeem campaign code.<br>Other detail info: <ul><li><i>Required permission</i>: resource="NAMESPACE:{namespace}:USER:{userId}:FULFILLMENT", action=1 (CREATED)</li><li><i>Returns</i>: fulfillment result</li></ul>

#### Parameters

| Name | Type |
| :------ | :------ |
| `__namedParameters` | `Object` |
| `__namedParameters.data` | `Object` |
| `__namedParameters.data.code` | `string` |
| `__namedParameters.data.language` | `undefined` \| ``null`` \| `string` |
| `__namedParameters.data.region` | `undefined` \| ``null`` \| `string` |
| `__namedParameters.userId` | `string` |

#### Returns

`Promise`<`IResponse`<{ `creditSummaries`: `undefined` \| ``null`` \| { namespace: string; userId: string; walletId: string; amount: number; }[] ; `entitlementSummaries`: `undefined` \| ``null`` \| { endDate?: string \| null \| undefined; storeId?: string \| null \| undefined; itemId?: string \| null \| undefined; startDate?: string \| null \| undefined; stackable?: boolean \| null \| undefined; ... 8 more ...; clazz: "APP" \| ... 5 more ... \| "ENTITLEMENT"; }[] ; `namespace`: `string` ; `subscriptionSummaries`: `undefined` \| ``null`` \| { sku?: string \| null \| undefined; currentPeriodStart?: string \| null \| undefined; currentPeriodEnd?: string \| null \| undefined; subscribedBy?: "USER" \| "PLATFORM" \| null \| undefined; ... 4 more ...; itemId: string; }[] ; `userId`: `string`  }\>\>

#### Defined in

[packages/sdk/src/api/platform/FulfillmentApi.ts:20](https://bitbucket.org/accelbyte/justice-odin/src/d39c8cbe8/accelbyte-web-sdk/packages/sdk/src/api/platform/FulfillmentApi.ts#lines-20)
