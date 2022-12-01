/*
 * Copyright (c) 2022 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { z } from 'zod'

export const FileDiffingStatus = z.object({
  namespace: z.string().nullish(),
  sourceBuildId: z.string().nullish(),
  destinationBuildId: z.string().nullish(),
  destinationFilePath: z.string().nullish(),
  sourceFileChecksum: z.string().nullish(),
  destinationFileChecksum: z.string().nullish(),
  destinationMissingBytesFileUuid: z.string().nullish(),
  destinationControlFileUuid: z.string().nullish(),
  diffFileUuid: z.string().nullish(),
  destinationFileUuid: z.string().nullish(),
  retry: z.boolean().nullish(),
  status: z.number().int().nullish(),
  diffFileUrl: z.string().nullish(),
  preDiffStatus: z.number().int().nullish()
})

export type FileDiffingStatus = z.TypeOf<typeof FileDiffingStatus>
