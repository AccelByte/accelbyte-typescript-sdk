/*
 * Copyright (c) 2022-2026 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { z } from 'zod'

export const PlayerRecordSizeResponse = z.object({
  current_size: z.number().int(),
  key: z.string(),
  namespace: z.string(),
  remaining_size: z.number().int(),
  user_id: z.string()
})

export interface PlayerRecordSizeResponse extends z.TypeOf<typeof PlayerRecordSizeResponse> {}
