/*
 * Copyright (c) 2022-2023 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { z } from 'zod'

export const AdminGetContentBulkRequest = z.object({ contentIds: z.array(z.string()) })

export interface AdminGetContentBulkRequest extends z.TypeOf<typeof AdminGetContentBulkRequest> {}
