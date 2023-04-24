/*
 * Copyright (c) 2022-2023 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { z } from 'zod'

export const HeartbeatRequest = z.object({ ip: z.string(), port: z.number().int(), region: z.string() })

export interface HeartbeatRequest extends z.TypeOf<typeof HeartbeatRequest> {}
