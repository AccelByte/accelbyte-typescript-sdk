/*
 * Copyright (c) 2022-2026 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { z } from 'zod'
import { RetrievePolicyTypeResponse } from './RetrievePolicyTypeResponse.js'

export const RetrievePolicyTypeResponseArray = z.array(RetrievePolicyTypeResponse)

export interface RetrievePolicyTypeResponseArray extends z.TypeOf<typeof RetrievePolicyTypeResponseArray> {}
