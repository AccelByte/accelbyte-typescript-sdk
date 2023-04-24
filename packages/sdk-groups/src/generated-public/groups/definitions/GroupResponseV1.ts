/*
 * Copyright (c) 2022-2023 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { z } from 'zod'
import { GroupMember } from './GroupMember'
import { GroupRuleResponseV1 } from './GroupRuleResponseV1'

export const GroupResponseV1 = z.object({
  configurationCode: z.string(),
  createdAt: z.string(),
  customAttributes: z.record(z.any()),
  groupDescription: z.string(),
  groupIcon: z.string(),
  groupId: z.string(),
  groupMaxMember: z.number().int(),
  groupMembers: z.array(GroupMember),
  groupName: z.string(),
  groupRegion: z.string(),
  groupRules: GroupRuleResponseV1,
  groupType: z.enum(['OPEN', 'PUBLIC', 'PRIVATE'])
})

export interface GroupResponseV1 extends z.TypeOf<typeof GroupResponseV1> {}
