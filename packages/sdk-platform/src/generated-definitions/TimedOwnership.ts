/*
 * Copyright (c) 2022-2025 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { z } from 'zod'

export const TimedOwnership = z.object({ endDate: z.string().nullish(), owned: z.boolean() })

export interface TimedOwnership extends z.TypeOf<typeof TimedOwnership> {}
