/*
 * Copyright (c) 2022 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { z } from 'zod'

export const ItemTypeConfigInfo = z.object({
  id: z.string(),
  itemType: z.enum(['APP', 'COINS', 'INGAMEITEM', 'BUNDLE', 'CODE', 'SUBSCRIPTION', 'SEASON', 'MEDIA', 'OPTIONBOX', 'EXTENSION']),
  clazz: z.string().nullish(),
  fulfillmentUrl: z.string(),
  purchaseConditionUrl: z.string().nullish(),
  dryRun: z.boolean().nullish(),
  createdAt: z.string(),
  updatedAt: z.string()
})

export type ItemTypeConfigInfo = z.TypeOf<typeof ItemTypeConfigInfo>
