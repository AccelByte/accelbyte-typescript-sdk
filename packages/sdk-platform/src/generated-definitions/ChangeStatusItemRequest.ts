/*
 * Copyright (c) 2022-2026 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { z } from 'zod'

export const ChangeStatusItemRequest = z.object({
  featuresToCheck: z.array(z.enum(['CAMPAIGN', 'CATALOG', 'DLC', 'ENTITLEMENT', 'IAP', 'REWARD'])).nullish()
})

export interface ChangeStatusItemRequest extends z.TypeOf<typeof ChangeStatusItemRequest> {}
