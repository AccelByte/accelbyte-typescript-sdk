/*
 * Copyright (c) 2022 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { z } from 'zod'

export const WxPayConfigInfo = z.object({
  appId: z.string().nullish(),
  mchid: z.string().nullish(),
  key: z.string().nullish(),
  certPath: z.string().nullish(),
  returnUrl: z.string().nullish()
})

export type WxPayConfigInfo = z.TypeOf<typeof WxPayConfigInfo>
