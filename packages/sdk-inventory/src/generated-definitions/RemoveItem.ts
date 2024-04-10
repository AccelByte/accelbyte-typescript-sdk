/*
 * Copyright (c) 2022-2024 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { z } from 'zod'

export const RemoveItem = z.object({ inventoryId: z.string(), slotId: z.string(), sourceItemId: z.string() })

export interface RemoveItem extends z.TypeOf<typeof RemoveItem> {}
