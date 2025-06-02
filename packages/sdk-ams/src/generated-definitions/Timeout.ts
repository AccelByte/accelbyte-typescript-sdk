/*
 * Copyright (c) 2022-2025 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { z } from 'zod'

export const Timeout = z.object({
  claim: z.number().int().nullish(),
  creation: z.number().int().nullish(),
  drain: z.number().int().nullish(),
  session: z.number().int().nullish(),
  unresponsive: z.number().int().nullish()
})

export interface Timeout extends z.TypeOf<typeof Timeout> {}
