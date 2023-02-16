/*
 * Copyright (c) 2022-2023 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { z } from 'zod'

export const Permission = z.object({
  Action: z.number().int(),
  Resource: z.string(),
  SchedAction: z.number().int().nullish(),
  SchedCron: z.string().nullish(),
  SchedRange: z.array(z.string()).nullish()
})

export interface Permission extends z.TypeOf<typeof Permission> {}
