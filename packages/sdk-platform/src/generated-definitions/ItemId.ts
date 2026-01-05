/*
 * Copyright (c) 2022-2026 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { z } from 'zod'

export const ItemId = z.object({ itemId: z.string(), sku: z.string().nullish(), status: z.enum(['ACTIVE', 'INACTIVE']).nullish() })

export interface ItemId extends z.TypeOf<typeof ItemId> {}
