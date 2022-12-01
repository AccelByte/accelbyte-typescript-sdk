/*
 * Copyright (c) 2022 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { z } from 'zod'
import { PurchaseCondition } from './PurchaseCondition'

export const PurchaseConditionUpdate = z.object({ purchaseCondition: PurchaseCondition.nullish() })

export type PurchaseConditionUpdate = z.TypeOf<typeof PurchaseConditionUpdate>
