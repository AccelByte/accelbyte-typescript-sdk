/*
 * Copyright (c) 2022-2026 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { z } from 'zod'
import { Time } from './Time.js'

export const QoSServer = z.object({
  alias: z.string(),
  ip: z.string(),
  last_update: Time,
  port: z.number().int(),
  region: z.string(),
  status: z.string()
})

export interface QoSServer extends z.TypeOf<typeof QoSServer> {}
