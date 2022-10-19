/*
 * Copyright (c) 2022 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { z } from 'zod'
import { RetrieveAcceptedAgreementResponse } from './RetrieveAcceptedAgreementResponse'

export const RetrieveAcceptedAgreementResponseArray = z.array(RetrieveAcceptedAgreementResponse)

export type RetrieveAcceptedAgreementResponseArray = z.TypeOf<typeof RetrieveAcceptedAgreementResponseArray>
