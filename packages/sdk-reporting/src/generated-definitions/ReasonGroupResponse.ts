/*
 * Copyright (c) 2022-2026 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { z } from 'zod'
import { AdminReasonResponse } from './AdminReasonResponse.js'

export const ReasonGroupResponse = z.object({ id: z.string(), reasons: z.array(AdminReasonResponse).nullish(), title: z.string() })

export interface ReasonGroupResponse extends z.TypeOf<typeof ReasonGroupResponse> {}
