/*
 * Copyright (c) 2022-2025 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { z } from 'zod'
import { SsoConfigPatchReq } from './SsoConfigPatchReq.js'

export const PlatformDomainPatchRequest = z.object({
  affectedClientIDs: z.array(z.string()).nullish(),
  assignedNamespaces: z.array(z.string()).nullish(),
  domain: z.string(),
  roleId: z.string().nullish(),
  ssoCfg: SsoConfigPatchReq.nullish()
})

export interface PlatformDomainPatchRequest extends z.TypeOf<typeof PlatformDomainPatchRequest> {}
