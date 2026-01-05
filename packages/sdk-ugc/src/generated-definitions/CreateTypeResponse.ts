/*
 * Copyright (c) 2022-2026 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { z } from 'zod'

export const CreateTypeResponse = z.object({
  id: z.string(),
  namespace: z.string(),
  parentNamespace: z.string(),
  subtype: z.array(z.string()),
  type: z.string()
})

export interface CreateTypeResponse extends z.TypeOf<typeof CreateTypeResponse> {}
