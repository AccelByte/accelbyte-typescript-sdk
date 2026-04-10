/*
 * Copyright (c) 2022-2026 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { z } from 'zod'
import { DlcAggResponse } from './DlcAggResponse.js'
import { SimpleUserBan } from './SimpleUserBan.js'
import { WalletAggResponse } from './WalletAggResponse.js'

export const ProgressionInfo = z.object({
  createdAt: z.number().int(),
  dlcs: DlcAggResponse.nullish(),
  lastLoginTime: z.number().int().nullish(),
  namespace: z.string(),
  userBan: SimpleUserBan.nullish(),
  wallets: z.array(WalletAggResponse).nullish()
})

export interface ProgressionInfo extends z.TypeOf<typeof ProgressionInfo> {}
