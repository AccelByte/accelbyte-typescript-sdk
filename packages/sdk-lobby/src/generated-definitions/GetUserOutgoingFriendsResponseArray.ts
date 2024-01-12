/*
 * Copyright (c) 2022-2024 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { z } from 'zod'
import { GetUserOutgoingFriendsResponse } from './GetUserOutgoingFriendsResponse.js'

export const GetUserOutgoingFriendsResponseArray = z.array(GetUserOutgoingFriendsResponse)

export interface GetUserOutgoingFriendsResponseArray extends z.TypeOf<typeof GetUserOutgoingFriendsResponseArray> {}
