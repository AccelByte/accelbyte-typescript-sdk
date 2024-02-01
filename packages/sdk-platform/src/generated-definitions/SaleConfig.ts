/*
 * Copyright (c) 2022-2024 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { z } from 'zod'

export const SaleConfig = z.object({ currencyCode: z.string(), price: z.number().int() })

export interface SaleConfig extends z.TypeOf<typeof SaleConfig> {}
