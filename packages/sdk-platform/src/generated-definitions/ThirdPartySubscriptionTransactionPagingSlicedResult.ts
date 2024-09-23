/*
 * Copyright (c) 2022-2024 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { z } from 'zod'
import { Paging } from './Paging.js'
import { ThirdPartySubscriptionTransactionInfo } from './ThirdPartySubscriptionTransactionInfo.js'

export const ThirdPartySubscriptionTransactionPagingSlicedResult = z.object({
  data: z.array(ThirdPartySubscriptionTransactionInfo),
  paging: Paging.nullish()
})

export interface ThirdPartySubscriptionTransactionPagingSlicedResult
  extends z.TypeOf<typeof ThirdPartySubscriptionTransactionPagingSlicedResult> {}
