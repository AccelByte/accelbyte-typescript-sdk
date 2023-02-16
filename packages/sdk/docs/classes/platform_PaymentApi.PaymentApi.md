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

▸ **createPaymentUrl**(`data`): `Promise`<`IResponse`<`PaymentUrl`\>\>

Get payment url.<br>Other detail info: <ul><li><i>Returns</i>: Get payment link</li></ul>

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `PaymentUrlCreate` |

#### Returns

`Promise`<`IResponse`<`PaymentUrl`\>\>

#### Defined in

[packages/sdk/src/api/platform/PaymentApi.ts:106](https://github.com/AccelByte/accelbyte-web-sdk/blob/d43c233/packages/sdk/src/api/platform/PaymentApi.ts#L106)

___

### deletePaymentAccount

▸ **deletePaymentAccount**(`«destructured»`): `Promise`<`IResponse`<`unknown`\>\>

Delete payment account.<br>Other detail info: <ul><li><i>Required permission</i>: resource="NAMESPACE:{namespace}:USER:{userId}:PAYMENT:ACCOUNT", action=8 (DELETE)</li><li><i>Returns</i>:</li></ul>

#### Parameters

| Name | Type |
| :------ | :------ |
| `«destructured»` | `Object` |
| › `id` | `string` |
| › `type` | `string` |
| › `userId` | `string` |

#### Returns

`Promise`<`IResponse`<`unknown`\>\>

#### Defined in

[packages/sdk/src/api/platform/PaymentApi.ts:29](https://github.com/AccelByte/accelbyte-web-sdk/blob/d43c233/packages/sdk/src/api/platform/PaymentApi.ts#L29)

___

### getPaymentAccounts

▸ **getPaymentAccounts**(`userId`): `Promise`<`IResponseWithSync`<`PaymentAccountArray`\>\>

Get payment accounts.<br>Other detail info: <ul><li><i>Required permission</i>: resource="NAMESPACE:{namespace}:USER:{userId}:PAYMENT:ACCOUNT", action=2 (READ)</li><li><i>Returns</i>: Payment account list</li></ul>

#### Parameters

| Name | Type |
| :------ | :------ |
| `userId` | `string` |

#### Returns

`Promise`<`IResponseWithSync`<`PaymentAccountArray`\>\>

#### Defined in

[packages/sdk/src/api/platform/PaymentApi.ts:22](https://github.com/AccelByte/accelbyte-web-sdk/blob/d43c233/packages/sdk/src/api/platform/PaymentApi.ts#L22)

___

### getPaymentInfo

▸ **getPaymentInfo**(`paymentOrderNo`): `Promise`<`IResponseWithSync`<`PaymentOrderDetails`\>\>

Get payment order info.<br>Other detail info: <ul><li><i>Returns</i>: Payment order details</li></ul>

#### Parameters

| Name | Type |
| :------ | :------ |
| `paymentOrderNo` | `string` |

#### Returns

`Promise`<`IResponseWithSync`<`PaymentOrderDetails`\>\>

#### Defined in

[packages/sdk/src/api/platform/PaymentApi.ts:36](https://github.com/AccelByte/accelbyte-web-sdk/blob/d43c233/packages/sdk/src/api/platform/PaymentApi.ts#L36)

___

### getPaymentMethods

▸ **getPaymentMethods**(`paymentOrderNo`): `Promise`<`IResponseWithSync`<`PaymentMethodArray`\>\>

Get payment methods.<br>Other detail info: <ul><li><i>Returns</i>: Payment method list</li></ul>

#### Parameters

| Name | Type |
| :------ | :------ |
| `paymentOrderNo` | ``null`` \| `string` |

#### Returns

`Promise`<`IResponseWithSync`<`PaymentMethodArray`\>\>

#### Defined in

[packages/sdk/src/api/platform/PaymentApi.ts:84](https://github.com/AccelByte/accelbyte-web-sdk/blob/d43c233/packages/sdk/src/api/platform/PaymentApi.ts#L84)

___

### getPaymentOrderStatus

▸ **getPaymentOrderStatus**(`paymentOrderNo`): `Promise`<`IResponseWithSync`<`PaymentOrderPaidResult`\>\>

Check payment order paid status.<br>Other detail info: <ul><li><i>Returns</i>: Payment order paid result</li></ul>

#### Parameters

| Name | Type |
| :------ | :------ |
| `paymentOrderNo` | `string` |

#### Returns

`Promise`<`IResponseWithSync`<`PaymentOrderPaidResult`\>\>

#### Defined in

[packages/sdk/src/api/platform/PaymentApi.ts:75](https://github.com/AccelByte/accelbyte-web-sdk/blob/d43c233/packages/sdk/src/api/platform/PaymentApi.ts#L75)

___

### getPaymentProviderPublicConfig

▸ **getPaymentProviderPublicConfig**(`paymentProvider`, `region`, `sandbox?`): `Promise`<`IResponseWithSync`<`unknown`\>\>

Get payment provider public config, at current only Strip provide public config.<br>Other detail info: <ul><li><i>Returns</i>: Public config</li></ul>

#### Parameters

| Name | Type |
| :------ | :------ |
| `paymentProvider` | ``"WALLET"`` \| ``"XSOLLA"`` \| ``"ADYEN"`` \| ``"STRIPE"`` \| ``"CHECKOUT"`` \| ``"ALIPAY"`` \| ``"WXPAY"`` \| ``"PAYPAL"`` |
| `region` | ``null`` \| `string` |
| `sandbox?` | ``null`` \| `boolean` |

#### Returns

`Promise`<`IResponseWithSync`<`unknown`\>\>

#### Defined in

[packages/sdk/src/api/platform/PaymentApi.ts:60](https://github.com/AccelByte/accelbyte-web-sdk/blob/d43c233/packages/sdk/src/api/platform/PaymentApi.ts#L60)

___

### getPaymentTax

▸ **getPaymentTax**(`paymentProvider`, `paymentOrderNo`, `zipCode?`): `Promise`<`IResponseWithSync`<`TaxResult`\>\>

Check and get a payment order's should pay tax.<br>Other detail info: <ul><li><i>Returns</i>: tax result</li></ul>

#### Parameters

| Name | Type |
| :------ | :------ |
| `paymentProvider` | ``"WALLET"`` \| ``"XSOLLA"`` \| ``"ADYEN"`` \| ``"STRIPE"`` \| ``"CHECKOUT"`` \| ``"ALIPAY"`` \| ``"WXPAY"`` \| ``"PAYPAL"`` |
| `paymentOrderNo` | ``null`` \| `string` |
| `zipCode?` | ``null`` \| `string` |

#### Returns

`Promise`<`IResponseWithSync`<`TaxResult`\>\>

#### Defined in

[packages/sdk/src/api/platform/PaymentApi.ts:91](https://github.com/AccelByte/accelbyte-web-sdk/blob/d43c233/packages/sdk/src/api/platform/PaymentApi.ts#L91)

___

### processPaymentOrder

▸ **processPaymentOrder**(`paymentOrderNo`, `data`, `queryParams`): `Promise`<`IResponse`<`PaymentProcessResult`\>\>

Do payment(For now, this only support checkout.com).<br>Other detail info: <ul><li><i>Returns</i>: Payment process result</li></ul>

#### Parameters

| Name | Type |
| :------ | :------ |
| `paymentOrderNo` | `string` |
| `data` | `PaymentToken` |
| `queryParams` | `undefined` \| { `paymentProvider?`: ``"WALLET"`` \| ``"XSOLLA"`` \| ``"ADYEN"`` \| ``"STRIPE"`` \| ``"CHECKOUT"`` \| ``"ALIPAY"`` \| ``"WXPAY"`` \| ``"PAYPAL"`` ; `zipCode?`: ``null`` \| `string`  } |

#### Returns

`Promise`<`IResponse`<`PaymentProcessResult`\>\>

#### Defined in

[packages/sdk/src/api/platform/PaymentApi.ts:45](https://github.com/AccelByte/accelbyte-web-sdk/blob/d43c233/packages/sdk/src/api/platform/PaymentApi.ts#L45)
