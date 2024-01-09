/*
 * Copyright (c) 2022-2024 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { z } from 'zod'

export const ProposedProposal = z.object({
  backfillID: z.string().nullish(),
  proposalID: z.string().nullish(),
  status: z.string().nullish()
})

export interface ProposedProposal extends z.TypeOf<typeof ProposedProposal> {}
