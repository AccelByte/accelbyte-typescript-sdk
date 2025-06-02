/*
 * Copyright (c) 2022-2025 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { z } from 'zod'
import { ImageReplication } from './ImageReplication.js'

export const PatchImageRecord = z.object({
  artifactPath: z.string().nullish(),
  coreDumpEnabled: z.boolean().nullish(),
  createdAt: z.string(),
  dockerPath: z.string(),
  image: z.string(),
  imageReplications: z.array(ImageReplication).nullish(),
  imageReplicationsMap: z.record(ImageReplication).nullish(),
  imageSize: z.number().int(),
  modifiedBy: z.string(),
  namespace: z.string(),
  patchVersion: z.string(),
  persistent: z.boolean(),
  ulimitFileSize: z.number().int().nullish(),
  updatedAt: z.string(),
  uploaderFlag: z.string(),
  version: z.string()
})

export interface PatchImageRecord extends z.TypeOf<typeof PatchImageRecord> {}
