/*
 * Copyright (c) 2022-2026 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { z } from 'zod'
import { GetListOfConfigurationsV1DataItem } from './GetListOfConfigurationsV1DataItem.js'
import { Pagination } from './Pagination.js'

export const GetListOfConfigurationsV1Response = z.object({
  data: z.array(GetListOfConfigurationsV1DataItem),
  paging: Pagination.nullish()
})

export interface GetListOfConfigurationsV1Response extends z.TypeOf<typeof GetListOfConfigurationsV1Response> {}
