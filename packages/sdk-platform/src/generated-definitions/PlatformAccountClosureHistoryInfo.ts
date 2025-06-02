/*
 * Copyright (c) 2022-2025 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { z } from 'zod'
import { SimpleEntitlement } from './SimpleEntitlement.js'
import { SimpleUserDlc } from './SimpleUserDlc.js'
import { SimpleWallet } from './SimpleWallet.js'

export const PlatformAccountClosureHistoryInfo = z.object({
  entitlements: z.array(SimpleEntitlement).nullish(),
  id: z.string(),
  namespace: z.string(),
  platform: z.string(),
  progression: z.enum(['IN_PROGRESS', 'SUCCESS']),
  userDlcS: z.array(SimpleUserDlc).nullish(),
  userId: z.string(),
  wallets: z.array(SimpleWallet).nullish()
})

export interface PlatformAccountClosureHistoryInfo extends z.TypeOf<typeof PlatformAccountClosureHistoryInfo> {}
