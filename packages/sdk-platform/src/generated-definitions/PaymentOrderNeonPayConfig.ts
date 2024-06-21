/*
 * Copyright (c) 2022-2024 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { z } from 'zod'

export const PaymentOrderNeonPayConfig = z.object({ cancelUrl: z.string(), successUrl: z.string() })

export interface PaymentOrderNeonPayConfig extends z.TypeOf<typeof PaymentOrderNeonPayConfig> {}
