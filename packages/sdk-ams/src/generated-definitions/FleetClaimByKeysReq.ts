/*
 * Copyright (c) 2022-2024 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { z } from 'zod'

export const FleetClaimByKeysReq = z.object({ claimKeys: z.array(z.string()), regions: z.array(z.string()), sessionId: z.string() })

export interface FleetClaimByKeysReq extends z.TypeOf<typeof FleetClaimByKeysReq> {}
