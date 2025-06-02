/*
 * Copyright (c) 2022-2025 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { z } from 'zod'
import { FleetServerHistoryEventResponse } from './FleetServerHistoryEventResponse.js'

export const FleetServerHistoryResponse = z.object({ events: z.array(FleetServerHistoryEventResponse) })

export interface FleetServerHistoryResponse extends z.TypeOf<typeof FleetServerHistoryResponse> {}
