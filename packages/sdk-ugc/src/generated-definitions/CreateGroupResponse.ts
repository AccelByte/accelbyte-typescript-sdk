/*
 * Copyright (c) 2022-2024 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { z } from 'zod'

export const CreateGroupResponse = z.object({
  contents: z.array(z.string()),
  createdAt: z.string(),
  id: z.string(),
  name: z.string(),
  namespace: z.string(),
  parentNamespace: z.string(),
  userId: z.string()
})

export interface CreateGroupResponse extends z.TypeOf<typeof CreateGroupResponse> {}
