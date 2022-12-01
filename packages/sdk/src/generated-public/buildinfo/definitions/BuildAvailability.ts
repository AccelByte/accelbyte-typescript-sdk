/*
 * Copyright (c) 2022 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { z } from 'zod'

export const BuildAvailability = z.object({
  appId: z.string().nullish(),
  platformId: z.string().nullish(),
  available: z.boolean().nullish()
})

export type BuildAvailability = z.TypeOf<typeof BuildAvailability>
