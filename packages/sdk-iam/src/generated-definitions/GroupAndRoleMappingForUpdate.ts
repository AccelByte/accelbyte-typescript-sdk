/*
 * Copyright (c) 2022-2025 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { z } from 'zod'

export const GroupAndRoleMappingForUpdate = z.object({
  assignNamespaces: z.array(z.string()).nullish(),
  group: z.string(),
  roleId: z.string()
})

export interface GroupAndRoleMappingForUpdate extends z.TypeOf<typeof GroupAndRoleMappingForUpdate> {}
