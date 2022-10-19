/*
 * Copyright (c) 2022 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { z } from 'zod'
import { Paging } from './Paging'
import { RetrieveUserAcceptedAgreementResponse } from './RetrieveUserAcceptedAgreementResponse'

export const PagedRetrieveUserAcceptedAgreementResponse = z.object({
  data: z.array(RetrieveUserAcceptedAgreementResponse).nullish(),
  paging: Paging.nullish()
})

export type PagedRetrieveUserAcceptedAgreementResponse = z.TypeOf<typeof PagedRetrieveUserAcceptedAgreementResponse>
