/*
 * Copyright (c) 2022-2026 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { z } from 'zod'

export const GetUserGroupInformationResponseV1 = z.object({
  groupId: z.string(),
  joinedAt: z.string(),
  memberRoleId: z.array(z.string()),
  status: z.string().nullish(),
  userId: z.string()
})

export interface GetUserGroupInformationResponseV1 extends z.TypeOf<typeof GetUserGroupInformationResponseV1> {}
