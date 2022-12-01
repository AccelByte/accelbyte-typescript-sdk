/*
 * Copyright (c) 2022 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { z } from 'zod'

export const ItemAcquireRequest = z.object({ orderNo: z.string(), count: z.number().int() })

export type ItemAcquireRequest = z.TypeOf<typeof ItemAcquireRequest>
