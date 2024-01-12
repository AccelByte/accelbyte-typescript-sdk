/*
 * Copyright (c) 2022-2024 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { z } from 'zod'
import { DetailedWalletTransactionInfo } from './DetailedWalletTransactionInfo.js'
import { Paging } from './Paging.js'

export const DetailedWalletTransactionPagingSlicedResult = z.object({
  data: z.array(DetailedWalletTransactionInfo),
  paging: Paging.nullish()
})

export interface DetailedWalletTransactionPagingSlicedResult extends z.TypeOf<typeof DetailedWalletTransactionPagingSlicedResult> {}
