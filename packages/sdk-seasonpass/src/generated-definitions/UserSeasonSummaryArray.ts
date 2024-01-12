/*
 * Copyright (c) 2022-2024 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { z } from 'zod'
import { UserSeasonSummary } from './UserSeasonSummary.js'

export const UserSeasonSummaryArray = z.array(UserSeasonSummary)

export interface UserSeasonSummaryArray extends z.TypeOf<typeof UserSeasonSummaryArray> {}
