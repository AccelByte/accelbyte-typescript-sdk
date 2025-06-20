/*
 * Copyright (c) 2022-2025 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { z } from 'zod'

export const UserProfileStatusUpdate = z.object({ status: z.enum(['ACTIVE', 'INACTIVE']) })

export interface UserProfileStatusUpdate extends z.TypeOf<typeof UserProfileStatusUpdate> {}
