/*
 * Copyright (c) 2022-2023 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { z } from 'zod'
import { RedeemableItem } from './RedeemableItem'

export const RedeemResult = z.object({ items: z.array(RedeemableItem).nullish() })

export interface RedeemResult extends z.TypeOf<typeof RedeemResult> {}
