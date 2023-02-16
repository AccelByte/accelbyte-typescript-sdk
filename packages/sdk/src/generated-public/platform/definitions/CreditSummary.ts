/*
 * Copyright (c) 2022-2023 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { z } from 'zod'

export const CreditSummary = z.object({ walletId: z.string(), namespace: z.string(), userId: z.string(), amount: z.number().int() })

export interface CreditSummary extends z.TypeOf<typeof CreditSummary> {}
