/*
 * Copyright (c) 2022-2025 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { z } from 'zod'
import { Pagination } from './Pagination.js'
import { PlayerBinaryRecordResponse } from './PlayerBinaryRecordResponse.js'

export const ListPlayerBinaryRecordsResponse = z.object({ data: z.array(PlayerBinaryRecordResponse), paging: Pagination })

export interface ListPlayerBinaryRecordsResponse extends z.TypeOf<typeof ListPlayerBinaryRecordsResponse> {}
