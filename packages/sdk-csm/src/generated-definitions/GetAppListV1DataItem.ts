/*
 * Copyright (c) 2022-2025 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { z } from 'zod'

export const GetAppListV1DataItem = z.object({
  appId: z.string().nullish(),
  appName: z.string().nullish(),
  appRepoArn: z.string().nullish(),
  appRepoUrl: z.string().nullish(),
  appStatus: z.string().nullish(),
  app_release_status: z.string().nullish(),
  basePath: z.string().nullish(),
  deletedAt: z.string().nullish(),
  deploymentCreatedAt: z.string(),
  deploymentId: z.string(),
  deploymentImageTag: z.string(),
  deployment_status: z.string().nullish(),
  description: z.string().nullish(),
  message: z.string().nullish(),
  scenario: z.string().nullish(),
  servicePublicURL: z.string().nullish(),
  serviceURL: z.string().nullish(),
  status: z.string().nullish(),
  updatedAt: z.string().nullish()
})

export interface GetAppListV1DataItem extends z.TypeOf<typeof GetAppListV1DataItem> {}
