/*
 * Copyright (c) 2022-2023 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { z } from 'zod'

export const GlobalConfigurationResponse = z.object({
  regionRetryMapping: z.record(z.array(z.string())),
  regionURLMapping: z.array(z.string()),
  testGameMode: z.string(),
  testRegionURLMapping: z.array(z.string()),
  testTargetUserIDs: z.array(z.string()),
  updatedAt: z.string()
})

export interface GlobalConfigurationResponse extends z.TypeOf<typeof GlobalConfigurationResponse> {}
