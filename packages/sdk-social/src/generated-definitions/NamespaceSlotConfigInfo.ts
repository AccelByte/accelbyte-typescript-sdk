/*
 * Copyright (c) 2022-2025 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { z } from 'zod'

export const NamespaceSlotConfigInfo = z.object({
  maxSlotSize: z.number().int().nullish(),
  maxSlots: z.number().int().nullish(),
  namespace: z.string().nullish()
})

export interface NamespaceSlotConfigInfo extends z.TypeOf<typeof NamespaceSlotConfigInfo> {}
