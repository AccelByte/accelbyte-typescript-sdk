/*
 * Copyright (c) 2022-2023 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { z } from 'zod'

export const Action = z.object({
  color: z.string().nullish(),
  description: z.string().nullish(),
  duration: z.number().int().nullish(),
  icon: z.string().nullish(),
  id: z.number().int().nullish(),
  name: z.string().nullish(),
  priority: z.number().int().nullish()
})

export interface Action extends z.TypeOf<typeof Action> {}
