/*
 * Copyright (c) 2022-2024 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { z } from 'zod'

export const TierInput = z.object({ requiredExp: z.number().int().nullish(), rewards: z.record(z.array(z.string())).nullish() })

export interface TierInput extends z.TypeOf<typeof TierInput> {}
