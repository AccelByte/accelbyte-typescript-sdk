/*
 * Copyright (c) 2022-2023 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { z } from 'zod'

export const ImageRecordUpdate = z.object({
  artifactPath: z.string(),
  image: z.string(),
  namespace: z.string(),
  persistent: z.boolean(),
  version: z.string()
})

export interface ImageRecordUpdate extends z.TypeOf<typeof ImageRecordUpdate> {}
