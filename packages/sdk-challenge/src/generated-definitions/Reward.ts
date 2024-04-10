/*
 * Copyright (c) 2022-2024 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { z } from 'zod'

export const Reward = z.object({ itemId: z.string(), itemName: z.string(), qty: z.number(), type: z.enum(['ENTITLEMENT', 'STATISTIC']) })

export interface Reward extends z.TypeOf<typeof Reward> {}
