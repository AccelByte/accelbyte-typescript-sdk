[@accelbyte/sdk](../README.md) / [platform/SubscriptionApi](../modules/platform_SubscriptionApi.md) / SubscriptionApi

# Class: SubscriptionApi

[platform/SubscriptionApi](../modules/platform_SubscriptionApi.md).SubscriptionApi

## Table of contents

### Methods

- [cancelUserSubscription](platform_SubscriptionApi.SubscriptionApi.md#cancelusersubscription)
- [createSubscription](platform_SubscriptionApi.SubscriptionApi.md#createsubscription)
- [getUserSubscriptionBillingHistory](platform_SubscriptionApi.SubscriptionApi.md#getusersubscriptionbillinghistory)
- [getUserSubscriptionBySubscriptionId](platform_SubscriptionApi.SubscriptionApi.md#getusersubscriptionbysubscriptionid)
- [getUserSubscriptions](platform_SubscriptionApi.SubscriptionApi.md#getusersubscriptions)
- [updateUserSubscriptionPaymentMethod](platform_SubscriptionApi.SubscriptionApi.md#updateusersubscriptionpaymentmethod)

## Methods

### cancelUserSubscription

▸ **cancelUserSubscription**(`«destructured»`): `Promise`<`IResponse`<{ `billingAccount`: `undefined` \| ``null`` \| { paymentProvider?: "WALLET" \| "XSOLLA" \| "ADYEN" \| "STRIPE" \| "CHECKOUT" \| "ALIPAY" \| "WXPAY" \| "PAYPAL" \| null \| undefined; paymentMethod?: string \| null \| undefined; additionalData?: { ...; } \| ... 1 more ... \| undefined; } ; `chargeStatus`: ``"CHARGED"`` \| ``"NEVER"`` \| ``"SETUP"`` \| ``"RECURRING_CHARGING"`` \| ``"CHARGE_FAILED"`` ; `chargedCycles`: `undefined` \| ``null`` \| `number` ; `createdAt`: `string` ; `currency`: `undefined` \| ``null`` \| { namespace: string; currencyCode: string; currencySymbol: string; currencyType: "REAL" \| "VIRTUAL"; decimals: number; } ; `currentCycle`: `undefined` \| ``null`` \| `number` ; `currentPeriodEnd`: `undefined` \| ``null`` \| `string` ; `currentPeriodStart`: `undefined` \| ``null`` \| `string` ; `description`: `undefined` \| ``null`` \| `string` ; `end`: `undefined` \| ``null`` \| `string` ; `entitlements`: `undefined` \| ``null`` \| { endDate?: string \| null \| undefined; storeId?: string \| null \| undefined; itemId?: string \| null \| undefined; startDate?: string \| null \| undefined; stackable?: boolean \| null \| undefined; ... 8 more ...; clazz: "APP" \| ... 5 more ... \| "ENTITLEMENT"; }[] ; `firstSubscribe`: `undefined` \| ``null`` \| `boolean` ; `id`: `string` ; `inFixedCycleTrial`: `boolean` ; `inFixedFreeDays`: `boolean` ; `itemId`: `string` ; `itemSnapshot`: `undefined` \| ``null`` \| { createdAt?: string \| null \| undefined; updatedAt?: string \| null \| undefined; appId?: string \| null \| undefined; appType?: "GAME" \| "SOFTWARE" \| "DLC" \| "DEMO" \| null \| undefined; ... 29 more ...; region: string; } ; `language`: `undefined` \| ``null`` \| `string` ; `namespace`: `string` ; `nextBillingDate`: `undefined` \| ``null`` \| `string` ; `paid`: `undefined` \| ``null`` \| `boolean` ; `paymentFlowRequired`: `boolean` ; `paymentOrderNo`: `undefined` \| ``null`` \| `string` ; `paymentStationUrl`: `undefined` \| ``null`` \| `string` ; `price`: `undefined` \| ``null`` \| `number` ; `recurring`: { cycle: "WEEKLY" \| "MONTHLY" \| "QUARTERLY" \| "YEARLY"; fixedFreeDays: number; fixedTrialCycles: number; graceDays: number; } = Recurring; `region`: `undefined` \| ``null`` \| `string` ; `retryAttempted`: `undefined` \| ``null`` \| `number` ; `returnUrl`: `undefined` \| ``null`` \| `string` ; `sandbox`: `undefined` \| ``null`` \| `boolean` ; `sku`: `undefined` \| ``null`` \| `string` ; `source`: `undefined` \| ``null`` \| `string` ; `start`: `undefined` \| ``null`` \| `string` ; `status`: ``"ACTIVE"`` \| ``"INIT"`` \| ``"CANCELLED"`` \| ``"EXPIRED"`` ; `subscribedAt`: `undefined` \| ``null`` \| `string` ; `subscribedBy`: `undefined` \| ``null`` \| ``"USER"`` \| ``"PLATFORM"`` ; `title`: `undefined` \| ``null`` \| `string` ; `trialPrice`: `undefined` \| ``null`` \| `number` ; `trialedCycles`: `undefined` \| ``null`` \| `number` ; `unsubscribeReason`: `undefined` \| ``null`` \| `string` ; `unsubscribedAt`: `undefined` \| ``null`` \| `string` ; `updatedAt`: `string` ; `userId`: `string`  }\>\>

Cancel a subscription, only ACTIVE subscription can be cancelled. <b>Ensure successfully cancel, recommend at least 1 day before current period ends, otherwise it may be charging or charged.</b><br>Set immediate true, the subscription will be terminated immediately, otherwise till the end of current billing cycle.<br>Other detail info: <ul><li><i>Required permission</i>: resource="NAMESPACE:{namespace}:USER:{userId}:SUBSCRIPTION", action=4 (UPDATE)</li><li><i>Returns</i>: cancelled subscription</li></ul>

#### Parameters

| Name | Type |
| :------ | :------ |
| `«destructured»` | `Object` |
| › `data` | `Object` |
| › `data.immediate` | `undefined` \| ``null`` \| `boolean` |
| › `data.reason` | `undefined` \| ``null`` \| `string` |
| › `subscriptionId` | `string` |
| › `userId` | `string` |

#### Returns

`Promise`<`IResponse`<{ `billingAccount`: `undefined` \| ``null`` \| { paymentProvider?: "WALLET" \| "XSOLLA" \| "ADYEN" \| "STRIPE" \| "CHECKOUT" \| "ALIPAY" \| "WXPAY" \| "PAYPAL" \| null \| undefined; paymentMethod?: string \| null \| undefined; additionalData?: { ...; } \| ... 1 more ... \| undefined; } ; `chargeStatus`: ``"CHARGED"`` \| ``"NEVER"`` \| ``"SETUP"`` \| ``"RECURRING_CHARGING"`` \| ``"CHARGE_FAILED"`` ; `chargedCycles`: `undefined` \| ``null`` \| `number` ; `createdAt`: `string` ; `currency`: `undefined` \| ``null`` \| { namespace: string; currencyCode: string; currencySymbol: string; currencyType: "REAL" \| "VIRTUAL"; decimals: number; } ; `currentCycle`: `undefined` \| ``null`` \| `number` ; `currentPeriodEnd`: `undefined` \| ``null`` \| `string` ; `currentPeriodStart`: `undefined` \| ``null`` \| `string` ; `description`: `undefined` \| ``null`` \| `string` ; `end`: `undefined` \| ``null`` \| `string` ; `entitlements`: `undefined` \| ``null`` \| { endDate?: string \| null \| undefined; storeId?: string \| null \| undefined; itemId?: string \| null \| undefined; startDate?: string \| null \| undefined; stackable?: boolean \| null \| undefined; ... 8 more ...; clazz: "APP" \| ... 5 more ... \| "ENTITLEMENT"; }[] ; `firstSubscribe`: `undefined` \| ``null`` \| `boolean` ; `id`: `string` ; `inFixedCycleTrial`: `boolean` ; `inFixedFreeDays`: `boolean` ; `itemId`: `string` ; `itemSnapshot`: `undefined` \| ``null`` \| { createdAt?: string \| null \| undefined; updatedAt?: string \| null \| undefined; appId?: string \| null \| undefined; appType?: "GAME" \| "SOFTWARE" \| "DLC" \| "DEMO" \| null \| undefined; ... 29 more ...; region: string; } ; `language`: `undefined` \| ``null`` \| `string` ; `namespace`: `string` ; `nextBillingDate`: `undefined` \| ``null`` \| `string` ; `paid`: `undefined` \| ``null`` \| `boolean` ; `paymentFlowRequired`: `boolean` ; `paymentOrderNo`: `undefined` \| ``null`` \| `string` ; `paymentStationUrl`: `undefined` \| ``null`` \| `string` ; `price`: `undefined` \| ``null`` \| `number` ; `recurring`: { cycle: "WEEKLY" \| "MONTHLY" \| "QUARTERLY" \| "YEARLY"; fixedFreeDays: number; fixedTrialCycles: number; graceDays: number; } = Recurring; `region`: `undefined` \| ``null`` \| `string` ; `retryAttempted`: `undefined` \| ``null`` \| `number` ; `returnUrl`: `undefined` \| ``null`` \| `string` ; `sandbox`: `undefined` \| ``null`` \| `boolean` ; `sku`: `undefined` \| ``null`` \| `string` ; `source`: `undefined` \| ``null`` \| `string` ; `start`: `undefined` \| ``null`` \| `string` ; `status`: ``"ACTIVE"`` \| ``"INIT"`` \| ``"CANCELLED"`` \| ``"EXPIRED"`` ; `subscribedAt`: `undefined` \| ``null`` \| `string` ; `subscribedBy`: `undefined` \| ``null`` \| ``"USER"`` \| ``"PLATFORM"`` ; `title`: `undefined` \| ``null`` \| `string` ; `trialPrice`: `undefined` \| ``null`` \| `number` ; `trialedCycles`: `undefined` \| ``null`` \| `number` ; `unsubscribeReason`: `undefined` \| ``null`` \| `string` ; `unsubscribedAt`: `undefined` \| ``null`` \| `string` ; `updatedAt`: `string` ; `userId`: `string`  }\>\>

#### Defined in

[packages/sdk/src/api/platform/SubscriptionApi.ts:70](https://github.com/AccelByte/accelbyte-web-sdk/blob/95af6d2/packages/sdk/src/api/platform/SubscriptionApi.ts#L70)

___

### createSubscription

▸ **createSubscription**(`«destructured»`): `Promise`<`IResponse`<`unknown`\>\>

Subscribe a subscription. Support both real and virtual payment. Need go through payment flow using the paymentOrderNo if paymentFlowRequired true.<br><b>ACTIVE USER subscription can't do subscribe again.</b><br><b>The next billing date will be X(default 4) hours before the current period ends if correctly subscribed.</b><br>User with permission SANDBOX will create sandbox subscription that not real paid.<br>Other detail info: <ul><li><i>Required permission</i>: resource="NAMESPACE:{namespace}:USER:{userId}:SUBSCRIPTION", action=1 (CREATE)</li><li><i>Optional permission(user with this permission will create sandbox subscription)</i>: resource="SANDBOX", action=1 (CREATE)</li><li>It will be forbidden while the user is banned: ORDER_INITIATE or ORDER_AND_PAYMENT</li><li><i>Returns</i>: created subscription</li></ul>

#### Parameters

| Name | Type |
| :------ | :------ |
| `«destructured»` | `Object` |
| › `data` | `Object` |
| › `data.currencyCode` | `string` |
| › `data.itemId` | `string` |
| › `data.language` | `undefined` \| ``null`` \| `string` |
| › `data.region` | `undefined` \| ``null`` \| `string` |
| › `data.returnUrl` | `undefined` \| ``null`` \| `string` |
| › `data.source` | `undefined` \| ``null`` \| `string` |
| › `userId` | `string` |

#### Returns

`Promise`<`IResponse`<`unknown`\>\>

#### Defined in

[packages/sdk/src/api/platform/SubscriptionApi.ts:41](https://github.com/AccelByte/accelbyte-web-sdk/blob/95af6d2/packages/sdk/src/api/platform/SubscriptionApi.ts#L41)

___

### getUserSubscriptionBillingHistory

▸ **getUserSubscriptionBillingHistory**(`«destructured»`): `Promise`<`IResponseWithSync`<{ `data`: { description?: string \| null \| undefined; sku?: string \| null \| undefined; statusReason?: string \| null \| undefined; totalTax?: number \| null \| undefined; totalPrice?: number \| null \| undefined; ... 18 more ...; recurringOrderNo: string; }[] ; `paging`: `undefined` \| ``null`` \| { next?: string \| null \| undefined; previous?: string \| null \| undefined; }  }\>\>

Get user subscription billing histories.<br>Other detail info: <ul><li><i>Required permission</i>: resource="NAMESPACE:{namespace}:USER:{userId}:SUBSCRIPTION", action=2 (READ)</li><li><i>Returns</i>: paginated subscription history</li></ul>

#### Parameters

| Name | Type |
| :------ | :------ |
| `«destructured»` | `Object` |
| › `queryParams?` | `Object` |
| › `queryParams.excludeFree?` | ``null`` \| `boolean` |
| › `queryParams.limit?` | `number` |
| › `queryParams.offset?` | `number` |
| › `subscriptionId` | `string` |
| › `userId` | `string` |

#### Returns

`Promise`<`IResponseWithSync`<{ `data`: { description?: string \| null \| undefined; sku?: string \| null \| undefined; statusReason?: string \| null \| undefined; totalTax?: number \| null \| undefined; totalPrice?: number \| null \| undefined; ... 18 more ...; recurringOrderNo: string; }[] ; `paging`: `undefined` \| ``null`` \| { next?: string \| null \| undefined; previous?: string \| null \| undefined; }  }\>\>

#### Defined in

[packages/sdk/src/api/platform/SubscriptionApi.ts:48](https://github.com/AccelByte/accelbyte-web-sdk/blob/95af6d2/packages/sdk/src/api/platform/SubscriptionApi.ts#L48)

___

### getUserSubscriptionBySubscriptionId

▸ **getUserSubscriptionBySubscriptionId**(`«destructured»`): `Promise`<`IResponseWithSync`<{ `billingAccount`: `undefined` \| ``null`` \| { paymentProvider?: "WALLET" \| "XSOLLA" \| "ADYEN" \| "STRIPE" \| "CHECKOUT" \| "ALIPAY" \| "WXPAY" \| "PAYPAL" \| null \| undefined; paymentMethod?: string \| null \| undefined; additionalData?: { ...; } \| ... 1 more ... \| undefined; } ; `chargeStatus`: ``"CHARGED"`` \| ``"NEVER"`` \| ``"SETUP"`` \| ``"RECURRING_CHARGING"`` \| ``"CHARGE_FAILED"`` ; `chargedCycles`: `undefined` \| ``null`` \| `number` ; `createdAt`: `string` ; `currency`: `undefined` \| ``null`` \| { namespace: string; currencyCode: string; currencySymbol: string; currencyType: "REAL" \| "VIRTUAL"; decimals: number; } ; `currentCycle`: `undefined` \| ``null`` \| `number` ; `currentPeriodEnd`: `undefined` \| ``null`` \| `string` ; `currentPeriodStart`: `undefined` \| ``null`` \| `string` ; `description`: `undefined` \| ``null`` \| `string` ; `end`: `undefined` \| ``null`` \| `string` ; `entitlements`: `undefined` \| ``null`` \| { endDate?: string \| null \| undefined; storeId?: string \| null \| undefined; itemId?: string \| null \| undefined; startDate?: string \| null \| undefined; stackable?: boolean \| null \| undefined; ... 8 more ...; clazz: "APP" \| ... 5 more ... \| "ENTITLEMENT"; }[] ; `firstSubscribe`: `undefined` \| ``null`` \| `boolean` ; `id`: `string` ; `inFixedCycleTrial`: `boolean` ; `inFixedFreeDays`: `boolean` ; `itemId`: `string` ; `itemSnapshot`: `undefined` \| ``null`` \| { createdAt?: string \| null \| undefined; updatedAt?: string \| null \| undefined; appId?: string \| null \| undefined; appType?: "GAME" \| "SOFTWARE" \| "DLC" \| "DEMO" \| null \| undefined; ... 29 more ...; region: string; } ; `language`: `undefined` \| ``null`` \| `string` ; `namespace`: `string` ; `nextBillingDate`: `undefined` \| ``null`` \| `string` ; `paid`: `undefined` \| ``null`` \| `boolean` ; `paymentFlowRequired`: `boolean` ; `paymentOrderNo`: `undefined` \| ``null`` \| `string` ; `paymentStationUrl`: `undefined` \| ``null`` \| `string` ; `price`: `undefined` \| ``null`` \| `number` ; `recurring`: { cycle: "WEEKLY" \| "MONTHLY" \| "QUARTERLY" \| "YEARLY"; fixedFreeDays: number; fixedTrialCycles: number; graceDays: number; } = Recurring; `region`: `undefined` \| ``null`` \| `string` ; `retryAttempted`: `undefined` \| ``null`` \| `number` ; `returnUrl`: `undefined` \| ``null`` \| `string` ; `sandbox`: `undefined` \| ``null`` \| `boolean` ; `sku`: `undefined` \| ``null`` \| `string` ; `source`: `undefined` \| ``null`` \| `string` ; `start`: `undefined` \| ``null`` \| `string` ; `status`: ``"ACTIVE"`` \| ``"INIT"`` \| ``"CANCELLED"`` \| ``"EXPIRED"`` ; `subscribedAt`: `undefined` \| ``null`` \| `string` ; `subscribedBy`: `undefined` \| ``null`` \| ``"USER"`` \| ``"PLATFORM"`` ; `title`: `undefined` \| ``null`` \| `string` ; `trialPrice`: `undefined` \| ``null`` \| `number` ; `trialedCycles`: `undefined` \| ``null`` \| `number` ; `unsubscribeReason`: `undefined` \| ``null`` \| `string` ; `unsubscribedAt`: `undefined` \| ``null`` \| `string` ; `updatedAt`: `string` ; `userId`: `string`  }\>\>

Get user subscription.<br>Other detail info: <ul><li><i>Required permission</i>: resource="NAMESPACE:{namespace}:USER:{userId}:SUBSCRIPTION", action=2 (READ)</li><li><i>Returns</i>: subscription</li></ul>

#### Parameters

| Name | Type |
| :------ | :------ |
| `«destructured»` | `Object` |
| › `subscriptionId` | `string` |
| › `userId` | `string` |

#### Returns

`Promise`<`IResponseWithSync`<{ `billingAccount`: `undefined` \| ``null`` \| { paymentProvider?: "WALLET" \| "XSOLLA" \| "ADYEN" \| "STRIPE" \| "CHECKOUT" \| "ALIPAY" \| "WXPAY" \| "PAYPAL" \| null \| undefined; paymentMethod?: string \| null \| undefined; additionalData?: { ...; } \| ... 1 more ... \| undefined; } ; `chargeStatus`: ``"CHARGED"`` \| ``"NEVER"`` \| ``"SETUP"`` \| ``"RECURRING_CHARGING"`` \| ``"CHARGE_FAILED"`` ; `chargedCycles`: `undefined` \| ``null`` \| `number` ; `createdAt`: `string` ; `currency`: `undefined` \| ``null`` \| { namespace: string; currencyCode: string; currencySymbol: string; currencyType: "REAL" \| "VIRTUAL"; decimals: number; } ; `currentCycle`: `undefined` \| ``null`` \| `number` ; `currentPeriodEnd`: `undefined` \| ``null`` \| `string` ; `currentPeriodStart`: `undefined` \| ``null`` \| `string` ; `description`: `undefined` \| ``null`` \| `string` ; `end`: `undefined` \| ``null`` \| `string` ; `entitlements`: `undefined` \| ``null`` \| { endDate?: string \| null \| undefined; storeId?: string \| null \| undefined; itemId?: string \| null \| undefined; startDate?: string \| null \| undefined; stackable?: boolean \| null \| undefined; ... 8 more ...; clazz: "APP" \| ... 5 more ... \| "ENTITLEMENT"; }[] ; `firstSubscribe`: `undefined` \| ``null`` \| `boolean` ; `id`: `string` ; `inFixedCycleTrial`: `boolean` ; `inFixedFreeDays`: `boolean` ; `itemId`: `string` ; `itemSnapshot`: `undefined` \| ``null`` \| { createdAt?: string \| null \| undefined; updatedAt?: string \| null \| undefined; appId?: string \| null \| undefined; appType?: "GAME" \| "SOFTWARE" \| "DLC" \| "DEMO" \| null \| undefined; ... 29 more ...; region: string; } ; `language`: `undefined` \| ``null`` \| `string` ; `namespace`: `string` ; `nextBillingDate`: `undefined` \| ``null`` \| `string` ; `paid`: `undefined` \| ``null`` \| `boolean` ; `paymentFlowRequired`: `boolean` ; `paymentOrderNo`: `undefined` \| ``null`` \| `string` ; `paymentStationUrl`: `undefined` \| ``null`` \| `string` ; `price`: `undefined` \| ``null`` \| `number` ; `recurring`: { cycle: "WEEKLY" \| "MONTHLY" \| "QUARTERLY" \| "YEARLY"; fixedFreeDays: number; fixedTrialCycles: number; graceDays: number; } = Recurring; `region`: `undefined` \| ``null`` \| `string` ; `retryAttempted`: `undefined` \| ``null`` \| `number` ; `returnUrl`: `undefined` \| ``null`` \| `string` ; `sandbox`: `undefined` \| ``null`` \| `boolean` ; `sku`: `undefined` \| ``null`` \| `string` ; `source`: `undefined` \| ``null`` \| `string` ; `start`: `undefined` \| ``null`` \| `string` ; `status`: ``"ACTIVE"`` \| ``"INIT"`` \| ``"CANCELLED"`` \| ``"EXPIRED"`` ; `subscribedAt`: `undefined` \| ``null`` \| `string` ; `subscribedBy`: `undefined` \| ``null`` \| ``"USER"`` \| ``"PLATFORM"`` ; `title`: `undefined` \| ``null`` \| `string` ; `trialPrice`: `undefined` \| ``null`` \| `number` ; `trialedCycles`: `undefined` \| ``null`` \| `number` ; `unsubscribeReason`: `undefined` \| ``null`` \| `string` ; `unsubscribedAt`: `undefined` \| ``null`` \| `string` ; `updatedAt`: `string` ; `userId`: `string`  }\>\>

#### Defined in

[packages/sdk/src/api/platform/SubscriptionApi.ts:34](https://github.com/AccelByte/accelbyte-web-sdk/blob/95af6d2/packages/sdk/src/api/platform/SubscriptionApi.ts#L34)

___

### getUserSubscriptions

▸ **getUserSubscriptions**(`«destructured»`): `Promise`<`IResponseWithSync`<{ `data`: { language?: string \| null \| undefined; description?: string \| null \| undefined; source?: string \| null \| undefined; title?: string \| null \| undefined; sku?: string \| null \| undefined; ... 37 more ...; paymentFlowRequired: boolean; }[] ; `paging`: `undefined` \| ``null`` \| { next?: string \| null \| undefined; previous?: string \| null \| undefined; }  }\>\>

Query user subscriptions.<br>Other detail info: <ul><li><i>Required permission</i>: resource="NAMESPACE:{namespace}:USER:{userId}:SUBSCRIPTION", action=2 (READ)</li><li><i>Returns</i>: paginated subscription</li></ul>

#### Parameters

| Name | Type |
| :------ | :------ |
| `«destructured»` | `Object` |
| › `queryParams?` | `Object` |
| › `queryParams.chargeStatus?` | ``"CHARGED"`` \| ``"NEVER"`` \| ``"SETUP"`` \| ``"RECURRING_CHARGING"`` \| ``"CHARGE_FAILED"`` |
| › `queryParams.itemId?` | ``null`` \| `string` |
| › `queryParams.limit?` | `number` |
| › `queryParams.offset?` | `number` |
| › `queryParams.sku?` | ``null`` \| `string` |
| › `queryParams.status?` | ``"ACTIVE"`` \| ``"INIT"`` \| ``"CANCELLED"`` \| ``"EXPIRED"`` |
| › `queryParams.subscribedBy?` | ``"USER"`` \| ``"PLATFORM"`` |
| › `userId` | `string` |

#### Returns

`Promise`<`IResponseWithSync`<{ `data`: { language?: string \| null \| undefined; description?: string \| null \| undefined; source?: string \| null \| undefined; title?: string \| null \| undefined; sku?: string \| null \| undefined; ... 37 more ...; paymentFlowRequired: boolean; }[] ; `paging`: `undefined` \| ``null`` \| { next?: string \| null \| undefined; previous?: string \| null \| undefined; }  }\>\>

#### Defined in

[packages/sdk/src/api/platform/SubscriptionApi.ts:21](https://github.com/AccelByte/accelbyte-web-sdk/blob/95af6d2/packages/sdk/src/api/platform/SubscriptionApi.ts#L21)

___

### updateUserSubscriptionPaymentMethod

▸ **updateUserSubscriptionPaymentMethod**(`«destructured»`): `Promise`<`IResponse`<{ `billingAccount`: `undefined` \| ``null`` \| { paymentProvider?: "WALLET" \| "XSOLLA" \| "ADYEN" \| "STRIPE" \| "CHECKOUT" \| "ALIPAY" \| "WXPAY" \| "PAYPAL" \| null \| undefined; paymentMethod?: string \| null \| undefined; additionalData?: { ...; } \| ... 1 more ... \| undefined; } ; `chargeStatus`: ``"CHARGED"`` \| ``"NEVER"`` \| ``"SETUP"`` \| ``"RECURRING_CHARGING"`` \| ``"CHARGE_FAILED"`` ; `chargedCycles`: `undefined` \| ``null`` \| `number` ; `createdAt`: `string` ; `currency`: `undefined` \| ``null`` \| { namespace: string; currencyCode: string; currencySymbol: string; currencyType: "REAL" \| "VIRTUAL"; decimals: number; } ; `currentCycle`: `undefined` \| ``null`` \| `number` ; `currentPeriodEnd`: `undefined` \| ``null`` \| `string` ; `currentPeriodStart`: `undefined` \| ``null`` \| `string` ; `description`: `undefined` \| ``null`` \| `string` ; `end`: `undefined` \| ``null`` \| `string` ; `entitlements`: `undefined` \| ``null`` \| { endDate?: string \| null \| undefined; storeId?: string \| null \| undefined; itemId?: string \| null \| undefined; startDate?: string \| null \| undefined; stackable?: boolean \| null \| undefined; ... 8 more ...; clazz: "APP" \| ... 5 more ... \| "ENTITLEMENT"; }[] ; `firstSubscribe`: `undefined` \| ``null`` \| `boolean` ; `id`: `string` ; `inFixedCycleTrial`: `boolean` ; `inFixedFreeDays`: `boolean` ; `itemId`: `string` ; `itemSnapshot`: `undefined` \| ``null`` \| { createdAt?: string \| null \| undefined; updatedAt?: string \| null \| undefined; appId?: string \| null \| undefined; appType?: "GAME" \| "SOFTWARE" \| "DLC" \| "DEMO" \| null \| undefined; ... 29 more ...; region: string; } ; `language`: `undefined` \| ``null`` \| `string` ; `namespace`: `string` ; `nextBillingDate`: `undefined` \| ``null`` \| `string` ; `paid`: `undefined` \| ``null`` \| `boolean` ; `paymentFlowRequired`: `boolean` ; `paymentOrderNo`: `undefined` \| ``null`` \| `string` ; `paymentStationUrl`: `undefined` \| ``null`` \| `string` ; `price`: `undefined` \| ``null`` \| `number` ; `recurring`: { cycle: "WEEKLY" \| "MONTHLY" \| "QUARTERLY" \| "YEARLY"; fixedFreeDays: number; fixedTrialCycles: number; graceDays: number; } = Recurring; `region`: `undefined` \| ``null`` \| `string` ; `retryAttempted`: `undefined` \| ``null`` \| `number` ; `returnUrl`: `undefined` \| ``null`` \| `string` ; `sandbox`: `undefined` \| ``null`` \| `boolean` ; `sku`: `undefined` \| ``null`` \| `string` ; `source`: `undefined` \| ``null`` \| `string` ; `start`: `undefined` \| ``null`` \| `string` ; `status`: ``"ACTIVE"`` \| ``"INIT"`` \| ``"CANCELLED"`` \| ``"EXPIRED"`` ; `subscribedAt`: `undefined` \| ``null`` \| `string` ; `subscribedBy`: `undefined` \| ``null`` \| ``"USER"`` \| ``"PLATFORM"`` ; `title`: `undefined` \| ``null`` \| `string` ; `trialPrice`: `undefined` \| ``null`` \| `number` ; `trialedCycles`: `undefined` \| ``null`` \| `number` ; `unsubscribeReason`: `undefined` \| ``null`` \| `string` ; `unsubscribedAt`: `undefined` \| ``null`` \| `string` ; `updatedAt`: `string` ; `userId`: `string`  }\>\>

Request to change a subscription billing account, this will guide user to payment station. The actual change will happen at the 0 payment notification successfully handled.<br>Only ACTIVE USER subscription with real currency billing account can be changed.<br>Other detail info: <ul><li><i>Required permission</i>: resource="NAMESPACE:{namespace}:USER:{userId}:SUBSCRIPTION", action=4 (UPDATE)</li><li><i>Returns</i>: updated subscription</li></ul>

#### Parameters

| Name | Type |
| :------ | :------ |
| `«destructured»` | `Object` |
| › `subscriptionId` | `string` |
| › `userId` | `string` |

#### Returns

`Promise`<`IResponse`<{ `billingAccount`: `undefined` \| ``null`` \| { paymentProvider?: "WALLET" \| "XSOLLA" \| "ADYEN" \| "STRIPE" \| "CHECKOUT" \| "ALIPAY" \| "WXPAY" \| "PAYPAL" \| null \| undefined; paymentMethod?: string \| null \| undefined; additionalData?: { ...; } \| ... 1 more ... \| undefined; } ; `chargeStatus`: ``"CHARGED"`` \| ``"NEVER"`` \| ``"SETUP"`` \| ``"RECURRING_CHARGING"`` \| ``"CHARGE_FAILED"`` ; `chargedCycles`: `undefined` \| ``null`` \| `number` ; `createdAt`: `string` ; `currency`: `undefined` \| ``null`` \| { namespace: string; currencyCode: string; currencySymbol: string; currencyType: "REAL" \| "VIRTUAL"; decimals: number; } ; `currentCycle`: `undefined` \| ``null`` \| `number` ; `currentPeriodEnd`: `undefined` \| ``null`` \| `string` ; `currentPeriodStart`: `undefined` \| ``null`` \| `string` ; `description`: `undefined` \| ``null`` \| `string` ; `end`: `undefined` \| ``null`` \| `string` ; `entitlements`: `undefined` \| ``null`` \| { endDate?: string \| null \| undefined; storeId?: string \| null \| undefined; itemId?: string \| null \| undefined; startDate?: string \| null \| undefined; stackable?: boolean \| null \| undefined; ... 8 more ...; clazz: "APP" \| ... 5 more ... \| "ENTITLEMENT"; }[] ; `firstSubscribe`: `undefined` \| ``null`` \| `boolean` ; `id`: `string` ; `inFixedCycleTrial`: `boolean` ; `inFixedFreeDays`: `boolean` ; `itemId`: `string` ; `itemSnapshot`: `undefined` \| ``null`` \| { createdAt?: string \| null \| undefined; updatedAt?: string \| null \| undefined; appId?: string \| null \| undefined; appType?: "GAME" \| "SOFTWARE" \| "DLC" \| "DEMO" \| null \| undefined; ... 29 more ...; region: string; } ; `language`: `undefined` \| ``null`` \| `string` ; `namespace`: `string` ; `nextBillingDate`: `undefined` \| ``null`` \| `string` ; `paid`: `undefined` \| ``null`` \| `boolean` ; `paymentFlowRequired`: `boolean` ; `paymentOrderNo`: `undefined` \| ``null`` \| `string` ; `paymentStationUrl`: `undefined` \| ``null`` \| `string` ; `price`: `undefined` \| ``null`` \| `number` ; `recurring`: { cycle: "WEEKLY" \| "MONTHLY" \| "QUARTERLY" \| "YEARLY"; fixedFreeDays: number; fixedTrialCycles: number; graceDays: number; } = Recurring; `region`: `undefined` \| ``null`` \| `string` ; `retryAttempted`: `undefined` \| ``null`` \| `number` ; `returnUrl`: `undefined` \| ``null`` \| `string` ; `sandbox`: `undefined` \| ``null`` \| `boolean` ; `sku`: `undefined` \| ``null`` \| `string` ; `source`: `undefined` \| ``null`` \| `string` ; `start`: `undefined` \| ``null`` \| `string` ; `status`: ``"ACTIVE"`` \| ``"INIT"`` \| ``"CANCELLED"`` \| ``"EXPIRED"`` ; `subscribedAt`: `undefined` \| ``null`` \| `string` ; `subscribedBy`: `undefined` \| ``null`` \| ``"USER"`` \| ``"PLATFORM"`` ; `title`: `undefined` \| ``null`` \| `string` ; `trialPrice`: `undefined` \| ``null`` \| `number` ; `trialedCycles`: `undefined` \| ``null`` \| `number` ; `unsubscribeReason`: `undefined` \| ``null`` \| `string` ; `unsubscribedAt`: `undefined` \| ``null`` \| `string` ; `updatedAt`: `string` ; `userId`: `string`  }\>\>

#### Defined in

[packages/sdk/src/api/platform/SubscriptionApi.ts:63](https://github.com/AccelByte/accelbyte-web-sdk/blob/95af6d2/packages/sdk/src/api/platform/SubscriptionApi.ts#L63)
