/*
 * Copyright (c) 2022-2026 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { z } from 'zod'
import { Action } from './Action.js'

export const TradeChainActionHistoryInfo = z.object({
  actions: z.array(Action).nullish(),
  metadata: z.record(z.any()).nullish(),
  namespace: z.string().nullish(),
  status: z.enum(['FAILED', 'INIT', 'SUCCESS']).nullish(),
  statusReason: z.string().nullish(),
  transactionId: z.string().nullish(),
  type: z.string().nullish(),
  userIds: z.array(z.string()).nullish()
})

export interface TradeChainActionHistoryInfo extends z.TypeOf<typeof TradeChainActionHistoryInfo> {}
