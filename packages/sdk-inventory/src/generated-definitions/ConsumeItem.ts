/*
 * Copyright (c) 2022-2026 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { z } from 'zod'

export const ConsumeItem = z.object({
  dateRangeValidation: z.boolean().nullish(),
  inventoryId: z.string(),
  options: z.array(z.string()).nullish(),
  qty: z.number().int(),
  slotId: z.string(),
  sourceItemId: z.string()
})

export interface ConsumeItem extends z.TypeOf<typeof ConsumeItem> {}
