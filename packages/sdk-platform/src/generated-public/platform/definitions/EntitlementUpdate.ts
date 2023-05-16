/*
 * Copyright (c) 2022-2023 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { z } from 'zod'

export const EntitlementUpdate = z.object({
  endDate: z.string().nullish(),
  nullFieldList: z.array(z.string()).nullish(),
  startDate: z.string().nullish(),
  status: z.enum(['ACTIVE', 'CONSUMED', 'INACTIVE', 'REVOKED', 'SOLD']).nullish(),
  useCount: z.number().int().nullish()
})

export interface EntitlementUpdate extends z.TypeOf<typeof EntitlementUpdate> {}
