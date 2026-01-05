/*
 * Copyright (c) 2022-2026 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { z } from 'zod'
import { GroupRuleGroupCustomRule } from './GroupRuleGroupCustomRule.js'
import { Rule } from './Rule.js'

export const GroupRule = z.object({ groupCustomRule: GroupRuleGroupCustomRule, groupPredefinedRules: z.array(Rule) })

export interface GroupRule extends z.TypeOf<typeof GroupRule> {}
