/*
 * Copyright (c) 2022 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { z } from 'zod'

export const BanReasonV3 = z.object({ description: z.string(), reason: z.string() })

export type BanReasonV3 = z.TypeOf<typeof BanReasonV3>
