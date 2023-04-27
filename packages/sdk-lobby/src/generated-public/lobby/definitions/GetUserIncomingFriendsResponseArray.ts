/*
 * Copyright (c) 2022-2023 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { z } from 'zod'
import { GetUserIncomingFriendsResponse } from './GetUserIncomingFriendsResponse.js'

export const GetUserIncomingFriendsResponseArray = z.array(GetUserIncomingFriendsResponse)

export interface GetUserIncomingFriendsResponseArray extends z.TypeOf<typeof GetUserIncomingFriendsResponseArray> {}
