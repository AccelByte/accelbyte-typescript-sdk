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

▸ **cancelOrder**(`«destructured»`): `Promise`<`IResponse`<{ `chargebackReversedTime`: `undefined` \| ``null`` \| `string` ; `chargebackTime`: `undefined` \| ``null`` \| `string` ; `chargedTime`: `undefined` \| ``null`` \| `string` ; `createdAt`: `string` ; `createdTime`: `undefined` \| ``null`` \| `string` ; `creationOptions`: `undefined` \| ``null`` \| { skipPriceValidation?: boolean \| null \| undefined; } ; `currency`: { namespace: string; currencyCode: string; currencySymbol: string; currencyType: "REAL" \| "VIRTUAL"; decimals: number; } = CurrencySummary; `discountedPrice`: `number` ; `expireTime`: `undefined` \| ``null`` \| `string` ; `ext`: `undefined` \| ``null`` \| `Record`<`string`, `any`\> ; `fulfilledTime`: `undefined` \| ``null`` \| `string` ; `itemId`: `string` ; `itemSnapshot`: `undefined` \| ``null`` \| { createdAt?: string \| null \| undefined; updatedAt?: string \| null \| undefined; appId?: string \| null \| undefined; appType?: "GAME" \| "SOFTWARE" \| "DLC" \| "DEMO" \| null \| undefined; ... 29 more ...; region: string; } ; `language`: `undefined` \| ``null`` \| `string` ; `namespace`: `string` ; `orderNo`: `string` ; `paymentMethod`: `undefined` \| ``null`` \| `string` ; `paymentMethodFee`: `undefined` \| ``null`` \| `number` ; `paymentOrderNo`: `undefined` \| ``null`` \| `string` ; `paymentProvider`: `undefined` \| ``null`` \| ``"WALLET"`` \| ``"XSOLLA"`` \| ``"ADYEN"`` \| ``"STRIPE"`` \| ``"CHECKOUT"`` \| ``"ALIPAY"`` \| ``"WXPAY"`` \| ``"PAYPAL"`` ; `paymentProviderFee`: `undefined` \| ``null`` \| `number` ; `paymentRemainSeconds`: `number` ; `paymentStationUrl`: `undefined` \| ``null`` \| `string` ; `price`: `number` ; `quantity`: `number` ; `refundedTime`: `undefined` \| ``null`` \| `string` ; `region`: `undefined` \| ``null`` \| `string` ; `salesTax`: `undefined` \| ``null`` \| `number` ; `sandbox`: `boolean` ; `status`: ``"DELETED"`` \| ``"INIT"`` \| ``"CHARGED"`` \| ``"CHARGEBACK"`` \| ``"CHARGEBACK_REVERSED"`` \| ``"FULFILLED"`` \| ``"FULFILL_FAILED"`` \| ``"REFUNDING"`` \| ``"REFUNDED"`` \| ``"REFUND_FAILED"`` \| ``"CLOSED"`` ; `statusReason`: `undefined` \| ``null`` \| `string` ; `subtotalPrice`: `undefined` \| ``null`` \| `number` ; `tax`: `undefined` \| ``null`` \| `number` ; `totalPrice`: `undefined` \| ``null`` \| `number` ; `totalTax`: `undefined` \| ``null`` \| `number` ; `updatedAt`: `string` ; `userId`: `string` ; `vat`: `undefined` \| ``null`` \| `number`  }\>\>

Cancel user order.<br>Other detail info: <ul><li><i>Required permission</i>: resource="NAMESPACE:{namespace}:USER:{userId}:ORDER", action=4 (UPDATE)</li><li><i>Returns</i>: cancelled order</li></ul>

#### Parameters

| Name | Type |
| :------ | :------ |
| `«destructured»` | `Object` |
| › `orderNo` | `string` |
| › `userId` | `string` |

#### Returns

`Promise`<`IResponse`<{ `chargebackReversedTime`: `undefined` \| ``null`` \| `string` ; `chargebackTime`: `undefined` \| ``null`` \| `string` ; `chargedTime`: `undefined` \| ``null`` \| `string` ; `createdAt`: `string` ; `createdTime`: `undefined` \| ``null`` \| `string` ; `creationOptions`: `undefined` \| ``null`` \| { skipPriceValidation?: boolean \| null \| undefined; } ; `currency`: { namespace: string; currencyCode: string; currencySymbol: string; currencyType: "REAL" \| "VIRTUAL"; decimals: number; } = CurrencySummary; `discountedPrice`: `number` ; `expireTime`: `undefined` \| ``null`` \| `string` ; `ext`: `undefined` \| ``null`` \| `Record`<`string`, `any`\> ; `fulfilledTime`: `undefined` \| ``null`` \| `string` ; `itemId`: `string` ; `itemSnapshot`: `undefined` \| ``null`` \| { createdAt?: string \| null \| undefined; updatedAt?: string \| null \| undefined; appId?: string \| null \| undefined; appType?: "GAME" \| "SOFTWARE" \| "DLC" \| "DEMO" \| null \| undefined; ... 29 more ...; region: string; } ; `language`: `undefined` \| ``null`` \| `string` ; `namespace`: `string` ; `orderNo`: `string` ; `paymentMethod`: `undefined` \| ``null`` \| `string` ; `paymentMethodFee`: `undefined` \| ``null`` \| `number` ; `paymentOrderNo`: `undefined` \| ``null`` \| `string` ; `paymentProvider`: `undefined` \| ``null`` \| ``"WALLET"`` \| ``"XSOLLA"`` \| ``"ADYEN"`` \| ``"STRIPE"`` \| ``"CHECKOUT"`` \| ``"ALIPAY"`` \| ``"WXPAY"`` \| ``"PAYPAL"`` ; `paymentProviderFee`: `undefined` \| ``null`` \| `number` ; `paymentRemainSeconds`: `number` ; `paymentStationUrl`: `undefined` \| ``null`` \| `string` ; `price`: `number` ; `quantity`: `number` ; `refundedTime`: `undefined` \| ``null`` \| `string` ; `region`: `undefined` \| ``null`` \| `string` ; `salesTax`: `undefined` \| ``null`` \| `number` ; `sandbox`: `boolean` ; `status`: ``"DELETED"`` \| ``"INIT"`` \| ``"CHARGED"`` \| ``"CHARGEBACK"`` \| ``"CHARGEBACK_REVERSED"`` \| ``"FULFILLED"`` \| ``"FULFILL_FAILED"`` \| ``"REFUNDING"`` \| ``"REFUNDED"`` \| ``"REFUND_FAILED"`` \| ``"CLOSED"`` ; `statusReason`: `undefined` \| ``null`` \| `string` ; `subtotalPrice`: `undefined` \| ``null`` \| `number` ; `tax`: `undefined` \| ``null`` \| `number` ; `totalPrice`: `undefined` \| ``null`` \| `number` ; `totalTax`: `undefined` \| ``null`` \| `number` ; `updatedAt`: `string` ; `userId`: `string` ; `vat`: `undefined` \| ``null`` \| `number`  }\>\>

#### Defined in

[packages/sdk/src/api/platform/OrderApi.ts:38](https://github.com/AccelByte/accelbyte-web-sdk/blob/57827c8/packages/sdk/src/api/platform/OrderApi.ts#L38)

___

### createOrder

▸ **createOrder**(`«destructured»`): `Promise`<`IResponse`<{ `chargebackReversedTime`: `undefined` \| ``null`` \| `string` ; `chargebackTime`: `undefined` \| ``null`` \| `string` ; `chargedTime`: `undefined` \| ``null`` \| `string` ; `createdAt`: `string` ; `createdTime`: `undefined` \| ``null`` \| `string` ; `creationOptions`: `undefined` \| ``null`` \| { skipPriceValidation?: boolean \| null \| undefined; } ; `currency`: { namespace: string; currencyCode: string; currencySymbol: string; currencyType: "REAL" \| "VIRTUAL"; decimals: number; } = CurrencySummary; `discountedPrice`: `number` ; `expireTime`: `undefined` \| ``null`` \| `string` ; `ext`: `undefined` \| ``null`` \| `Record`<`string`, `any`\> ; `fulfilledTime`: `undefined` \| ``null`` \| `string` ; `itemId`: `string` ; `itemSnapshot`: `undefined` \| ``null`` \| { createdAt?: string \| null \| undefined; updatedAt?: string \| null \| undefined; appId?: string \| null \| undefined; appType?: "GAME" \| "SOFTWARE" \| "DLC" \| "DEMO" \| null \| undefined; ... 29 more ...; region: string; } ; `language`: `undefined` \| ``null`` \| `string` ; `namespace`: `string` ; `orderNo`: `string` ; `paymentMethod`: `undefined` \| ``null`` \| `string` ; `paymentMethodFee`: `undefined` \| ``null`` \| `number` ; `paymentOrderNo`: `undefined` \| ``null`` \| `string` ; `paymentProvider`: `undefined` \| ``null`` \| ``"WALLET"`` \| ``"XSOLLA"`` \| ``"ADYEN"`` \| ``"STRIPE"`` \| ``"CHECKOUT"`` \| ``"ALIPAY"`` \| ``"WXPAY"`` \| ``"PAYPAL"`` ; `paymentProviderFee`: `undefined` \| ``null`` \| `number` ; `paymentRemainSeconds`: `number` ; `paymentStationUrl`: `undefined` \| ``null`` \| `string` ; `price`: `number` ; `quantity`: `number` ; `refundedTime`: `undefined` \| ``null`` \| `string` ; `region`: `undefined` \| ``null`` \| `string` ; `salesTax`: `undefined` \| ``null`` \| `number` ; `sandbox`: `boolean` ; `status`: ``"DELETED"`` \| ``"INIT"`` \| ``"CHARGED"`` \| ``"CHARGEBACK"`` \| ``"CHARGEBACK_REVERSED"`` \| ``"FULFILLED"`` \| ``"FULFILL_FAILED"`` \| ``"REFUNDING"`` \| ``"REFUNDED"`` \| ``"REFUND_FAILED"`` \| ``"CLOSED"`` ; `statusReason`: `undefined` \| ``null`` \| `string` ; `subtotalPrice`: `undefined` \| ``null`` \| `number` ; `tax`: `undefined` \| ``null`` \| `number` ; `totalPrice`: `undefined` \| ``null`` \| `number` ; `totalTax`: `undefined` \| ``null`` \| `number` ; `updatedAt`: `string` ; `userId`: `string` ; `vat`: `undefined` \| ``null`` \| `number`  }\>\>

Create an order. The result contains the checkout link and payment token. User with permission SANDBOX will create sandbox order that not real paid for xsolla/alipay and not validate price for wxpay.<br>Other detail info: <ul><li><i>Required permission</i>: resource="NAMESPACE:{namespace}:USER:{userId}:ORDER", action=1 (CREATE)</li><li><i>Optional permission(user with this permission will create sandbox order)</i>: resource="SANDBOX", action=1 (CREATE)</li><li>It will be forbidden while the user is banned: ORDER_INITIATE or ORDER_AND_PAYMENT</li><li><i>Returns</i>: created order</li></ul>

#### Parameters

| Name | Type |
| :------ | :------ |
| `«destructured»` | `Object` |
| › `data` | `Object` |
| › `data.currencyCode` | `string` |
| › `data.discountedPrice` | `number` |
| › `data.ext` | `undefined` \| ``null`` \| `Record`<`string`, `any`\> |
| › `data.itemId` | `string` |
| › `data.language` | `undefined` \| ``null`` \| `string` |
| › `data.price` | `number` |
| › `data.quantity` | `number` |
| › `data.region` | `undefined` \| ``null`` \| `string` |
| › `data.returnUrl` | `undefined` \| ``null`` \| `string` |
| › `userId` | `string` |

#### Returns

`Promise`<`IResponse`<{ `chargebackReversedTime`: `undefined` \| ``null`` \| `string` ; `chargebackTime`: `undefined` \| ``null`` \| `string` ; `chargedTime`: `undefined` \| ``null`` \| `string` ; `createdAt`: `string` ; `createdTime`: `undefined` \| ``null`` \| `string` ; `creationOptions`: `undefined` \| ``null`` \| { skipPriceValidation?: boolean \| null \| undefined; } ; `currency`: { namespace: string; currencyCode: string; currencySymbol: string; currencyType: "REAL" \| "VIRTUAL"; decimals: number; } = CurrencySummary; `discountedPrice`: `number` ; `expireTime`: `undefined` \| ``null`` \| `string` ; `ext`: `undefined` \| ``null`` \| `Record`<`string`, `any`\> ; `fulfilledTime`: `undefined` \| ``null`` \| `string` ; `itemId`: `string` ; `itemSnapshot`: `undefined` \| ``null`` \| { createdAt?: string \| null \| undefined; updatedAt?: string \| null \| undefined; appId?: string \| null \| undefined; appType?: "GAME" \| "SOFTWARE" \| "DLC" \| "DEMO" \| null \| undefined; ... 29 more ...; region: string; } ; `language`: `undefined` \| ``null`` \| `string` ; `namespace`: `string` ; `orderNo`: `string` ; `paymentMethod`: `undefined` \| ``null`` \| `string` ; `paymentMethodFee`: `undefined` \| ``null`` \| `number` ; `paymentOrderNo`: `undefined` \| ``null`` \| `string` ; `paymentProvider`: `undefined` \| ``null`` \| ``"WALLET"`` \| ``"XSOLLA"`` \| ``"ADYEN"`` \| ``"STRIPE"`` \| ``"CHECKOUT"`` \| ``"ALIPAY"`` \| ``"WXPAY"`` \| ``"PAYPAL"`` ; `paymentProviderFee`: `undefined` \| ``null`` \| `number` ; `paymentRemainSeconds`: `number` ; `paymentStationUrl`: `undefined` \| ``null`` \| `string` ; `price`: `number` ; `quantity`: `number` ; `refundedTime`: `undefined` \| ``null`` \| `string` ; `region`: `undefined` \| ``null`` \| `string` ; `salesTax`: `undefined` \| ``null`` \| `number` ; `sandbox`: `boolean` ; `status`: ``"DELETED"`` \| ``"INIT"`` \| ``"CHARGED"`` \| ``"CHARGEBACK"`` \| ``"CHARGEBACK_REVERSED"`` \| ``"FULFILLED"`` \| ``"FULFILL_FAILED"`` \| ``"REFUNDING"`` \| ``"REFUNDED"`` \| ``"REFUND_FAILED"`` \| ``"CLOSED"`` ; `statusReason`: `undefined` \| ``null`` \| `string` ; `subtotalPrice`: `undefined` \| ``null`` \| `number` ; `tax`: `undefined` \| ``null`` \| `number` ; `totalPrice`: `undefined` \| ``null`` \| `number` ; `totalTax`: `undefined` \| ``null`` \| `number` ; `updatedAt`: `string` ; `userId`: `string` ; `vat`: `undefined` \| ``null`` \| `number`  }\>\>

#### Defined in

[packages/sdk/src/api/platform/OrderApi.ts:45](https://github.com/AccelByte/accelbyte-web-sdk/blob/57827c8/packages/sdk/src/api/platform/OrderApi.ts#L45)

___

### fetchPrePurchaseInformation

▸ **fetchPrePurchaseInformation**(`«destructured»`): `Promise`<{ `availableItemInfoResult`: `IResponseWithSync`<{ `availableCount`: `number` ; `itemId`: `string` ; `namespace`: `string` ; `userAvailableCount`: `number` ; `userPurchaseLimit`: `number`  }\> ; `baseAppOwnershipResult`: ``null`` \| `IResponseWithSync`<{ `owned`: `boolean`  }\> ; `currencyMapResult`: { `error`: `IResponseError` ; `onSync`: (`syncedData`: (`_`: `IResponse`<{ `createdAt`: `string` ; `currencyCode`: `string` ; `currencySymbol`: `string` ; `currencyType`: ``"REAL"`` \| ``"VIRTUAL"`` ; `decimals`: `number` ; `localizationDescriptions`: `undefined` \| ``null`` \| `Record`<`string`, `string`\> ; `namespace`: `string` ; `updatedAt`: `string`  }[]\>) => `void`) => `void` ; `response`: ``null``  } \| { `error`: ``null`` = result.error; `value`: `Map`<`string`, { `createdAt`: `string` ; `currencyCode`: `string` ; `currencySymbol`: `string` ; `currencyType`: ``"REAL"`` \| ``"VIRTUAL"`` ; `decimals`: `number` ; `localizationDescriptions`: `undefined` \| ``null`` \| `Record`<`string`, `string`\> ; `namespace`: `string` ; `updatedAt`: `string`  }\>  } ; `itemOwnershipResult`: ``null`` \| `IResponseWithSync`<{ `owned`: `boolean`  }\> ; `purchaseConditionValidationResult`: ``null`` \| `IResponse`<{ `itemId`: `undefined` \| ``null`` \| `string` ; `purchasable`: `undefined` \| ``null`` \| `boolean` ; `sku`: `undefined` \| ``null`` \| `string` ; `validateDetails`: `undefined` \| ``null`` \| { predicateValidateResults?: { predicateName?: string \| null \| undefined; validated?: boolean \| null \| undefined; matched?: string[] \| null \| undefined; unmatched?: string[] \| null \| undefined; }[] \| null \| undefined; }[]  }[]\>  }\>

Fetch all information needed for a user to check the user's availability to purchase the item

#### Parameters

| Name | Type |
| :------ | :------ |
| `«destructured»` | `Object` |
| › `item` | `Object` |
| › `item.appId` | `undefined` \| ``null`` \| `string` |
| › `item.appType` | `undefined` \| ``null`` \| ``"GAME"`` \| ``"SOFTWARE"`` \| ``"DLC"`` \| ``"DEMO"`` |
| › `item.baseAppId` | `undefined` \| ``null`` \| `string` |
| › `item.boothName` | `undefined` \| ``null`` \| `string` |
| › `item.boundItemIds` | `undefined` \| ``null`` \| `string`[] |
| › `item.categoryPath` | `string` |
| › `item.clazz` | `undefined` \| ``null`` \| `string` |
| › `item.createdAt` | `string` |
| › `item.description` | `undefined` \| ``null`` \| `string` |
| › `item.displayOrder` | `undefined` \| ``null`` \| `number` |
| › `item.entitlementType` | ``"DURABLE"`` \| ``"CONSUMABLE"`` |
| › `item.ext` | `undefined` \| ``null`` \| `Record`<`string`, `any`\> |
| › `item.features` | `undefined` \| ``null`` \| `string`[] |
| › `item.fresh` | `undefined` \| ``null`` \| `boolean` |
| › `item.images` | `undefined` \| ``null`` \| { as?: string \| null \| undefined; caption?: string \| null \| undefined; height: number; width: number; imageUrl: string; smallImageUrl: string; }[] |
| › `item.itemId` | `string` |
| › `item.itemIds` | `undefined` \| ``null`` \| `string`[] |
| › `item.itemQty` | `undefined` \| ``null`` \| `Record`<`string`, `number`\> |
| › `item.itemType` | ``"APP"`` \| ``"COINS"`` \| ``"INGAMEITEM"`` \| ``"BUNDLE"`` \| ``"CODE"`` \| ``"SUBSCRIPTION"`` \| ``"SEASON"`` \| ``"MEDIA"`` \| ``"OPTIONBOX"`` \| ``"EXTENSION"`` \| ``"LOOTBOX"`` |
| › `item.language` | `string` |
| › `item.listable` | `undefined` \| ``null`` \| `boolean` |
| › `item.localExt` | `undefined` \| ``null`` \| `Record`<`string`, `any`\> |
| › `item.longDescription` | `undefined` \| ``null`` \| `string` |
| › `item.lootBoxConfig` | `undefined` \| ``null`` \| { rewardCount?: number \| null \| undefined; rewards?: { type?: "REWARD" \| "REWARD\_GROUP" \| "PROBABILITY\_GROUP" \| null \| undefined; name?: string \| null \| undefined; lootBoxItems?: { ...; }[] \| null \| undefined; weight?: number \| ... 1 more ... \| undefined; odds?: number \| ... 1 more ... \| undefined; }[] \| null \| unde... |
| › `item.maxCount` | `undefined` \| ``null`` \| `number` |
| › `item.maxCountPerUser` | `undefined` \| ``null`` \| `number` |
| › `item.name` | `string` |
| › `item.namespace` | `string` |
| › `item.optionBoxConfig` | `undefined` \| ``null`` \| { boxItems?: { itemId?: string \| null \| undefined; itemType?: string \| null \| undefined; itemSku?: string \| null \| undefined; count?: number \| null \| undefined; }[] \| null \| undefined; } |
| › `item.purchasable` | `undefined` \| ``null`` \| `boolean` |
| › `item.purchaseCondition` | `undefined` \| ``null`` \| { conditionGroups?: { predicates?: { values?: string[] \| null \| undefined; value?: string \| null \| undefined; name?: string \| null \| undefined; predicateType?: "EntitlementPredicate" \| "SeasonPassPredicate" \| "SeasonTierPredicate" \| null \| undefined; comparison?: "is" \| ... 8 more ... \| undefined; anyOf?: number \| .... |
| › `item.recurring` | `undefined` \| ``null`` \| { cycle: "WEEKLY" \| "MONTHLY" \| "QUARTERLY" \| "YEARLY"; fixedFreeDays: number; fixedTrialCycles: number; graceDays: number; } |
| › `item.region` | `string` |
| › `item.regionData` | `undefined` \| ``null`` \| { discountPercentage?: number \| null \| undefined; discountAmount?: number \| null \| undefined; discountedPrice?: number \| null \| undefined; trialPrice?: number \| null \| undefined; ... 7 more ...; currencyNamespace: string; }[] |
| › `item.seasonType` | `undefined` \| ``null`` \| ``"PASS"`` \| ``"TIER"`` |
| › `item.sku` | `undefined` \| ``null`` \| `string` |
| › `item.stackable` | `undefined` \| ``null`` \| `boolean` |
| › `item.status` | ``"ACTIVE"`` \| ``"INACTIVE"`` |
| › `item.tags` | `undefined` \| ``null`` \| `string`[] |
| › `item.targetCurrencyCode` | `undefined` \| ``null`` \| `string` |
| › `item.targetItemId` | `undefined` \| ``null`` \| `string` |
| › `item.targetNamespace` | `undefined` \| ``null`` \| `string` |
| › `item.thumbnailUrl` | `undefined` \| ``null`` \| `string` |
| › `item.title` | `string` |
| › `item.updatedAt` | `string` |
| › `item.useCount` | `undefined` \| ``null`` \| `number` |
| › `userId?` | ``null`` \| `string` |

#### Returns

`Promise`<{ `availableItemInfoResult`: `IResponseWithSync`<{ `availableCount`: `number` ; `itemId`: `string` ; `namespace`: `string` ; `userAvailableCount`: `number` ; `userPurchaseLimit`: `number`  }\> ; `baseAppOwnershipResult`: ``null`` \| `IResponseWithSync`<{ `owned`: `boolean`  }\> ; `currencyMapResult`: { `error`: `IResponseError` ; `onSync`: (`syncedData`: (`_`: `IResponse`<{ `createdAt`: `string` ; `currencyCode`: `string` ; `currencySymbol`: `string` ; `currencyType`: ``"REAL"`` \| ``"VIRTUAL"`` ; `decimals`: `number` ; `localizationDescriptions`: `undefined` \| ``null`` \| `Record`<`string`, `string`\> ; `namespace`: `string` ; `updatedAt`: `string`  }[]\>) => `void`) => `void` ; `response`: ``null``  } \| { `error`: ``null`` = result.error; `value`: `Map`<`string`, { `createdAt`: `string` ; `currencyCode`: `string` ; `currencySymbol`: `string` ; `currencyType`: ``"REAL"`` \| ``"VIRTUAL"`` ; `decimals`: `number` ; `localizationDescriptions`: `undefined` \| ``null`` \| `Record`<`string`, `string`\> ; `namespace`: `string` ; `updatedAt`: `string`  }\>  } ; `itemOwnershipResult`: ``null`` \| `IResponseWithSync`<{ `owned`: `boolean`  }\> ; `purchaseConditionValidationResult`: ``null`` \| `IResponse`<{ `itemId`: `undefined` \| ``null`` \| `string` ; `purchasable`: `undefined` \| ``null`` \| `boolean` ; `sku`: `undefined` \| ``null`` \| `string` ; `validateDetails`: `undefined` \| ``null`` \| { predicateValidateResults?: { predicateName?: string \| null \| undefined; validated?: boolean \| null \| undefined; matched?: string[] \| null \| undefined; unmatched?: string[] \| null \| undefined; }[] \| null \| undefined; }[]  }[]\>  }\>

#### Defined in

[packages/sdk/src/api/platform/OrderApi.ts:52](https://github.com/AccelByte/accelbyte-web-sdk/blob/57827c8/packages/sdk/src/api/platform/OrderApi.ts#L52)

___

### getOrderByOrderNo

▸ **getOrderByOrderNo**(`«destructured»`): `Promise`<`IResponseWithSync`<{ `chargebackReversedTime`: `undefined` \| ``null`` \| `string` ; `chargebackTime`: `undefined` \| ``null`` \| `string` ; `chargedTime`: `undefined` \| ``null`` \| `string` ; `createdAt`: `string` ; `createdTime`: `undefined` \| ``null`` \| `string` ; `creationOptions`: `undefined` \| ``null`` \| { skipPriceValidation?: boolean \| null \| undefined; } ; `currency`: { namespace: string; currencyCode: string; currencySymbol: string; currencyType: "REAL" \| "VIRTUAL"; decimals: number; } = CurrencySummary; `discountedPrice`: `number` ; `expireTime`: `undefined` \| ``null`` \| `string` ; `ext`: `undefined` \| ``null`` \| `Record`<`string`, `any`\> ; `fulfilledTime`: `undefined` \| ``null`` \| `string` ; `itemId`: `string` ; `itemSnapshot`: `undefined` \| ``null`` \| { createdAt?: string \| null \| undefined; updatedAt?: string \| null \| undefined; appId?: string \| null \| undefined; appType?: "GAME" \| "SOFTWARE" \| "DLC" \| "DEMO" \| null \| undefined; ... 29 more ...; region: string; } ; `language`: `undefined` \| ``null`` \| `string` ; `namespace`: `string` ; `orderNo`: `string` ; `paymentMethod`: `undefined` \| ``null`` \| `string` ; `paymentMethodFee`: `undefined` \| ``null`` \| `number` ; `paymentOrderNo`: `undefined` \| ``null`` \| `string` ; `paymentProvider`: `undefined` \| ``null`` \| ``"WALLET"`` \| ``"XSOLLA"`` \| ``"ADYEN"`` \| ``"STRIPE"`` \| ``"CHECKOUT"`` \| ``"ALIPAY"`` \| ``"WXPAY"`` \| ``"PAYPAL"`` ; `paymentProviderFee`: `undefined` \| ``null`` \| `number` ; `paymentRemainSeconds`: `number` ; `paymentStationUrl`: `undefined` \| ``null`` \| `string` ; `price`: `number` ; `quantity`: `number` ; `refundedTime`: `undefined` \| ``null`` \| `string` ; `region`: `undefined` \| ``null`` \| `string` ; `salesTax`: `undefined` \| ``null`` \| `number` ; `sandbox`: `boolean` ; `status`: ``"DELETED"`` \| ``"INIT"`` \| ``"CHARGED"`` \| ``"CHARGEBACK"`` \| ``"CHARGEBACK_REVERSED"`` \| ``"FULFILLED"`` \| ``"FULFILL_FAILED"`` \| ``"REFUNDING"`` \| ``"REFUNDED"`` \| ``"REFUND_FAILED"`` \| ``"CLOSED"`` ; `statusReason`: `undefined` \| ``null`` \| `string` ; `subtotalPrice`: `undefined` \| ``null`` \| `number` ; `tax`: `undefined` \| ``null`` \| `number` ; `totalPrice`: `undefined` \| ``null`` \| `number` ; `totalTax`: `undefined` \| ``null`` \| `number` ; `updatedAt`: `string` ; `userId`: `string` ; `vat`: `undefined` \| ``null`` \| `number`  }\>\>

Get user order.<br>Other detail info: <ul><li><i>Required permission</i>: resource="NAMESPACE:{namespace}:USER:{userId}:ORDER", action=2 (READ)</li><li><i>Returns</i>: get order</li></ul>

#### Parameters

| Name | Type |
| :------ | :------ |
| `«destructured»` | `Object` |
| › `orderNo` | `string` |
| › `userId` | `string` |

#### Returns

`Promise`<`IResponseWithSync`<{ `chargebackReversedTime`: `undefined` \| ``null`` \| `string` ; `chargebackTime`: `undefined` \| ``null`` \| `string` ; `chargedTime`: `undefined` \| ``null`` \| `string` ; `createdAt`: `string` ; `createdTime`: `undefined` \| ``null`` \| `string` ; `creationOptions`: `undefined` \| ``null`` \| { skipPriceValidation?: boolean \| null \| undefined; } ; `currency`: { namespace: string; currencyCode: string; currencySymbol: string; currencyType: "REAL" \| "VIRTUAL"; decimals: number; } = CurrencySummary; `discountedPrice`: `number` ; `expireTime`: `undefined` \| ``null`` \| `string` ; `ext`: `undefined` \| ``null`` \| `Record`<`string`, `any`\> ; `fulfilledTime`: `undefined` \| ``null`` \| `string` ; `itemId`: `string` ; `itemSnapshot`: `undefined` \| ``null`` \| { createdAt?: string \| null \| undefined; updatedAt?: string \| null \| undefined; appId?: string \| null \| undefined; appType?: "GAME" \| "SOFTWARE" \| "DLC" \| "DEMO" \| null \| undefined; ... 29 more ...; region: string; } ; `language`: `undefined` \| ``null`` \| `string` ; `namespace`: `string` ; `orderNo`: `string` ; `paymentMethod`: `undefined` \| ``null`` \| `string` ; `paymentMethodFee`: `undefined` \| ``null`` \| `number` ; `paymentOrderNo`: `undefined` \| ``null`` \| `string` ; `paymentProvider`: `undefined` \| ``null`` \| ``"WALLET"`` \| ``"XSOLLA"`` \| ``"ADYEN"`` \| ``"STRIPE"`` \| ``"CHECKOUT"`` \| ``"ALIPAY"`` \| ``"WXPAY"`` \| ``"PAYPAL"`` ; `paymentProviderFee`: `undefined` \| ``null`` \| `number` ; `paymentRemainSeconds`: `number` ; `paymentStationUrl`: `undefined` \| ``null`` \| `string` ; `price`: `number` ; `quantity`: `number` ; `refundedTime`: `undefined` \| ``null`` \| `string` ; `region`: `undefined` \| ``null`` \| `string` ; `salesTax`: `undefined` \| ``null`` \| `number` ; `sandbox`: `boolean` ; `status`: ``"DELETED"`` \| ``"INIT"`` \| ``"CHARGED"`` \| ``"CHARGEBACK"`` \| ``"CHARGEBACK_REVERSED"`` \| ``"FULFILLED"`` \| ``"FULFILL_FAILED"`` \| ``"REFUNDING"`` \| ``"REFUNDED"`` \| ``"REFUND_FAILED"`` \| ``"CLOSED"`` ; `statusReason`: `undefined` \| ``null`` \| `string` ; `subtotalPrice`: `undefined` \| ``null`` \| `number` ; `tax`: `undefined` \| ``null`` \| `number` ; `totalPrice`: `undefined` \| ``null`` \| `number` ; `totalTax`: `undefined` \| ``null`` \| `number` ; `updatedAt`: `string` ; `userId`: `string` ; `vat`: `undefined` \| ``null`` \| `number`  }\>\>

#### Defined in

[packages/sdk/src/api/platform/OrderApi.ts:31](https://github.com/AccelByte/accelbyte-web-sdk/blob/57827c8/packages/sdk/src/api/platform/OrderApi.ts#L31)

___

### getOrderList

▸ **getOrderList**(`«destructured»`): `Promise`<`IResponseWithSync`<{ `data`: { language?: string \| null \| undefined; ext?: Record<string, any\> \| null \| undefined; region?: string \| null \| undefined; itemSnapshot?: { createdAt?: string \| null \| undefined; ... 32 more ...; region: string; } \| null \| undefined; ... 33 more ...; paymentRemainSeconds: number; }[] ; `paging`: `undefined` \| ``null`` \| { next?: string \| null \| undefined; previous?: string \| null \| undefined; }  }\>\>

Query user orders.<br>Other detail info: <ul><li><i>Required permission</i>: resource="NAMESPACE:{namespace}:USER:{userId}:ORDER", action=2 (READ)</li><li><i>Returns</i>: get order</li></ul>

#### Parameters

| Name | Type |
| :------ | :------ |
| `«destructured»` | `Object` |
| › `queryParams?` | `Object` |
| › `queryParams.itemId?` | ``null`` \| `string` |
| › `queryParams.limit?` | `number` |
| › `queryParams.offset?` | `number` |
| › `queryParams.status?` | ``"DELETED"`` \| ``"INIT"`` \| ``"CHARGED"`` \| ``"CHARGEBACK"`` \| ``"CHARGEBACK_REVERSED"`` \| ``"FULFILLED"`` \| ``"FULFILL_FAILED"`` \| ``"REFUNDING"`` \| ``"REFUNDED"`` \| ``"REFUND_FAILED"`` \| ``"CLOSED"`` |
| › `userId` | `string` |

#### Returns

`Promise`<`IResponseWithSync`<{ `data`: { language?: string \| null \| undefined; ext?: Record<string, any\> \| null \| undefined; region?: string \| null \| undefined; itemSnapshot?: { createdAt?: string \| null \| undefined; ... 32 more ...; region: string; } \| null \| undefined; ... 33 more ...; paymentRemainSeconds: number; }[] ; `paging`: `undefined` \| ``null`` \| { next?: string \| null \| undefined; previous?: string \| null \| undefined; }  }\>\>

#### Defined in

[packages/sdk/src/api/platform/OrderApi.ts:24](https://github.com/AccelByte/accelbyte-web-sdk/blob/57827c8/packages/sdk/src/api/platform/OrderApi.ts#L24)
