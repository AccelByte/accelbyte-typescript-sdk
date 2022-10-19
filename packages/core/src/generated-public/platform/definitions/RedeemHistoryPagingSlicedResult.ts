/*
 * Copyright (c) 2022 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { z } from 'zod'
import { Paging } from './Paging'
import { RedeemHistoryInfo } from './RedeemHistoryInfo'

export const RedeemHistoryPagingSlicedResult = z.object({ data: z.array(RedeemHistoryInfo), paging: Paging.nullish() })

export type RedeemHistoryPagingSlicedResult = z.TypeOf<typeof RedeemHistoryPagingSlicedResult>
