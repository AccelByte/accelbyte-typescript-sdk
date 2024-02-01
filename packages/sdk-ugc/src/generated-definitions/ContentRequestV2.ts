/*
 * Copyright (c) 2022-2024 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { z } from 'zod'

export const ContentRequestV2 = z.object({
  contentType: z.string().nullish(),
  customAttributes: z.record(z.any()).nullish(),
  fileExtension: z.string().nullish(),
  name: z.string(),
  subType: z.string().nullish(),
  tags: z.array(z.string()).nullish(),
  type: z.string().nullish()
})

export interface ContentRequestV2 extends z.TypeOf<typeof ContentRequestV2> {}
