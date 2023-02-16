/*
 * Copyright (c) 2022-2023 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { z } from 'zod'

export const PaymentOrderRefund = z.object({ description: z.string() })

export interface PaymentOrderRefund extends z.TypeOf<typeof PaymentOrderRefund> {}
