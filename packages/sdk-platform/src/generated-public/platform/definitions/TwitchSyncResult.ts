/*
 * Copyright (c) 2022-2023 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { z } from 'zod'

export const TwitchSyncResult = z.object({
  iapOrderStatus: z.enum(['FAILED', 'FULFILLED', 'VERIFIED']).nullish(),
  itemSku: z.string().nullish(),
  transactionId: z.string().nullish()
})

export interface TwitchSyncResult extends z.TypeOf<typeof TwitchSyncResult> {}
