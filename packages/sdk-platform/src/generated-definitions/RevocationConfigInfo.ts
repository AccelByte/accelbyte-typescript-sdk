/*
 * Copyright (c) 2022-2026 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { z } from 'zod'
import { EntitlementRevocationConfig } from './EntitlementRevocationConfig.js'
import { WalletRevocationConfig } from './WalletRevocationConfig.js'

export const RevocationConfigInfo = z.object({
  entitlement: EntitlementRevocationConfig.nullish(),
  namespace: z.string().nullish(),
  wallet: WalletRevocationConfig.nullish()
})

export interface RevocationConfigInfo extends z.TypeOf<typeof RevocationConfigInfo> {}
