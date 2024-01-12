/*
 * Copyright (c) 2022-2024 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { z } from 'zod'
import { GameBinaryRecordResponse } from './GameBinaryRecordResponse.js'
import { Pagination } from './Pagination.js'

export const ListGameBinaryRecordsResponse = z.object({ data: z.array(GameBinaryRecordResponse), paging: Pagination })

export interface ListGameBinaryRecordsResponse extends z.TypeOf<typeof ListGameBinaryRecordsResponse> {}
