/*
 * Copyright (c) 2022-2025 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { z } from 'zod'
import { GroupAndRoleMappingForPatch } from './GroupAndRoleMappingForPatch.js'

export const SsoConfigPatchReq = z.object({
  googleKey: z.record(z.any()).nullish(),
  groupConfigs: z.array(GroupAndRoleMappingForPatch).nullish()
})

export interface SsoConfigPatchReq extends z.TypeOf<typeof SsoConfigPatchReq> {}
