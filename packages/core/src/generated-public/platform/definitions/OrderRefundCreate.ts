/*
 * Copyright (c) 2022 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { z } from 'zod'

export const OrderRefundCreate = z.object({ description: z.string() })

export type OrderRefundCreate = z.TypeOf<typeof OrderRefundCreate>
