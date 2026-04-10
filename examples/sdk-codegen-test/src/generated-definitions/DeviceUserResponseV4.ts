/*
 * Copyright (c) 2022-2026 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { z } from 'zod'

export const DeviceUserResponseV4 = z.object({
  ext: z.record(z.any()).nullish(),
  ip: z.string(),
  lastLoginTime: z.number().int(),
  namespace: z.string(),
  userId: z.string()
})

export interface DeviceUserResponseV4 extends z.TypeOf<typeof DeviceUserResponseV4> {}
