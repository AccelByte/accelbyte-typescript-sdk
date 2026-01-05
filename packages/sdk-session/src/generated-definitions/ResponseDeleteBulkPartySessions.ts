/*
 * Copyright (c) 2022-2026 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { z } from 'zod'

export const ResponseDeleteBulkPartySessions = z.object({ error: z.string(), id: z.string() })

export interface ResponseDeleteBulkPartySessions extends z.TypeOf<typeof ResponseDeleteBulkPartySessions> {}
