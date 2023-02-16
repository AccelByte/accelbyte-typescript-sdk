/*
 * Copyright (c) 2022-2023 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { z } from 'zod'

export const AliPayConfig = z.object({
  appId: z.string().nullish(),
  privateKey: z.string().nullish(),
  publicKey: z.string().nullish(),
  returnUrl: z.string().nullish()
})

export interface AliPayConfig extends z.TypeOf<typeof AliPayConfig> {}
