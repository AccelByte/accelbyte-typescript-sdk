/*
 * Copyright (c) 2022 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { z } from 'zod'
import { ConditionGroupValidateResult } from './ConditionGroupValidateResult'

export const ItemPurchaseConditionValidateResult = z.object({
  itemId: z.string().nullish(),
  sku: z.string().nullish(),
  purchasable: z.boolean().nullish(),
  validateDetails: z.array(ConditionGroupValidateResult).nullish()
})

export type ItemPurchaseConditionValidateResult = z.TypeOf<typeof ItemPurchaseConditionValidateResult>
