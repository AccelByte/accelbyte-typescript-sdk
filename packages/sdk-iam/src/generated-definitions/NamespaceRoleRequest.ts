/*
 * Copyright (c) 2022-2025 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { z } from 'zod'

export const NamespaceRoleRequest = z.object({ namespace: z.string(), roleId: z.string() })

export interface NamespaceRoleRequest extends z.TypeOf<typeof NamespaceRoleRequest> {}
