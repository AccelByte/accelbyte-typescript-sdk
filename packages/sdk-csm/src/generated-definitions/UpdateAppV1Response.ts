/*
 * Copyright (c) 2022-2026 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { z } from 'zod'

export const UpdateAppV1Response = z.object({
  appId: z.string().nullish(),
  appName: z.string().nullish(),
  appRepoArn: z.string().nullish(),
  appRepoUrl: z.string().nullish(),
  deletedAt: z.string().nullish(),
  description: z.string().nullish(),
  message: z.string().nullish(),
  scenario: z.string().nullish(),
  serviceURL: z.string().nullish(),
  status: z.string().nullish(),
  updatedAt: z.string().nullish()
})

export interface UpdateAppV1Response extends z.TypeOf<typeof UpdateAppV1Response> {}
