/*
 * Copyright (c) 2022 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { z } from 'zod'
import { DependencyObject } from './DependencyObject'

export const RetrieveDependencyLinkResponse = z.object({
  appId: z.string().nullish(),
  buildId: z.string().nullish(),
  version: z.string().nullish(),
  dependencies: z.array(DependencyObject).nullish()
})

export type RetrieveDependencyLinkResponse = z.TypeOf<typeof RetrieveDependencyLinkResponse>
