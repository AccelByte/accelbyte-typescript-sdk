/*
 * Copyright (c) 2022-2026 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { z } from 'zod'
import { CreditSummary } from './CreditSummary.js'
import { EntitlementSummary } from './EntitlementSummary.js'
import { SubscriptionSummary } from './SubscriptionSummary.js'

export const FulfillmentResult = z.object({
  creditSummaries: z.array(CreditSummary).nullish(),
  entitlementSummaries: z.array(EntitlementSummary).nullish(),
  id: z.string().nullish(),
  namespace: z.string(),
  subscriptionSummaries: z.array(SubscriptionSummary).nullish(),
  userId: z.string()
})

export interface FulfillmentResult extends z.TypeOf<typeof FulfillmentResult> {}
