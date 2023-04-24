/*
 * Copyright (c) 2022-2023 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { z } from 'zod'
import { RuleInformation } from './RuleInformation'

export const Rule = z.object({ allowedAction: z.string(), ruleDetail: z.array(RuleInformation) })

export interface Rule extends z.TypeOf<typeof Rule> {}
