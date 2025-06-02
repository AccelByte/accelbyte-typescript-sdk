/*
 * Copyright (c) 2022-2025 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { z } from 'zod'

export const CommitDiffCacheRequest = z.object({ destinationBuildId: z.string().nullish(), sourceBuildId: z.string().nullish() })

export interface CommitDiffCacheRequest extends z.TypeOf<typeof CommitDiffCacheRequest> {}
