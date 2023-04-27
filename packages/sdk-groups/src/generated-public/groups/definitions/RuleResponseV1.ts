/*
 * Copyright (c) 2022-2023 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { z } from 'zod'
import { RuleInformation } from './RuleInformation.js'

export const RuleResponseV1 = z.object({ allowedAction: z.string(), ruleDetail: z.array(RuleInformation) })

export interface RuleResponseV1 extends z.TypeOf<typeof RuleResponseV1> {}
