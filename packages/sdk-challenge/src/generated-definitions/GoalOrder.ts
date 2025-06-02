/*
 * Copyright (c) 2022-2025 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { z } from 'zod'
import { GoalResponse } from './GoalResponse.js'

export const GoalOrder = z.object({ goal: GoalResponse, order: z.number().int() })

export interface GoalOrder extends z.TypeOf<typeof GoalOrder> {}
