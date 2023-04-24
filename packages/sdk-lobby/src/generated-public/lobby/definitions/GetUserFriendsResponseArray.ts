/*
 * Copyright (c) 2022-2023 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { z } from 'zod'
import { GetUserFriendsResponse } from './GetUserFriendsResponse'

export const GetUserFriendsResponseArray = z.array(GetUserFriendsResponse)

export interface GetUserFriendsResponseArray extends z.TypeOf<typeof GetUserFriendsResponseArray> {}
