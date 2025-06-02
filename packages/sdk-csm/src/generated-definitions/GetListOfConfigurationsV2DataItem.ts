/*
 * Copyright (c) 2022-2025 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { z } from 'zod'

export const GetListOfConfigurationsV2DataItem = z.object({
  applyMask: z.boolean().nullish(),
  configId: z.string(),
  configName: z.string(),
  configType: z.string(),
  deploymentStatus: z.string(),
  description: z.string().nullish(),
  editable: z.boolean().nullish(),
  isHidden: z.boolean(),
  source: z.string().nullish(),
  value: z.string()
})

export interface GetListOfConfigurationsV2DataItem extends z.TypeOf<typeof GetListOfConfigurationsV2DataItem> {}
