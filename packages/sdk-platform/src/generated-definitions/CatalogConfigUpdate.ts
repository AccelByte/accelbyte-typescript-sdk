/*
 * Copyright (c) 2022-2025 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { z } from 'zod'

export const CatalogConfigUpdate = z.object({
  enableInventoryCheck: z.boolean(),
  itemDeletionCheckConfig: z.array(z.enum(['CAMPAIGN', 'CATALOG', 'DLC', 'ENTITLEMENT', 'IAP', 'REWARD'])).nullish()
})

export interface CatalogConfigUpdate extends z.TypeOf<typeof CatalogConfigUpdate> {}
