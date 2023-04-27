/*
 * Copyright (c) 2022-2023 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { z } from 'zod'
import { Paging } from './Paging.js'
import { RedeemHistoryInfo } from './RedeemHistoryInfo.js'

export const RedeemHistoryPagingSlicedResult = z.object({ data: z.array(RedeemHistoryInfo), paging: Paging.nullish() })

export interface RedeemHistoryPagingSlicedResult extends z.TypeOf<typeof RedeemHistoryPagingSlicedResult> {}
