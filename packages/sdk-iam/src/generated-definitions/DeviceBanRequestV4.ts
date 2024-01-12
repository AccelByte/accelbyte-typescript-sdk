/*
 * Copyright (c) 2022-2024 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { z } from 'zod'

export const DeviceBanRequestV4 = z.object({
  comment: z.string(),
  deviceId: z.string(),
  deviceType: z.string(),
  enabled: z.boolean(),
  endDate: z.string(),
  ext: z.record(z.any()),
  reason: z.string()
})

export interface DeviceBanRequestV4 extends z.TypeOf<typeof DeviceBanRequestV4> {}
