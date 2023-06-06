/*
 * Copyright (c) 2022-2023 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { z } from 'zod'
import { TierInput } from './TierInput.js'

export const TierCreate = z.object({ index: z.number().int().nullish(), quantity: z.number().int().nullish(), tier: TierInput.nullish() })

export interface TierCreate extends z.TypeOf<typeof TierCreate> {}
