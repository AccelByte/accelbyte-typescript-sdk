/*
 * Copyright (c) 2022-2026 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { z } from 'zod'

export const SlotMetadataUpdate = z.object({
  customAttribute: z.string().nullish(),
  label: z.string().nullish(),
  tags: z.array(z.string()).nullish()
})

export interface SlotMetadataUpdate extends z.TypeOf<typeof SlotMetadataUpdate> {}
