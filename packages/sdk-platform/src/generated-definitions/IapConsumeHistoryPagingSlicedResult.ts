/*
 * Copyright (c) 2022-2024 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { z } from 'zod'
import { IapConsumeHistoryInfo } from './IapConsumeHistoryInfo.js'
import { Paging } from './Paging.js'

export const IapConsumeHistoryPagingSlicedResult = z.object({ data: z.array(IapConsumeHistoryInfo), paging: Paging.nullish() })

export interface IapConsumeHistoryPagingSlicedResult extends z.TypeOf<typeof IapConsumeHistoryPagingSlicedResult> {}
