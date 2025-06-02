/*
 * Copyright (c) 2022-2025 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { z } from 'zod'
import { FleetRegionalServerCounts } from './FleetRegionalServerCounts.js'
import { FleetServerInfoResponse } from './FleetServerInfoResponse.js'
import { PagingInfo } from './PagingInfo.js'

export const FleetServersResponse = z.object({
  paging: PagingInfo,
  regions: z.array(FleetRegionalServerCounts),
  servers: z.array(FleetServerInfoResponse)
})

export interface FleetServersResponse extends z.TypeOf<typeof FleetServersResponse> {}
