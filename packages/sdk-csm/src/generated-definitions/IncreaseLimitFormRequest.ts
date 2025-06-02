/*
 * Copyright (c) 2022-2025 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { z } from 'zod'

export const IncreaseLimitFormRequest = z.object({
  clientEmail: z.string(),
  preferredLimitReplica: z.number().int().nullish(),
  requestReason: z.string()
})

export interface IncreaseLimitFormRequest extends z.TypeOf<typeof IncreaseLimitFormRequest> {}
