/*
 * Copyright (c) 2022-2025 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { z } from 'zod'

export const SlotInfo = z.object({
  checksum: z.string().nullish(),
  customAttribute: z.string().nullish(),
  dateAccessed: z.string().nullish(),
  dateCreated: z.string().nullish(),
  dateModified: z.string().nullish(),
  label: z.string().nullish(),
  mimeType: z.string().nullish(),
  namespace: z.string().nullish(),
  originalName: z.string().nullish(),
  size: z.number().int().nullish(),
  slotId: z.string().nullish(),
  storedName: z.string().nullish(),
  tags: z.array(z.string()).nullish(),
  userId: z.string().nullish()
})

export interface SlotInfo extends z.TypeOf<typeof SlotInfo> {}
