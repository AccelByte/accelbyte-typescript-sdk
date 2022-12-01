/*
 * Copyright (c) 2022 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { z } from 'zod'

export const OrderStatistics = z.object({ total: z.number().int(), statusCount: z.record(z.number().int()) })

export type OrderStatistics = z.TypeOf<typeof OrderStatistics>
