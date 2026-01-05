/*
 * Copyright (c) 2022-2026 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { z } from 'zod'

export const InventoryConfigurationResp = z.object({
  code: z.string(),
  createdAt: z.string(),
  description: z.string(),
  id: z.string(),
  initialMaxSlots: z.number().int(),
  maxInstancesPerUser: z.number().int(),
  maxUpgradeSlots: z.number().int(),
  name: z.string(),
  namespace: z.string(),
  status: z.enum(['INIT', 'TIED']),
  updatedAt: z.string()
})

export interface InventoryConfigurationResp extends z.TypeOf<typeof InventoryConfigurationResp> {}
