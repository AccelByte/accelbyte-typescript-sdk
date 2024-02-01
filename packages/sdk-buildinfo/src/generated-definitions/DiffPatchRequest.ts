/*
 * Copyright (c) 2022-2024 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { z } from 'zod'

export const DiffPatchRequest = z.object({
  destinationBuildId: z.string().nullish(),
  destinationControlFileChecksum: z.string().nullish(),
  destinationControlFileUuid: z.string().nullish(),
  destinationFileChecksum: z.string().nullish(),
  destinationFilePath: z.string().nullish(),
  destinationMissingBytesFileChecksum: z.string().nullish(),
  destinationMissingBytesFileUuid: z.string().nullish(),
  diffFileUrl: z.string().nullish(),
  diffFileUuid: z.string().nullish(),
  namespace: z.string().nullish(),
  requestType: z.number().int().nullish(),
  sourceBuildId: z.string().nullish(),
  sourceFileChecksum: z.string().nullish(),
  sourceFileUuid: z.string().nullish(),
  topicArn: z.string().nullish()
})

export interface DiffPatchRequest extends z.TypeOf<typeof DiffPatchRequest> {}
