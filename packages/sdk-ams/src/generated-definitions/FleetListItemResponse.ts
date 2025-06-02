/*
 * Copyright (c) 2022-2025 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { z } from 'zod'
import { FleetRegionalServerCounts } from './FleetRegionalServerCounts.js'

export const FleetListItemResponse = z.object({
  active: z.boolean(),
  counts: z.array(FleetRegionalServerCounts),
  fallbackFleet: z.string(),
  id: z.string(),
  image: z.string(),
  instanceProvider: z.string(),
  isLocal: z.boolean(),
  name: z.string(),
  onDemand: z.boolean(),
  primaryFleet: z.string(),
  regions: z.array(z.string())
})

export interface FleetListItemResponse extends z.TypeOf<typeof FleetListItemResponse> {}
