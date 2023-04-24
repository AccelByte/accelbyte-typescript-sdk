/*
 * Copyright (c) 2022-2023 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { z } from 'zod'

export const GameProfilePublicInfo = z.object({
  profileId: z.string().nullish(),
  namespace: z.string().nullish(),
  profileName: z.string().nullish(),
  avatarUrl: z.string().nullish()
})

export interface GameProfilePublicInfo extends z.TypeOf<typeof GameProfilePublicInfo> {}
