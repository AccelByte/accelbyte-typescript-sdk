/*
 * Copyright (c) 2022 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { z } from 'zod'
import { DetailedWalletTransactionInfo } from './DetailedWalletTransactionInfo'
import { Paging } from './Paging'

export const DetailedWalletTransactionPagingSlicedResult = z.object({
  data: z.array(DetailedWalletTransactionInfo),
  paging: Paging.nullish()
})

export type DetailedWalletTransactionPagingSlicedResult = z.TypeOf<typeof DetailedWalletTransactionPagingSlicedResult>
