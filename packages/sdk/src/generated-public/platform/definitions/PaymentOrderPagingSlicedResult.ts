/*
 * Copyright (c) 2022 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { z } from 'zod'
import { Paging } from './Paging'
import { PaymentOrderInfo } from './PaymentOrderInfo'

export const PaymentOrderPagingSlicedResult = z.object({ data: z.array(PaymentOrderInfo), paging: Paging.nullish() })

export type PaymentOrderPagingSlicedResult = z.TypeOf<typeof PaymentOrderPagingSlicedResult>
