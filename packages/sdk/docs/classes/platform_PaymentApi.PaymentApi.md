[@accelbyte/sdk](../README.md) / [platform/PaymentApi](../modules/platform_PaymentApi.md) / PaymentApi

# Class: PaymentApi

[platform/PaymentApi](../modules/platform_PaymentApi.md).PaymentApi

## Table of contents

### Methods

- [createPaymentUrl](platform_PaymentApi.PaymentApi.md#createpaymenturl)
- [deletePaymentAccount](platform_PaymentApi.PaymentApi.md#deletepaymentaccount)
- [getPaymentAccounts](platform_PaymentApi.PaymentApi.md#getpaymentaccounts)
- [getPaymentInfo](platform_PaymentApi.PaymentApi.md#getpaymentinfo)
- [getPaymentMethods](platform_PaymentApi.PaymentApi.md#getpaymentmethods)
- [getPaymentOrderStatus](platform_PaymentApi.PaymentApi.md#getpaymentorderstatus)
- [getPaymentProviderPublicConfig](platform_PaymentApi.PaymentApi.md#getpaymentproviderpublicconfig)
- [getPaymentTax](platform_PaymentApi.PaymentApi.md#getpaymenttax)
- [processPaymentOrder](platform_PaymentApi.PaymentApi.md#processpaymentorder)

## Methods

### createPaymentUrl

▸ **createPaymentUrl**(`data`): `Promise`<`IResponse`<{ `paymentProvider`: ``"WALLET"`` \| ``"XSOLLA"`` \| ``"ADYEN"`` \| ``"STRIPE"`` \| ``"CHECKOUT"`` \| ``"ALIPAY"`` \| ``"WXPAY"`` \| ``"PAYPAL"`` ; `paymentType`: ``"LINK"`` \| ``"QR_CODE"`` ; `paymentUrl`: `undefined` \| ``null`` \| `string` ; `returnUrl`: `undefined` \| ``null`` \| `string` ; `sessionData`: `undefined` \| ``null`` \| `string` ; `sessionId`: `undefined` \| ``null`` \| `string`  }\>\>

Get payment url.<br>Other detail info: <ul><li><i>Returns</i>: Get payment link</li></ul>

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `Object` |
| `data.paymentOrderNo` | `string` |
| `data.paymentProvider` | ``"WALLET"`` \| ``"XSOLLA"`` \| ``"ADYEN"`` \| ``"STRIPE"`` \| ``"CHECKOUT"`` \| ``"ALIPAY"`` \| ``"WXPAY"`` \| ``"PAYPAL"`` |
| `data.returnUrl` | `undefined` \| ``null`` \| `string` |
| `data.ui` | `undefined` \| ``null`` \| `string` |
| `data.zipCode` | `undefined` \| ``null`` \| `string` |

#### Returns

`Promise`<`IResponse`<{ `paymentProvider`: ``"WALLET"`` \| ``"XSOLLA"`` \| ``"ADYEN"`` \| ``"STRIPE"`` \| ``"CHECKOUT"`` \| ``"ALIPAY"`` \| ``"WXPAY"`` \| ``"PAYPAL"`` ; `paymentType`: ``"LINK"`` \| ``"QR_CODE"`` ; `paymentUrl`: `undefined` \| ``null`` \| `string` ; `returnUrl`: `undefined` \| ``null`` \| `string` ; `sessionData`: `undefined` \| ``null`` \| `string` ; `sessionId`: `undefined` \| ``null`` \| `string`  }\>\>

#### Defined in

[packages/sdk/src/api/platform/PaymentApi.ts:96](https://bitbucket.org/accelbyte/justice-odin/src/d39c8cbe8/accelbyte-web-sdk/packages/sdk/src/api/platform/PaymentApi.ts#lines-96)

___

### deletePaymentAccount

▸ **deletePaymentAccount**(`__namedParameters`): `Promise`<`IResponse`<`unknown`\>\>

Delete payment account.<br>Other detail info: <ul><li><i>Required permission</i>: resource="NAMESPACE:{namespace}:USER:{userId}:PAYMENT:ACCOUNT", action=8 (DELETE)</li><li><i>Returns</i>:</li></ul>

#### Parameters

| Name | Type |
| :------ | :------ |
| `__namedParameters` | `Object` |
| `__namedParameters.id` | `string` |
| `__namedParameters.type` | `string` |
| `__namedParameters.userId` | `string` |

#### Returns

`Promise`<`IResponse`<`unknown`\>\>

#### Defined in

[packages/sdk/src/api/platform/PaymentApi.ts:29](https://bitbucket.org/accelbyte/justice-odin/src/d39c8cbe8/accelbyte-web-sdk/packages/sdk/src/api/platform/PaymentApi.ts#lines-29)

___

### getPaymentAccounts

▸ **getPaymentAccounts**(`userId`): `Promise`<`IResponseWithSync`<{ `id`: `string` ; `name`: `string` ; `type`: ``"card"`` \| ``"paypal"``  }[]\>\>

Get payment accounts.<br>Other detail info: <ul><li><i>Required permission</i>: resource="NAMESPACE:{namespace}:USER:{userId}:PAYMENT:ACCOUNT", action=2 (READ)</li><li><i>Returns</i>: Payment account list</li></ul>

#### Parameters

| Name | Type |
| :------ | :------ |
| `userId` | `string` |

#### Returns

`Promise`<`IResponseWithSync`<{ `id`: `string` ; `name`: `string` ; `type`: ``"card"`` \| ``"paypal"``  }[]\>\>

#### Defined in

[packages/sdk/src/api/platform/PaymentApi.ts:22](https://bitbucket.org/accelbyte/justice-odin/src/d39c8cbe8/accelbyte-web-sdk/packages/sdk/src/api/platform/PaymentApi.ts#lines-22)

___

### getPaymentInfo

▸ **getPaymentInfo**(`paymentOrderNo`): `Promise`<`IResponseWithSync`<{ `charging`: `boolean` ; `currencyCode`: `string` ; `currencySymbol`: `string` ; `description`: `undefined` \| ``null`` \| `string` ; `displayName`: `undefined` \| ``null`` \| `string` ; `price`: `string` ; `region`: `undefined` \| ``null`` \| `string` ; `sandbox`: `boolean` ; `title`: `string`  }\>\>

Get payment order info.<br>Other detail info: <ul><li><i>Returns</i>: Payment order details</li></ul>

#### Parameters

| Name | Type |
| :------ | :------ |
| `paymentOrderNo` | `string` |

#### Returns

`Promise`<`IResponseWithSync`<{ `charging`: `boolean` ; `currencyCode`: `string` ; `currencySymbol`: `string` ; `description`: `undefined` \| ``null`` \| `string` ; `displayName`: `undefined` \| ``null`` \| `string` ; `price`: `string` ; `region`: `undefined` \| ``null`` \| `string` ; `sandbox`: `boolean` ; `title`: `string`  }\>\>

#### Defined in

[packages/sdk/src/api/platform/PaymentApi.ts:36](https://bitbucket.org/accelbyte/justice-odin/src/d39c8cbe8/accelbyte-web-sdk/packages/sdk/src/api/platform/PaymentApi.ts#lines-36)

___

### getPaymentMethods

▸ **getPaymentMethods**(`paymentOrderNo`): `Promise`<`IResponseWithSync`<{ `enableTax`: `undefined` \| ``null`` \| `string` ; `name`: `string` ; `paymentProvider`: ``"WALLET"`` \| ``"XSOLLA"`` \| ``"ADYEN"`` \| ``"STRIPE"`` \| ``"CHECKOUT"`` \| ``"ALIPAY"`` \| ``"WXPAY"`` \| ``"PAYPAL"``  }[]\>\>

Get payment methods.<br>Other detail info: <ul><li><i>Returns</i>: Payment method list</li></ul>

#### Parameters

| Name | Type |
| :------ | :------ |
| `paymentOrderNo` | ``null`` \| `string` |

#### Returns

`Promise`<`IResponseWithSync`<{ `enableTax`: `undefined` \| ``null`` \| `string` ; `name`: `string` ; `paymentProvider`: ``"WALLET"`` \| ``"XSOLLA"`` \| ``"ADYEN"`` \| ``"STRIPE"`` \| ``"CHECKOUT"`` \| ``"ALIPAY"`` \| ``"WXPAY"`` \| ``"PAYPAL"``  }[]\>\>

#### Defined in

[packages/sdk/src/api/platform/PaymentApi.ts:78](https://bitbucket.org/accelbyte/justice-odin/src/d39c8cbe8/accelbyte-web-sdk/packages/sdk/src/api/platform/PaymentApi.ts#lines-78)

___

### getPaymentOrderStatus

▸ **getPaymentOrderStatus**(`paymentOrderNo`): `Promise`<`IResponseWithSync`<{ `charging`: `boolean` ; `success`: `boolean`  }\>\>

Check payment order paid status.<br>Other detail info: <ul><li><i>Returns</i>: Payment order paid result</li></ul>

#### Parameters

| Name | Type |
| :------ | :------ |
| `paymentOrderNo` | `string` |

#### Returns

`Promise`<`IResponseWithSync`<{ `charging`: `boolean` ; `success`: `boolean`  }\>\>

#### Defined in

[packages/sdk/src/api/platform/PaymentApi.ts:69](https://bitbucket.org/accelbyte/justice-odin/src/d39c8cbe8/accelbyte-web-sdk/packages/sdk/src/api/platform/PaymentApi.ts#lines-69)

___

### getPaymentProviderPublicConfig

▸ **getPaymentProviderPublicConfig**(`paymentProvider`, `region`, `sandbox?`): `Promise`<`IResponseWithSync`<`unknown`\>\>

Get payment provider public config, at current only Strip provide public config.<br>Other detail info: <ul><li><i>Returns</i>: Public config</li></ul>

#### Parameters

| Name | Type |
| :------ | :------ |
| `paymentProvider` | ``null`` \| `string` |
| `region` | ``null`` \| `string` |
| `sandbox?` | ``null`` \| `boolean` |

#### Returns

`Promise`<`IResponseWithSync`<`unknown`\>\>

#### Defined in

[packages/sdk/src/api/platform/PaymentApi.ts:58](https://bitbucket.org/accelbyte/justice-odin/src/d39c8cbe8/accelbyte-web-sdk/packages/sdk/src/api/platform/PaymentApi.ts#lines-58)

___

### getPaymentTax

▸ **getPaymentTax**(`paymentProvider`, `paymentOrderNo`, `zipCode?`): `Promise`<`IResponseWithSync`<{ `enableTax`: `undefined` \| ``null`` \| `boolean` ; `formattedTax`: `undefined` \| ``null`` \| `string` ; `state`: `undefined` \| ``null`` \| `string` ; `tax`: `undefined` \| ``null`` \| `number`  }\>\>

Check and get a payment order's should pay tax.<br>Other detail info: <ul><li><i>Returns</i>: tax result</li></ul>

#### Parameters

| Name | Type |
| :------ | :------ |
| `paymentProvider` | ``null`` \| `string` |
| `paymentOrderNo` | ``null`` \| `string` |
| `zipCode?` | ``null`` \| `string` |

#### Returns

`Promise`<`IResponseWithSync`<{ `enableTax`: `undefined` \| ``null`` \| `boolean` ; `formattedTax`: `undefined` \| ``null`` \| `string` ; `state`: `undefined` \| ``null`` \| `string` ; `tax`: `undefined` \| ``null`` \| `number`  }\>\>

#### Defined in

[packages/sdk/src/api/platform/PaymentApi.ts:85](https://bitbucket.org/accelbyte/justice-odin/src/d39c8cbe8/accelbyte-web-sdk/packages/sdk/src/api/platform/PaymentApi.ts#lines-85)

___

### processPaymentOrder

▸ **processPaymentOrder**(`paymentOrderNo`, `data`, `queryParams?`): `Promise`<`IResponse`<{ `pending`: `boolean` ; `reason`: `undefined` \| ``null`` \| `string` ; `redirectUrl`: `undefined` \| ``null`` \| `string` ; `success`: `boolean`  }\>\>

Do payment(For now, this only support checkout.com).<br>Other detail info: <ul><li><i>Returns</i>: Payment process result</li></ul>

#### Parameters

| Name | Type |
| :------ | :------ |
| `paymentOrderNo` | `string` |
| `data` | `Object` |
| `data.token` | `undefined` \| ``null`` \| `string` |
| `queryParams?` | `Object` |
| `queryParams.paymentProvider?` | ``null`` \| `string` |
| `queryParams.zipCode?` | ``null`` \| `string` |

#### Returns

`Promise`<`IResponse`<{ `pending`: `boolean` ; `reason`: `undefined` \| ``null`` \| `string` ; `redirectUrl`: `undefined` \| ``null`` \| `string` ; `success`: `boolean`  }\>\>

#### Defined in

[packages/sdk/src/api/platform/PaymentApi.ts:43](https://bitbucket.org/accelbyte/justice-odin/src/d39c8cbe8/accelbyte-web-sdk/packages/sdk/src/api/platform/PaymentApi.ts#lines-43)
