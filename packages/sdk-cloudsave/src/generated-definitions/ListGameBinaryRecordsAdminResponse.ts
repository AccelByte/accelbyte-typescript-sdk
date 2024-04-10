/*
 * Copyright (c) 2022-2024 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { z } from 'zod'
import { GameBinaryRecordAdminResponse } from './GameBinaryRecordAdminResponse.js'
import { Pagination } from './Pagination.js'

export const ListGameBinaryRecordsAdminResponse = z.object({ data: z.array(GameBinaryRecordAdminResponse), paging: Pagination })

export interface ListGameBinaryRecordsAdminResponse extends z.TypeOf<typeof ListGameBinaryRecordsAdminResponse> {}
