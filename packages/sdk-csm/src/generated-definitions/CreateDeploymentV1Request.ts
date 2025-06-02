/*
 * Copyright (c) 2022-2025 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { z } from 'zod'

export const CreateDeploymentV1Request = z.object({ description: z.string().nullish(), imageTag: z.string() })

export interface CreateDeploymentV1Request extends z.TypeOf<typeof CreateDeploymentV1Request> {}
