/*
 * Copyright (c) 2022-2026 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { z } from 'zod'
import { RetrievePolicyPublicResponse } from './RetrievePolicyPublicResponse.js'

export const RetrievePolicyPublicResponseArray = z.array(RetrievePolicyPublicResponse)

export interface RetrievePolicyPublicResponseArray extends z.TypeOf<typeof RetrievePolicyPublicResponseArray> {}
