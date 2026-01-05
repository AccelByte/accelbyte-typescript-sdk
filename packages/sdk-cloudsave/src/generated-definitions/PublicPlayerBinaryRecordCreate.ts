/*
 * Copyright (c) 2022-2026 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { z } from 'zod'

export const PublicPlayerBinaryRecordCreate = z.object({ file_type: z.string(), is_public: z.boolean().nullish(), key: z.string() })

export interface PublicPlayerBinaryRecordCreate extends z.TypeOf<typeof PublicPlayerBinaryRecordCreate> {}
