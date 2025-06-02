/*
 * Copyright (c) 2022-2025 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { z } from 'zod'

export const ExternalFailureMetricRecord = z.object({ type: z.enum(['connectDS', 'getExternalDS']) })

export interface ExternalFailureMetricRecord extends z.TypeOf<typeof ExternalFailureMetricRecord> {}
