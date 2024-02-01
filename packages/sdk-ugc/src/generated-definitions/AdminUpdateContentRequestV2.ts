/*
 * Copyright (c) 2022-2024 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { z } from 'zod'

export const AdminUpdateContentRequestV2 = z.object({
  customAttributes: z.record(z.any()).nullish(),
  name: z.string().nullish(),
  shareCode: z.string().nullish(),
  subType: z.string().nullish(),
  tags: z.array(z.string()).nullish(),
  type: z.string().nullish()
})

export interface AdminUpdateContentRequestV2 extends z.TypeOf<typeof AdminUpdateContentRequestV2> {}
