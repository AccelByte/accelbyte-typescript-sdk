/*
 * Copyright (c) 2022-2024 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { z } from 'zod'
import { XRayTicketObservabilityRequest } from './XRayTicketObservabilityRequest.js'

export const XRayBulkTicketObservabilityRequest = z.object({ ticketObservabilities: z.array(XRayTicketObservabilityRequest) })

export interface XRayBulkTicketObservabilityRequest extends z.TypeOf<typeof XRayBulkTicketObservabilityRequest> {}
