/*
 * Copyright (c) 2022-2025 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { z } from 'zod'

export const BuildDeletionData = z.object({
  buildId: z.string().nullish(),
  deletedAt: z.string().nullish(),
  deletionStatus: z.string().nullish(),
  displayVersion: z.string().nullish(),
  platformId: z.string().nullish(),
  requestedTime: z.string().nullish()
})

export interface BuildDeletionData extends z.TypeOf<typeof BuildDeletionData> {}
