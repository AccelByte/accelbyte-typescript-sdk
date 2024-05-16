/*
 * Copyright (c) 2022-2024 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { z } from 'zod'
import { MatchResultNotificationPayload } from './MatchResultNotificationPayload.js'
import { RequestMatchingAlly } from './RequestMatchingAlly.js'

export const ClaimSessionRequest = z.object({
  game_mode: z.string(),
  matching_allies: z.array(RequestMatchingAlly),
  namespace: z.string(),
  notification_payload: MatchResultNotificationPayload.nullish(),
  session_id: z.string()
})

export interface ClaimSessionRequest extends z.TypeOf<typeof ClaimSessionRequest> {}
