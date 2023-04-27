/*
 * Copyright (c) 2022-2023 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { z } from 'zod'
import { UpdateGroupRequestV1CustomAttributes } from './UpdateGroupRequestV1CustomAttributes.js'

export const UpdateGroupRequestV1 = z.object({
  customAttributes: UpdateGroupRequestV1CustomAttributes,
  groupDescription: z.string(),
  groupIcon: z.string(),
  groupName: z.string(),
  groupRegion: z.string(),
  groupType: z.enum(['OPEN', 'PUBLIC', 'PRIVATE'])
})

export interface UpdateGroupRequestV1 extends z.TypeOf<typeof UpdateGroupRequestV1> {}
