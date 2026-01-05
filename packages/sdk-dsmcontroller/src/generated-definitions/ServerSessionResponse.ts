/*
 * Copyright (c) 2022-2026 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { z } from 'zod'

export const ServerSessionResponse = z.object({ session_id: z.string() })

export interface ServerSessionResponse extends z.TypeOf<typeof ServerSessionResponse> {}
