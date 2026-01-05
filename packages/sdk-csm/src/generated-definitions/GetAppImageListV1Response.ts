/*
 * Copyright (c) 2022-2026 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { z } from 'zod'
import { GetAppImageListV1DataItem } from './GetAppImageListV1DataItem.js'
import { Pagination } from './Pagination.js'

export const GetAppImageListV1Response = z.object({ data: z.array(GetAppImageListV1DataItem), paging: Pagination.nullish() })

export interface GetAppImageListV1Response extends z.TypeOf<typeof GetAppImageListV1Response> {}
