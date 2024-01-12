/*
 * Copyright (c) 2022-2024 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { z } from 'zod'
import { Rule } from './Rule.js'

export const CreateGroupConfigurationRequestV1 = z.object({
  allowMultiple: z.boolean(),
  configurationCode: z.string(),
  description: z.string(),
  globalRules: z.array(Rule),
  groupAdminRoleId: z.string(),
  groupMaxMember: z.number().int(),
  groupMemberRoleId: z.string(),
  name: z.string()
})

export interface CreateGroupConfigurationRequestV1 extends z.TypeOf<typeof CreateGroupConfigurationRequestV1> {}
