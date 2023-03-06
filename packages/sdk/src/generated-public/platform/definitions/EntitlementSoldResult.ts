/*
 * Copyright (c) 2022-2023 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { z } from 'zod'
import { CreditSummary } from './CreditSummary'
import { EntitlementInfo } from './EntitlementInfo'

export const EntitlementSoldResult = z.object({
  requestId: z.string().nullish(),
  replayed: z.boolean().nullish(),
  creditSummaries: z.array(CreditSummary).nullish(),
  entitlementInfo: EntitlementInfo.nullish()
})

export interface EntitlementSoldResult extends z.TypeOf<typeof EntitlementSoldResult> {}
