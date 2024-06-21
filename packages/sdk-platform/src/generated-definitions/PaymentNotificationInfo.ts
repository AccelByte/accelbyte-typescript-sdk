/*
 * Copyright (c) 2022-2024 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { z } from 'zod'

export const PaymentNotificationInfo = z.object({
  createdAt: z.string(),
  externalId: z.string().nullish(),
  id: z.string(),
  namespace: z.string(),
  notification: z.record(z.any()),
  notificationSource: z.enum(['ADYEN', 'ALIPAY', 'CHECKOUT', 'NEONPAY', 'PAYPAL', 'STRIPE', 'WALLET', 'WXPAY', 'XSOLLA']),
  notificationType: z.string(),
  paymentOrderNo: z.string(),
  status: z.enum(['ERROR', 'IGNORED', 'PROCESSED', 'WARN']),
  statusReason: z.string().nullish(),
  updatedAt: z.string()
})

export interface PaymentNotificationInfo extends z.TypeOf<typeof PaymentNotificationInfo> {}
