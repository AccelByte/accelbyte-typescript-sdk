/*
 * Copyright (c) 2022-2026 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { z } from 'zod'
import { LoadIncomingFriendsWithTimeResponse } from './LoadIncomingFriendsWithTimeResponse.js'

export const LoadIncomingFriendsWithTimeResponseArray = z.array(LoadIncomingFriendsWithTimeResponse)

export interface LoadIncomingFriendsWithTimeResponseArray extends z.TypeOf<typeof LoadIncomingFriendsWithTimeResponseArray> {}
