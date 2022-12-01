/*
 * Copyright (c) 2022 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { z } from 'zod'

export const PlatformDomainUpdateRequest = z.object({
  affectedClientIDs: z.array(z.string()),
  assignedNamespaces: z.array(z.string()),
  domain: z.string(),
  roleId: z.string()
})

export type PlatformDomainUpdateRequest = z.TypeOf<typeof PlatformDomainUpdateRequest>
