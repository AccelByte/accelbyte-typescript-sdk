/*
 * Copyright (c) 2022-2024 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { z } from 'zod'

export const PlatformAccountClosureClientResponse = z.object({
  clientId: z.string(),
  namespace: z.string(),
  platform: z.string(),
  secret: z.string(),
  updatedAt: z.number().int()
})

export interface PlatformAccountClosureClientResponse extends z.TypeOf<typeof PlatformAccountClosureClientResponse> {}
