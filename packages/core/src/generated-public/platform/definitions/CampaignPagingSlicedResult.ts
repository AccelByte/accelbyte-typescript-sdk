/*
 * Copyright (c) 2022 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { z } from 'zod'
import { CampaignInfo } from './CampaignInfo'
import { Paging } from './Paging'

export const CampaignPagingSlicedResult = z.object({ data: z.array(CampaignInfo), paging: Paging.nullish() })

export type CampaignPagingSlicedResult = z.TypeOf<typeof CampaignPagingSlicedResult>
