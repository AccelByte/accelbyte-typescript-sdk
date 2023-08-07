/*
 * Copyright (c) 2022-2023 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { z } from 'zod'
import { ImageReplication } from './ImageReplication.js'
import { UploaderFlag } from './UploaderFlag.js'

export const PatchImageRecord = z.object({
  artifactPath: z.string(),
  createdAt: z.string(),
  dockerPath: z.string(),
  image: z.string(),
  imageReplications: z.string(),
  imageReplicationsMap: z.record(ImageReplication),
  imageSize: z.number().int(),
  modifiedBy: z.string(),
  namespace: z.string(),
  patchVersion: z.string(),
  persistent: z.boolean(),
  updatedAt: z.string(),
  uploaderFlags: z.array(UploaderFlag),
  version: z.string()
})

export interface PatchImageRecord extends z.TypeOf<typeof PatchImageRecord> {}
