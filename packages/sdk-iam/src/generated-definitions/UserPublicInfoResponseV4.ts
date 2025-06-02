/*
 * Copyright (c) 2022-2025 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { z } from 'zod'

export const UserPublicInfoResponseV4 = z.object({
  avatarUrl: z.string().nullish(),
  displayName: z.string(),
  uniqueDisplayName: z.string().nullish(),
  userId: z.string()
})

export interface UserPublicInfoResponseV4 extends z.TypeOf<typeof UserPublicInfoResponseV4> {}
