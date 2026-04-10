/*
 * Copyright (c) 2022-2026 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { z } from 'zod'
import { UserResponse } from './UserResponse.js'

export const UserResponseArray = z.array(UserResponse)

export interface UserResponseArray extends z.TypeOf<typeof UserResponseArray> {}
