/*
 * Copyright (c) 2022-2026 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { z } from 'zod'
import { BulkSubscribeItem } from './BulkSubscribeItem.js'

export const BulkSubscribeRequest = z.object({ subscribers: z.array(BulkSubscribeItem) })

export interface BulkSubscribeRequest extends z.TypeOf<typeof BulkSubscribeRequest> {}
