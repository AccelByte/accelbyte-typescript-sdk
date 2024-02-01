/*
 * Copyright (c) 2022-2024 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { z } from 'zod'

export const PurchasedItemCount = z.object({ count: z.number().int().nullish() })

export interface PurchasedItemCount extends z.TypeOf<typeof PurchasedItemCount> {}
