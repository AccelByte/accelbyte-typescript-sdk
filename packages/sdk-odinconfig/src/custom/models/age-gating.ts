/*
 * Copyright (c) 2023-2024 AccelByte Inc. All Rights Reserved.
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */

import { z } from 'zod'

export const AgeGatingConfig = z.object({
  value: z.object({
    isDelayedEnabled: z.boolean(),
    isStoreBirthdate: z.boolean(),
    retryDuration: z.number(),
    retryMessage: z.string(),
    throwMessage: z.string(),
    verificationMethod: z.string(),
    isEarlyAgeGateEnabled: z.boolean()
  })
})

export interface AgeGatingConfig extends z.infer<typeof AgeGatingConfig> {}

export enum AgeGatingCookie {
  RETRY_DURATION_COOKIE_KEY = 'retry_duration_in_minute',
  MESSAGE_COOKIE_KEY = 'age_gating_error_message'
}
