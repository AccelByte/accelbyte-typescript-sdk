/*
 * Copyright (c) 2022-2024 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { z } from 'zod'
import { TtlConfigDto } from './TtlConfigDto.js'

export const GameBinaryRecordMetadataRequest = z.object({
  set_by: z.enum(['CLIENT', 'SERVER']),
  tags: z.array(z.string()).nullish(),
  ttl_config: TtlConfigDto.nullish()
})

export interface GameBinaryRecordMetadataRequest extends z.TypeOf<typeof GameBinaryRecordMetadataRequest> {}
