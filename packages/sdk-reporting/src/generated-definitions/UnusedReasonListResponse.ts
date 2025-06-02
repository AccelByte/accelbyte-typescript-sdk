/*
 * Copyright (c) 2022-2025 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { z } from 'zod'
import { PublicReasonResponse } from './PublicReasonResponse.js'

export const UnusedReasonListResponse = z.object({ reasons: z.array(PublicReasonResponse) })

export interface UnusedReasonListResponse extends z.TypeOf<typeof UnusedReasonListResponse> {}
