/*
 * Copyright (c) 2022-2024 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { z } from 'zod'

export const CreateInventoryConfigurationReq = z.object({
  code: z.string(),
  description: z.string().nullish(),
  initialMaxSlots: z.number().int(),
  maxInstancesPerUser: z.number().int(),
  maxUpgradeSlots: z.number().int(),
  name: z.string().nullish()
})

export interface CreateInventoryConfigurationReq extends z.TypeOf<typeof CreateInventoryConfigurationReq> {}
