/*
 * Copyright (c) 2022-2024 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { z } from 'zod'

export const CampaignBatchNameChange = z.object({ newName: z.string().nullish(), oldName: z.string().nullish() })

export interface CampaignBatchNameChange extends z.TypeOf<typeof CampaignBatchNameChange> {}
