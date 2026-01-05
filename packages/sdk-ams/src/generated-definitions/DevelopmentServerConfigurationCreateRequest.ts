/*
 * Copyright (c) 2022-2026 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { z } from 'zod'
import { Time } from './Time.js'

export const DevelopmentServerConfigurationCreateRequest = z.object({
  commandLineArguments: z.string(),
  expiresAt: Time.nullish(),
  imageId: z.string(),
  name: z.string()
})

export interface DevelopmentServerConfigurationCreateRequest extends z.TypeOf<typeof DevelopmentServerConfigurationCreateRequest> {}
