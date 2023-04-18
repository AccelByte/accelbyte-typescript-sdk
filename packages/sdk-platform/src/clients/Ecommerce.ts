/*
 * Copyright (c) 2022-2023 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */

import { Order } from '../generated-public/platform/definitions/Order'

export const OrderStatus = Order.shape.status.unwrap().unwrap()
// export const SubscriptionStatus = SubscriptionInfo.shape.status
// export const SubscriptionChargeStatus = SubscriptionInfo.shape.chargeStatus
// export const BillingHistoryChargeStatus = BillingHistoryInfo.shape.status
