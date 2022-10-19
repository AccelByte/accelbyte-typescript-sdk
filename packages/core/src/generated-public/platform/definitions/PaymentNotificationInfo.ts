/*
 * Copyright (c) 2022 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { z } from 'zod'

export const PaymentNotificationInfo = z.object({
  id: z.string(),
  paymentOrderNo: z.string(),
  externalId: z.string().nullish(),
  namespace: z.string(),
  notificationType: z.string(),
  notification: z.record(z.any()),
  status: z.enum(['PROCESSED', 'ERROR', 'WARN', 'IGNORED']),
  notificationSource: z.enum(['WALLET', 'XSOLLA', 'ADYEN', 'STRIPE', 'CHECKOUT', 'ALIPAY', 'WXPAY', 'PAYPAL']),
  statusReason: z.string().nullish(),
  createdAt: z.string(),
  updatedAt: z.string()
})

export type PaymentNotificationInfo = z.TypeOf<typeof PaymentNotificationInfo>
