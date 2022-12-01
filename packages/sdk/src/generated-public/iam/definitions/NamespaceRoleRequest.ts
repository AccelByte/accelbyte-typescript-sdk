/*
 * Copyright (c) 2022 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { z } from 'zod'

export const NamespaceRoleRequest = z.object({ namespace: z.string(), roleId: z.string() })

export type NamespaceRoleRequest = z.TypeOf<typeof NamespaceRoleRequest>
