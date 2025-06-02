/*
 * Copyright (c) 2022-2025 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { z } from 'zod'

export const CreateDeploymentV2Response = z.object({ deploymentId: z.string() })

export interface CreateDeploymentV2Response extends z.TypeOf<typeof CreateDeploymentV2Response> {}
