/*
 * Copyright (c) 2022-2024 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { z } from 'zod'
import { GoalResponse } from './GoalResponse.js'
import { Pagination } from './Pagination.js'

export const GetGoalsResponse = z.object({ data: z.array(GoalResponse), paging: Pagination })

export interface GetGoalsResponse extends z.TypeOf<typeof GetGoalsResponse> {}
