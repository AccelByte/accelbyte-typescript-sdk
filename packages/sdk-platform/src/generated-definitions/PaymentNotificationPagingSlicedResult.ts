/*
 * Copyright (c) 2022-2024 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { z } from 'zod'
import { Paging } from './Paging.js'
import { PaymentNotificationInfo } from './PaymentNotificationInfo.js'

export const PaymentNotificationPagingSlicedResult = z.object({ data: z.array(PaymentNotificationInfo), paging: Paging.nullish() })

export interface PaymentNotificationPagingSlicedResult extends z.TypeOf<typeof PaymentNotificationPagingSlicedResult> {}
