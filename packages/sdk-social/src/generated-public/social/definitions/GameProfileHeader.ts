/*
 * Copyright (c) 2022-2024 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { z } from 'zod'

export const GameProfileHeader = z.object({
  avatarUrl: z.string().nullish(),
  label: z.string().nullish(),
  namespace: z.string().nullish(),
  profileId: z.string().nullish(),
  profileName: z.string().nullish(),
  tags: z.array(z.string()).nullish(),
  userId: z.string().nullish()
})

export interface GameProfileHeader extends z.TypeOf<typeof GameProfileHeader> {}
