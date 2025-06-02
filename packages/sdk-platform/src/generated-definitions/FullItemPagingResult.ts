/*
 * Copyright (c) 2022-2025 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { z } from 'zod'
import { FullItemInfo } from './FullItemInfo.js'
import { Paging } from './Paging.js'

export const FullItemPagingResult = z.object({ data: z.array(FullItemInfo), paging: Paging.nullish(), total: z.number().int().nullish() })

export interface FullItemPagingResult extends z.TypeOf<typeof FullItemPagingResult> {}
