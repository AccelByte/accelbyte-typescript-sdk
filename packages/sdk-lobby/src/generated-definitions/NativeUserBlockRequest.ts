/*
 * Copyright (c) 2022-2026 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { z } from 'zod'

export const NativeUserBlockRequest = z.object({ platformId: z.string(), psnEnv: z.string().nullish() })

export interface NativeUserBlockRequest extends z.TypeOf<typeof NativeUserBlockRequest> {}
