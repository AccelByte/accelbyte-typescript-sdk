/*
 * Copyright (c) 2022-2026 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { z } from 'zod'
import { BanV3 } from './BanV3.js'

export const BansV3 = z.object({ bans: z.array(BanV3) })

export interface BansV3 extends z.TypeOf<typeof BansV3> {}
