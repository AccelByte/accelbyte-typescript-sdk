/*
 * Copyright (c) 2022-2026 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { z } from 'zod'
import { AvailablePrice } from './AvailablePrice.js'

export const EstimatedPriceInfo = z.object({
  estimatedPrices: z.array(AvailablePrice).nullish(),
  itemId: z.string(),
  region: z.string().nullish()
})

export interface EstimatedPriceInfo extends z.TypeOf<typeof EstimatedPriceInfo> {}
