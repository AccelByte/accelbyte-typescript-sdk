/*
 * Copyright (c) 2022-2025 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { z } from 'zod'
import { UserResponseV3 } from './UserResponseV3.js'

export const ListUserResponseV3 = z.object({ data: z.array(UserResponseV3) })

export interface ListUserResponseV3 extends z.TypeOf<typeof ListUserResponseV3> {}
