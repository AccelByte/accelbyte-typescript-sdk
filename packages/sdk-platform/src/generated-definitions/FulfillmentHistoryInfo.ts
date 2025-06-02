/*
 * Copyright (c) 2022-2025 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { z } from 'zod'
import { CreditSummary } from './CreditSummary.js'
import { EntitlementSummary } from './EntitlementSummary.js'
import { ExtensionFulfillmentSummary } from './ExtensionFulfillmentSummary.js'
import { FulfillmentError } from './FulfillmentError.js'
import { FulfillmentItem } from './FulfillmentItem.js'

export const FulfillmentHistoryInfo = z.object({
  code: z.string().nullish(),
  createdAt: z.string(),
  creditSummaries: z.array(CreditSummary).nullish(),
  entitlementOrigin: z
    .enum(['Epic', 'GooglePlay', 'IOS', 'Nintendo', 'Oculus', 'Other', 'Playstation', 'Steam', 'System', 'Twitch', 'Xbox'])
    .nullish(),
  entitlementSummaries: z.array(EntitlementSummary).nullish(),
  extensionFulfillmentSummaries: z.array(ExtensionFulfillmentSummary).nullish(),
  fulfillItems: z.array(FulfillmentItem).nullish(),
  fulfillmentError: FulfillmentError.nullish(),
  grantedItemIds: z.array(z.string()).nullish(),
  id: z.string(),
  namespace: z.string(),
  orderNo: z.string().nullish(),
  status: z.enum(['FAIL', 'SUCCESS']),
  updatedAt: z.string(),
  userId: z.string()
})

export interface FulfillmentHistoryInfo extends z.TypeOf<typeof FulfillmentHistoryInfo> {}
