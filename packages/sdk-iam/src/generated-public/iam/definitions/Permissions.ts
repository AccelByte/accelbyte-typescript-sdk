/*
 * Copyright (c) 2022-2023 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { z } from 'zod'
import { Permission } from './Permission.js'

export const Permissions = z.object({ Permissions: z.array(Permission) })

export interface Permissions extends z.TypeOf<typeof Permissions> {}
