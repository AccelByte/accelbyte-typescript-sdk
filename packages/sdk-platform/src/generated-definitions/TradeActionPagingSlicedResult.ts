/*
 * Copyright (c) 2022-2026 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { z } from 'zod'
import { Paging } from './Paging.js'
import { TradeChainActionHistoryInfo } from './TradeChainActionHistoryInfo.js'

export const TradeActionPagingSlicedResult = z.object({ data: z.array(TradeChainActionHistoryInfo), paging: Paging.nullish() })

export interface TradeActionPagingSlicedResult extends z.TypeOf<typeof TradeActionPagingSlicedResult> {}
