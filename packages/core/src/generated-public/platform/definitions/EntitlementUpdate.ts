/*
 * Copyright (c) 2022 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { z } from 'zod'

export const EntitlementUpdate = z.object({
  nullFieldList: z.array(z.string()).nullish(),
  status: z.enum(['ACTIVE', 'INACTIVE', 'CONSUMED', 'REVOKED']).nullish(),
  useCount: z.number().int().nullish(),
  startDate: z.string().nullish(),
  endDate: z.string().nullish()
})

export type EntitlementUpdate = z.TypeOf<typeof EntitlementUpdate>
