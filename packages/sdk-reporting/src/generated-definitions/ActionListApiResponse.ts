/*
 * Copyright (c) 2022-2026 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { z } from 'zod'
import { ActionApiResponse } from './ActionApiResponse.js'

export const ActionListApiResponse = z.object({ data: z.array(ActionApiResponse) })

export interface ActionListApiResponse extends z.TypeOf<typeof ActionListApiResponse> {}
