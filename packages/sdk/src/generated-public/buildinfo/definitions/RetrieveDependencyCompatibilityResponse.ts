/*
 * Copyright (c) 2022 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { z } from 'zod'
import { CompatibilityObject } from './CompatibilityObject'

export const RetrieveDependencyCompatibilityResponse = z.object({
  appId: z.string().nullish(),
  buildId: z.string().nullish(),
  version: z.string().nullish(),
  compatibilities: z.array(CompatibilityObject).nullish()
})

export type RetrieveDependencyCompatibilityResponse = z.TypeOf<typeof RetrieveDependencyCompatibilityResponse>
