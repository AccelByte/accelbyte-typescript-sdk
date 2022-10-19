/*
 * Copyright (c) 2022 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { z } from 'zod'

export const CalculateDiffCacheRequest = z.object({ sourceBuildId: z.string().nullish(), destinationBuildId: z.string().nullish() })

export type CalculateDiffCacheRequest = z.TypeOf<typeof CalculateDiffCacheRequest>
