/*
 * Copyright (c) 2022-2024 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { z } from 'zod'

export const AdyenConfig = z.object({
  allowedPaymentMethods: z.array(z.string()).nullish(),
  apiKey: z.string().nullish(),
  authoriseAsCapture: z.boolean().nullish(),
  blockedPaymentMethods: z.array(z.string()).nullish(),
  clientKey: z.string().nullish(),
  dropInSettings: z.string().nullish(),
  liveEndpointUrlPrefix: z.string().nullish(),
  merchantAccount: z.string().nullish(),
  notificationHmacKey: z.string().nullish(),
  notificationPassword: z.string().nullish(),
  notificationUsername: z.string().nullish(),
  returnUrl: z.string().nullish(),
  settings: z.string().nullish()
})

export interface AdyenConfig extends z.TypeOf<typeof AdyenConfig> {}
