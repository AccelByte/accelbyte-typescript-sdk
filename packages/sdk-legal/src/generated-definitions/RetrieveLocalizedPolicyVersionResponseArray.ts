/*
 * Copyright (c) 2022-2025 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { z } from 'zod'
import { RetrieveLocalizedPolicyVersionResponse } from './RetrieveLocalizedPolicyVersionResponse.js'

export const RetrieveLocalizedPolicyVersionResponseArray = z.array(RetrieveLocalizedPolicyVersionResponse)

export interface RetrieveLocalizedPolicyVersionResponseArray extends z.TypeOf<typeof RetrieveLocalizedPolicyVersionResponseArray> {}
