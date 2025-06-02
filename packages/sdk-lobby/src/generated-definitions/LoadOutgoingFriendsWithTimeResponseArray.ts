/*
 * Copyright (c) 2022-2025 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { z } from 'zod'
import { LoadOutgoingFriendsWithTimeResponse } from './LoadOutgoingFriendsWithTimeResponse.js'

export const LoadOutgoingFriendsWithTimeResponseArray = z.array(LoadOutgoingFriendsWithTimeResponse)

export interface LoadOutgoingFriendsWithTimeResponseArray extends z.TypeOf<typeof LoadOutgoingFriendsWithTimeResponseArray> {}
