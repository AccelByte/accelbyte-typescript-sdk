/*
 * Copyright (c) 2022-2026 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { z } from 'zod'
import { GetAppListV1DataItem } from './GetAppListV1DataItem.js'
import { Pagination } from './Pagination.js'

export const GetAppListV1Response = z.object({ data: z.array(GetAppListV1DataItem), paging: Pagination.nullish() })

export interface GetAppListV1Response extends z.TypeOf<typeof GetAppListV1Response> {}
