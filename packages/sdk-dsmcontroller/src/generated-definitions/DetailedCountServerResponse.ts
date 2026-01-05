/*
 * Copyright (c) 2022-2026 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { z } from 'zod'

export const DetailedCountServerResponse = z.object({
  busy_count: z.number().int(),
  creating_count: z.number().int(),
  ready_count: z.number().int(),
  unreachable_count: z.number().int()
})

export interface DetailedCountServerResponse extends z.TypeOf<typeof DetailedCountServerResponse> {}
