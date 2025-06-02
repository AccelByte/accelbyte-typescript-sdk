/*
 * Copyright (c) 2022-2025 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { z } from 'zod'

export const ExtensionFulfillmentSummary = z.object({
  grantedAt: z.string().nullish(),
  itemClazz: z.string().nullish(),
  itemExt: z.record(z.any()).nullish(),
  itemId: z.string().nullish(),
  itemType: z
    .enum(['APP', 'BUNDLE', 'CODE', 'COINS', 'EXTENSION', 'INGAMEITEM', 'LOOTBOX', 'MEDIA', 'OPTIONBOX', 'SEASON', 'SUBSCRIPTION'])
    .nullish(),
  metadata: z.record(z.any()).nullish(),
  namespace: z.string().nullish(),
  quantity: z.number().int(),
  userId: z.string().nullish()
})

export interface ExtensionFulfillmentSummary extends z.TypeOf<typeof ExtensionFulfillmentSummary> {}
