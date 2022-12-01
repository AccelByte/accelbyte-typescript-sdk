/*
 * Copyright (c) 2022 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { z } from 'zod'

export const AdyenConfig = z.object({
  apiKey: z.string().nullish(),
  clientKey: z.string().nullish(),
  merchantAccount: z.string().nullish(),
  notificationHmacKey: z.string().nullish(),
  notificationUsername: z.string().nullish(),
  notificationPassword: z.string().nullish(),
  returnUrl: z.string().nullish(),
  liveEndpointUrlPrefix: z.string().nullish(),
  authoriseAsCapture: z.boolean().nullish(),
  allowedPaymentMethods: z.array(z.string()).nullish(),
  blockedPaymentMethods: z.array(z.string()).nullish(),
  settings: z.string().nullish(),
  dropInSettings: z.string().nullish()
})

export type AdyenConfig = z.TypeOf<typeof AdyenConfig>
