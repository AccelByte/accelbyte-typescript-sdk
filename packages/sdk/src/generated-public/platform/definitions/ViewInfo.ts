/*
 * Copyright (c) 2022-2023 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { z } from 'zod'

export const ViewInfo = z.object({
  title: z.string(),
  description: z.string().nullish(),
  longDescription: z.string().nullish(),
  viewId: z.string(),
  namespace: z.string(),
  name: z.string(),
  displayOrder: z.number().int(),
  createdAt: z.string(),
  updatedAt: z.string(),
  localExt: z.record(z.any()).nullish()
})

export type ViewInfo = z.TypeOf<typeof ViewInfo>
