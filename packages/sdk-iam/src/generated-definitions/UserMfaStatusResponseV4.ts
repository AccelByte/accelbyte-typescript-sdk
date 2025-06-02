/*
 * Copyright (c) 2022-2025 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { z } from 'zod'

export const UserMfaStatusResponseV4 = z.object({
  defaultFactor: z.string().nullish(),
  enabled: z.boolean(),
  enabledFactors: z.array(z.string()).nullish()
})

export interface UserMfaStatusResponseV4 extends z.TypeOf<typeof UserMfaStatusResponseV4> {}
