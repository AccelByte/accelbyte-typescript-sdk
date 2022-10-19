/*
 * Copyright (c) 2022 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { z } from 'zod'
import { Paging } from './Paging'
import { WalletTransactionInfo } from './WalletTransactionInfo'

export const WalletTransactionPagingSlicedResult = z.object({ data: z.array(WalletTransactionInfo), paging: Paging.nullish() })

export type WalletTransactionPagingSlicedResult = z.TypeOf<typeof WalletTransactionPagingSlicedResult>
