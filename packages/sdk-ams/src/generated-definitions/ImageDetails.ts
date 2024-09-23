/*
 * Copyright (c) 2022-2024 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { z } from 'zod'
import { ReferencingFleet } from './ReferencingFleet.js'
import { Time } from './Time.js'

export const ImageDetails = z.object({
  createdAt: Time,
  deleteAt: Time,
  executable: z.string(),
  id: z.string(),
  isProtected: z.boolean(),
  name: z.string(),
  referencingFleets: z.array(ReferencingFleet),
  sizeInByte: z.number().int(),
  status: z.string(),
  tags: z.array(z.string()),
  uploadedAt: Time,
  uploadedBy: z.string()
})

export interface ImageDetails extends z.TypeOf<typeof ImageDetails> {}
