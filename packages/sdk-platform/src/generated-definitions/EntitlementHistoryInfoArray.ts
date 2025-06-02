/*
 * Copyright (c) 2022-2025 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { z } from 'zod'
import { EntitlementHistoryInfo } from './EntitlementHistoryInfo.js'

export const EntitlementHistoryInfoArray = z.array(EntitlementHistoryInfo)

export interface EntitlementHistoryInfoArray extends z.TypeOf<typeof EntitlementHistoryInfoArray> {}
