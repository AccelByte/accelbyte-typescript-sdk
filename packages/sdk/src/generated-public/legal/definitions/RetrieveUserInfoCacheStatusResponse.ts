/*
 * Copyright (c) 2022 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { z } from 'zod'

export const RetrieveUserInfoCacheStatusResponse = z.object({ namespace: z.string(), lastUpdatedAt: z.string() })

export type RetrieveUserInfoCacheStatusResponse = z.TypeOf<typeof RetrieveUserInfoCacheStatusResponse>
