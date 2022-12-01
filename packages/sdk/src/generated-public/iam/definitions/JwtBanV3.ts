/*
 * Copyright (c) 2022 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { z } from 'zod'

export const JwtBanV3 = z.object({
  ban: z.string(),
  disabledDate: z.string().nullish(),
  enabled: z.boolean(),
  endDate: z.string(),
  targetedNamespace: z.string()
})

export type JwtBanV3 = z.TypeOf<typeof JwtBanV3>
