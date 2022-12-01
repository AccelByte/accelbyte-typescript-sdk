/*
 * Copyright (c) 2022 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { z } from 'zod'

export const CreateDiffCacheRequest = z.object({
  sourceBuildId: z.string().nullish(),
  destinationBuildId: z.string().nullish(),
  filePath: z.string().nullish(),
  diffFile: z.string().nullish()
})

export type CreateDiffCacheRequest = z.TypeOf<typeof CreateDiffCacheRequest>
