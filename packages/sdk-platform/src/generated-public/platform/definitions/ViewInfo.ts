/*
 * Copyright (c) 2022-2023 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { z } from 'zod'

export const ViewInfo = z.object({
  createdAt: z.string(),
  description: z.string().nullish(),
  displayOrder: z.number().int(),
  localExt: z.record(z.any()).nullish(),
  longDescription: z.string().nullish(),
  name: z.string(),
  namespace: z.string(),
  title: z.string(),
  updatedAt: z.string(),
  viewId: z.string()
})

export interface ViewInfo extends z.TypeOf<typeof ViewInfo> {}
