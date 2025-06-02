/*
 * Copyright (c) 2022-2025 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { z } from 'zod'
import { Paging } from './Paging.js'
import { RetrieveUserAcceptedAgreementResponse } from './RetrieveUserAcceptedAgreementResponse.js'

export const PagedRetrieveUserAcceptedAgreementResponse = z.object({
  data: z.array(RetrieveUserAcceptedAgreementResponse).nullish(),
  paging: Paging.nullish()
})

export interface PagedRetrieveUserAcceptedAgreementResponse extends z.TypeOf<typeof PagedRetrieveUserAcceptedAgreementResponse> {}
