/*
 * Copyright (c) 2022 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { z } from 'zod'

export const ItemTypeConfigUpdate = z.object({
  clazz: z.string().nullish(),
  fulfillmentUrl: z.string(),
  purchaseConditionUrl: z.string().nullish(),
  dryRun: z.boolean().nullish()
})

export type ItemTypeConfigUpdate = z.TypeOf<typeof ItemTypeConfigUpdate>
