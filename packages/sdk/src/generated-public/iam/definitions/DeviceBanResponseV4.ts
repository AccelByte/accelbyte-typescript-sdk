/*
 * Copyright (c) 2022 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { z } from 'zod'

export const DeviceBanResponseV4 = z.object({
  bannedAt: z.number().int(),
  bannedBy: z.string(),
  comment: z.string(),
  deviceId: z.string(),
  deviceType: z.string(),
  disabledAt: z.number().int(),
  enabled: z.boolean(),
  endDate: z.number().int(),
  id: z.string(),
  namespace: z.string(),
  reason: z.string(),
  targetNamespace: z.string()
})

export type DeviceBanResponseV4 = z.TypeOf<typeof DeviceBanResponseV4>
