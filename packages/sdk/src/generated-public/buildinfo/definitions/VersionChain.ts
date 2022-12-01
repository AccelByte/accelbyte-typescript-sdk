/*
 * Copyright (c) 2022 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { z } from 'zod'
import { VersionNode } from './VersionNode'

export const VersionChain = z.object({
  appId: z.string().nullish(),
  comparedBuildId: z.string().nullish(),
  platformId: z.string().nullish(),
  previousVersions: z.array(VersionNode).nullish(),
  nextVersions: z.array(VersionNode).nullish()
})

export type VersionChain = z.TypeOf<typeof VersionChain>
