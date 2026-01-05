/*
 * Copyright (c) 2022-2026 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { z } from 'zod'
import { RetrievePoliciesFromBasePolicyResponse } from './RetrievePoliciesFromBasePolicyResponse.js'

export const RetrievePoliciesFromBasePolicyResponseArray = z.array(RetrievePoliciesFromBasePolicyResponse)

export interface RetrievePoliciesFromBasePolicyResponseArray extends z.TypeOf<typeof RetrievePoliciesFromBasePolicyResponseArray> {}
