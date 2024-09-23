/*
 * Copyright (c) 2022-2024 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { z } from 'zod'

export const XRayBulkTicketObservabilityResponse = z.object({ ticketIDs: z.array(z.string()) })

export interface XRayBulkTicketObservabilityResponse extends z.TypeOf<typeof XRayBulkTicketObservabilityResponse> {}
