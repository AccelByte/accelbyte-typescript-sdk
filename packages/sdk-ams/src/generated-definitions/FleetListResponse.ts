/*
 * Copyright (c) 2022-2024 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { z } from 'zod'
import { FleetListItemResponse } from './FleetListItemResponse.js'

export const FleetListResponse = z.object({ fleets: z.array(FleetListItemResponse) })

export interface FleetListResponse extends z.TypeOf<typeof FleetListResponse> {}
