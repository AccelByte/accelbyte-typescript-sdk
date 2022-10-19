/*
 * Copyright (c) 2022 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { z } from 'zod'

export const DiffPatchRequest = z.object({
  namespace: z.string().nullish(),
  sourceBuildId: z.string().nullish(),
  destinationBuildId: z.string().nullish(),
  destinationControlFileUuid: z.string().nullish(),
  destinationControlFileChecksum: z.string().nullish(),
  destinationFilePath: z.string().nullish(),
  destinationFileChecksum: z.string().nullish(),
  requestType: z.number().int().nullish(),
  destinationMissingBytesFileUuid: z.string().nullish(),
  topicArn: z.string().nullish(),
  sourceFileUuid: z.string().nullish(),
  sourceFileChecksum: z.string().nullish(),
  destinationMissingBytesFileChecksum: z.string().nullish(),
  diffFileUuid: z.string().nullish(),
  diffFileUrl: z.string().nullish()
})

export type DiffPatchRequest = z.TypeOf<typeof DiffPatchRequest>
