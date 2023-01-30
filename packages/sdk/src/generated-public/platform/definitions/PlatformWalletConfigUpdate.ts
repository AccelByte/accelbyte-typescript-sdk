/*
 * Copyright (c) 2022-2023 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { z } from 'zod'

export const PlatformWalletConfigUpdate = z.object({
  allowedBalanceOrigins: z
    .array(z.enum(['Playstation', 'Xbox', 'Steam', 'Epic', 'IOS', 'GooglePlay', 'Twitch', 'Nintendo', 'System', 'Other']))
    .nullish()
})

export type PlatformWalletConfigUpdate = z.TypeOf<typeof PlatformWalletConfigUpdate>
