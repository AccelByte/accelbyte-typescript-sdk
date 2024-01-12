/*
 * Copyright (c) 2022-2024 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { z } from 'zod'

export const ServerDeploymentConfigSessionTimeoutResponse = z.object({ session_timeout: z.number().int() })

export interface ServerDeploymentConfigSessionTimeoutResponse extends z.TypeOf<typeof ServerDeploymentConfigSessionTimeoutResponse> {}
