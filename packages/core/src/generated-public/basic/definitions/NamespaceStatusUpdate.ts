/*
 * Copyright (c) 2022 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { z } from 'zod'

export const NamespaceStatusUpdate = z.object({ status: z.enum(['ACTIVE', 'INACTIVE']) })

export type NamespaceStatusUpdate = z.TypeOf<typeof NamespaceStatusUpdate>
