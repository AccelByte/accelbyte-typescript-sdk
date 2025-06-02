/*
 * Copyright (c) 2022-2025 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { z } from 'zod'

export const GetDeploymentListV1Request = z.object({
  appIds: z.array(z.string()),
  deploymentIds: z.array(z.string()),
  statuses: z.array(z.string())
})

export interface GetDeploymentListV1Request extends z.TypeOf<typeof GetDeploymentListV1Request> {}
