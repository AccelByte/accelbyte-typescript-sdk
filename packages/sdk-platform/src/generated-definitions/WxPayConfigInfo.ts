/*
 * Copyright (c) 2022-2024 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { z } from 'zod'

export const WxPayConfigInfo = z.object({
  appId: z.string().nullish(),
  certPath: z.string().nullish(),
  key: z.string().nullish(),
  mchid: z.string().nullish(),
  returnUrl: z.string().nullish()
})

export interface WxPayConfigInfo extends z.TypeOf<typeof WxPayConfigInfo> {}
