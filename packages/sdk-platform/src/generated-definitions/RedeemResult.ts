/*
 * Copyright (c) 2022-2025 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { z } from 'zod'
import { RedeemableItem } from './RedeemableItem.js'

export const RedeemResult = z.object({ items: z.array(RedeemableItem).nullish() })

export interface RedeemResult extends z.TypeOf<typeof RedeemResult> {}
