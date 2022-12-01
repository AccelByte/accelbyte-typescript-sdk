/*
 * Copyright (c) 2022 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { z } from 'zod'
import { Order } from './Order'

export const OrderSyncResult = z.object({ orders: z.array(Order).nullish(), nextEvaluatedKey: z.string().nullish() })

export type OrderSyncResult = z.TypeOf<typeof OrderSyncResult>
