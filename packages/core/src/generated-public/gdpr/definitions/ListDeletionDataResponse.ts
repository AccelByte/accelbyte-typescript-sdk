/*
 * Copyright (c) 2022 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { z } from 'zod'
import { DeletionData } from './DeletionData'
import { Pagination } from './Pagination'

export const ListDeletionDataResponse = z.object({ Data: z.array(DeletionData), Paging: Pagination })

export type ListDeletionDataResponse = z.TypeOf<typeof ListDeletionDataResponse>
