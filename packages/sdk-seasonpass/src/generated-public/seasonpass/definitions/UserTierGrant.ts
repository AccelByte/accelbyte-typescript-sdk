/*
 * Copyright (c) 2022-2023 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { z } from 'zod'

export const UserTierGrant = z.object({
  count: z.number().int().nullish(),
  source: z.enum(['PAID_FOR', 'SWEAT']).nullish(),
  tags: z.array(z.string()).nullish()
})

export interface UserTierGrant extends z.TypeOf<typeof UserTierGrant> {}
