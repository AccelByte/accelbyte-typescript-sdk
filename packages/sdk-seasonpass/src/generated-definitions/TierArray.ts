/*
 * Copyright (c) 2022-2024 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { z } from 'zod'
import { Tier } from './Tier.js'

export const TierArray = z.array(Tier)

export interface TierArray extends z.TypeOf<typeof TierArray> {}
