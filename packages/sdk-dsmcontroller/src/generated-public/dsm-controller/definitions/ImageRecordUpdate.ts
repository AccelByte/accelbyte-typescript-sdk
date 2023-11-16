/*
 * Copyright (c) 2022-2023 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { z } from 'zod'
import { ImageReplication } from './ImageReplication.js'

export const ImageRecordUpdate = z.object({
  artifactPath: z.string(),
  coreDumpEnabled: z.boolean(),
  image: z.string(),
  imageReplicationsMap: z.record(ImageReplication),
  namespace: z.string(),
  patchVersion: z.string(),
  persistent: z.boolean(),
  ulimitFileSize: z.number().int(),
  version: z.string()
})

export interface ImageRecordUpdate extends z.TypeOf<typeof ImageRecordUpdate> {}
