/*
 * Copyright (c) 2022 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { z } from 'zod'
import { BanV3 } from './BanV3'

export const BansV3 = z.object({ bans: z.array(BanV3) })

export type BansV3 = z.TypeOf<typeof BansV3>
