/*
 * Copyright (c) 2022-2025 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { z } from 'zod'
import { BanReason } from './BanReason.js'

export const BanReasons = z.object({ Reasons: z.array(BanReason) })

export interface BanReasons extends z.TypeOf<typeof BanReasons> {}
