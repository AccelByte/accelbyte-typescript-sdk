/*
 * Copyright (c) 2022-2024 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { z } from 'zod'
import { FulfillmentActionHistory } from './FulfillmentActionHistory.js'
import { FulfillmentItem } from './FulfillmentItem.js'
import { FulfillmentStateInfo } from './FulfillmentStateInfo.js'

export const FulfillmentInfo = z.object({
  actions: z.array(FulfillmentActionHistory).nullish(),
  createdAt: z.string(),
  id: z.string(),
  items: z.array(FulfillmentItem).nullish(),
  namespace: z.string(),
  state: z.enum(['FULFILLED', 'FULFILL_FAILED', 'REVOKED', 'REVOKE_FAILED']).nullish(),
  stateInfo: FulfillmentStateInfo.nullish(),
  transactionId: z.string().nullish(),
  updatedAt: z.string(),
  userId: z.string()
})

export interface FulfillmentInfo extends z.TypeOf<typeof FulfillmentInfo> {}
