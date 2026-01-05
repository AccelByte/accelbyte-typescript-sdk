/*
 * Copyright (c) 2022-2026 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { z } from 'zod'

export const AdminContentRequestV2 = z.object({
  contentType: z.string().nullish(),
  customAttributes: z.record(z.any()).nullish(),
  fileExtension: z.string().nullish(),
  name: z.string(),
  shareCode: z.string().nullish(),
  subType: z.string().nullish(),
  tags: z.array(z.string()).nullish(),
  type: z.string().nullish()
})

export interface AdminContentRequestV2 extends z.TypeOf<typeof AdminContentRequestV2> {}
