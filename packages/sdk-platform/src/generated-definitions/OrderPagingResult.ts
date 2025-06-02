/*
 * Copyright (c) 2022-2025 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { z } from 'zod'
import { OrderInfo } from './OrderInfo.js'
import { Paging } from './Paging.js'

export const OrderPagingResult = z.object({ data: z.array(OrderInfo), paging: Paging.nullish(), total: z.number().int().nullish() })

export interface OrderPagingResult extends z.TypeOf<typeof OrderPagingResult> {}
