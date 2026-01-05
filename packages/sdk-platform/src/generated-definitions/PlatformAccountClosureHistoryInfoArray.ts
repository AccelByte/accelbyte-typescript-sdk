/*
 * Copyright (c) 2022-2026 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { z } from 'zod'
import { PlatformAccountClosureHistoryInfo } from './PlatformAccountClosureHistoryInfo.js'

export const PlatformAccountClosureHistoryInfoArray = z.array(PlatformAccountClosureHistoryInfo)

export interface PlatformAccountClosureHistoryInfoArray extends z.TypeOf<typeof PlatformAccountClosureHistoryInfoArray> {}
