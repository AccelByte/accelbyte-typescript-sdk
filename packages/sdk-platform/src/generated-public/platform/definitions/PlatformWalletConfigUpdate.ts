/*
 * Copyright (c) 2022-2023 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { z } from 'zod'

export const PlatformWalletConfigUpdate = z.object({
  allowedBalanceOrigins: z
    .array(z.enum(['Epic', 'GooglePlay', 'IOS', 'Nintendo', 'Oculus', 'Other', 'Playstation', 'Steam', 'System', 'Twitch', 'Xbox']))
    .nullish()
})

export interface PlatformWalletConfigUpdate extends z.TypeOf<typeof PlatformWalletConfigUpdate> {}
