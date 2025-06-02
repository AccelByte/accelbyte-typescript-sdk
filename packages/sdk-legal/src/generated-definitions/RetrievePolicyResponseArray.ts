/*
 * Copyright (c) 2022-2025 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { z } from 'zod'
import { RetrievePolicyResponse } from './RetrievePolicyResponse.js'

export const RetrievePolicyResponseArray = z.array(RetrievePolicyResponse)

export interface RetrievePolicyResponseArray extends z.TypeOf<typeof RetrievePolicyResponseArray> {}
