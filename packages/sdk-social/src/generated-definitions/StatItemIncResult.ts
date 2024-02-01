/*
 * Copyright (c) 2022-2024 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { z } from 'zod'

export const StatItemIncResult = z.object({ currentValue: z.number() })

export interface StatItemIncResult extends z.TypeOf<typeof StatItemIncResult> {}
