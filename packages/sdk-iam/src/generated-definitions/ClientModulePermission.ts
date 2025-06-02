/*
 * Copyright (c) 2022-2025 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { z } from 'zod'
import { ClientSelectedGroup } from './ClientSelectedGroup.js'

export const ClientModulePermission = z.object({ moduleId: z.string(), selectedGroups: z.array(ClientSelectedGroup) })

export interface ClientModulePermission extends z.TypeOf<typeof ClientModulePermission> {}
