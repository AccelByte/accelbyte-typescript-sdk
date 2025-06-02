/*
 * Copyright (c) 2022-2025 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { z } from 'zod'

export const GetDeploymentListV2Request = z.object({
  appIds: z.array(z.string()).nullish(),
  deploymentIds: z.array(z.string()).nullish(),
  statuses: z.array(z.string()).nullish()
})

export interface GetDeploymentListV2Request extends z.TypeOf<typeof GetDeploymentListV2Request> {}
