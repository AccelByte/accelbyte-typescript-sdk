/*
 * Copyright (c) 2022-2025 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { z } from 'zod'

export const CpuRequest = z.object({ requestCPU: z.number().int() })

export interface CpuRequest extends z.TypeOf<typeof CpuRequest> {}
