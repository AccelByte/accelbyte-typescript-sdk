/*
 * Copyright (c) 2022-2023 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { z } from 'zod'
import { BanReasonV3 } from './BanReasonV3'

export const BanReasonsV3 = z.object({ reasons: z.array(BanReasonV3) })

export interface BanReasonsV3 extends z.TypeOf<typeof BanReasonsV3> {}
