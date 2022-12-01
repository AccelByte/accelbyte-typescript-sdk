/*
 * Copyright (c) 2022 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { z } from 'zod'
import { ClientPermissionV3 } from './ClientPermissionV3'

export const ClientPermissionsV3 = z.object({ permissions: z.array(ClientPermissionV3) })

export type ClientPermissionsV3 = z.TypeOf<typeof ClientPermissionsV3>
