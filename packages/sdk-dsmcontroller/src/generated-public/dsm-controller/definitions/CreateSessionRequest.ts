/*
 * Copyright (c) 2022-2023 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { z } from 'zod'
import { MatchResultNotificationPayload } from './MatchResultNotificationPayload.js'
import { RequestMatchingAlly } from './RequestMatchingAlly.js'

export const CreateSessionRequest = z.object({
  client_version: z.string(),
  configuration: z.string(),
  deployment: z.string(),
  game_mode: z.string(),
  matching_allies: z.array(RequestMatchingAlly),
  namespace: z.string(),
  notification_payload: MatchResultNotificationPayload.nullish(),
  pod_name: z.string(),
  region: z.string(),
  session_id: z.string()
})

export interface CreateSessionRequest extends z.TypeOf<typeof CreateSessionRequest> {}
