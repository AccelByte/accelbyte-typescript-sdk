/*
 * Copyright (c) 2022-2026 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { z } from 'zod'

export const WalletAggResponse = z.object({ balance: z.number().int(), currencyCode: z.string(), currencySymbol: z.string() })

export interface WalletAggResponse extends z.TypeOf<typeof WalletAggResponse> {}
