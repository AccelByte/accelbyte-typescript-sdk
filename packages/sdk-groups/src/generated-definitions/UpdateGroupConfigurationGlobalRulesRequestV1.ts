/*
 * Copyright (c) 2022-2024 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { z } from 'zod'
import { RuleInformation } from './RuleInformation.js'

export const UpdateGroupConfigurationGlobalRulesRequestV1 = z.object({ ruleDetail: z.array(RuleInformation) })

export interface UpdateGroupConfigurationGlobalRulesRequestV1 extends z.TypeOf<typeof UpdateGroupConfigurationGlobalRulesRequestV1> {}
