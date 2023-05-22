/*
 * Copyright (c) 2022-2023 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { z } from 'zod'
import { VersionNode } from './VersionNode.js'

export const VersionChain = z.object({
  appId: z.string().nullish(),
  comparedBuildId: z.string().nullish(),
  nextVersions: z.array(VersionNode).nullish(),
  platformId: z.string().nullish(),
  previousVersions: z.array(VersionNode).nullish()
})

export interface VersionChain extends z.TypeOf<typeof VersionChain> {}
