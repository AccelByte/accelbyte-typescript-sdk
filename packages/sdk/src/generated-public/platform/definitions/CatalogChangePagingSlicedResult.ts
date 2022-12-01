/*
 * Copyright (c) 2022 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { z } from 'zod'
import { CatalogChangeInfo } from './CatalogChangeInfo'
import { Paging } from './Paging'

export const CatalogChangePagingSlicedResult = z.object({ data: z.array(CatalogChangeInfo), paging: Paging.nullish() })

export type CatalogChangePagingSlicedResult = z.TypeOf<typeof CatalogChangePagingSlicedResult>
