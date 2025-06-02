/*
 * Copyright (c) 2022-2025 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { z } from 'zod'
import { Time } from './Time.js'

export const DevelopmentServerConfigurationUpdateRequest = z.object({
  commandLineArguments: z.string().nullish(),
  expiresAt: Time.nullish()
})

export interface DevelopmentServerConfigurationUpdateRequest extends z.TypeOf<typeof DevelopmentServerConfigurationUpdateRequest> {}
