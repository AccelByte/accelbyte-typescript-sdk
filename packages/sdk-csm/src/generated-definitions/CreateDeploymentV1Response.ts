/*
 * Copyright (c) 2022-2026 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { z } from 'zod'

export const CreateDeploymentV1Response = z.object({ deploymentId: z.string().nullish() })

export interface CreateDeploymentV1Response extends z.TypeOf<typeof CreateDeploymentV1Response> {}
