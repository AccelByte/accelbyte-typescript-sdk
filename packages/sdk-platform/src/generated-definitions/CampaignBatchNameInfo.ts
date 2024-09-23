/*
 * Copyright (c) 2022-2024 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { z } from 'zod'

export const CampaignBatchNameInfo = z.object({ batchName: z.string(), batchNos: z.array(z.number().int()) })

export interface CampaignBatchNameInfo extends z.TypeOf<typeof CampaignBatchNameInfo> {}
