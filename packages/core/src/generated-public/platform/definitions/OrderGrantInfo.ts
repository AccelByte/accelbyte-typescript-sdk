/*
 * Copyright (c) 2022 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { z } from 'zod'
import { CreditSummary } from './CreditSummary'
import { EntitlementSummary } from './EntitlementSummary'

export const OrderGrantInfo = z.object({ entitlements: z.array(EntitlementSummary).nullish(), credits: z.array(CreditSummary).nullish() })

export type OrderGrantInfo = z.TypeOf<typeof OrderGrantInfo>
