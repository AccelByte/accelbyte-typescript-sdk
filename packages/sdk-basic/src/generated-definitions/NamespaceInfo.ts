/*
 * Copyright (c) 2022-2026 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { z } from 'zod'

export const NamespaceInfo = z.object({
  clientId: z.string().nullish(),
  createdAt: z.string().nullish(),
  displayName: z.string(),
  namespace: z.string(),
  parentNamespace: z.string().nullish(),
  status: z.enum(['ACTIVE', 'DELETED', 'INACTIVE']).nullish(),
  updatedAt: z.string().nullish()
})

export interface NamespaceInfo extends z.TypeOf<typeof NamespaceInfo> {}
