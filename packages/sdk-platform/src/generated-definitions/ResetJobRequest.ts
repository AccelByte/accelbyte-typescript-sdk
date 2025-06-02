/*
 * Copyright (c) 2022-2025 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { z } from 'zod'

export const ResetJobRequest = z.object({ env: z.enum(['LIVE', 'SANDBOX']).nullish(), lastTime: z.string().nullish() })

export interface ResetJobRequest extends z.TypeOf<typeof ResetJobRequest> {}
