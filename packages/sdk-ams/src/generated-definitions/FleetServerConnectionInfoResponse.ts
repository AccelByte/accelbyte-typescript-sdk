/*
 * Copyright (c) 2022-2025 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { z } from 'zod'
import { Time } from './Time.js'

export const FleetServerConnectionInfoResponse = z.object({
  expiresAt: Time,
  host: z.string(),
  logstreamPort: z.number().int(),
  secret: z.string()
})

export interface FleetServerConnectionInfoResponse extends z.TypeOf<typeof FleetServerConnectionInfoResponse> {}
