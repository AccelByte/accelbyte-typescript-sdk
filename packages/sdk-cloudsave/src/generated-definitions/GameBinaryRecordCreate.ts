/*
 * Copyright (c) 2022-2024 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { z } from 'zod'

export const GameBinaryRecordCreate = z.object({ file_type: z.string(), key: z.string(), set_by: z.string() })

export interface GameBinaryRecordCreate extends z.TypeOf<typeof GameBinaryRecordCreate> {}
