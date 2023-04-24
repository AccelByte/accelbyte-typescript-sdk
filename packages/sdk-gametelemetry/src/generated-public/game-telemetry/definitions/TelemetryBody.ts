/*
 * Copyright (c) 2022-2023 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { z } from 'zod'

export const TelemetryBody = z.object({
  EventNamespace: z.string(),
  EventName: z.string(),
  Payload: z.record(z.any()),
  EventTimestamp: z.string().nullish(),
  EventId: z.string().nullish()
})

export interface TelemetryBody extends z.TypeOf<typeof TelemetryBody> {}
