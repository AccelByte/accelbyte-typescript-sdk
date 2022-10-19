/*
 * Copyright (c) 2022 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { z } from 'zod'
import { Paging } from './Paging'
import { WalletInfo } from './WalletInfo'

export const WalletPagingSlicedResult = z.object({ data: z.array(WalletInfo), paging: Paging.nullish() })

export type WalletPagingSlicedResult = z.TypeOf<typeof WalletPagingSlicedResult>
