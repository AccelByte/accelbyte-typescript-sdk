/*
 * Copyright (c) 2022-2024 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { z } from 'zod'

export const CopyContentRequest = z.object({
  customAttributes: z.record(z.any()).nullish(),
  name: z.string().nullish(),
  subType: z.string().nullish(),
  tags: z.array(z.string()).nullish(),
  targetChannelId: z.string(),
  type: z.string().nullish()
})

export interface CopyContentRequest extends z.TypeOf<typeof CopyContentRequest> {}
