/*
 * Copyright (c) 2022-2023 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { z } from 'zod'
import { IapConsumeHistoryInfo } from './IapConsumeHistoryInfo'
import { Paging } from './Paging'

export const IapConsumeHistoryPagingSlicedResult = z.object({ data: z.array(IapConsumeHistoryInfo), paging: Paging.nullish() })

export type IapConsumeHistoryPagingSlicedResult = z.TypeOf<typeof IapConsumeHistoryPagingSlicedResult>
