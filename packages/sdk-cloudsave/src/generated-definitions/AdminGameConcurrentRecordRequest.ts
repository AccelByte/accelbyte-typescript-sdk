/*
 * Copyright (c) 2022-2025 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { z } from 'zod'
import { TtlConfigDto } from './TtlConfigDto.js'

export const AdminGameConcurrentRecordRequest = z.object({
  tags: z.array(z.string()).nullish(),
  ttl_config: TtlConfigDto.nullish(),
  updatedAt: z.string(),
  value: z.record(z.any())
})

export interface AdminGameConcurrentRecordRequest extends z.TypeOf<typeof AdminGameConcurrentRecordRequest> {}
