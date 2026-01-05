/*
 * Copyright (c) 2022-2026 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { z } from 'zod'
import { SsoConfig } from './SsoConfig.js'

export const PlatformDomainUpdateRequest = z.object({
  affectedClientIDs: z.array(z.string()),
  assignedNamespaces: z.array(z.string()),
  domain: z.string(),
  roleId: z.string(),
  ssoCfg: SsoConfig.nullish()
})

export interface PlatformDomainUpdateRequest extends z.TypeOf<typeof PlatformDomainUpdateRequest> {}
