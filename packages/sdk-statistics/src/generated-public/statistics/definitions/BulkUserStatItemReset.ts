/*
 * Copyright (c) 2022-2023 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { z } from 'zod'

export const BulkUserStatItemReset = z.object({ userId: z.string(), statCode: z.string() })

export interface BulkUserStatItemReset extends z.TypeOf<typeof BulkUserStatItemReset> {}
