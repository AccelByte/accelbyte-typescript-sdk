/*
 * Copyright (c) 2022-2025 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { z } from 'zod'

export const ChannelResponse = z.object({
  id: z.string(),
  name: z.string(),
  namespace: z.string(),
  parentNamespace: z.string().nullish(),
  userId: z.string()
})

export interface ChannelResponse extends z.TypeOf<typeof ChannelResponse> {}
