/*
 * Copyright (c) 2022-2024 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { z } from 'zod'
import { AcquiringDs } from './AcquiringDs.js'

export const XRayAcquiringDsQueryResponse = z.object({ data: z.array(AcquiringDs) })

export interface XRayAcquiringDsQueryResponse extends z.TypeOf<typeof XRayAcquiringDsQueryResponse> {}
