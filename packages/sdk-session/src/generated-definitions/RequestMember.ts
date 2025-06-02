/*
 * Copyright (c) 2022-2025 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { z } from 'zod'

export const RequestMember = z.object({ ID: z.string(), PlatformID: z.string(), PlatformUserID: z.string() })

export interface RequestMember extends z.TypeOf<typeof RequestMember> {}
