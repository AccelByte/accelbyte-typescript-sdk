/* Copyright (c) 2022 AccelByte Inc. All Rights Reserved.
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { BillingHistoryInfo } from '../generated-public/platform/definitions/BillingHistoryInfo'
import { Order } from '../generated-public/platform/definitions/Order'
import { SubscriptionInfo } from '../generated-public/platform/definitions/SubscriptionInfo'

// ts-prune-ignore-next
export const OrderStatus = Order.shape.status.unwrap().unwrap()
// ts-prune-ignore-next
export const SubscriptionStatus = SubscriptionInfo.shape.status
// ts-prune-ignore-next
export const SubscriptionChargeStatus = SubscriptionInfo.shape.chargeStatus
// ts-prune-ignore-next
export const BillingHistoryChargeStatus = BillingHistoryInfo.shape.status
