/*
 * Copyright (c) 2022-2024 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { z } from 'zod'
import { CatalogChangeInfo } from './CatalogChangeInfo.js'
import { Paging } from './Paging.js'

export const CatalogChangePagingResult = z.object({
  data: z.array(CatalogChangeInfo),
  paging: Paging.nullish(),
  total: z.number().int().nullish()
})

export interface CatalogChangePagingResult extends z.TypeOf<typeof CatalogChangePagingResult> {}
