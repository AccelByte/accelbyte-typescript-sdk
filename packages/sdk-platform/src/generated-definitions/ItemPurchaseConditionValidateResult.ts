/*
 * Copyright (c) 2022-2024 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { z } from 'zod'
import { ConditionGroupValidateResult } from './ConditionGroupValidateResult.js'

export const ItemPurchaseConditionValidateResult = z.object({
  itemId: z.string().nullish(),
  purchasable: z.boolean().nullish(),
  sku: z.string().nullish(),
  validateDetails: z.array(ConditionGroupValidateResult).nullish()
})

export interface ItemPurchaseConditionValidateResult extends z.TypeOf<typeof ItemPurchaseConditionValidateResult> {}
