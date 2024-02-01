/*
 * Copyright (c) 2022-2024 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { z } from 'zod'
import { PlayerBinaryRecordResponse } from './PlayerBinaryRecordResponse.js'

export const BulkGetPlayerBinaryRecordResponse = z.object({ data: z.array(PlayerBinaryRecordResponse) })

export interface BulkGetPlayerBinaryRecordResponse extends z.TypeOf<typeof BulkGetPlayerBinaryRecordResponse> {}
