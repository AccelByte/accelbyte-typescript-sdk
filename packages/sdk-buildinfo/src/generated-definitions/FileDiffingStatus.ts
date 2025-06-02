/*
 * Copyright (c) 2022-2025 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { z } from 'zod'

export const FileDiffingStatus = z.object({
  destinationBuildId: z.string().nullish(),
  destinationControlFileUuid: z.string().nullish(),
  destinationFileChecksum: z.string().nullish(),
  destinationFilePath: z.string().nullish(),
  destinationFileUuid: z.string().nullish(),
  destinationMissingBytesFileUuid: z.string().nullish(),
  diffFileUrl: z.string().nullish(),
  diffFileUuid: z.string().nullish(),
  namespace: z.string().nullish(),
  preDiffStatus: z.number().int().nullish(),
  retry: z.boolean().nullish(),
  sourceBuildId: z.string().nullish(),
  sourceFileChecksum: z.string().nullish(),
  status: z.number().int().nullish()
})

export interface FileDiffingStatus extends z.TypeOf<typeof FileDiffingStatus> {}
