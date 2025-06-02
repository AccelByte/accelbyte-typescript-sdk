/*
 * Copyright (c) 2022-2025 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { z } from 'zod'
import { GroupRuleResponseV1GroupCustomRule } from './GroupRuleResponseV1GroupCustomRule.js'
import { RuleResponseV1 } from './RuleResponseV1.js'

export const GroupRuleResponseV1 = z.object({
  groupCustomRule: GroupRuleResponseV1GroupCustomRule,
  groupPredefinedRules: z.array(RuleResponseV1)
})

export interface GroupRuleResponseV1 extends z.TypeOf<typeof GroupRuleResponseV1> {}
