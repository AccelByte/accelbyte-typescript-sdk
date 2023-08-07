/*
 * Copyright (c) 2022-2023 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { z } from 'zod'

export const BinaryInfoResponse = z.object({
  content_type: z.string(),
  created_at: z.string(),
  file_location: z.string(),
  updated_at: z.string(),
  url: z.string().nullish(),
  version: z.number().int()
})

export interface BinaryInfoResponse extends z.TypeOf<typeof BinaryInfoResponse> {}
