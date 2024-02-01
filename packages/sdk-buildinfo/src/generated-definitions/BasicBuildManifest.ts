/*
 * Copyright (c) 2022-2024 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { z } from 'zod'

export const BasicBuildManifest = z.object({
  appId: z.string().nullish(),
  appSize: z.number().int().nullish(),
  buildId: z.string().nullish(),
  displayVersion: z.string().nullish(),
  platformId: z.string().nullish()
})

export interface BasicBuildManifest extends z.TypeOf<typeof BasicBuildManifest> {}
