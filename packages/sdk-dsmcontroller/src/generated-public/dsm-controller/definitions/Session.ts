/*
 * Copyright (c) 2022-2023 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { z } from 'zod'
import { Server } from './Server.js'

export const Session = z.object({ Server, id: z.string(), namespace: z.string(), provider: z.string(), region: z.string() })

export interface Session extends z.TypeOf<typeof Session> {}
