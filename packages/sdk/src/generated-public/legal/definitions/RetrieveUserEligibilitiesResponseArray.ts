/*
 * Copyright (c) 2022 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { z } from 'zod'
import { RetrieveUserEligibilitiesResponse } from './RetrieveUserEligibilitiesResponse'

export const RetrieveUserEligibilitiesResponseArray = z.array(RetrieveUserEligibilitiesResponse)

export type RetrieveUserEligibilitiesResponseArray = z.TypeOf<typeof RetrieveUserEligibilitiesResponseArray>
