/*
 * Copyright (c) 2022-2024 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { z } from 'zod'

export const BuildIdVersion = z.object({
  buildId: z.string().nullish(),
  createdTime: z.string().nullish(),
  deleted: z.boolean().nullish(),
  displayVersion: z.string().nullish(),
  launchArguments: z.string().nullish(),
  platformId: z.string().nullish(),
  status: z.string().nullish(),
  updatedTime: z.string().nullish()
})

export interface BuildIdVersion extends z.TypeOf<typeof BuildIdVersion> {}
