/*
 * Copyright (c) 2022-2024 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { z } from 'zod'

export const ListViewInfo = z.object({
  createdAt: z.string(),
  displayOrder: z.number().int(),
  name: z.string(),
  namespace: z.string(),
  updatedAt: z.string(),
  viewId: z.string()
})

export interface ListViewInfo extends z.TypeOf<typeof ListViewInfo> {}
