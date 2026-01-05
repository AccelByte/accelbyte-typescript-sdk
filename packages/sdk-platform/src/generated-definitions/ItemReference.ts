/*
 * Copyright (c) 2022-2026 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { z } from 'zod'

export const ItemReference = z.object({
  codeRedemptionId: z.string().nullish(),
  conditionName: z.string().nullish(),
  dlcId: z.string().nullish(),
  itemId: z.string().nullish(),
  namespace: z.string().nullish(),
  platform: z.string().nullish(),
  platformProductId: z.string().nullish(),
  referenceId: z.string().nullish(),
  rewardCode: z.string().nullish(),
  storeId: z.string().nullish()
})

export interface ItemReference extends z.TypeOf<typeof ItemReference> {}
