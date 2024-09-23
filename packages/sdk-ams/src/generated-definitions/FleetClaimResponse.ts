/*
 * Copyright (c) 2022-2024 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { z } from 'zod'

export const FleetClaimResponse = z.object({ ip: z.string(), ports: z.record(z.number().int()), region: z.string(), serverId: z.string() })

export interface FleetClaimResponse extends z.TypeOf<typeof FleetClaimResponse> {}
