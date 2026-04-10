/*
 * Copyright (c) 2022-2026 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { z } from 'zod'

export const GroupAndRoleMappingForPatch = z.object({
  assignNamespaces: z.array(z.string()).nullish(),
  group: z.string(),
  roleId: z.string().nullish()
})

export interface GroupAndRoleMappingForPatch extends z.TypeOf<typeof GroupAndRoleMappingForPatch> {}
