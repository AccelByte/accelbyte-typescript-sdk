/*
 * Copyright (c) 2022 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { z } from 'zod'
import { ItemInfo } from './ItemInfo'
import { Paging } from './Paging'

export const ItemPagingSlicedResult = z.object({ data: z.array(ItemInfo), paging: Paging.nullish() })

export type ItemPagingSlicedResult = z.TypeOf<typeof ItemPagingSlicedResult>
