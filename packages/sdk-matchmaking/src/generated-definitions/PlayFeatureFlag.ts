/*
 * Copyright (c) 2022-2025 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { z } from 'zod'

export const PlayFeatureFlag = z.object({
  ENABLE_AUTO_CANCEL_MATCH_USER_DISCONNECT: z.boolean(),
  ENABLE_AUTO_CANCEL_MATCH_USER_LEAVE: z.boolean()
})

export interface PlayFeatureFlag extends z.TypeOf<typeof PlayFeatureFlag> {}
