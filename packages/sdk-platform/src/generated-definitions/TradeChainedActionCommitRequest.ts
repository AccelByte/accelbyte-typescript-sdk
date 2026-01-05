/*
 * Copyright (c) 2022-2026 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { z } from 'zod'
import { ActionRequest } from './ActionRequest.js'

export const TradeChainedActionCommitRequest = z.object({
  actions: z.array(ActionRequest).nullish(),
  metadata: z.record(z.any()).nullish(),
  needPreCheck: z.boolean().nullish(),
  transactionId: z.string().nullish(),
  type: z.string().nullish()
})

export interface TradeChainedActionCommitRequest extends z.TypeOf<typeof TradeChainedActionCommitRequest> {}
