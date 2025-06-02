/*
 * Copyright (c) 2022-2025 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { z } from 'zod'

export const RevokeItemSummary = z.object({
  itemId: z.string().nullish(),
  itemSku: z.string().nullish(),
  itemType: z.string().nullish(),
  revokeStatus: z.enum(['COMPLETED', 'SKIPPED']).nullish()
})

export interface RevokeItemSummary extends z.TypeOf<typeof RevokeItemSummary> {}
