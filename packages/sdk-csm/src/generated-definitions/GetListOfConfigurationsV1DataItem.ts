/*
 * Copyright (c) 2022-2025 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { z } from 'zod'

export const GetListOfConfigurationsV1DataItem = z.object({
  applyMask: z.boolean().nullish(),
  configId: z.string().nullish(),
  configName: z.string().nullish(),
  configType: z.string().nullish(),
  deploymentStatus: z.string().nullish(),
  description: z.string().nullish(),
  editable: z.boolean().nullish(),
  isHidden: z.boolean().nullish(),
  source: z.string().nullish(),
  value: z.string().nullish()
})

export interface GetListOfConfigurationsV1DataItem extends z.TypeOf<typeof GetListOfConfigurationsV1DataItem> {}
