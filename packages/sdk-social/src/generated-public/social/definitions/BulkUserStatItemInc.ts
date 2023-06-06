/*
 * Copyright (c) 2022-2023 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { z } from 'zod'

export const BulkUserStatItemInc = z.object({ inc: z.number().nullish(), statCode: z.string(), userId: z.string() })

export interface BulkUserStatItemInc extends z.TypeOf<typeof BulkUserStatItemInc> {}
