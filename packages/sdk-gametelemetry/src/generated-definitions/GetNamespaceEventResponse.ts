/*
 * Copyright (c) 2022-2025 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { z } from 'zod'

export const GetNamespaceEventResponse = z.object({
  EventId: z.string(),
  EventName: z.string(),
  EventNamespace: z.string(),
  EventTimestamp: z.string(),
  FlightId: z.string().nullish(),
  Payload: z.record(z.any()).nullish(),
  UserId: z.string().nullish(),
  UserNamespace: z.string().nullish()
})

export interface GetNamespaceEventResponse extends z.TypeOf<typeof GetNamespaceEventResponse> {}
