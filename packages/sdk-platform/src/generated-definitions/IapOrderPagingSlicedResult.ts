/*
 * Copyright (c) 2022-2026 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { z } from 'zod'
import { IapOrderInfo } from './IapOrderInfo.js'
import { Paging } from './Paging.js'

export const IapOrderPagingSlicedResult = z.object({ data: z.array(IapOrderInfo), paging: Paging.nullish() })

export interface IapOrderPagingSlicedResult extends z.TypeOf<typeof IapOrderPagingSlicedResult> {}
