/*
 * Copyright (c) 2022-2024 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { z } from 'zod'
import { PlayerRecordResponse } from './PlayerRecordResponse.js'

export const BulkGetPlayerRecordResponse = z.object({ data: z.array(PlayerRecordResponse) })

export interface BulkGetPlayerRecordResponse extends z.TypeOf<typeof BulkGetPlayerRecordResponse> {}
