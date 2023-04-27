/*
 * Copyright (c) 2022-2023 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { z } from 'zod'
import { Paging } from './Paging.js'
import { PaymentOrderInfo } from './PaymentOrderInfo.js'

export const PaymentOrderPagingSlicedResult = z.object({ data: z.array(PaymentOrderInfo), paging: Paging.nullish() })

export interface PaymentOrderPagingSlicedResult extends z.TypeOf<typeof PaymentOrderPagingSlicedResult> {}
