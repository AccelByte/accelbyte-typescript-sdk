/*
 * Copyright (c) 2022-2023 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { z } from 'zod'

export const CreateImagePatchRequest = z.object({
  artifactPath: z.string(),
  coreDumpEnabled: z.boolean(),
  dockerPath: z.string(),
  image: z.string(),
  imageSize: z.number().int(),
  namespace: z.string(),
  patchVersion: z.string(),
  persistent: z.boolean(),
  ulimitFileSize: z.number().int(),
  uploaderFlag: z.string(),
  version: z.string()
})

export interface CreateImagePatchRequest extends z.TypeOf<typeof CreateImagePatchRequest> {}
