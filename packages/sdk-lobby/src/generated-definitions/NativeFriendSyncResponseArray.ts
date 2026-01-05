/*
 * Copyright (c) 2022-2026 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { z } from 'zod'
import { NativeFriendSyncResponse } from './NativeFriendSyncResponse.js'

export const NativeFriendSyncResponseArray = z.array(NativeFriendSyncResponse)

export interface NativeFriendSyncResponseArray extends z.TypeOf<typeof NativeFriendSyncResponseArray> {}
