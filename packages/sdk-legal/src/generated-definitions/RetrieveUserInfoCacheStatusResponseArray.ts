/*
 * Copyright (c) 2022-2026 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { z } from 'zod'
import { RetrieveUserInfoCacheStatusResponse } from './RetrieveUserInfoCacheStatusResponse.js'

export const RetrieveUserInfoCacheStatusResponseArray = z.array(RetrieveUserInfoCacheStatusResponse)

export interface RetrieveUserInfoCacheStatusResponseArray extends z.TypeOf<typeof RetrieveUserInfoCacheStatusResponseArray> {}
