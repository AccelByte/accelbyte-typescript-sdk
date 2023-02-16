/*
 * Copyright (c) 2022-2023 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { z } from 'zod'

export const UserBaseInfo = z.object({
  avatarUrl: z.string(),
  displayName: z.string(),
  platformUserIds: z.record(z.string()),
  userId: z.string(),
  username: z.string().nullish()
})

export interface UserBaseInfo extends z.TypeOf<typeof UserBaseInfo> {}
