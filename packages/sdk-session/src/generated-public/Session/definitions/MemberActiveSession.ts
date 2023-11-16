/*
 * Copyright (c) 2022-2023 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { z } from 'zod'

export const MemberActiveSession = z.object({
  CreatedAt: z.string(),
  ID: z.string(),
  MemberID: z.string(),
  Namespace: z.string(),
  SessionIDs: z.array(z.string()),
  SessionTemplate: z.string(),
  Total: z.number().int(),
  UpdatedAt: z.string()
})

export interface MemberActiveSession extends z.TypeOf<typeof MemberActiveSession> {}
