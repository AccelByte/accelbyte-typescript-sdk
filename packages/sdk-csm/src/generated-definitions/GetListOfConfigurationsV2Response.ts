/*
 * Copyright (c) 2022-2026 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { z } from 'zod'
import { GetListOfConfigurationsV2DataItem } from './GetListOfConfigurationsV2DataItem.js'
import { Pagination } from './Pagination.js'

export const GetListOfConfigurationsV2Response = z.object({
  data: z.array(GetListOfConfigurationsV2DataItem),
  paging: Pagination.nullish()
})

export interface GetListOfConfigurationsV2Response extends z.TypeOf<typeof GetListOfConfigurationsV2Response> {}
