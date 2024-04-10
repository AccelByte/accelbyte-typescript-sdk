/*
 * Copyright (c) 2022-2024 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { z } from 'zod'
import { ClientPermissionSet } from './ClientPermissionSet.js'

export const ListClientPermissionSet = z.object({ clientPermissions: z.array(ClientPermissionSet) })

export interface ListClientPermissionSet extends z.TypeOf<typeof ListClientPermissionSet> {}
