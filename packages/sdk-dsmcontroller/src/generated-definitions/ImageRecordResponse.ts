/*
 * Copyright (c) 2022-2025 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { z } from 'zod'
import { ImageReplication } from './ImageReplication.js'

export const ImageRecordResponse = z.object({
  artifactPath: z.string().nullish(),
  coreDumpEnabled: z.boolean().nullish(),
  createdAt: z.string(),
  deployments: z.array(z.string()).nullish(),
  dockerPath: z.string(),
  image: z.string(),
  imageReplications: z.array(ImageReplication).nullish(),
  imageReplicationsMap: z.record(ImageReplication).nullish(),
  imageSize: z.number().int(),
  modifiedBy: z.string(),
  namespace: z.string(),
  persistent: z.boolean(),
  ulimitFileSize: z.number().int().nullish(),
  updatedAt: z.string(),
  version: z.string()
})

export interface ImageRecordResponse extends z.TypeOf<typeof ImageRecordResponse> {}
