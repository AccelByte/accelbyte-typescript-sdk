/*
 * Copyright (c) 2022-2026 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { z } from 'zod'
import { GameBinaryRecordResponse } from './GameBinaryRecordResponse.js'

export const BulkGetGameBinaryRecordResponse = z.object({ data: z.array(GameBinaryRecordResponse) })

export interface BulkGetGameBinaryRecordResponse extends z.TypeOf<typeof BulkGetGameBinaryRecordResponse> {}
