/*
 * Copyright (c) 2022-2025 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { z } from 'zod'

export const MemoryResponse = z.object({ memoryLimit: z.number().int().nullish(), requestMemory: z.number().int().nullish() })

export interface MemoryResponse extends z.TypeOf<typeof MemoryResponse> {}
