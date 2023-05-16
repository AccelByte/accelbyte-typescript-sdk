/*
 * Copyright (c) 2022-2023 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { z } from 'zod'
import { GroupRule } from './GroupRule.js'

export const PublicCreateNewGroupRequestV1 = z.object({
  configurationCode: z.string(),
  customAttributes: z.record(z.any()),
  groupDescription: z.string(),
  groupIcon: z.string(),
  groupMaxMember: z.number().int(),
  groupName: z.string(),
  groupRegion: z.string(),
  groupRules: GroupRule,
  groupType: z.enum(['OPEN', 'PRIVATE', 'PUBLIC'])
})

export interface PublicCreateNewGroupRequestV1 extends z.TypeOf<typeof PublicCreateNewGroupRequestV1> {}
