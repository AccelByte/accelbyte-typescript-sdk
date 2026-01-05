/*
 * Copyright (c) 2022-2026 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { z } from 'zod'
import { NativeSessionMember } from './NativeSessionMember.js'

export const NativeSession = z.object({
  CreatedAt: z.string(),
  DeletedAt: z.string(),
  PushContextID: z.string(),
  id: z.string(),
  members: z.array(NativeSessionMember),
  namespace: z.string(),
  nativeSessionPlatforms: z.record(z.string()),
  persistent: z.boolean()
})

export interface NativeSession extends z.TypeOf<typeof NativeSession> {}
