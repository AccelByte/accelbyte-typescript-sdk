/*
 * Copyright (c) 2022-2024 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { z } from 'zod'

export const EntitlementGrant = z.object({
  collectionId: z.string().nullish(),
  endDate: z.string().nullish(),
  grantedCode: z.string().nullish(),
  itemId: z.string(),
  itemNamespace: z.string(),
  language: z.string().nullish(),
  metadata: z.record(z.any()).nullish(),
  origin: z
    .enum(['Epic', 'GooglePlay', 'IOS', 'Nintendo', 'Oculus', 'Other', 'Playstation', 'Steam', 'System', 'Twitch', 'Xbox'])
    .nullish(),
  quantity: z.number().int(),
  region: z.string().nullish(),
  source: z.enum(['ACHIEVEMENT', 'GIFT', 'IAP', 'OTHER', 'PROMOTION', 'PURCHASE', 'REDEEM_CODE', 'REFERRAL_BONUS', 'REWARD']).nullish(),
  startDate: z.string().nullish(),
  storeId: z.string().nullish()
})

export interface EntitlementGrant extends z.TypeOf<typeof EntitlementGrant> {}
