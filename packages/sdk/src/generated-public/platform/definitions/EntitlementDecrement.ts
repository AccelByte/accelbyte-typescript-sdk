/*
 * Copyright (c) 2022 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { z } from 'zod'

export const EntitlementDecrement = z.object({
  useCount: z.number().int().nullish(),
  options: z.array(z.string()).nullish(),
  requestId: z.string().nullish()
})

export type EntitlementDecrement = z.TypeOf<typeof EntitlementDecrement>
