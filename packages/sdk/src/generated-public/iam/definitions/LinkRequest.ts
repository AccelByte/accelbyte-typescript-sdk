/*
 * Copyright (c) 2022 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { z } from 'zod'
import { ErrorResponseWithConflictedUserPlatformAccounts } from './ErrorResponseWithConflictedUserPlatformAccounts'

export const LinkRequest = z.object({
  client_id: z.string(),
  conflict_publisher_user_id: z.string().nullish(),
  conflict_user_linked_games: z.array(z.string()).nullish(),
  current_user_linked_games: z.array(z.string()).nullish(),
  error: ErrorResponseWithConflictedUserPlatformAccounts.nullish(),
  expiration: z.number().int().nullish(),
  namespace: z.string(),
  operation_name: z.string(),
  payload: z.record(z.any()),
  platformDisplayName: z.string().nullish(),
  platformID: z.string().nullish(),
  platform_user_id: z.string().nullish(),
  redirect_uri: z.string(),
  refreshToken: z.string().nullish(),
  request_id: z.string(),
  status: z.string()
})

export type LinkRequest = z.TypeOf<typeof LinkRequest>
