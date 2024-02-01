/*
 * Copyright (c) 2022-2024 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { z } from 'zod'

export const NativeFriendRequest = z.object({
  isLogin: z.boolean(),
  platformId: z.string(),
  platformToken: z.string().nullish(),
  psnEnv: z.string().nullish()
})

export interface NativeFriendRequest extends z.TypeOf<typeof NativeFriendRequest> {}
