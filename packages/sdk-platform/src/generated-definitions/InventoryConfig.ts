/*
 * Copyright (c) 2022-2025 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { z } from 'zod'

export const InventoryConfig = z.object({
  customAttributes: z.record(z.any()).nullish(),
  serverCustomAttributes: z.record(z.any()).nullish(),
  slotUsed: z.number().int().nullish()
})

export interface InventoryConfig extends z.TypeOf<typeof InventoryConfig> {}
