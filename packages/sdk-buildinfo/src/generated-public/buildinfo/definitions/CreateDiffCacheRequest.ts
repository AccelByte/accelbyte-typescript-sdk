/*
 * Copyright (c) 2022-2023 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { z } from 'zod'

export const CreateDiffCacheRequest = z.object({
  destinationBuildId: z.string().nullish(),
  diffFile: z.string().nullish(),
  filePath: z.string().nullish(),
  sourceBuildId: z.string().nullish()
})

export interface CreateDiffCacheRequest extends z.TypeOf<typeof CreateDiffCacheRequest> {}
