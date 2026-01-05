/*
 * Copyright (c) 2022-2026 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { z } from 'zod'
import { CreditRevocation } from './CreditRevocation.js'
import { EntitlementRevocation } from './EntitlementRevocation.js'
import { FulfillmentItem } from './FulfillmentItem.js'
import { FulfillmentStateInfo } from './FulfillmentStateInfo.js'
import { ItemRevocation } from './ItemRevocation.js'

export const RevokeFulfillmentV2Result = z.object({
  creditRevocations: z.array(CreditRevocation).nullish(),
  entitlementRevocations: z.array(EntitlementRevocation).nullish(),
  id: z.string(),
  itemRevocations: z.array(ItemRevocation).nullish(),
  items: z.array(FulfillmentItem),
  namespace: z.string(),
  state: z.enum(['FULFILLED', 'FULFILL_FAILED', 'REVOKED', 'REVOKE_FAILED']),
  stateInfo: FulfillmentStateInfo,
  transactionId: z.string(),
  userId: z.string()
})

export interface RevokeFulfillmentV2Result extends z.TypeOf<typeof RevokeFulfillmentV2Result> {}
