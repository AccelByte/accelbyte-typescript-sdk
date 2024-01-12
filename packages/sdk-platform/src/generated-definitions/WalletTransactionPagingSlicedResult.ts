/*
 * Copyright (c) 2022-2024 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { z } from 'zod'
import { Paging } from './Paging.js'
import { WalletTransactionInfo } from './WalletTransactionInfo.js'

export const WalletTransactionPagingSlicedResult = z.object({ data: z.array(WalletTransactionInfo), paging: Paging.nullish() })

export interface WalletTransactionPagingSlicedResult extends z.TypeOf<typeof WalletTransactionPagingSlicedResult> {}
