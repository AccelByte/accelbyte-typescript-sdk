/*
 * Copyright (c) 2022 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { z } from 'zod'

export const NamespaceRole = z.object({ namespace: z.string(), roleId: z.string() })

export type NamespaceRole = z.TypeOf<typeof NamespaceRole>
