/*
 * Copyright (c) 2022-2026 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { z } from 'zod'
import { ConditionGroup } from './ConditionGroup.js'

export const PurchaseCondition = z.object({ conditionGroups: z.array(ConditionGroup).nullish() })

export interface PurchaseCondition extends z.TypeOf<typeof PurchaseCondition> {}
