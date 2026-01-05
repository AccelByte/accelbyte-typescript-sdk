/*
 * Copyright (c) 2022-2026 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { z } from 'zod'
import { PublicReasonResponse } from './PublicReasonResponse.js'

export const AdminAllReasonsResponse = z.object({ data: z.array(PublicReasonResponse) })

export interface AdminAllReasonsResponse extends z.TypeOf<typeof AdminAllReasonsResponse> {}
