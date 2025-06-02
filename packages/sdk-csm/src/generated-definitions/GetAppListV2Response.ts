/*
 * Copyright (c) 2022-2025 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { z } from 'zod'
import { AppItem } from './AppItem.js'
import { Pagination } from './Pagination.js'

export const GetAppListV2Response = z.object({ data: z.array(AppItem), paging: Pagination.nullish() })

export interface GetAppListV2Response extends z.TypeOf<typeof GetAppListV2Response> {}
