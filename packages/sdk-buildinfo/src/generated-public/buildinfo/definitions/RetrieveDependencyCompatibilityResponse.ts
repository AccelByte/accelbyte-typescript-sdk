/*
 * Copyright (c) 2022-2023 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { z } from 'zod'
import { CompatibilityObject } from './CompatibilityObject.js'

export const RetrieveDependencyCompatibilityResponse = z.object({
  appId: z.string().nullish(),
  buildId: z.string().nullish(),
  compatibilities: z.array(CompatibilityObject).nullish(),
  version: z.string().nullish()
})

export interface RetrieveDependencyCompatibilityResponse extends z.TypeOf<typeof RetrieveDependencyCompatibilityResponse> {}
