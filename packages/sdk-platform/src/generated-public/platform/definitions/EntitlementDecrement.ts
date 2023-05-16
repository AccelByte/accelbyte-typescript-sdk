/*
 * Copyright (c) 2022-2023 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { z } from 'zod'

export const EntitlementDecrement = z.object({
  options: z.array(z.string()).nullish(),
  requestId: z.string().nullish(),
  useCount: z.number().int().nullish()
})

export interface EntitlementDecrement extends z.TypeOf<typeof EntitlementDecrement> {}
