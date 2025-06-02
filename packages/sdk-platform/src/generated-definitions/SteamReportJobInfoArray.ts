/*
 * Copyright (c) 2022-2025 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { z } from 'zod'
import { SteamReportJobInfo } from './SteamReportJobInfo.js'

export const SteamReportJobInfoArray = z.array(SteamReportJobInfo)

export interface SteamReportJobInfoArray extends z.TypeOf<typeof SteamReportJobInfoArray> {}
