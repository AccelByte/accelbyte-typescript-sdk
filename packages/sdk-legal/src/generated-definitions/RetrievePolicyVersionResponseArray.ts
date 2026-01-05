/*
 * Copyright (c) 2022-2026 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { z } from 'zod'
import { RetrievePolicyVersionResponse } from './RetrievePolicyVersionResponse.js'

export const RetrievePolicyVersionResponseArray = z.array(RetrievePolicyVersionResponse)

export interface RetrievePolicyVersionResponseArray extends z.TypeOf<typeof RetrievePolicyVersionResponseArray> {}
