/*
 * Copyright (c) 2022 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { z } from 'zod'

export const DiffStatusReport = z.object({
  sourceBuildId: z.string().nullish(),
  destinationBuildId: z.string().nullish(),
  available: z.boolean().nullish(),
  baseUrls: z.array(z.string()).nullish()
})

export type DiffStatusReport = z.TypeOf<typeof DiffStatusReport>
