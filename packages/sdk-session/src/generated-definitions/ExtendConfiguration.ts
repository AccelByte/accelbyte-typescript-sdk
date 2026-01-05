/*
 * Copyright (c) 2022-2026 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { z } from 'zod'

export const ExtendConfiguration = z.object({
  appName: z.string().nullish(),
  customURL: z.string().nullish(),
  functionFlag: z.number().int().nullish()
})

export interface ExtendConfiguration extends z.TypeOf<typeof ExtendConfiguration> {}
