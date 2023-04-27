/*
 * Copyright (c) 2022-2023 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { z } from 'zod'
import { Paging } from './Paging.js'
import { RewardInfo } from './RewardInfo.js'

export const RewardPagingSlicedResult = z.object({ data: z.array(RewardInfo), paging: Paging.nullish() })

export interface RewardPagingSlicedResult extends z.TypeOf<typeof RewardPagingSlicedResult> {}
