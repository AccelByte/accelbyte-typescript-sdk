/*
 * Copyright (c) 2022-2024 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { z } from 'zod'

export const PlatformLinkingHistory = z.object({ platformDisplayName: z.string(), platformID: z.string(), platformUserID: z.string() })

export interface PlatformLinkingHistory extends z.TypeOf<typeof PlatformLinkingHistory> {}
