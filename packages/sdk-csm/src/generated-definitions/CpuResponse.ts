/*
 * Copyright (c) 2022-2026 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { z } from 'zod'

export const CpuResponse = z.object({ cpuLimit: z.number().int().nullish(), requestCPU: z.number().int() })

export interface CpuResponse extends z.TypeOf<typeof CpuResponse> {}
