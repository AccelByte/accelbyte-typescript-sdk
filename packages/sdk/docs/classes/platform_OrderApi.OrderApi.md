[@accelbyte/sdk](../README.md) / [platform/OrderApi](../modules/platform_OrderApi.md) / OrderApi

# Class: OrderApi

[platform/OrderApi](../modules/platform_OrderApi.md).OrderApi

## Table of contents

### Methods

- [cancelOrder](platform_OrderApi.OrderApi.md#cancelorder)
- [createOrder](platform_OrderApi.OrderApi.md#createorder)
- [fetchPrePurchaseInformation](platform_OrderApi.OrderApi.md#fetchprepurchaseinformation)
- [getOrderByOrderNo](platform_OrderApi.OrderApi.md#getorderbyorderno)
- [getOrderList](platform_OrderApi.OrderApi.md#getorderlist)

## Methods

### cancelOrder

▸ **cancelOrder**(`«destructured»`): `Promise`<`IResponse`<`OrderInfo`\>\>

Cancel user order.<br>Other detail info: <ul><li><i>Required permission</i>: resource="NAMESPACE:{namespace}:USER:{userId}:ORDER", action=4 (UPDATE)</li><li><i>Returns</i>: cancelled order</li></ul>

#### Parameters

| Name | Type |
| :------ | :------ |
| `«destructured»` | `Object` |
| › `orderNo` | `string` |
| › `userId` | `string` |

#### Returns

`Promise`<`IResponse`<`OrderInfo`\>\>

#### Defined in

[packages/sdk/src/api/platform/OrderApi.ts:38](https://github.com/AccelByte/accelbyte-web-sdk/blob/c50fb74/packages/sdk/src/api/platform/OrderApi.ts#L38)

___

### createOrder

▸ **createOrder**(`«destructured»`): `Promise`<`IResponse`<`OrderInfo`\>\>

Create an order. The result contains the checkout link and payment token. User with permission SANDBOX will create sandbox order that not real paid for xsolla/alipay and not validate price for wxpay.<br>Other detail info: <ul><li><i>Required permission</i>: resource="NAMESPACE:{namespace}:USER:{userId}:ORDER", action=1 (CREATE)</li><li><i>Optional permission(user with this permission will create sandbox order)</i>: resource="SANDBOX", action=1 (CREATE)</li><li>It will be forbidden while the user is banned: ORDER_INITIATE or ORDER_AND_PAYMENT</li><li><i>Returns</i>: created order</li></ul>

#### Parameters

| Name | Type |
| :------ | :------ |
| `«destructured»` | `Object` |
| › `data` | `OrderCreate` |
| › `userId` | `string` |

#### Returns

`Promise`<`IResponse`<`OrderInfo`\>\>

#### Defined in

[packages/sdk/src/api/platform/OrderApi.ts:45](https://github.com/AccelByte/accelbyte-web-sdk/blob/c50fb74/packages/sdk/src/api/platform/OrderApi.ts#L45)

___

### fetchPrePurchaseInformation

▸ **fetchPrePurchaseInformation**(`«destructured»`): `Promise`<{ `availableItemInfoResult`: `IResponseWithSync`<`ItemDynamicDataInfo`\> ; `baseAppOwnershipResult`: ``null`` \| `IResponseWithSync`<`Ownership`\> ; `currencyMapResult`: { `error`: `IResponseError` ; `onSync`: (`syncedData`: (`_`: `IResponse`<`CurrencyInfoArray`\>) => `void`) => `void` ; `response`: ``null``  } \| { `error`: ``null`` = result.error; `value`: `Map`<`string`, `CurrencyInfo`\>  } ; `itemOwnershipResult`: ``null`` \| `IResponseWithSync`<`Ownership`\> ; `purchaseConditionValidationResult`: ``null`` \| `IResponse`<`ItemPurchaseConditionValidateResultArray`\>  }\>

Fetch all information needed for a user to check the user's availability to purchase the item

#### Parameters

| Name | Type |
| :------ | :------ |
| `«destructured»` | `Object` |
| › `item` | `ItemInfo` |
| › `userId?` | ``null`` \| `string` |

#### Returns

`Promise`<{ `availableItemInfoResult`: `IResponseWithSync`<`ItemDynamicDataInfo`\> ; `baseAppOwnershipResult`: ``null`` \| `IResponseWithSync`<`Ownership`\> ; `currencyMapResult`: { `error`: `IResponseError` ; `onSync`: (`syncedData`: (`_`: `IResponse`<`CurrencyInfoArray`\>) => `void`) => `void` ; `response`: ``null``  } \| { `error`: ``null`` = result.error; `value`: `Map`<`string`, `CurrencyInfo`\>  } ; `itemOwnershipResult`: ``null`` \| `IResponseWithSync`<`Ownership`\> ; `purchaseConditionValidationResult`: ``null`` \| `IResponse`<`ItemPurchaseConditionValidateResultArray`\>  }\>

#### Defined in

[packages/sdk/src/api/platform/OrderApi.ts:52](https://github.com/AccelByte/accelbyte-web-sdk/blob/c50fb74/packages/sdk/src/api/platform/OrderApi.ts#L52)

___

### getOrderByOrderNo

▸ **getOrderByOrderNo**(`«destructured»`): `Promise`<`IResponseWithSync`<`OrderInfo`\>\>

Get user order.<br>Other detail info: <ul><li><i>Required permission</i>: resource="NAMESPACE:{namespace}:USER:{userId}:ORDER", action=2 (READ)</li><li><i>Returns</i>: get order</li></ul>

#### Parameters

| Name | Type |
| :------ | :------ |
| `«destructured»` | `Object` |
| › `orderNo` | `string` |
| › `userId` | `string` |

#### Returns

`Promise`<`IResponseWithSync`<`OrderInfo`\>\>

#### Defined in

[packages/sdk/src/api/platform/OrderApi.ts:31](https://github.com/AccelByte/accelbyte-web-sdk/blob/c50fb74/packages/sdk/src/api/platform/OrderApi.ts#L31)

___

### getOrderList

▸ **getOrderList**(`«destructured»`): `Promise`<`IResponseWithSync`<`OrderPagingSlicedResult`\>\>

Query user orders.<br>Other detail info: <ul><li><i>Required permission</i>: resource="NAMESPACE:{namespace}:USER:{userId}:ORDER", action=2 (READ)</li><li><i>Returns</i>: get order</li></ul>

#### Parameters

| Name | Type |
| :------ | :------ |
| `«destructured»` | `Object` |
| › `queryParams?` | `Object` |
| › `queryParams.itemId?` | ``null`` \| `string` |
| › `queryParams.limit?` | `number` |
| › `queryParams.offset?` | `number` |
| › `queryParams.status?` | ``"INIT"`` \| ``"CHARGED"`` \| ``"CHARGEBACK"`` \| ``"CHARGEBACK_REVERSED"`` \| ``"FULFILLED"`` \| ``"FULFILL_FAILED"`` \| ``"REFUNDING"`` \| ``"REFUNDED"`` \| ``"REFUND_FAILED"`` \| ``"CLOSED"`` \| ``"DELETED"`` |
| › `userId` | `string` |

#### Returns

`Promise`<`IResponseWithSync`<`OrderPagingSlicedResult`\>\>

#### Defined in

[packages/sdk/src/api/platform/OrderApi.ts:24](https://github.com/AccelByte/accelbyte-web-sdk/blob/c50fb74/packages/sdk/src/api/platform/OrderApi.ts#L24)
