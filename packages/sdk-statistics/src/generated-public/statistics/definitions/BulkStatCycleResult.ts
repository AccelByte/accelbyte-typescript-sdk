/*
 * Copyright (c) 2022-2023 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { z } from 'zod'
import { StatCycleInfo } from './StatCycleInfo.js'

export const BulkStatCycleResult = z.object({ data: z.array(StatCycleInfo) })

export interface BulkStatCycleResult extends z.TypeOf<typeof BulkStatCycleResult> {}
