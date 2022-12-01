/*
 * Copyright (c) 2022 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { z } from 'zod'

export const BasicBuildManifest = z.object({
  buildId: z.string().nullish(),
  platformId: z.string().nullish(),
  appId: z.string().nullish(),
  appSize: z.number().int().nullish(),
  displayVersion: z.string().nullish()
})

export type BasicBuildManifest = z.TypeOf<typeof BasicBuildManifest>
