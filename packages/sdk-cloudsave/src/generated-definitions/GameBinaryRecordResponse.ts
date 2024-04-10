/*
 * Copyright (c) 2022-2024 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { z } from 'zod'
import { BinaryInfoResponse } from './BinaryInfoResponse.js'

export const GameBinaryRecordResponse = z.object({
  binary_info: BinaryInfoResponse.nullish(),
  created_at: z.string(),
  key: z.string(),
  namespace: z.string(),
  set_by: z.enum(['CLIENT', 'SERVER']).nullish(),
  tags: z.array(z.string()).nullish(),
  updated_at: z.string()
})

export interface GameBinaryRecordResponse extends z.TypeOf<typeof GameBinaryRecordResponse> {}
