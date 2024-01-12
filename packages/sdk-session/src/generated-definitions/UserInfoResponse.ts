/*
 * Copyright (c) 2022-2024 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { z } from 'zod'

export const UserInfoResponse = z.object({
  lastPlayedTime: z.string().nullish(),
  namespace: z.string().nullish(),
  platformName: z.string().nullish(),
  userID: z.string().nullish()
})

export interface UserInfoResponse extends z.TypeOf<typeof UserInfoResponse> {}
