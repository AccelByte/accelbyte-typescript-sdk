/*
 * Copyright (c) 2022-2024 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { z } from 'zod'

export const EntitlementPlatformConfigUpdate = z.object({
  allowedPlatformOrigins: z
    .array(z.enum(['Epic', 'GooglePlay', 'IOS', 'Nintendo', 'Oculus', 'Other', 'Playstation', 'Steam', 'System', 'Twitch', 'Xbox']))
    .nullish()
})

export interface EntitlementPlatformConfigUpdate extends z.TypeOf<typeof EntitlementPlatformConfigUpdate> {}
