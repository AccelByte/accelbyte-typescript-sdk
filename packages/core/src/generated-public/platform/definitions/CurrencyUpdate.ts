/*
 * Copyright (c) 2022 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { z } from 'zod'

export const CurrencyUpdate = z.object({ localizationDescriptions: z.record(z.string()).nullish() })

export type CurrencyUpdate = z.TypeOf<typeof CurrencyUpdate>
