/*
 * Copyright (c) 2022-2025 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { z } from 'zod'
import { GetAppImageListV2DataItem } from './GetAppImageListV2DataItem.js'
import { Pagination } from './Pagination.js'

export const GetAppImageListV2Response = z.object({
  data: z.array(GetAppImageListV2DataItem),
  paging: Pagination.nullish(),
  vulnerabilityStatus: z.string()
})

export interface GetAppImageListV2Response extends z.TypeOf<typeof GetAppImageListV2Response> {}
