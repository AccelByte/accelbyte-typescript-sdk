/*
 * Copyright (c) 2022 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { z } from 'zod'
import { CreditSummary } from './CreditSummary'
import { EntitlementSummary } from './EntitlementSummary'

export const IapOrderInfo = z.object({
  iapOrderNo: z.string(),
  namespace: z.string(),
  userId: z.string(),
  productId: z.string().nullish(),
  receiptData: z.string().nullish(),
  transactionId: z.string().nullish(),
  status: z.enum(['VERIFIED', 'FULFILLED', 'FAILED']),
  statusReason: z.string().nullish(),
  region: z.string().nullish(),
  language: z.string().nullish(),
  quantity: z.number().int().nullish(),
  sandbox: z.boolean().nullish(),
  type: z.enum(['APPLE', 'GOOGLE', 'PLAYSTATION', 'STEAM', 'XBOX', 'STADIA', 'EPICGAMES', 'TWITCH']),
  fulfilledTime: z.string().nullish(),
  retryCount: z.number().int().nullish(),
  entitlements: z.array(EntitlementSummary).nullish(),
  credits: z.array(CreditSummary).nullish(),
  createdAt: z.string(),
  updatedAt: z.string(),
  price: z.number().nullish(),
  currencyCode: z.string().nullish()
})

export type IapOrderInfo = z.TypeOf<typeof IapOrderInfo>
