/*
 * Copyright (c) 2022-2026 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { z } from 'zod'
import { RewardInfo } from './RewardInfo.js'

export const RewardInfoArray = z.array(RewardInfo)

export interface RewardInfoArray extends z.TypeOf<typeof RewardInfoArray> {}
