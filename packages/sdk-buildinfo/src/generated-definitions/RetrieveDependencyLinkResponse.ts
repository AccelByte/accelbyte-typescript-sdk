/*
 * Copyright (c) 2022-2026 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { z } from 'zod'
import { DependencyObject } from './DependencyObject.js'

export const RetrieveDependencyLinkResponse = z.object({
  appId: z.string().nullish(),
  buildId: z.string().nullish(),
  dependencies: z.array(DependencyObject).nullish(),
  version: z.string().nullish()
})

export interface RetrieveDependencyLinkResponse extends z.TypeOf<typeof RetrieveDependencyLinkResponse> {}
