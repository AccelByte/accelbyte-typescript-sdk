/*
 * Copyright (c) 2022 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { z } from 'zod'
import { Ban } from './Ban'

export const Bans = z.object({ Bans: z.array(Ban) })

export type Bans = z.TypeOf<typeof Bans>
