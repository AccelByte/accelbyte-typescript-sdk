/*
 * Copyright (c) 2022-2026 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { z } from 'zod'

export const PublicConfigResponse = z.object({
  chatRateLimitBurst: z.number().int(),
  chatRateLimitDuration: z.number().int(),
  enablePmSendPlatformId: z.boolean().nullish(),
  generalRateLimitBurst: z.number().int(),
  generalRateLimitDuration: z.number().int(),
  maxChatMessageLength: z.number().int(),
  spamChatBurst: z.number().int(),
  spamChatDuration: z.number().int(),
  spamMuteDuration: z.number().int()
})

export interface PublicConfigResponse extends z.TypeOf<typeof PublicConfigResponse> {}
