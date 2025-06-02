/*
 * Copyright (c) 2022-2025 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { z } from 'zod'

export const WxPayConfigRequest = z.object({
  appId: z.string().nullish(),
  key: z.string().nullish(),
  mchid: z.string().nullish(),
  returnUrl: z.string().nullish()
})

export interface WxPayConfigRequest extends z.TypeOf<typeof WxPayConfigRequest> {}
