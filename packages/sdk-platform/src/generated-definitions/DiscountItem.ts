/*
 * Copyright (c) 2022-2024 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { z } from 'zod'

export const DiscountItem = z.object({ itemId: z.string(), itemName: z.string() })

export interface DiscountItem extends z.TypeOf<typeof DiscountItem> {}
