/*
 * Copyright (c) 2022-2026 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { z } from 'zod'
import { Time } from './Time.js'

export const ImageListItem = z.object({
  createdAt: Time,
  deleteAt: Time.nullish(),
  executable: z.string(),
  id: z.string(),
  isProtected: z.boolean(),
  name: z.string(),
  referencingConfigs: z.number().int(),
  referencingFleets: z.number().int(),
  sizeInByte: z.number().int(),
  status: z.string(),
  tags: z.array(z.string()),
  uploadedAt: Time,
  uploadedBy: z.string()
})

export interface ImageListItem extends z.TypeOf<typeof ImageListItem> {}
