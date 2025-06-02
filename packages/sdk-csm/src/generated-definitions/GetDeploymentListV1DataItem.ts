/*
 * Copyright (c) 2022-2025 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { z } from 'zod'

export const GetDeploymentListV1DataItem = z.object({
  deletedAt: z.string().nullish(),
  deploymentId: z.string(),
  imageTag: z.string().nullish(),
  message: z.string().nullish(),
  status: z.string().nullish(),
  updatedAt: z.string().nullish()
})

export interface GetDeploymentListV1DataItem extends z.TypeOf<typeof GetDeploymentListV1DataItem> {}
