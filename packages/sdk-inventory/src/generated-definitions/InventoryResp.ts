/*
 * Copyright (c) 2022-2026 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { z } from 'zod'

export const InventoryResp = z.object({
  createdAt: z.string(),
  id: z.string(),
  inventoryConfigurationCode: z.string(),
  inventoryConfigurationId: z.string(),
  maxSlots: z.number().int(),
  maxUpgradeSlots: z.number().int(),
  namespace: z.string(),
  updatedAt: z.string(),
  usedCountSlots: z.number().int(),
  userId: z.string()
})

export interface InventoryResp extends z.TypeOf<typeof InventoryResp> {}
