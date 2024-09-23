/*
 * Copyright (c) 2022-2024 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { z } from 'zod'

export const Timeout = z.object({
  creation: z.number().int(),
  drain: z.number().int(),
  session: z.number().int(),
  unresponsive: z.number().int()
})

export interface Timeout extends z.TypeOf<typeof Timeout> {}
