/*
 * Copyright (c) 2022-2023 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { z } from 'zod'

export const ImageRecord = z.object({
  artifactPath: z.string(),
  createdAt: z.string(),
  dockerPath: z.string(),
  image: z.string(),
  imageSize: z.number().int(),
  modifiedBy: z.string(),
  namespace: z.string(),
  persistent: z.boolean(),
  updatedAt: z.string(),
  version: z.string()
})

export interface ImageRecord extends z.TypeOf<typeof ImageRecord> {}
