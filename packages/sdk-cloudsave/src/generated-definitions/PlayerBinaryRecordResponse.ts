/*
 * Copyright (c) 2022-2026 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { z } from 'zod'
import { BinaryInfoResponse } from './BinaryInfoResponse.js'

export const PlayerBinaryRecordResponse = z.object({
  binary_info: BinaryInfoResponse.nullish(),
  created_at: z.string(),
  is_public: z.boolean(),
  key: z.string(),
  namespace: z.string(),
  set_by: z.enum(['CLIENT', 'SERVER']).nullish(),
  tags: z.array(z.string()).nullish(),
  updated_at: z.string(),
  user_id: z.string()
})

export interface PlayerBinaryRecordResponse extends z.TypeOf<typeof PlayerBinaryRecordResponse> {}
