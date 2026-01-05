/*
 * Copyright (c) 2022-2026 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { z } from 'zod'
import { QoSServer } from './QoSServer.js'

export const QoSEndpointResponse = z.object({ servers: z.array(QoSServer) })

export interface QoSEndpointResponse extends z.TypeOf<typeof QoSEndpointResponse> {}
