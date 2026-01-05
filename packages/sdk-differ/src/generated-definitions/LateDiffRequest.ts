/*
 * Copyright (c) 2022-2026 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { z } from 'zod'

export const LateDiffRequest = z.object({
  destinationBuildId: z.string(),
  namespace: z.string(),
  priority: z.boolean().nullish(),
  sourceBuildId: z.string()
})

export interface LateDiffRequest extends z.TypeOf<typeof LateDiffRequest> {}
