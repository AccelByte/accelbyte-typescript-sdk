/*
 * Copyright (c) 2022-2026 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { z } from 'zod'

export const IntegrationConfigurationResp = z.object({
  createdAt: z.string(),
  id: z.string(),
  itemTypes: z.array(z.string()),
  namespace: z.string(),
  serviceName: z.string(),
  status: z.string(),
  targetInventoryCode: z.string(),
  updatedAt: z.string()
})

export interface IntegrationConfigurationResp extends z.TypeOf<typeof IntegrationConfigurationResp> {}
