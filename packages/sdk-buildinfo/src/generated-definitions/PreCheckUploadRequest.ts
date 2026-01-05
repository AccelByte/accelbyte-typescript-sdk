/*
 * Copyright (c) 2022-2026 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { z } from 'zod'

export const PreCheckUploadRequest = z.object({
  destinationBuildId: z.string().nullish(),
  destinationFilePath: z.string().nullish(),
  sourceBuildId: z.string().nullish()
})

export interface PreCheckUploadRequest extends z.TypeOf<typeof PreCheckUploadRequest> {}
