/*
 * Copyright (c) 2022-2023 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { z } from 'zod'
import { PlayerRecordSizeResponse } from './PlayerRecordSizeResponse'

export const BulkGetPlayerRecordSizeResponse = z.object({ data: z.array(PlayerRecordSizeResponse) })

export interface BulkGetPlayerRecordSizeResponse extends z.TypeOf<typeof BulkGetPlayerRecordSizeResponse> {}
