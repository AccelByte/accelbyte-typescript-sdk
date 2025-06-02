/*
 * Copyright (c) 2022-2025 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { z } from 'zod'

export const AdminBulkUserRequest = z.object({ findByPublisherNamespace: z.boolean().nullish(), userIds: z.array(z.string()) })

export interface AdminBulkUserRequest extends z.TypeOf<typeof AdminBulkUserRequest> {}
