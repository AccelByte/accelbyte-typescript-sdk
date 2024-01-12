/*
 * Copyright (c) 2022-2024 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { z } from 'zod'
import { RuleResponseV1 } from './RuleResponseV1.js'

export const UpdateGroupConfigurationResponseV1 = z.object({
  allowMultiple: z.boolean(),
  configurationCode: z.string(),
  description: z.string(),
  globalRules: z.array(RuleResponseV1),
  groupAdminRoleId: z.string(),
  groupMaxMember: z.number().int(),
  groupMemberRoleId: z.string(),
  name: z.string()
})

export interface UpdateGroupConfigurationResponseV1 extends z.TypeOf<typeof UpdateGroupConfigurationResponseV1> {}
