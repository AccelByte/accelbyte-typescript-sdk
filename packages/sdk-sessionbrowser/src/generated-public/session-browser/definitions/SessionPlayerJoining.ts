/*
 * Copyright (c) 2022-2023 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { z } from 'zod'

export const SessionPlayerJoining = z.object({ Date: z.string(), State: z.string(), UserID: z.string() })

export interface SessionPlayerJoining extends z.TypeOf<typeof SessionPlayerJoining> {}
