/*
 * Copyright (c) 2022-2025 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { z } from 'zod'

export const CreateImageRequest = z.object({
  artifactPath: z.string().nullish(),
  coreDumpEnabled: z.boolean().nullish(),
  dockerPath: z.string(),
  image: z.string(),
  imageSize: z.number().int(),
  namespace: z.string(),
  persistent: z.boolean(),
  ulimitFileSize: z.number().int().nullish(),
  version: z.string()
})

export interface CreateImageRequest extends z.TypeOf<typeof CreateImageRequest> {}
