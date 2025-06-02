/*
 * Copyright (c) 2022-2025 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { z } from 'zod'

export const PsnAppServerCredentials = z.object({
  clientId: z.string(),
  clientSecret: z.string(),
  createdAt: z.string(),
  createdBy: z.string(),
  scope: z.string(),
  updatedAt: z.string()
})

export interface PsnAppServerCredentials extends z.TypeOf<typeof PsnAppServerCredentials> {}
