/*
 * Copyright (c) 2022-2026 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { z } from 'zod'

export const UpdateContentRequestV2 = z.object({
  customAttributes: z.record(z.any()).nullish(),
  name: z.string().nullish(),
  subType: z.string().nullish(),
  tags: z.array(z.string()).nullish(),
  type: z.string().nullish()
})

export interface UpdateContentRequestV2 extends z.TypeOf<typeof UpdateContentRequestV2> {}
