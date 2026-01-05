/*
 * Copyright (c) 2022-2026 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { z } from 'zod'

export const GetDeploymentListV2DataItem = z.object({
  deletedAt: z.string().nullish(),
  deploymentId: z.string(),
  imageTag: z.string(),
  message: z.string().nullish(),
  status: z.string(),
  updatedAt: z.string().nullish()
})

export interface GetDeploymentListV2DataItem extends z.TypeOf<typeof GetDeploymentListV2DataItem> {}
