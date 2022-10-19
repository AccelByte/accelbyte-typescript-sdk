/*
 * Copyright (c) 2022 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { z } from 'zod'
import { CreditSummary } from './CreditSummary'
import { EntitlementSummary } from './EntitlementSummary'
import { SubscriptionSummary } from './SubscriptionSummary'

export const FulfillmentResult = z.object({
  namespace: z.string(),
  userId: z.string(),
  entitlementSummaries: z.array(EntitlementSummary).nullish(),
  creditSummaries: z.array(CreditSummary).nullish(),
  subscriptionSummaries: z.array(SubscriptionSummary).nullish()
})

export type FulfillmentResult = z.TypeOf<typeof FulfillmentResult>
