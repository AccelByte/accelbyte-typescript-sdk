/*
 * Copyright (c) 2022-2023 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { z } from 'zod'

export const XsollaConfig = z.object({
  merchantId: z.number().int().nullish(),
  projectId: z.number().int().nullish(),
  projectSecretKey: z.string().nullish(),
  apiKey: z.string().nullish(),
  flowCompletionUrl: z.string().nullish()
})

export interface XsollaConfig extends z.TypeOf<typeof XsollaConfig> {}
