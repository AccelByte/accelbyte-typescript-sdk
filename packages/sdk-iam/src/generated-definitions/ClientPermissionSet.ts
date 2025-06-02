/*
 * Copyright (c) 2022-2025 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { z } from 'zod'
import { PermissionGroup } from './PermissionGroup.js'

export const ClientPermissionSet = z.object({
  docLink: z.string(),
  groups: z.array(PermissionGroup),
  module: z.string(),
  moduleId: z.string()
})

export interface ClientPermissionSet extends z.TypeOf<typeof ClientPermissionSet> {}
