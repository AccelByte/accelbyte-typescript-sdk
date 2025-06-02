/*
 * Copyright (c) 2022-2025 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { z } from 'zod'

export const PlayerBinaryRecordCreate = z.object({
  file_type: z.string(),
  is_public: z.boolean().nullish(),
  key: z.string(),
  set_by: z.enum(['CLIENT', 'SERVER'])
})

export interface PlayerBinaryRecordCreate extends z.TypeOf<typeof PlayerBinaryRecordCreate> {}
