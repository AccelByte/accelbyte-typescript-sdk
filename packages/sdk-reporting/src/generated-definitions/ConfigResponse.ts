/*
 * Copyright (c) 2022-2025 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { z } from 'zod'
import { ReportingLimit } from './ReportingLimit.js'

export const ConfigResponse = z.object({ namespace: z.string(), reportingLimit: ReportingLimit, updatedAt: z.string() })

export interface ConfigResponse extends z.TypeOf<typeof ConfigResponse> {}
