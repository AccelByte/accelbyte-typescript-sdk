/*
 * Copyright (c) 2022-2025 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { z } from 'zod'

export const FulfillmentActionHistory = z.object({
  action: z.enum(['FULFILLMENT', 'REVOKE_FULFILLMENT']).nullish(),
  createdAt: z.string().nullish(),
  fulfillmentHistoryId: z.string().nullish(),
  revocationHistoryId: z.string().nullish(),
  state: z.enum(['FULFILLED', 'FULFILL_FAILED', 'REVOKED', 'REVOKE_FAILED']).nullish()
})

export interface FulfillmentActionHistory extends z.TypeOf<typeof FulfillmentActionHistory> {}
