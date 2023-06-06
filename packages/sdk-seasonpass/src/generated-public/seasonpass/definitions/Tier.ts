/*
 * Copyright (c) 2022-2023 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { z } from 'zod'

export const Tier = z.object({
  id: z.string().nullish(),
  requiredExp: z.number().int().nullish(),
  rewards: z.record(z.array(z.string())).nullish()
})

export interface Tier extends z.TypeOf<typeof Tier> {}
