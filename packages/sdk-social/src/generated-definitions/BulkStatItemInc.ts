/*
 * Copyright (c) 2022-2025 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { z } from 'zod'

export const BulkStatItemInc = z.object({ inc: z.number().nullish(), statCode: z.string() })

export interface BulkStatItemInc extends z.TypeOf<typeof BulkStatItemInc> {}
