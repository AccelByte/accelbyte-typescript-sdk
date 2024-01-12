/*
 * Copyright (c) 2022-2024 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { z } from 'zod'

export const PublicGameBinaryRecordCreate = z.object({ file_type: z.string(), key: z.string() })

export interface PublicGameBinaryRecordCreate extends z.TypeOf<typeof PublicGameBinaryRecordCreate> {}
