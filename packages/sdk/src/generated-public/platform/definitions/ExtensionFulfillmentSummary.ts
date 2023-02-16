/*
 * Copyright (c) 2022-2023 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { z } from 'zod'

export const ExtensionFulfillmentSummary = z.object({
  namespace: z.string().nullish(),
  userId: z.string().nullish(),
  itemId: z.string().nullish(),
  itemType: z
    .enum(['APP', 'COINS', 'INGAMEITEM', 'BUNDLE', 'CODE', 'SUBSCRIPTION', 'SEASON', 'MEDIA', 'OPTIONBOX', 'EXTENSION', 'LOOTBOX'])
    .nullish(),
  itemClazz: z.string().nullish(),
  itemExt: z.record(z.any()).nullish(),
  metadata: z.record(z.any()).nullish(),
  quantity: z.number().int(),
  grantedAt: z.string().nullish()
})

export interface ExtensionFulfillmentSummary extends z.TypeOf<typeof ExtensionFulfillmentSummary> {}
