/*
 * Copyright (c) 2022-2024 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { z } from 'zod'

export const ArtifactUsageResponse = z.object({
  quotaBytes: z.number().int(),
  remainingBytes: z.number().int(),
  usedBytes: z.number().int()
})

export interface ArtifactUsageResponse extends z.TypeOf<typeof ArtifactUsageResponse> {}
