/*
 * Copyright (c) 2022-2024 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { z } from 'zod'

export const PlatformAccountClosureClientRequest = z.object({ clientId: z.string(), secret: z.string() })

export interface PlatformAccountClosureClientRequest extends z.TypeOf<typeof PlatformAccountClosureClientRequest> {}
