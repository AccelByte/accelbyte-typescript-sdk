/*
 * Copyright (c) 2022-2025 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { z } from 'zod'

export const DifferentialUploadSummary = z.object({
  destinationFileUuid: z.string().nullish(),
  diffFileUrl: z.string().nullish(),
  diffFileUuid: z.string().nullish(),
  presignedUrl: z.string().nullish(),
  status: z.number().int().nullish(),
  uuid: z.string().nullish()
})

export interface DifferentialUploadSummary extends z.TypeOf<typeof DifferentialUploadSummary> {}
