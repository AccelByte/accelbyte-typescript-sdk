/*
 * Copyright (c) 2022-2024 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { z } from 'zod'

export const UpdateIntegrationConfigurationReq = z.object({
  mapItemType: z.array(z.string()).nullish(),
  serviceName: z.string(),
  targetInventoryCode: z.string()
})

export interface UpdateIntegrationConfigurationReq extends z.TypeOf<typeof UpdateIntegrationConfigurationReq> {}
