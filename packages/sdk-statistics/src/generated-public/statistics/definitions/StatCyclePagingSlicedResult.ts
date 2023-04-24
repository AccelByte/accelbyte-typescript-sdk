/*
 * Copyright (c) 2022-2023 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { z } from 'zod'
import { Paging } from './Paging'
import { StatCycleInfo } from './StatCycleInfo'

export const StatCyclePagingSlicedResult = z.object({ data: z.array(StatCycleInfo), paging: Paging.nullish() })

export interface StatCyclePagingSlicedResult extends z.TypeOf<typeof StatCyclePagingSlicedResult> {}
