/*
 * Copyright (c) 2022-2026 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { z } from 'zod'
import { Paging } from './Paging.js'
import { StatInfo } from './StatInfo.js'

export const StatPagingSlicedResult = z.object({ data: z.array(StatInfo), paging: Paging.nullish() })

export interface StatPagingSlicedResult extends z.TypeOf<typeof StatPagingSlicedResult> {}
