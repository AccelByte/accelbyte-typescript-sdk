/*
 * Copyright (c) 2022-2026 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { z } from 'zod'

export const GetDeploymentV1Response = z.object({
  deletedAt: z.string().nullish(),
  deploymentId: z.string(),
  imageTag: z.string().nullish(),
  message: z.string().nullish(),
  status: z.string().nullish(),
  updatedAt: z.string().nullish()
})

export interface GetDeploymentV1Response extends z.TypeOf<typeof GetDeploymentV1Response> {}
