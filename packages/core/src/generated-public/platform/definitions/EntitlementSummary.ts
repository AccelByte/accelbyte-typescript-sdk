/*
 * Copyright (c) 2022 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { z } from 'zod'

export const EntitlementSummary = z.object({
  id: z.string(),
  namespace: z.string(),
  userId: z.string(),
  clazz: z.enum(['APP', 'ENTITLEMENT', 'CODE', 'SUBSCRIPTION', 'MEDIA', 'OPTIONBOX']),
  type: z.enum(['DURABLE', 'CONSUMABLE']),
  stackable: z.boolean().nullish(),
  stackedUseCount: z.number().int().nullish(),
  storeId: z.string().nullish(),
  itemId: z.string().nullish(),
  createdAt: z.string(),
  updatedAt: z.string(),
  grantedCode: z.string().nullish(),
  startDate: z.string().nullish(),
  endDate: z.string().nullish()
})

export type EntitlementSummary = z.TypeOf<typeof EntitlementSummary>
