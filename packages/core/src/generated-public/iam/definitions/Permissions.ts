/*
 * Copyright (c) 2022 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { z } from 'zod'
import { Permission } from './Permission'

export const Permissions = z.object({ Permissions: z.array(Permission) })

export type Permissions = z.TypeOf<typeof Permissions>
