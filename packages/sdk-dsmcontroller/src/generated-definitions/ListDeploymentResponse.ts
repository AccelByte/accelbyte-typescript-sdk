/*
 * Copyright (c) 2022-2024 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { z } from 'zod'
import { DeploymentWithOverride } from './DeploymentWithOverride.js'
import { PagingCursor } from './PagingCursor.js'

export const ListDeploymentResponse = z.object({ deployments: z.array(DeploymentWithOverride), paging: PagingCursor })

export interface ListDeploymentResponse extends z.TypeOf<typeof ListDeploymentResponse> {}
