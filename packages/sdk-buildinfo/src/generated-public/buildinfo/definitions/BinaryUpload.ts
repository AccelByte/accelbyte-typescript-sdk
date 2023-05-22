/*
 * Copyright (c) 2022-2023 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { z } from 'zod'

export const BinaryUpload = z.object({
  blockSize: z.number().int().nullish(),
  contentLength: z.number().int().nullish(),
  contentMD5: z.string().nullish(),
  hash: z.string().nullish()
})

export interface BinaryUpload extends z.TypeOf<typeof BinaryUpload> {}
