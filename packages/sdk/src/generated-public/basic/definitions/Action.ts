/*
 * Copyright (c) 2022 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { z } from 'zod'

export const Action = z.object({
  id: z.number().int().nullish(),
  name: z.string().nullish(),
  description: z.string().nullish(),
  priority: z.number().int().nullish(),
  duration: z.number().int().nullish(),
  color: z.string().nullish(),
  icon: z.string().nullish()
})

export type Action = z.TypeOf<typeof Action>
