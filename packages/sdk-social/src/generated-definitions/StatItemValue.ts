/*
 * Copyright (c) 2022-2024 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { z } from 'zod'

export const StatItemValue = z.object({
  createdAt: z.string().nullish(),
  updatedAt: z.string().nullish(),
  userId: z.string().nullish(),
  value: z.number().nullish()
})

export interface StatItemValue extends z.TypeOf<typeof StatItemValue> {}
