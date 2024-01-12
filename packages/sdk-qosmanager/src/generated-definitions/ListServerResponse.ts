/*
 * Copyright (c) 2022-2024 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { z } from 'zod'
import { Server } from './Server.js'

export const ListServerResponse = z.object({ servers: z.array(Server) })

export interface ListServerResponse extends z.TypeOf<typeof ListServerResponse> {}
