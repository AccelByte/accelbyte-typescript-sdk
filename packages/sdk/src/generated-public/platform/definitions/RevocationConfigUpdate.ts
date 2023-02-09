/*
 * Copyright (c) 2022-2023 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { z } from 'zod'
import { EntitlementRevocationConfig } from './EntitlementRevocationConfig'
import { WalletRevocationConfig } from './WalletRevocationConfig'

export const RevocationConfigUpdate = z.object({
  entitlement: EntitlementRevocationConfig.nullish(),
  wallet: WalletRevocationConfig.nullish()
})

export type RevocationConfigUpdate = z.TypeOf<typeof RevocationConfigUpdate>
