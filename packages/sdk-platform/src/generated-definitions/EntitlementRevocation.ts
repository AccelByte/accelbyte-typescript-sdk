/*
 * Copyright (c) 2022-2024 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { z } from 'zod'

export const EntitlementRevocation = z.object({
  customRevocation: z.record(z.any()).nullish(),
  entitlementId: z.string().nullish(),
  itemId: z.string().nullish(),
  itemSku: z.string().nullish(),
  quantity: z.number().int().nullish(),
  reason: z.string().nullish(),
  revocationStrategy: z.string().nullish(),
  skipped: z.boolean().nullish(),
  status: z.enum(['FAIL', 'SUCCESS']).nullish()
})

export interface EntitlementRevocation extends z.TypeOf<typeof EntitlementRevocation> {}
