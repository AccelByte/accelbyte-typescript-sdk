/*
 * Copyright (c) 2022-2025 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { z } from 'zod'

export const CycleOverride = z.object({ cycleId: z.string().nullish(), maximum: z.number().nullish(), minimum: z.number().nullish() })

export interface CycleOverride extends z.TypeOf<typeof CycleOverride> {}
