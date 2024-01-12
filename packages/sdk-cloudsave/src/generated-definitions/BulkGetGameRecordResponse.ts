/*
 * Copyright (c) 2022-2024 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { z } from 'zod'
import { GameRecordResponse } from './GameRecordResponse.js'

export const BulkGetGameRecordResponse = z.object({ data: z.array(GameRecordResponse) })

export interface BulkGetGameRecordResponse extends z.TypeOf<typeof BulkGetGameRecordResponse> {}
