/*
 * Copyright (c) 2022-2023 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { z } from 'zod'

export const KeyGroupDynamicInfo = z.object({
  availableSaleCount: z.number().int(),
  quantity: z.number().int(),
  saleCount: z.number().int()
})

export interface KeyGroupDynamicInfo extends z.TypeOf<typeof KeyGroupDynamicInfo> {}
