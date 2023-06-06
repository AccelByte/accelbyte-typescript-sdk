/*
 * Copyright (c) 2022-2023 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { z } from 'zod'

export const BulkStatItemReset = z.object({ statCode: z.string() })

export interface BulkStatItemReset extends z.TypeOf<typeof BulkStatItemReset> {}
