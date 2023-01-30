/*
 * Copyright (c) 2022-2023 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { z } from 'zod'

export const ListViewInfo = z.object({
  viewId: z.string(),
  namespace: z.string(),
  name: z.string(),
  displayOrder: z.number().int(),
  createdAt: z.string(),
  updatedAt: z.string()
})

export type ListViewInfo = z.TypeOf<typeof ListViewInfo>
