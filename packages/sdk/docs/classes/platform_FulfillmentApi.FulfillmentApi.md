[@accelbyte/sdk](../README.md) / [platform/FulfillmentApi](../modules/platform_FulfillmentApi.md) / FulfillmentApi

# Class: FulfillmentApi

[platform/FulfillmentApi](../modules/platform_FulfillmentApi.md).FulfillmentApi

## Table of contents

### Methods

- [redeemCode](platform_FulfillmentApi.FulfillmentApi.md#redeemcode)

## Methods

### redeemCode

▸ **redeemCode**(`«destructured»`): `Promise`<`IResponse`<`FulfillmentResult`\>\>

Redeem campaign code.<br>Other detail info: <ul><li><i>Required permission</i>: resource="NAMESPACE:{namespace}:USER:{userId}:FULFILLMENT", action=1 (CREATED)</li><li><i>Returns</i>: fulfillment result</li></ul>

#### Parameters

| Name | Type |
| :------ | :------ |
| `«destructured»` | `Object` |
| › `data` | `FulfillCodeRequest` |
| › `userId` | `string` |

#### Returns

`Promise`<`IResponse`<`FulfillmentResult`\>\>

#### Defined in

[packages/sdk/src/api/platform/FulfillmentApi.ts:20](https://github.com/AccelByte/accelbyte-web-sdk/blob/c50fb74/packages/sdk/src/api/platform/FulfillmentApi.ts#L20)
