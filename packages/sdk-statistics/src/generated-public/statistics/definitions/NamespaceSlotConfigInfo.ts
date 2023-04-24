/*
 * Copyright (c) 2022-2023 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { z } from 'zod'

export const NamespaceSlotConfigInfo = z.object({
  namespace: z.string().nullish(),
  maxSlots: z.number().int().nullish(),
  maxSlotSize: z.number().int().nullish()
})

export interface NamespaceSlotConfigInfo extends z.TypeOf<typeof NamespaceSlotConfigInfo> {}
