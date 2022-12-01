/*
 * Copyright (c) 2022 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { z } from 'zod'

export const PaymentAccount = z.object({ id: z.string(), type: z.enum(['card', 'paypal']), name: z.string() })

export type PaymentAccount = z.TypeOf<typeof PaymentAccount>
