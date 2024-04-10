/*
 * Copyright (c) 2022-2024 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { z } from 'zod'

export const NamespaceContext = z.object({
  namespace: z.string().nullish(),
  publisherNamespace: z.string().nullish(),
  studioNamespace: z.string().nullish(),
  type: z.enum(['Game', 'Publisher', 'Studio']).nullish()
})

export interface NamespaceContext extends z.TypeOf<typeof NamespaceContext> {}
