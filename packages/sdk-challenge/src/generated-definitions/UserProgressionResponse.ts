/*
 * Copyright (c) 2022-2026 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { z } from 'zod'
import { GoalProgressionResponse } from './GoalProgressionResponse.js'
import { Pagination } from './Pagination.js'
import { UserProgressionResponseMeta } from './UserProgressionResponseMeta.js'

export const UserProgressionResponse = z.object({
  data: z.array(GoalProgressionResponse),
  meta: UserProgressionResponseMeta,
  paging: Pagination
})

export interface UserProgressionResponse extends z.TypeOf<typeof UserProgressionResponse> {}
