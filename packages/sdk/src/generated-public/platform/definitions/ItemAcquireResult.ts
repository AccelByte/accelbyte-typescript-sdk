/*
 * Copyright (c) 2022 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { z } from 'zod'

export const ItemAcquireResult = z.object({ success: z.boolean(), maxCount: z.number().int() })

export type ItemAcquireResult = z.TypeOf<typeof ItemAcquireResult>
