/*
 * Copyright (c) 2022-2023 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { z } from 'zod'

export const NamespaceInfo = z.object({
  namespace: z.string().nullish(),
  displayName: z.string().nullish(),
  status: z.enum(['ACTIVE', 'INACTIVE', 'DELETED']).nullish(),
  parentNamespace: z.string().nullish(),
  clientId: z.string().nullish(),
  createdAt: z.string().nullish(),
  updatedAt: z.string().nullish()
})

export interface NamespaceInfo extends z.TypeOf<typeof NamespaceInfo> {}
