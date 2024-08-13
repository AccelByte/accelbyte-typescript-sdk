/*
 * Copyright (c) 2022-2024 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { z } from 'zod'
import { XRayMatchPoolResult } from './XRayMatchPoolResult.js'

export const XRayMatchPoolQueryResponse = z.object({ data: z.array(XRayMatchPoolResult) })

export interface XRayMatchPoolQueryResponse extends z.TypeOf<typeof XRayMatchPoolQueryResponse> {}
