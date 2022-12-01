/*
 * Copyright (c) 2022 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { z } from 'zod'

export const EntitlementGrant = z.object({
  storeId: z.string().nullish(),
  itemId: z.string(),
  grantedCode: z.string().nullish(),
  itemNamespace: z.string(),
  quantity: z.number().int(),
  source: z.enum(['PURCHASE', 'IAP', 'PROMOTION', 'ACHIEVEMENT', 'REFERRAL_BONUS', 'REDEEM_CODE', 'REWARD', 'GIFT', 'OTHER']).nullish(),
  startDate: z.string().nullish(),
  endDate: z.string().nullish(),
  region: z.string().nullish(),
  language: z.string().nullish()
})

export type EntitlementGrant = z.TypeOf<typeof EntitlementGrant>
