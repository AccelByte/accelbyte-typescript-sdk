/*
 * Copyright (c) 2022-2026 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { z } from 'zod'
import { DeletionData } from './DeletionData.js'
import { Pagination } from './Pagination.js'

export const ListDeletionDataResponse = z.object({ Data: z.array(DeletionData), Paging: Pagination })

export interface ListDeletionDataResponse extends z.TypeOf<typeof ListDeletionDataResponse> {}
