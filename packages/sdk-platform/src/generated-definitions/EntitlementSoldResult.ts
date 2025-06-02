/*
 * Copyright (c) 2022-2025 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { z } from 'zod'
import { CreditSummary } from './CreditSummary.js'
import { EntitlementInfo } from './EntitlementInfo.js'

export const EntitlementSoldResult = z.object({
  creditSummaries: z.array(CreditSummary).nullish(),
  entitlementInfo: EntitlementInfo.nullish(),
  replayed: z.boolean().nullish(),
  requestId: z.string().nullish()
})

export interface EntitlementSoldResult extends z.TypeOf<typeof EntitlementSoldResult> {}
