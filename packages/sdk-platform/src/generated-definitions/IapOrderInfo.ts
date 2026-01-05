/*
 * Copyright (c) 2022-2026 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { z } from 'zod'
import { CreditSummary } from './CreditSummary.js'
import { EntitlementSummary } from './EntitlementSummary.js'

export const IapOrderInfo = z.object({
  createdAt: z.string(),
  credits: z.array(CreditSummary).nullish(),
  currencyCode: z.string().nullish(),
  entitlements: z.array(EntitlementSummary).nullish(),
  fulfilledTime: z.string().nullish(),
  iapOrderNo: z.string(),
  language: z.string().nullish(),
  namespace: z.string(),
  price: z.number().nullish(),
  productId: z.string().nullish(),
  quantity: z.number().int().nullish(),
  receiptData: z.string().nullish(),
  region: z.string().nullish(),
  retryCount: z.number().int().nullish(),
  sandbox: z.boolean().nullish(),
  status: z.enum(['FAILED', 'FULFILLED', 'PARTIAL_REVOKED', 'REVOKED', 'REVOKE_FAILED', 'VERIFIED']),
  statusReason: z.string().nullish(),
  syncMode: z.enum(['INVENTORY', 'TRANSACTION']).nullish(),
  transactionId: z.string().nullish(),
  type: z.enum(['APPLE', 'EPICGAMES', 'GOOGLE', 'OCULUS', 'PLAYSTATION', 'STADIA', 'STEAM', 'TWITCH', 'XBOX']),
  updatedAt: z.string(),
  userId: z.string()
})

export interface IapOrderInfo extends z.TypeOf<typeof IapOrderInfo> {}
