/*
 * Copyright (c) 2022-2024 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { z } from 'zod'
import { Paging } from './Paging.js'
import { StatItemValue } from './StatItemValue.js'

export const StatItemValuePagingSlicedResult = z.object({ data: z.array(StatItemValue), paging: Paging.nullish() })

export interface StatItemValuePagingSlicedResult extends z.TypeOf<typeof StatItemValuePagingSlicedResult> {}
