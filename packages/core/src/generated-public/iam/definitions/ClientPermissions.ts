/*
 * Copyright (c) 2022 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { z } from 'zod'
import { ClientPermission } from './ClientPermission'

export const ClientPermissions = z.object({ Permissions: z.array(ClientPermission) })

export type ClientPermissions = z.TypeOf<typeof ClientPermissions>
