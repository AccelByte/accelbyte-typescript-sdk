/*
 * Copyright (c) 2022-2025 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { z } from 'zod'
import { UserStatItemInfo } from './UserStatItemInfo.js'

export const UserStatItemInfoArray = z.array(UserStatItemInfo)

export interface UserStatItemInfoArray extends z.TypeOf<typeof UserStatItemInfoArray> {}
