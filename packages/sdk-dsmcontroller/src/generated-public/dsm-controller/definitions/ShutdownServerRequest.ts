/*
 * Copyright (c) 2022-2023 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { z } from 'zod'

export const ShutdownServerRequest = z.object({ kill_me: z.boolean(), pod_name: z.string() })

export interface ShutdownServerRequest extends z.TypeOf<typeof ShutdownServerRequest> {}
