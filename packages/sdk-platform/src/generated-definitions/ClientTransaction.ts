/*
 * Copyright (c) 2022-2024 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { z } from 'zod'

export const ClientTransaction = z.object({ amountConsumed: z.number().int().nullish(), clientTransactionId: z.string().nullish() })

export interface ClientTransaction extends z.TypeOf<typeof ClientTransaction> {}
