/*
 * Copyright (c) 2022-2025 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { z } from 'zod'

export const PlatformAccountClosureClientResponse = z.object({
  bpCertExpireAt: z.number().int().nullish(),
  bpCertFileName: z.string().nullish(),
  clientId: z.string().nullish(),
  namespace: z.string(),
  platform: z.string(),
  publisherKey: z.string().nullish(),
  sandboxId: z.string().nullish(),
  secret: z.string().nullish(),
  updatedAt: z.number().int()
})

export interface PlatformAccountClosureClientResponse extends z.TypeOf<typeof PlatformAccountClosureClientResponse> {}
