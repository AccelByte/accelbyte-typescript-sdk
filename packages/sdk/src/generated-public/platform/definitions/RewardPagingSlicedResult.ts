/*
 * Copyright (c) 2022 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { z } from 'zod'
import { Paging } from './Paging'
import { RewardInfo } from './RewardInfo'

export const RewardPagingSlicedResult = z.object({ data: z.array(RewardInfo), paging: Paging.nullish() })

export type RewardPagingSlicedResult = z.TypeOf<typeof RewardPagingSlicedResult>
