/*
 * Copyright (c) 2022-2023 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { z } from 'zod'
import { Paging } from './Paging.js'
import { WalletInfo } from './WalletInfo.js'

export const WalletPagingSlicedResult = z.object({ data: z.array(WalletInfo), paging: Paging.nullish() })

export interface WalletPagingSlicedResult extends z.TypeOf<typeof WalletPagingSlicedResult> {}
