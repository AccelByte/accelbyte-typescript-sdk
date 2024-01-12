/*
 * Copyright (c) 2022-2024 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { z } from 'zod'

export const PlatformRewardCurrency = z.object({ currencyCode: z.string(), namespace: z.string() })

export interface PlatformRewardCurrency extends z.TypeOf<typeof PlatformRewardCurrency> {}
