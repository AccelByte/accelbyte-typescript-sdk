/*
 * Copyright (c) 2022-2024 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { z } from 'zod'
import { EntitlementRevocationConfig } from './EntitlementRevocationConfig.js'
import { WalletRevocationConfig } from './WalletRevocationConfig.js'

export const RevocationConfigUpdate = z.object({
  entitlement: EntitlementRevocationConfig.nullish(),
  wallet: WalletRevocationConfig.nullish()
})

export interface RevocationConfigUpdate extends z.TypeOf<typeof RevocationConfigUpdate> {}
