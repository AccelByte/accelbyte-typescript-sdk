/*
 * Copyright (c) 2022-2023 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { z } from 'zod'
import { EntitlementRevocationConfig } from './EntitlementRevocationConfig'
import { WalletRevocationConfig } from './WalletRevocationConfig'

export const RevocationConfigInfo = z.object({
  namespace: z.string().nullish(),
  entitlement: EntitlementRevocationConfig.nullish(),
  wallet: WalletRevocationConfig.nullish()
})

export type RevocationConfigInfo = z.TypeOf<typeof RevocationConfigInfo>
