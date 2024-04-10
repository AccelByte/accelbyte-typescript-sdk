/*
 * Copyright (c) 2022-2024 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { z } from 'zod'

export const PermissionSetDeleteGroupRequest = z.object({ groupId: z.string(), moduleId: z.string() })

export interface PermissionSetDeleteGroupRequest extends z.TypeOf<typeof PermissionSetDeleteGroupRequest> {}
