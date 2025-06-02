/*
 * Copyright (c) 2022-2025 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { z } from 'zod'

export const DsHeartbeatRequest = z.object({ podName: z.string() })

export interface DsHeartbeatRequest extends z.TypeOf<typeof DsHeartbeatRequest> {}
