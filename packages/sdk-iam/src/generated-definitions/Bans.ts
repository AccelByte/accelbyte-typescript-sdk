/*
 * Copyright (c) 2022-2025 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { z } from 'zod'
import { Ban } from './Ban.js'

export const Bans = z.object({ Bans: z.array(Ban) })

export interface Bans extends z.TypeOf<typeof Bans> {}
