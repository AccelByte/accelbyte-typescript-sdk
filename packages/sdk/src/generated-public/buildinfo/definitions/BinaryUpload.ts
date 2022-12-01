/*
 * Copyright (c) 2022 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { z } from 'zod'

export const BinaryUpload = z.object({
  hash: z.string().nullish(),
  contentMD5: z.string().nullish(),
  contentLength: z.number().int().nullish(),
  blockSize: z.number().int().nullish()
})

export type BinaryUpload = z.TypeOf<typeof BinaryUpload>
