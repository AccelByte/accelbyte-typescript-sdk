/*
 * Copyright (c) 2022-2026 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { z } from 'zod'
import { CreditSummary } from './CreditSummary.js'
import { EntitlementSummary } from './EntitlementSummary.js'
import { FulfillmentItem } from './FulfillmentItem.js'
import { FulfillmentStateInfo } from './FulfillmentStateInfo.js'
import { SubscriptionSummary } from './SubscriptionSummary.js'

export const FulfillmentV2Result = z.object({
  creditSummaries: z.array(CreditSummary).nullish(),
  entitlementSummaries: z.array(EntitlementSummary).nullish(),
  id: z.string().nullish(),
  items: z.array(FulfillmentItem),
  namespace: z.string(),
  state: z.enum(['FULFILLED', 'FULFILL_FAILED', 'REVOKED', 'REVOKE_FAILED']),
  stateInfo: FulfillmentStateInfo,
  subscriptionSummaries: z.array(SubscriptionSummary).nullish(),
  transactionId: z.string(),
  userId: z.string()
})

export interface FulfillmentV2Result extends z.TypeOf<typeof FulfillmentV2Result> {}
