/*
 * Copyright (c) 2022-2024 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { z } from 'zod'
import { PortConfiguration } from './PortConfiguration.js'

export const FleetServerInfoResponse = z.object({
  createdAt: z.string(),
  fleetId: z.string(),
  fleetName: z.string(),
  imageCmd: z.string(),
  imageId: z.string(),
  instanceType: z.string(),
  ipAddress: z.string(),
  portConfiguration: z.array(PortConfiguration),
  ports: z.record(z.number().int()),
  region: z.string(),
  serverConfiguration: z.string(),
  serverId: z.string(),
  sessionId: z.string(),
  status: z.string()
})

export interface FleetServerInfoResponse extends z.TypeOf<typeof FleetServerInfoResponse> {}
