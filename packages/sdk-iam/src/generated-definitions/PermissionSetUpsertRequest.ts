/*
 * Copyright (c) 2022-2024 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { z } from 'zod'
import { PermissionGroup } from './PermissionGroup.js'

export const PermissionSetUpsertRequest = z.object({
  docLink: z.string(),
  groups: z.array(PermissionGroup),
  module: z.string(),
  moduleId: z.string()
})

export interface PermissionSetUpsertRequest extends z.TypeOf<typeof PermissionSetUpsertRequest> {}
