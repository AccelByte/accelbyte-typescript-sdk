/*
 * Copyright (c) 2022-2026 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { z } from 'zod'
import { Paging } from './Paging.js'
import { Tier } from './Tier.js'

export const TierPagingSlicedResult = z.object({ data: z.array(Tier), paging: Paging.nullish(), total: z.number().int().nullish() })

export interface TierPagingSlicedResult extends z.TypeOf<typeof TierPagingSlicedResult> {}
