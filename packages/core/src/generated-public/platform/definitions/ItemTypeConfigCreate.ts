/*
 * Copyright (c) 2022 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { z } from 'zod'

export const ItemTypeConfigCreate = z.object({
  itemType: z.enum(['APP', 'COINS', 'INGAMEITEM', 'BUNDLE', 'CODE', 'SUBSCRIPTION', 'SEASON', 'MEDIA', 'OPTIONBOX', 'EXTENSION']),
  clazz: z.string().nullish(),
  fulfillmentUrl: z.string(),
  purchaseConditionUrl: z.string().nullish(),
  dryRun: z.boolean().nullish()
})

export type ItemTypeConfigCreate = z.TypeOf<typeof ItemTypeConfigCreate>
