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

▸ **cancelUserSubscription**(`«destructured»`): `Promise`<`IResponse`<`SubscriptionInfo`\>\>

Cancel a subscription, only ACTIVE subscription can be cancelled. <b>Ensure successfully cancel, recommend at least 1 day before current period ends, otherwise it may be charging or charged.</b><br>Set immediate true, the subscription will be terminated immediately, otherwise till the end of current billing cycle.<br>Other detail info: <ul><li><i>Required permission</i>: resource="NAMESPACE:{namespace}:USER:{userId}:SUBSCRIPTION", action=4 (UPDATE)</li><li><i>Returns</i>: cancelled subscription</li></ul>

#### Parameters

| Name | Type |
| :------ | :------ |
| `«destructured»` | `Object` |
| › `data` | `CancelRequest` |
| › `subscriptionId` | `string` |
| › `userId` | `string` |

#### Returns

`Promise`<`IResponse`<`SubscriptionInfo`\>\>

#### Defined in

[packages/sdk/src/api/platform/SubscriptionApi.ts:70](https://github.com/AccelByte/accelbyte-web-sdk/blob/96dad9f/packages/sdk/src/api/platform/SubscriptionApi.ts#L70)

___

### createSubscription

▸ **createSubscription**(`«destructured»`): `Promise`<`IResponse`<`unknown`\>\>

Subscribe a subscription. Support both real and virtual payment. Need go through payment flow using the paymentOrderNo if paymentFlowRequired true.<br><b>ACTIVE USER subscription can't do subscribe again.</b><br><b>The next billing date will be X(default 4) hours before the current period ends if correctly subscribed.</b><br>User with permission SANDBOX will create sandbox subscription that not real paid.<br>Other detail info: <ul><li><i>Required permission</i>: resource="NAMESPACE:{namespace}:USER:{userId}:SUBSCRIPTION", action=1 (CREATE)</li><li><i>Optional permission(user with this permission will create sandbox subscription)</i>: resource="SANDBOX", action=1 (CREATE)</li><li>It will be forbidden while the user is banned: ORDER_INITIATE or ORDER_AND_PAYMENT</li><li><i>Returns</i>: created subscription</li></ul>

#### Parameters

| Name | Type |
| :------ | :------ |
| `«destructured»` | `Object` |
| › `data` | `SubscribeRequest` |
| › `userId` | `string` |

#### Returns

`Promise`<`IResponse`<`unknown`\>\>

#### Defined in

[packages/sdk/src/api/platform/SubscriptionApi.ts:41](https://github.com/AccelByte/accelbyte-web-sdk/blob/96dad9f/packages/sdk/src/api/platform/SubscriptionApi.ts#L41)

___

### getUserSubscriptionBillingHistory

▸ **getUserSubscriptionBillingHistory**(`«destructured»`): `Promise`<`IResponseWithSync`<`BillingHistoryPagingSlicedResult`\>\>

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

`Promise`<`IResponseWithSync`<`BillingHistoryPagingSlicedResult`\>\>

#### Defined in

[packages/sdk/src/api/platform/SubscriptionApi.ts:48](https://github.com/AccelByte/accelbyte-web-sdk/blob/96dad9f/packages/sdk/src/api/platform/SubscriptionApi.ts#L48)

___

### getUserSubscriptionBySubscriptionId

▸ **getUserSubscriptionBySubscriptionId**(`«destructured»`): `Promise`<`IResponseWithSync`<`SubscriptionInfo`\>\>

Get user subscription.<br>Other detail info: <ul><li><i>Required permission</i>: resource="NAMESPACE:{namespace}:USER:{userId}:SUBSCRIPTION", action=2 (READ)</li><li><i>Returns</i>: subscription</li></ul>

#### Parameters

| Name | Type |
| :------ | :------ |
| `«destructured»` | `Object` |
| › `subscriptionId` | `string` |
| › `userId` | `string` |

#### Returns

`Promise`<`IResponseWithSync`<`SubscriptionInfo`\>\>

#### Defined in

[packages/sdk/src/api/platform/SubscriptionApi.ts:34](https://github.com/AccelByte/accelbyte-web-sdk/blob/96dad9f/packages/sdk/src/api/platform/SubscriptionApi.ts#L34)

___

### getUserSubscriptions

▸ **getUserSubscriptions**(`«destructured»`): `Promise`<`IResponseWithSync`<`SubscriptionPagingSlicedResult`\>\>

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

`Promise`<`IResponseWithSync`<`SubscriptionPagingSlicedResult`\>\>

#### Defined in

[packages/sdk/src/api/platform/SubscriptionApi.ts:21](https://github.com/AccelByte/accelbyte-web-sdk/blob/96dad9f/packages/sdk/src/api/platform/SubscriptionApi.ts#L21)

___

### updateUserSubscriptionPaymentMethod

▸ **updateUserSubscriptionPaymentMethod**(`«destructured»`): `Promise`<`IResponse`<`SubscriptionInfo`\>\>

Request to change a subscription billing account, this will guide user to payment station. The actual change will happen at the 0 payment notification successfully handled.<br>Only ACTIVE USER subscription with real currency billing account can be changed.<br>Other detail info: <ul><li><i>Required permission</i>: resource="NAMESPACE:{namespace}:USER:{userId}:SUBSCRIPTION", action=4 (UPDATE)</li><li><i>Returns</i>: updated subscription</li></ul>

#### Parameters

| Name | Type |
| :------ | :------ |
| `«destructured»` | `Object` |
| › `subscriptionId` | `string` |
| › `userId` | `string` |

#### Returns

`Promise`<`IResponse`<`SubscriptionInfo`\>\>

#### Defined in

[packages/sdk/src/api/platform/SubscriptionApi.ts:63](https://github.com/AccelByte/accelbyte-web-sdk/blob/96dad9f/packages/sdk/src/api/platform/SubscriptionApi.ts#L63)
