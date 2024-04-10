/*
 * Copyright (c) 2022-2024 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { z } from 'zod'

export const UserResponse = z.object({
  id: z.string(),
  platformID: z.string(),
  platformUserID: z.string(),
  previousStatus: z.string().nullish(),
  status: z.string(),
  statusV2: z.string(),
  updatedAt: z.string()
})

export interface UserResponse extends z.TypeOf<typeof UserResponse> {}
