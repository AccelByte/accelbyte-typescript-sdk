/*
 * Copyright (c) 2022-2023 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { z } from 'zod'
import { EntitlementRevocationConfig } from './EntitlementRevocationConfig.js'
import { WalletRevocationConfig } from './WalletRevocationConfig.js'

export const RevocationConfigInfo = z.object({
  namespace: z.string().nullish(),
  entitlement: EntitlementRevocationConfig.nullish(),
  wallet: WalletRevocationConfig.nullish()
})

export interface RevocationConfigInfo extends z.TypeOf<typeof RevocationConfigInfo> {}
