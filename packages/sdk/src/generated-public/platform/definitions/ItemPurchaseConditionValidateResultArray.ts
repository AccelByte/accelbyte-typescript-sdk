/*
 * Copyright (c) 2022-2023 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { z } from 'zod'
import { ItemPurchaseConditionValidateResult } from './ItemPurchaseConditionValidateResult'

export const ItemPurchaseConditionValidateResultArray = z.array(ItemPurchaseConditionValidateResult)

export interface ItemPurchaseConditionValidateResultArray extends z.TypeOf<typeof ItemPurchaseConditionValidateResultArray> {}
