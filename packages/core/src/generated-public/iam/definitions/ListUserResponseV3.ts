/*
 * Copyright (c) 2022 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { z } from 'zod'
import { UserResponseV3 } from './UserResponseV3'

export const ListUserResponseV3 = z.object({ data: z.array(UserResponseV3) })

export type ListUserResponseV3 = z.TypeOf<typeof ListUserResponseV3>
