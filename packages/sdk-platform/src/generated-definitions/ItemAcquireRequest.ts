/*
 * Copyright (c) 2022-2025 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { z } from 'zod'

export const ItemAcquireRequest = z.object({ count: z.number().int(), orderNo: z.string() })

export interface ItemAcquireRequest extends z.TypeOf<typeof ItemAcquireRequest> {}
