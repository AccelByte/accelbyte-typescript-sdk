/*
 * Copyright (c) 2022 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { z } from 'zod'
import { CreditSummary } from './CreditSummary'
import { EntitlementSummary } from './EntitlementSummary'
import { ExtensionFulfillmentSummary } from './ExtensionFulfillmentSummary'
import { FulfillmentError } from './FulfillmentError'
import { FulfillmentItem } from './FulfillmentItem'

export const FulfillmentHistoryInfo = z.object({
  id: z.string(),
  namespace: z.string(),
  userId: z.string(),
  orderNo: z.string().nullish(),
  code: z.string().nullish(),
  fulfillItems: z.array(FulfillmentItem).nullish(),
  grantedItemIds: z.array(z.string()).nullish(),
  entitlementSummaries: z.array(EntitlementSummary).nullish(),
  creditSummaries: z.array(CreditSummary).nullish(),
  extensionFulfillmentSummaries: z.array(ExtensionFulfillmentSummary).nullish(),
  status: z.enum(['SUCCESS', 'FAIL']),
  fulfillmentError: FulfillmentError.nullish(),
  createdAt: z.string(),
  updatedAt: z.string()
})

export type FulfillmentHistoryInfo = z.TypeOf<typeof FulfillmentHistoryInfo>
