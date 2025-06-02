/*
 * Copyright (c) 2022-2025 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { z } from 'zod'
import { UserPlatformInfo } from './UserPlatformInfo.js'

export const PlayerAttributesResponseBody = z.object({
  crossplayEnabled: z.boolean(),
  currentPlatform: z.string(),
  data: z.record(z.any()),
  platforms: z.array(UserPlatformInfo),
  roles: z.array(z.string()),
  userID: z.string()
})

export interface PlayerAttributesResponseBody extends z.TypeOf<typeof PlayerAttributesResponseBody> {}
