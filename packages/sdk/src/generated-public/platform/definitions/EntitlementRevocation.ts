/*
 * Copyright (c) 2022-2023 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { z } from 'zod'

export const EntitlementRevocation = z.object({
  entitlementId: z.string().nullish(),
  status: z.enum(['SUCCESS', 'FAIL']).nullish(),
  quantity: z.number().int().nullish(),
  itemId: z.string().nullish(),
  itemSku: z.string().nullish(),
  revocationStrategy: z.string().nullish(),
  skipped: z.boolean().nullish(),
  reason: z.string().nullish(),
  customRevocation: z.record(z.any()).nullish()
})

export interface EntitlementRevocation extends z.TypeOf<typeof EntitlementRevocation> {}
