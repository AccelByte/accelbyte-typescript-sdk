/*
 * Copyright (c) 2022-2023 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { z } from 'zod'
import { UserPlatformInfo } from './UserPlatformInfo'

export const PlayerAttributesRequestBody = z.object({
  crossplayEnabled: z.boolean(),
  currentPlatform: z.string(),
  data: z.record(z.any()),
  platforms: z.array(UserPlatformInfo)
})

export interface PlayerAttributesRequestBody extends z.TypeOf<typeof PlayerAttributesRequestBody> {}
