/*
 * Copyright (c) 2022-2025 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { z } from 'zod'
import { CampaignInfo } from './CampaignInfo.js'
import { Paging } from './Paging.js'

export const CampaignPagingSlicedResult = z.object({ data: z.array(CampaignInfo), paging: Paging.nullish() })

export interface CampaignPagingSlicedResult extends z.TypeOf<typeof CampaignPagingSlicedResult> {}
