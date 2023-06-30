/*
 * Copyright (c) 2022-2023 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { z } from 'zod'

export const CreateMockTicket = z.object({
  attribute_name: z.string(),
  count: z.number().int(),
  mmrMax: z.number(),
  mmrMean: z.number(),
  mmrMin: z.number(),
  mmrStdDev: z.number()
})

export interface CreateMockTicket extends z.TypeOf<typeof CreateMockTicket> {}
