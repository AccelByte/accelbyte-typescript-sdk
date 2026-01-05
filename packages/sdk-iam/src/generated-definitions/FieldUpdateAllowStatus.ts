/*
 * Copyright (c) 2022-2026 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { z } from 'zod'

export const FieldUpdateAllowStatus = z.object({
  field: z.string(),
  nextAvailableEditTime: z.number().int().nullish(),
  remainingTimeInSeconds: z.number().int().nullish(),
  type: z.string()
})

export interface FieldUpdateAllowStatus extends z.TypeOf<typeof FieldUpdateAllowStatus> {}
