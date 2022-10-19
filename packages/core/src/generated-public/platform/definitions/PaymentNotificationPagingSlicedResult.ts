/*
 * Copyright (c) 2022 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { z } from 'zod'
import { Paging } from './Paging'
import { PaymentNotificationInfo } from './PaymentNotificationInfo'

export const PaymentNotificationPagingSlicedResult = z.object({ data: z.array(PaymentNotificationInfo), paging: Paging.nullish() })

export type PaymentNotificationPagingSlicedResult = z.TypeOf<typeof PaymentNotificationPagingSlicedResult>
