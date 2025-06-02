/*
 * Copyright (c) 2022-2025 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { z } from 'zod'

export const NativeFriendSyncResponse = z.object({ detail: z.string().nullish(), platformId: z.string(), status: z.string() })

export interface NativeFriendSyncResponse extends z.TypeOf<typeof NativeFriendSyncResponse> {}
