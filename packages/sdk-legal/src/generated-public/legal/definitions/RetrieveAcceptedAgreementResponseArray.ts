/*
 * Copyright (c) 2022-2023 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { z } from 'zod'
import { RetrieveAcceptedAgreementResponse } from './RetrieveAcceptedAgreementResponse.js'

export const RetrieveAcceptedAgreementResponseArray = z.array(RetrieveAcceptedAgreementResponse)

export interface RetrieveAcceptedAgreementResponseArray extends z.TypeOf<typeof RetrieveAcceptedAgreementResponseArray> {}
