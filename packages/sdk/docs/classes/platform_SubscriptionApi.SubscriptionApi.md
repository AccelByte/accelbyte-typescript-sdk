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

▸ **cancelUserSubscription**(`__namedParameters`): `Promise`<`IResponse`<{ `billingAccount`: `undefined` \| ``null`` \| { paymentProvider?: "WALLET" \| "XSOLLA" \| "ADYEN" \| "STRIPE" \| "CHECKOUT" \| "ALIPAY" \| "WXPAY" \| "PAYPAL" \| null \| undefined; paymentMethod?: string \| null \| undefined; additionalData?: { ...; } \| ... 1 more ... \| undefined; } ; `chargeStatus`: ``"CHARGED"`` \| ``"NEVER"`` \| ``"SETUP"`` \| ``"RECURRING_CHARGING"`` \| ``"CHARGE_FAILED"`` ; `chargedCycles`: `undefined` \| ``null`` \| `number` ; `createdAt`: `string` ; `currency`: `undefined` \| ``null`` \| { namespace: string; currencyCode: string; currencySymbol: string; currencyType: "REAL" \| "VIRTUAL"; decimals: number; } ; `currentCycle`: `undefined` \| ``null`` \| `number` ; `currentPeriodEnd`: `undefined` \| ``null`` \| `string` ; `currentPeriodStart`: `undefined` \| ``null`` \| `string` ; `description`: `undefined` \| ``null`` \| `string` ; `end`: `undefined` \| ``null`` \| `string` ; `entitlements`: `undefined` \| ``null`` \| { endDate?: string \| null \| undefined; storeId?: string \| null \| undefined; itemId?: string \| null \| undefined; startDate?: string \| null \| undefined; stackable?: boolean \| null \| undefined; ... 8 more ...; clazz: "APP" \| ... 5 more ... \| "ENTITLEMENT"; }[] ; `firstSubscribe`: `undefined` \| ``null`` \| `boolean` ; `id`: `string` ; `inFixedCycleTrial`: `boolean` ; `inFixedFreeDays`: `boolean` ; `itemId`: `string` ; `itemSnapshot`: `undefined` \| ``null`` \| { createdAt?: string \| null \| undefined; updatedAt?: string \| null \| undefined; appId?: string \| null \| undefined; appType?: "GAME" \| "SOFTWARE" \| "DLC" \| "DEMO" \| null \| undefined; ... 29 more ...; region: string; } ; `language`: `undefined` \| ``null`` \| `string` ; `namespace`: `string` ; `nextBillingDate`: `undefined` \| ``null`` \| `string` ; `paid`: `undefined` \| ``null`` \| `boolean` ; `paymentFlowRequired`: `boolean` ; `paymentOrderNo`: `undefined` \| ``null`` \| `string` ; `paymentStationUrl`: `undefined` \| ``null`` \| `string` ; `price`: `undefined` \| ``null`` \| `number` ; `recurring`: { cycle: "WEEKLY" \| "MONTHLY" \| "QUARTERLY" \| "YEARLY"; fixedFreeDays: number; fixedTrialCycles: number; graceDays: number; } = Recurring; `region`: `undefined` \| ``null`` \| `string` ; `retryAttempted`: `undefined` \| ``null`` \| `number` ; `returnUrl`: `undefined` \| ``null`` \| `string` ; `sandbox`: `undefined` \| ``null`` \| `boolean` ; `sku`: `undefined` \| ``null`` \| `string` ; `source`: `undefined` \| ``null`` \| `string` ; `start`: `undefined` \| ``null`` \| `string` ; `status`: ``"ACTIVE"`` \| ``"INIT"`` \| ``"CANCELLED"`` \| ``"EXPIRED"`` ; `subscribedAt`: `undefined` \| ``null`` \| `string` ; `subscribedBy`: `undefined` \| ``null`` \| ``"USER"`` \| ``"PLATFORM"`` ; `title`: `undefined` \| ``null`` \| `string` ; `trialPrice`: `undefined` \| ``null`` \| `number` ; `trialedCycles`: `undefined` \| ``null`` \| `number` ; `unsubscribeReason`: `undefined` \| ``null`` \| `string` ; `unsubscribedAt`: `undefined` \| ``null`` \| `string` ; `updatedAt`: `string` ; `userId`: `string`  }\>\>

Cancel a subscription, only ACTIVE subscription can be cancelled. <b>Ensure successfully cancel, recommend at least 1 day before current period ends, otherwise it may be charging or charged.</b><br>Set immediate true, the subscription will be terminated immediately, otherwise till the end of current billing cycle.<br>Other detail info: <ul><li><i>Required permission</i>: resource="NAMESPACE:{namespace}:USER:{userId}:SUBSCRIPTION", action=4 (UPDATE)</li><li><i>Returns</i>: cancelled subscription</li></ul>

#### Parameters

| Name | Type |
| :------ | :------ |
| `__namedParameters` | `Object` |
| `__namedParameters.data` | `Object` |
| `__namedParameters.data.immediate` | `undefined` \| ``null`` \| `boolean` |
| `__namedParameters.data.reason` | `undefined` \| ``null`` \| `string` |
| `__namedParameters.subscriptionId` | `string` |
| `__namedParameters.userId` | `string` |

#### Returns

`Promise`<`IResponse`<{ `billingAccount`: `undefined` \| ``null`` \| { paymentProvider?: "WALLET" \| "XSOLLA" \| "ADYEN" \| "STRIPE" \| "CHECKOUT" \| "ALIPAY" \| "WXPAY" \| "PAYPAL" \| null \| undefined; paymentMethod?: string \| null \| undefined; additionalData?: { ...; } \| ... 1 more ... \| undefined; } ; `chargeStatus`: ``"CHARGED"`` \| ``"NEVER"`` \| ``"SETUP"`` \| ``"RECURRING_CHARGING"`` \| ``"CHARGE_FAILED"`` ; `chargedCycles`: `undefined` \| ``null`` \| `number` ; `createdAt`: `string` ; `currency`: `undefined` \| ``null`` \| { namespace: string; currencyCode: string; currencySymbol: string; currencyType: "REAL" \| "VIRTUAL"; decimals: number; } ; `currentCycle`: `undefined` \| ``null`` \| `number` ; `currentPeriodEnd`: `undefined` \| ``null`` \| `string` ; `currentPeriodStart`: `undefined` \| ``null`` \| `string` ; `description`: `undefined` \| ``null`` \| `string` ; `end`: `undefined` \| ``null`` \| `string` ; `entitlements`: `undefined` \| ``null`` \| { endDate?: string \| null \| undefined; storeId?: string \| null \| undefined; itemId?: string \| null \| undefined; startDate?: string \| null \| undefined; stackable?: boolean \| null \| undefined; ... 8 more ...; clazz: "APP" \| ... 5 more ... \| "ENTITLEMENT"; }[] ; `firstSubscribe`: `undefined` \| ``null`` \| `boolean` ; `id`: `string` ; `inFixedCycleTrial`: `boolean` ; `inFixedFreeDays`: `boolean` ; `itemId`: `string` ; `itemSnapshot`: `undefined` \| ``null`` \| { createdAt?: string \| null \| undefined; updatedAt?: string \| null \| undefined; appId?: string \| null \| undefined; appType?: "GAME" \| "SOFTWARE" \| "DLC" \| "DEMO" \| null \| undefined; ... 29 more ...; region: string; } ; `language`: `undefined` \| ``null`` \| `string` ; `namespace`: `string` ; `nextBillingDate`: `undefined` \| ``null`` \| `string` ; `paid`: `undefined` \| ``null`` \| `boolean` ; `paymentFlowRequired`: `boolean` ; `paymentOrderNo`: `undefined` \| ``null`` \| `string` ; `paymentStationUrl`: `undefined` \| ``null`` \| `string` ; `price`: `undefined` \| ``null`` \| `number` ; `recurring`: { cycle: "WEEKLY" \| "MONTHLY" \| "QUARTERLY" \| "YEARLY"; fixedFreeDays: number; fixedTrialCycles: number; graceDays: number; } = Recurring; `region`: `undefined` \| ``null`` \| `string` ; `retryAttempted`: `undefined` \| ``null`` \| `number` ; `returnUrl`: `undefined` \| ``null`` \| `string` ; `sandbox`: `undefined` \| ``null`` \| `boolean` ; `sku`: `undefined` \| ``null`` \| `string` ; `source`: `undefined` \| ``null`` \| `string` ; `start`: `undefined` \| ``null`` \| `string` ; `status`: ``"ACTIVE"`` \| ``"INIT"`` \| ``"CANCELLED"`` \| ``"EXPIRED"`` ; `subscribedAt`: `undefined` \| ``null`` \| `string` ; `subscribedBy`: `undefined` \| ``null`` \| ``"USER"`` \| ``"PLATFORM"`` ; `title`: `undefined` \| ``null`` \| `string` ; `trialPrice`: `undefined` \| ``null`` \| `number` ; `trialedCycles`: `undefined` \| ``null`` \| `number` ; `unsubscribeReason`: `undefined` \| ``null`` \| `string` ; `unsubscribedAt`: `undefined` \| ``null`` \| `string` ; `updatedAt`: `string` ; `userId`: `string`  }\>\>

#### Defined in

[packages/sdk/src/api/platform/SubscriptionApi.ts:78](https://bitbucket.org/accelbyte/justice-odin/src/d39c8cbe8/accelbyte-web-sdk/packages/sdk/src/api/platform/SubscriptionApi.ts#lines-78)

___

### createSubscription

▸ **createSubscription**(`__namedParameters`): `Promise`<`IResponse`<`unknown`\>\>

Subscribe a subscription. Support both real and virtual payment. Need go through payment flow using the paymentOrderNo if paymentFlowRequired true.<br><b>ACTIVE USER subscription can't do subscribe again.</b><br><b>The next billing date will be X(default 4) hours before the current period ends if correctly subscribed.</b><br>User with permission SANDBOX will create sandbox subscription that not real paid.<br>Other detail info: <ul><li><i>Required permission</i>: resource="NAMESPACE:{namespace}:USER:{userId}:SUBSCRIPTION", action=1 (CREATE)</li><li><i>Optional permission(user with this permission will create sandbox subscription)</i>: resource="SANDBOX", action=1 (CREATE)</li><li>It will be forbidden while the user is banned: ORDER_INITIATE or ORDER_AND_PAYMENT</li><li><i>Returns</i>: created subscription</li></ul>

#### Parameters

| Name | Type |
| :------ | :------ |
| `__namedParameters` | `Object` |
| `__namedParameters.data` | `Object` |
| `__namedParameters.data.currencyCode` | `string` |
| `__namedParameters.data.itemId` | `string` |
| `__namedParameters.data.language` | `undefined` \| ``null`` \| `string` |
| `__namedParameters.data.region` | `undefined` \| ``null`` \| `string` |
| `__namedParameters.data.returnUrl` | `undefined` \| ``null`` \| `string` |
| `__namedParameters.data.source` | `undefined` \| ``null`` \| `string` |
| `__namedParameters.userId` | `string` |

#### Returns

`Promise`<`IResponse`<`unknown`\>\>

#### Defined in

[packages/sdk/src/api/platform/SubscriptionApi.ts:49](https://bitbucket.org/accelbyte/justice-odin/src/d39c8cbe8/accelbyte-web-sdk/packages/sdk/src/api/platform/SubscriptionApi.ts#lines-49)

___

### getUserSubscriptionBillingHistory

▸ **getUserSubscriptionBillingHistory**(`__namedParameters`): `Promise`<`IResponseWithSync`<{ `data`: { description?: string \| null \| undefined; sku?: string \| null \| undefined; statusReason?: string \| null \| undefined; totalTax?: number \| null \| undefined; totalPrice?: number \| null \| undefined; ... 18 more ...; recurringOrderNo: string; }[] ; `paging`: `undefined` \| ``null`` \| { next?: string \| null \| undefined; previous?: string \| null \| undefined; }  }\>\>

Get user subscription billing histories.<br>Other detail info: <ul><li><i>Required permission</i>: resource="NAMESPACE:{namespace}:USER:{userId}:SUBSCRIPTION", action=2 (READ)</li><li><i>Returns</i>: paginated subscription history</li></ul>

#### Parameters

| Name | Type |
| :------ | :------ |
| `__namedParameters` | `Object` |
| `__namedParameters.queryParams?` | `Object` |
| `__namedParameters.queryParams.excludeFree?` | ``null`` \| `boolean` |
| `__namedParameters.queryParams.limit?` | `number` |
| `__namedParameters.queryParams.offset?` | `number` |
| `__namedParameters.subscriptionId` | `string` |
| `__namedParameters.userId` | `string` |

#### Returns

`Promise`<`IResponseWithSync`<{ `data`: { description?: string \| null \| undefined; sku?: string \| null \| undefined; statusReason?: string \| null \| undefined; totalTax?: number \| null \| undefined; totalPrice?: number \| null \| undefined; ... 18 more ...; recurringOrderNo: string; }[] ; `paging`: `undefined` \| ``null`` \| { next?: string \| null \| undefined; previous?: string \| null \| undefined; }  }\>\>

#### Defined in

[packages/sdk/src/api/platform/SubscriptionApi.ts:56](https://bitbucket.org/accelbyte/justice-odin/src/d39c8cbe8/accelbyte-web-sdk/packages/sdk/src/api/platform/SubscriptionApi.ts#lines-56)

___

### getUserSubscriptionBySubscriptionId

▸ **getUserSubscriptionBySubscriptionId**(`__namedParameters`): `Promise`<`IResponseWithSync`<{ `billingAccount`: `undefined` \| ``null`` \| { paymentProvider?: "WALLET" \| "XSOLLA" \| "ADYEN" \| "STRIPE" \| "CHECKOUT" \| "ALIPAY" \| "WXPAY" \| "PAYPAL" \| null \| undefined; paymentMethod?: string \| null \| undefined; additionalData?: { ...; } \| ... 1 more ... \| undefined; } ; `chargeStatus`: ``"CHARGED"`` \| ``"NEVER"`` \| ``"SETUP"`` \| ``"RECURRING_CHARGING"`` \| ``"CHARGE_FAILED"`` ; `chargedCycles`: `undefined` \| ``null`` \| `number` ; `createdAt`: `string` ; `currency`: `undefined` \| ``null`` \| { namespace: string; currencyCode: string; currencySymbol: string; currencyType: "REAL" \| "VIRTUAL"; decimals: number; } ; `currentCycle`: `undefined` \| ``null`` \| `number` ; `currentPeriodEnd`: `undefined` \| ``null`` \| `string` ; `currentPeriodStart`: `undefined` \| ``null`` \| `string` ; `description`: `undefined` \| ``null`` \| `string` ; `end`: `undefined` \| ``null`` \| `string` ; `entitlements`: `undefined` \| ``null`` \| { endDate?: string \| null \| undefined; storeId?: string \| null \| undefined; itemId?: string \| null \| undefined; startDate?: string \| null \| undefined; stackable?: boolean \| null \| undefined; ... 8 more ...; clazz: "APP" \| ... 5 more ... \| "ENTITLEMENT"; }[] ; `firstSubscribe`: `undefined` \| ``null`` \| `boolean` ; `id`: `string` ; `inFixedCycleTrial`: `boolean` ; `inFixedFreeDays`: `boolean` ; `itemId`: `string` ; `itemSnapshot`: `undefined` \| ``null`` \| { createdAt?: string \| null \| undefined; updatedAt?: string \| null \| undefined; appId?: string \| null \| undefined; appType?: "GAME" \| "SOFTWARE" \| "DLC" \| "DEMO" \| null \| undefined; ... 29 more ...; region: string; } ; `language`: `undefined` \| ``null`` \| `string` ; `namespace`: `string` ; `nextBillingDate`: `undefined` \| ``null`` \| `string` ; `paid`: `undefined` \| ``null`` \| `boolean` ; `paymentFlowRequired`: `boolean` ; `paymentOrderNo`: `undefined` \| ``null`` \| `string` ; `paymentStationUrl`: `undefined` \| ``null`` \| `string` ; `price`: `undefined` \| ``null`` \| `number` ; `recurring`: { cycle: "WEEKLY" \| "MONTHLY" \| "QUARTERLY" \| "YEARLY"; fixedFreeDays: number; fixedTrialCycles: number; graceDays: number; } = Recurring; `region`: `undefined` \| ``null`` \| `string` ; `retryAttempted`: `undefined` \| ``null`` \| `number` ; `returnUrl`: `undefined` \| ``null`` \| `string` ; `sandbox`: `undefined` \| ``null`` \| `boolean` ; `sku`: `undefined` \| ``null`` \| `string` ; `source`: `undefined` \| ``null`` \| `string` ; `start`: `undefined` \| ``null`` \| `string` ; `status`: ``"ACTIVE"`` \| ``"INIT"`` \| ``"CANCELLED"`` \| ``"EXPIRED"`` ; `subscribedAt`: `undefined` \| ``null`` \| `string` ; `subscribedBy`: `undefined` \| ``null`` \| ``"USER"`` \| ``"PLATFORM"`` ; `title`: `undefined` \| ``null`` \| `string` ; `trialPrice`: `undefined` \| ``null`` \| `number` ; `trialedCycles`: `undefined` \| ``null`` \| `number` ; `unsubscribeReason`: `undefined` \| ``null`` \| `string` ; `unsubscribedAt`: `undefined` \| ``null`` \| `string` ; `updatedAt`: `string` ; `userId`: `string`  }\>\>

Get user subscription.<br>Other detail info: <ul><li><i>Required permission</i>: resource="NAMESPACE:{namespace}:USER:{userId}:SUBSCRIPTION", action=2 (READ)</li><li><i>Returns</i>: subscription</li></ul>

#### Parameters

| Name | Type |
| :------ | :------ |
| `__namedParameters` | `Object` |
| `__namedParameters.subscriptionId` | `string` |
| `__namedParameters.userId` | `string` |

#### Returns

`Promise`<`IResponseWithSync`<{ `billingAccount`: `undefined` \| ``null`` \| { paymentProvider?: "WALLET" \| "XSOLLA" \| "ADYEN" \| "STRIPE" \| "CHECKOUT" \| "ALIPAY" \| "WXPAY" \| "PAYPAL" \| null \| undefined; paymentMethod?: string \| null \| undefined; additionalData?: { ...; } \| ... 1 more ... \| undefined; } ; `chargeStatus`: ``"CHARGED"`` \| ``"NEVER"`` \| ``"SETUP"`` \| ``"RECURRING_CHARGING"`` \| ``"CHARGE_FAILED"`` ; `chargedCycles`: `undefined` \| ``null`` \| `number` ; `createdAt`: `string` ; `currency`: `undefined` \| ``null`` \| { namespace: string; currencyCode: string; currencySymbol: string; currencyType: "REAL" \| "VIRTUAL"; decimals: number; } ; `currentCycle`: `undefined` \| ``null`` \| `number` ; `currentPeriodEnd`: `undefined` \| ``null`` \| `string` ; `currentPeriodStart`: `undefined` \| ``null`` \| `string` ; `description`: `undefined` \| ``null`` \| `string` ; `end`: `undefined` \| ``null`` \| `string` ; `entitlements`: `undefined` \| ``null`` \| { endDate?: string \| null \| undefined; storeId?: string \| null \| undefined; itemId?: string \| null \| undefined; startDate?: string \| null \| undefined; stackable?: boolean \| null \| undefined; ... 8 more ...; clazz: "APP" \| ... 5 more ... \| "ENTITLEMENT"; }[] ; `firstSubscribe`: `undefined` \| ``null`` \| `boolean` ; `id`: `string` ; `inFixedCycleTrial`: `boolean` ; `inFixedFreeDays`: `boolean` ; `itemId`: `string` ; `itemSnapshot`: `undefined` \| ``null`` \| { createdAt?: string \| null \| undefined; updatedAt?: string \| null \| undefined; appId?: string \| null \| undefined; appType?: "GAME" \| "SOFTWARE" \| "DLC" \| "DEMO" \| null \| undefined; ... 29 more ...; region: string; } ; `language`: `undefined` \| ``null`` \| `string` ; `namespace`: `string` ; `nextBillingDate`: `undefined` \| ``null`` \| `string` ; `paid`: `undefined` \| ``null`` \| `boolean` ; `paymentFlowRequired`: `boolean` ; `paymentOrderNo`: `undefined` \| ``null`` \| `string` ; `paymentStationUrl`: `undefined` \| ``null`` \| `string` ; `price`: `undefined` \| ``null`` \| `number` ; `recurring`: { cycle: "WEEKLY" \| "MONTHLY" \| "QUARTERLY" \| "YEARLY"; fixedFreeDays: number; fixedTrialCycles: number; graceDays: number; } = Recurring; `region`: `undefined` \| ``null`` \| `string` ; `retryAttempted`: `undefined` \| ``null`` \| `number` ; `returnUrl`: `undefined` \| ``null`` \| `string` ; `sandbox`: `undefined` \| ``null`` \| `boolean` ; `sku`: `undefined` \| ``null`` \| `string` ; `source`: `undefined` \| ``null`` \| `string` ; `start`: `undefined` \| ``null`` \| `string` ; `status`: ``"ACTIVE"`` \| ``"INIT"`` \| ``"CANCELLED"`` \| ``"EXPIRED"`` ; `subscribedAt`: `undefined` \| ``null`` \| `string` ; `subscribedBy`: `undefined` \| ``null`` \| ``"USER"`` \| ``"PLATFORM"`` ; `title`: `undefined` \| ``null`` \| `string` ; `trialPrice`: `undefined` \| ``null`` \| `number` ; `trialedCycles`: `undefined` \| ``null`` \| `number` ; `unsubscribeReason`: `undefined` \| ``null`` \| `string` ; `unsubscribedAt`: `undefined` \| ``null`` \| `string` ; `updatedAt`: `string` ; `userId`: `string`  }\>\>

#### Defined in

[packages/sdk/src/api/platform/SubscriptionApi.ts:42](https://bitbucket.org/accelbyte/justice-odin/src/d39c8cbe8/accelbyte-web-sdk/packages/sdk/src/api/platform/SubscriptionApi.ts#lines-42)

___

### getUserSubscriptions

▸ **getUserSubscriptions**(`__namedParameters`): `Promise`<`IResponseWithSync`<{ `data`: { language?: string \| null \| undefined; description?: string \| null \| undefined; sku?: string \| null \| undefined; title?: string \| null \| undefined; price?: number \| null \| undefined; ... 37 more ...; paymentFlowRequired: boolean; }[] ; `paging`: `undefined` \| ``null`` \| { next?: string \| null \| undefined; previous?: string \| null \| undefined; }  }\>\>

Query user subscriptions.<br>Other detail info: <ul><li><i>Required permission</i>: resource="NAMESPACE:{namespace}:USER:{userId}:SUBSCRIPTION", action=2 (READ)</li><li><i>Returns</i>: paginated subscription</li></ul>

#### Parameters

| Name | Type |
| :------ | :------ |
| `__namedParameters` | `Object` |
| `__namedParameters.queryParams?` | `Object` |
| `__namedParameters.queryParams.chargeStatus?` | ``null`` \| `string` |
| `__namedParameters.queryParams.itemId?` | ``null`` \| `string` |
| `__namedParameters.queryParams.limit?` | `number` |
| `__namedParameters.queryParams.offset?` | `number` |
| `__namedParameters.queryParams.sku?` | ``null`` \| `string` |
| `__namedParameters.queryParams.status?` | ``null`` \| `string` |
| `__namedParameters.queryParams.subscribedBy?` | ``null`` \| `string` |
| `__namedParameters.userId` | `string` |

#### Returns

`Promise`<`IResponseWithSync`<{ `data`: { language?: string \| null \| undefined; description?: string \| null \| undefined; sku?: string \| null \| undefined; title?: string \| null \| undefined; price?: number \| null \| undefined; ... 37 more ...; paymentFlowRequired: boolean; }[] ; `paging`: `undefined` \| ``null`` \| { next?: string \| null \| undefined; previous?: string \| null \| undefined; }  }\>\>

#### Defined in

[packages/sdk/src/api/platform/SubscriptionApi.ts:21](https://bitbucket.org/accelbyte/justice-odin/src/d39c8cbe8/accelbyte-web-sdk/packages/sdk/src/api/platform/SubscriptionApi.ts#lines-21)

___

### updateUserSubscriptionPaymentMethod

▸ **updateUserSubscriptionPaymentMethod**(`__namedParameters`): `Promise`<`IResponse`<{ `billingAccount`: `undefined` \| ``null`` \| { paymentProvider?: "WALLET" \| "XSOLLA" \| "ADYEN" \| "STRIPE" \| "CHECKOUT" \| "ALIPAY" \| "WXPAY" \| "PAYPAL" \| null \| undefined; paymentMethod?: string \| null \| undefined; additionalData?: { ...; } \| ... 1 more ... \| undefined; } ; `chargeStatus`: ``"CHARGED"`` \| ``"NEVER"`` \| ``"SETUP"`` \| ``"RECURRING_CHARGING"`` \| ``"CHARGE_FAILED"`` ; `chargedCycles`: `undefined` \| ``null`` \| `number` ; `createdAt`: `string` ; `currency`: `undefined` \| ``null`` \| { namespace: string; currencyCode: string; currencySymbol: string; currencyType: "REAL" \| "VIRTUAL"; decimals: number; } ; `currentCycle`: `undefined` \| ``null`` \| `number` ; `currentPeriodEnd`: `undefined` \| ``null`` \| `string` ; `currentPeriodStart`: `undefined` \| ``null`` \| `string` ; `description`: `undefined` \| ``null`` \| `string` ; `end`: `undefined` \| ``null`` \| `string` ; `entitlements`: `undefined` \| ``null`` \| { endDate?: string \| null \| undefined; storeId?: string \| null \| undefined; itemId?: string \| null \| undefined; startDate?: string \| null \| undefined; stackable?: boolean \| null \| undefined; ... 8 more ...; clazz: "APP" \| ... 5 more ... \| "ENTITLEMENT"; }[] ; `firstSubscribe`: `undefined` \| ``null`` \| `boolean` ; `id`: `string` ; `inFixedCycleTrial`: `boolean` ; `inFixedFreeDays`: `boolean` ; `itemId`: `string` ; `itemSnapshot`: `undefined` \| ``null`` \| { createdAt?: string \| null \| undefined; updatedAt?: string \| null \| undefined; appId?: string \| null \| undefined; appType?: "GAME" \| "SOFTWARE" \| "DLC" \| "DEMO" \| null \| undefined; ... 29 more ...; region: string; } ; `language`: `undefined` \| ``null`` \| `string` ; `namespace`: `string` ; `nextBillingDate`: `undefined` \| ``null`` \| `string` ; `paid`: `undefined` \| ``null`` \| `boolean` ; `paymentFlowRequired`: `boolean` ; `paymentOrderNo`: `undefined` \| ``null`` \| `string` ; `paymentStationUrl`: `undefined` \| ``null`` \| `string` ; `price`: `undefined` \| ``null`` \| `number` ; `recurring`: { cycle: "WEEKLY" \| "MONTHLY" \| "QUARTERLY" \| "YEARLY"; fixedFreeDays: number; fixedTrialCycles: number; graceDays: number; } = Recurring; `region`: `undefined` \| ``null`` \| `string` ; `retryAttempted`: `undefined` \| ``null`` \| `number` ; `returnUrl`: `undefined` \| ``null`` \| `string` ; `sandbox`: `undefined` \| ``null`` \| `boolean` ; `sku`: `undefined` \| ``null`` \| `string` ; `source`: `undefined` \| ``null`` \| `string` ; `start`: `undefined` \| ``null`` \| `string` ; `status`: ``"ACTIVE"`` \| ``"INIT"`` \| ``"CANCELLED"`` \| ``"EXPIRED"`` ; `subscribedAt`: `undefined` \| ``null`` \| `string` ; `subscribedBy`: `undefined` \| ``null`` \| ``"USER"`` \| ``"PLATFORM"`` ; `title`: `undefined` \| ``null`` \| `string` ; `trialPrice`: `undefined` \| ``null`` \| `number` ; `trialedCycles`: `undefined` \| ``null`` \| `number` ; `unsubscribeReason`: `undefined` \| ``null`` \| `string` ; `unsubscribedAt`: `undefined` \| ``null`` \| `string` ; `updatedAt`: `string` ; `userId`: `string`  }\>\>

Request to change a subscription billing account, this will guide user to payment station. The actual change will happen at the 0 payment notification successfully handled.<br>Only ACTIVE USER subscription with real currency billing account can be changed.<br>Other detail info: <ul><li><i>Required permission</i>: resource="NAMESPACE:{namespace}:USER:{userId}:SUBSCRIPTION", action=4 (UPDATE)</li><li><i>Returns</i>: updated subscription</li></ul>

#### Parameters

| Name | Type |
| :------ | :------ |
| `__namedParameters` | `Object` |
| `__namedParameters.subscriptionId` | `string` |
| `__namedParameters.userId` | `string` |

#### Returns

`Promise`<`IResponse`<{ `billingAccount`: `undefined` \| ``null`` \| { paymentProvider?: "WALLET" \| "XSOLLA" \| "ADYEN" \| "STRIPE" \| "CHECKOUT" \| "ALIPAY" \| "WXPAY" \| "PAYPAL" \| null \| undefined; paymentMethod?: string \| null \| undefined; additionalData?: { ...; } \| ... 1 more ... \| undefined; } ; `chargeStatus`: ``"CHARGED"`` \| ``"NEVER"`` \| ``"SETUP"`` \| ``"RECURRING_CHARGING"`` \| ``"CHARGE_FAILED"`` ; `chargedCycles`: `undefined` \| ``null`` \| `number` ; `createdAt`: `string` ; `currency`: `undefined` \| ``null`` \| { namespace: string; currencyCode: string; currencySymbol: string; currencyType: "REAL" \| "VIRTUAL"; decimals: number; } ; `currentCycle`: `undefined` \| ``null`` \| `number` ; `currentPeriodEnd`: `undefined` \| ``null`` \| `string` ; `currentPeriodStart`: `undefined` \| ``null`` \| `string` ; `description`: `undefined` \| ``null`` \| `string` ; `end`: `undefined` \| ``null`` \| `string` ; `entitlements`: `undefined` \| ``null`` \| { endDate?: string \| null \| undefined; storeId?: string \| null \| undefined; itemId?: string \| null \| undefined; startDate?: string \| null \| undefined; stackable?: boolean \| null \| undefined; ... 8 more ...; clazz: "APP" \| ... 5 more ... \| "ENTITLEMENT"; }[] ; `firstSubscribe`: `undefined` \| ``null`` \| `boolean` ; `id`: `string` ; `inFixedCycleTrial`: `boolean` ; `inFixedFreeDays`: `boolean` ; `itemId`: `string` ; `itemSnapshot`: `undefined` \| ``null`` \| { createdAt?: string \| null \| undefined; updatedAt?: string \| null \| undefined; appId?: string \| null \| undefined; appType?: "GAME" \| "SOFTWARE" \| "DLC" \| "DEMO" \| null \| undefined; ... 29 more ...; region: string; } ; `language`: `undefined` \| ``null`` \| `string` ; `namespace`: `string` ; `nextBillingDate`: `undefined` \| ``null`` \| `string` ; `paid`: `undefined` \| ``null`` \| `boolean` ; `paymentFlowRequired`: `boolean` ; `paymentOrderNo`: `undefined` \| ``null`` \| `string` ; `paymentStationUrl`: `undefined` \| ``null`` \| `string` ; `price`: `undefined` \| ``null`` \| `number` ; `recurring`: { cycle: "WEEKLY" \| "MONTHLY" \| "QUARTERLY" \| "YEARLY"; fixedFreeDays: number; fixedTrialCycles: number; graceDays: number; } = Recurring; `region`: `undefined` \| ``null`` \| `string` ; `retryAttempted`: `undefined` \| ``null`` \| `number` ; `returnUrl`: `undefined` \| ``null`` \| `string` ; `sandbox`: `undefined` \| ``null`` \| `boolean` ; `sku`: `undefined` \| ``null`` \| `string` ; `source`: `undefined` \| ``null`` \| `string` ; `start`: `undefined` \| ``null`` \| `string` ; `status`: ``"ACTIVE"`` \| ``"INIT"`` \| ``"CANCELLED"`` \| ``"EXPIRED"`` ; `subscribedAt`: `undefined` \| ``null`` \| `string` ; `subscribedBy`: `undefined` \| ``null`` \| ``"USER"`` \| ``"PLATFORM"`` ; `title`: `undefined` \| ``null`` \| `string` ; `trialPrice`: `undefined` \| ``null`` \| `number` ; `trialedCycles`: `undefined` \| ``null`` \| `number` ; `unsubscribeReason`: `undefined` \| ``null`` \| `string` ; `unsubscribedAt`: `undefined` \| ``null`` \| `string` ; `updatedAt`: `string` ; `userId`: `string`  }\>\>

#### Defined in

[packages/sdk/src/api/platform/SubscriptionApi.ts:71](https://bitbucket.org/accelbyte/justice-odin/src/d39c8cbe8/accelbyte-web-sdk/packages/sdk/src/api/platform/SubscriptionApi.ts#lines-71)
