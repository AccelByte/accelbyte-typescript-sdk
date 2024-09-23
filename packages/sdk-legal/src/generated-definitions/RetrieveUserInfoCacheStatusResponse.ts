/*
 * Copyright (c) 2022-2024 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { z } from 'zod'

export const RetrieveUserInfoCacheStatusResponse = z.object({ lastUpdatedAt: z.string(), namespace: z.string() })

export interface RetrieveUserInfoCacheStatusResponse extends z.TypeOf<typeof RetrieveUserInfoCacheStatusResponse> {}
