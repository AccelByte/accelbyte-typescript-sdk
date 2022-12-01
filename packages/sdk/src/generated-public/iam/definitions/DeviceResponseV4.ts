/*
 * Copyright (c) 2022 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { z } from 'zod'
import { DeviceBanResponseV4 } from './DeviceBanResponseV4'

export const DeviceResponseV4 = z.object({
  ban: DeviceBanResponseV4.nullish(),
  deviceId: z.string(),
  deviceType: z.string(),
  ext: z.record(z.any()).nullish(),
  ip: z.string(),
  lastLoginTime: z.number().int()
})

export type DeviceResponseV4 = z.TypeOf<typeof DeviceResponseV4>
