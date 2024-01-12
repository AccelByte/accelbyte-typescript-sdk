/*
 * Copyright (c) 2022-2024 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { z } from 'zod'
import { RetrieveAcceptedAgreementResponse } from './RetrieveAcceptedAgreementResponse.js'

export const UserAgreementsResponse = z.object({
  agreements: z.array(RetrieveAcceptedAgreementResponse).nullish(),
  userId: z.string().nullish()
})

export interface UserAgreementsResponse extends z.TypeOf<typeof UserAgreementsResponse> {}
