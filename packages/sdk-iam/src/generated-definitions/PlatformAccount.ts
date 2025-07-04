/*
 * Copyright (c) 2022-2025 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { z } from 'zod'

export const PlatformAccount = z.object({ namespace: z.string(), platformId: z.string().nullish(), platformUserId: z.string() })

export interface PlatformAccount extends z.TypeOf<typeof PlatformAccount> {}
