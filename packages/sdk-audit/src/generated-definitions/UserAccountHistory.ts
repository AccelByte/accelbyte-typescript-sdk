/*
 * Copyright (c) 2022-2025 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { z } from 'zod'

export const UserAccountHistory = z.object({
  actionName: z.string(),
  actor: z.string(),
  actorNamespace: z.string(),
  actorType: z.string(),
  category: z.string(),
  createdAt: z.number().int(),
  namespace: z.string(),
  payload: z.record(z.any()),
  userId: z.string()
})

export interface UserAccountHistory extends z.TypeOf<typeof UserAccountHistory> {}
