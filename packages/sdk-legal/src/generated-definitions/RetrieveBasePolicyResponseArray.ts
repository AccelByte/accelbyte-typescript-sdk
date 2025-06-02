/*
 * Copyright (c) 2022-2025 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { z } from 'zod'
import { RetrieveBasePolicyResponse } from './RetrieveBasePolicyResponse.js'

export const RetrieveBasePolicyResponseArray = z.array(RetrieveBasePolicyResponse)

export interface RetrieveBasePolicyResponseArray extends z.TypeOf<typeof RetrieveBasePolicyResponseArray> {}
