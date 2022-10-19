/*
 * Copyright (c) 2022 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { z } from 'zod'
import { RetrievePolicyPublicResponse } from './RetrievePolicyPublicResponse'

export const RetrievePolicyPublicResponseArray = z.array(RetrievePolicyPublicResponse)

export type RetrievePolicyPublicResponseArray = z.TypeOf<typeof RetrievePolicyPublicResponseArray>
