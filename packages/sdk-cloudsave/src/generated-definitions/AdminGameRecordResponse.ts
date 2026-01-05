/*
 * Copyright (c) 2022-2026 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { z } from 'zod'
import { TtlConfigDto } from './TtlConfigDto.js'

export const AdminGameRecordResponse = z.object({
  created_at: z.string(),
  key: z.string(),
  namespace: z.string(),
  tags: z.array(z.string()).nullish(),
  ttl_config: TtlConfigDto.nullish(),
  updated_at: z.string(),
  value: z.record(z.any())
})

export interface AdminGameRecordResponse extends z.TypeOf<typeof AdminGameRecordResponse> {}
