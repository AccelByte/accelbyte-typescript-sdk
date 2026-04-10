/*
 * Copyright (c) 2022-2026 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { z } from 'zod'
import { ClientModulePermission } from './ClientModulePermission.js'
import { DefaultFieldValue } from './DefaultFieldValue.js'

export const ClientTemplate = z.object({
  basicRequiredPermissions: z.array(ClientModulePermission),
  defaultValues: z.array(DefaultFieldValue),
  description: z.string(),
  id: z.string(),
  requiredFields: z.array(z.string()),
  type: z.string()
})

export interface ClientTemplate extends z.TypeOf<typeof ClientTemplate> {}
