/*
 * Copyright (c) 2022-2026 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { z } from 'zod'
import { Time } from './Time.js'

export const DevelopmentServerConfigurationGetResponse = z.object({
  commandLineArguments: z.string(),
  createdAt: Time.nullish(),
  expiresAt: Time.nullish(),
  imageId: z.string(),
  name: z.string()
})

export interface DevelopmentServerConfigurationGetResponse extends z.TypeOf<typeof DevelopmentServerConfigurationGetResponse> {}
