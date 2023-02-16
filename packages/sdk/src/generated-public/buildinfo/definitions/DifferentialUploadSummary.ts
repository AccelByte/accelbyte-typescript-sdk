/*
 * Copyright (c) 2022-2023 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { z } from 'zod'

export const DifferentialUploadSummary = z.object({
  presignedUrl: z.string().nullish(),
  uuid: z.string().nullish(),
  destinationFileUuid: z.string().nullish(),
  diffFileUuid: z.string().nullish(),
  diffFileUrl: z.string().nullish(),
  status: z.number().int().nullish()
})

export interface DifferentialUploadSummary extends z.TypeOf<typeof DifferentialUploadSummary> {}
