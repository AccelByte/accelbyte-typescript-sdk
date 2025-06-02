/*
 * Copyright (c) 2022-2025 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { z } from 'zod'

export const StatItemInc = z.object({ inc: z.number().nullish() })

export interface StatItemInc extends z.TypeOf<typeof StatItemInc> {}
