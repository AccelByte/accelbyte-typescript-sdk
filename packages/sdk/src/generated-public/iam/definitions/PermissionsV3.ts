/*
 * Copyright (c) 2022 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { z } from 'zod'
import { PermissionV3 } from './PermissionV3'

export const PermissionsV3 = z.object({ permissions: z.array(PermissionV3) })

export type PermissionsV3 = z.TypeOf<typeof PermissionsV3>
