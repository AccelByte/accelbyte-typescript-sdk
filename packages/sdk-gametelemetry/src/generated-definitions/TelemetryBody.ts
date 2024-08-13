/*
 * Copyright (c) 2022-2024 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { z } from 'zod'

export const TelemetryBody = z.object({
  ClientTimestamp: z.string().nullish(),
  DeviceType: z.string().nullish(),
  EventId: z.string().nullish(),
  EventName: z.string(),
  EventNamespace: z.string(),
  EventTimestamp: z.string().nullish(),
  Payload: z.record(z.any())
})

export interface TelemetryBody extends z.TypeOf<typeof TelemetryBody> {}
