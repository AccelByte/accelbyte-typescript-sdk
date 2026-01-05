/*
 * Copyright (c) 2022-2026 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { z } from 'zod'

export const OrderStatistics = z.object({ statusCount: z.record(z.number().int()), total: z.number().int() })

export interface OrderStatistics extends z.TypeOf<typeof OrderStatistics> {}
