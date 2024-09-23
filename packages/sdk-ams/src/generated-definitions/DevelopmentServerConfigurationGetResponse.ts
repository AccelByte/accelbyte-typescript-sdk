/*
 * Copyright (c) 2022-2024 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { z } from 'zod'

export const DevelopmentServerConfigurationGetResponse = z.object({
  commandLineArguments: z.string(),
  imageId: z.string(),
  name: z.string()
})

export interface DevelopmentServerConfigurationGetResponse extends z.TypeOf<typeof DevelopmentServerConfigurationGetResponse> {}
