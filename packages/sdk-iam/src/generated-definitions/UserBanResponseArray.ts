/*
 * Copyright (c) 2022-2025 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { z } from 'zod'
import { UserBanResponse } from './UserBanResponse.js'

export const UserBanResponseArray = z.array(UserBanResponse)

export interface UserBanResponseArray extends z.TypeOf<typeof UserBanResponseArray> {}
