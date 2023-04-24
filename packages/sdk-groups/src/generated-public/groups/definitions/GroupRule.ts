/*
 * Copyright (c) 2022-2023 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { z } from 'zod'
import { GroupRuleGroupCustomRule } from './GroupRuleGroupCustomRule'
import { Rule } from './Rule'

export const GroupRule = z.object({ groupCustomRule: GroupRuleGroupCustomRule, groupPredefinedRules: z.array(Rule) })

export interface GroupRule extends z.TypeOf<typeof GroupRule> {}
