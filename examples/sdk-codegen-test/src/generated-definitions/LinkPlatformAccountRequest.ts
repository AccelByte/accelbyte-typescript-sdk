/*
 * Copyright (c) 2022-2026 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { z } from 'zod'

export const LinkPlatformAccountRequest = z.object({ platformId: z.string(), platformUserId: z.string() })

export interface LinkPlatformAccountRequest extends z.TypeOf<typeof LinkPlatformAccountRequest> {}
