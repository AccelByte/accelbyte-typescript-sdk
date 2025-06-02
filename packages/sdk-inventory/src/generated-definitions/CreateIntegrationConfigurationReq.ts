/*
 * Copyright (c) 2022-2025 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { z } from 'zod'

export const CreateIntegrationConfigurationReq = z.object({
  mapItemType: z.array(z.string()).nullish(),
  serviceName: z.string(),
  targetInventoryCode: z.string()
})

export interface CreateIntegrationConfigurationReq extends z.TypeOf<typeof CreateIntegrationConfigurationReq> {}
