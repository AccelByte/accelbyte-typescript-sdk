/*
 * Copyright (c) 2022-2023 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { z } from 'zod'
import { CreditSummary } from './CreditSummary.js'
import { EntitlementSummary } from './EntitlementSummary.js'
import { SubscriptionSummary } from './SubscriptionSummary.js'

export const FulfillmentResult = z.object({
  namespace: z.string(),
  userId: z.string(),
  entitlementSummaries: z.array(EntitlementSummary).nullish(),
  creditSummaries: z.array(CreditSummary).nullish(),
  subscriptionSummaries: z.array(SubscriptionSummary).nullish()
})

export interface FulfillmentResult extends z.TypeOf<typeof FulfillmentResult> {}
