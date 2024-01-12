/*
 * Copyright (c) 2022-2024 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { z } from 'zod'
import { Order } from './Order.js'

export const OrderSyncResult = z.object({ nextEvaluatedKey: z.string().nullish(), orders: z.array(Order).nullish() })

export interface OrderSyncResult extends z.TypeOf<typeof OrderSyncResult> {}
