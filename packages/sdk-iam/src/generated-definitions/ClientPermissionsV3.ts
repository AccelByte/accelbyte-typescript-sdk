/*
 * Copyright (c) 2022-2024 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { z } from 'zod'
import { ClientPermissionV3 } from './ClientPermissionV3.js'

export const ClientPermissionsV3 = z.object({ permissions: z.array(ClientPermissionV3) })

export interface ClientPermissionsV3 extends z.TypeOf<typeof ClientPermissionsV3> {}
