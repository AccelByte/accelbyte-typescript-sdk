/*
 * Copyright (c) 2022-2025 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { z } from 'zod'

export const InvitationHistoryResponse = z.object({
  accepted: z.boolean(),
  createdAt: z.string(),
  inviter: z.string(),
  namespace: z.string(),
  updatedAt: z.string()
})

export interface InvitationHistoryResponse extends z.TypeOf<typeof InvitationHistoryResponse> {}
