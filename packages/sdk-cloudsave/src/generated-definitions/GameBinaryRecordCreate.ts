/*
 * Copyright (c) 2022-2026 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { z } from 'zod'
import { TtlConfigDto } from './TtlConfigDto.js'

export const GameBinaryRecordCreate = z.object({
  file_type: z.string(),
  key: z.string(),
  set_by: z.enum(['CLIENT', 'SERVER']),
  ttl_config: TtlConfigDto.nullish()
})

export interface GameBinaryRecordCreate extends z.TypeOf<typeof GameBinaryRecordCreate> {}
