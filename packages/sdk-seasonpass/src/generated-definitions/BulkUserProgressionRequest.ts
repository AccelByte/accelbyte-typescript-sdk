/*
 * Copyright (c) 2022-2025 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { z } from 'zod'

export const BulkUserProgressionRequest = z.object({ userIds: z.array(z.string()).nullish() })

export interface BulkUserProgressionRequest extends z.TypeOf<typeof BulkUserProgressionRequest> {}
