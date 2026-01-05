/*
 * Copyright (c) 2022-2026 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { z } from 'zod'
import { Paging } from './Paging.js'
import { ThirdPartySubscriptionTransactionHistoryInfo } from './ThirdPartySubscriptionTransactionHistoryInfo.js'

export const ThirdPartySubscriptionTransactionHistoryPagingSlicedResult = z.object({
  data: z.array(ThirdPartySubscriptionTransactionHistoryInfo),
  paging: Paging.nullish()
})

export interface ThirdPartySubscriptionTransactionHistoryPagingSlicedResult
  extends z.TypeOf<typeof ThirdPartySubscriptionTransactionHistoryPagingSlicedResult> {}
