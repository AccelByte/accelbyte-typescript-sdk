/*
 * Copyright (c) 2022-2023 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { z } from 'zod'
import { UserStatItemInfo } from './UserStatItemInfo'

export const UserStatItemInfoArray = z.array(UserStatItemInfo)

export interface UserStatItemInfoArray extends z.TypeOf<typeof UserStatItemInfoArray> {}
