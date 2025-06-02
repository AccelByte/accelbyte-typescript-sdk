/*
 * Copyright (c) 2022-2025 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { z } from 'zod'

export const RoleUpdateRequest = z.object({ RoleName: z.string() })

export interface RoleUpdateRequest extends z.TypeOf<typeof RoleUpdateRequest> {}
