/*
 * Copyright (c) 2022-2024 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { z } from 'zod'
import { AcquiringDsWaitTime } from './AcquiringDsWaitTime.js'

export const XRayAcquiringDsWaitTimeQueryResponse = z.object({ data: z.array(AcquiringDsWaitTime) })

export interface XRayAcquiringDsWaitTimeQueryResponse extends z.TypeOf<typeof XRayAcquiringDsWaitTimeQueryResponse> {}
