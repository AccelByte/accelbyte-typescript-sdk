/*
 * Copyright (c) 2022-2023 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { z } from 'zod'
import { CatalogChangeInfo } from './CatalogChangeInfo.js'
import { Paging } from './Paging.js'

export const CatalogChangePagingSlicedResult = z.object({ data: z.array(CatalogChangeInfo), paging: Paging.nullish() })

export interface CatalogChangePagingSlicedResult extends z.TypeOf<typeof CatalogChangePagingSlicedResult> {}
