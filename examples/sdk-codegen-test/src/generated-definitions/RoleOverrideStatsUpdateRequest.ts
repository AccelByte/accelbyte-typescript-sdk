/*
 * Copyright (c) 2022-2026 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { z } from 'zod'

export const RoleOverrideStatsUpdateRequest = z.object({ active: z.boolean() })

export interface RoleOverrideStatsUpdateRequest extends z.TypeOf<typeof RoleOverrideStatsUpdateRequest> {}
