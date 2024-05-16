/*
 * Copyright (c) 2022-2024 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { z } from 'zod'

export const CampaignIfc = z.object({ id: z.string().nullish(), name: z.string().nullish() })

export interface CampaignIfc extends z.TypeOf<typeof CampaignIfc> {}
