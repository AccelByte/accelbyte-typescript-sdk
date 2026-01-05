/*
 * Copyright (c) 2022-2026 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { z } from 'zod'

export const QueryCursor = z.object({ cursorTime: z.string(), userId: z.string() })

export interface QueryCursor extends z.TypeOf<typeof QueryCursor> {}
