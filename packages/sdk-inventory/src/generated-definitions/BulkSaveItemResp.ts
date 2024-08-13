/*
 * Copyright (c) 2022-2024 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { z } from 'zod'
import { BulkSaveItemError } from './BulkSaveItemError.js'
import { ItemResp } from './ItemResp.js'

export const BulkSaveItemResp = z.object({ errorDetails: BulkSaveItemError.nullish(), item: ItemResp.nullish(), success: z.boolean() })

export interface BulkSaveItemResp extends z.TypeOf<typeof BulkSaveItemResp> {}
